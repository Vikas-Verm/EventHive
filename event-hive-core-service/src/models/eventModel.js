import pool from "../configs/db.js";

export const createEvent = async (
  venue_id,
  title,
  description,
  date,
  price
) => {
  const result = await pool.query(
    "INSERT INTO events (venue_id,title,description,date,price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [venue_id, title, description, date, price]
  );
  return result.rows[0];
};

export const getAllEvent = async ({
  page = 1,
  limit = 10,
  search = "",
  sortBy = "date",
}) => {
  const offset = (page - 1) * limit;
  const query = `select v.name as venue,v.location as location,e.id as id, e.title as title, e.description as description,e.date as date,e.price as price from events e JOIN venues v on e.venue_id=v.id where e.title ilike $1 or e.description ilike $1 order by e.${sortBy} asc limit $2 offset $3`;
  const values = [`%${search}%`, limit, offset];

  const result = await pool.query(query, values);

  const countQuery = `
  SELECT COUNT(*) FROM events e 
  WHERE e.title ILIKE $1 OR e.description ILIKE $1
`;
  const countResult = await pool.query(countQuery, [`%${search}%`]);
  return {
    events: result.rows,
    total: parseInt(countResult.rows[0].count),
    page: parseInt(page),
    totalPages: Math.ceil(countResult.rows[0].count / limit),
  };
};

export const getEventById = async (id) => {
  const result = await pool.query(
    "select e.*,v.name as venue_name,v.location as venue_location,v.capacity from events e INNER JOIN venues v ON e.venue_id=v.id where e.id=$1",
    [id]
  );
  return result.rows[0];
};
