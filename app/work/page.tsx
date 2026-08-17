import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Work — AI Demo Projects",
  description:
    "Concept demos and prototypes showing how Zelvoraq's AI agents and automations work — honestly labeled, not presented as completed client engagements.",
  path: "/work",
});

interface Project {
  tag: "Concept Demo" | "AI Demo" | "Prototype";
  title: string;
  problem: string;
  approach: string;
  tools: string[];
}

const projects: Project[] = [
  {
    tag: "Concept Demo",
    title: "AI Lead Qualification System",
    problem: "A services business had leads arriving through three different channels, with no consistent way to qualify or route them.",
    approach: "An AI agent asks a short set of qualifying questions on first contact, scores the lead, and routes it into the right follow-up sequence automatically.",
    tools: ["AI Agent", "CRM automation", "Email workflow"],
  },
  {
    tag: "AI Demo",
    title: "AI Receptionist",
    problem: "A small team was missing calls and messages outside business hours, with no way to triage what was urgent.",
    approach: "An always-on AI agent answers common questions, takes messages, and books straightforward appointments directly into the calendar.",
    tools: ["AI Agent", "Calendar integration", "Booking automation"],
  },
  {
    tag: "Prototype",
    title: "AI Ecommerce Assistant",
    problem: "An online store's support inbox was dominated by order-status and sizing questions.",
    approach: "A shopping assistant answers product and order questions directly on-site, reducing the volume reaching human support.",
    tools: ["AI Ecommerce", "Product data", "Order lookup"],
  },
  {
    tag: "Concept Demo",
    title: "Automated Lead Follow-Up System",
    problem: "Leads that didn't convert immediately were rarely followed up with again.",
    approach: "A scheduled sequence automatically re-engages leads at set intervals, with responses routed back to a human when interest picks up.",
    tools: ["Automation", "Email workflow", "CRM"],
  },
];

export default function WorkPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-14">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">Work</span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-5">
          AI Demo Projects
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          These are illustrative builds that show how each solution works in practice. They&apos;re honestly
          labeled below — none are presented as completed client engagements, and no results, client
          names, or metrics are attached to them.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-surface border border-borderc rounded-lg2 p-6 flex flex-col gap-4">
              <Badge tone="data">{p.tag}</Badge>
              <h2 className="font-display text-[19px] font-semibold">{p.title}</h2>
              <div>
                <h3 className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-tertiary mb-1.5">Problem</h3>
                <p className="text-secondary text-[13.5px] leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <h3 className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-tertiary mb-1.5">Approach</h3>
                <p className="text-secondary text-[13.5px] leading-relaxed">{p.approach}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tools.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-tertiary border border-borderc rounded-[4px] px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-10">
        <SectionHeading eyebrow="As we grow" title="Real case studies, when they exist" lede="This page is built to hold verified client work as soon as it's available — with the client's permission, real numbers, and no invented metrics in the meantime." />
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection
          title="Have a similar problem?"
          lede="Tell us what's slowing your business down — we'll tell you honestly whether AI is the right fix."
          ctaLabel="Get Your AI Opportunity Assessment"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
