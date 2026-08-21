import Link from "next/link";
import { solutionIconMap } from "./Icons";
import { SolutionMockup } from "@/components/visuals/SolutionMockup";
import type { Solution } from "@/lib/solutions-data";

interface ServiceCardProps {
  solution: Solution;
  showVisual?: boolean;
}

export function ServiceCard({ solution, showVisual = false }: ServiceCardProps) {
  const Icon = solutionIconMap[solution.icon];
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group relative isolate overflow-hidden bg-surface border border-borderc rounded-lg2 p-6 block
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[rgb(var(--accent-primary-rgb)/0.5)]
        hover:shadow-[0_0_0_1px_rgb(var(--accent-primary-rgb)/0.2),0_16px_36px_-12px_rgb(var(--accent-primary-rgb)/0.35),0_0_48px_-16px_rgb(var(--accent-data-rgb)/0.3)]"
    >
      {/* Gradient wash — invisible until hover, matches the site's existing radial-glow language from globals.css */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at 15% -10%, rgb(var(--accent-primary-rgb) / 0.16), transparent 60%), radial-gradient(360px circle at 110% 120%, rgb(var(--accent-data-rgb) / 0.12), transparent 60%)",
        }}
      />

      <div
        className="w-9 h-9 rounded-[8px] flex items-center justify-center mb-4 text-accent border border-borderc
          backdrop-blur-sm bg-[rgb(var(--bg-elevated-rgb)/0.55)]
          transition-all duration-300 group-hover:scale-110 group-hover:border-[rgb(var(--accent-primary-rgb)/0.45)]
          group-hover:shadow-[0_0_16px_-2px_rgb(var(--accent-primary-rgb)/0.5)]"
      >
        <Icon />
      </div>
      {showVisual && (
        <div className="mb-4 transition-transform duration-300 group-hover:scale-[1.015]">
          <SolutionMockup kind={solution.icon} />
        </div>
      )}
      <h3 className="font-display text-[17px] font-semibold mb-1.5">{solution.navLabel}</h3>
      <p className="text-secondary text-[14px] leading-relaxed mb-4">{solution.homeSummary}</p>
      <span className="text-accent text-[13px] font-semibold">
        Learn more <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
      </span>
    </Link>
  );
}
