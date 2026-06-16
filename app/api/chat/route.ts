import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Forge, the friendly sales assistant for Field Force Pro — field service management software built by Axiom Forge Architects. Your job is to answer questions about the product and qualify potential customers for a demo.

Field Force Pro is a self-hosted, private-instance FSM platform. Every customer gets their own server — their data never touches another company's system. Key features: scheduling & dispatch, customer management, invoicing, pricebook, membership plans, financials, tech/crew mobile access, role-based permissions.

Be warm, conversational, and concise. Don't use bullet lists — keep it flowing like a real conversation. Gather these details naturally over the course of the chat:
1. What trade/industry they're in
2. How many field personnel (use "field personnel" NOT "techs" — they could be cleaners, landscapers, plumbers, etc.)
3. What software they currently use (if any)
4. Their biggest pain point

Once you have a good feel for their situation (usually after 3-5 messages), offer to connect them with a demo: "It sounds like Field Force Pro could be a great fit for you. Want to grab a time? You can book directly here: ${process.env.CALENDLY_URL || "https://calendly.com/YOUR_LINK_HERE"}"

Never discuss pricing. If asked about cost, say pricing is customized based on their team size and needs, and a demo is the best place to get that conversation started.

Keep each response under 3 sentences unless they ask a detailed question.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "I'm having trouble connecting right now. Please fill out the contact form below and we'll reach out soon!" });
  }

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://myfieldforcepro.com",
        "X-Title": "Field Force Pro",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I had a hiccup! Feel free to fill out the form below and we'll be in touch.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Something went wrong on my end. Please try the contact form below — we respond within one business day." });
  }
}
