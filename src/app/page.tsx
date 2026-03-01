import Link from "next/link";

const categories = [
  { name: "Floor Mats", slug: "floor-mats", emoji: "🏗️", desc: "All-weather protection for your Juniper" },
  { name: "Center Console", slug: "organizers", emoji: "📦", desc: "Organizers, trays & storage solutions" },
  { name: "Screen Protectors", slug: "screen-protectors", emoji: "🛡️", desc: "Protect your 15\" touchscreen" },
  { name: "Sunshades", slug: "sunshades", emoji: "☀️", desc: "Keep your cabin cool in summer" },
  { name: "Charging & Tech", slug: "charging", emoji: "⚡", desc: "USB hubs, wireless chargers, SSDs" },
  { name: "Exterior", slug: "exterior", emoji: "🚗", desc: "Mud flaps, PPF, wheel covers" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Go-To Guide for Tesla Accessories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Real reviews from an actual owner. No sponsored BS — just honest recommendations
            for the best Tesla accessories — starting with the Model Y Juniper.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/best"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              See Best Picks →
            </Link>
            <Link
              href="/guides"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/reviews/${cat.slug}`}
              className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Trust Tesla Model Guy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-semibold mb-2">Real Owner</h3>
              <p className="text-sm text-gray-600">I drive a 2025 Model Y Juniper daily. Every review is from real use.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-semibold mb-2">Real Photos</h3>
              <p className="text-sm text-gray-600">No stock images. Every photo is taken in my actual car.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💯</div>
              <h3 className="font-semibold mb-2">Honest Reviews</h3>
              <p className="text-sm text-gray-600">If something sucks, I'll tell you. No paid reviews, ever.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
