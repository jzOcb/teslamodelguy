import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tesla Exterior Accessories (2025-2026)",
  description:
    "Protect your Model Y Juniper's paint and exterior. No-drill mud flaps reviewed — plus more exterior recommendations coming soon.",
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
    badgeColor: "bg-red-900/50 text-red-400",
    name: "No-Drill Splash Guards (Mud Flaps)",
    brand: "Various",
    price: "$20–30",
    description:
      "Tesla's paint is famously thin. Without mud flaps, road debris will chip your rear panels within months of ownership. This is $20–30 insurance against hundreds in paint repair costs. No-drill options clip directly onto existing mounting points — no tools needed.",
    amazonSearch: "Tesla+Model+Y+Juniper+mud+flaps+no+drill",
  },
];

export default function ExteriorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-600 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Best Tesla Exterior Accessories</h1>
      <p className="text-gray-500 mb-8">
        Protect your 2025–2026 Model Y Juniper's exterior from day one. Tesla's paint requires more care than most cars — the right accessories save you hundreds in repair costs.
      </p>

      <div className="space-y-4 mb-10">
        {products.map((p) => (
          <div key={p.rank} className="border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
              <span className="text-xs text-gray-500">#{p.rank}</span>
            </div>
            <h2 className="text-xl font-bold text-white">{p.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{p.brand}</p>
            <p className="text-blue-600 font-semibold mb-3">{p.price}</p>
            <p className="text-gray-500 text-sm mb-4">{p.description}</p>
            <a
              href={`https://www.amazon.com/s?k=${p.amazonSearch}&tag=teslamodelguy-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              Check Price on Amazon
            </a>
          </div>
        ))}
      </div>

      <div className="border border-gray-800 rounded-xl p-6 bg-gray-900">
        <h2 className="font-semibold text-white mb-1">More Exterior Reviews Coming Soon</h2>
        <p className="text-sm text-gray-500">
          We&apos;re currently testing PPF (paint protection film) kits and ceramic coating options for the Juniper. Detailed reviews coming soon.
        </p>
      </div>

      <p className="mt-8 text-xs text-gray-500">
        Some links are affiliate links. We earn a small commission at no extra cost to you.
      </p>
    </div>
  );
}
