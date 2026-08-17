export type SolutionSlug =
  | "ai-agents"
  | "business-automation"
  | "ai-websites"
  | "ai-ecommerce";

export interface SolutionExample {
  name: string;
  description: string;
}

export interface Solution {
  slug: SolutionSlug;
  icon: "agent" | "automation" | "website" | "ecommerce";
  navLabel: string;
  navDescription: string;
  eyebrow: string;
  headline: string;
  summary: string;
  homeSummary: string;
  ctaLabel: string;
  heroPoints: string[];
  examples: SolutionExample[];
  processNote: string;
  keywordFocus: string;
  metaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: "ai-agents",
    icon: "agent",
    navLabel: "AI Agents",
    navDescription: "Custom AI workers for sales & support",
    eyebrow: "AI Agents",
    headline: "AI workers that handle the conversations your team doesn't have time for",
    summary:
      "Custom AI agents that answer customers, qualify leads, and book appointments — built around how your business actually operates, not a generic chatbot script.",
    homeSummary:
      "Custom AI workers that qualify leads, answer customers, and book work — without adding headcount.",
    ctaLabel: "Build My AI Agent",
    heroPoints: [
      "Answers customer questions in your business's own language",
      "Qualifies leads before they reach your team",
      "Works across chat, email, and voice where needed",
    ],
    examples: [
      { name: "AI Sales Agent", description: "Engages inbound interest and moves qualified prospects toward a call." },
      { name: "AI Customer Support Agent", description: "Handles common questions instantly, escalates the rest to a human." },
      { name: "AI Receptionist", description: "Answers, routes, and logs incoming enquiries around the clock." },
      { name: "AI Appointment Booking Agent", description: "Finds a time, books it, and confirms — without back-and-forth email." },
      { name: "AI Lead Qualification Agent", description: "Asks the right questions before a lead ever reaches your inbox." },
      { name: "AI Follow-Up Agent", description: "Re-engages leads who went quiet, on a schedule that doesn't rely on memory." },
    ],
    processNote:
      "We start by mapping the exact conversations your team repeats most, then build the agent around that — not the other way around.",
    keywordFocus: "custom AI agents, AI sales agent, AI customer support agent",
    metaDescription:
      "Zelvoraq builds custom AI agents that qualify leads, answer customers, and book appointments — so your team stops repeating itself.",
  },
  {
    slug: "business-automation",
    icon: "automation",
    navLabel: "Business Automation",
    navDescription: "Workflows, follow-up, operations",
    eyebrow: "Business Automation",
    headline: "Turn repetitive business processes into automated workflows",
    summary:
      "We connect the tools you already use so leads, follow-ups, onboarding, and reporting move on their own — no one has to remember to push them along.",
    homeSummary:
      "Turn repetitive processes — follow-up, onboarding, reporting — into automated workflows.",
    ctaLabel: "Automate My Workflow",
    heroPoints: [
      "Built around the tools already in your business, not a rip-and-replace",
      "Reduces the manual steps between a lead arriving and a lead being worked",
      "Every workflow is visible and editable, not a black box",
    ],
    examples: [
      { name: "Lead capture automation", description: "New leads are logged, tagged, and routed the moment they arrive." },
      { name: "CRM automation", description: "Records update themselves as deals and conversations move forward." },
      { name: "Email workflows", description: "The right message goes out at the right moment, automatically." },
      { name: "Customer onboarding", description: "New clients get a consistent, guided start without manual setup." },
      { name: "Follow-up automation", description: "Leads and clients get followed up with on schedule, every time." },
      { name: "Reporting workflows", description: "Recurring reports assemble themselves instead of eating an afternoon." },
    ],
    processNote:
      "We map your current process first — where it breaks, where it's manual, where it depends on one person remembering — then automate that specific gap.",
    keywordFocus: "business process automation, AI automation services, workflow automation",
    metaDescription:
      "Zelvoraq turns repetitive business processes — lead follow-up, onboarding, reporting — into automated workflows built around the tools you already use.",
  },
  {
    slug: "ai-websites",
    icon: "website",
    navLabel: "AI Websites",
    navDescription: "Sites that qualify and convert",
    eyebrow: "AI Websites",
    headline: "Websites that qualify visitors, not just display information",
    summary:
      "A fast, SEO-ready website with an AI assistant, smart forms, and automated follow-up built in — so it keeps working after the visitor leaves the page.",
    homeSummary:
      "Websites that qualify visitors, book appointments and follow up automatically.",
    ctaLabel: "Build My AI Website",
    heroPoints: [
      "Built on a genuine performance and SEO foundation, not a page builder",
      "Qualifies and books visitors instead of just listing services",
      "Connects to your CRM and calendar out of the box",
    ],
    examples: [
      { name: "AI website assistant", description: "Answers visitor questions and points them to the right next step." },
      { name: "Smart forms", description: "Ask fewer, better questions and route submissions automatically." },
      { name: "Appointment booking", description: "Visitors book directly into your calendar, no email required." },
      { name: "CRM integration", description: "Every form and chat interaction lands where your team already works." },
      { name: "Automated follow-up", description: "A missed visitor still gets a next touchpoint, automatically." },
    ],
    processNote:
      "We design the conversion path before the visuals — every page has one job, and the AI layer supports that job rather than sitting on top of it.",
    keywordFocus: "AI website development, conversion-focused web design",
    metaDescription:
      "Zelvoraq builds AI-powered websites that qualify visitors, book appointments, and follow up automatically — not just brochures.",
  },
  {
    slug: "ai-ecommerce",
    icon: "ecommerce",
    navLabel: "AI Ecommerce",
    navDescription: "Shopping & support automation",
    eyebrow: "AI Ecommerce",
    headline: "Automate the support and follow-up work behind every order",
    summary:
      "AI shopping assistants, automated FAQs, and cart-recovery workflows for Shopify and WooCommerce stores — built to reduce support load, not replace your brand's voice.",
    homeSummary:
      "Shopping assistants, support automation and recovery workflows for online stores.",
    ctaLabel: "Automate My Store",
    heroPoints: [
      "Works with Shopify, WooCommerce, and comparable platforms",
      "Reduces repetitive support tickets without sounding robotic",
      "Recovers abandoned carts on a schedule, automatically",
    ],
    examples: [
      { name: "AI shopping assistant", description: "Helps shoppers find the right product without waiting on support." },
      { name: "Product recommendations", description: "Relevant suggestions based on what's actually in the catalog." },
      { name: "Automated FAQs", description: "Shipping, returns, and sizing questions answered instantly." },
      { name: "Order assistance", description: "Status, changes, and issues handled without a support ticket." },
      { name: "Abandoned-cart workflows", description: "A timed, automatic nudge instead of a lost sale." },
    ],
    processNote:
      "We start with your actual support ticket history and cart-abandonment data to decide what's worth automating first.",
    keywordFocus: "AI ecommerce automation, Shopify AI assistant, WooCommerce automation",
    metaDescription:
      "Zelvoraq builds AI shopping assistants, automated support, and cart-recovery workflows for Shopify and WooCommerce stores.",
  },
];

export const getSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);
