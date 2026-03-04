import Image from "next/image";
import Link from "next/link";
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
  {
    name: "Floor Mats",
    slug: "floor-mats",
    desc: "All-weather protection for your Tesla",
    image: "/images/floor-mats-card.jpg",
  },
  {
    name: "Center Console",
    slug: "organizers",
    desc: "Organizers, trays, and storage solutions",
    image: "/images/tesla-interior-console.png",
  },
  {
    name: "Screen Protectors",
    slug: "screen-protectors",
    desc: "Protect your 15.4\" touchscreen",
    image: "/images/screen-protector-card.jpg",
  },
  {
    name: "Sunshades",
    slug: "sunshades",
    desc: "Keep your cabin cool in summer",
    image: "/images/tesla-model-y-snow.jpg",
  },
  {
    name: "Charging & Tech",
    slug: "charging",
    desc: "USB hubs, wireless chargers, and SSDs",
    image: "/images/tesla-wall-connector.png",
  },
  {
    name: "Exterior",
    slug: "exterior",
    desc: "Mud flaps, PPF, and wheel covers",
    image: "/images/tesla-model-y-hero.jpg",
  },
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

      <section className="relative min-h-[72vh] overflow-hidden px-4 py-20 md:py-24">
        <Image
          src="/images/tesla-model-y-hero.jpg"
          alt="Tesla Model Y Juniper"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Your Guide to Tesla Accessories
          </h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-zinc-100 md:text-xl">
            Honest reviews, practical guides, and the best accessories for Model Y Juniper owners who want signal, not noise.
          </p>
          <Link
            href="/best"
            className="rounded-xl bg-white px-9 py-4 text-lg font-semibold text-zinc-900 transition-all duration-200 hover:bg-zinc-200"
          >
            See Best Picks
          </Link>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3">
            <span className="text-cyan-300">✦</span>
            <span className="text-sm font-semibold text-zinc-100">Browse by Category</span>
          </div>
          <h2 className="mb-10 text-3xl font-black text-white md:text-4xl">Find What You Need Fast</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/reviews/${cat.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500"
              >
                <div className="relative h-44">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-100">{cat.name}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-base leading-relaxed text-zinc-200">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-black text-white mb-2">Free Tesla Tools</h2>
                <p className="text-zinc-300">
                  Interactive delivery checklist, new owner setup guide, and EV savings calculator — built for Tesla owners.
                </p>
              </div>
              <Link
                href="/tools"
                className="inline-block whitespace-nowrap rounded-xl bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-cyan-700"
              >
                Explore Tools →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3">
            <span className="text-cyan-300">★</span>
            <span className="text-sm font-semibold text-zinc-100">Why Trust Tesla Model Guy?</span>
          </div>
          <h2 className="mb-8 text-3xl font-black text-white md:text-4xl">Built for Owners, Not Algorithms</h2>
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-8">
            <span className="text-base text-zinc-200">🚗 Real owner, real daily driving</span>
            <span className="hidden text-zinc-600 md:inline">·</span>
            <span className="text-base text-zinc-200">📸 Actual photos, no stock images</span>
            <span className="hidden text-zinc-600 md:inline">·</span>
            <span className="text-base text-zinc-200">🧪 Honest reviews, no paid promos</span>
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-700 bg-zinc-950 px-4 py-8 text-center">
        <p className="text-base leading-relaxed text-zinc-200">
          Tesla, Model Y, Model 3, Model S, and Model X are trademarks of Tesla, Inc. This site is not affiliated with Tesla.
        </p>
      </div>
    </div>
  );
}
