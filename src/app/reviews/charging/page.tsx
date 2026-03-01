import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Best Tesla Charging Accessories (2025-2026)",
  description:
    "Charging setup guides and accessory recommendations for the Tesla Model Y Juniper. Detailed reviews coming soon.",
  keywords: [
    "tesla model y juniper charging",
    "model y home charger",
    "tesla model y juniper charging accessories",
  ],
};

export default function ChargingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/reviews" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">← All Reviews</Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">Tesla Charging Accessories</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-10 leading-relaxed">
        Home chargers, NACS adapters, and portable cables for the 2025–2026 Model Y Juniper.
      </p>

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-start">
          <CardVisual emoji="🔌" label="Charging" gradient="from-zinc-800 via-lime-700 to-emerald-700" />
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Reviews in Progress</h2>
            <p className="text-base text-zinc-200 leading-relaxed mb-4">
              We&apos;re currently testing home charging setups, NACS adapters, and portable charging kits.
            </p>
            <Link href="/guides/first-things-to-do-tesla-model-y-juniper" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
              → First 7 Things to Do After Getting Your Model Y Juniper
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-12 bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-2">More reviews coming soon</h2>
        <p className="text-base text-zinc-200">Level 2 charger comparisons and adapter reliability tests are next.</p>
      </section>
    </div>
  );
}
