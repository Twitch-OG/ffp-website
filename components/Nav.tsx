"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid var(--border)", background: "rgba(8,8,15,0.85)", backdropFilter: "blur(12px)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.04em" }}>
            Field Force <span style={{ color: "var(--accent)" }}>Pro</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {["Features", "How It Works", "Industries", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          style={{
            background: "var(--accent)", color: "#fff", padding: "0.5rem 1.25rem",
            borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Book a Demo
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
