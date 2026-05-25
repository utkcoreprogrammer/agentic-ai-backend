import { createClient } from "redis";
import { logger } from "../utils/logger.js";

export const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  logger(`Redis Error: ${err}`);
});

export async function connectRedis() {
  await redisClient.connect();

  logger("Redis Connected");
}