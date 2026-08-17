"use client";

import { useState, useRef, useEffect } from "react";
import { BrandMark } from "@/components/ui/Icons";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const OPENING_MESSAGE =
  "Hi, I'm Zelvoraq AI. Tell me what you'd like to improve in your business, and I'll help you identify where AI could save time or automate work.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: OPENING_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setDemoMode(Boolean(data.demo));
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong on my end — you can reach the team directly from the Contact page in the meantime.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Zelvoraq AI" : "Open Zelvoraq AI"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent shadow-soft flex items-center justify-center hover:bg-accent-hover transition-colors"
      >
        {open ? (
          <span className="text-[#191307] text-xl leading-none">×</span>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="5" cy="19" r="2.2" fill="#191307" />
            <circle cx="19" cy="5" r="2.2" fill="#191307" />
            <circle cx="19" cy="19" r="2.2" fill="#191307" />
            <path d="M6.5 17.5 17.5 6.5M17.5 17.5 19 5" stroke="#191307" strokeWidth="1.3" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-48px))] bg-surface border border-borderc rounded-lg2 shadow-soft overflow-hidden flex flex-col max-h-[70vh]">
          <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-borderc bg-elevated">
            <BrandMark className="w-[22px] h-[22px]" />
            <div className="leading-tight">
              <div className="text-[13px] font-semibold">Zelvoraq AI</div>
              <div className="text-[11px] text-secondary font-mono">SALES QUALIFICATION ASSISTANT</div>
            </div>
          </div>

          <div ref={bodyRef} className="p-4 flex flex-col gap-3 overflow-y-auto grow min-h-[220px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "self-end bg-accent text-[#191307] font-medium rounded-br-[3px]"
                    : "self-start bg-elevated rounded-bl-[3px]"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-elevated px-3.5 py-2.5 rounded-xl text-[13px] text-secondary">
                Thinking…
              </div>
            )}
          </div>

          {demoMode && (
            <p className="text-[11px] text-tertiary font-mono px-4 pb-1">
              Demo mode — connect ANTHROPIC_API_KEY for live responses.
            </p>
          )}

          <form
            className="flex gap-2 p-3 border-t border-borderc"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer…"
              className="flex-1 bg-elevated border border-borderc rounded-[8px] px-3 py-2.5 text-[13px] text-primary placeholder:text-tertiary"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={loading}
              className="bg-accent disabled:opacity-40 rounded-[8px] w-9 text-[#191307]"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
