import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.REDIS_HOST);
// Logic: If running in Docker, use the service name "redis" (from docker-compose).
// If running locally (npm run dev), use "127.0.0.1".
const redisHost = process.env.REDIS_HOST || "127.0.0.1";

console.log(`🔌 Connecting to Redis at: ${redisHost}`);

export const redisConnection = new Redis({
  host: redisHost,
  port: 6379,
  maxRetriesPerRequest: null,
});
