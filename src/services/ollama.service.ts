import ollama from "ollama";

export async function generateResponse(prompt: string) {
  const response = await ollama.chat({
    model: "llama3.2",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.message.content;
}