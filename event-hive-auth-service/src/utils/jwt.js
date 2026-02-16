import jwt from "jsonwebtoken";

export const generateToken = (userId, role, email) => {
  return jwt.sign(
    { id: userId, role: role, email: email },
    process.env.JWT_SECRET || "test_secret",
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "30d",
    }
  );
};
