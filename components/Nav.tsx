"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(8,8,15,0.88)", backdropFilter: "blur(16px)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", height: "80px" }}>

        {/* Left — Features, How It Works */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2rem", paddingRight: "2rem" }} className="desktop-nav">
          {["Features", "How It Works"].map((label) => (
            <a key={label} href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{label}</a>
          ))}
        </div>

        {/* Center — logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", height: "80px", overflow: "hidden" }}>
          <Image
            src="/logo-nav.png"
            alt="Field Force Pro"
            height={110}
            width={300}
            style={{ objectFit: "cover", objectPosition: "center top", mixBlendMode: "screen", filter: "brightness(1.2)", marginTop: "0px" }}
            priority
          />
        </Link>

        {/* Right — Industries, Contact, Book a Demo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "2rem", paddingLeft: "2rem" }} className="desktop-nav">
          {["Industries", "Contact"].map((label) => (
            <a key={label} href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, transition: "color 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{label}</a>
          ))}
          <a href="#contact"
            style={{
              background: "var(--accent)", color: "#fff", padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem", fontWeight: 600, fontSize: "0.9rem",
              textDecoration: "none", transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >Book a Demo</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
