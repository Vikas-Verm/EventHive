import {
  addEvent,
  fetchAllEvent,
  fetchEventById,
} from "../services/eventService.js";
import { getCache, setCache, clearCache } from "../utils/cache.js";
export const createEventHandler = async (req, res) => {
  try {
    const response = await addEvent(req.body);
    await clearCache("events:page_1:limit_10:search_:sort_date");
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
    const cacheKey = `events:page_${page}:limit_${limit}:search_${search}:sort_${sortBy}`;

    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      console.log("⚡ Serving from Redis Cache");
      return res.status(200).json(cachedData);
    }

    const response = await fetchAllEvent({ page, limit, search, sortBy });
    await setCache(cacheKey, response, 3600);
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
