import express from "express";
import { processPaymentHandler } from "../controllers/paymentController.js";
import { authToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", authToken, processPaymentHandler);

export default router;
