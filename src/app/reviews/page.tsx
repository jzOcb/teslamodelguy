import type { Metadata } from "next";
import Link from "next/link";

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
  },
  {
    title: "Best Screen Protector for Model Y Juniper (15.4\" Display)",
    slug: "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
    desc: "Spigen vs dbrand vs TPARTS vs Tesery — matte vs clear, full comparison.",
    category: "Screen Protectors",
  },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Reviews</h1>
      <p className="text-gray-500 mb-8">Honest, detailed reviews of Tesla accessories from a real owner.</p>
      <div className="space-y-4">
        {reviews.map((r) => (
          <Link key={r.slug} href={r.slug} className="block border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-md transition">
            <span className="text-xs font-medium text-gray-500">{r.category}</span>
            <h2 className="text-xl font-bold text-white mt-1">{r.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{r.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
