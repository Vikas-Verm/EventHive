import {
  addEvent,
  fetchAllEvent,
  fetchEventById,
} from "../services/eventService.js";

export const createEventHandler = async (req, res) => {
  try {
    const response = await addEvent(req.body);
    res
      .status(201)
      .json({ message: "Event added Successfully", data: response || {} });
  } catch (error) {
    if (error.message === "Venue not found") {
      return res.status(400).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const fetchAllEventHandler = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";
    const sortBy = req.query.sortBy || "date";
    const response = await fetchAllEvent({ page, limit, search, sortBy });
    res
      .status(200)
      .json({ message: "Event fetched Successfully", data: response || {} });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const fetchEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await fetchEventById(id);
    res
      .status(200)
      .json({ message: "Event fetched Successfully", data: response || {} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
