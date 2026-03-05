import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Model Y Delivery Day Checklist (2025–2026) — Free Interactive Tool | Tesla Model Guy",
  description:
    "Don't drive off the lot without checking these 56 things. Free interactive delivery inspection checklist for 2025-2026 Tesla Model Y Juniper. Saves progress, flags issues, printable.",
  keywords: [
    "tesla delivery checklist",
    "tesla model y delivery inspection",
    "tesla model y juniper checklist",
    "what to check tesla delivery day",
    "tesla delivery day tips",
    "tesla model y inspection 2025 2026",
    "tesla delivery checklist 2025",
    "tesla quality issues what to check",
  ],
  alternates: { canonical: "/tools/delivery-checklist" },
  openGraph: {
    title: "Tesla Model Y Delivery Day Checklist — Free Interactive Tool",
    description: "56-item interactive inspection checklist for your Tesla Model Y delivery. Saves progress, flags issues, works on your phone.",
    url: "https://www.teslamodelguy.com/tools/delivery-checklist",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I check during Tesla delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check exterior paint for scratches, dents, and panel gaps. Inspect all glass for chips. Test all lights, windows, and electronics. Verify the touchscreen has no dead pixels, all USB ports charge, and the backup camera works. Test both key cards and phone key. Do a short test drive to listen for rattles. Document any issues before signing — Tesla's cosmetic warranty is 24 hours or 100 miles.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Tesla delivery inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A thorough inspection takes 30-45 minutes. Don't let delivery staff rush you — you're spending $45,000+. Bring a friend for a second pair of eyes and use your phone flashlight to check paint quality under indoor lighting.",
      },
    },
    {
      "@type": "Question",
      name: "What are common Tesla Model Y delivery issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common issues are uneven panel gaps, paint defects (scratches, chips, orange peel texture), misaligned trim pieces, and software glitches. The 2025-2026 Model Y Juniper has significantly improved quality, but issues still occasionally occur. Always inspect before signing paperwork.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reject my Tesla at delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you find significant issues during inspection, you can refuse delivery and ask Tesla to fix them or assign you a different vehicle. For minor cosmetic issues, document them with the delivery advisor before signing — Tesla's cosmetic warranty covers issues reported within 24 hours or 100 miles of delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to Tesla delivery day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring your driver's license, proof of insurance, a fully charged phone (for the Tesla app and flashlight), and this checklist saved on your phone. If financing, have your payment method confirmed. Download the Tesla app beforehand and log in with your Tesla account.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Inspect Your Tesla Model Y at Delivery",
  description: "A 56-item step-by-step inspection process for Tesla Model Y delivery day.",
  totalTime: "PT45M",
  step: [
    { "@type": "HowToStep", name: "Prepare documents and Tesla app", text: "Bring driver's license, insurance, and have the Tesla app downloaded and logged in." },
    { "@type": "HowToStep", name: "Inspect exterior paint and body", text: "Check all panels for scratches, dents, and even panel gaps. Use phone flashlight." },
    { "@type": "HowToStep", name: "Check glass and lights", text: "Inspect windshield, glass roof, and all windows for chips. Test all lights including turn signals." },
    { "@type": "HowToStep", name: "Inspect wheels and doors", text: "Check rims for curb rash, verify tire pressure, test all doors, frunk, and liftgate." },
    { "@type": "HowToStep", name: "Check interior seats and surfaces", text: "Look for scuffs on seats, test seat adjustments, check touchscreen for dead pixels." },
    { "@type": "HowToStep", name: "Test windows and controls", text: "Test all 4 windows, wipers, steering wheel buttons, and sun visors." },
    { "@type": "HowToStep", name: "Verify electronics and connectivity", text: "Test wireless charger, USB ports, backup camera, Bluetooth, audio, and climate controls." },
    { "@type": "HowToStep", name: "Final steps and test drive", text: "Check software version, do a short test drive, verify mobile connector is included, and document any issues before signing." },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData data={[faqSchema, howToSchema]} />
      {children}
    </>
  );
}
