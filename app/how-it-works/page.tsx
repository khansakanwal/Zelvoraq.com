import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "Discover, Design, Build, Optimize — how Zelvoraq turns a repetitive business process into a working AI system.",
  path: "/how-it-works",
});

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We start with your actual business, not a template. That means a working session to understand where time is lost, where leads slip, and which process is worth fixing first.",
    detail: "Output: a clear picture of the specific problem worth solving, in plain language.",
  },
  {
    n: "02",
    title: "Design",
    desc: "We map the exact AI agent or automation that fits — what it needs to know, what tools it connects to, and where a human stays in the loop.",
    detail: "Output: a system design you can review and question before anything gets built.",
  },
  {
    n: "03",
    title: "Build",
    desc: "We develop the system and connect it to the tools your business already runs on — your CRM, calendar, website, or store.",
    detail: "Output: a working system, tested against real scenarios before it goes live.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "Once it's live, we monitor how it performs and adjust it. If it's working, we talk about what to automate next.",
    detail: "Output: a system that keeps earning its place, not a one-time delivery.",
  },
];

const faq = [
  {
    question: "Do you build everything from scratch?",
    answer: "No — we connect to the tools you already use wherever possible. Building from scratch only happens where nothing suitable exists.",
  },
  {
    question: "Am I involved during the Build phase?",
    answer: "Yes. You'll see the system before it goes live, and nothing gets connected to real customer data without your review.",
  },
  {
    question: "What does 'human oversight' actually mean?",
    answer: "Every AI agent we build has a clear boundary for what it can decide on its own, and a clear handoff point to a person for anything outside that.",
  },
];

export default function HowItWorksPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-16">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">Process</span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-5">
          A simple process, followed the same way every time
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          No project starts with a build. It starts with understanding what&apos;s actually slowing you down.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.n} className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-10 ${i !== steps.length - 1 ? "border-b border-borderc" : ""}`}>
              <span className="font-mono text-accent text-[15px]">{step.n}</span>
              <div>
                <h2 className="font-display text-[22px] font-semibold mb-3">{step.title}</h2>
                <p className="text-secondary text-[15px] leading-relaxed max-w-xl mb-3">{step.desc}</p>
                <p className="text-tertiary text-[13px] font-mono">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16">
        <SectionHeading eyebrow="Questions" title="About the process" />
        <FAQAccordion items={faq} />
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <CTASection
          title="Ready to start with Discover?"
          lede="A strategy call is the first real step — no commitment required."
          ctaLabel="Get Your AI Opportunity Assessment"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
