import { NextResponse } from "next/server";

// ============================================================================
// Zelvoraq AI — Sales Qualification Assistant backend
//
// If ANTHROPIC_API_KEY is set (server-side env var, never exposed to the
// browser), this route calls the live Anthropic API with a system prompt that
// constrains the assistant to Zelvoraq's real services, pricing, and
// guardrails, and has it naturally qualify + capture leads.
//
// If the key is NOT set, the route falls back to a small, honestly-labeled
// rule-based responder (`demo: true` in the response) so the frontend is
// fully reviewable before a backend is connected. This is a real fallback
// path, not a disguised fake — the UI surfaces the demo-mode notice to
// whoever is testing it. Note: lead capture (below) only fires from the live
// model path, since it depends on the model's own judgment that a lead is
// genuinely qualified — the demo responder does not attempt it.
//
// Lead capture: once the assistant has naturally gathered a visitor's name,
// a way to reach them, their business type, and their budget, it appends a
// hidden <<LEAD_CAPTURE>>{...}<<END_LEAD_CAPTURE>> block to its reply. This
// route strips that block out of what the visitor sees and forwards the
// parsed lead to CRM_WEBHOOK_URL — the same env var the /api/lead contact
// form already uses, so one Make.com/Zapier/CRM URL serves both entry points.
// ============================================================================

const SYSTEM_PROMPT = `You are the ZELVORAQ AI Business Consultant — the sales assistant on the Zelvoraq website. You represent "the ZELVORAQ team," never a named individual, and you are never a human.

ABOUT ZELVORAQ:
Zelvoraq is an AI solutions agency building four things for small and mid-sized businesses (1-50 employees) in the US, UK, and other English-speaking markets, sold as one-time builds the client owns outright — not a rented monthly subscription:
1. AI Agents — custom AI workers for sales, support, reception, booking, and lead qualification. Starter $499, Growth $999, Pro $1,799.
2. AI Automation — turning repetitive manual processes into automated workflows. Starter $399, Growth $799, Pro $1,499.
3. AI Website Development — websites built with lead qualification, booking, and automated follow-up. Starter $399, Professional $699, Premium $1,199.
4. AI E-commerce setups — AI shopping assistants and support automation for online stores. Starter $499, Growth $899, Pro $1,499.
An optional maintenance add-on ($100-500/month) is available on any package, but never required.

YOUR ROLE:
Greet visitors as a professional, helpful AI Business Consultant for ZELVORAQ. Hold a natural conversation to understand their business and what they need — never interrogate them with a rigid list of questions up front.

INFORMATION TO GATHER (naturally, one at a time, over the course of the conversation):
1. Their name
2. An email address or WhatsApp number to follow up on
3. What kind of business they run
4. Their rough budget range for this project

Earn these through a real conversation about their business problem first. Ask for whichever of the four you're still missing, one at a time, in whatever order feels natural — never all at once.

GUARDRAILS (never break these):
- Stay strictly on ZELVORAQ's four services above. If asked about anything unrelated, politely decline and steer back — e.g. "That's outside what I can help with here, but let's talk about [their business need] instead."
- Never offer, negotiate, or imply a discount, a "special price," or any number outside the approved prices listed above. If asked for a discount, say something like: "I can't adjust pricing myself, but I'll flag that for the ZELVORAQ team when they follow up with you."
- Never invent a price, package, feature, timeline, or scope that isn't listed above. If you don't have an approved answer, say the ZELVORAQ team will cover it in the follow-up.
- Never fabricate testimonials, client names, results, statistics, or guarantees about outcomes, revenue, or leads. Zelvoraq is early-stage — say so plainly if asked, rather than inventing a track record.
- Never claim to be human, and never invent a personal name for yourself or anyone at Zelvoraq.
- Never give legal, financial, or medical advice.

CALL TO ACTION:
Once you genuinely have their name, a way to reach them, their business type, and their budget range, thank them, tell them the ZELVORAQ team will personally follow up, and offer to book a consultation call directly.

At that point — and ONLY at that point, using real values from the conversation, never placeholders or guesses — end your reply with this exact machine-readable block after your normal visible reply. This block is never shown to the visitor, so do not mention it to them:

<<LEAD_CAPTURE>>{"name":"...","contact":"...","businessType":"...","budget":"..."}<<END_LEAD_CAPTURE>>

Include this block only once per conversation, only once all four fields are genuinely known. Never fabricate a value for any field — if something is still missing, keep asking naturally instead of guessing or emitting the block early.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function demoReply(messages: ChatMessage[]): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content.toLowerCase() ?? "";

  if (/lead|follow.?up|form/.test(lastUser)) {
    return "Got it — how are those leads reaching you right now: a website form, phone, email, or a mix? That usually decides whether the fix is a follow-up automation or a qualification agent.";
  }
  if (/support|question|ticket|customer service/.test(lastUser)) {
    return "That's a common one. Roughly how many of those questions repeat week to week — is it a handful of topics, or all over the place?";
  }
  if (/book|appointment|schedule|calendar/.test(lastUser)) {
    return "An AI booking agent usually fixes that fast. Are appointments currently booked by phone, email, or a form — and does anyone confirm them manually afterward?";
  }
  if (/ecommerce|shopify|woocommerce|store|cart/.test(lastUser)) {
    return "For stores, the biggest win is usually cart recovery or order-status questions. Which of those is costing you more support time right now?";
  }
  if (/admin|report|manual|spreadsheet/.test(lastUser)) {
    return "That sounds like a Business Automation fit. Is the reporting work pulling from one system or several different tools right now?";
  }
  if (/discount|cheaper|lower price|deal/.test(lastUser)) {
    return "I can't adjust pricing myself, but I'll flag that for the ZELVORAQ team when they follow up with you. In the meantime, what does your business do, and what's the main process you're looking to fix?";
  }
  return "Tell me a bit more — what does that process look like today, and roughly how much time does it take your team each week?";
}

interface CapturedLead {
  name: string;
  contact: string;
  businessType: string;
  budget: string;
}

const LEAD_CAPTURE_PATTERN = /<<LEAD_CAPTURE>>([\s\S]*?)<<END_LEAD_CAPTURE>>/;

function extractLeadCapture(rawReply: string): { visibleReply: string; lead: CapturedLead | null } {
  const match = rawReply.match(LEAD_CAPTURE_PATTERN);
  if (!match) {
    return { visibleReply: rawReply.trim(), lead: null };
  }

  const visibleReply = rawReply.replace(LEAD_CAPTURE_PATTERN, "").trim();

  try {
    const parsed = JSON.parse(match[1]);
    const name = typeof parsed.name === "string" ? parsed.name.trim() : "";
    const contact = typeof parsed.contact === "string" ? parsed.contact.trim() : "";
    const businessType = typeof parsed.businessType === "string" ? parsed.businessType.trim() : "";
    const budget = typeof parsed.budget === "string" ? parsed.budget.trim() : "";

    // Only forward a lead if every field is genuinely present — never forward
    // a partial/guessed lead to the webhook.
    if (!name || !contact || !businessType || !budget) {
      return { visibleReply, lead: null };
    }

    return { visibleReply, lead: { name, contact, businessType, budget } };
  } catch {
    // Model produced a malformed block — don't let that break the visible reply.
    return { visibleReply, lead: null };
  }
}

async function forwardLeadToWebhook(lead: CapturedLead) {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "zelvoraq-chat-widget",
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch {
    // Do not fail the user-facing chat reply if the downstream webhook is
    // unreachable — log server-side (replace with real logging/alerting
    // before launch) and continue.
    console.error("CRM webhook forwarding failed for chat-widget lead:", lead.contact);
  }
}

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: ChatMessage[] };

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ reply: demoReply(messages), demo: true });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        // Verify the current recommended model name in Anthropic's docs before launch —
        // model identifiers change over time and this default may be stale.
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ reply: demoReply(messages), demo: true });
    }

    const data = await res.json();
    const textBlock = data.content?.find((b: { type: string }) => b.type === "text");
    const rawReply: string = textBlock?.text ?? demoReply(messages);

    const { visibleReply, lead } = extractLeadCapture(rawReply);

    if (lead) {
      // Fire-and-forget: don't make the visitor wait on the webhook call.
      forwardLeadToWebhook(lead);
    }

    return NextResponse.json({ reply: visibleReply, demo: false });
  } catch {
    return NextResponse.json({ reply: demoReply(messages), demo: true });
  }
}
