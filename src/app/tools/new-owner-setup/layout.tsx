import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "New Tesla Owner Setup Guide — 12 Steps for Your First Week | Tesla Model Guy",
  description:
    "Just got your Tesla Model Y? Complete these 12 steps in your first week. Interactive wizard with progress tracking — from app setup to must-have accessories.",
  keywords: [
    "first things to do new tesla",
    "tesla model y setup guide",
    "just bought tesla what now",
    "new tesla owner checklist",
    "tesla model y juniper first week",
    "new tesla owner tips",
    "tesla model y first drive tips",
    "tesla accessories new owner",
  ],
  alternates: { canonical: "/tools/new-owner-setup" },
  openGraph: {
    title: "New Tesla Owner Setup Guide — 12 Steps for Your First Week",
    description: "Interactive step-by-step wizard for new Tesla Model Y owners. Track your progress from day one.",
    url: "https://www.teslamodelguy.com/tools/new-owner-setup",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I do first with a new Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, download the Tesla app, set up phone key, and connect to home WiFi for software updates. Then install a screen protector before using the touchscreen, set up a USB SSD for Sentry Mode dashcam, and install all-weather floor mats. These 6 steps should be done on day one.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a screen protector for Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, strongly recommended. The 15.4-inch touchscreen is the center of everything and will get micro-scratches within days of use. A tempered glass protector ($30-35) prevents this. Install it before you start using the car — the Spigen EZ Fit with alignment tray makes installation foolproof.",
      },
    },
    {
      "@type": "Question",
      name: "What accessories do I need for a new Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essential day-one accessories: screen protector ($30-35), all-weather floor mats ($150-180), and a USB SSD for Sentry Mode ($60-70). Nice to have in the first week: center console organizer ($30-40), portable tire inflator ($30-35). Total investment for essentials: about $250-300.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up Sentry Mode on Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Get a USB SSD (Samsung T7 500GB recommended), format it as exFAT on your computer, plug it into the USB-C port in the glovebox, then enable Sentry Mode via Controls > Safety on the touchscreen. Don't use a cheap USB flash drive — they fail from continuous writes. An SSD is more reliable and faster.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData data={faqSchema} />
      {children}
    </>
  );
}
