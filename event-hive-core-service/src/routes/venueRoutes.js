import express from "express";
import { createVenueHandler } from "../controllers/venueController.js";
import { authToken, authorizeRole } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only 'admin' can create venues
router.post("/add", authToken, authorizeRole("admin"), createVenueHandler);

export default router;
