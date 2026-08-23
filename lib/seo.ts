import type { Metadata } from "next";

const SITE_NAME = "Zelvoraq";
const SITE_URL = "https://www.zelvoraq.com"; // TODO: replace with the real production domain before launch

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
      type: "website",
      // No hardcoded default image here — when `ogImage` isn't passed, Next.js
      // automatically uses app/opengraph-image.tsx (file-convention image) instead.
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL };
