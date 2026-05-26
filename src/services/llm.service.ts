import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function generateResponse(prompt: string) {
  try {
    const completion = await client.chat.completions.create({
      model: "openrouter/auto",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("LLM Error:", error);

    return "Failed to generate AI response.";
  }
}