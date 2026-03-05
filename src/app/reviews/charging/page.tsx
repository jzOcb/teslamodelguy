import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/charging" },
  title:
    "Best Portable Tesla Charger 2025-2026: NACS Mobile Charger Comparison | Tesla Model Guy",
  description:
    "Compare the best portable NACS chargers for Tesla Model Y Juniper. Lectron vs Tesla Mobile Connector vs budget picks — honest comparison with pricing, specs, and who each is best for.",
  keywords: [
    "best portable tesla charger",
    "tesla nacs portable charger",
    "tesla mobile connector alternative",
    "lectron tesla charger review",
    "portable ev charger tesla model y",
    "tesla model y juniper charger",
    "best level 2 portable ev charger nacs",
    "tesla charger comparison 2025",
    "cheap tesla portable charger",
  ],
  openGraph: {
    title: "Best Portable Tesla NACS Charger 2025-2026",
    description:
      "Honest comparison: Lectron, Taranasa, and Tesla Mobile Connector. Which portable NACS charger is worth your money?",
    url: "https://www.teslamodelguy.com/reviews/charging",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best portable charger for a Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Lectron Level 1/2 NACS Portable Charger ($340) is the most recommended third-party option — it offers adjustable current from 12A to 40A, dual NEMA plugs, and is ETL certified. For budget buyers, the Taranasa Level 2 NACS ($170) delivers 40A charging at nearly half the price. The Tesla Mobile Connector ($300) is the safest choice with built-in temperature sensors but only charges at 32A.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a portable charger if I have a Tesla Wall Connector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A portable charger is essential for road trips, visiting friends/family, or as a backup. Even with a Wall Connector at home, having a portable NACS charger in your trunk lets you charge from any standard 120V or 240V outlet. Most Tesla owners keep one in the car at all times.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Tesla Mobile Connector worth $300?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tesla Mobile Connector is the safest option with temperature sensors on both input and output cords — a feature no third-party charger currently offers. However, it only charges at 32A maximum vs 40A from competitors, and lacks adjustable current settings. If safety is your top priority, it's worth it. If you want more features for less money, the Lectron is a better value.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a third-party NACS charger with my Tesla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any charger with a native NACS connector will work with Tesla Model 3, Y, S, X, and Cybertruck. Look for ETL or UL certification for safety. Popular third-party brands include Lectron, Taranasa, Splitvolt, and Jowua. NACS is now an industry standard (SAE J3400), so compatibility is guaranteed.",
      },
    },
  ],
};

/* ─── product data ─── */

interface Product {
  rank: number;
  badge: string;
  badgeColor: string;
  name: string;
  brand: string;
  price: string;
  priceNum: number;
  maxAmps: string;
  level: string;
  plugs: string;
  certification: string;
  cable: string;
  adjustable: boolean;
  tempSensor: boolean;
  reviews: string;
  rating: string;
  pros: string[];
  cons: string[];
  verdict: string;
  asin?: string;
  shopUrl?: string;
  emoji: string;
  image: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    rank: 1,
    badge: "Best Overall",
    badgeColor: "bg-blue-900/50 text-blue-300 border border-blue-700/50",
    name: "Lectron Level 1/2 NACS Portable Charger",
    brand: "Lectron",
    price: "$340",
    priceNum: 340,
    maxAmps: "40A",
    level: "Level 1 + Level 2",
    plugs: "NEMA 14-50 + NEMA 5-15",
    certification: "ETL (UL 2594)",
    cable: "20 ft",
    adjustable: true,
    tempSensor: false,
    reviews: "485",
    rating: "4.4",
    pros: [
      "Most reviewed NACS portable charger on Amazon",
      "12A–40A adjustable current for any outlet",
      "Dual-level charging (120V + 240V) with both plugs included",
      "ETL certified to UL standards",
      "Wall mount included for semi-permanent setup",
    ],
    cons: [
      "Most expensive option at $340",
      "Some mixed reviews on older Lectron products (this NACS model is newer)",
      "No temperature sensors on cords",
    ],
    verdict:
      "The go-to recommendation on Reddit and EV forums. Biggest review count gives you confidence, and the adjustable current means it works safely with any outlet from a standard 120V to a full 240V/50A circuit.",
    asin: "B0DKF7Q2GB",
    emoji: "🏆",
    image: "/images/products/charging/lectron.jpg",
    imageAlt: "Lectron Level 1/2 NACS Portable EV Charger for Tesla",
  },
  {
    rank: 2,
    badge: "Best Value",
    badgeColor: "bg-green-900/50 text-green-300 border border-green-700/50",
    name: "Taranasa Level 2 NACS Portable Charger",
    brand: "Taranasa",
    price: "$170",
    priceNum: 170,
    maxAmps: "40A",
    level: "Level 2",
    plugs: "NEMA 14-50",
    certification: "ETL Listed",
    cable: "20 ft",
    adjustable: true,
    tempSensor: false,
    reviews: "39",
    rating: "4.8",
    pros: [
      "Half the price of Tesla's official charger",
      "40A charging — faster than Tesla's 32A Mobile Connector",
      "ETL certified for safety",
      "Highest rating (4.8★) among all options",
      "Cable holder included",
    ],
    cons: [
      "Fewer reviews — newer product",
      "Level 2 only (240V) — no 120V option",
      "Less brand recognition than Lectron or Tesla",
    ],
    verdict:
      "If you have a 240V/NEMA 14-50 outlet at home (or wherever you charge), this is the best bang for your buck. Same 40A as the Lectron at half the price. The only tradeoff is fewer reviews and no Level 1 fallback.",
    asin: "B0FV8J9BGM",
    emoji: "💰",
    image: "/images/products/charging/taranasa.jpg",
    imageAlt: "Taranasa Level 2 NACS Portable Charger for Tesla Model Y",
  },
  {
    rank: 3,
    badge: "Safest Choice",
    badgeColor: "bg-purple-900/50 text-purple-300 border border-purple-700/50",
    name: "Tesla Mobile Connector",
    brand: "Tesla",
    price: "$300",
    priceNum: 300,
    maxAmps: "32A",
    level: "Level 1 + Level 2",
    plugs: "NEMA 14-50 + NEMA 5-15 (both included)",
    certification: "UL Listed",
    cable: "20 ft",
    adjustable: false,
    tempSensor: true,
    reviews: "N/A",
    rating: "N/A",
    pros: [
      "Built-in temperature sensors on both input AND output cords",
      "Official Tesla product — guaranteed compatibility",
      "Includes both NEMA 5-15 and 14-50 adapters",
      "UL listed — highest safety certification",
      "Additional NEMA adapters sold separately for flexibility",
    ],
    cons: [
      "32A max — slower than 40A third-party options",
      "No adjustable current settings",
      "$300 is mid-range pricing for fewer features",
      "Only available from shop.tesla.com (not on Amazon)",
    ],
    verdict:
      "The safest option, period. Those temperature sensors are a real safety advantage — especially if you're plugging into older outlets or using extension cords (which you shouldn't, but people do). If peace of mind matters most, buy this one.",
    shopUrl: "https://shop.tesla.com/product/mobile-connector",
    emoji: "🛡️",
    image: "/images/products/charging/tesla-mobile-connector.jpg",
    imageAlt: "Tesla Mobile Connector NACS Portable Charger",
  },
];

/* ─── component ─── */

export default function ChargingPage() {
  return (
    <>
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/reviews"
            className="text-sm text-cyan-300 hover:text-cyan-200 hover:underline mb-4 inline-block"
          >
            ← All Reviews
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Best Portable Tesla NACS Charger (2025-2026)
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Every Tesla owner needs a portable charger in the trunk. We compared the most popular
            NACS portable chargers by price, charging speed, safety, and real owner feedback.
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Meta */}
        <p className="text-sm text-zinc-500 mb-8">Last updated: March 2026 · 8 min read</p>

        {/* TL;DR */}
        <div className="rounded-xl border border-blue-800/30 bg-blue-900/10 p-6 mb-10">
          <h2 className="text-lg font-bold text-blue-400 mb-3">⚡ TL;DR</h2>
          <div className="space-y-2 text-zinc-200">
            <p>
              <strong className="text-white">Best overall:</strong>{" "}
              <a href="https://www.amazon.com/dp/B0DKF7Q2GB?tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer sponsored" className="text-cyan-300 hover:underline">Lectron Level 1/2 NACS ($340)</a>
              {" "}— most reviewed, adjustable current, dual-level charging.
            </p>
            <p>
              <strong className="text-white">Best value:</strong>{" "}
              <a href="https://www.amazon.com/dp/B0FV8J9BGM?tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer sponsored" className="text-cyan-300 hover:underline">Taranasa Level 2 NACS ($170)</a>
              {" "}— same 40A speed at half the price.
            </p>
            <p>
              <strong className="text-white">Safest:</strong>{" "}
              <a href="https://shop.tesla.com/product/mobile-connector" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">Tesla Mobile Connector ($300)</a>
              {" "}— only charger with temp sensors on both cords.
            </p>
          </div>
        </div>

        {/* Why you need one */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Every Tesla Owner Needs a Portable Charger
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            Tesla stopped including a Mobile Connector with new cars in 2022. That means your
            brand-new Model Y Juniper comes with{" "}
            <strong className="text-white">zero way to charge</strong> unless you buy a Wall
            Connector or a portable charger separately.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            Even if you have a Wall Connector at home, a portable charger is essential for:
          </p>
          <ul className="space-y-2 text-zinc-200 mb-4">
            {[
              "Road trips — charge at any RV park or campground with a NEMA 14-50 outlet",
              "Visiting family — plug into a standard 120V outlet overnight",
              "Emergency backup — if your Wall Connector ever fails",
              "Workplace charging — if your office has a 240V outlet",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-green-400 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-3 text-zinc-400 font-medium">Feature</th>
                  {products.map((p) => (
                    <th key={p.rank} className="text-center py-3 px-3 text-white font-semibold">
                      {p.brand}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Price</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center font-semibold text-white">{p.price}</td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Max Amps</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">{p.maxAmps}</td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Charging Level</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">{p.level}</td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Adjustable Current</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">
                      {p.adjustable ? <span className="text-green-400">✅</span> : <span className="text-zinc-600">❌</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Temp Sensors</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">
                      {p.tempSensor ? <span className="text-green-400">✅</span> : <span className="text-zinc-600">❌</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Certification</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">{p.certification}</td>
                  ))}
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-2 px-3 text-zinc-400">Cable</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">{p.cable}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2 px-3 text-zinc-400">Amazon Rating</td>
                  {products.map((p) => (
                    <td key={p.rank} className="py-2 px-3 text-center">
                      {p.rating !== "N/A" ? `${p.rating}★ (${p.reviews})` : "N/A"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual reviews */}
        {products.map((p) => (
          <section key={p.rank} className="mb-12">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-3xl">{p.emoji}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.badgeColor}`}>
                #{p.rank} {p.badge}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{p.name}</h2>
            <p className="text-zinc-400 mb-4">
              {p.price} · {p.maxAmps} · {p.level}
              {p.rating !== "N/A" && ` · ${p.rating}★ (${p.reviews} reviews)`}
            </p>

            {/* Product image */}
            <div className="relative w-full max-w-sm mx-auto mb-6 aspect-square rounded-xl overflow-hidden bg-white">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
                <p className="text-sm font-semibold text-green-400 mb-2">👍 Pros</p>
                <ul className="space-y-1.5">
                  {p.pros.map((pro) => (
                    <li key={pro} className="text-sm text-zinc-300 flex gap-2">
                      <span className="text-green-400 shrink-0">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
                <p className="text-sm font-semibold text-red-400 mb-2">👎 Cons</p>
                <ul className="space-y-1.5">
                  {p.cons.map((con) => (
                    <li key={con} className="text-sm text-zinc-300 flex gap-2">
                      <span className="text-red-400 shrink-0">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-zinc-200 leading-relaxed mb-4">
              <strong className="text-white">Our take:</strong> {p.verdict}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {p.asin && (
                <a
                  href={`https://www.amazon.com/dp/${p.asin}?tag=teslamodelguy-20`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
                >
                  Check Price on Amazon →
                </a>
              )}
              {p.shopUrl && (
                <a
                  href={p.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
                >
                  Buy from Tesla →
                </a>
              )}
            </div>
          </section>
        ))}

        {/* Buying guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Choose: Portable Charger Buying Guide
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">⚡ Amperage & Speed</h3>
              <p className="text-zinc-200 leading-relaxed">
                Higher amps = faster charging. A 40A charger on a 240V/50A circuit gives you ~30
                miles of range per hour. A 32A charger gives ~25 miles/hour. For overnight home
                charging, even 16A is usually enough (adds ~12 miles/hour).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🔌 Level 1 vs Level 2</h3>
              <p className="text-zinc-200 leading-relaxed">
                Level 1 = standard 120V outlet (NEMA 5-15). Adds 3-5 miles/hour — fine for
                overnight topping off. Level 2 = 240V outlet (NEMA 14-50). Adds 20-30 miles/hour.
                If you might ever need to charge from a regular outlet (visiting family, emergency),
                get a charger that supports both levels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🔒 Safety Certifications</h3>
              <p className="text-zinc-200 leading-relaxed">
                Always buy ETL or UL certified chargers. These have been independently tested for
                electrical safety. Avoid cheap chargers with no certification — they can overheat
                or cause fires. The Tesla Mobile Connector goes further with built-in temperature
                sensors that monitor cord heat in real time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🎚️ Adjustable Current</h3>
              <p className="text-zinc-200 leading-relaxed">
                If you&apos;re plugging into different outlets (home, work, travel), adjustable
                current is a big deal. You can dial it down on older or shared circuits to prevent
                tripping breakers. The Tesla Mobile Connector doesn&apos;t offer this — it draws
                maximum current automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Who should buy what */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Which Charger Should You Buy?
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
              <p className="font-semibold text-white mb-1">🏠 Home + Travel (most people)</p>
              <p className="text-zinc-300">
                → <strong className="text-cyan-300">Lectron Level 1/2</strong> ($340). Adjustable
                current + both plug types = maximum flexibility. You can charge anywhere.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
              <p className="font-semibold text-white mb-1">💰 Budget / Dedicated 240V outlet</p>
              <p className="text-zinc-300">
                → <strong className="text-cyan-300">Taranasa Level 2</strong> ($170). If you
                already have a NEMA 14-50 outlet, this is the smartest buy. Same 40A speed, half
                the price.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
              <p className="font-semibold text-white mb-1">🛡️ Safety-first / Peace of mind</p>
              <p className="text-zinc-300">
                → <strong className="text-cyan-300">Tesla Mobile Connector</strong> ($300). The
                only charger with temperature monitoring. Worth it if you charge in garages with
                older wiring or want zero worry.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-zinc-700 rounded-xl p-6 text-center mb-10">
          <h3 className="text-lg font-bold text-white mb-2">More Juniper Accessories</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Got your charger sorted? Check out our other reviews:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/reviews/floor-mats"
              className="text-sm bg-zinc-700 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 transition"
            >
              🚗 Floor Mats
            </Link>
            <Link
              href="/reviews/screen-protectors"
              className="text-sm bg-zinc-700 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 transition"
            >
              📱 Screen Protectors
            </Link>
            <Link
              href="/best/tesla-model-y-juniper-accessories"
              className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              🛒 All Must-Have Accessories
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
