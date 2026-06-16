export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0", background: "var(--surface)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text)", letterSpacing: "-0.03em" }}>
            Field Force <span style={{ color: "var(--accent)" }}>Pro</span>
          </span>
          <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
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
