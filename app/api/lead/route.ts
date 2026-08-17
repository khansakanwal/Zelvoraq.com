import { NextResponse } from "next/server";

// ============================================================================
// Lead capture endpoint. Validates server-side (never trust client validation
// alone), then optionally forwards to a CRM/automation webhook if configured.
// No secrets are ever returned to the client; CRM_WEBHOOK_URL and
// EMAIL_PROVIDER_API_KEY are read from server-only env vars.
// ============================================================================

interface LeadPayload {
  name: string;
  email: string;
  company: string;
  website?: string;
  businessType?: string;
  automate?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<LeadPayload>;

  if (!body.name?.trim() || !body.company?.trim() || !isValidEmail(body.email ?? "")) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  const lead: LeadPayload = {
    name: body.name.trim(),
    email: body.email!.trim(),
    company: body.company.trim(),
    website: body.website?.trim() || undefined,
    businessType: body.businessType?.trim() || undefined,
    automate: body.automate?.trim() || undefined,
    message: body.message?.trim() || undefined,
  };

  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "zelvoraq-website", submittedAt: new Date().toISOString() }),
      });
    } catch {
      // Do not fail the user-facing submission if the downstream webhook is unreachable —
      // log server-side (replace with real logging/alerting before launch) and continue.
      console.error("CRM webhook forwarding failed for lead:", lead.email);
    }
  }

  // TODO: wire EMAIL_PROVIDER_API_KEY here to send an internal notification email
  // once a transactional email provider (e.g. Resend, SendGrid) is chosen.

  return NextResponse.json({ ok: true });
}
