import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tesla Sunshades (2025-2026)",
  description:
    "Keep your Model Y Juniper cool in summer. EVBASE Juniper-specific roof sunshade reviewed — drops cabin temperature by 10-15°F.",
  keywords: [
    "tesla model y juniper sunshade",
    "model y juniper roof sunshade",
    "evbase tesla model y juniper sunshade",
    "tesla model y glass roof shade",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Best Fit",
    badgeColor: "bg-blue-900/50 text-blue-400",
    name: "EVBASE Juniper Roof Sunshade",
    brand: "EVBASE",
    price: "$50–80",
    description:
      "The glass roof turns your Juniper into a greenhouse in summer. A sunshade drops cabin temperature by 10–15°F, meaning less AC use and better range. EVBASE makes a Juniper-specific sunshade designed for the exact dimensions of the refreshed 2025–2026 roof — improved heat rejection over older Model Y shades.",
    amazonSearch: "EVBASE+Tesla+Model+Y+Juniper+sunshade+roof",
  },
];

export default function SunshadesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Best Tesla Sunshades</h1>
      <p className="text-zinc-300 mb-8">
        The Juniper&apos;s panoramic glass roof is stunning — and turns into a greenhouse on hot days. A good sunshade is one of the highest-ROI accessories you can buy: cooler cabin, better range, less AC wear.
      </p>

      <div className="space-y-4 mb-10">
        {products.map((p) => (
          <div key={p.rank} className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
              <span className="text-xs text-zinc-400">#{p.rank}</span>
            </div>
            <h2 className="text-xl font-bold text-white">{p.name}</h2>
            <p className="text-sm text-zinc-400 mb-1">{p.brand}</p>
            <p className="text-white font-semibold mb-3">{p.price}</p>
            <p className="text-zinc-400 text-sm mb-4">{p.description}</p>
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

      <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900">
        <h2 className="font-semibold text-white mb-1">More Sunshade Options Coming Soon</h2>
        <p className="text-sm text-zinc-400">
          We&apos;re currently testing additional sunshade options including the Tesla OEM sunshade and budget alternatives. Detailed comparisons coming soon.
        </p>
      </div>

      <p className="mt-8 text-xs text-zinc-400">
        Some links are affiliate links. We earn a small commission at no extra cost to you.
      </p>
    </div>
  );
}
