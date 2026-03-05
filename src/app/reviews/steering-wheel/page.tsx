import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/steering-wheel" },
  title: "Tesla Model Y Steering Wheel Accessories Reviews | Tesla Model Guy",
  description: "Reviews of the best steering wheel accessories for Tesla Model Y: S3XY Knob, S3XY Buttons, and more physical control upgrades.",
};

const articles = [
  {
    href: "/reviews/steering-wheel/s3xy-knob-buttons-review",
    title: "S3XY Knob & Buttons Review — Best Steering Wheel Upgrade",
    desc: "130+ shortcuts, physical controls, and honest pros/cons. Plus Juniper compatibility notes.",
    date: "March 2026",
  },
];

export default function SteeringWheelReviewsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="🎛️"
        title="Steering Wheel Accessories"
        subtitle="Physical controls and upgrades for your Tesla touchscreen experience."
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
