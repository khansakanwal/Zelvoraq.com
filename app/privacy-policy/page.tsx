import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Zelvoraq collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-24">
      <h1 className="font-display text-[32px] font-bold mb-3">Privacy Policy</h1>
      <p className="text-tertiary text-[13px] font-mono mb-8">Last updated: [DATE]</p>

      <div className="bg-surface border border-accent rounded-lg2 p-5 mb-10">
        <p className="text-secondary text-[13.5px] leading-relaxed">
          <strong className="text-primary">Placeholder content.</strong> This page establishes the
          required structure only. It must be reviewed and completed by a qualified legal professional,
          with jurisdiction-specific detail (e.g. GDPR/UK GDPR if serving EU/UK visitors, applicable US
          state privacy laws), before this site goes live.
        </p>
      </div>

      <div className="flex flex-col gap-8 text-secondary text-[14.5px] leading-relaxed">
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">1. Information we collect</h2>
          <p>[Describe form submissions collected via the Contact page and AI Opportunity Assessment: name, business email, company, website, business type, and message. Describe any analytics data collected — e.g. via Google Analytics 4 — once configured.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">2. How we use it</h2>
          <p>[Describe use for responding to enquiries, scheduling strategy calls, and internal lead qualification. Confirm whether any CRM or email automation platform is used to process this data.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">3. The Zelvoraq AI assistant</h2>
          <p>[Disclose that conversations with the on-site AI assistant may be processed by a third-party AI provider (Anthropic) to generate responses, and describe what, if anything, is retained.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">4. Data sharing</h2>
          <p>[List any third parties data is shared with — CRM, email provider, booking platform — once finalized.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">5. Your rights</h2>
          <p>[Describe applicable rights to access, correct, or delete data, and how to exercise them, based on the jurisdictions the business serves.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">6. Contact</h2>
          <p>[Insert the business&apos;s registered contact details for privacy-related requests.]</p>
        </div>
      </div>
    </section>
  );
}
