import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Tesla Charging Accessories</h1>
      <p className="text-zinc-300 mb-8">
        Home chargers, NACS adapters, portable cables — we&apos;re testing the best charging setup options for the 2025–2026 Model Y Juniper.
      </p>

      <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900 text-center">
        <p className="text-2xl mb-3">🔌</p>
        <h2 className="font-semibold text-white mb-2">Reviews Coming Soon</h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          We&apos;re currently testing home charging solutions, NACS adapters, and portable charging cables for the Juniper. Detailed reviews coming soon.
        </p>
      </div>

      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <h3 className="font-semibold text-white mb-2">In the Meantime</h3>
        <p className="text-sm text-zinc-300 mb-3">
          Our new owner guide covers how to set up your charging routine and schedule — including tips on daily charge limits, off-peak scheduling, and Sentry Mode storage setup.
        </p>
        <Link href="/guides/first-things-to-do-tesla-model-y-juniper" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
          → First 7 Things to Do After Getting Your Model Y Juniper
        </Link>
      </div>
    </div>
  );
}
