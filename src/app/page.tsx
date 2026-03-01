import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import CardVisual from "@/components/CardVisual";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tesla Accessories Reviews and Owner Guides",
  description:
    "Real-world Tesla accessories reviews and practical owner guides for Model Y Juniper, including floor mats, screen protectors, and delivery checklists.",
  path: "/",
  keywords: [
    "tesla accessories reviews",
    "tesla model y juniper guides",
    "best tesla accessories",
  ],
});

const categories = [
  { name: "Floor Mats", slug: "floor-mats", emoji: "🏗️", desc: "All-weather protection for your Tesla", gradient: "from-slate-800 via-cyan-800 to-blue-700" },
  { name: "Center Console", slug: "organizers", emoji: "📦", desc: "Organizers, trays & storage solutions", gradient: "from-zinc-800 via-emerald-800 to-teal-700" },
  { name: "Screen Protectors", slug: "screen-protectors", emoji: "🛡️", desc: "Protect your 15.4\" touchscreen", gradient: "from-zinc-800 via-indigo-800 to-blue-700" },
  { name: "Sunshades", slug: "sunshades", emoji: "☀️", desc: "Keep your cabin cool in summer", gradient: "from-zinc-800 via-amber-700 to-orange-600" },
  { name: "Charging & Tech", slug: "charging", emoji: "⚡", desc: "USB hubs, wireless chargers, SSDs", gradient: "from-zinc-800 via-lime-700 to-emerald-700" },
  { name: "Exterior", slug: "exterior", emoji: "🚗", desc: "Mud flaps, PPF, wheel covers", gradient: "from-zinc-800 via-rose-800 to-red-700" },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  sameAs: [],
};

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <StructuredData data={homeJsonLd} />

      <section className="relative py-20 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-slate-900 to-blue-900" />
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Tesla Gear, Tested by a Real Owner
            </h1>
            <p className="text-base md:text-xl text-zinc-100 mb-10 max-w-2xl leading-relaxed">
              Honest reviews, practical guides, and the best accessories for Model Y Juniper owners who want signal, not noise.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/best" className="bg-white text-zinc-900 px-9 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition-all duration-200 text-lg">
                See Best Picks
              </Link>
              <Link href="/guides" className="border border-zinc-100/80 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-lg">
                Read Guides
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 backdrop-blur">
            <CardVisual emoji="⚡" label="REAL TESTING" gradient="from-zinc-800 via-blue-800 to-cyan-700" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <CardVisual emoji="📸" label="NO STOCK PHOTOS" compact gradient="from-zinc-800 via-emerald-800 to-teal-700" />
              <CardVisual emoji="💯" label="NO PAID REVIEWS" compact gradient="from-zinc-800 via-rose-800 to-orange-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 mb-6">
            <span className="text-cyan-300">✦</span>
            <span className="text-sm font-semibold text-zinc-100">Browse by Category</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Find What You Need Fast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/reviews/${cat.slug}`}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200 group"
              >
                <CardVisual emoji={cat.emoji} label={cat.name} gradient={cat.gradient} />
                <h3 className="sr-only">{cat.name}</h3>
                <p className="text-base text-zinc-200 mt-2 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 mb-6">
            <span className="text-cyan-300">★</span>
            <span className="text-sm font-semibold text-zinc-100">Why Trust Tesla Model Guy?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Built for Owners, Not Algorithms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-4" aria-hidden="true">🚗</div>
              <h3 className="font-bold text-xl text-white mb-2">Real Owner</h3>
              <p className="text-base text-zinc-200 leading-relaxed">I drive a Tesla daily. Every review is based on real use and ownership.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-4" aria-hidden="true">📸</div>
              <h3 className="font-bold text-xl text-white mb-2">Visual Proof</h3>
              <p className="text-base text-zinc-200 leading-relaxed">Clear product visuals and practical examples on every page.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-4" aria-hidden="true">🧪</div>
              <h3 className="font-bold text-xl text-white mb-2">No Fluff</h3>
              <p className="text-base text-zinc-200 leading-relaxed">If something is bad, I call it out. No paid reviews, ever.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-zinc-950 border-t border-zinc-700 py-8 px-4 text-center">
        <p className="text-base text-zinc-200 leading-relaxed">
          Tesla, Model Y, Model 3, Model S, and Model X are trademarks of Tesla, Inc. This site is not affiliated with Tesla.
        </p>
      </div>
    </div>
  );
}
