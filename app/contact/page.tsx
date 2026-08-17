import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Book a Strategy Call",
  description:
    "Tell us what's slowing your business down. Book a strategy call with Zelvoraq to find the right AI system to start with.",
  path: "/contact",
});

export default function ContactPage({
  searchParams,
}: {
  searchParams: { rec?: string };
}) {
  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-14">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-4 inline-block">Contact</span>
        <h1 className="font-display text-[36px] md:text-[46px] font-bold tracking-tight leading-tight max-w-2xl mb-5">
          Let&apos;s talk about your business
        </h1>
        <p className="text-secondary text-[17px] leading-relaxed max-w-xl">
          Tell us what&apos;s slowing things down, and we&apos;ll reply within one business day to set up
          a short strategy call — no pressure, no automatic pitch.
        </p>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <h2 className="font-display text-[18px] font-semibold mb-3">What happens next</h2>
            <ol className="flex flex-col gap-4 mb-8">
              {[
                "We review what you've shared before the call — no cold pitch.",
                "A short strategy call to confirm the right starting point.",
                "If it's a fit, a clear proposal — no obligation either way.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 text-secondary text-[14px] leading-relaxed">
                  <span className="font-mono text-accent shrink-0">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="bg-surface border border-borderc rounded-lg2 p-5">
              <h3 className="font-display text-[14.5px] font-semibold mb-2">Prefer to book directly?</h3>
              <p className="text-secondary text-[13px] mb-3">Skip the form and pick a time on the calendar.</p>
              <a href={bookingUrl} className="text-accent text-[13.5px] font-semibold">
                Open booking calendar →
              </a>
            </div>
          </div>

          <LeadForm prefillAutomate={searchParams.rec} />
        </div>
      </section>
    </>
  );
}
