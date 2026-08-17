"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Answers = {
  businessType: string;
  teamSize: string;
  repetitiveTask: string;
  contactChannels: string[];
  tools: string[];
  scope: string;
  preferredContact: string;
};

const initialAnswers: Answers = {
  businessType: "",
  teamSize: "",
  repetitiveTask: "",
  contactChannels: [],
  tools: [],
  scope: "",
  preferredContact: "",
};

const TOTAL_STEPS = 6;

const recommendations: Record<
  string,
  { title: string; description: string; solutionSlug: string; ctaText: string }
> = {
  "Responding to customer questions": {
    title: "AI Customer Support Agent",
    description:
      "The biggest opportunity is an AI agent that handles your most common customer questions instantly, and hands off anything unusual to your team.",
    solutionSlug: "ai-agents",
    ctaText: "an AI Customer Support Agent",
  },
  "Following up with leads": {
    title: "AI Lead Qualification + Follow-Up System",
    description:
      "Based on your answers, the biggest opportunity is capturing leads the moment they arrive and following up automatically before they go cold.",
    solutionSlug: "business-automation",
    ctaText: "an AI Lead Qualification + Follow-Up System",
  },
  "Booking or rescheduling appointments": {
    title: "AI Appointment Booking Agent",
    description:
      "An AI agent that finds a time, books it, and confirms it — removing the back-and-forth that currently eats your calendar.",
    solutionSlug: "ai-agents",
    ctaText: "an AI Appointment Booking Agent",
  },
  "Manual admin & reporting": {
    title: "Business Process Automation",
    description:
      "The clearest win is automating the recurring admin and reporting work that currently depends on someone remembering to do it.",
    solutionSlug: "business-automation",
    ctaText: "a Business Automation System",
  },
  "Ecommerce support or order questions": {
    title: "AI Ecommerce Assistant",
    description:
      "An AI shopping and support assistant that handles order questions and FAQs automatically, built for your store.",
    solutionSlug: "ai-ecommerce",
    ctaText: "an AI Ecommerce Assistant",
  },
};

const optionButtonBase =
  "text-left border rounded-[8px] px-4 py-3 text-[13.5px] transition-colors cursor-pointer";

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${optionButtonBase} ${
        selected ? "border-accent text-primary bg-accent/[0.06]" : "border-borderc-strong text-secondary"
      }`}
    >
      {label}
      {selected && <span className="float-right text-accent">✓</span>}
    </button>
  );
}

export function AssessmentFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [done, setDone] = useState(false);
  const router = useRouter();

  function toggleMulti(key: "contactChannels" | "tools", value: string) {
    setAnswers((prev) => {
      const current = prev[key];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  }

  function next() {
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
    else setDone(true);
  }
  function back() {
    if (step > 0) setStep(step - 1);
  }

  const canContinue = (): boolean => {
    switch (step) {
      case 0: return !!answers.businessType;
      case 1: return !!answers.teamSize;
      case 2: return !!answers.repetitiveTask;
      case 3: return answers.contactChannels.length > 0;
      case 4: return true; // tools is optional context
      case 5: return true; // scope + preferred contact — both optional
      default: return true;
    }
  };

  if (done) {
    const rec =
      recommendations[answers.repetitiveTask] ?? {
        title: "A Custom AI System",
        description:
          "Your answers point to a mix of opportunities — the right starting point is worth a short conversation.",
        solutionSlug: "ai-agents",
        ctaText: "the right AI system for your business",
      };

    return (
      <div className="bg-surface border border-accent rounded-lg2 p-8 max-w-lg mx-auto text-center">
        <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-data mb-3 inline-block">
          Your recommendation
        </span>
        <h3 className="font-display text-[22px] font-semibold mb-3">{rec.title}</h3>
        <p className="text-secondary text-[14.5px] leading-relaxed mb-7">{rec.description}</p>
        <Button
          variant="primary"
          className="w-full justify-center"
          onClick={() =>
            router.push(`/contact?rec=${encodeURIComponent(`I'm interested in ${rec.ctaText}.`)}`)
          }
        >
          Discuss Your AI System
        </Button>
        <button
          className="text-secondary text-[12.5px] mt-4 underline"
          onClick={() => {
            setDone(false);
            setStep(0);
            setAnswers(initialAnswers);
          }}
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-borderc rounded-lg2 p-6 md:p-8 max-w-lg mx-auto">
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-accent" : "bg-elevated2"}`} />
        ))}
      </div>
      <span className="font-mono text-[11px] text-tertiary uppercase tracking-[0.06em] mb-2 block">
        Step {step + 1} of {TOTAL_STEPS}
      </span>

      {step === 0 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-4">What type of business do you run?</h3>
          <div className="flex flex-col gap-2 mb-6">
            {["Founder / small team", "Consultant or coach", "Agency", "SaaS business", "Professional services", "Ecommerce", "Local / service business"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.businessType === v} onClick={() => setAnswers({ ...answers, businessType: v })} />
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-4">How large is your team?</h3>
          <div className="flex flex-col gap-2 mb-6">
            {["Just me", "2–10", "11–50", "50+"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.teamSize === v} onClick={() => setAnswers({ ...answers, teamSize: v })} />
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-4">
            What takes up the most repetitive time in your business right now?
          </h3>
          <div className="flex flex-col gap-2 mb-6">
            {Object.keys(recommendations).map((v) => (
              <OptionButton key={v} label={v} selected={answers.repetitiveTask === v} onClick={() => setAnswers({ ...answers, repetitiveTask: v })} />
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-4">
            How do customers reach you, and where do things tend to fall through the cracks?
          </h3>
          <div className="flex flex-col gap-2 mb-6">
            {["Website form", "Phone calls", "Email", "Social media / DMs", "Nothing gets lost — we keep up fine"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.contactChannels.includes(v)} onClick={() => toggleMulti("contactChannels", v)} />
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-4">What tools does your business already run on?</h3>
          <div className="flex flex-col gap-2 mb-6">
            {["Website / booking page", "CRM", "Email & calendar tools", "Shopify / WooCommerce", "Spreadsheets", "Nothing formal yet"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.tools.includes(v)} onClick={() => toggleMulti("tools", v)} />
            ))}
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h3 className="font-display text-[18px] font-semibold mb-2">Approximate project scope</h3>
          <p className="text-secondary text-[13px] mb-4">Optional — helps us tailor the right starting point.</p>
          <div className="flex flex-col gap-2 mb-5">
            {["Under $3,000", "$3,000–$10,000", "$10,000+", "Not sure yet"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.scope === v} onClick={() => setAnswers({ ...answers, scope: v })} />
            ))}
          </div>
          <button
            type="button"
            className="text-tertiary text-[12px] underline mb-6"
            onClick={() => setAnswers({ ...answers, scope: "Prefer not to say" })}
          >
            Prefer not to say
          </button>

          <h3 className="font-display text-[15px] font-semibold mb-3">Preferred contact method</h3>
          <div className="flex gap-2 mb-6 flex-wrap">
            {["Email", "Phone", "WhatsApp"].map((v) => (
              <OptionButton key={v} label={v} selected={answers.preferredContact === v} onClick={() => setAnswers({ ...answers, preferredContact: v })} />
            ))}
          </div>
        </>
      )}

      <div className="flex justify-between items-center pt-2 border-t border-borderc">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="text-secondary text-[13px] disabled:opacity-30 py-2"
        >
          ← Back
        </button>
        <Button variant="primary" className="!py-2.5 !px-5 !text-[13.5px]" onClick={next} disabled={!canContinue()}>
          {step === TOTAL_STEPS - 1 ? "See My Recommendation" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
