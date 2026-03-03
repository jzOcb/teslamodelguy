import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews" },
  title: "Reviews - Tesla Accessories Reviews & Comparisons",
  description: "In-depth reviews and comparisons of Tesla accessories — floor mats, screen protectors, organizers, and more.",
};

const reviews = [
  {
    title: "Best Floor Mats for Tesla Model Y Juniper: 4 Options Compared",
    slug: "/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats",
    desc: "3D MAXpider vs WeatherTech vs 3W vs Tuxmat — which one should you buy?",
    category: "Floor Mats",
    image: "/images/floor-mats-card.jpg",
  },
  {
    title: "Best Screen Protector for Model Y Juniper (15.4\" Display)",
    slug: "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
    desc: "Spigen vs dbrand vs TPARTS vs Tesery — matte vs clear, full comparison.",
    category: "Screen Protectors",
    image: "/images/screen-protector-card.jpg",
  },
  {
    title: "Best Center Console Organizer for Model Y Juniper: 5 Options Compared",
    slug: "/reviews/organizers/best-tesla-model-y-juniper-center-console-organizer",
    desc: "Spigen vs Yeslak vs Tesla Official vs REEVAA vs Jowua — tame the bottomless pit.",
    category: "Organizers",
    image: "/images/tesla-interior.jpg",
  },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">Reviews</span>
      </div>
      <h1 className="mb-3 text-4xl font-black tracking-tight text-white md:text-5xl">Accessory Reviews</h1>
      <p className="mb-10 text-base leading-relaxed text-zinc-200 md:text-lg">Honest, detailed reviews of Tesla accessories from a real owner.</p>
      <div className="space-y-6">
        {reviews.map((r) => (
          <Link
            key={r.slug}
            href={r.slug}
            className="block overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500"
          >
            <div className="relative h-52">
              <Image
                src={r.image}
                alt={r.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block rounded-full border border-zinc-500 bg-zinc-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100">
                  {r.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="mt-1 text-2xl font-bold text-white">{r.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-zinc-200">{r.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
        <h2 className="mb-2 text-xl font-bold text-white">More reviews coming soon</h2>
        <p className="text-base text-zinc-200">We&apos;re actively testing charging accessories, organizers, exterior protection, and more.</p>
      </section>
    </div>
  );
}
