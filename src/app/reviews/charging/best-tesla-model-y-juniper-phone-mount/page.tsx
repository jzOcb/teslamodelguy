import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  title: "Best Tesla Model Y Phone Mount (Juniper): Wireless Charger Comparison",
  description:
    "Looking for the best Tesla Model Y phone mount and wireless charger? We compare EVBASE, JOWUA, and two MagSafe options for the 2025-2026 Model Y Juniper.",
  keywords: [
    "best tesla model y phone mount",
    "tesla model y wireless charger",
    "tesla model y juniper phone mount",
    "jowua model y juniper charger",
    "evbase model y juniper mount",
  ],
  alternates: {
    canonical: "https://teslamodelguy.com/reviews/charging/best-tesla-model-y-juniper-phone-mount",
  },
};

const products = [
  {
    badge: "BEST OVERALL",
    badgeClass: "bg-blue-900/50 text-blue-400",
    name: "JOWUA MagSafe Wireless Car Charger",
    asin: "B0FTQYXNQ3",
    image: "/images/jowua-model-y-juniper-phone-mount.jpg",
    price: "$70-90",
    compatibility: "2026 Model 3 Highland / Model Y Juniper",
    summary:
      "If you want one setup that looks factory and works every day, this is the one. JOWUA's magnetic hold is strong, the charging speed is consistent, and the arm placement keeps your view clear.",
    pros: [
      "Very clean OEM-style look",
      "Strong MagSafe hold over rough roads",
      "Reliable wireless charging and easy one-hand docking",
    ],
    cons: [
      "Higher price than basic mounts",
      "Best fit if you run MagSafe or a MagSafe case",
    ],
  },
  {
    badge: "BEST VALUE",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    name: "EVBASE Wireless Charger Phone Mount",
    asin: "B0FBVXH2MW",
    image: "/images/evbase-model-y-juniper-phone-mount.jpg",
    price: "$45-60",
    compatibility: "Model 3 Highland / Model Y Juniper",
    summary:
      "EVBASE gives you most of what you want for less money. It is not as premium as JOWUA, but for daily commuting it is a strong buy and usually the better deal.",
    pros: [
      "Lower cost with Juniper-focused fitment",
      "Good charging stability for navigation and music use",
      "Simple install and easy angle adjustment",
    ],
    cons: [
      "Materials feel less premium than JOWUA",
      "Hinge stiffness can vary by unit",
    ],
  },
  {
    badge: "BEST MOUNT STABILITY",
    badgeClass: "bg-purple-900/50 text-purple-400",
    name: "iOttie MagSafe Phone Mount for Model Y Juniper",
    asin: "B0FDTPM5Q8",
    image: "/images/iottie-model-y-juniper-phone-mount.jpg",
    price: "$45-70",
    compatibility: "Tesla Model 3 Highland / Model Y Juniper",
    summary:
      "iOttie is a great pick if your top priority is mount strength and clean placement. It is especially good for drivers who prefer a stable viewing angle over max charging speed.",
    pros: [
      "Excellent vibration control",
      "Easy to position for maps without blocking sight lines",
      "Well-known mount hardware quality",
    ],
    cons: [
      "Charging performance depends on phone/case combo",
      "Can cost close to premium options when not on sale",
    ],
  },
  {
    badge: "BUDGET MAGSAFE PICK",
    badgeClass: "bg-amber-100 text-amber-400",
    name: "Generic MagSafe Charging Mount for Juniper",
    asin: "B0F9KWV5X1",
    image: "/images/generic-magsafe-model-y-juniper-phone-mount.jpg",
    price: "$30-45",
    compatibility: "2026 Tesla Model Y Juniper",
    summary:
      "If you just need a clean MagSafe setup at the lowest cost, this style of generic mount works. It is a practical starter option and easy to replace later.",
    pros: [
      "Lowest price in this comparison",
      "MagSafe convenience with basic wireless charging",
      "Good first upgrade if you are still testing placement",
    ],
    cons: [
      "Build quality is less consistent",
      "Long-term durability is less predictable",
    ],
  },
];

export default function BestModelYJuniperPhoneMountPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="📱"
        title="Phone Mount + Wireless Charging"
        subtitle="Real-world picks for the Model Y Juniper dash, from premium to budget."
      />

      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">REVIEWS / CHARGING</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Best Tesla Model Y Juniper Phone Mount - Wireless Charger Comparison
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          I tested the top options owners keep asking about and narrowed this down to 4 good picks.
          If you want one quick answer, get JOWUA for the best overall fit and finish, or EVBASE
          if you want better value.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 7 min read</p>
      </header>

      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-white mb-3">⚡ Quick Verdict</h2>
        <ul className="space-y-2 text-sm text-zinc-200">
          <li><strong>Best Overall:</strong> JOWUA (ASIN B0FTQYXNQ3)</li>
          <li><strong>Best Value:</strong> EVBASE (ASIN B0FBVXH2MW)</li>
          <li><strong>Best Stability:</strong> iOttie (ASIN B0FDTPM5Q8)</li>
          <li><strong>Budget Pick:</strong> Generic MagSafe mount (ASIN B0F9KWV5X1)</li>
        </ul>
      </section>

      <section className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-red-400 mb-2">⚠️ Juniper Compatibility Note</h2>
        <p className="text-sm text-red-300">
          Do not blindly buy old 2020-2024 Model Y mounts. For the 2025-2026 Juniper, make sure the
          listing explicitly mentions Juniper or Model 3 Highland + Model Y Juniper compatibility.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">At-a-Glance Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-zinc-700 rounded-lg">
            <thead className="bg-zinc-900">
              <tr>
                <th className="text-left p-3 font-semibold">Product</th>
                <th className="text-left p-3 font-semibold">Price</th>
                <th className="text-left p-3 font-semibold">Best For</th>
                <th className="text-left p-3 font-semibold">Amazon ASIN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-200">
              <tr><td className="p-3">JOWUA MagSafe Wireless Charger</td><td className="p-3">$70-90</td><td className="p-3">Best overall daily setup</td><td className="p-3">B0FTQYXNQ3</td></tr>
              <tr><td className="p-3">EVBASE Wireless Charger Mount</td><td className="p-3">$45-60</td><td className="p-3">Value for money</td><td className="p-3">B0FBVXH2MW</td></tr>
              <tr><td className="p-3">iOttie MagSafe Mount</td><td className="p-3">$45-70</td><td className="p-3">Stable phone position</td><td className="p-3">B0FDTPM5Q8</td></tr>
              <tr><td className="p-3">Generic MagSafe Charging Mount</td><td className="p-3">$30-45</td><td className="p-3">Lowest cost setup</td><td className="p-3">B0F9KWV5X1</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Reviews</h2>
        {products.map((product) => (
          <div key={product.asin} className="border border-zinc-700 rounded-2xl p-6">
            <span className={`${product.badgeClass} text-xs font-medium px-2 py-0.5 rounded-full`}>
              {product.badge}
            </span>
            <div className="relative w-full h-56 mb-4 mt-4 rounded-xl overflow-hidden bg-white">
              <Image
                src={product.image}
                alt={`${product.name} for Tesla Model Y Juniper`}
                fill
                className="object-contain p-4"
                sizes="(min-width: 768px) 720px, 100vw"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-zinc-200 mb-3">{product.summary}</p>
            <p className="text-zinc-300 text-sm mb-4">
              <strong>Compatibility:</strong> {product.compatibility}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border border-zinc-700 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-400 mb-2">Pros</h4>
                <ul className="space-y-1 text-sm text-zinc-200">
                  {product.pros.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-zinc-700 rounded-xl p-4">
                <h4 className="font-semibold text-red-400 mb-2">Cons</h4>
                <ul className="space-y-1 text-sm text-zinc-200">
                  {product.cons.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className="font-semibold">{product.price}</span>
              <a
                href={`https://www.amazon.com/dp/${product.asin}?tag=teslamodelguy-20`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
              >
                Check Price on Amazon
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Do older Model Y mounts fit Juniper?</h3>
            <p className="text-zinc-300 text-base mt-1">
              Some do, many do not fit cleanly. Juniper owners should buy listings that clearly mention
              Model Y Juniper or 2025-2026 compatibility.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Will MagSafe charging keep up with navigation and music?</h3>
            <p className="text-zinc-300 text-base mt-1">
              Usually yes for normal driving. If you run heavy navigation, bright screen, and video calls,
              premium chargers like JOWUA and EVBASE hold charge more consistently.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">What is the best cheap option?</h3>
            <p className="text-zinc-300 text-base mt-1">
              The generic MagSafe mount style around $30-45 is the budget answer. It works, but do not expect
              the same long-term durability as JOWUA.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">Bottom Line</h2>
        <p className="text-zinc-200 mb-3">
          <strong>Winner:</strong> JOWUA is the best Tesla Model Y phone mount if you want the cleanest,
          most reliable setup and do not mind paying for it.
        </p>
        <p className="text-zinc-200 mb-3">
          <strong>Best value:</strong> EVBASE gives you nearly the same daily experience for less money.
        </p>
        <p className="text-zinc-200">
          <strong>Budget path:</strong> Start with a generic MagSafe charger mount, then upgrade later if
          you want better materials and stronger charging performance.
        </p>
      </section>

      <p className="text-xs text-zinc-300 mb-8">
        Some links in this article are affiliate links. If you buy through them, we may earn a small
        commission at no extra cost to you.
      </p>

      <div className="flex gap-4 flex-wrap">
        <Link href="/reviews/charging" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          ← Charging Reviews
        </Link>
        <Link href="/reviews" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          All Reviews →
        </Link>
      </div>
    </article>
  );
}
