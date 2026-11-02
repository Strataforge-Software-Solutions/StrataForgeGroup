import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, Send, X } from "lucide-react";

function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

function renderMessage(content) {
  const lines = content.split("\n");
  const elements = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (line.trim().startsWith("|") && index + 1 < lines.length && lines[index + 1].includes("---")) {
      const headers = line.split("|").slice(1, -1).map((cell) => cell.trim());
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(lines[index].split("|").slice(1, -1).map((cell) => cell.trim()));
        index += 1;
      }
      elements.push(
        <div key={`table-${index}`} className="my-2 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-xs">
            <thead><tr>{headers.map((cell) => <th key={cell} className="border-b border-slate-200 px-2 py-1 font-bold">{renderInline(cell)}</th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-slate-100 px-2 py-1 align-top">{renderInline(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*] /.test(lines[index])) items.push(lines[index++].slice(2));
      elements.push(<ul key={`list-${index}`} className="mb-2 list-disc space-y-1 pl-5">{items.map((item) => <li key={item}>{renderInline(item)}</li>)}</ul>);
      continue;
    }
    if (line.trim()) elements.push(<p key={index} className="mb-2 last:mb-0">{renderInline(line)}</p>);
    index += 1;
  }
  return elements;
}

const welcomeMessage = {
  role: "assistant",
  content:
    "Hi! I’m the StrataForge assistant. Ask me about our services, projects, pricing, or how we can help with your next software project.",
};

const MAX_INPUT_LENGTH = 1000;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const content = input.trim();
    if (!content || loading) return;

    const userMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-20) }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      setMessages((current) => [...current, data.message]);
    } catch (requestError) {
      setError(requestError.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="chatbot-title"
          className="mb-3 flex h-[min(620px,calc(100svh-112px))] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(7,11,20,0.25)] ring-1 ring-slate-200 animate-[chatbot-in_180ms_ease-out]"
        >
          <header className="flex items-center justify-between bg-navy px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <img src="/images/ForgeyHalf.png" alt="Forgey Mascot" className="h-9 w-9 object-cover object-left" />
              </span>
              <div className="min-w-0">
                <h2 id="chatbot-title" className="truncate text-sm font-bold">
                Forgey | AI Assistant

                </h2>
                <p className="mt-0.5 text-xs text-white/55">Here to help you build</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Minimize chatbot"
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <ChevronDown size={18} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[84%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-brand-ink text-white"
                      : "rounded-bl-md bg-white text-slate-600 shadow-sm ring-1 ring-slate-100"
                  }`}
                >
                  {renderMessage(message.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100" aria-label="Assistant is typing">
                  <span className="flex gap-1">
                    {[0, 1, 2].map((dot) => (
                      <span key={dot} className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                    ))}
                  </span>
                </div>
              </div>
            )}
            {error && <p className="text-center text-xs leading-relaxed text-red-600">{error}</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-end gap-2 rounded-2xl bg-slate-100 p-1.5 ring-1 ring-slate-200 focus-within:ring-brand">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                disabled={loading}
                rows={1}
                maxLength={MAX_INPUT_LENGTH}
                placeholder="Ask us anything..."
                aria-label="Message the StrataForge assistant"
                className="max-h-24 min-h-10 flex-1 resize-none border-0 bg-transparent px-3 py-2 text-sm text-navy outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-ink text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-400">StrataForge AI can make mistakes. Verify important details.</p>
          </div>
        </section>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Forgey chatbot"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink text-white shadow-[0_10px_30px_rgba(194,65,0,0.35)] transition duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:h-16 sm:w-16"
        >
          <MessageCircle size={25} className="transition group-hover:scale-110" />
        </button>
      )}
    </div>
  );
}
