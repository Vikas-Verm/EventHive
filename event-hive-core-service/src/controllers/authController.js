import { getUser, registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(500).json("All fields are required");
    }
    const response = await registerUser(firstName, lastName, email, password);
    res
      .status(201)
      .json({ message: "User register successfully", data: response });
  } catch (error) {
    if (error.message === "Email already in use") {
      return res.status(400).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUserData = async (req, res) => {
  const email = req.params.email;
  if (!email) {
    res.status(500).json("Email is required");
  }
  const response = await getUser(email);
  res
    .status(200)
    .json({ message: "User successfully fetched", data: response });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const response = await loginUser(email, password);
    res.status(200).json({
      message: "Login successful",
      token: response.token,
      user: response.user,
    });
  } catch (error) {
    if (error.message === "Invalid credentials") {
      return res.status(400).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
