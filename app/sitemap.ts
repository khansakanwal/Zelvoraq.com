import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { solutions } from "@/lib/solutions-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/solutions",
    "/how-it-works",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const solutionPaths = solutions.map((s) => `/solutions/${s.slug}`);

  return [...staticPaths, ...solutionPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
