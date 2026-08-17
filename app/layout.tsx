import type { Metadata } from "next";
import { Inter, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// Design-system note: Geist was the Phase 2 display-face direction. Geist ships as a
// separate npm package rather than through next/font/google, so Sora is used here as
// the closest same-spirit substitute (confident, modern grotesque). Swap in `geist/font/sans`
// later with a one-line change here if the real brand identity calls for it.
const body = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });
const display = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["500", "600"] });

export const metadata: Metadata = buildMetadata({
  title: "Zelvoraq — AI Systems That Work For Your Business",
  description:
    "Zelvoraq builds AI agents, business automation, AI-powered websites, and AI ecommerce systems for small and mid-sized businesses across the US, UK, and beyond.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="font-body antialiased bg-base text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
