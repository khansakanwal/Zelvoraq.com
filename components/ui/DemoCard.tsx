import { Badge } from "./Badge";

interface DemoCardProps {
  tag: "Concept Demo" | "AI Demo" | "Prototype";
  title: string;
  description: string;
}

function visualKind(title: string): "chat" | "pipeline" | "product" {
  const t = title.toLowerCase();
  if (t.includes("ecommerce") || t.includes("shop")) return "product";
  if (t.includes("receptionist") || t.includes("support")) return "chat";
  return "pipeline";
}

function ChatVisual() {
  return (
    <div className="h-28 rounded-md2 border border-borderc bg-elevated flex flex-col justify-center gap-2 px-4">
      <div className="self-start max-w-[75%] bg-elevated2 rounded-lg px-3 py-1.5 text-[11px] text-secondary">
        How can I help today?
      </div>
      <div className="self-end max-w-[65%] bg-accent rounded-lg px-3 py-1.5 text-[11px] text-[#191307] font-medium">
        Book a call
      </div>
      <div className="self-start flex gap-1 pl-1">
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
      </div>
    </div>
  );
}

function PipelineVisual() {
  const stages = ["New", "Qualified", "Booked"];
  return (
    <div className="h-28 rounded-md2 border border-borderc bg-elevated flex items-center justify-center gap-3 px-4">
      {stages.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${i === 2 ? "bg-data" : "bg-accent"}`} />
            <span className="text-[10px] font-mono text-secondary">{s}</span>
          </div>
          {i < stages.length - 1 && <span className="w-6 h-px bg-borderc-strong" />}
        </div>
      ))}
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="h-28 rounded-md2 border border-borderc bg-elevated flex items-center gap-3 px-4">
      <div className="w-12 h-12 rounded-md2 bg-elevated2 shrink-0" />
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2 rounded-full bg-elevated2 w-[80%]" />
        <div className="h-2 rounded-full bg-elevated2 w-[55%]" />
        <span className="mt-1 inline-flex w-fit font-mono text-[10px] text-data border border-data rounded-full px-2 py-0.5">In stock</span>
      </div>
    </div>
  );
}

export function DemoCard({ tag, title, description }: DemoCardProps) {
  const kind = visualKind(title);
  return (
    <div className="bg-surface border border-borderc rounded-lg2 p-6 flex flex-col gap-3">
      <Badge tone="data">{tag}</Badge>
      {kind === "chat" && <ChatVisual />}
      {kind === "pipeline" && <PipelineVisual />}
      {kind === "product" && <ProductVisual />}
      <h4 className="font-display text-[15px] font-semibold">{title}</h4>
      <p className="text-secondary text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}
