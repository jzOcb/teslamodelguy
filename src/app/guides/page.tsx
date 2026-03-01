import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides - Tesla Model Y Owner Guides & Tips",
  description: "Practical guides for Tesla Model Y owners — setup tips, delivery checklists, and how-tos.",
};

const guides = [
  {
    title: "First 7 Things to Do After Getting Your Tesla Model Y Juniper",
    slug: "/guides/first-things-to-do-tesla-model-y-juniper",
    desc: "The day-one checklist every new Juniper owner needs — from delivery inspection to must-have settings.",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Guides</h1>
      <p className="text-gray-600 mb-8">Practical guides and how-tos for Tesla owners.</p>
      <div className="space-y-4">
        {guides.map((g) => (
          <Link key={g.slug} href={g.slug} className="block border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-900">{g.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
