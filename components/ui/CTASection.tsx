import { Button } from "./Button";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTASection({ eyebrow, title, lede, ctaLabel, ctaHref }: CTASectionProps) {
  return (
    <div className="bg-surface border border-borderc rounded-lg2 px-8 py-14 text-center">
      {eyebrow && (
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-3 inline-block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[28px] md:text-[34px] font-semibold tracking-tight max-w-xl mx-auto">
        {title}
      </h2>
      {lede && <p className="text-secondary mt-3 max-w-lg mx-auto">{lede}</p>}
      <div className="mt-8">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
