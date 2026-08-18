// Small, per-solution "product interface" mockups — real coded UI, not stock
// imagery or decorative icons. Used only where explicitly enabled (homepage
// Core Solutions cards), so other pages that reuse ServiceCard are unaffected.

interface SolutionMockupProps {
  kind: "agent" | "automation" | "website" | "ecommerce";
}

function AgentMockup() {
  return (
    <div className="h-24 rounded-md2 border border-borderc bg-elevated p-3 flex flex-col justify-center gap-1.5">
      <div className="self-start max-w-[75%] bg-elevated2 rounded-md px-2.5 py-1.5 text-[10.5px] text-secondary">
        Need help booking a call?
      </div>
      <div className="self-end max-w-[75%] bg-accent text-[#191307] rounded-md px-2.5 py-1.5 text-[10.5px] font-medium">
        Sure — Tuesday 2pm works.
      </div>
    </div>
  );
}

function AutomationMockup() {
  const stages = ["Lead", "Qualify", "CRM"];
  return (
    <div className="h-24 rounded-md2 border border-borderc bg-elevated p-3 flex items-center justify-center gap-2.5">
      {stages.map((s, i) => (
        <div key={s} className="flex items-center gap-2.5">
          <div className="flex flex-col items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${i === stages.length - 1 ? "bg-data" : "bg-accent"}`} />
            <span className="text-[9px] font-mono text-secondary">{s}</span>
          </div>
          {i < stages.length - 1 && <span className="w-4 h-px bg-borderc-strong" />}
        </div>
      ))}
    </div>
  );
}

function WebsiteMockup() {
  return (
    <div className="h-24 rounded-md2 border border-borderc bg-elevated p-2.5 flex flex-col gap-1.5">
      <div className="flex items-center gap-1 px-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-elevated2" />
        <span className="w-1.5 h-1.5 rounded-full bg-elevated2" />
        <span className="w-1.5 h-1.5 rounded-full bg-elevated2" />
      </div>
      <div className="flex-1 rounded-[6px] bg-base relative overflow-hidden">
        <div className="absolute top-2 left-2 h-1.5 w-[60%] rounded-full bg-elevated2" />
        <div className="absolute top-5 left-2 h-1.5 w-[40%] rounded-full bg-elevated2" />
        <span className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h16v10H8l-4 4V5Z" stroke="#191307" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="h-24 rounded-md2 border border-borderc bg-elevated p-3 flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-md2 bg-elevated2 shrink-0" />
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-1.5 rounded-full bg-elevated2 w-[75%]" />
        <div className="h-1.5 rounded-full bg-elevated2 w-[50%]" />
      </div>
      <span className="font-mono text-[9px] text-data border border-data rounded-full px-1.5 py-0.5 shrink-0">Cart</span>
    </div>
  );
}

export function SolutionMockup({ kind }: SolutionMockupProps) {
  if (kind === "agent") return <AgentMockup />;
  if (kind === "automation") return <AutomationMockup />;
  if (kind === "website") return <WebsiteMockup />;
  return <EcommerceMockup />;
}
