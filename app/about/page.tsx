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
          <p className="text-secondary text-[14px] leading-relaxed">
            {/* TODO: replace with your real founder/team background — kept general here
                since no specific biographical details were provided. Keep it short:
                relevant experience, why Zelvoraq exists, and what you personally
                insist on for every project. */}
            This section is reserved for a short, specific founder and team background —
            real experience, not a generic biography. Add a few sentences on relevant
            operating or technical experience once finalized.
          </p>
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
