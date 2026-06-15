import type { Metadata } from "next";
import { SCHOOL, SITE_URL } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSEO): Metadata {
  const fullTitle =
    title === SCHOOL.name ? `${SCHOOL.name} | ${SCHOOL.slogan}` : `${title} | ${SCHOOL.name}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Pine Crest School",
      "CBE school Ruiru",
      "CBC school Kihunguro",
      "private school Ruiru",
      "Christian school Kenya",
      ...keywords,
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SCHOOL.name,
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SCHOOL.name} — ${SCHOOL.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
