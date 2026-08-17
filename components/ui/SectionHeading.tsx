interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, lede, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-3 inline-block">
        {eyebrow}
      </span>
      <h2 className="font-display text-[28px] md:text-[34px] font-semibold tracking-tight leading-tight">
        {title}
      </h2>
      {lede && <p className="text-secondary mt-3 text-[16px] leading-relaxed">{lede}</p>}
    </div>
  );
}
