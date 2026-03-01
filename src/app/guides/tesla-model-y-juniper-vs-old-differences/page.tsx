import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  title: "Tesla Model Y Juniper vs Old Model Y: Every Difference Explained",
  description:
    "Complete comparison of the 2025-2026 Tesla Model Y Juniper refresh vs the pre-refresh Model Y. What changed, what improved, and is it worth the upgrade?",
  keywords: [
    "tesla model y juniper vs old model y",
    "model y juniper changes differences",
    "2025 model y vs 2024 model y",
    "tesla model y refresh what changed",
    "model y juniper worth it upgrade",
  ],
};

const differences = [
  { category: "Exterior", feature: "Front Fascia", old: "Angular, sharp headlights", juniper: "Sleeker, Model 3 Highland-inspired slim LED headlights", impact: "🎨 Looks more modern and premium" },
  { category: "Exterior", feature: "Rear Design", old: "Split taillight design", juniper: "Full-width LED light bar connecting taillights", impact: "🎨 Distinctive, more upscale look" },
  { category: "Exterior", feature: "Front Bumper Camera", old: "No front bumper camera", juniper: "New front camera with washer/sprayer", impact: "🚗 Better parking and FSD visibility" },
  { category: "Exterior", feature: "Aerodynamics", old: "Cd 0.23", juniper: "Improved Cd ~0.22", impact: "⚡ ~3% more range from aero alone" },
  { category: "Interior", feature: "Main Screen", old: "15-inch touchscreen", juniper: "15.4-inch touchscreen", impact: "📱 Slightly larger, brighter display" },
  { category: "Interior", feature: "Rear Screen", old: "None", juniper: "8-inch rear passenger screen", impact: "🆕 Climate & entertainment for rear passengers" },
  { category: "Interior", feature: "Front Seats", old: "Heated only", juniper: "Heated AND ventilated", impact: "🆕 Game-changer for summer driving" },
  { category: "Interior", feature: "Dashboard", old: "Minimalist, flat dash", juniper: "Redesigned with ambient lighting", impact: "🎨 More premium cabin feel" },
  { category: "Interior", feature: "Center Console", old: "Previous design", juniper: "Redesigned layout with updated wireless charger", impact: "📦 Different dimensions = new accessories needed" },
  { category: "Interior", feature: "Sound Insulation", old: "Standard", juniper: "Enhanced acoustic glass + more insulation", impact: "🔇 Noticeably quieter cabin" },
  { category: "Performance", feature: "Suspension", old: "Standard", juniper: "Comfort-tuned with improved damping", impact: "🛣️ Better ride quality (though some still complain)" },
  { category: "Performance", feature: "Rear Seats", old: "Manual fold only", juniper: "Power fold/unfold via button", impact: "🆕 Much more convenient for cargo" },
  { category: "Tech", feature: "Hands-Free Trunk", old: "Button only", juniper: "Foot-activated power liftgate", impact: "🆕 Hands full of groceries? No problem." },
  { category: "Safety", feature: "Structural Rigidity", old: "Standard", juniper: "Increased body stiffness", impact: "🛡️ Better crash performance" },
];

export default function JuniperVsOldPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="⚖️"
        title="Juniper vs Previous Model Y"
        subtitle="A side-by-side breakdown of design, comfort, features, and ownership impact."
        gradient="from-zinc-800 via-purple-800 to-indigo-700"
      />
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">GUIDES</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tesla Model Y Juniper vs Old Model Y: Every Difference
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          The &quot;Juniper&quot; refresh is the biggest Model Y update since launch. But is it worth upgrading
          from a 2020-2024 Model Y? Here&apos;s every change, explained honestly.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 7 min read</p>
      </header>

      {/* Quick Answer */}
      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-white mb-3">⚡ The Short Answer</h2>
        <p className="text-base text-zinc-200 mb-2">
          <strong>If you&apos;re buying new:</strong> Get the Juniper. It&apos;s better in every way — quieter, more comfortable, better tech.
        </p>
        <p className="text-base text-zinc-200 mb-2">
          <strong>If you own a 2022-2024 Model Y:</strong> Not worth upgrading unless ventilated seats and the rear screen are must-haves for you. The driving experience improvement is noticeable but not dramatic.
        </p>
        <p className="text-base text-zinc-200 leading-relaxed">
          <strong>If you own a 2020-2021 Model Y:</strong> More compelling upgrade — 4-5 years of improvements in build quality, ride comfort, and features add up significantly.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Complete Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-zinc-700 rounded-lg">
            <thead className="bg-zinc-900">
              <tr>
                <th className="text-left p-3 font-semibold w-1/6">Area</th>
                <th className="text-left p-3 font-semibold w-1/5">Feature</th>
                <th className="text-left p-3 font-semibold w-1/4">Old Model Y</th>
                <th className="text-left p-3 font-semibold w-1/4">Juniper</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {differences.map((d, i) => (
                <tr key={i}>
                  <td className="p-3 text-zinc-300">{d.category}</td>
                  <td className="p-3 font-medium text-white">{d.feature}</td>
                  <td className="p-3 text-zinc-300">{d.old}</td>
                  <td className="p-3 text-white">{d.juniper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessory Compatibility Warning */}
      <section className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-amber-300 mb-3">⚠️ Accessory Compatibility</h2>
        <p className="text-sm text-amber-400 mb-2">
          The Juniper&apos;s redesigned interior means many pre-refresh accessories DON&apos;T FIT:
        </p>
        <ul className="text-sm text-amber-400 space-y-1 list-disc pl-5">
          <li><strong>Floor mats</strong> — different dimensions, need Juniper-specific</li>
          <li><strong>Screen protectors</strong> — 15.4&quot; vs 15&quot;, old ones won&apos;t fit</li>
          <li><strong>Center console organizers</strong> — completely redesigned console</li>
          <li><strong>Some wireless chargers</strong> — updated pad dimensions</li>
        </ul>
        <p className="text-sm text-amber-400 mt-2">
          Always verify &quot;Juniper&quot; or &quot;2025-2026&quot; compatibility before buying any accessory.
        </p>
      </section>

      {/* The Honest Take */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">The Honest Take</h2>
        <div className="space-y-4 text-zinc-200 leading-relaxed">
          <p>
            <strong>What&apos;s genuinely great:</strong> Ventilated seats are a game-changer in summer.
            The quieter cabin is immediately noticeable. The rear screen is a nice touch for families.
            Build quality has improved — panel gaps are tighter, fit and finish is more premium.
          </p>
          <p>
            <strong>What&apos;s overhyped:</strong> The exterior redesign is subtle — most non-Tesla people
            won&apos;t notice. The suspension &quot;improvement&quot; is still criticized by some owners as harsh
            over bumps. The foot-activated trunk is cool but not a reason to upgrade.
          </p>
          <p>
            <strong>What still needs work:</strong> Software glitches persist. Some early Juniper owners
            report FSD issues, failed updates, and phantom alerts. Tesla&apos;s quality lottery hasn&apos;t
            been fully eliminated — use our{" "}
            <Link href="/guides/tesla-model-y-juniper-delivery-checklist" className="text-blue-400 hover:text-blue-300 hover:underline">
              delivery checklist
            </Link>{" "}to protect yourself.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Is the Juniper a 2025 or 2026 model?</h3>
            <p className="text-zinc-300 text-base mt-1">Technically it&apos;s a 2026 model year, but deliveries started in 2025. You&apos;ll see it referred to as both. Same car.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Did the battery or range change?</h3>
            <p className="text-zinc-300 text-base mt-1">The battery is largely the same, but improved aerodynamics give the Juniper slightly better efficiency — roughly 3-5% more real-world range.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Can I retrofit Juniper features to my old Model Y?</h3>
            <p className="text-zinc-300 text-base mt-1">No. The ventilated seats, rear screen, and redesigned interior are hardware changes that can&apos;t be added after the fact. Software features like updated UI are shared via updates.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Buying a Juniper? Start Here</h2>
        <div className="space-y-2">
          <Link href="/guides/tesla-model-y-juniper-delivery-checklist" className="text-blue-400 hover:text-blue-300 hover:underline block">→ Delivery Day Checklist</Link>
          <Link href="/guides/first-things-to-do-tesla-model-y-juniper" className="text-blue-400 hover:text-blue-300 hover:underline block">→ First 7 Things to Do</Link>
          <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline block">→ 10 Must-Have Accessories</Link>
        </div>
      </section>

      <p className="text-xs text-zinc-300">Based on owner reports, community discussions, and official Tesla specifications.</p>
    </article>
  );
}
