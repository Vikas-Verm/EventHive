import {
  createBookingsTransaction,
  getUserBookings,
} from "../models/bookingModel.js";

export const createBookings = async (user_id, event_id, ticket_id) => {
  return await createBookingsTransaction(user_id, event_id, ticket_id);
};

export const getAllBookings = async (user_id) => {
  return await getUserBookings(user_id);
};
