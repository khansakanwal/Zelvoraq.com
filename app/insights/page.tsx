import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Insights — AI & Automation for Business",
  description:
    "Practical answers to real questions about AI agents, business automation, AI websites, and ecommerce automation — no filler, no hype.",
  path: "/insights",
});

interface Topic {
  category: "AI Agents" | "Business Automation" | "AI Websites" | "Ecommerce Automation" | "AI Strategy";
  title: string;
  teaser: string;
}

// Structure only — full articles are published once written, not generated in bulk.
// This intentionally avoids thin, keyword-stuffed pages while still establishing the
// topical categories search engines and visitors can expect content under.
const plannedTopics: Topic[] = [
  { category: "AI Strategy", title: "What business tasks can AI automate?", teaser: "A practical breakdown of what's actually worth automating first, and what isn't." },
  { category: "AI Agents", title: "AI agent vs. chatbot: what's the difference?", teaser: "Why the two get confused, and what actually separates them in practice." },
  { category: "AI Strategy", title: "How much does business automation cost?", teaser: "A realistic look at project scope and pricing ranges, without invented numbers." },
  { category: "Business Automation", title: "What should a small business automate first?", teaser: "A framework for prioritizing your first automation project." },
  { category: "Business Automation", title: "How to automate lead qualification", teaser: "The mechanics of turning inbound interest into qualified, routed leads." },
  { category: "AI Agents", title: "AI customer support vs. traditional support", teaser: "Where AI genuinely helps support teams, and where it doesn't." },
  { category: "Business Automation", title: "How AI can reduce repetitive admin work", teaser: "A look at the admin tasks most commonly worth automating." },
];

const categories = ["AI Agents", "Business Automation", "AI Websites", "Ecommerce Automation", "AI Strategy"];

export default function InsightsPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-10">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">Insights</span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-5">
          Practical answers, not filler
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          Straightforward explanations of what AI and automation can (and can&apos;t) do for a business
          like yours. Published as they&apos;re written — not generated in bulk.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <span key={c} className="border border-borderc-strong rounded-full px-4 py-1.5 text-[12.5px] text-secondary">{c}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {plannedTopics.map((t) => (
            <div key={t.title} className="bg-surface border border-borderc rounded-lg2 p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge tone="neutral">{t.category}</Badge>
                <span className="font-mono text-[10.5px] text-tertiary uppercase tracking-[0.06em]">Coming soon</span>
              </div>
              <h2 className="font-display text-[16.5px] font-semibold mb-2">{t.title}</h2>
              <p className="text-secondary text-[13.5px] leading-relaxed">{t.teaser}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
