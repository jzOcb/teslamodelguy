import type { Metadata } from "next";
import Link from "next/link";

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
  },
];

export default function BestPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Best Picks</h1>
      <p className="text-gray-500 mb-8">Our curated recommendations — only products we actually stand behind.</p>
      <div className="space-y-4">
        {articles.map((a) => (
          <Link key={a.slug} href={a.slug} className="block border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-md transition">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{a.tag}</span>
            <h2 className="text-xl font-bold text-white mt-2">{a.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
