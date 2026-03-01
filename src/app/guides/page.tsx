import type { Metadata } from "next";
import Link from "next/link";
import CardVisual from "@/components/CardVisual";

export const metadata: Metadata = {
  title: "Guides - Tesla Owner Guides & Tips",
  description: "Practical guides for Tesla owners — setup tips, delivery checklists, comparisons, and how-tos.",
};

const guides = [
  {
    title: "Tesla Model Y Juniper Delivery Checklist",
    slug: "/guides/tesla-model-y-juniper-delivery-checklist",
    desc: "Everything to inspect before you sign — panel gaps, paint, software, interior. Don't skip this.",
    tag: "ESSENTIAL",
    emoji: "✅",
    gradient: "from-zinc-800 via-emerald-800 to-teal-700",
  },
  {
    title: "First 7 Things to Do After Getting Your Model Y Juniper",
    slug: "/guides/first-things-to-do-tesla-model-y-juniper",
    desc: "Day-one setup checklist — from screen protector to Sentry Mode to charging routine.",
    tag: null,
    emoji: "🚀",
    gradient: "from-zinc-800 via-blue-800 to-cyan-700",
  },
  {
    title: "Model Y Juniper vs Old Model Y: Every Difference",
    slug: "/guides/tesla-model-y-juniper-vs-old-differences",
    desc: "Complete comparison — what changed, what improved, is it worth upgrading?",
    tag: null,
    emoji: "⚖️",
    gradient: "from-zinc-800 via-purple-800 to-indigo-700",
  },
  {
    title: "Best Ceramic Tint for Tesla Model Y — Complete Cost Guide",
    slug: "/guides/tesla-model-y-ceramic-tint-cost-guide",
    desc: "Ceramic vs carbon vs dyed, cost breakdown, legal limits by state, top brands, and DIY vs pro install.",
    tag: "POPULAR",
    emoji: "🌤️",
    gradient: "from-zinc-800 via-amber-700 to-orange-700",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 mb-5">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">Guides</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">Owner Guides</h1>
      <p className="text-base md:text-lg text-zinc-200 mb-10 leading-relaxed">Practical guides and how-tos for Tesla owners.</p>
      <div className="space-y-6">
        {guides.map((g) => (
          <Link key={g.slug} href={g.slug} className="block bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200">
            <CardVisual emoji={g.emoji} label="Guide" gradient={g.gradient} compact />
            {g.tag && <span className="inline-block text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full mt-4">{g.tag}</span>}
            <h2 className="text-2xl font-bold text-white mt-2">{g.title}</h2>
            <p className="text-base text-zinc-200 mt-2 leading-relaxed">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
