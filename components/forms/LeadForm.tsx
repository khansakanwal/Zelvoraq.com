"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  website: string;
  businessType: string;
  automate: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  businessType: "",
  automate: "",
  message: "",
};

const businessTypes = [
  "Founder / small team",
  "Consultant or coach",
  "Agency",
  "SaaS business",
  "Professional services",
  "Ecommerce",
  "Local / service business",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function LeadForm({ prefillAutomate }: { prefillAutomate?: string }) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    automate: prefillAutomate ?? "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid business email.";
    if (!form.company.trim()) next.company = "Company name is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-borderc rounded-lg2 p-8 text-center">
        <h3 className="font-display text-[20px] font-semibold mb-2">Thanks — that&apos;s in.</h3>
        <p className="text-secondary text-[14.5px] leading-relaxed">
          We&apos;ll review what you shared and reply within one business day to set up a strategy call.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-elevated border border-borderc rounded-[8px] px-3.5 py-3 text-[14px] text-primary placeholder:text-tertiary";
  const labelClass = "block text-[13px] font-medium text-secondary mb-1.5";
  const errorClass = "text-[12px] text-accent mt-1";

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-borderc rounded-lg2 p-6 md:p-8 flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Business email</label>
          <input id="email" type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" className={inputClass} value={form.company} onChange={(e) => update("company", e.target.value)} />
          {errors.company && <p className={errorClass}>{errors.company}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="website">Website (optional)</label>
          <input id="website" className={inputClass} value={form.website} onChange={(e) => update("website", e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="businessType">Business type</label>
        <select
          id="businessType"
          className={inputClass}
          value={form.businessType}
          onChange={(e) => update("businessType", e.target.value)}
        >
          <option value="">Select one</option>
          {businessTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="automate">What would you like to automate?</label>
        <textarea
          id="automate"
          rows={3}
          className={inputClass}
          value={form.automate}
          onChange={(e) => update("automate", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Anything else? (optional)</label>
        <textarea
          id="message"
          rows={2}
          className={inputClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-accent">
          Something went wrong sending this — please try again, or email contact@zelvoraq.com directly.
        </p>
      )}

      <Button variant="primary" className="w-full justify-center" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Book a Strategy Call"}
      </Button>
    </form>
  );
}
