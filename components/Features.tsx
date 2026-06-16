"use client";
const features = [
  {
    icon: "🗓️",
    title: "Schedule & Dispatch",
    desc: "Drag-and-drop calendar, tech availability, and real-time job board. Get the right person to the right job — fast.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    desc: "Full customer profiles with properties, equipment history, notes, tags, contacts, and service history in one place.",
  },
  {
    icon: "🧾",
    title: "Invoicing & Payments",
    desc: "Create invoices from completed jobs, apply tax rates, record payments, and track outstanding balances — all built in.",
  },
  {
    icon: "🏷️",
    title: "Flat-Rate Price Book",
    desc: "Build your own price book with categories, tasks, and parts. Techs present prices on-site with confidence.",
  },
  {
    icon: "🤝",
    title: "Membership Plans",
    desc: "Create and manage maintenance agreements. Track visit schedules, billing cycles, member discounts, and renewal dates.",
  },
  {
    icon: "📊",
    title: "Financials & Reporting",
    desc: "Revenue, A/R aging, expenses, and QuickBooks export. Know exactly where your business stands at any moment.",
  },
  {
    icon: "📱",
    title: "Tech Mobile View",
    desc: "Technicians get a clean mobile interface — their schedule, job details, clock in/out, photos, and customer notes.",
  },
  {
    icon: "⚙️",
    title: "Roles & Permissions",
    desc: "Control exactly what each employee can see and do. Office staff, dispatchers, and techs all have the right access.",
  },
  {
    icon: "🔒",
    title: "Your Data, Your Server",
    desc: "Every customer runs on their own isolated server. No shared databases. No data mining. No surprise price hikes.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 0", background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block", background: "rgba(99,102,241,0.12)",
            color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)",
            padding: "0.3rem 1rem", borderRadius: "999px",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Features</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
            Everything your team needs.<br />Nothing you don&apos;t.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Built from the ground up for home service contractors — not retrofitted enterprise software.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.75rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
