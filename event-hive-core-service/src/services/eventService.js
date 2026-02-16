import {
  createEvent,
  getAllEvent,
  getEventById,
} from "../models/eventModel.js";
import pool from "../configs/db.js";
export const addEvent = async (eventData) => {
  const query = "select * from venues where id=$1";
  const result = await pool.query(query, [eventData.venue_id]);
  if (!result) {
    throw new Error("Venue not found");
  }
  return await createEvent(
    eventData.venue_id,
    eventData.title,
    eventData.description,
    eventData.date,
    eventData.price
  );
};

export const fetchAllEvent = async ({ page, limit, search, sortBy }) => {
  return await getAllEvent({ page, limit, search, sortBy });
};

export const fetchEventById = async (id) => {
  const event = await getEventById(id);
  if (!event) {
    throw new Error("Event not found");
  }
  return event;
};
