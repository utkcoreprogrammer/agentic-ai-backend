import { decideTool } from "../services/agent-decision.service.js";

import { webSearch } from "../tools/web-search.tool.js";

import { generateResponse } from "../services/llm.service.js";

import {
  getCachedResponse,
  saveResponseToCache,
} from "../services/redis.service.js";

import { logger } from "../utils/logger.js";

export async function researchAgent(query: string) {
  logger(`Analyzing query: ${query}`);

  const startTime = Date.now();

  // Check Redis cache first
  const cachedResponse = await getCachedResponse(query);

  if (cachedResponse) {
    logger("Returning response from Redis cache");

    logger(`Response Time: ${Date.now() - startTime} ms`);

    return cachedResponse;
  }

  // Decide if tool is required
  const selectedTool = await decideTool(query);

  let finalPrompt = query;

  // Execute tool if needed
  if (selectedTool === "webSearch") {
    logger(`Searching web for: ${query}`);

    const webResults = await webSearch(query);

    finalPrompt = `
User Question:
${query}

Web Search Results:
${webResults}

Based on the above information, generate a helpful answer.
`;
  }

  // Generate AI response
  const response : any = await generateResponse(finalPrompt);

  // Save response in Redis
  await saveResponseToCache(query, response);

  logger("Saved response to Redis");

  logger(`LLM Response Time: ${Date.now() - startTime} ms`);

  return response;
}