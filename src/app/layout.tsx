import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tesla Model Guy - Tesla Accessories Reviews & Guides",
    template: "%s | Tesla Model Guy",
  },
  description:
    "Real owner reviews and guides for Tesla accessories. Floor mats, organizers, screen protectors, and more for every Tesla model.",
  keywords: [
    "tesla model y juniper accessories",
    "model y juniper floor mats",
    "tesla model y accessories 2025",
    "model y juniper center console organizer",
    "tesla accessories guide",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tesla Model Guy - Tesla Accessories Reviews & Guides",
    description:
      "Real owner reviews and guides for Tesla accessories.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} cover image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Real owner reviews for Tesla accessories.",
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    google: "3zONnzR5Hiz4ObC4CvEi1n1CSaHlb20pjfOmqbqo5Eg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-US",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tesla Model Guy",
  url: "https://www.teslamodelguy.com",
  description: "Real owner reviews and guides for Tesla Model Y Juniper accessories",
  sameAs: ["https://medium.com/@jzclaws1", "https://www.pinterest.com/teslamodelguy/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-59P9VFSDM8" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-59P9VFSDM8');
        `}
      </Script>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100">
        <StructuredData data={websiteJsonLd} />
        <StructuredData data={organizationJsonLd} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
