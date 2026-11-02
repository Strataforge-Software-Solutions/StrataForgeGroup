/* global process */

import { GoogleGenAI } from "@google/genai";

const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

export async function generateGeminiReply({ messages, systemPrompt }) {
  if (!process.env.GEMINI_API_KEY) {
    const error = new Error("Gemini API is not configured.");
    error.code = "MISSING_PROVIDER_CONFIG";
    throw error;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model,
    contents: messages.map(({ role, content }) => ({
      role: role === "assistant" ? "model" : "user",
      parts: [{ text: content }],
    })),
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.3,
      maxOutputTokens: 500,
    },
  });

  const text = response.text?.trim();
  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}
