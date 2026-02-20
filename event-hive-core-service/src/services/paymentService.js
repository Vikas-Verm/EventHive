import pool from "../configs/db.js";

// Simulate an external API call (e.g., Stripe)
const mockExternalPaymentProvider = async (amount, currency) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 90% chance of success, 10% chance of "Bank Error"
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        resolve({
          transactionId: "tx_" + Math.random().toString(36).substr(2, 9),
        });
      } else {
        reject(new Error("Payment Declined: Insufficient Funds"));
      }
    }, 1000); // Fake 1 second delay
  });
};

export const processPayment = async (bookingId, userId) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1. Get the booking & amount
    const bookingRes = await client.query(
      `SELECT b.*, t.price FROM bookings b 
         JOIN tickets t ON b.ticket_id = t.id 
         WHERE b.id = $1 AND b.user_id = $2 FOR UPDATE`,
      [bookingId, userId]
    );

    if (bookingRes.rows.length === 0) {
      throw new Error("Booking not found");
    }

    const booking = bookingRes.rows[0];

    if (booking.status === "confirmed") {
      throw new Error("Booking already paid");
    }

    // 2. Call the "External" Payment Provider
    const paymentResponse = await mockExternalPaymentProvider(
      booking.price,
      "INR"
    );

    // 3. Update Booking Status to CONFIRMED
    const updateRes = await client.query(
      `UPDATE bookings SET status = 'confirmed' WHERE id = $1 RETURNING *`,
      [bookingId]
    );

    // 4. Record the Transaction (Optional but good practice)
    // For now, we just log it. In real life, save to a 'transactions' table.
    console.log(
      `Payment Success: ${paymentResponse.transactionId} for Booking ${bookingId}`
    );

    await client.query("COMMIT");
    return updateRes.rows[0];
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};
