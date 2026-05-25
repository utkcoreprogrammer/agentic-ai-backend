import { Request, Response } from "express";
import { researchAgent } from "../agents/research.agent.js";
import { generateResponse } from "../services/ollama.service.js";

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    const { prompt } = req.body;

    const response = await researchAgent(prompt);

    res.json({
      success: true,
      response
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
}