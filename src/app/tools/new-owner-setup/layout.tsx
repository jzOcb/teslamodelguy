import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Tesla Owner Setup Guide — Free Interactive Wizard | Tesla Model Guy",
  description:
    "Just got your Tesla Model Y? Complete these 12 steps in your first week. Interactive wizard with progress tracking — from app setup to must-have accessories.",
  keywords: [
    "first things to do new tesla",
    "tesla model y setup guide",
    "just bought tesla what now",
    "new tesla owner checklist",
    "tesla model y juniper first week",
  ],
  alternates: { canonical: "/tools/new-owner-setup" },
  openGraph: {
    title: "New Tesla Owner Setup Guide — 12 Steps for Your First Week",
    description: "Interactive step-by-step wizard for new Tesla Model Y owners. Track your progress from day one.",
    url: "https://teslamodelguy.com/tools/new-owner-setup",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
