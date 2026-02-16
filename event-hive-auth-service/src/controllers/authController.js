import {
  registerUser,
  userLogin,
  getAllUsers,
  getUserById,
} from "../services/authService.js";

export const registerUserHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, role, password } = req.body;
    const response = await registerUser(
      firstName,
      lastName,
      email,
      role,
      password
    );
    res
      .status(201)
      .json({ message: "User register successfully", data: response || {} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userLogin(email, password);
    res.status(200).json({ message: "", data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllUsersHandlers = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";
    const sortBy = req.query.sortBy || "date";
    const response = await getAllUsers({ page, limit, search, sortBy });
    res.status(200).json({ message: "", data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getUserByIdHandlers = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserById(id);
    res.status(200).json({ message: "", data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
