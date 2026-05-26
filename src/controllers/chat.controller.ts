import { Request, Response } from "express";
import { researchAgent } from "../agents/research.agent.js";

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    const { prompt } = req.body;

    // Input validation
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        success: false,
        error: "Prompt is required and must be a string",
      });
    }

    console.log("[Chat Controller]: Processing prompt");

    const response = await researchAgent(prompt);

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("[Chat Controller Error]:", error);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
}