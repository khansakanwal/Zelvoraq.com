import type { Metadata } from "next";
import Script from "next/script";
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

// GA4 only loads once NEXT_PUBLIC_GA4_ID is set as an environment variable in
// Vercel — until then this silently renders nothing, so it's safe to ship now.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

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
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
