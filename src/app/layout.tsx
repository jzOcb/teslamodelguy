import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
  authors: [{ name: "Tesla Model Guy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teslamodelguy.com",
    siteName: "Tesla Model Guy",
    title: "Tesla Model Guy - Tesla Accessories Reviews & Guides",
    description:
      "Real owner reviews and guides for Tesla accessories.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla Model Guy",
    description:
      "Real owner reviews for Tesla accessories.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-zinc-950 text-zinc-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
