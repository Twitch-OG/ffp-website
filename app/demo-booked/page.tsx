import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're Booked! — Field Force Pro",
  description: "Your demo is confirmed. Check your email for details.",
};

export default function DemoBooked() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
      padding: "2rem",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "520px" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>✅</div>

        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--text)",
          marginBottom: "1rem",
          lineHeight: 1.15,
        }}>
          You&apos;re booked!
        </h1>

        <p style={{
          fontSize: "1.1rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          marginBottom: "2.5rem",
        }}>
          Check your email for your confirmation and calendar invite.
          <br />
          See you at your demo — we&apos;re looking forward to it.
        </p>

        <Link href="/" style={{
          display: "inline-block",
          background: "var(--accent)",
          color: "#fff",
          padding: "0.85rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: 700,
          fontSize: "1rem",
          textDecoration: "none",
        }}>
          Back to Home →
        </Link>
      </div>
    </main>
  );
}
