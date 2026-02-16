// A simple test to prove CI works
describe("Sanity Check", () => {
  test("should verify that 1 + 1 equals 2", () => {
    expect(1 + 1).toBe(2);
  });
});

// If you want to test a real utility, verify your JWT logic (Mocked)
import { generateToken } from "../utils/jwt.js";

describe("JWT Utility", () => {
  test("should return a token string", () => {
    const token = generateToken({
      id: "123",
      role: "admin",
      email: "admin@gmail.com",
    });
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(10);
  });
});
