import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = buildMetadata({
  title: "AI Solutions for Business",
  description:
    "Zelvoraq's four AI solutions — AI Agents, Business Automation, AI Websites, and AI Ecommerce — built to solve specific, common business problems.",
  path: "/solutions",
});

export default function SolutionsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-16">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">
          Solutions
        </span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-5">
          Four ways to put AI to work — not a bundle of features you&apos;ll never use
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          Every Zelvoraq engagement starts with one specific problem. These are the four systems we
          build most often to solve it — each one stands on its own, and most projects combine two or more over time.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <ServiceCard key={s.slug} solution={s} />
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16">
        <SectionHeading
          eyebrow="How they connect"
          title="Most systems combine more than one solution"
          lede="An AI Website often feeds an AI Agent, which hands qualified leads into an Automation — one connected system, not four separate purchases."
        />
        <div className="bg-surface border border-borderc rounded-lg2 p-6 md:p-8">
          <WorkflowDiagram nodes={["Customer", "AI Agent", "Qualification", "Automation", "CRM", "Booking / Follow-up"]} />
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection
          title="Not sure which one fits?"
          lede="The AI Opportunity Assessment on the homepage takes a few minutes and points you to the right starting point."
          ctaLabel="Get Your AI Opportunity Assessment"
          ctaHref="/#assessment"
        />
      </section>
    </>
  );
}
