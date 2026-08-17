import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";
import { solutionIconMap } from "@/components/ui/Icons";
import { solutions, getSolution } from "@/lib/solutions-data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.navLabel,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  const Icon = solutionIconMap[solution.icon];
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.navLabel, path: `/solutions/${solution.slug}` },
  ]);
  const service = serviceSchema({
    name: solution.navLabel,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">
              {solution.eyebrow}
            </span>
            <h1 className="font-display text-[34px] md:text-[44px] font-bold tracking-tight leading-tight mb-5">
              {solution.headline}
            </h1>
            <p className="text-secondary text-[17px] leading-relaxed max-w-lg mb-7">{solution.summary}</p>
            <Button href="/contact" variant="primary">{solution.ctaLabel}</Button>
          </div>
          <div className="bg-surface border border-borderc rounded-lg2 p-6">
            <div className="w-10 h-10 rounded-[8px] bg-elevated flex items-center justify-center text-accent mb-5">
              <Icon />
            </div>
            <ul className="flex flex-col gap-3">
              {solution.heroPoints.map((point) => (
                <li key={point} className="text-[13.5px] text-secondary flex gap-2.5">
                  <span className="text-accent">—</span>{point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading eyebrow="Examples" title={`${solution.navLabel} we build`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.examples.map((ex) => (
            <div key={ex.name} className="bg-surface border border-borderc rounded-lg2 p-5">
              <h3 className="font-display text-[15.5px] font-semibold mb-1.5">{ex.name}</h3>
              <p className="text-secondary text-[13.5px] leading-relaxed">{ex.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading eyebrow="How it fits together" title="Where this sits in a working system" />
        <div className="bg-surface border border-borderc rounded-lg2 p-6 md:p-8 mb-6">
          <WorkflowDiagram nodes={["Customer", "AI Agent", "Qualification", "Automation", "CRM", "Booking / Follow-up"]} />
        </div>
        <p className="text-secondary text-[14px] max-w-xl">{solution.processNote}</p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-14">
        <SectionHeading eyebrow="Related" title="Other solutions" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherSolutions.map((s) => (
            <ServiceCard key={s.slug} solution={s} />
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection title={`Ready to talk about ${solution.navLabel.toLowerCase()}?`} ctaLabel={solution.ctaLabel} ctaHref="/contact" />
      </section>
    </>
  );
}
