import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Best Tesla Screen Protectors (2025-2026)",
  description:
    "Top screen protector picks for the Model Y Juniper's new 15.4-inch touchscreen. Spigen EZ Fit, dbrand Prism 2.0, TPARTS, and Tesery — matte vs clear.",
  keywords: [
    "tesla model y juniper screen protector",
    "best screen protector model y 2025",
    "spigen tesla juniper",
    "model y 15.4 inch screen protector",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-900/50 text-blue-300",
    name: "Spigen EZ Fit Tempered Glass",
    brand: "Spigen",
    image: "/images/spigen-product.jpg",
    price: "$30–40",
    description: "Foolproof alignment tray, strong 9H protection, and great clarity.",
    amazonSearch: "Spigen+EZ+Fit+Tesla+Model+Y+Juniper+screen+protector",
  },
  {
    rank: 2,
    badge: "Premium Pick",
    badgeColor: "bg-purple-900/50 text-purple-300",
    name: "dbrand Prism 2.0",
    brand: "dbrand",
    price: "$40–50",
    description: "Top-tier install tray and premium glass quality.",
    amazonSearch: "dbrand+Prism+Tesla+Model+Y+Juniper",
  },
  {
    rank: 3,
    badge: "Best Budget",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    name: "TPARTS Tempered Glass",
    brand: "TPARTS",
    image: "/images/tparts-product.jpg",
    price: "$15–25",
    description: "Strong value if you can handle manual alignment during install.",
    amazonSearch: "TPARTS+Tesla+Model+Y+Juniper+screen+protector",
  },
  {
    rank: 4,
    badge: "Best Anti-Glare",
    badgeColor: "bg-amber-500/10 text-amber-300 border border-amber-500/30",
    name: "Tesery Matte Screen Protector",
    brand: "Tesery",
    image: "/images/tesery-product.jpg",
    price: "$20–35",
    description: "Excellent reflection control for sunny driving conditions.",
    amazonSearch: "Tesery+Tesla+Model+Y+screen+protector+matte",
  },
];

export default function ScreenProtectorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/reviews" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Best Tesla Screen Protectors</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-8 leading-relaxed">
        The Juniper uses a 15.4&quot; display. Older 15&quot; Model Y protectors will not fit.
      </p>

      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-8 text-base text-red-200">
        <strong>Compatibility warning:</strong> Only buy protectors that explicitly mention Juniper or 2025–2026 support.
      </div>

      <Link href="/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector" className="inline-block text-base text-cyan-300 hover:text-cyan-200 hover:underline mb-10">
        → Full comparison: Spigen vs dbrand vs TPARTS vs Tesery
      </Link>

      <div className="space-y-6">
        {products.map((p) => (
          <div key={p.rank} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 md:p-6 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
              <CardVisual emoji="🛡️" label={p.brand} image={p.image} />
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
                  <a
                    href={`https://www.amazon.com/s?k=${p.amazonSearch}&tag=teslamodelguy-20`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Check Price on Amazon
                  </a>
                  <Link href="/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
                    Full review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-2">More reviews coming soon</h2>
        <p className="text-base text-zinc-200">Rear screen protector comparisons and install walkthroughs are in testing.</p>
      </section>
    </div>
  );
}
