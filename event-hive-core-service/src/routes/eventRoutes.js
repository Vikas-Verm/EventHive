import express from "express";
import {
  createEventHandler,
  fetchAllEventHandler,
  fetchEventByIdHandler,
} from "../controllers/eventController.js";
import { authToken, authorizeRole } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /events:
 * get:
 * summary: Retrieve a list of events
 * tags: [Events]
 * parameters:
 * - in: query
 * name: page
 * schema:
 * type: integer
 * description: Page number
 * - in: query
 * name: limit
 * schema:
 * type: integer
 * description: Number of items per page
 * responses:
 * 200:
 * description: A list of events
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * message:
 * type: string
 * data:
 * type: array
 * 500:
 * description: Server error
 */
router.get("/", fetchAllEventHandler);

router.post(
  "/add",
  authToken,
  authorizeRole("admin", "organizer"),
  createEventHandler
);
router.get(
  "/:id",
  authToken,
  authorizeRole("admin", "organizer", "customer"),
  fetchEventByIdHandler
);

export default router;
