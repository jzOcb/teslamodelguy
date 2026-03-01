import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Reviews - Tesla Accessories Reviews & Comparisons",
  description: "In-depth reviews and comparisons of Tesla accessories — floor mats, screen protectors, organizers, and more.",
};

const reviews = [
  {
    title: "Best Floor Mats for Tesla Model Y Juniper: 4 Options Compared",
    slug: "/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats",
    desc: "3D MAXpider vs WeatherTech vs Tesmanian vs Tuxmat — which one should you buy?",
    category: "Floor Mats",
    emoji: "🏗️",
    gradient: "from-zinc-800 via-cyan-800 to-blue-700",
  },
  {
    title: "Best Screen Protector for Model Y Juniper (15.4\" Display)",
    slug: "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
    desc: "Spigen vs dbrand vs TPARTS vs Tesery — matte vs clear, full comparison.",
    category: "Screen Protectors",
    emoji: "🛡️",
    gradient: "from-zinc-800 via-indigo-800 to-blue-700",
  },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 mb-5">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">Reviews</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Accessory Reviews</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-10 leading-relaxed">Honest, detailed reviews of Tesla accessories from a real owner.</p>
      <div className="space-y-6">
        {reviews.map((r) => (
          <Link key={r.slug} href={r.slug} className="block bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-200">
            <CardVisual emoji={r.emoji} label={r.category} gradient={r.gradient} compact />
            <span className="inline-block text-xs font-semibold text-cyan-300 mt-4">{r.category}</span>
            <h2 className="text-2xl font-bold text-white mt-2">{r.title}</h2>
            <p className="text-base text-zinc-200 mt-2 leading-relaxed">{r.desc}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-2">More reviews coming soon</h2>
        <p className="text-base text-zinc-200">We&apos;re actively testing charging accessories, organizers, exterior protection, and more.</p>
      </section>
    </div>
  );
}
