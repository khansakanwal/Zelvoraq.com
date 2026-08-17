import type { Metadata } from "next";

const SITE_NAME = "Zelvoraq";
const SITE_URL = "https://www.zelvoraq.com"; // TODO: replace with the real production domain before launch
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`; // TODO: generate a real 1200x630 OG image

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string; // e.g. "/solutions/ai-agents"
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Zelvoraq")
    ? title
    : `${title} | Zelvoraq — AI Systems for Business`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage ?? DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL };
