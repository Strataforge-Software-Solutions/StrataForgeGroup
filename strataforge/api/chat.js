import { generateReply } from "./_lib/llm.js";
import { systemPrompt } from "./_lib/knowledge.js";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_TOTAL_LENGTH = 12000;
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 10;
const requests = new Map();

function getClientKey(request) {
  return request.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key) {
  const now = Date.now();
  const recent = (requests.get(key) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    requests.set(key, recent);
    return true;
  }

  recent.push(now);
  requests.set(key, recent);
  return false;
}

function sendError(response, status, message) {
  response.status(status).json({ error: message });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendError(response, 405, "Only POST requests are supported.");
  }

  if (isRateLimited(getClientKey(request))) {
    return sendError(response, 429, "Too many messages. Please try again shortly.");
  }

  const { messages } = request.body || {};
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return sendError(response, 400, "Please provide a valid conversation.");
  }

  const validMessages = messages.map((message) => {
    if (!message || !["user", "assistant"].includes(message.role) || typeof message.content !== "string") {
      return null;
    }

    const content = message.content.trim();
    return content && content.length <= MAX_MESSAGE_LENGTH
      ? { role: message.role, content }
      : null;
  });

  if (validMessages.some((message) => !message)) {
    return sendError(response, 400, "Each message must contain valid text.");
  }

  const totalLength = validMessages.reduce((total, message) => total + message.content.length, 0);
  if (totalLength > MAX_TOTAL_LENGTH) {
    return sendError(response, 400, "This conversation is too long. Please start a new chat.");
  }

  try {
    const content = await generateReply({ messages: validMessages, systemPrompt });
    const safeContent = /```|<script\b|\b(?:rm\s+-rf|powershell\b|bash\b|javascript\s*:)/i.test(content)
      ? "I can help explain our services, projects, and pricing, but I cannot provide code or instructions that could be used to misuse systems."
      : content;
    return response.status(200).json({
      message: { role: "assistant", content: safeContent },
    });
  } catch (error) {
    console.error("Chat provider error:", error?.code || "unknown");
    const status = error?.code === "MISSING_PROVIDER_CONFIG" ? 503 : 500;
    const message = status === 503
      ? "The assistant is not configured yet. Please contact us by email instead."
      : "The assistant could not respond right now. Please try again shortly.";
    return sendError(response, status, message);
  }
}
