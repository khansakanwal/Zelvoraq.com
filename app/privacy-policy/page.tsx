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
          <strong className="text-primary">Not legal advice.</strong> The sections below describe,
          factually, how this website actually works. A few sections still need your registered
          business details filled in (marked <code className="text-accent">[PLACEHOLDER]</code>) once
          the business is formally registered. Have a qualified lawyer review this policy before
          actively signing clients — this is especially important given visitors from the UK and EU,
          where data protection law can apply as soon as personal data is collected, regardless of
          where the business itself is registered.
        </p>
      </div>

      <div className="flex flex-col gap-8 text-secondary text-[14.5px] leading-relaxed">
        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">1. Who we are</h2>
          <p>
            Zelvoraq (&quot;we&quot;, &quot;us&quot;) operates this website to share information about
            our AI systems and automation services and to connect with potential clients. This policy
            explains what information we collect through this site and how we use it.
            [PLACEHOLDER: registered legal business name, once registered.]
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">2. Information we collect</h2>
          <p className="mb-3">We collect information you choose to give us directly through:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>The <strong className="text-primary">Contact form</strong> — name, business email, company, website (optional), business type, what you&apos;d like to automate, and any message.</li>
            <li>The <strong className="text-primary">AI Opportunity Assessment</strong> — your answers about your business type, team size, main repetitive task, how customers reach you, tools you use, and optionally project scope and preferred contact method.</li>
            <li>Conversations with the <strong className="text-primary">Zelvoraq AI assistant</strong>, if you choose to use it (see Section 3).</li>
          </ul>
          <p className="mt-3">
            We do not currently run any analytics or tracking cookies on this site. If that changes
            (for example, adding Google Analytics), this section will be updated to reflect it before
            it goes live.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">3. The Zelvoraq AI assistant</h2>
          <p>
            The Zelvoraq AI assistant runs in one of two modes. In <strong className="text-primary">demo
            mode</strong> (the current default), your messages are processed by a simple rule-based
            script running on our own server — they are not sent to any external AI provider. Once a
            live AI connection is configured, messages you send to the assistant are processed by{" "}
            <strong className="text-primary">Anthropic</strong> (the maker of Claude) to generate a
            response. We do not use assistant conversations to train our own models, and the assistant
            never asks for sensitive information it doesn&apos;t need to help you.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">4. How we use your information</h2>
          <p>
            We use the information above to respond to your enquiry, understand your business
            situation, follow up about a strategy call, and improve how we explain our services. We do
            not sell your information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">5. Who we share it with</h2>
          <p className="mb-3">We work with a small number of service providers to run this site and respond to you:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li><strong className="text-primary">Vercel</strong> — hosts this website and processes standard web traffic logs.</li>
            <li><strong className="text-primary">Anthropic</strong> — processes messages sent to the Zelvoraq AI assistant, once a live connection is configured (see Section 3).</li>
            <li>
              A <strong className="text-primary">CRM or automation tool</strong>, only if and once we
              configure one to receive form submissions. [PLACEHOLDER: name the specific tool once
              chosen — e.g. HubSpot, Pipedrive.] No such tool is connected by default.
            </li>
          </ul>
          <p className="mt-3">We do not share your information with anyone else without telling you first.</p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">6. Visitors from the UK, EU, and elsewhere</h2>
          <p>
            If you are located in the UK or EU, data protection law (UK GDPR / GDPR) gives you rights
            over your personal data, including the right to access, correct, delete, or object to how
            we use it, and the right to complain to your local data protection authority. If you are
            located elsewhere, similar rights may apply under your local law. To exercise any of these
            rights, contact us using the details in Section 9.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">7. How long we keep it</h2>
          <p>
            We keep form submissions and assessment answers for as long as reasonably needed to
            respond to your enquiry and maintain business records, and delete or anonymize them when
            no longer needed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">8. Children&apos;s privacy</h2>
          <p>
            This website is not directed at children, and we do not knowingly collect personal
            information from anyone under 16.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">9. Contact</h2>
          <p>
            Questions about this policy, or requests to access, correct, or delete your information,
            can be sent to <a href="mailto:hello@zelvoraq.com" className="text-accent">hello@zelvoraq.com</a>.
            [PLACEHOLDER: registered business address, once available.]
          </p>
        </div>

        <div>
          <h2 className="font-display text-[18px] font-semibold text-primary mb-2">10. Changes to this policy</h2>
          <p>
            We may update this policy as the business and website evolve. Material changes will be
            reflected by updating the date at the top of this page.
          </p>
        </div>
      </div>
    </section>
  );
}
