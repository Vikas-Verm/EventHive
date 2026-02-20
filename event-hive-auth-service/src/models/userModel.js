import pool from "../configs/db.js";

export const createUser = async (
  firstName,
  lastName,
  email,
  role,
  passwordHash
) => {
  const query = `
   insert into users (first_name,last_name,email,role,password_hash) values ($1,$2,$3,$4,$5) returning id, first_name, last_name, email, role, created_at
  `;
  const values = [firstName, lastName, email, role, passwordHash];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

export const fetchUsers = async ({ page, limit, search, sortBy }) => {
  const offset = (page - 1) * limit;
  const query = `select id, first_name, last_name, email, role from users where first_name ilike $1  order by ${sortBy} limit $2 offset $3`;
  const values = [`%${search}%`, limit, offset];
  const result = await pool.query(query, values);
  return result.rows;
};

export const fetchUserById = async (id) => {
  const query = `select id,first_name,last_name,email,role from users where id=$1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
