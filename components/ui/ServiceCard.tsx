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
      className="group bg-surface border border-borderc rounded-lg2 p-6 transition-all duration-150 hover:border-borderc-strong hover:-translate-y-0.5 block"
    >
      <div className="w-9 h-9 rounded-[8px] bg-elevated flex items-center justify-center mb-4 text-accent">
        <Icon />
      </div>
      {showVisual && (
        <div className="mb-4">
          <SolutionMockup kind={solution.icon} />
        </div>
      )}
      <h3 className="font-display text-[17px] font-semibold mb-1.5">{solution.navLabel}</h3>
      <p className="text-secondary text-[14px] leading-relaxed mb-4">{solution.homeSummary}</p>
      <span className="text-accent text-[13px] font-semibold">
        Learn more <span className="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
      </span>
    </Link>
  );
}
