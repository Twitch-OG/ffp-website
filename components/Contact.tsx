"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", trade: "", personnel: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--bg)", border: "1px solid var(--border)",
    color: "var(--text)", padding: "0.75rem 1rem", borderRadius: "0.5rem",
    fontSize: "0.95rem", outline: "none", fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", marginBottom: "0.4rem", fontSize: "0.85rem",
    fontWeight: 500, color: "var(--muted)",
  };

  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            <span style={{
              display: "inline-block", background: "rgba(99,102,241,0.12)",
              color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)",
              padding: "0.3rem 1rem", borderRadius: "999px",
              fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>Book a Demo</span>

            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
              See Field Force Pro live in 20 minutes.
            </h2>

            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Tell us about your business and we&apos;ll show you exactly how Field Force Pro fits your operation.
              No sales pressure. No 12-month contract pitch. Just a real look at the software.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "✓", text: "See scheduling, dispatch, and invoicing live" },
                { icon: "✓", text: "Get your questions answered in real time" },
                { icon: "✓", text: "Find out if Field Force Pro is the right fit" },
                { icon: "✓", text: "Walk away with a clear next step" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 700, marginTop: "0.1rem" }}>{item.icon}</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — calendar + form */}
          <div>
            {/* GHL Booking Calendar */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "1.5rem" }}>
              <iframe
                src="https://links.axiomforgearchitects.com/widget/booking/OxsUF1oqF1pURgnwWklY"
                style={{ width: "100%", height: "680px", border: "none" }}
                scrolling="no"
                id="msgsndr-calendar"
                title="Book a Demo — Field Force Pro"
              />
            </div>

            <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              — or fill out the form below and we&apos;ll reach out within one business day —
            </p>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "2rem" }}>
            {status === "done" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>
                  You&apos;re on the list!
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  We&apos;ll reach out within one business day to schedule your demo. Talk soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input required style={inputStyle} placeholder="Joe Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>Company Name *</label>
                    <input required style={inputStyle} placeholder="Smith HVAC LLC" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" style={inputStyle} placeholder="joe@smithhvac.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" style={inputStyle} placeholder="(555) 555-5555" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Your Trade *</label>
                    <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.trade} onChange={e => setForm(f => ({ ...f, trade: e.target.value }))}>
                      <option value="">Select your trade…</option>
                      {["HVAC & Refrigeration","Plumbing","Electrical","Cleaning Services","Landscaping","Pest Control","Pool Service","Appliance Repair","General Contracting","Other"].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Field Personnel</label>
                    <select style={{ ...inputStyle, cursor: "pointer" }} value={form.personnel} onChange={e => setForm(f => ({ ...f, personnel: e.target.value }))}>
                      <option value="">How many?</option>
                      {["Just me","2–5","6–10","11–25","26–50","50+"].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Anything else you&apos;d like us to know?</label>
                  <textarea
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                    placeholder="Current software, biggest pain points, timeline…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#f87171", fontSize: "0.85rem" }}>Something went wrong — please email us directly at demo@myfieldforcepro.com</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: "var(--accent)", color: "#fff", padding: "0.85rem",
                    borderRadius: "0.5rem", fontWeight: 700, fontSize: "1rem",
                    border: "none", cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1, fontFamily: "inherit",
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Sending…" : "Request My Demo →"}
                </button>

                <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--muted)" }}>
                  No spam. No pressure. We&apos;ll reach out within one business day.
                </p>
              </form>
            )}
          </div>
          </div>{/* end outer right col */}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          #contact form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
