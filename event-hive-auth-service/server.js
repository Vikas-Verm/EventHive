import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/configs/db.js";
import router from "./src/routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use("/api/auth", router);

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
