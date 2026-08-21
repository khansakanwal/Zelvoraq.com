import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Zelvoraq builds AI systems around real business processes — practical, outcome-focused, and never AI for its own sake.",
  path: "/about",
});

const principles = [
  { title: "Business first, technology second", desc: "We start with the process that's costing you time, not with a piece of AI technology looking for a use case." },
  { title: "Practical over impressive", desc: "A working automation that saves five hours a week beats an elaborate AI system nobody asked for." },
  { title: "Human oversight, always", desc: "AI handles the repetitive parts. Judgment calls stay with your team, by design." },
  { title: "Built to last, not just launch", desc: "Systems are documented and structured so they can be maintained, expanded, or handed off — not locked to one person's memory." },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-14">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">About Zelvoraq</span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-6">
          Technology is only valuable when it solves a real business problem
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          Zelvoraq exists because most businesses don&apos;t need more software — they need the
          repetitive parts of their existing process handled automatically, so their team can spend
          time on the parts that actually need a person.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading eyebrow="How we approach it" title="Our operating principles" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((p) => (
            <div key={p.title} className="bg-surface border border-borderc rounded-lg2 p-6">
              <h3 className="font-display text-[16.5px] font-semibold mb-2">{p.title}</h3>
              <p className="text-secondary text-[14px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading
          eyebrow="Background"
          title="A practical, business-first approach to AI"
          lede="Zelvoraq is built by people who've worked inside real business operations, not just AI tooling — which is why every engagement starts with a process, not a product."
        />
        <div className="bg-surface border border-borderc rounded-lg2 p-6 max-w-2xl">
          <p className="font-display text-[15px] font-semibold mb-1">Khansa Kanwal</p>
          <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-accent mb-4">Founder &amp; CEO</p>
          <p className="text-secondary text-[14px] leading-relaxed">
            {/* TODO: expand with more specific background/experience whenever ready — kept
                short and honest here rather than inventing detail that wasn't provided. */}
            Zelvoraq is founded and led by Khansa Kanwal, built around a practical,
            business-first approach to AI — every engagement starts with a real process,
            not a product looking for a use case.
          </p>
        </div>
      </section>

      {/* NEW: Get in touch */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading eyebrow="Get in touch" title="Reach us directly" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          <a
            href="https://wa.me/923268673662"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-surface border border-borderc rounded-lg2 p-5 flex items-center gap-4 transition-all duration-200 hover:border-borderc-strong hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 rounded-[8px] bg-elevated flex items-center justify-center text-accent shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8.7 8.3c.18-.4.36-.4.53-.4.15 0 .32 0 .46.35.16.42.55 1.35.6 1.45.05.1.08.2 0 .33-.08.13-.12.22-.24.35-.12.13-.24.27-.35.4-.11.13-.22.24-.1.46.13.23.58.98 1.26 1.58.87.77 1.6 1 1.83 1.12.23.12.36.1.5-.06.14-.16.57-.65.72-.87.15-.23.3-.19.5-.11.2.08 1.24.58 1.45.68.21.1.35.15.4.24.06.09.06.5-.13 1-.19.5-1.07.94-1.46 1-.4.06-.85.08-1.36-.09-.31-.1-.71-.24-1.22-.46-2.15-.94-3.55-3.1-3.66-3.24-.11-.14-.9-1.19-.9-2.27 0-1.08.57-1.6.77-1.82Z" fill="currentColor" />
              </svg>
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold mb-0.5">WhatsApp</p>
              <p className="text-secondary text-[13.5px]">+92 326 867 3662 — WhatsApp only, no calls</p>
            </div>
          </a>

          <a
            href="mailto:contact@zelvoraq.com"
            className="group bg-surface border border-borderc rounded-lg2 p-5 flex items-center gap-4 transition-all duration-200 hover:border-borderc-strong hover:-translate-y-0.5"
          >
            <span className="w-9 h-9 rounded-[8px] bg-elevated flex items-center justify-center text-accent shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold mb-0.5">Email</p>
              <p className="text-secondary text-[13.5px]">contact@zelvoraq.com</p>
            </div>
          </a>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection
          title="Want to talk about your business specifically?"
          ctaLabel="Get Your AI Opportunity Assessment"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
