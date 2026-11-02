/* global process */

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

export async function generateGroqReply({ messages, systemPrompt }) {
  if (!process.env.GROQ_API_KEY) {
    const error = new Error("Groq API is not configured.");
    error.code = "MISSING_PROVIDER_CONFIG";
    throw error;
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      temperature: 0.3,
      max_completion_tokens: 500,
    }),
  });

  if (!response.ok) {
    const error = new Error(`Groq request failed with status ${response.status}.`);
    error.code = "PROVIDER_REQUEST_FAILED";
    throw error;
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error("Groq returned an empty response.");
  }

  return text;
}
