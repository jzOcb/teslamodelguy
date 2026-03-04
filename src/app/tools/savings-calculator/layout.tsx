import type { Metadata } from "next";

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
  ],
  alternates: { canonical: "/tools/savings-calculator" },
  openGraph: {
    title: "Tesla vs Gas Savings Calculator — How Much Will You Save?",
    description: "Personalized 5-year cost comparison: Tesla Model Y vs your current gas car. Free calculator.",
    url: "https://teslamodelguy.com/tools/savings-calculator",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
