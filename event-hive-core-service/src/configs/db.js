import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// The Retry Logic
const connectWithRetry = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await pool.query("SELECT 1");
      console.log("✅ Database connected successfully");
      return; // Success! Exit the loop
    } catch (err) {
      console.log(
        `⏳ Database not ready (Attempt ${i + 1}/${retries}). Retrying in ${
          delay / 1000
        }s...`
      );
      // Wait for 'delay' milliseconds
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  console.error(
    "❌ Could not connect to Database after multiple attempts. Exiting."
  );
  process.exit(1); // Kill the container so Docker restarts it
};

// Start the connection attempt
connectWithRetry();

export default pool;
