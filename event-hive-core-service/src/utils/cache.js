import { redisConnection } from "../configs/redis.js"; // Using your existing Redis connection

// Save data to Redis with an expiration time (Time To Live - TTL) in seconds
export const setCache = async (key, data, ttlSeconds = 3600) => {
  try {
    await redisConnection.set(key, JSON.stringify(data), "EX", ttlSeconds);
  } catch (err) {
    console.error("Redis Set Error:", err);
  }
};

// Read data from Redis
export const getCache = async (key) => {
  try {
    const data = await redisConnection.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Redis Get Error:", err);
    return null;
  }
};

// Delete data from Redis (Invalidation)
export const clearCache = async (key) => {
  try {
    await redisConnection.del(key);
  } catch (err) {
    console.error("Redis Delete Error:", err);
  }
};
