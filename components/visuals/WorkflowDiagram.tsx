// The site's one recurring signature visual: a real coded "live system" diagram,
// not a decorative illustration. Reused in the hero (compact) and the
// "How AI Works" section (full). Alternates amber/teal per node for visual
// rhythm. Motion is a single slow pulse per connector and is fully removed
// under prefers-reduced-motion (see app/globals.css).

interface WorkflowDiagramProps {
  nodes: string[];
  scale?: "full" | "compact";
}

export function WorkflowDiagram({ nodes, scale = "full" }: WorkflowDiagramProps) {
  return (
    <div className={`overflow-x-auto ${scale === "compact" ? "py-2" : "py-4"}`}>
      <div className={`flex items-center ${scale === "compact" ? "min-w-[420px]" : "min-w-[640px]"}`}>
        {nodes.map((node, i) => {
          const isTeal = i % 2 === 1;
          const dotColor = isTeal ? "var(--accent-data)" : "var(--accent-primary)";
          const rgbVar = isTeal ? "var(--accent-data-rgb)" : "var(--accent-primary-rgb)";
          return (
            <div className="contents" key={node}>
              <div className="flex flex-col items-center gap-2.5 text-center" style={{ width: scale === "compact" ? 84 : 110 }}>
                <span
                  className="rounded-full border-2 relative z-[2]"
                  style={{
                    width: scale === "compact" ? 10 : 14,
                    height: scale === "compact" ? 10 : 14,
                    background: dotColor,
                    borderColor: dotColor,
                    boxShadow: `0 0 0 4px rgb(${rgbVar} / 0.15)`,
                  }}
                />
                <span className="font-mono text-secondary leading-tight" style={{ fontSize: scale === "compact" ? 10 : 11 }}>
                  {node}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex-1 h-[2px] bg-borderc-strong relative -top-6 overflow-hidden">
                  <div
                    className="absolute top-0 left-[-40px] w-10 h-full animate-travel"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${dotColor}, transparent)`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
