import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { chatController } from "./controllers/chat.controller.js";
import { connectRedis } from "./services/redis.service.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Agentic AI Backend Running"
  });
});

app.post("/chat", chatController);

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();