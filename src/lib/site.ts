import type { Metadata } from "next";

export const BASE_URL = "https://all-outwindowtint.com";
export const SITE_NAME = "All-Out Window Tint";

// Shared Open Graph image. NOTE: do not add `as const` — it can trip
// Vercel's stricter type-check on the Metadata openGraph.images type.
export const ogImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "All-Out Window Tint — Gonzales & Baton Rouge, LA",
};

interface PageMetaInput {
  path: string;
  title: string;
  description: string;
}

/**
 * Builds per-page metadata with a real canonical URL and a complete
 * Open Graph block (including images), so no page silently drops the
 * OG image via shallow-merge overriding of the layout's openGraph.
 */
export function pageMetadata({ path, title, description }: PageMetaInput): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
