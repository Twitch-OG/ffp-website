export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: "10rem", paddingBottom: "7rem", position: "relative", overflow: "hidden" }}>
      {/* Glow background */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "400px",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-block", background: "rgba(99,102,241,0.12)",
            color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)",
            padding: "0.3rem 1rem", borderRadius: "999px",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            By Axiom Forge Architects
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text)", marginBottom: "1.25rem", maxWidth: "900px", margin: "0 auto 1.25rem" }}>
          Your data. Your server.{" "}
          <span style={{ color: "var(--accent)" }}>Your business.</span>
        </h1>

        <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--muted)", maxWidth: "640px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Field Force Pro gives home service contractors the tools of enterprise software —
          without the enterprise price tag, per-seat fees, or a third party sitting on your customer data.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              background: "var(--accent)", color: "#fff", padding: "0.85rem 2rem",
              borderRadius: "0.5rem", fontWeight: 700, fontSize: "1rem",
              textDecoration: "none", display: "inline-block", transition: "opacity 0.2s",
            }}
          >
            Book a Free Demo →
          </a>
          <a
            href="#features"
            style={{
              background: "transparent", color: "var(--text)", padding: "0.85rem 2rem",
              borderRadius: "0.5rem", fontWeight: 600, fontSize: "1rem",
              textDecoration: "none", border: "1px solid var(--border)", display: "inline-block",
              transition: "border-color 0.2s",
            }}
          >
            See Features
          </a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap",
          marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid var(--border)",
        }}>
          {[
            { value: "1 flat fee", label: "per company — no per-seat pricing" },
            { value: "Your server", label: "your data, nobody else's" },
            { value: "All trades", label: "HVAC, plumbing, cleaning & more" },
          ].map((stat) => (
            <div key={stat.value} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.25rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
