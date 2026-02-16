import {
  generateTicketsForEvent,
  getAvailableTickets,
} from "../models/ticketModel.js";

export const initializeInventory = async (eventId, price, totalSeats) => {
  const existing = await getAvailableTickets(eventId);
  if (existing.length > 0) {
    throw new Error("Tickets already generated for this event");
  }

  return await generateTicketsForEvent(eventId, price, totalSeats);
};

export const checkAvailability = async (eventId) => {
  return await getAvailableTickets(eventId);
};
