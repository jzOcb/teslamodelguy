import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Floor Mats", slug: "floor-mats", emoji: "🏗️", desc: "All-weather protection for your Tesla" },
  { name: "Center Console", slug: "organizers", emoji: "📦", desc: "Organizers, trays & storage solutions" },
  { name: "Screen Protectors", slug: "screen-protectors", emoji: "🛡️", desc: "Protect your 15\" touchscreen" },
  { name: "Sunshades", slug: "sunshades", emoji: "☀️", desc: "Keep your cabin cool in summer" },
  { name: "Charging & Tech", slug: "charging", emoji: "⚡", desc: "USB hubs, wireless chargers, SSDs" },
  { name: "Exterior", slug: "exterior", emoji: "🚗", desc: "Mud flaps, PPF, wheel covers" },
];

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/tesla-hero-global.jpg"
          alt="Tesla Model Y on highway"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Go-To Guide for Tesla Accessories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Real reviews from an actual owner. No fluff, no sponsored BS — just honest recommendations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/best"
              className="bg-white text-black px-8 py-3.5 rounded font-medium hover:bg-gray-200 transition text-lg"
            >
              See Best Picks
            </Link>
            <Link
              href="/guides"
              className="border border-white/70 text-white px-8 py-3.5 rounded font-medium hover:bg-gray-950/10 transition text-lg"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/images/tesla-menu-y.png"
              alt="Tesla Model Y"
              fill
              className="object-contain bg-gray-950"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            The best accessories for every Tesla — tested by a real owner.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/reviews/${cat.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Why Trust Tesla Model Guy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="font-semibold text-white mb-2">Real Owner</h3>
              <p className="text-sm text-gray-500">I drive a Tesla daily. Every review is based on real use and ownership.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="font-semibold text-white mb-2">Real Photos</h3>
              <p className="text-sm text-gray-500">No stock images. Every photo is taken in my actual car.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="text-3xl mb-4">💯</div>
              <h3 className="font-semibold text-white mb-2">Honest Reviews</h3>
              <p className="text-sm text-gray-500">If something sucks, I&apos;ll tell you. No paid reviews, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Notice */}
      <div className="bg-black border-t border-gray-800 py-6 px-4 text-center">
        <p className="text-xs text-gray-500">
          Tesla, Model Y, Model 3, Model S, and Model X are trademarks of Tesla, Inc. This site is not affiliated with Tesla.
        </p>
      </div>
    </div>
  );
}
