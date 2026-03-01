import type { Metadata } from "next";
import Link from "next/link";

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
  },
  {
    title: "First 7 Things to Do After Getting Your Model Y Juniper",
    slug: "/guides/first-things-to-do-tesla-model-y-juniper",
    desc: "Day-one setup checklist — from screen protector to Sentry Mode to charging routine.",
    tag: null,
  },
  {
    title: "Model Y Juniper vs Old Model Y: Every Difference",
    slug: "/guides/tesla-model-y-juniper-vs-old-differences",
    desc: "Complete comparison — what changed, what improved, is it worth upgrading?",
    tag: null,
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Guides</h1>
      <p className="text-gray-500 mb-8">Practical guides and how-tos for Tesla owners.</p>
      <div className="space-y-4">
        {guides.map((g) => (
          <Link key={g.slug} href={g.slug} className="block border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-md transition">
            {g.tag && <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">{g.tag}</span>}
            <h2 className="text-xl font-bold text-white mt-1">{g.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
