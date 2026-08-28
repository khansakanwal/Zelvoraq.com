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
          <strong className="text-primary">Not legal advice.</strong> The sections below describe how
          this website may be used. A few sections still need your registered business entity and
          governing jurisdiction filled in (marked <code className="text-accent">[PLACEHOLDER]</code>)
          once the business is formally registered. Have a qualified lawyer review this page before
          actively signing clients.
        </p>
      </div>

      <div className="flex flex-col gap-8 text-secondary text-[14.5px] leading-relaxed">
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">1. Acceptance of these terms</h2>
          <p>
            By browsing this website, submitting a form, using the AI Opportunity Assessment, or
            talking to the Zelvoraq AI assistant, you agree to these terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">2. Use of this website</h2>
          <p>
            You may use this website to learn about Zelvoraq&apos;s services and get in touch with us.
            You agree not to misuse the site — for example, by attempting to disrupt it, submit false
            or malicious information through its forms, or use it to violate any applicable law.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">3. The Zelvoraq AI assistant</h2>
          <p>
            The Zelvoraq AI assistant is an automated system, not a human, and its responses are
            informational only. Nothing the assistant says is a binding quote, guarantee, contract, or
            professional advice of any kind (including legal, financial, or medical advice). Any actual
            project scope, pricing, or commitment is set out separately in a signed proposal or
            agreement between you and Zelvoraq.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">4. Services described on this site</h2>
          <p>
            Descriptions of AI Agents, Business Automation, AI Websites, and AI Ecommerce services on
            this site are for informational purposes. Any real engagement — including scope, timeline,
            deliverables, and price — is governed by a separate proposal or contract signed by both
            parties, not by this website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">5. No guarantees</h2>
          <p>
            We do not guarantee any specific business outcome, timeline, or result from content,
            demo projects, or the Assessment on this website. Demo projects on the Work page are
            labeled &quot;Concept Demo&quot;, &quot;AI Demo&quot;, or &quot;Prototype&quot; and are
            illustrative — they are not completed client engagements or performance guarantees.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">6. Intellectual property</h2>
          <p>
            The content, design, and branding of this website belong to Zelvoraq
            [PLACEHOLDER: registered legal business name] unless otherwise noted. You may not copy or
            reuse it for commercial purposes without our permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">7. Third-party links and services</h2>
          <p>
            This site may link to third-party services — for example, a booking calendar. Those
            services are governed by their own terms and privacy policies, which we don&apos;t control.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">8. Limitation of liability</h2>
          <p>
            This website and its content are provided &quot;as is&quot;, without warranties of any
            kind, to the fullest extent permitted by law. Zelvoraq is not liable for any indirect or
            consequential loss arising from your use of this website.
            [PLACEHOLDER: this section, and any liability caps, should be reviewed and finalized by a
            lawyer once the business is registered.]
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">9. Governing law</h2>
          <p>
            [PLACEHOLDER: the governing jurisdiction for these terms, based on where the business is
            registered.]
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">10. Changes to these terms</h2>
          <p>
            We may update these terms as the business evolves. Material changes will be reflected by
            updating the date at the top of this page.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">11. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:contact@zelvoraq.com" className="text-accent">contact@zelvoraq.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
