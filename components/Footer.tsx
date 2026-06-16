"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0", background: "var(--surface)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/logo-footer.png" alt="Field Force Pro" height={52} width={52} style={{ objectFit: "contain" }} />
          <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
            by Axiom Forge Architects
          </p>
        </div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["Features", "How It Works", "Industries", "Contact"].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </a>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Axiom Forge Architects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
