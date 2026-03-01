import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
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
  { name: "Floor Mats", slug: "floor-mats", emoji: "🏗️", desc: "All-weather protection for your Tesla" },
  { name: "Center Console", slug: "organizers", emoji: "📦", desc: "Organizers, trays & storage solutions" },
  { name: "Screen Protectors", slug: "screen-protectors", emoji: "🛡️", desc: "Protect your 15\" touchscreen" },
  { name: "Sunshades", slug: "sunshades", emoji: "☀️", desc: "Keep your cabin cool in summer" },
  { name: "Charging & Tech", slug: "charging", emoji: "⚡", desc: "USB hubs, wireless chargers, SSDs" },
  { name: "Exterior", slug: "exterior", emoji: "🚗", desc: "Mud flaps, PPF, wheel covers" },
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
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/tesla-hero-global.jpg"
          alt="Tesla Model Y on highway"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Go-To Guide for Tesla Accessories
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Real reviews from an actual owner. No fluff, no sponsored BS, just honest recommendations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/best"
              className="bg-white text-zinc-900 px-8 py-3.5 rounded font-medium hover:bg-zinc-200 transition text-lg"
            >
              See Best Picks
            </Link>
            <Link
              href="/guides"
              className="border border-white/70 text-white px-8 py-3.5 rounded font-medium hover:bg-zinc-950/10 transition text-lg"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/images/tesla-menu-y.png"
              alt="Tesla Model Y"
              fill
              className="object-contain bg-zinc-950"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          <p className="text-center text-zinc-400 text-sm mt-4">
            The best accessories for every Tesla, tested by a real owner.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/reviews/${cat.slug}`}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{cat.emoji}</div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Why Trust Tesla Model Guy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-3xl mb-4" aria-hidden="true">🚗</div>
              <h3 className="font-semibold text-white mb-2">Real Owner</h3>
              <p className="text-sm text-zinc-400">I drive a Tesla daily. Every review is based on real use and ownership.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-3xl mb-4" aria-hidden="true">📸</div>
              <h3 className="font-semibold text-white mb-2">Real Photos</h3>
              <p className="text-sm text-zinc-400">No stock images. Every photo is taken in my actual car.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-3xl mb-4" aria-hidden="true">💯</div>
              <h3 className="font-semibold text-white mb-2">Honest Reviews</h3>
              <p className="text-sm text-zinc-400">If something is bad, I call it out. No paid reviews, ever.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-zinc-950 border-t border-zinc-800 py-6 px-4 text-center">
        <p className="text-xs text-zinc-400">
          Tesla, Model Y, Model 3, Model S, and Model X are trademarks of Tesla, Inc. This site is not affiliated with Tesla.
        </p>
      </div>
    </div>
  );
}
