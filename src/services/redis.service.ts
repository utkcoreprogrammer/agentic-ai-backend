import { createClient } from "redis";

import { logger } from "../utils/logger.js";

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

export async function connectRedis() {
  await redisClient.connect();

  logger("Redis Connected");
}

export async function getCachedResponse(
  query: string
) {
  return await redisClient.get(query);
}

export async function saveResponseToCache(
  query: string,
  response: string
) {
  await redisClient.set(query, response);

  logger(`Redis Key Saved: ${query}`);

  logger(
    `Redis Value Saved: ${response.substring(0, 100)}...`
  );
}