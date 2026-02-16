import { addNewVenue } from "../services/venueService.js";

export const createVenueHandler = async (req, res) => {
  try {
    const venue = await addNewVenue(req.body);
    res.status(201).json(venue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
