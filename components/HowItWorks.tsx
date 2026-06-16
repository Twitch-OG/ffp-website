const steps = [
  {
    num: "01",
    title: "We set up your server",
    desc: "Your own private instance of Field Force Pro is deployed on a dedicated server. Your data never touches anyone else's system.",
  },
  {
    num: "02",
    title: "We onboard your team",
    desc: "We configure your settings, import your customers, build out your price book, and train your staff. You're not on your own.",
  },
  {
    num: "03",
    title: "Your team hits the ground running",
    desc: "Schedule jobs, dispatch techs, invoice customers, and track memberships — all from one clean, modern interface.",
  },
  {
    num: "04",
    title: "You grow. We scale with you.",
    desc: "Add techs, expand service areas, connect your phone system, and run marketing campaigns — Field Force Pro grows with your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block", background: "rgba(99,102,241,0.12)",
            color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)",
            padding: "0.3rem 1rem", borderRadius: "999px",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: "1rem",
          }}>How It Works</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
            Up and running in days,<br />not months.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
            We handle the setup so you can focus on running your business.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {steps.map((s) => (
            <div key={s.num} style={{ position: "relative" }}>
              <div style={{
                fontSize: "3.5rem", fontWeight: 900,
                color: "rgba(99,102,241,0.15)",
                lineHeight: 1, marginBottom: "0.75rem",
                fontVariantNumeric: "tabular-nums",
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
