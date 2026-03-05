import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews/steering-wheel/s3xy-knob-buttons-review" },
  title: "S3XY Knob & Buttons Review for Tesla Model Y (2025-2026) — Worth It?",
  description:
    "In-depth review of the Enhauto S3XY Knob and S3XY Buttons for Tesla Model Y. 130+ shortcuts, physical controls, Juniper compatibility warning, and which one to choose.",
  keywords: [
    "s3xy knob review",
    "s3xy buttons tesla",
    "enhauto s3xy knob",
    "tesla model y physical controls",
    "s3xy knob tesla model y juniper",
    "tesla steering wheel buttons upgrade",
    "s3xy commander",
  ],
};

const schemaData = generateArticleSchema({
  title: "S3XY Knob & Buttons Review — Best Steering Wheel Upgrade for Tesla Model Y",
  description: "Enhauto S3XY Knob and S3XY Buttons review with Juniper compatibility notes",
  url: "/reviews/steering-wheel/s3xy-knob-buttons-review",
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
    { name: "Steering Wheel", url: "/reviews/steering-wheel" },
    { name: "S3XY Knob & Buttons", url: "/reviews/steering-wheel/s3xy-knob-buttons-review" },
  ],
});

const faqSchema = generateFAQSchema([
  {
    question: "Do the S3XY Knob and Buttons work with the Model Y Juniper?",
    answer:
      "Yes, but with a caveat. US-built Model Y Juniper manufactured after November 2025 may have compatibility issues due to Tesla's CAN-BUS changes. Enhauto is working on a fix. Check their compatibility page before ordering.",
  },
  {
    question: "Do I need the Commander module?",
    answer:
      "Yes. The Commander (an OBD dongle) is required for full functionality of both the Knob and Buttons. Without it, you only get basic Bluetooth shortcuts. With it, you unlock 130+ actions and smart features.",
  },
  {
    question: "Will the S3XY Knob void my Tesla warranty?",
    answer:
      "No. The S3XY Knob and Buttons are plug-in accessories that don't modify any vehicle hardware. They connect via the OBD port and Bluetooth. No cutting, splicing, or permanent changes.",
  },
  {
    question: "S3XY Knob vs S3XY Buttons — which should I get?",
    answer:
      "If you want one-hand dial control for things like climate and volume, get the Knob. If you want quick-fire buttons for specific actions (frunk, glovebox, seat heat), get the Buttons. Many power users get both.",
  },
  {
    question: "Can the S3XY Knob control Autopilot?",
    answer:
      "Yes, with the Commander module. You can set shortcuts for Autopilot activation, continuous Autopilot (auto re-engage after lane changes), and TACC. Some Autopilot features may require specific firmware versions.",
  },
]);

export default function S3XYKnobButtonsReviewPage() {
  return (
    <>
      <StructuredData data={[...schemaData, faqSchema]} />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <GradientHero
          emoji="🎛️"
          title="S3XY Knob & Buttons Review"
          subtitle="Physical controls for your Tesla. The upgrade the touchscreen purists don't want you to know about."
        />

        <header className="mb-10">
          <p className="text-sm text-blue-400 font-medium mb-2">REVIEWS / STEERING WHEEL</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            S3XY Knob & Buttons Review — Best Steering Wheel Upgrade for Tesla Model Y
          </h1>
          <p className="text-lg text-zinc-200 leading-relaxed">
            Tesla&apos;s all-touchscreen approach is polarizing. Some love it; some miss having a
            physical knob for climate and volume. Enhauto&apos;s S3XY Knob and S3XY Buttons are
            the most popular solution — over 130 programmable shortcuts that let you control your
            Model Y without taking your eyes off the road.
          </p>
          <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 9 min read</p>
        </header>

        {/* Quick Verdict */}
        <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-white mb-3">⚡ Quick Verdict</h2>
          <ul className="space-y-2 text-sm text-zinc-200">
            <li><strong>S3XY Knob:</strong> Best for owners who want a BMW iDrive-style dial. Volume, climate, regen, and Autopilot at your fingertips. ~$350-440</li>
            <li><strong>S3XY Buttons:</strong> Best for quick-fire actions — frunk, glovebox, seat heat, charge port. Simpler and cheaper. ~$140-250</li>
            <li><strong>Commander Module:</strong> Required for both. Unlocks full functionality. Included in most bundles.</li>
            <li><strong>⚠️ Juniper Warning:</strong> US-built Model Y after Nov 2025 may have compatibility issues. Check before buying.</li>
          </ul>
        </section>

        {/* Juniper compatibility warning */}
        <section className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-red-300 mb-2">⚠️ Juniper Compatibility Notice</h2>
          <p className="text-sm text-red-200 mb-2">
            The S3XY Knob and Buttons work with <strong>most</strong> Model Y Juniper builds (2025+).
            However, US-manufactured Juniper Model Ys built <strong>after November 2025</strong> may
            not be compatible due to Tesla&apos;s CAN-BUS connector changes.
          </p>
          <p className="text-sm text-red-200">
            Enhauto is actively working on a fix. Before ordering, check
            the <a href="https://www.enhauto.com/pages/knob" target="_blank" rel="noopener noreferrer" className="underline text-red-300 hover:text-red-100">official compatibility page</a> and
            verify your build date (found on the driver&apos;s side door jamb sticker).
          </p>
        </section>

        {/* What is it */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Are S3XY Knob & Buttons?</h2>
          <p className="text-zinc-200 mb-4">
            Both products are made by <strong>Enhauto</strong> (Enhance Auto) and work through a
            &quot;Commander&quot; module — a small OBD dongle that plugs into your Tesla&apos;s diagnostic
            port. This module talks to your car&apos;s systems and enables physical controls that
            normally require the touchscreen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
              <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-zinc-900">
                <Image src="/images/products/steering-wheel/s3xy-knob.jpg" alt="S3XY Knob for Tesla Model Y" fill className="object-contain" sizes="(min-width: 768px) 400px, 100vw" />
              </div>
              <h3 className="font-semibold text-white mb-2">🎛️ S3XY Knob</h3>
              <p className="text-sm text-zinc-300 mb-2">
                A rotary dial with OLED display that mounts on your center console. Rotate for volume/climate,
                press for shortcuts. Think BMW iDrive but for Tesla.
              </p>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• OLED display with visual feedback</li>
                <li>• 4 physical buttons + rotary dial</li>
                <li>• 5 customizable pages × 5 actions each</li>
                <li>• Built-in haptic vibration</li>
              </ul>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
              <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-zinc-900">
                <Image src="/images/products/steering-wheel/s3xy-buttons.jpg" alt="S3XY Buttons for Tesla Model Y" fill className="object-contain" sizes="(min-width: 768px) 400px, 100vw" />
              </div>
              <h3 className="font-semibold text-white mb-2">🔘 S3XY Buttons</h3>
              <p className="text-sm text-zinc-300 mb-2">
                Self-adhesive Bluetooth buttons you stick anywhere — steering column, console, door panel.
                Each button supports 3 actions (single, double, long press).
              </p>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Available in 2, 4, or 6-button sets</li>
                <li>• 3 actions per button (9 functions per button)</li>
                <li>• Stick anywhere with adhesive</li>
                <li>• Smaller, more discreet than the Knob</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What can you do */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Can You Actually Do With Them?</h2>
          <p className="text-zinc-200 mb-4">
            With the Commander module, you unlock 130+ actions. Here are the most popular ones owners set up:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900 rounded-xl p-4">
              <h3 className="font-semibold text-blue-400 text-sm mb-2">🚗 Driving</h3>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Toggle regen braking strength</li>
                <li>• Switch Chill/Sport acceleration</li>
                <li>• Activate/re-engage Autopilot</li>
                <li>• Continuous Autopilot (auto re-engage)</li>
                <li>• Wiper speed control</li>
                <li>• Off-road mode toggle</li>
              </ul>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4">
              <h3 className="font-semibold text-green-400 text-sm mb-2">🌡️ Comfort</h3>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Adjust cabin temperature</li>
                <li>• Fan speed control</li>
                <li>• Toggle heated seats/steering wheel</li>
                <li>• Bioweapon Defense Mode</li>
                <li>• Battery preconditioning</li>
                <li>• Rear climate control</li>
              </ul>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 text-sm mb-2">📦 Utility</h3>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Open frunk/trunk/glovebox</li>
                <li>• Open charge port</li>
                <li>• Open passenger door</li>
                <li>• Mirror fold/adjust</li>
                <li>• Strobe lights</li>
                <li>• Courtesy honk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">S3XY Knob vs S3XY Buttons — Which One?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-700 rounded-lg">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">S3XY Knob</th>
                  <th className="text-left p-3 font-semibold">S3XY Buttons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-200">
                <tr><td className="p-3">Price (with Commander)</td><td className="p-3">~$400-440</td><td className="p-3">~$140-250</td></tr>
                <tr><td className="p-3">Form Factor</td><td className="p-3">Rotary dial + OLED</td><td className="p-3">Adhesive buttons</td></tr>
                <tr><td className="p-3">Best For</td><td className="p-3">Climate, volume, scrolling</td><td className="p-3">Quick-fire single actions</td></tr>
                <tr><td className="p-3">Placement</td><td className="p-3">Center console</td><td className="p-3">Anywhere</td></tr>
                <tr><td className="p-3">Display</td><td className="p-3">OLED with page navigation</td><td className="p-3">None (muscle memory)</td></tr>
                <tr><td className="p-3">Haptic Feedback</td><td className="p-3">Yes (built-in vibrator)</td><td className="p-3">Click feel only</td></tr>
                <tr><td className="p-3">Actions Per Unit</td><td className="p-3">25+ (5 pages × 5)</td><td className="p-3">3 per button (9 with gestures)</td></tr>
                <tr><td className="p-3">Installation</td><td className="p-3">Console mount</td><td className="p-3">Peel-and-stick</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-zinc-900 rounded-xl p-4">
            <p className="text-sm text-zinc-200">
              <strong>Our take:</strong> If you want one product, start with the <strong>S3XY Buttons</strong>.
              They&apos;re cheaper, simpler, and immediately useful for the 5-6 actions you do most.
              If you find yourself wanting more — especially analog control over climate and volume — add
              the Knob later. Many owners end up with both.
            </p>
          </div>
        </section>

        {/* Honest concerns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Honest Concerns</h2>
          <div className="space-y-3">
            <div className="bg-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-amber-400 text-sm mb-1">QC reports on the Knob</h3>
              <p className="text-xs text-zinc-300">Some Reddit users have reported paint peeling, the knob detaching, and OLED burn-in after ~1 year. These seem to be isolated cases, but it&apos;s worth noting for a $400+ product.</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-amber-400 text-sm mb-1">Juniper CAN-BUS changes</h3>
              <p className="text-xs text-zinc-300">Tesla keeps changing things. The Nov 2025+ US Juniper incompatibility is a real issue. Enhauto has a track record of patching these, but you might wait a few weeks for a fix if you have a brand-new build.</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-amber-400 text-sm mb-1">Do you actually use 130 shortcuts?</h3>
              <p className="text-xs text-zinc-300">Realistically, most owners use 5-10 actions regularly. The Knob shines if those include climate/volume (analog control). If you just want 4-5 button presses, the Buttons alone might be enough.</p>
            </div>
          </div>
        </section>

        {/* Buy links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Where to Buy</h2>
          <div className="space-y-4">
            <div className="border border-zinc-700 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-bold text-white">S3XY Knob + Commander Bundle</h3>
                <p className="text-sm text-zinc-400">~$400-440 · Official Enhauto store</p>
              </div>
              <a href="https://enhauto.com/products/s3xy-knob?promo=RYAN" target="_blank" rel="noopener noreferrer sponsored" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Shop S3XY Knob →</a>
            </div>
            <div className="border border-zinc-700 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-bold text-white">S3XY Buttons (6-pack + Commander)</h3>
                <p className="text-sm text-zinc-400">~$240 · Official Enhauto store</p>
              </div>
              <a href="https://enhauto.com/products/six-s3xy-buttons-bundle?promo=RYAN" target="_blank" rel="noopener noreferrer sponsored" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Shop S3XY Buttons →</a>
            </div>
            <div className="border border-zinc-700 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-bold text-white">All Enhauto Products</h3>
                <p className="text-sm text-zinc-400">Browse all options, bundles, and accessories</p>
              </div>
              <a href="https://enhauto.com/list/all?promo=RYAN" target="_blank" rel="noopener noreferrer sponsored" className="text-sm bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition">Browse Enhauto →</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Do S3XY Knob and Buttons work with the Model Y Juniper?</h3>
              <p className="text-zinc-300 text-base mt-1">Yes for most builds. US-built Model Y after Nov 2025 may have issues due to CAN-BUS changes. Enhauto is working on a fix. Check their site before buying.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Do I need the Commander module?</h3>
              <p className="text-zinc-300 text-base mt-1">Yes. It&apos;s the brain that connects to your Tesla&apos;s systems. Without it, you get basic Bluetooth only. With it, 130+ actions. Most bundles include it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Will it void my warranty?</h3>
              <p className="text-zinc-300 text-base mt-1">No. It&apos;s plug-and-play via the OBD port. No permanent modifications, no wire cutting. Unplug it and it&apos;s like it was never there.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">S3XY Knob vs Buttons — which one first?</h3>
              <p className="text-zinc-300 text-base mt-1">Start with Buttons if you want quick actions (frunk, glovebox, seat heat). Get the Knob if you miss having analog climate/volume control. Many owners end up with both.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Can it control Autopilot?</h3>
              <p className="text-zinc-300 text-base mt-1">Yes, with Commander. You can set shortcuts for Autopilot activation, continuous re-engage after lane changes, and more. Some features depend on your Tesla&apos;s firmware version.</p>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="bg-zinc-900 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Bottom Line</h2>
          <p className="text-zinc-200 mb-3">
            <strong>S3XY Buttons</strong> are the best entry point — simple, affordable, and immediately
            useful. Stick one near your steering column for the frunk, another on the console for seat heat.
          </p>
          <p className="text-zinc-200 mb-3">
            <strong>S3XY Knob</strong> is the premium choice for people who want analog control over climate,
            volume, and regen. If you came from a BMW/Audi with a physical controller, you&apos;ll love it.
          </p>
          <p className="text-zinc-200">
            <strong>Both together</strong> make the Tesla feel like it should have shipped this way. Just
            verify Juniper compatibility before ordering.
          </p>
        </section>

        <p className="text-xs text-zinc-300 mb-8">
          Some links in this article are affiliate links. We may earn a small commission at no extra cost to you.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link href="/reviews" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">← All Reviews</Link>
          <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Accessories →</Link>
        </div>
      </article>
    </>
  );
}
