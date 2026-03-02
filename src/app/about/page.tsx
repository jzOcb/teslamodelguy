import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description: "Meet the guy behind Tesla Model Guy — a real Tesla owner sharing honest accessory reviews.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 mb-5">
        <span className="text-cyan-300">✦</span>
        <span className="text-sm font-semibold text-zinc-100">About</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">About Tesla Model Guy</h1>

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-7 md:p-8">
        <p className="text-lg text-zinc-100 mb-5 leading-relaxed">
          I&apos;m a Tesla owner who got tired of generic accessory lists written by people who never use the products.
        </p>
        <p className="text-base text-zinc-200 mb-5 leading-relaxed">
          So I started buying, testing, and reviewing accessories myself — then sharing what actually works.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">What Makes This Different</h2>
        <ul className="list-disc pl-6 space-y-3 text-base text-zinc-200 leading-relaxed">
          <li><strong>Real ownership</strong> — I drive this car every day.</li>
          <li><strong>Visual proof</strong> — practical visuals for products and use cases.</li>
          <li><strong>Real opinions</strong> — no paid sponsorships or fake reviews.</li>
          <li><strong>Model-specific</strong> — compatibility checked for each Tesla model.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Affiliate Disclosure</h2>
        <p className="text-base text-zinc-200 leading-relaxed">
          Some links on this site are affiliate links. If you buy through them, I may earn a small commission at no extra cost to you. That supports ongoing testing and keeps the content independent.
        </p>
      </div>
    </div>
  );
}
