import { createBookings, getAllBookings } from "../services/bookingService.js";
export const creatBookingHandlers = async (req, res) => {
  try {
    const { event_id, ticket_id } = req.body;
    const user_id = req.user.id;
    const response = await createBookings(user_id, event_id, ticket_id);
    res.status(201).json({ message: "Booking confirmed", data: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBookingHandlers = async (req, res) => {
  try {
    const user_id = req.user.id;
    const response = await getAllBookings(user_id);
    res.status(201).json({ message: "", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
