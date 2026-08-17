import { Button } from "@/components/ui/Button";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";

export default function NotFound() {
  return (
    <div className="max-w-container mx-auto px-6 md:px-8 py-30 text-center">
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">
        404
      </span>
      <h1 className="font-display text-[32px] md:text-[40px] font-semibold mb-4">
        Looks like this workflow hit a dead end.
      </h1>
      <p className="text-secondary max-w-md mx-auto mb-10">
        The page you&apos;re looking for doesn&apos;t exist, or has moved. Let&apos;s get you back on track.
      </p>
      <div className="flex justify-center mb-14">
        <WorkflowDiagram nodes={["You", "404", "?"]} scale="compact" />
      </div>
      <Button href="/" variant="primary">Back to Zelvoraq</Button>
    </div>
  );
}
