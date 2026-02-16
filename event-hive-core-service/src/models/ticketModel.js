import pool from "../configs/db.js";

export const generateTicketsForEvent = async (eventId, price, totalSeats) => {
  const query = `
    INSERT INTO tickets (event_id, seat_number, price, status)
    SELECT 
      $1, 
      'Seat-' || generate_series(1, $2), 
      $3, 
      'available'
    RETURNING id;
  `;
  const result = await pool.query(query, [eventId, totalSeats, price]);
  return result.rowCount;
};

export const getAvailableTickets = async (eventId) => {
  const query = `
    SELECT * FROM tickets 
    WHERE event_id = $1 AND status = 'available';
  `;
  const result = await pool.query(query, [eventId]);
  return result.rows;
};
