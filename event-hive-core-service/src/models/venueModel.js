import pool from "../configs/db.js";

export const createVenue = async (name, location, capacity) => {
  const result = await pool.query(
    "INSERT INTO venues (name, location, capacity) VALUES ($1, $2, $3) RETURNING *",
    [name, location, capacity]
  );
  return result.rows[0];
};
