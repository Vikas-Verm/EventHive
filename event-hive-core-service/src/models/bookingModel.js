import pool from "../configs/db.js";

export const createBookingsTransaction = async (
  user_id,
  event_id,
  ticket_id
) => {
  const client = await pool.connect();
  try {
    await client.query("begin");
    const ticketCheck = await client.query(
      "select id, price,status from tickets where id=$1 and status='available' for update",
      [ticket_id]
    );
    if (ticketCheck.rows.length === 0) {
      throw new Error("Ticket is no longer available");
    }
    await client.query(
      "update tickets set status='sold',user_id=$1 where id=$2",
      [user_id, ticket_id]
    );
    const bookingResult = await client.query(
      "insert into bookings (user_id,event_id,ticket_id,status) values ($1,$2,$3,$4) returning *",
      [user_id, event_id, ticket_id, "pending"]
    );
    await client.query("commit");
    return bookingResult.rows[0];
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
};

export const getUserBookings = async (user_id) => {
  const data = await pool.query(
    "select b.id, b.status, e.title, t.seat_number, t.price, v.name as venue from bookings as b join tickets as t on t.id=b.ticket_id join events as e on e.id=b.event_id join venues as v on e.venue_id=v.id where b.user_id=$1 order by b. created_at desc",
    [user_id]
  );
  return data.rows;
};
