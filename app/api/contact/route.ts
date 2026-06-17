import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, phone, trade, personnel, message } = body;

  if (!name || !company || !email || !trade) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? "demo@myfieldforcepro.com";

  // Fire to CRM (GoHighLevel) inbound webhook — set CRM_WEBHOOK_URL in Vercel env vars
  const webhookUrl = process.env.CRM_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    const [firstName, ...rest] = (name as string).trim().split(" ");
    const lastName = rest.join(" ") || "";
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: phone ?? "",
          company,
          trade,
          personnel: personnel ?? "",
          message: message ?? "",
          submittedAt: new Date().toISOString(),
          source: "FFP Website — Book a Demo",
        }),
      });
    } catch {
      // webhook failed — don't block the user response
    }
  }

  // Log to console so VPS logs capture it (basic fallback)
  console.log(`[DEMO REQUEST] ${name} / ${company} / ${email} / ${trade} / ${personnel} crew\nMessage: ${message ?? "(none)"}\nReply-to: ${contactEmail}`);

  return NextResponse.json({ ok: true });
}
