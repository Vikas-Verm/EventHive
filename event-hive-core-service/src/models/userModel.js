import pool from "../configs/db.js";

export const createUser = async (firstName, lastName, email, passwordHash) => {
  const query = `
    INSERT INTO users (first_name, last_name, email, password_hash)
    VALUES ($1, $2, $3, $4)
    RETURNING id, first_name, last_name, email, role, created_at;
  `;
  const values = [firstName, lastName, email, passwordHash];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
