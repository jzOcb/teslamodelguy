import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  title: "Best Floor Mats for Tesla Model Y Juniper (2025-2026): 4 Options Compared",
  description:
    "3D MAXpider vs WeatherTech vs Tesmanian vs Tuxmat — we compare the 4 best floor mats for your Tesla Model Y Juniper. Real owner insights, Reddit consensus, and honest recommendations.",
  keywords: [
    "tesla model y juniper floor mats",
    "best floor mats model y 2025",
    "3d maxpider tesla model y juniper",
    "weathertech tesla model y juniper",
    "tesmanian floor mats model y",
  ],
};

export default function FloorMatsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="🛞"
        title="Floor Mat Deep Dive"
        subtitle="Real-world comparison of fit, coverage, and value for Model Y Juniper owners."
      />
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">REVIEWS / FLOOR MATS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Best Floor Mats for Tesla Model Y Juniper: 4 Options Compared
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          Floor mats are the first accessory every Model Y owner should buy. But which ones?
          We compared the 4 most popular options so you don&apos;t have to guess.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 8 min read</p>
      </header>

      {/* Quick Verdict */}
      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-white mb-3">⚡ Quick Verdict</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>Best Overall:</strong> 3D MAXpider Kagu — premium fit, looks great, most Reddit-recommended</li>
          <li><strong>Best Value:</strong> Tesmanian — 30% cheaper, solid protection, velcro backing</li>
          <li><strong>Best Brand Recognition:</strong> WeatherTech — you know the name, excellent containment</li>
          <li><strong>Best Coverage:</strong> Tuxmat — highest sidewall edges, maximum protection</li>
        </ul>
      </section>

      {/* Why Floor Mats Matter */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Why Floor Mats Are Non-Negotiable</h2>
        <p className="text-zinc-200 mb-3">
          The Model Y Juniper comes with basic carpet mats that offer zero protection against water, mud,
          snow, or spills. One rainy day and your carpet is stained. One winter and it&apos;s destroyed.
        </p>
        <p className="text-zinc-200 mb-3">
          All-weather floor mats are the cheapest insurance you can buy for your car&apos;s interior.
          They protect resale value, make cleaning effortless, and look significantly better than soggy carpet.
        </p>
        <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4 text-sm text-amber-300">
          <strong>⚠️ Juniper Compatibility Note:</strong> The 2025-2026 Model Y Juniper has slightly different
          interior dimensions than the pre-refresh Model Y. Make sure any mats you buy specifically say
          &quot;Juniper&quot; or &quot;2025-2026 Model Y.&quot; Old mats will not fit correctly.
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-zinc-700 rounded-lg">
            <thead className="bg-zinc-900">
              <tr>
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-left p-3 font-semibold">3D MAXpider</th>
                <th className="text-left p-3 font-semibold">WeatherTech</th>
                <th className="text-left p-3 font-semibold">Tesmanian</th>
                <th className="text-left p-3 font-semibold">Tuxmat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr><td className="p-3 font-medium">Price (full set)</td><td className="p-3">$170–230</td><td className="p-3">$180–250</td><td className="p-3">$120–160</td><td className="p-3">$200–260</td></tr>
              <tr><td className="p-3 font-medium">Material</td><td className="p-3">TPE + XPE foam</td><td className="p-3">TPE</td><td className="p-3">TPE</td><td className="p-3">TPE</td></tr>
              <tr><td className="p-3 font-medium">Edge Height</td><td className="p-3">High</td><td className="p-3">High</td><td className="p-3">Medium</td><td className="p-3">Highest</td></tr>
              <tr><td className="p-3 font-medium">Anti-Slip</td><td className="p-3">Fiber backing</td><td className="p-3">Nibs</td><td className="p-3">Velcro strips</td><td className="p-3">Rubber backing</td></tr>
              <tr><td className="p-3 font-medium">Odor</td><td className="p-3">None</td><td className="p-3">Slight (fades)</td><td className="p-3">None</td><td className="p-3">Slight (fades)</td></tr>
              <tr><td className="p-3 font-medium">Look/Feel</td><td className="p-3">Premium</td><td className="p-3">Utilitarian</td><td className="p-3">Clean</td><td className="p-3">Premium</td></tr>
              <tr><td className="p-3 font-medium">Reddit Rating</td><td className="p-3">⭐⭐⭐⭐⭐</td><td className="p-3">⭐⭐⭐⭐</td><td className="p-3">⭐⭐⭐⭐</td><td className="p-3">⭐⭐⭐⭐½</td></tr>
              <tr><td className="p-3 font-medium">Juniper Fit</td><td className="p-3">✅ Confirmed</td><td className="p-3">✅ Confirmed</td><td className="p-3">✅ Confirmed</td><td className="p-3">✅ Confirmed</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Reviews */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Detailed Reviews</h2>

        {/* MAXpider */}
        <div className="border border-zinc-700 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-900/50 text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full">BEST OVERALL</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">3D MAXpider Kagu Series</h3>
          <p className="text-zinc-200 mb-3">
            The MAXpider Kagu is the most recommended floor mat in the Tesla community, and for good reason.
            The three-layer construction (surface layer + XPE foam core + fiber backing) gives it a premium feel
            that no other mat matches. The foam layer adds subtle noise dampening — you can actually feel the
            difference when stepping in.
          </p>
          <p className="text-zinc-200 mb-3">
            The patented fiber backing grips your carpet without the aggressive nibs that other brands use,
            which means it stays in place without leaving marks. Raised edges are high enough to contain a
            full water bottle spill without overflowing.
          </p>
          <p className="text-zinc-200 mb-3">
            <strong>The one downside:</strong> Price. A full set runs $170-230 depending on where you buy.
            But for something you&apos;ll use every single day for the life of the car, the per-day cost is
            basically nothing.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$170–230</span>
            <a href="https://www.amazon.com/s?k=3D+MAXpider+Kagu+Tesla+Model+Y+Juniper&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Price on Amazon →</a>
            <a href="https://evbandit.com/products/3d-maxpider-floor-mats-tesla-model-y-2026-juniper?sca_ref=10733634.pROAnZ9F8x" target="_blank" rel="noopener noreferrer" className="text-sm bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy at EV Bandit →</a>
          </div>
        </div>

        {/* WeatherTech */}
        <div className="border border-zinc-700 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-2">WeatherTech FloorLiner</h3>
          <p className="text-zinc-200 mb-3">
            WeatherTech is the brand your dad trusts, and they&apos;ve earned that reputation. Laser-measured
            for a precise fit, these mats have an aggressive lip that contains water and debris effectively.
            Tesla actually uses WeatherTech to manufacture their official all-weather liners.
          </p>
          <p className="text-zinc-200 mb-3">
            The fit is excellent — no gaps, no sliding. However, the surface texture is more utilitarian
            compared to the MAXpider. They look like heavy-duty work mats rather than a premium interior
            upgrade. Some owners report a slight rubber smell when new that fades within a week.
          </p>
          <p className="text-zinc-200 mb-3">
            <strong>Best for:</strong> People in harsh climates (heavy snow, mud) who prioritize function
            over aesthetics.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$180–250</span>
            <a href="https://www.amazon.com/s?k=WeatherTech+Tesla+Model+Y+Juniper+floor+mat&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Price on Amazon →</a>
          </div>
        </div>

        {/* Tesmanian */}
        <div className="border border-zinc-700 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium px-2 py-0.5 rounded-full">BEST VALUE</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Tesmanian All-Weather Mats</h3>
          <p className="text-zinc-200 mb-3">
            If you want solid protection without spending $200+, Tesmanian is the answer. At $120-160 for
            a full set, they&apos;re about 30% cheaper than MAXpider while still delivering good coverage
            and fit.
          </p>
          <p className="text-zinc-200 mb-3">
            The velcro-like strips on the bottom keep them anchored well. Edge height is slightly lower
            than MAXpider and WeatherTech, but still sufficient for normal use. Cleaning is straightforward
            — pull out, hose down, dry, done.
          </p>
          <p className="text-zinc-200 mb-3">
            <strong>Best for:</strong> Budget-conscious owners who want good protection without the premium
            price tag.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$120–160</span>
            <a href="https://www.amazon.com/s?k=Tesmanian+Tesla+Model+Y+floor+mats&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Price on Amazon →</a>
          </div>
        </div>

        {/* Tuxmat */}
        <div className="border border-zinc-700 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-purple-900/50 text-purple-400 text-xs font-medium px-2 py-0.5 rounded-full">BEST COVERAGE</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Tuxmat Custom Fit Mats</h3>
          <p className="text-zinc-200 mb-3">
            Tuxmat goes for maximum coverage. Their sidewall edges are the tallest of any option here,
            extending up the sides of the footwell further than competitors. If you live in an area
            with heavy snowfall and need every inch of protection, Tuxmat is hard to beat.
          </p>
          <p className="text-zinc-200 mb-3">
            The texture has a quality feel — not as refined as MAXpider but clearly a step above
            generic mats. They also photograph well on social media, which matters if you&apos;re
            the type to show off your car&apos;s interior.
          </p>
          <p className="text-zinc-200 mb-3">
            <strong>Best for:</strong> Harsh winters and owners who want the absolute maximum floor
            coverage possible.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$200–260</span>
            <a href="https://www.amazon.com/s?k=Tuxmat+Tesla+Model+Y+floor+mats&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Price on Amazon →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Do old Model Y floor mats fit the Juniper?</h3>
            <p className="text-zinc-300 text-base mt-1">No. The 2025-2026 Model Y Juniper has a redesigned interior with different dimensions. You need mats specifically made for the Juniper.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">How do I clean all-weather floor mats?</h3>
            <p className="text-zinc-300 text-base mt-1">Remove them from the car, spray with a hose, scrub with mild soap if needed, and let air dry. Takes about 5 minutes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Should I get front-only or a full set?</h3>
            <p className="text-zinc-300 text-base mt-1">Get the full set. The rear seats get just as dirty, especially if you ever have passengers. Most brands offer a complete package at a better per-mat price.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Are the Tesla official mats any good?</h3>
            <p className="text-zinc-300 text-base mt-1">Tesla&apos;s official all-weather mats are made by WeatherTech and are decent. However, they typically cost more than buying WeatherTech directly, and many owners prefer the MAXpider for its premium feel.</p>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="bg-zinc-900 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">The Bottom Line</h2>
        <p className="text-zinc-200 mb-3">
          <strong>If budget isn&apos;t a concern:</strong> Get the 3D MAXpider Kagu. It&apos;s the best-looking,
          best-feeling mat with excellent protection. The Reddit consensus is overwhelming.
        </p>
        <p className="text-zinc-200 mb-3">
          <strong>If you want to save money:</strong> Tesmanian gives you 80% of the protection at 65% of
          the price. That&apos;s a great deal.
        </p>
        <p className="text-zinc-200 leading-relaxed">
          <strong>If you live in a brutal climate:</strong> WeatherTech or Tuxmat for maximum containment
          and durability.
        </p>
      </section>

      {/* Affiliate Disclosure */}
      <p className="text-xs text-zinc-300 mb-8">
        Some links in this article are affiliate links. If you purchase through them, we earn a small
        commission at no extra cost to you. This helps us keep testing and reviewing products.
      </p>

      <div className="flex gap-4">
        <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          ← 10 Must-Have Accessories
        </Link>
        <Link href="/reviews" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
          All Reviews →
        </Link>
      </div>
    </article>
  );
}
