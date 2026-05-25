import { logger } from "../utils/logger.js";

export async function webSearch(query: string) {
  logger(`Searching web for: ${query}`);

  return `
    Search results for "${query}":

    - AI agents are autonomous systems
    - Tools allow agents to interact with external systems
    - Memory improves contextual reasoning
  `;
}