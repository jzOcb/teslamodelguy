import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/exterior" },
  title: "Best Tesla Exterior Accessories (2025-2026)",
  description:
    "Protect your Model Y Juniper's paint and exterior. No-drill mud flaps reviewed with a full REEVAA vs Basenor vs HALOBLK comparison.",
  keywords: [
    "tesla model y juniper exterior accessories",
    "model y juniper mud flaps",
    "tesla model y paint protection",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Essential Protection",
    badgeColor: "bg-red-500/10 text-red-300 border border-red-500/30",
    name: "No-Drill Splash Guards (Mud Flaps)",
    brand: "REEVAA / Basenor / HALOBLK",
    price: "$25-45",
    description:
      "Low-cost protection against rock chips on Tesla's thin paint. No-drill options clip onto existing mounting points and install in about 20-35 minutes.",
    amazonSearch: "Tesla+Model+Y+Juniper+mud+flaps+no+drill",
    asin: "B0DZXLG3FD",
  },
];

export default function ExteriorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/reviews" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">← All Reviews</Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Best Tesla Exterior Accessories</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-6 leading-relaxed">
        Protect your Juniper&apos;s paint and body panels from day one.
      </p>

      <Link
        href="/reviews/exterior/best-tesla-model-y-juniper-mud-flaps"
        className="inline-block text-base text-cyan-300 hover:text-cyan-200 hover:underline mb-10"
      >
        → Full comparison: Best Tesla Model Y Juniper Mud Flaps
      </Link>

      <div className="space-y-6 mb-10">
        {products.map((p) => (
          <div key={p.rank} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 md:p-6 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
              <CardVisual emoji="🚗" label={p.brand} />
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                  <span className="text-base text-zinc-300">#{p.rank}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{p.name}</h2>
                <p className="text-base text-zinc-200 mt-1">{p.brand}</p>
                <p className="text-white font-semibold mt-2 mb-3">{p.price}</p>
                <p className="text-base text-zinc-200 mb-4 leading-relaxed">{p.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <a href={(p as any).asin ? `https://www.amazon.com/dp/${(p as any).asin}?tag=teslamodelguy-20` : `https://www.amazon.com/s?k=${p.amazonSearch}&tag=teslamodelguy-20`} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                    Check Price on Amazon
                  </a>
                  <a href="https://www.yeslak.com/products/mud-flaps-for-2025-tesla-model-y-juniper?sca_ref=10733389.GHD3wW8fWH&utm_source=partner&utm_medium=affiliate&utm_campaign=affiliate" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200">Shop on Yeslak →</a>
                  <Link href="/reviews/exterior/best-tesla-model-y-juniper-mud-flaps" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
                    Full review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-2">More reviews coming soon</h2>
        <p className="text-base text-zinc-200">PPF kits, ceramic coatings, and wheel cover durability tests are in progress.</p>
      </section>

      <p className="mt-8 text-base text-zinc-300">Some links are affiliate links. We earn a small commission at no extra cost to you.</p>
    </div>
  );
}
