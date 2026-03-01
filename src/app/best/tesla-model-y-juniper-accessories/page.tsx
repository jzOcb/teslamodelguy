import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Must-Have Accessories for Tesla Model Y Juniper (2025-2026)",
  description:
    "The definitive list of must-have accessories for the refreshed Tesla Model Y Juniper. Floor mats, screen protectors, organizers — tested recommendations from a real owner.",
  keywords: [
    "tesla model y juniper accessories",
    "best model y accessories 2025",
    "tesla model y must have accessories",
    "model y juniper floor mats",
    "tesla model y screen protector",
  ],
  openGraph: {
    title: "10 Must-Have Accessories for Tesla Model Y Juniper",
    description: "Real owner recommendations for the best Model Y Juniper accessories.",
    type: "article",
    publishedTime: "2026-03-01",
  },
};

const accessories = [
  {
    rank: 1,
    name: "All-Weather Floor Mats",
    product: "3D MAXpider Kagu",
    emoji: "🏗️",
    price: "$70–230",
    priority: "Day 1",
    priorityColor: "bg-red-900/50 text-red-400",
    amazonSearch: "3D+MAXpider+Tesla+Model+Y+Juniper+2026",
    why: "Your Juniper's carpet will get destroyed without protection. This is the single most important accessory you can buy.",
    detail:
      "Three-layer construction with a patented fiber backing that grips without damaging your carpet. Raised edges catch every drop of water, mud, and coffee you'll inevitably spill. Most Reddit owners who've tried both WeatherTech and MAXpider prefer the Kagu for its premium look.",
    tip: "Runner-up: Tesmanian mats — about 30% cheaper, still great coverage.",
  },
  {
    rank: 2,
    name: "Screen Protector",
    product: "Spigen EZ Fit Tempered Glass",
    emoji: "🛡️",
    price: "$30–40",
    priority: "Day 1",
    priorityColor: "bg-red-900/50 text-red-400",
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
    price: "$20–35",
    priority: "Week 1",
    priorityColor: "bg-yellow-900/50 text-yellow-400",
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
    price: "$50–80",
    priority: "Month 1",
    priorityColor: "bg-green-900/50 text-green-400",
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
    price: "$20–30",
    priority: "Week 1",
    priorityColor: "bg-yellow-900/50 text-yellow-400",
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
    price: "$60–80",
    priority: "Week 1",
    priorityColor: "bg-yellow-900/50 text-yellow-400",
    amazonSearch: "Samsung+T7+SSD+500GB",
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
    price: "$15–20",
    priority: "Month 1",
    priorityColor: "bg-green-900/50 text-green-400",
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
    price: "$20–30",
    priority: "Month 1",
    priorityColor: "bg-green-900/50 text-green-400",
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
    price: "$30–40",
    priority: "Month 1",
    priorityColor: "bg-green-900/50 text-green-400",
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
    price: "$30–50",
    priority: "Month 1",
    priorityColor: "bg-green-900/50 text-green-400",
    amazonSearch: "portable+tire+inflator+car",
    why: "The Model Y doesn't come with a spare tire. This is safety equipment, not optional.",
    detail:
      "Compact enough to live in your sub-trunk permanently. If you get a flat on the highway, you'll be glad you have it.",
    tip: null,
  },
];

export default function BestAccessoriesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Image */}
      <div className="relative h-[40vh] min-h-[300px] -mx-4 md:mx-0 md:rounded-2xl overflow-hidden mb-8">
        <Image src="/images/tesla-hero-desktop.jpg" alt="Tesla Model Y Juniper" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm text-blue-600 font-medium mb-2">BEST PICKS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          10 Must-Have Accessories for Your Tesla Model Y Juniper
        </h1>
        <p className="text-lg text-gray-300">
          Just picked up your Model Y Juniper? Congrats — it&apos;s a hell of a car. But Tesla
          ships a great vehicle with a few obvious gaps. Here are the 10 accessories that are
          actually worth your money — no filler, no junk.
        </p>
        <p className="text-sm text-gray-400 mt-4">Last updated: March 2026</p>
      </header>

      {/* Quick Nav */}
      <nav className="bg-gray-900 rounded-xl p-6 mb-12">
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
              <div className="text-3xl">{a.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-xl font-bold text-white">
                    #{a.rank} {a.name}
                  </h2>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${a.priorityColor}`}>
                    {a.priority}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-300 mb-2">{a.product}</p>
                <p className="text-gray-200 font-medium mb-2">{a.why}</p>
                <p className="text-gray-300 mb-4">{a.detail}</p>
                {a.tip && (
                  <p className="text-sm text-amber-400 bg-amber-950 rounded-lg p-3 mb-3">
                    💡 {a.tip}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-white">{a.price}</span>
                  <a
                    href={`https://www.amazon.com/s?k=${a.amazonSearch}&tag=teslamodelguy-20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Check Price on Amazon →
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Cost Breakdown */}
      <section className="mt-16 bg-gray-900 rounded-xl p-8">
        <h2 className="text-xl font-bold text-white mb-4">Total Cost Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b">
                <th className="pb-2">Priority</th>
                <th className="pb-2">Item</th>
                <th className="pb-2">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {accessories.map((a) => (
                <tr key={a.rank}>
                  <td className="py-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.priorityColor}`}>
                      {a.priority}
                    </span>
                  </td>
                  <td className="py-2 text-white">{a.name}</td>
                  <td className="py-2 text-gray-400">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          You don&apos;t need everything at once. Start with Day 1 essentials (screen protector +
          floor mats) and add the rest over time.
        </p>
      </section>

      {/* Trust Section */}
      <section className="mt-12 border-t border-gray-800 pt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Trust This List?</h2>
        <p className="text-gray-400 text-sm">
          I drive a 2025 Model Y Juniper every day. These aren&apos;t recommendations from
          someone who Googled &quot;tesla accessories&quot; — they&apos;re based on real use,
          hundreds of Reddit discussions, and YouTube reviews from actual owners. No product
          paid for placement. Some links are affiliate links — I earn a small commission if you
          buy through them, at no extra cost to you.
        </p>
      </section>

      {/* Back */}
      <div className="mt-12">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
