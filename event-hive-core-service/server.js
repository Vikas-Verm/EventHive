import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/configs/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import venueRoutes from "./src/routes/venueRoutes.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import ticketRoutes from "./src/routes/ticketRoutes.js";
import bookings from "./src/routes/bookingRoutes.js";
import payments from "./src/routes/paymentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/bookings", bookings);
app.use("/api/payments", payments);
// Basic Route to Test DB Connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database connection is active!",
      time: result.rows[0].now,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
