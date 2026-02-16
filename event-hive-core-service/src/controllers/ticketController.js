import {
  initializeInventory,
  checkAvailability,
} from "../services/ticketService.js";

export const generateTicketsHandler = async (req, res) => {
  try {
    const { eventId, price, totalSeats } = req.body;
    const count = await initializeInventory(eventId, price, totalSeats);
    res
      .status(201)
      .json({ message: `Successfully generated ${count} tickets` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAvailabilityHandler = async (req, res) => {
  try {
    const tickets = await checkAvailability(req.params.eventId);
    res.status(200).json({
      count: tickets.length,
      tickets,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
