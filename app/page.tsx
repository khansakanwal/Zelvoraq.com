import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { DemoCard } from "@/components/ui/DemoCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";
import { AssessmentFlow } from "@/components/forms/AssessmentFlow";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/lib/solutions-data";

const processSteps = [
  { n: "01", title: "Discover", desc: "We look at how the business actually runs today and find where time and leads are being lost." },
  { n: "02", title: "Design", desc: "We map the specific AI agent or automation that fits — not a generic package." },
  { n: "03", title: "Build", desc: "We develop and connect the system to the tools your team already uses." },
  { n: "04", title: "Optimize", desc: "We monitor how it performs and expand it once it's proven out." },
];

const segments = [
  "Founders & small teams",
  "Consultants & coaches",
  "Agencies",
  "SaaS businesses",
  "Professional services",
  "Ecommerce brands",
  "Local & service businesses",
];

const differentiators = [
  { title: "We design before we build", desc: "Every project starts by mapping your actual process, not installing a template." },
  { title: "One team, start to finish", desc: "The people who design the system are the same people who build and support it." },
  { title: "Human oversight, always", desc: "AI handles the repetitive parts; your team stays in control of anything that needs judgment." },
  { title: "Built to expand", desc: "Every system is architected so the next automation connects to it, rather than starting over." },
];

const faqItems = [
  {
    question: "Do I need to know anything about AI to work with you?",
    answer: "No. Most clients don't. We translate what's slowing your business down into a system — you don't need to understand the technical side for it to work.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope — a single AI agent or automation can take a few weeks; a full AI website or ecommerce system takes longer. We'll give you a real timeline after the Discover step.",
  },
  {
    question: "Will an AI agent replace my team?",
    answer: "No — it takes the repetitive, first-line work off their plate so they can spend time on what actually needs a person.",
  },
  {
    question: "What if I'm not sure what to automate first?",
    answer: "That's what the AI Opportunity Assessment on this page is for — answer a few questions and we'll point you to the highest-impact starting point.",
  },
  {
    question: "Do you work with businesses outside the US and UK?",
    answer: "Yes — our primary markets are the US and UK, and we also work with businesses across Canada, Australia, the UAE, and Europe.",
  },
  {
    question: "What happens after the system is live?",
    answer: "We monitor it, fix what needs fixing, and — if it's working — talk about what to automate next. Ongoing optimization is available, never required.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO (trust statement merged in) */}
      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">
              AI Systems for Modern Business
            </span>
            <h1 className="font-display text-[40px] md:text-[54px] font-bold tracking-tight leading-[1.08] mb-6">
              AI Systems That Work For Your Business
            </h1>
            <p className="text-secondary text-[17px] md:text-[18px] leading-relaxed max-w-lg mb-4">
              We build AI agents, automations, AI-powered websites, and AI ecommerce systems that
              handle repetitive work — so your team can focus on what actually needs a person.
            </p>
            <p className="text-secondary text-[15px] leading-relaxed max-w-lg mb-8">
              We don&apos;t sell AI for the sake of AI. We look at what&apos;s actually slowing your
              business down, then build the system that fixes it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">Get Your AI Opportunity Assessment</Button>
              <Button href="/solutions" variant="ghost">Explore AI Solutions →</Button>
            </div>
          </div>

          <div className="bg-surface border border-borderc rounded-lg2 overflow-hidden shadow-card">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-borderc bg-elevated">
              <span className="w-2.5 h-2.5 rounded-full bg-elevated2" />
              <span className="w-2.5 h-2.5 rounded-full bg-elevated2" />
              <span className="w-2.5 h-2.5 rounded-full bg-elevated2" />
              <span className="ml-3 font-mono text-[10px] text-tertiary">zelvoraq-agent · live</span>
            </div>
            <div className="p-5">
              <ChatWidget variant="inline" />
              <span className="text-secondary text-[13px] font-mono mt-5 mb-3 block">How it connects behind the scenes</span>
              <WorkflowDiagram nodes={["Customer", "AI Agent", "Qualification", "Automation", "CRM", "Booking"]} scale="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title="The work piling up isn't complicated. It's just repetitive."
            lede="Most of the time businesses lose isn't hard work — it's the same small tasks, repeated by hand, every single day."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Leads go cold", desc: "A form gets filled out, and nobody follows up for two days. By then, they've called someone else." },
            { title: "Support questions repeat", desc: "The same handful of questions, answered by hand, dozens of times a week." },
            { title: "Admin eats the calendar", desc: "Booking, rescheduling, and reporting take time that should go toward the business itself." },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="bg-surface border border-borderc rounded-lg2 p-6 h-full">
                <h3 className="font-display text-[17px] font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. CORE SOLUTIONS */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Four ways to put AI to work in your business"
            lede="Each one solves a specific, common problem — not a bundle of features you'll never use."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <Reveal key={s.slug}>
              <ServiceCard solution={s} showVisual />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. HOW AI WORKS INSIDE A BUSINESS */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="How it fits together"
            title="What a working AI system actually looks like"
            lede="A customer reaches out, an AI agent handles the first response, qualifies what they need, and the right automation takes it from there — logged in your CRM, booked on your calendar."
          />
        </Reveal>
        <Reveal>
          <div className="bg-surface border border-borderc rounded-lg2 p-6 md:p-8">
            <WorkflowDiagram nodes={["Customer", "AI Agent", "Qualification", "Automation", "CRM", "Booking / Follow-up"]} />
          </div>
        </Reveal>
      </section>

      {/* 5. AI OPPORTUNITY ASSESSMENT */}
      <section id="assessment" className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20 scroll-mt-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Find your starting point"
            title="Get Your AI Opportunity Assessment"
            lede="Answer a few questions about how your business runs today, and we'll point you to the specific system worth building first."
          />
        </Reveal>
        <Reveal>
          <AssessmentFlow />
        </Reveal>
      </section>

      {/* 6. DEMO PROJECTS */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="See it in practice"
            title="AI Demo Projects"
            lede="Illustrative builds that show the pattern behind each solution — clearly labeled, not presented as completed client work."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Reveal><DemoCard tag="Concept Demo" title="AI Lead Qualification System" description="A prototype showing how inbound leads get qualified and routed automatically." /></Reveal>
          <Reveal><DemoCard tag="AI Demo" title="AI Receptionist" description="A working demo you can interact with — built to show the pattern, not tied to one client." /></Reveal>
          <Reveal><DemoCard tag="Prototype" title="AI Ecommerce Assistant" description="An early-stage build exploring product Q&A and cart-recovery flows." /></Reveal>
        </div>
        <Reveal>
          <Link href="/work" className="text-accent text-[14px] font-semibold">View all demo projects →</Link>
        </Reveal>
      </section>

      {/* 7. HOW WE WORK */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading eyebrow="Process" title="How we work" lede="A four-step process, the same for every project regardless of size." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {processSteps.map((step) => (
            <Reveal key={step.n}>
              <div>
                <span className="font-mono text-accent text-[13px]">{step.n}</span>
                <h3 className="font-display text-[18px] font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-secondary text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. WHO WE HELP + WHY ZELVORAQ (merged) */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-3 inline-block">Who we help</span>
              <h2 className="font-display text-[24px] font-semibold mb-5">Built for businesses that run lean</h2>
              <div className="flex flex-wrap gap-2.5">
                {segments.map((seg) => (
                  <span key={seg} className="border border-borderc-strong rounded-full px-4 py-2 text-[13px] text-secondary">
                    {seg}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-3 inline-block">Why Zelvoraq</span>
              <h2 className="font-display text-[24px] font-semibold mb-5">Practical systems, not AI for its own sake</h2>
              <div className="flex flex-col gap-4">
                {differentiators.map((d) => (
                  <div key={d.title}>
                    <h4 className="font-display text-[15px] font-semibold mb-1">{d.title}</h4>
                    <p className="text-secondary text-[13.5px] leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        </Reveal>
        <Reveal>
          <FAQAccordion items={faqItems} />
        </Reveal>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-24">
        <Reveal>
          <CTASection
            eyebrow="Ready when you are"
            title="Let's find out what AI can do for your business"
            lede="A short strategy call is enough to know whether — and where — this makes sense for you."
            ctaLabel="Get Your AI Opportunity Assessment"
            ctaHref="/contact"
          />
        </Reveal>
      </section>
    </>
  );
}
