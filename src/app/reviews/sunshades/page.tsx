import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/sunshades" },
  title: "Best Tesla Sunshades (2025-2026)",
  description:
    "Keep your Model Y Juniper cool in summer. Compare REEVAA, Wigoo, VION, and Jowua roof sunshade options with clip-in vs magnetic guidance.",
  keywords: [
    "tesla model y juniper sunshade",
    "model y juniper roof sunshade",
    "tesla model y glass roof shade",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-900/50 text-blue-300",
    name: "Juniper Roof Sunshade Comparison",
    brand: "REEVAA / Wigoo / VION / Jowua",
    price: "$32-85",
    description:
      "Clip-in and slide-in designs generally outperform magnetic sunshades for long-term hold. Full comparison with owner-focused recommendations.",
    image: "/images/sunshade-product.jpg",
    amazonSearch: "Tesla+Model+Y+Juniper+roof+sunshade",
    asin: "B0DXDWW9N8",
  },
];

export default function SunshadesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/reviews" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">← All Reviews</Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Best Tesla Sunshades</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-6 leading-relaxed">
        A quality roof sunshade is one of the highest-ROI Juniper accessories.
      </p>

      <Link
        href="/reviews/sunshades/best-tesla-model-y-juniper-sunshade"
        className="inline-block text-base text-cyan-300 hover:text-cyan-200 hover:underline mb-10"
      >
        → Full comparison: Best Tesla Model Y Juniper Roof Sunshade
      </Link>

      <div className="space-y-6 mb-10">
        {products.map((p) => (
          <div key={p.rank} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 md:p-6 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
              <CardVisual emoji="☀️" label={p.brand} image={p.image} />
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
                  <a href="https://www.yeslak.com/products/tesla-model-y-model-3-windshield-glass-sunshade?sca_ref=10733389.GHD3wW8fWH&utm_source=partner&utm_medium=affiliate&utm_campaign=affiliate" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200">Shop on Yeslak →</a>
                  <a href="https://evbandit.com/products/tesla-model-y-windshield-sunshade-2026-juniper-full-size-folding-front-window-uv-heat-insulation-umbrella-shade-interior-sunshade-visor-accessory?sca_ref=10733634.pROAnZ9F8x" target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200">Buy at EV Bandit →</a>
                  <Link href="/reviews/sunshades/best-tesla-model-y-juniper-sunshade" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
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
        <p className="text-base text-zinc-200">OEM vs third-party sunshade performance comparisons are in progress.</p>
      </section>

      <p className="mt-8 text-base text-zinc-300">Some links are affiliate links. We earn a small commission at no extra cost to you.</p>
    </div>
  );
}
