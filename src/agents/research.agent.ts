import { generateResponse } from "../services/ollama.service.js";
import { decideTool } from "../services/agent-decision.service.js";
import { redisClient } from "../services/redis.service.js";
import { tools } from "../tools/tool-registry.js";
import { logger } from "../utils/logger.js";

export async function researchAgent(query: string) {
  const startTime = Date.now();

  const cachedResponse = await redisClient.get(query);

  if (cachedResponse) {
    const endTime = Date.now();

    logger("Returning response from Redis cache");
    logger(`Response Time: ${endTime - startTime} ms`);

    return cachedResponse;
  }

  const selectedTool = await decideTool(query);

  let toolResults = "";

  if (selectedTool) {
    toolResults = await tools[selectedTool](query);
  }

  const finalPrompt = `
    User Question:
    ${query}

    Tool Results:
    ${toolResults}

    Using the available information, provide a helpful response.
  `;

  const response = await generateResponse(finalPrompt);
await redisClient.set(query, response);

logger(`Redis Key Saved: ${query}`);
logger(`Redis Value Saved: ${response.substring(0, 100)}...`);

  const endTime = Date.now();

  logger("Saved response to Redis");
  logger(`LLM Response Time: ${endTime - startTime} ms`);

  return response;
}