// The site's one recurring signature visual: a real coded "live system" diagram,
// not a decorative illustration. Reused in the hero (compact) and the
// "How AI Works" section (full). Alternates amber/teal per node for visual
// rhythm. Motion (connector travel + node pulse) is fully removed under
// prefers-reduced-motion (see app/globals.css, which already disables all
// animation/transition globally in that media query).

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
          const dotSize = scale === "compact" ? 10 : 14;
          return (
            <div className="contents" key={node}>
              <div className="flex flex-col items-center gap-2.5 text-center" style={{ width: scale === "compact" ? 84 : 110 }}>
                <span className="relative flex items-center justify-center" style={{ width: dotSize, height: dotSize }}>
                  {/* Soft pulsing aura behind the dot — glassmorphism-style glow, blurred and animated */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                      background: `radial-gradient(circle, rgb(${rgbVar} / 0.45), transparent 70%)`,
                      transform: "scale(2.8)",
                      filter: "blur(2px)",
                    }}
                  />
                  <span
                    className="rounded-full border-2 relative z-[2]"
                    style={{
                      width: dotSize,
                      height: dotSize,
                      background: dotColor,
                      borderColor: dotColor,
                      boxShadow: `0 0 0 4px rgb(${rgbVar} / 0.15), 0 0 18px 2px rgb(${rgbVar} / 0.35)`,
                    }}
                  />
                </span>
                <span
                  className="font-mono text-secondary leading-tight rounded-full border border-borderc backdrop-blur-sm px-2 py-0.5 transition-colors duration-300"
                  style={{ fontSize: scale === "compact" ? 10 : 11, background: "rgb(var(--bg-elevated-rgb) / 0.5)" }}
                >
                  {node}
                </span>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex-1 h-[2px] bg-borderc-strong relative -top-6 overflow-hidden rounded-full">
                  <div
                    className="absolute top-0 left-[-40px] w-10 h-full animate-travel"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${dotColor}, transparent)`,
                      animationDelay: `${i * 0.5}s`,
                      boxShadow: `0 0 12px 2px rgb(${rgbVar} / 0.6)`,
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
