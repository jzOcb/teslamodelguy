import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Best Tesla Floor Mats (2025-2026)",
  description:
    "Top floor mat picks for the Tesla Model Y Juniper. 3D MAXpider Kagu, WeatherTech FloorLiner, Tesmanian, and Tuxmat — find the best fit for your budget.",
  keywords: [
    "tesla model y juniper floor mats",
    "best floor mats model y 2025",
    "3d maxpider tesla model y juniper",
    "weathertech model y juniper",
    "tuxmat tesla model y",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-900/50 text-blue-300",
    name: "3D MAXpider Kagu Series",
    brand: "3D MAXpider",
    price: "$170–230",
    description:
      "The most recommended floor mat in the Tesla community. Three-layer construction with a patented fiber backing that grips without damaging carpet, raised edges that contain every spill, and a premium OEM look.",
    amazonSearch: "3D+MAXpider+Kagu+Tesla+Model+Y+Juniper+2026",
    gradient: "from-zinc-800 via-cyan-800 to-blue-700",
  },
  {
    rank: 2,
    badge: "Runner-Up",
    badgeColor: "bg-zinc-700 text-zinc-100",
    name: "WeatherTech FloorLiner",
    brand: "WeatherTech",
    price: "$180–250",
    description:
      "Laser-measured for precise fit and excellent spill containment. Great choice for heavy snow and muddy climates.",
    amazonSearch: "WeatherTech+Tesla+Model+Y+Juniper+floor+mat",
    gradient: "from-zinc-800 via-slate-700 to-zinc-600",
  },
  {
    rank: 3,
    badge: "Best Value",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    name: "Tesmanian All-Weather Mats",
    brand: "Tesmanian",
    price: "$120–160",
    description:
      "Around 30% cheaper than MAXpider with solid coverage and strong anti-slip hold. Great value option.",
    amazonSearch: "Tesmanian+Tesla+Model+Y+floor+mats",
    gradient: "from-zinc-800 via-emerald-800 to-teal-700",
  },
  {
    rank: 4,
    badge: "Best Coverage",
    badgeColor: "bg-purple-900/50 text-purple-300",
    name: "Tuxmat Custom Fit Mats",
    brand: "Tuxmat",
    price: "$200–260",
    description:
      "Highest sidewall coverage in this category, ideal for owners in harsh winter climates.",
    amazonSearch: "Tuxmat+Tesla+Model+Y+floor+mats",
    gradient: "from-zinc-800 via-purple-800 to-indigo-700",
  },
];

export default function FloorMatsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/reviews" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Best Tesla Floor Mats</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-8 leading-relaxed">
        Compatible with 2025–2026 Model Y Juniper. Make sure your mats explicitly list "Juniper" support.
      </p>

      <Link
        href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats"
        className="inline-block text-base text-cyan-300 hover:text-cyan-200 hover:underline mb-10"
      >
        → Full comparison: 3D MAXpider vs WeatherTech vs Tesmanian vs Tuxmat
      </Link>

      <div className="space-y-6">
        {products.map((p) => (
          <div key={p.rank} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 md:p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
              <CardVisual emoji="🏗️" label={p.brand} gradient={p.gradient} />
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
                  <Link href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats" className="text-base text-cyan-300 hover:text-cyan-200 hover:underline">
                    Full review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-base text-amber-200">
        <strong>Compatibility note:</strong> Pre-2025 Model Y mats do not fit the Juniper correctly.
      </div>
    </div>
  );
}
