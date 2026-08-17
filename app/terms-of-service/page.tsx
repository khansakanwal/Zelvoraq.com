import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of the Zelvoraq website.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-24">
      <h1 className="font-display text-[32px] font-bold mb-3">Terms of Service</h1>
      <p className="text-tertiary text-[13px] font-mono mb-8">Last updated: [DATE]</p>

      <div className="bg-surface border border-accent rounded-lg2 p-5 mb-10">
        <p className="text-secondary text-[13.5px] leading-relaxed">
          <strong className="text-primary">Placeholder content.</strong> This page establishes the
          required structure only. It must be reviewed and completed by a qualified legal professional
          with your registered business entity, governing jurisdiction, and service-specific terms
          before this site goes live.
        </p>
      </div>

      <div className="flex flex-col gap-8 text-secondary text-[14.5px] leading-relaxed">
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">1. Use of this website</h2>
          <p>[Standard acceptable-use terms for browsing the site, submitting forms, and using the AI Opportunity Assessment and Zelvoraq AI assistant.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">2. The Zelvoraq AI assistant</h2>
          <p>[Disclose that the assistant is an AI system, not a human, and that its responses are informational — not a binding quote, guarantee, or professional advice of any kind.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">3. No guarantees</h2>
          <p>[State plainly that no specific business outcome, timeline, or result is guaranteed by content on this website; project-specific terms are set out separately in a signed proposal or agreement.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">4. Intellectual property</h2>
          <p>[Standard ownership terms for site content, demo project material, and the Zelvoraq brand.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">5. Governing law</h2>
          <p>[Insert the governing jurisdiction for your registered business entity.]</p>
        </div>
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">6. Contact</h2>
          <p>[Insert the business&apos;s registered contact details.]</p>
        </div>
      </div>
    </section>
  );
}
