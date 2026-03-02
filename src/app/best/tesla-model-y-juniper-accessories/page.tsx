import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import GradientHero from "@/components/GradientHero";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "10 Must-Have Accessories for Tesla Model Y Juniper (2025-2026)",
  description:
    "The definitive list of must-have accessories for the refreshed Tesla Model Y Juniper. Floor mats, screen protectors, organizers, and more from real-owner testing.",
  path: "/best/tesla-model-y-juniper-accessories",
  keywords: [
    "tesla model y juniper accessories",
    "best model y accessories 2025",
    "tesla model y must have accessories",
    "model y juniper floor mats",
    "tesla model y screen protector",
  ],
  type: "article",
  publishedTime: "2026-03-01",
  modifiedTime: "2026-03-01",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "10 Must-Have Accessories for Tesla Model Y Juniper (2025-2026)",
  description:
    "The definitive list of must-have accessories for the refreshed Tesla Model Y Juniper.",
  mainEntityOfPage: absoluteUrl("/best/tesla-model-y-juniper-accessories"),
  image: [absoluteUrl("/images/tesla-hero-desktop.jpg")],
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: { "@type": "Person", name: "Tesla Model Guy" },
  publisher: { "@type": "Organization", name: "Tesla Model Guy" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Best Picks", item: absoluteUrl("/best") },
    {
      "@type": "ListItem",
      position: 3,
      name: "10 Must-Have Accessories for Tesla Model Y Juniper",
      item: absoluteUrl("/best/tesla-model-y-juniper-accessories"),
    },
  ],
};

const accessories = [
  {
    rank: 1,
    name: "All-Weather Floor Mats",
    product: "3D MAXpider Kagu",
    emoji: "🛞",
    image: "/images/maxpider-product.jpg",
    price: "$70–230",
    priority: "Day 1",
    priorityColor: "bg-red-500/5 text-red-400 border border-red-500/20",
    amazonSearch: "3D+MAXpider+Tesla+Model+Y+Juniper+2026",
    asin: "B0F8PPNW49",
    why: "Your Juniper's carpet will get destroyed without protection. This is the single most important accessory you can buy.",
    detail:
      "Three-layer construction with a patented fiber backing that grips without damaging your carpet. Raised edges catch every drop of water, mud, and coffee you'll inevitably spill. Most Reddit owners who've tried both WeatherTech and MAXpider prefer the Kagu for its premium look.",
    tip: "Runner-up: 3W mats — about 30% cheaper, still great coverage.",
  },
  {
    rank: 2,
    name: "Screen Protector",
    product: "Spigen EZ Fit Tempered Glass",
    emoji: "🛡️",
    image: "/images/spigen-product.jpg",
    price: "$30–40",
    priority: "Day 1",
    priorityColor: "bg-red-500/5 text-red-400 border border-red-500/20",
    amazonSearch: "Spigen+Tesla+Model+Y+Juniper+screen+protector",
    why: "The Juniper has a gorgeous 15.4-inch touchscreen. It will get scratched and covered in fingerprints.",
    detail:
      "Spigen's EZ Fit comes with an alignment tray that makes installation foolproof — no bubbles, perfectly centered. 9H hardness, oleophobic coating, full touch responsiveness. The matte version kills glare on sunny days.",
    tip: "⚠️ The Juniper screen is 15.4\", not 15\". Old Model Y protectors DO NOT FIT.",
  },
  {
    rank: 3,
    name: "Center Console Organizer",
    product: "EVBASE / Spigen Console Tray",
    emoji: "📦",
    image: "/images/console-organizer-product.jpg",
    price: "$20–35",
    priority: "Week 1",
    priorityColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    amazonSearch: "Tesla+Model+Y+Juniper+center+console+organizer",
    why: "Without an organizer, small items disappear into a black hole. Keys, sunglasses, cables — gone.",
    detail:
      "Look for one with multiple compartments and a rubber/silicone lining so nothing rattles. EVBASE makes one with a built-in USB charging port — worth the extra $5.",
    tip: null,
  },
  {
    rank: 4,
    name: "Roof Sunshade",
    product: "EVBASE Juniper Sunshade",
    emoji: "☀️",
    image: "/images/sunshade-product.jpg",
    price: "$50–80",
    priority: "Month 1",
    priorityColor: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
    amazonSearch: "Tesla+Model+Y+Juniper+sunshade+roof",
    why: "The glass roof turns your car into a greenhouse in summer. A sunshade drops cabin temp by 10-15°F.",
    detail:
      "EVBASE makes a Juniper-specific sunshade with improved heat rejection designed for the exact dimensions of the refreshed roof.",
    tip: null,
  },
  {
    rank: 5,
    name: "Mud Flaps",
    product: "No-Drill Splash Guards",
    emoji: "💧",
    image: "/images/mud-flaps-product.jpg",
    price: "$20–30",
    priority: "Week 1",
    priorityColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    amazonSearch: "Tesla+Model+Y+Juniper+mud+flaps",
    why: "Tesla's paint is famously thin. Without mud flaps, road debris will chip your rear panels within months.",
    detail:
      "This is $20 insurance against hundreds in paint repair. No-drill options clip directly onto existing mounting points.",
    tip: null,
  },
  {
    rank: 6,
    name: "SSD for Sentry Mode",
    product: "Samsung T7 500GB",
    emoji: "💾",
    image: "/images/ssd-sentry-product.jpg",
    price: "$60–80",
    priority: "Week 1",
    priorityColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    amazonSearch: "Samsung+T7+SSD+500GB",
    asin: "B0874XN4D8",
    why: "Sentry Mode and dashcam need external storage. Flash drives are slow and unreliable.",
    detail:
      "The Samsung T7 is fast, reliable, and small enough to tuck away. Format as exFAT before plugging in — Tesla won't recognize NTFS or APFS.",
    tip: null,
  },
  {
    rank: 7,
    name: "Rear Screen Protector",
    product: "Spigen EZ Fit (8-inch)",
    emoji: "📱",
    image: "/images/rear-screen-product.jpg",
    price: "$15–20",
    priority: "Month 1",
    priorityColor: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
    amazonSearch: "Tesla+Model+Y+Juniper+rear+screen+protector",
    why: "The Juniper added an 8-inch rear screen — a first for Model Y. If you have kids, protect it from day one.",
    detail:
      "Spigen makes a matching rear protector that uses the same EZ Fit alignment system.",
    tip: null,
  },
  {
    rank: 8,
    name: "Performance Pedal Covers",
    product: "Aluminum-Style Pedals",
    emoji: "🏎️",
    image: "/images/phone-mount-product.jpg",
    price: "$20–30",
    priority: "Month 1",
    priorityColor: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
    amazonSearch: "Tesla+Model+Y+performance+pedal+covers",
    why: "Gives your Juniper a sportier feel, similar to the Performance model.",
    detail: "Purely aesthetic but makes the interior feel more premium. Easy snap-on install, no drilling.",
    tip: null,
  },
  {
    rank: 9,
    name: "Trunk Organizer",
    product: "Collapsible Cargo Organizer",
    emoji: "🧳",
    image: "/images/trunk-organizer-product.jpg",
    price: "$30–40",
    priority: "Month 1",
    priorityColor: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
    amazonSearch: "Tesla+Model+Y+trunk+organizer",
    why: "The Model Y trunk is massive but has zero organization. Groceries slide everywhere.",
    detail:
      "A collapsible organizer with dividers keeps everything in place and folds flat when not needed.",
    tip: null,
  },
  {
    rank: 10,
    name: "Portable Tire Inflator",
    product: "AstroAI / Fanttik X8",
    emoji: "🔧",
    image: "/images/wheel-covers-product.jpg",
    price: "$30–50",
    priority: "Month 1",
    priorityColor: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
    amazonSearch: "portable+tire+inflator+car",
    why: "The Model Y doesn't come with a spare tire. This is safety equipment, not optional.",
    detail:
      "Compact enough to live in your sub-trunk permanently. If you get a flat on the highway, you'll be glad you have it.",
    tip: null,
  },
];

export default function BestAccessoriesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <StructuredData data={[articleJsonLd, breadcrumbJsonLd]} />
      <GradientHero emoji="🏆" title="10 Must-Have Juniper Accessories" subtitle="A ranked starter kit to protect your Tesla, improve comfort, and avoid wasted spend." />

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm text-blue-400 font-medium mb-2">BEST PICKS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          10 Must-Have Accessories for Your Tesla Model Y Juniper
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          Just picked up your Model Y Juniper? Congrats — it&apos;s a hell of a car. But Tesla
          ships a great vehicle with a few obvious gaps. Here are the 10 accessories that are
          actually worth your money — no filler, no junk.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026</p>
      </header>

      {/* Quick Nav */}
      <nav className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-12">
        <h2 className="font-semibold text-white mb-3">Quick Jump</h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {accessories.map((a) => (
            <li key={a.rank}>
              <a href={`#item-${a.rank}`} className="text-blue-400 hover:text-blue-300 hover:underline">
                {a.rank}. {a.name} — {a.product}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Items */}
      <div className="space-y-12">
        {accessories.map((a) => (
          <section key={a.rank} id={`item-${a.rank}`} className="scroll-mt-20">
            <div className="flex items-start gap-4">
              {a.image ? <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0"><Image src={a.image} alt={a.name} fill className="object-contain p-1" sizes="64px" /></div> : <div className="text-3xl">{a.emoji}</div>}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-xl font-bold text-white">
                    #{a.rank} {a.name}
                  </h2>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${a.priorityColor}`}>
                    {a.priority}
                  </span>
                </div>
                <p className="text-sm font-medium text-zinc-200 mb-2">{a.product}</p>
                <p className="text-zinc-200 font-medium mb-2">{a.why}</p>
                <p className="text-zinc-200 mb-4">{a.detail}</p>
                {a.tip && (
                  <p className="text-sm text-amber-400 bg-amber-500/5 border border-amber-500/10 rounded-lg p-3 mb-3">
                    💡 {a.tip}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-white">{a.price}</span>
                  <a
                    href={(a as any).asin ? `https://www.amazon.com/dp/${(a as any).asin}?tag=teslamodelguy-20` : `https://www.amazon.com/s?k=${a.amazonSearch}&tag=teslamodelguy-20`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition"
                  >
                    Check Price on Amazon →
                  </a>
                  <a href="https://www.yeslak.com/collections/tesla-model-y-juniper-accessories?sca_ref=10733389.GHD3wW8fWH&utm_source=partner&utm_medium=affiliate&utm_campaign=affiliate" target="_blank" rel="noopener noreferrer sponsored" className="text-sm bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">Shop on Yeslak →</a>
                  <a href="https://evbandit.com/collections/tesla-model-y-juniper?sca_ref=10733634.pROAnZ9F8x" target="_blank" rel="noopener noreferrer sponsored" className="text-sm bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy at EV Bandit →</a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Cost Breakdown */}
      <section className="mt-16 bg-zinc-900 border border-zinc-700 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-4">Total Cost Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-300 border-b">
                <th className="pb-2">Priority</th>
                <th className="pb-2">Item</th>
                <th className="pb-2">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {accessories.map((a) => (
                <tr key={a.rank}>
                  <td className="py-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.priorityColor}`}>
                      {a.priority}
                    </span>
                  </td>
                  <td className="py-2 text-white">{a.name}</td>
                  <td className="py-2 text-zinc-300">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base text-zinc-200 leading-relaxed">
          You don&apos;t need everything at once. Start with Day 1 essentials (screen protector +
          floor mats) and add the rest over time.
        </p>
      </section>

      {/* Yeslak Partner Banner */}
      <section className="bg-gradient-to-r from-teal-900/40 to-teal-800/20 border border-teal-700/30 rounded-2xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">🛒 Shop Tesla Accessories on Yeslak</h3>
            <p className="text-sm text-zinc-400 mt-1">Screen protectors, floor mats, mud flaps, sunshades & more — all for Tesla.</p>
          </div>
          <a href="https://www.yeslak.com/collections/tesla-model-y-juniper-accessories?sca_ref=10733389.GHD3wW8fWH&utm_source=partner&utm_medium=affiliate&utm_campaign=affiliate" target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition text-sm">Browse Yeslak →</a>
        </div>
      </section>

      {/* EV Bandit Partner Banner */}
      <section className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-700/30 rounded-2xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">⚡ Shop Tesla Accessories on EV Bandit</h3>
            <p className="text-sm text-zinc-400 mt-1">Floor mats, screen protectors, organizers, sunshades & more — fast US shipping.</p>
          </div>
          <a href="https://evbandit.com/collections/tesla-model-y-juniper?sca_ref=10733634.pROAnZ9F8x" target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition text-sm">Browse EV Bandit →</a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="mt-12 border-t border-zinc-700 pt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Trust This List?</h2>
        <p className="text-zinc-300 text-base">
          I drive a 2025 Model Y Juniper every day. These aren&apos;t recommendations from
          someone who Googled &quot;tesla accessories&quot; — they&apos;re based on real use,
          hundreds of Reddit discussions, and YouTube reviews from actual owners. No product
          paid for placement. Some links are affiliate links — I earn a small commission if you
          buy through them, at no extra cost to you.
        </p>
      </section>

      {/* Back */}
      <section className="mt-12 border-t border-zinc-700 pt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Related Articles</h2>
        <div className="space-y-2">
          <Link href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats" className="text-blue-400 hover:text-blue-300 hover:underline block text-sm">
            → Best Floor Mats for Tesla Model Y Juniper
          </Link>
          <Link href="/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector" className="text-blue-400 hover:text-blue-300 hover:underline block text-sm">
            → Best Screen Protector for Tesla Model Y Juniper
          </Link>
          <Link href="/guides/first-things-to-do-tesla-model-y-juniper" className="text-blue-400 hover:text-blue-300 hover:underline block text-sm">
            → First 7 Things to Do After Delivery
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
