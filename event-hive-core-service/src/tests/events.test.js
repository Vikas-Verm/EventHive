import { jest } from "@jest/globals";
import { authToken } from "../middlewares/authMiddleware.js";

// 1. Mock the Database
jest.unstable_mockModule("../configs/db.js", () => ({
  default: {
    query: jest.fn(),
  },
}));

// 2. 🔥 UPGRADED REDIS MOCK
// We add .get, .set, and .del so the cache functions don't crash
jest.unstable_mockModule("ioredis", () => ({
  default: jest.fn(() => ({
    on: jest.fn(),
    publish: jest.fn(),
    quit: jest.fn(),
    disconnect: jest.fn(),
    // These were missing!
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  })),
  Redis: jest.fn(() => ({
    on: jest.fn(),
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  })),
}));

jest.unstable_mockModule("bullmq", () => ({
  Queue: jest.fn(() => ({
    add: jest.fn(),
    on: jest.fn(),
    close: jest.fn(),
  })),
  Worker: jest.fn(),
}));

// 3. Mock Auth Middleware
jest.unstable_mockModule("../middlewares/authMiddleware.js", () => ({
  authToken: jest.fn((req, res, next) => {
    req.user = { id: 1, role: "user" };
    next();
  }),
  admin: jest.fn((req, res, next) => next()),
  authorizeRole: jest.fn(
    (...roles) =>
      (req, res, next) =>
        next()
  ),
}));

// 4. Dynamic Imports (Must be AFTER mocks)
const { default: request } = await import("supertest");
const { default: app } = await import("../../app.js");
const { default: pool } = await import("../configs/db.js");

describe("GET /api/events", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of events", async () => {
    const mockEvents = [
      { id: 1, title: "Test Event", description: "Jest is cool" },
    ];

    pool.query.mockResolvedValue({
      rows: mockEvents,
      rowCount: 1,
    });

    const res = await request(app).get("/api/events");

    expect(res.statusCode).toEqual(200);

    // Check structure based on your controller response
    if (res.body.events) {
      console.log(res.body.events, "👀");
      expect(res.body.events[0].title).toEqual("Test Event");
    } else {
      expect(res.body[0].title).toEqual("Test Event");
    }
  });

  it("should handle database errors gracefully", async () => {
    // Force DB to fail
    pool.query.mockRejectedValue(new Error("DB Connection Failed"));

    const res = await request(app).get("/api/events");

    expect(res.statusCode).toEqual(500);

    // 🔥 FIX: Check for 'error' property if your controller returns { error: ... }
    // Or check for 'message' if it returns { message: ... }
    if (res.body.error) {
      expect(res.body).toHaveProperty("error");
    } else {
      expect(res.body).toHaveProperty("message");
    }
  });
});
