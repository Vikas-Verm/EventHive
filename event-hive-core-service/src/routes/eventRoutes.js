import express from "express";
import {
  createEventHandler,
  fetchAllEventHandler,
  fetchEventByIdHandler,
} from "../controllers/eventController.js";
import { authToken, authorizeRole } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post(
  "/add",
  authToken,
  authorizeRole("admin", "organizer"),
  createEventHandler
);
router.get(
  "/",
  authToken,
  authorizeRole("admin", "organizer", "customer"),
  fetchAllEventHandler
);
router.get(
  "/:id",
  authToken,
  authorizeRole("admin", "organizer", "customer"),
  fetchEventByIdHandler
);
export default router;
