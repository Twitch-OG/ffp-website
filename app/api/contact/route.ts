import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, phone, trade, personnel, message } = body;

  if (!name || !company || !email || !trade) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? "demo@myfieldforcepro.com";

  // If a webhook URL is configured, POST to it (e.g. Make.com, Zapier, n8n)
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, trade, personnel, message, submittedAt: new Date().toISOString() }),
      });
    } catch {
      // webhook failed — don't block the user response
    }
  }

  // Log to console so VPS logs capture it (basic fallback)
  console.log(`[DEMO REQUEST] ${name} / ${company} / ${email} / ${trade} / ${personnel} crew\nMessage: ${message ?? "(none)"}\nReply-to: ${contactEmail}`);

  return NextResponse.json({ ok: true });
}
