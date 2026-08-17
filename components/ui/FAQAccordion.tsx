"use client";

import { useState } from "react";
import { ChevronDown } from "./Icons";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-borderc border-y border-borderc">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-display font-semibold text-[16px]">{item.question}</span>
              <ChevronDown
                className={`text-secondary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="text-secondary text-[14.5px] leading-relaxed pb-5 pr-8">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
