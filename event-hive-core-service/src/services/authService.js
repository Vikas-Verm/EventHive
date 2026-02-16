import { createUser, findUserByEmail } from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcryptjs";
export const registerUser = async (firstName, lastName, email, password) => {
  const userExist = await findUserByEmail(email);
  if (userExist) {
    throw new Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await createUser(firstName, lastName, email, hashedPassword);
  return newUser;
};

export const getUser = async (email) => {
  const userData = await findUserByEmail(email);
  userData.password = bcrypt.hash(userData.password);
  return userData || {};
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const varify = bcrypt.compare(password, user.password_hash);
  if (varify) {
    const token = generateToken(user.id, user.role, user.email);
    delete user.password_hash;
    return { user, token };
  } else {
    throw new Error("Invalid credentials");
  }
};
