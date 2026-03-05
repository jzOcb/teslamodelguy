import type { Metadata } from "next";

export const SITE_NAME = "Tesla Model Guy";
export const SITE_URL = "https://www.teslamodelguy.com";
export const DEFAULT_OG_IMAGE = "/images/tesla-hero-global.jpg";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} cover image`,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// Schema generation helpers
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  breadcrumbs: { name: string; url: string }[];
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://www.teslamodelguy.com${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Tesla Model Guy",
      url: "https://www.teslamodelguy.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tesla Model Guy",
      url: "https://www.teslamodelguy.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `https://www.teslamodelguy.com${b.url}`,
    })),
  };

  return [articleSchema, breadcrumbSchema];
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
