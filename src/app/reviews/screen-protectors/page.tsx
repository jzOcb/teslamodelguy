import type { Metadata } from "next";
import Link from "next/link";

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
    badgeColor: "bg-blue-900/50 text-blue-400",
    name: "Spigen EZ Fit Tempered Glass",
    brand: "Spigen",
    price: "$30–40",
    description:
      "Spigen's auto-alignment tray makes installation foolproof — place the tray, peel the backing, press down, done. Zero bubbles, perfectly centered every time. 9H hardness, oleophobic coating, full touch sensitivity. Available in clear and matte.",
    amazonSearch: "Spigen+EZ+Fit+Tesla+Model+Y+Juniper+screen+protector",
  },
  {
    rank: 2,
    badge: "Premium Pick",
    badgeColor: "bg-purple-900/50 text-purple-400",
    name: "dbrand Prism 2.0",
    brand: "dbrand",
    price: "$40–50",
    description:
      "The best self-aligning installation tray in the business — even better than Spigen's. The glass itself is noticeably thinner and clearer than competitors. Premium price, premium product.",
    amazonSearch: "dbrand+Prism+Tesla+Model+Y+Juniper",
  },
  {
    rank: 3,
    badge: "Best Budget",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    name: "TPARTS Tempered Glass",
    brand: "TPARTS",
    price: "$15–25",
    description:
      "No-frills 9H tempered glass at the lowest price. No alignment tray, but protection is comparable to premium options. 90% of the protection at 60% of the price if you're careful with installation.",
    amazonSearch: "TPARTS+Tesla+Model+Y+Juniper+screen+protector",
  },
  {
    rank: 4,
    badge: "Best Anti-Glare",
    badgeColor: "bg-amber-100 text-amber-400",
    name: "Tesery Matte Screen Protector",
    brand: "Tesery",
    price: "$20–35",
    description:
      "The best anti-glare option we've tested. Also includes blue light filtering to reduce eye strain on long drives. If you park outdoors in a sunny area, this kills reflections that make the screen hard to read.",
    amazonSearch: "Tesery+Tesla+Model+Y+screen+protector+matte",
  },
];

export default function ScreenProtectorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/reviews" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
          ← All Reviews
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Best Tesla Screen Protectors</h1>
      <p className="text-zinc-300 mb-2">
        The Juniper upgraded to a 15.4&quot; touchscreen — which means old Model Y screen protectors won&apos;t fit. Only buy protectors that explicitly say &quot;Juniper,&quot; &quot;2025,&quot; or &quot;2026.&quot;
      </p>
      <Link
        href="/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector"
        className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline mb-8"
      >
        → Full comparison: Spigen vs dbrand vs TPARTS vs Tesery (matte vs clear)
      </Link>

      <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-4 mb-8 text-sm text-red-400">
        <strong>⚠️ Compatibility Warning:</strong> The Juniper screen is 15.4&quot;, up from 15&quot; on the previous Model Y. Screen protectors for 2020–2024 Model Y will NOT fit.
      </div>

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
            <div className="flex items-center gap-3">
              <a
                href={`https://www.amazon.com/s?k=${p.amazonSearch}&tag=teslamodelguy-20`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
              >
                Check Price on Amazon
              </a>
              <Link href="/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                Full review →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
