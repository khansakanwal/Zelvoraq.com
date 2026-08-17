interface BadgeProps {
  children: React.ReactNode;
  tone?: "accent" | "data" | "neutral";
}

const toneClasses = {
  accent: "text-accent border-accent",
  data: "text-data border-data",
  neutral: "text-secondary border-borderc-strong",
};

export function Badge({ children, tone = "data" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[10.5px] tracking-[0.08em] uppercase border rounded-[4px] px-[7px] py-[3px] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
