import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/frunk" },
  title: "Tesla Model Y Juniper Frunk Accessories Reviews | Tesla Model Guy",
  description: "Reviews and comparisons of the best front trunk (frunk) accessories for Tesla Model Y Juniper: organizers, cooler bags, mats, and storage solutions.",
};

const articles = [
  {
    href: "/reviews/frunk/best-tesla-model-y-juniper-frunk-organizer",
    title: "Best Frunk Organizer for Tesla Model Y Juniper",
    desc: "4 options compared: Spigen, Teslarati, Yeslak, and budget Amazon picks.",
    date: "March 2026",
  },
];

export default function FrunkReviewsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="📦"
        title="Frunk Accessories"
        subtitle="Organizers, cooler bags, and storage solutions for the Model Y Juniper front trunk."
      />
      <div className="space-y-4 mt-10">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="block border border-zinc-700 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-bold text-white mb-1">{a.title}</h2>
            <p className="text-zinc-300 text-sm mb-2">{a.desc}</p>
            <p className="text-xs text-zinc-500">{a.date}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/reviews" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">← All Reviews</Link>
      </div>
    </main>
  );
}
