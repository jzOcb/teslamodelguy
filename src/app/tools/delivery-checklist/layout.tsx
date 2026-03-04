import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesla Model Y Delivery Day Checklist — Free Interactive Tool | Tesla Model Guy",
  description:
    "Don't drive off the lot without checking these 56 things. Free interactive delivery inspection checklist for 2025-2026 Tesla Model Y Juniper. Saves progress, flags issues, printable.",
  keywords: [
    "tesla delivery checklist",
    "tesla model y delivery inspection",
    "tesla model y juniper checklist",
    "what to check tesla delivery day",
    "tesla delivery day tips",
    "tesla model y inspection 2025 2026",
  ],
  alternates: { canonical: "/tools/delivery-checklist" },
  openGraph: {
    title: "Tesla Model Y Delivery Day Checklist — Free Interactive Tool",
    description: "56-item interactive inspection checklist for your Tesla Model Y delivery. Saves progress, flags issues, works on your phone.",
    url: "https://teslamodelguy.com/tools/delivery-checklist",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
