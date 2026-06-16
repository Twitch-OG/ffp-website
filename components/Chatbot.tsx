"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

const CALENDLY_URL = "https://calendly.com/YOUR_LINK_HERE";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! 👋 I'm Forge — Field Force Pro's assistant. I can answer questions or get you set up with a demo. What brings you by today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply ?? "Sorry, I had trouble with that. Try again?" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong on my end. Please try again or scroll down to fill out the contact form." }]);
    }
    setLoading(false);
  }

  function renderContent(text: string) {
    if (text.includes(CALENDLY_URL) || text.includes("calendly")) {
      return (
        <span>
          {text.split(/(https:\/\/calendly\.com\/\S+)/g).map((part, i) =>
            part.startsWith("https://calendly") ? (
              <a key={i} href={part} target="_blank" rel="noopener noreferrer"
                style={{ color: "#818cf8", textDecoration: "underline" }}>Book your demo here →</a>
            ) : part
          )}
        </span>
      );
    }
    return text;
  }

  return (
    <>
      {/* Bubble button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 999,
          width: "60px", height: "60px", borderRadius: "50%",
          background: "var(--accent)", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem", boxShadow: "0 4px 24px rgba(99,102,241,0.5)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Open chat"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "6rem", right: "2rem", zIndex: 998,
          width: "360px", maxWidth: "calc(100vw - 2rem)",
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "1.25rem", display: "flex", flexDirection: "column",
          boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "var(--accent)", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "1.1rem",
            }}>⚡</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>Forge</div>
              <div style={{ fontSize: "0.75rem", color: "#22c55e" }}>● Online</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "380px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "80%", padding: "0.65rem 0.9rem",
                  borderRadius: m.role === "user" ? "1rem 1rem 0.2rem 1rem" : "1rem 1rem 1rem 0.2rem",
                  background: m.role === "user" ? "var(--accent)" : "var(--bg)",
                  border: m.role === "assistant" ? "1px solid var(--border)" : "none",
                  color: "var(--text)", fontSize: "0.875rem", lineHeight: 1.6,
                }}>
                  {renderContent(m.content)}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "0.65rem 0.9rem", borderRadius: "1rem 1rem 1rem 0.2rem",
                  background: "var(--bg)", border: "1px solid var(--border)",
                  color: "var(--muted)", fontSize: "0.875rem",
                }}>
                  Typing…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "0.75rem", borderTop: "1px solid var(--border)", display: "flex", gap: "0.5rem" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask anything…"
              style={{
                flex: 1, background: "var(--bg)", border: "1px solid var(--border)",
                color: "var(--text)", padding: "0.6rem 0.85rem", borderRadius: "0.5rem",
                fontSize: "0.875rem", outline: "none", fontFamily: "inherit",
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: "var(--accent)", color: "#fff", border: "none",
                borderRadius: "0.5rem", padding: "0.6rem 1rem", cursor: "pointer",
                fontWeight: 600, fontSize: "0.875rem", fontFamily: "inherit",
                opacity: loading || !input.trim() ? 0.5 : 1,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
