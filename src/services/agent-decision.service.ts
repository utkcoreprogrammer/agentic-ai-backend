import { logger } from "../utils/logger.js";

export async function decideTool(query: string) {
  logger(`Analyzing query: ${query}`);

  const lowerCaseQuery = query.toLowerCase();

  if (
    lowerCaseQuery.includes("latest") ||
    lowerCaseQuery.includes("news") ||
    lowerCaseQuery.includes("current")
  ) {
    logger("Selected Tool: webSearch");

    return "webSearch";
  }

  logger("No tool required");

  return null;

}