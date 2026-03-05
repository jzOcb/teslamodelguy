import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/tesla-model-y-juniper-suspension-rattle-fix" },
  title:
    "Tesla Model Y Juniper Suspension Rattle: Causes, Fixes & What Tesla Is Doing About It",
  description:
    "The Model Y Juniper front suspension clunk affects thousands of owners. Here's what causes it, what Tesla's service bulletin says, which fixes work, and what to do if your car has it.",
  keywords: [
    "tesla model y juniper suspension rattle",
    "model y juniper front suspension clunk",
    "tesla model y juniper suspension noise fix",
    "model y juniper suspension problem",
    "tesla model y 2026 suspension issue",
    "model y juniper upper control arm mount",
    "tesla model y juniper recall suspension",
    "model y juniper rattling noise",
    "tesla model y juniper known issues",
  ],
  openGraph: {
    title: "Tesla Model Y Juniper Suspension Rattle: Everything Owners Need to Know",
    description:
      "Thousands of owners affected. Here's the complete guide to the Juniper suspension clunk — what causes it and what actually fixes it.",
    url: "https://teslamodelguy.com/guides/tesla-model-y-juniper-suspension-rattle-fix",
    type: "article",
    images: [{ url: "https://teslamodelguy.com/images/tesla-model-y-snow.jpg" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes the Tesla Model Y Juniper suspension rattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The front suspension clunk in the Model Y Juniper is not a traditional suspension component failure. It appears to be related to the body structure and how the front upper control arm mounts to the chassis. The rubber isolator between the strut and the upper control arm mount point allows movement that creates a clunking/rattling sound, especially at low speeds over uneven surfaces.",
      },
    },
    {
      "@type": "Question",
      name: "Does Tesla have a fix for the Model Y Juniper suspension clunk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tesla has an internal service article (similar to a TSB) acknowledging the issue. The current fix involves replacing the front upper control arm mount with a revised part that has a thicker rubber isolator. Results are mixed — some owners see a 25-50% reduction in noise, while others report the clunk persists.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Model Y Juniper suspension rattle affect all models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The issue has been reported across all Model Y Juniper variants — rear-wheel drive, all-wheel drive, and performance. It has been occurring since mid-2025 and continues into 2026 production. Not every car is affected, and the noise often develops after a few thousand miles.",
      },
    },
    {
      "@type": "Question",
      name: "Does aftermarket suspension fix the Model Y Juniper rattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Multiple owners have replaced their entire suspension with aftermarket setups (Tein, Unplugged Performance, KW) and report the noise persists or gets worse. This confirms the issue is structural, not suspension-related.",
      },
    },
    {
      "@type": "Question",
      name: "Should I still buy a Tesla Model Y Juniper with the suspension issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The suspension rattle is an NVH issue, not a safety concern. The car drives, handles, and brakes normally. Tesla is actively working on a permanent fix. If buying new, test drive over speed bumps before accepting delivery.",
      },
    },
  ],
};

export default function SuspensionRattlePage() {
  return (
    <>
      <StructuredData data={faqSchema} />

      {/* Full-width hero image */}
      <div className="relative w-full h-[50vh] min-h-[360px] max-h-[520px]">
        <Image
          src="/images/tesla-model-y-snow.jpg"
          alt="White Tesla Model Y Juniper driving on a road — suspension rattle guide"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Known Issue
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              Model Y Juniper Suspension Rattle
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl">
              What causes it, what fixes work, and what to do if your car has it.
            </p>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-zinc-500 mb-8">Last updated: March 2026 · 10 min read</p>

        {/* Intro */}
        <p className="text-xl text-zinc-200 leading-relaxed mb-6">
          If you own a 2025 or 2026 Model Y Juniper and hear a clunking or rattling noise from the
          front suspension at low speeds, you&apos;re not alone.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          This is the single most discussed issue in the Tesla community right now, with{" "}
          <strong className="text-white">thousands of reports</strong> across Tesla Motors Club,
          Reddit, and Facebook groups. The TMC thread alone has{" "}
          <strong className="text-white">127+ pages and 2,500+ posts</strong>. Here&apos;s
          everything we know.
        </p>

        {/* Status card */}
        <div className="my-10 rounded-2xl border border-amber-700/40 bg-gradient-to-br from-amber-900/20 to-zinc-900 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">⚠️</span>
            <h2 className="text-xl font-bold text-amber-400">Current Status — March 2026</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-base text-zinc-200">
            <p>✅ Tesla has an <strong className="text-white">internal service article</strong></p>
            <p>🔧 Revised upper control arm mount as fix</p>
            <p>⚠️ Results are <strong className="text-white">mixed</strong> (25-50% improvement)</p>
            <p>❌ No official recall or public statement</p>
            <p>🚗 Affects <strong className="text-white">all variants</strong> (RWD/AWD/Performance)</p>
            <p>📅 Ongoing since <strong className="text-white">mid-2025</strong></p>
          </div>
        </div>

        {/* === Section 1: What It Sounds Like === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What the Rattle Sounds Like
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            The sound is a distinct <strong className="text-white">clunk or knocking noise</strong>{" "}
            from the front of the car. Owners describe it as &ldquo;sounding like the car is falling
            apart&rdquo; — it&apos;s loud enough to hear with music on and far more noticeable than
            anything the pre-Juniper Model Y produced.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🔊", when: "Under 50 mph", detail: "Parking lots, residential streets" },
              { icon: "⚡", when: "Speed bumps & potholes", detail: "Most common trigger" },
              { icon: "🛣️", when: "Uneven road surfaces", detail: "Any pavement change" },
              { icon: "🏠", when: "Driveway transitions", detail: "The angle change causes it" },
            ].map((item) => (
              <div key={item.when} className="rounded-xl border border-zinc-700/60 bg-zinc-800/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-base font-semibold text-white">{item.when}</p>
                </div>
                <p className="text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-5">
            <p className="text-base text-zinc-300 leading-relaxed">
              <strong className="text-white">Important:</strong> This is{" "}
              <em>not an interior rattle</em>. It&apos;s a suspension-level noise that reverberates
              through the car&apos;s body into the cabin. Completely different from the trim
              squeaks some older Model Ys had.
            </p>
          </div>
        </section>

        {/* Divider image */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-16">
          <Image
            src="/images/tesla-model-y-hero.jpg"
            alt="Tesla Model Y Juniper front quarter view"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </div>

        {/* === Section 2: Root Cause === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What Causes It
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-5">
            After extensive investigation by independent EV repair shops and Tesla master
            technicians, the root cause is clear:
          </p>

          <div className="rounded-2xl border border-cyan-800/30 bg-gradient-to-br from-cyan-900/15 to-zinc-900 p-6 md:p-8 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-3">🔍 Root Cause</h3>
            <p className="text-base text-zinc-200 leading-relaxed mb-4">
              The issue is <strong className="text-white">structural, not mechanical</strong>. The
              Juniper has a completely redesigned body compared to the original Model Y. The rubber
              isolator between the strut and the front upper control arm mount allows more movement
              than intended — when you hit a bump, this creates the clunk.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              This is why replacing dampers, springs, or traditional suspension components
              doesn&apos;t fix it. The problem is where the suspension meets the body.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "❌", label: "Not the dampers" },
              { icon: "❌", label: "Not the springs" },
              { icon: "❌", label: "Not the FSD dampening" },
            ].map((item) => (
              <div key={item.label} className="text-center rounded-xl bg-zinc-800/50 border border-zinc-700/40 p-4">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-sm font-medium text-zinc-300">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-5">
            <p className="text-base text-zinc-300 leading-relaxed">
              <strong className="text-white">Timeline quirk:</strong> The noise often{" "}
              <strong className="text-white">doesn&apos;t appear immediately</strong>. Many owners
              report it developing after 2,000–5,000 miles as the rubber isolator breaks in. Some
              heard it from day two; others not until several months in.
            </p>
          </div>
        </section>

        {/* === Section 3: Tesla's Fix === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Tesla&apos;s Official Fix
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Tesla has an internal article in Toolbox (their diagnostic system) — equivalent to a
            Technical Service Bulletin at other automakers. Here&apos;s what service centers are doing:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: "1",
                title: "Replace front upper control arm mount",
                desc: "Revised part with a thicker rubber isolator to reduce play at the strut mounting point.",
                color: "bg-cyan-600",
              },
              {
                step: "2",
                title: "Remove pencil braces (some cases)",
                desc: "Structural bracing components that may contribute to resonance and amplify the noise.",
                color: "bg-cyan-600",
              },
              {
                step: "3",
                title: "Road test verification",
                desc: "Technicians drive the car over bumps to verify noise reduction before returning it.",
                color: "bg-cyan-600",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 rounded-xl border border-zinc-700/60 bg-zinc-800/40 p-5">
                <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {item.step}
                </div>
                <div>
                  <p className="text-base font-bold text-white mb-1">{item.title}</p>
                  <p className="text-base text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-r from-amber-900/15 to-zinc-900 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">⚠️</span>
              <h3 className="text-base font-bold text-amber-300">Results Vary Significantly</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-zinc-800/60 p-4">
                <p className="text-2xl font-bold text-green-400">~30%</p>
                <p className="text-xs text-zinc-400 mt-1">Noise gone or barely noticeable</p>
              </div>
              <div className="rounded-lg bg-zinc-800/60 p-4">
                <p className="text-2xl font-bold text-amber-400">~45%</p>
                <p className="text-xs text-zinc-400 mt-1">25-50% improvement</p>
              </div>
              <div className="rounded-lg bg-zinc-800/60 p-4">
                <p className="text-2xl font-bold text-red-400">~25%</p>
                <p className="text-xs text-zinc-400 mt-1">No change or returns later</p>
              </div>
            </div>
          </div>
        </section>

        {/* === Section 4: Aftermarket === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Does Aftermarket Suspension Help?
          </h2>

          <div className="rounded-2xl border-2 border-red-800/40 bg-gradient-to-br from-red-900/15 to-zinc-900 p-6 md:p-8 mb-6">
            <p className="text-3xl font-bold text-red-400 mb-3">No.</p>
            <p className="text-lg text-zinc-200 leading-relaxed mb-4">
              This is one of the clearest indicators that the problem is structural, not
              suspension-related.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              Multiple owners have swapped in <strong className="text-white">Tein coilovers</strong>,{" "}
              <strong className="text-white">Unplugged Performance lowering springs</strong>, and{" "}
              <strong className="text-white">KW suspension kits</strong> — the noise persists or
              even gets worse. Save your money on suspension mods if noise reduction is the goal.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-5">
            <span className="text-3xl">📊</span>
            <p className="text-base text-zinc-300">
              The TMC thread documenting this has{" "}
              <strong className="text-white">127+ pages / 2,500+ posts</strong> as of March 2026,
              with many entries from owners describing their failed aftermarket attempts.
            </p>
          </div>
        </section>

        {/* === Section 5: What To Do === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What to Do If Your Car Has It
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            If you&apos;re hearing the clunk, here&apos;s your step-by-step action plan:
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "🎥",
                title: "1. Record the Noise",
                desc: "Drive slowly over a speed bump with the window down and record video. Show the noise clearly — this is your #1 piece of evidence for the service center.",
              },
              {
                icon: "📱",
                title: "2. Schedule Service",
                desc: "Open the Tesla app → Service → describe the noise as 'front suspension clunk at low speeds over bumps.' Reference the internal Toolbox article if needed.",
              },
              {
                icon: "📝",
                title: "3. Document Everything",
                desc: "Keep records of every service visit, what was replaced, and whether the noise changed. Dates, part numbers, technician names — all of it.",
              },
              {
                icon: "🔄",
                title: "4. Follow Up After Repair",
                desc: "If the noise returns after the control arm mount replacement (common), schedule another appointment. Multiple failed repairs strengthen your case.",
              },
              {
                icon: "⚖️",
                title: "5. Know Your Lemon Law Rights",
                desc: "Most states require 3-4 failed repair attempts for the same issue. If Tesla can't fix it, consult your state's lemon law. Document everything from step one.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 rounded-xl border border-zinc-700/60 bg-zinc-800/40 p-5">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-base font-bold text-white mb-1">{item.title}</p>
                  <p className="text-base text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === Section 6: Buy or Wait === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Should You Still Buy a Model Y Juniper?
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Thousands of prospective buyers are asking this exact question. Here&apos;s the honest take:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl border border-green-700/40 bg-gradient-to-b from-green-900/15 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">✅ Reasons to Buy</h3>
              <div className="space-y-3">
                {[
                  "NVH issue, not a safety issue",
                  "Car drives and brakes normally",
                  "Tesla actively working on a fix",
                  "Fully covered under warranty",
                  "Not every car is affected",
                  "Everything else about Juniper is excellent",
                ].map((item) => (
                  <p key={item} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-green-500 flex-shrink-0">•</span> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-red-700/40 bg-gradient-to-b from-red-900/15 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">❌ Reasons to Wait</h3>
              <div className="space-y-3">
                {[
                  "No guaranteed permanent fix yet",
                  "Daily driving annoyance for some",
                  "Tesla hasn't publicly acknowledged it",
                  "Fix results are inconsistent",
                  "May affect resale if unresolved",
                  "If you're sensitive to NVH quality",
                ].map((item) => (
                  <p key={item} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-red-500 flex-shrink-0">•</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-6">
            <p className="text-lg text-zinc-200 leading-relaxed mb-4">
              <strong className="text-white">Our advice if you&apos;re buying:</strong> Do a
              thorough test drive before accepting delivery. Drive over speed bumps, uneven roads,
              and driveway transitions with the windows down. If you hear the clunk, you can reject
              delivery or accept knowing warranty repair is available.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              The Model Y Juniper is still outstanding in every other way — efficiency, technology,
              running costs, and daily driving experience. This is a solvable engineering problem,
              not a fundamental flaw.
            </p>
          </div>
        </section>

        {/* CTA section */}
        <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800/80 to-zinc-900 p-8 md:p-10 text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-3">Taking Delivery Soon?</h3>
          <p className="text-base text-zinc-400 mb-6 max-w-xl mx-auto">
            The suspension rattle is one thing to check — but there are 55 other items.
            Use these tools to make sure everything is perfect.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/delivery-checklist"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition font-medium"
            >
              📋 56-Point Delivery Checklist
            </Link>
            <Link
              href="/tools/savings-calculator"
              className="border border-zinc-600 text-zinc-200 px-6 py-3 rounded-xl hover:bg-zinc-800 transition font-medium"
            >
              ⚡ Savings Calculator
            </Link>
          </div>
        </div>

        {/* Related guides */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/guides/tesla-model-y-juniper-24000-mile-review"
              className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-4 hover:bg-zinc-800/60 transition block"
            >
              <p className="text-base font-medium text-white mb-1">Real Cost of Ownership</p>
              <p className="text-sm text-zinc-400">24,000 miles of actual cost data — 4.25¢/mile, $0 maintenance</p>
            </Link>
            <Link
              href="/guides/new-model-y-juniper-worth-upgrade-4-month-review"
              className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-4 hover:bg-zinc-800/60 transition block"
            >
              <p className="text-base font-medium text-white mb-1">Is the Juniper Worth the Upgrade?</p>
              <p className="text-sm text-zinc-400">Old Model Y vs Juniper — what&apos;s better, what&apos;s worse</p>
            </Link>
          </div>
        </div>

        <p className="text-sm text-zinc-600">
          Information compiled from owner reports on Tesla Motors Club, Reddit, Facebook owner
          groups, independent EV repair shop findings, and Tesla&apos;s internal service articles.
          Last verified March 2026.
        </p>
      </article>
    </>
  );
}
