"use server";

import { generateResponse } from "@/ai/flows/generate-response";

export async function sendMessage(prompt: string): Promise<string> {
  "use server";
  try {
    const { response } = await generateResponse({ prompt });
    return response;
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
}
