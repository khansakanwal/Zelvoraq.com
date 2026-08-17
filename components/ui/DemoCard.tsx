import { Badge } from "./Badge";

interface DemoCardProps {
  tag: "Concept Demo" | "AI Demo" | "Prototype";
  title: string;
  description: string;
}

export function DemoCard({ tag, title, description }: DemoCardProps) {
  return (
    <div className="bg-surface border border-borderc rounded-lg2 p-6 flex flex-col gap-3">
      <Badge tone="data">{tag}</Badge>
      <div className="h-28 rounded-md2 border border-borderc bg-gradient-to-br from-elevated to-elevated2 flex items-center justify-center">
        <span className="text-tertiary text-[13px] font-mono">Preview</span>
      </div>
      <h4 className="font-display text-[15px] font-semibold">{title}</h4>
      <p className="text-secondary text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}
