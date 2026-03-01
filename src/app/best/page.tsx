import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Best Tesla Accessories - Top Picks & Recommendations",
  description: "Our top picks for the best Tesla accessories — tested and reviewed by a real owner.",
};

const articles = [
  {
    title: "10 Must-Have Accessories for Tesla Model Y Juniper",
    slug: "/best/tesla-model-y-juniper-accessories",
    desc: "The definitive list — floor mats, screen protectors, organizers, and more.",
    tag: "MOST POPULAR",
    emoji: "🏆",
    gradient: "from-zinc-800 via-cyan-800 to-blue-700",
  },
];

export default function BestPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 mb-5">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">Best Picks</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Top Picks</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-10 leading-relaxed">Our curated recommendations — only products we actually stand behind.</p>
      <div className="space-y-6">
        {articles.map((a) => (
          <Link key={a.slug} href={a.slug} className="block bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">
            <CardVisual emoji={a.emoji} label="Best Picks" gradient={a.gradient} compact />
            <span className="inline-block text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full mt-4">{a.tag}</span>
            <h2 className="text-2xl font-bold text-white mt-2">{a.title}</h2>
            <p className="text-base text-zinc-200 mt-2 leading-relaxed">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
