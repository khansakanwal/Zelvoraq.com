// Small, purposeful line icons — no stock icon packs, no robot/brain imagery.
// Each icon literally represents the solution: a person icon for agents,
// stacked lines for automation, a browser frame for websites, a cart for ecommerce.

export function AgentIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function AutomationIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h16M4 6h10M4 18h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WebsiteIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function EcommerceIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h16l-1.5 9h-13L4 6Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="19" r="1.4" fill="currentColor" />
      <circle cx="17" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  // Three connected nodes — placeholder mark, deliberately not a robot/brain/circuit icon.
  // Replace with the final logo asset when available; nothing else references its shape.
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="5" cy="19" r="2.5" fill="var(--accent-primary)" />
      <circle cx="19" cy="5" r="2.5" fill="var(--accent-primary)" />
      <circle cx="19" cy="19" r="2.5" fill="var(--accent-data)" />
      <path d="M6.5 17.5 17.5 6.5M17.5 17.5 19 5" stroke="var(--text-tertiary)" strokeWidth="1.2" />
    </svg>
  );
}

export function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const solutionIconMap = {
  agent: AgentIcon,
  automation: AutomationIcon,
  website: WebsiteIcon,
  ecommerce: EcommerceIcon,
};
