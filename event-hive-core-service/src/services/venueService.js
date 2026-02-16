import { createVenue } from "../models/venueModel.js";

export const addNewVenue = async (venueData) => {
  if (venueData.capacity < 10) {
    throw new Error("Venue capacity must be at least 10");
  }
  return await createVenue(
    venueData.name,
    venueData.location,
    venueData.capacity
  );
};
