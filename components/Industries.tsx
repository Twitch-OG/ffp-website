"use client";
const industries = [
  { icon: "❄️", name: "HVAC & Refrigeration" },
  { icon: "🔧", name: "Plumbing" },
  { icon: "⚡", name: "Electrical" },
  { icon: "🧹", name: "Cleaning Services" },
  { icon: "🌿", name: "Landscaping" },
  { icon: "🐛", name: "Pest Control" },
  { icon: "🏊", name: "Pool Service" },
  { icon: "🚪", name: "Garage Doors" },
  { icon: "🏠", name: "General Contracting" },
  { icon: "🔌", name: "Appliance Repair" },
  { icon: "🪟", name: "Windows & Gutters" },
  { icon: "🛡️", name: "Security Systems" },
];

export default function Industries() {
  return (
    <section id="industries" style={{ padding: "6rem 0", background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block", background: "rgba(99,102,241,0.12)",
            color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)",
            padding: "0.3rem 1rem", borderRadius: "999px",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Industries</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
            Built for any trade that<br />dispatches to the field.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
            If you send people to homes or businesses to do work, Field Force Pro was built for you.
          </p>
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center",
        }}>
          {industries.map((ind) => (
            <div
              key={ind.name}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "0.75rem", padding: "0.65rem 1.1rem",
                fontSize: "0.9rem", fontWeight: 500, color: "var(--text)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <span>{ind.icon}</span>
              <span>{ind.name}</span>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "2.5rem", color: "var(--muted)", fontSize: "0.9rem" }}>
          Don&apos;t see your trade? If you dispatch field personnel, it works for you.{" "}
          <a href="#contact" style={{ color: "#818cf8", textDecoration: "none" }}>Ask us →</a>
        </p>
      </div>
    </section>
  );
}
