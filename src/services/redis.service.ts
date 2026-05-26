import { Redis } from "@upstash/redis";

import { logger } from "../utils/logger.js";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function connectRedis() {
  try {
    await redis.ping();

    logger("Redis Connected");
  } catch (error) {
    console.error("Redis Connection Error:", error);
  }
}

export async function getCachedResponse(
  query: string
) {
  return await redis.get(query);
}

export async function saveResponseToCache(
  query: string,
  response: string
) {
  await redis.set(query, response);

  logger(`Redis Key Saved: ${query}`);

  logger(
    `Redis Value Saved: ${response.substring(0, 100)}...`
  );
}