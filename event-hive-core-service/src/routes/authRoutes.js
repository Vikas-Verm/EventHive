import express from "express";
import { getUserData, login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.get("/user/:email", getUserData);
router.post("/login", login);

export default router;
