import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tesla Organizers (2025-2026)",
  description:
    "Keep your Model Y Juniper's interior tidy. EVBASE center console organizer, Spigen console tray, and trunk cargo organizer — reviewed by a real owner.",
  keywords: [
    "tesla model y juniper organizer",
    "model y center console organizer",
    "tesla model y trunk organizer",
    "evbase tesla model y juniper",
  ],
};

const products = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-900/50 text-blue-400",
    name: "EVBASE / Spigen Console Tray",
    brand: "EVBASE / Spigen",
    price: "$20–35",
    description:
      "Without an organizer, small items disappear into the center console — keys, sunglasses, cables, gone. Look for one with multiple compartments and a rubber/silicone lining so nothing rattles. EVBASE makes one with a built-in USB charging port, worth the extra $5.",
    amazonSearch: "Tesla+Model+Y+Juniper+center+console+organizer",
  },
  {
    rank: 2,
    badge: "Cargo Solution",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    name: "Collapsible Cargo Organizer",
    brand: "Various",
    price: "$30–40",
    description:
      "The Model Y trunk is massive but has zero organization — groceries slide everywhere on every turn. A collapsible organizer with dividers keeps everything in place and folds flat when not needed.",
    amazonSearch: "Tesla+Model+Y+trunk+organizer+collapsible",
  },
];

export default function OrganizersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Best Tesla Organizers</h1>
      <p className="text-zinc-300 mb-8">
        Compatible with 2025–2026 Model Y Juniper. The Juniper's redesigned interior means some older organizers won't fit the center console — double-check Juniper compatibility before buying.
      </p>

      <div className="space-y-4">
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

      <p className="mt-8 text-xs text-zinc-400">
        Some links are affiliate links. We earn a small commission at no extra cost to you.
      </p>
    </div>
  );
}
