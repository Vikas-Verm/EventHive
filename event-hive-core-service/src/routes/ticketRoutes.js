import express from "express";
import {
  generateTicketsHandler,
  getAvailabilityHandler,
} from "../controllers/ticketController.js";
import { authToken, authorizeRole } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/add",
  authToken,
  authorizeRole("admin", "organizer"),
  generateTicketsHandler
);

router.get("/:eventId", getAvailabilityHandler);

export default router;
