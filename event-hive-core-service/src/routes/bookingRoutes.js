import express from "express";
import {
  creatBookingHandlers,
  getAllBookingHandlers,
} from "../controllers/bookingController.js";
import { authToken, authorizeRole } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post(
  "/",
  authToken,
  authorizeRole("admin", "customer", "organizer"),
  creatBookingHandlers
);
router.get("/my-bookings", authToken, getAllBookingHandlers);
export default router;
