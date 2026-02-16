import express from "express";
import {
  registerUserHandler,
  loginUserHandler,
  getAllUsersHandlers,
  getUserByIdHandlers,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUserHandler);
router.get("/user/:id", getUserByIdHandlers);
router.get("/users", getAllUsersHandlers);
router.post("/login", loginUserHandler);

export default router;
