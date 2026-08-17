import { NextResponse } from "next/server";

// ============================================================================
// Zelvoraq AI — Sales Qualification Assistant backend
//
// If ANTHROPIC_API_KEY is set (server-side env var, never exposed to the
// browser), this route calls the live Anthropic API with a system prompt that
// constrains the assistant to Zelvoraq's real services and guardrails.
//
// If the key is NOT set, the route falls back to a small, honestly-labeled
// rule-based responder (`demo: true` in the response) so the frontend is
// fully reviewable before a backend is connected. This is a real fallback
// path, not a disguised fake — the UI surfaces the demo-mode notice to
// whoever is testing it.
// ============================================================================

const SYSTEM_PROMPT = `You are Zelvoraq AI, the sales qualification assistant on the Zelvoraq website.

Zelvoraq is a B2B AI solutions agency serving small and mid-sized businesses (1-50 employees) in the US, UK, and other English-speaking international markets. Zelvoraq's four services are:
1. AI Agents — custom AI workers for sales, support, reception, booking, and lead qualification
2. Business Automation — turning repetitive processes (follow-up, onboarding, reporting) into automated workflows
3. AI Websites — websites that qualify visitors, book appointments, and follow up automatically
4. AI Ecommerce — AI shopping assistants and support automation for Shopify/WooCommerce stores

Your job:
- Understand the visitor's actual business problem through natural conversation
- Ask one intelligent, specific follow-up question at a time — never a list of questions
- Once you understand enough, recommend the single most relevant Zelvoraq service in plain business language
- Guide interested visitors toward the AI Opportunity Assessment (/) or the Contact page to book a strategy call
- Keep responses short — 2-4 sentences, conversational, no corporate filler

You must NEVER:
- Claim to be human
- Invent or imply specific case studies, client names, testimonials, pricing, guarantees, or partnerships
- Give legal, financial, or medical advice
- Make promises about results or timelines Zelvoraq hasn't stated on the site

If asked something outside this scope, say so plainly and redirect to a relevant next step.`;

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
  return "Tell me a bit more — what does that process look like today, and roughly how much time does it take your team each week?";
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
    return NextResponse.json({ reply: textBlock?.text ?? demoReply(messages), demo: false });
  } catch {
    return NextResponse.json({ reply: demoReply(messages), demo: true });
  }
}
