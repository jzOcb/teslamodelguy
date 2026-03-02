import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Guides - Tesla Owner Guides & Tips",
  description: "Practical guides for Tesla owners — setup tips, delivery checklists, comparisons, and how-tos.",
};

const guides = [
  {
    title: "Tesla Model Y Juniper Delivery Checklist",
    slug: "/guides/tesla-model-y-juniper-delivery-checklist",
    desc: "Everything to inspect before you sign — panel gaps, paint, software, interior. Don't skip this.",
    tag: "ESSENTIAL",
    image: "/images/tesla-model-y-hero.jpg",
  },
  {
    title: "First 7 Things to Do After Getting Your Model Y Juniper",
    slug: "/guides/first-things-to-do-tesla-model-y-juniper",
    desc: "Day-one setup checklist — from screen protector to Sentry Mode to charging routine.",
    tag: null,
    image: "/images/tesla-interior.jpg",
  },
  {
    title: "Model Y Juniper vs Old Model Y: Every Difference",
    slug: "/guides/tesla-model-y-juniper-vs-old-differences",
    desc: "Complete comparison — what changed, what improved, is it worth upgrading?",
    tag: null,
    image: "/images/tesla-model-y-snow.jpg",
  },
  {
    title: "Tesla Model Y Juniper: 10 Common Problems & How to Fix Them",
    slug: "/guides/tesla-model-y-juniper-common-problems",
    desc: "Real owner-reported issues with the Juniper and practical solutions — from suspension clunks to screen glare.",
    tag: "NEW",
    image: "/images/tesla-model-y-hero.jpg",
  },
  {
    title: "Best Ceramic Tint for Tesla Model Y — Complete Cost Guide",
    slug: "/guides/tesla-model-y-ceramic-tint-cost-guide",
    desc: "Ceramic vs carbon vs dyed, cost breakdown, legal limits by state, top brands, and DIY vs pro install.",
    tag: "POPULAR",
    image: "/images/tesla-model-y-hero.jpg",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">Guides</span>
      </div>
      <h1 className="mb-3 text-4xl font-black tracking-tight text-white md:text-5xl">Owner Guides</h1>
      <p className="mb-10 text-base leading-relaxed text-zinc-200 md:text-lg">Practical guides and how-tos for Tesla owners.</p>
      <div className="space-y-6">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={g.slug}
            className="block overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500"
          >
            <div className="relative h-52">
              <Image
                src={g.image}
                alt={g.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block rounded-full border border-zinc-500 bg-zinc-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100">
                  Guide
                </span>
              </div>
            </div>
            <div className="p-6">
              {g.tag ? <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-xs font-semibold text-cyan-300">{g.tag}</span> : null}
              <h2 className="mt-2 text-2xl font-bold text-white">{g.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-zinc-200">{g.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
