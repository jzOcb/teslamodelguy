import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Floor Mats for Tesla Model Y Juniper (2025-2026)",
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
    badgeColor: "bg-blue-100 text-blue-700",
    name: "3D MAXpider Kagu Series",
    brand: "3D MAXpider",
    price: "$170–230",
    description:
      "The most recommended floor mat in the Tesla community. Three-layer construction with a patented fiber backing that grips without damaging carpet, raised edges that contain every spill, and a premium OEM look that WeatherTech can't match.",
    amazonSearch: "3D+MAXpider+Kagu+Tesla+Model+Y+Juniper+2026",
  },
  {
    rank: 2,
    badge: "Runner-Up",
    badgeColor: "bg-gray-100 text-gray-700",
    name: "WeatherTech FloorLiner",
    brand: "WeatherTech",
    price: "$180–250",
    description:
      "Laser-measured for a precise fit with aggressive lip containment. Tesla actually uses WeatherTech to manufacture their official all-weather liners. Best for harsh climates with heavy snow or mud.",
    amazonSearch: "WeatherTech+Tesla+Model+Y+Juniper+floor+mat",
  },
  {
    rank: 3,
    badge: "Best Value",
    badgeColor: "bg-green-100 text-green-700",
    name: "Tesmanian All-Weather Mats",
    brand: "Tesmanian",
    price: "$120–160",
    description:
      "About 30% cheaper than MAXpider with solid coverage and velcro-like strips that keep mats anchored. Good protection without the premium price tag.",
    amazonSearch: "Tesmanian+Tesla+Model+Y+floor+mats",
  },
  {
    rank: 4,
    badge: "Best Coverage",
    badgeColor: "bg-purple-100 text-purple-700",
    name: "Tuxmat Custom Fit Mats",
    brand: "Tuxmat",
    price: "$200–260",
    description:
      "The highest sidewall edges of any option — extends further up the footwell than competitors. If you live somewhere with brutal winters and want maximum protection, Tuxmat is hard to beat.",
    amazonSearch: "Tuxmat+Tesla+Model+Y+floor+mats",
  },
];

export default function FloorMatsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-600 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Best Floor Mats for Tesla Model Y Juniper</h1>
      <p className="text-gray-600 mb-2">
        Compatible with 2025–2026 Model Y Juniper (refreshed). The Juniper has slightly different interior dimensions than earlier Model Y — make sure your mats explicitly say "Juniper" or "2025–2026."
      </p>
      <Link
        href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats"
        className="inline-block text-sm text-blue-600 hover:underline mb-8"
      >
        → Full comparison: 3D MAXpider vs WeatherTech vs Tesmanian vs Tuxmat
      </Link>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.rank} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
              <span className="text-xs text-gray-400">#{p.rank}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">{p.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{p.brand}</p>
            <p className="text-blue-600 font-semibold mb-3">{p.price}</p>
            <p className="text-gray-600 text-sm mb-4">{p.description}</p>
            <div className="flex items-center gap-3">
              <a
                href={`https://www.amazon.com/s?k=${p.amazonSearch}&tag=teslamodelguy-20`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
              >
                Check Price on Amazon
              </a>
              <Link href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats" className="text-sm text-blue-600 hover:underline">
                Full review →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
        <strong>⚠️ Compatibility Note:</strong> Old Model Y floor mats (pre-2025) do not fit the Juniper. Always confirm "Juniper" or "2025–2026" compatibility before buying.
      </div>
    </div>
  );
}
