import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla vs Gas Savings Calculator — How Much Will You Save? | Tesla Model Guy",
  description:
    "Find out exactly how much you'd save switching from gas to a Tesla Model Y. Enter your commute, gas price, and electricity rate for a personalized 5-year cost comparison.",
  keywords: [
    "tesla vs gas cost",
    "is tesla worth it calculator",
    "ev vs gas savings",
    "tesla model y cost comparison",
    "electric car savings calculator",
    "tesla fuel savings",
    "ev cost calculator",
    "tesla model y cost of ownership",
    "electric vs gas car calculator",
  ],
  alternates: { canonical: "/tools/savings-calculator" },
  openGraph: {
    title: "Tesla vs Gas Savings Calculator — How Much Will You Save?",
    description: "Personalized 5-year cost comparison: Tesla Model Y vs your current gas car. Free calculator.",
    url: "https://www.teslamodelguy.com/tools/savings-calculator",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to charge a Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At the US average electricity rate of $0.16/kWh, charging a Tesla Model Y costs about $4.48 per 100 miles (28 kWh/100mi efficiency). For comparison, a 28 MPG gas car at $3.50/gal costs $12.50 per 100 miles — nearly 3x more. Home charging overnight is cheapest; Supercharging costs roughly $0.35-0.50/kWh.",
      },
    },
    {
      "@type": "Question",
      name: "How much do you save per year with a Tesla vs gas car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average driver (30 miles/day) saves approximately $1,700-2,500 per year switching from a gas car to a Tesla Model Y, including both fuel savings and lower maintenance costs. Tesla maintenance averages $400/year vs $1,200/year for gas cars (no oil changes, fewer brake replacements due to regenerative braking).",
      },
    },
    {
      "@type": "Question",
      name: "Is a Tesla Model Y worth it financially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most drivers, yes. Over 5 years, the average owner saves $10,000-15,000 in fuel and maintenance costs. With the $7,500 federal EV tax credit (if eligible), total 5-year savings can reach $17,000-22,000. The break-even point depends on your gas price, electricity rate, and daily driving distance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you qualify for the $7,500 EV tax credit on a Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tesla Model Y qualifies for the full $7,500 federal EV tax credit under the Inflation Reduction Act, subject to income limits ($150,000 for single filers, $300,000 for joint filers) and MSRP cap ($80,000 for SUVs). Check IRS.gov for the latest eligibility requirements.",
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
