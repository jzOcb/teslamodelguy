import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  alternates: {
    canonical: "/guides/tesla-model-y-home-charging-wall-connector-vs-nema-14-50",
  },
  title:
    "Tesla Model Y Home Charging: Wall Connector vs NEMA 14-50 — Which Is Right for You?",
  description:
    "Complete guide to home charging your Tesla Model Y. Wall Connector ($449) vs NEMA 14-50 ($300-600 installed). Charging speeds, installation costs, electrician tips, and which setup saves more money.",
  keywords: [
    "tesla model y home charging",
    "tesla wall connector vs nema 14-50",
    "tesla home charger installation cost",
    "tesla model y charging at home",
    "tesla wall connector installation",
    "nema 14-50 tesla charging speed",
    "tesla model y charger setup",
    "best way to charge tesla at home",
    "tesla wall connector vs mobile connector",
    "tesla home charging guide 2026",
  ],
  openGraph: {
    title: "Tesla Model Y Home Charging: Wall Connector vs NEMA 14-50",
    description:
      "Wall Connector gives you 44 mi/hr. NEMA 14-50 gives you 30 mi/hr. Here's the real cost breakdown and which setup makes sense for you.",
    url: "https://teslamodelguy.com/guides/tesla-model-y-home-charging-wall-connector-vs-nema-14-50",
    type: "article",
    images: [
      { url: "https://teslamodelguy.com/images/tesla-wall-connector.png" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast does a Tesla Wall Connector charge a Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tesla Wall Connector delivers up to 48 amps on a 60-amp circuit, adding approximately 44 miles of range per hour to a Model Y Long Range or Performance. A full charge from 20% to 80% takes about 4-5 hours. This is the fastest Level 2 home charging option available.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to install a Tesla Wall Connector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Wall Connector unit costs $449 from Tesla. Professional installation typically runs $750-3,000+ depending on your home's electrical setup and distance from the panel. Total installed cost for most homeowners is $1,200-2,500. Panel upgrades, if needed, can add $1,500-4,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is a NEMA 14-50 outlet good enough for a Tesla Model Y?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most owners. A NEMA 14-50 outlet with the Tesla Mobile Connector charges at about 30 miles of range per hour (32 amps). If you drive under 100 miles daily and charge overnight, this is more than sufficient. It's also $500-1,500 cheaper to install than a Wall Connector setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I install a NEMA 14-50 outlet myself for Tesla charging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A NEMA 14-50 outlet requires 240V wiring and a dedicated 50-amp circuit. This must be installed by a licensed electrician per local building codes. The outlet itself is cheap ($15-30), but professional installation ensures safety, proper GFCI protection, and code compliance. DIY 240V work can void insurance and is illegal in many jurisdictions.",
      },
    },
    {
      "@type": "Question",
      name: "Wall Connector or NEMA 14-50: which should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose the Wall Connector if: you drive 100+ miles daily, have multiple Teslas (power-sharing feature), want the cleanest install, or plan to stay in your home long-term. Choose NEMA 14-50 if: you drive under 100 miles daily, rent or may move, want the lowest upfront cost, or want portability (take the Mobile Connector with you).",
      },
    },
  ],
};

/* ─── Product data ─── */
const products = {
  wallConnector: {
    name: "Tesla Wall Connector",
    price: "$449",
    url: "https://shop.tesla.com/product/wall-connector",
    amps: "48A",
    speed: "~44 mi/hr",
    circuit: "60A dedicated",
    install: "Hardwired (electrician required)",
  },
  nema1450: {
    name: "NEMA 14-50 + Mobile Connector",
    price: "$200-295",
    url: "https://shop.tesla.com/product/mobile-connector",
    amps: "32A",
    speed: "~30 mi/hr",
    circuit: "50A dedicated",
    install: "Outlet install (electrician required)",
  },
};

export default function HomeChargingGuidePage() {
  return (
    <>
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[360px] max-h-[520px]">
        <Image
          src="/images/tesla-wall-connector.png"
          alt="Tesla Wall Connector mounted on a garage wall — home charging guide"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Essential Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              Tesla Model Y Home Charging
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl">
              Wall Connector vs NEMA 14-50 — which is right for you, and how much does it
              actually cost?
            </p>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-zinc-500 mb-8">Last updated: March 2026 · 12 min read</p>

        {/* Intro */}
        <p className="text-xl text-zinc-200 leading-relaxed mb-6">
          Home charging is the single biggest quality-of-life upgrade when you get a Tesla.
          You wake up every morning with a full battery — no gas stations, no Supercharger
          detours, no planning.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          But the #1 question every new owner asks is:{" "}
          <strong className="text-white">
            &ldquo;Should I get the Wall Connector or just use a NEMA 14-50 outlet?&rdquo;
          </strong>{" "}
          The answer depends on how much you drive, your home&apos;s electrical setup, and how
          much you want to spend upfront. This guide breaks down everything.
        </p>

        {/* Quick comparison card */}
        <div className="my-10 rounded-2xl border border-zinc-700 bg-zinc-800/50 overflow-hidden">
          <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
            <h2 className="text-lg font-bold text-white">⚡ Quick Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left p-4 text-zinc-400 font-medium" />
                  <th className="text-center p-4 text-cyan-400 font-bold">Wall Connector</th>
                  <th className="text-center p-4 text-amber-400 font-bold">NEMA 14-50</th>
                </tr>
              </thead>
              <tbody className="text-zinc-200">
                {[
                  ["Charging Speed", "44 mi/hr", "30 mi/hr"],
                  ["Amps", "48A", "32A"],
                  ["Equipment Cost", "$449", "$200-295*"],
                  ["Installation Cost", "$750-3,000", "$300-1,000"],
                  ["Total Installed", "$1,200-3,500", "$500-1,300"],
                  ["Circuit Required", "60A dedicated", "50A dedicated"],
                  ["Install Type", "Hardwired", "Outlet + plug"],
                  ["Portable", "No", "Yes (take when you move)"],
                  ["Wi-Fi / Smart Features", "Yes", "No"],
                  ["Power Sharing", "Yes (multi-Tesla)", "No"],
                  ["20→80% Charge Time", "~4-5 hours", "~6-7 hours"],
                ].map(([label, wall, nema]) => (
                  <tr key={label} className="border-b border-zinc-800/50">
                    <td className="p-4 text-zinc-400 font-medium">{label}</td>
                    <td className="p-4 text-center">{wall}</td>
                    <td className="p-4 text-center">{nema}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-6 py-3 text-xs text-zinc-500">
            *Mobile Connector included with some 2026 Model Y deliveries. If purchasing
            separately: $200 (connector) + $35-65 (14-50 adapter).
          </p>
        </div>

        {/* TOC */}
        <div className="my-10 rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-6">
          <h3 className="text-base font-bold text-white mb-3">In This Guide</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Wall Connector: What You Get",
              "NEMA 14-50: What You Get",
              "Real Installation Costs",
              "Charging Speed: Does It Matter?",
              "Which One Should You Choose?",
              "Installation Tips from Electricians",
              "What About Level 1 (Regular Outlet)?",
              "Our Recommendation",
            ].map((item, i) => (
              <p key={item} className="text-base text-zinc-400">
                <span className="text-zinc-600 mr-2">{i + 1}.</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* === Section 1: Wall Connector === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Tesla Wall Connector: What You Get
          </h2>

          {/* Product image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-white/5 border border-zinc-700/50">
              <Image
                src="/images/tesla-wall-connector.png"
                alt="Tesla Wall Connector — official product photo from Tesla Shop"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            The Wall Connector is Tesla&apos;s dedicated home charging solution. It&apos;s
            hardwired directly into your electrical panel — no plug, no outlet, just a
            permanently mounted unit with a 24-foot cable.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "⚡", label: "48 amps / 44 mi per hour", desc: "Fastest Level 2 home charging available" },
              { icon: "📶", label: "Wi-Fi connected", desc: "OTA updates, remote diagnostics via Tesla app" },
              { icon: "🔗", label: "Power sharing", desc: "Up to 6 Wall Connectors share one circuit" },
              { icon: "🌧️", label: "Indoor/outdoor rated", desc: "NEMA 3R enclosure for any installation" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-700/60 bg-zinc-800/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-base font-semibold text-white">{item.label}</p>
                </div>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-cyan-900/15 border border-cyan-800/30 p-6">
            <h3 className="text-base font-bold text-cyan-400 mb-2">💡 Key Advantage</h3>
            <p className="text-base text-zinc-200 leading-relaxed">
              If you have <strong className="text-white">two Teslas</strong>, the Wall
              Connector&apos;s power-sharing feature lets multiple units share a single circuit.
              Instead of running two separate 60A circuits ($3,000+ in wiring), you run one and
              the units intelligently split the power.
            </p>
          </div>
        </section>

        {/* === Section 2: NEMA 14-50 === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            NEMA 14-50 Outlet: What You Get
          </h2>

          {/* Product images — Mobile Connector + Adapter */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white/5 border border-zinc-700/50 mb-2">
                <Image
                  src="/images/tesla-mobile-connector.png"
                  alt="Tesla Mobile Connector — official product photo"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <p className="text-xs text-zinc-500">Mobile Connector ($300)</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white/5 border border-zinc-700/50 mb-2">
                <Image
                  src="/images/tesla-nema-14-50-adapter.png"
                  alt="Tesla NEMA 14-50 Adapter — included with Mobile Connector"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <p className="text-xs text-zinc-500">NEMA 14-50 Adapter (included)</p>
            </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            A NEMA 14-50 is a 240V, 50-amp outlet — the same type used for electric stoves and
            RVs. You plug in the Tesla Mobile Connector (with the 14-50 adapter), and it charges
            your car at 32 amps / ~30 miles of range per hour.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "💰", label: "Lowest upfront cost", desc: "Outlet + Mobile Connector = $500-1,300 total" },
              { icon: "🔌", label: "Portable", desc: "Unplug and take it when you move" },
              { icon: "🏠", label: "Renter-friendly", desc: "Outlet stays, connector goes with you" },
              { icon: "🔧", label: "Simple install", desc: "Any electrician can do it — standard outlet work" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-700/60 bg-zinc-800/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-base font-semibold text-white">{item.label}</p>
                </div>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-amber-900/15 border border-amber-800/30 p-6">
            <h3 className="text-base font-bold text-amber-400 mb-2">⚠️ Important</h3>
            <p className="text-base text-zinc-200 leading-relaxed">
              Use a <strong className="text-white">commercial-grade NEMA 14-50 outlet</strong>,
              not a cheap residential one. EV charging draws continuous high current for hours —
              cheap outlets can overheat and become a fire hazard. Expect to pay $15-30 for a
              quality outlet rated for continuous EV charging loads.
            </p>
          </div>
        </section>

        {/* === Section 3: Real Costs === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Real Installation Costs (2026)
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            The equipment is the easy part. Installation is where costs vary wildly depending
            on your home. Here&apos;s what real owners paid:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Wall Connector cost breakdown */}
            <div className="rounded-2xl border border-cyan-700/30 bg-gradient-to-b from-cyan-900/10 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Wall Connector</h3>
              <div className="space-y-3">
                {[
                  { item: "Unit (from Tesla)", cost: "$449" },
                  { item: "Electrician labor", cost: "$400-1,500" },
                  { item: "Wiring & materials", cost: "$200-800" },
                  { item: "Permits & inspection", cost: "$50-200" },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-sm">
                    <span className="text-zinc-300">{row.item}</span>
                    <span className="text-white font-medium">{row.cost}</span>
                  </div>
                ))}
                <div className="border-t border-cyan-800/30 pt-3 flex justify-between">
                  <span className="text-base font-bold text-white">Total</span>
                  <span className="text-base font-bold text-cyan-400">$1,200-3,500</span>
                </div>
              </div>
            </div>

            {/* NEMA 14-50 cost breakdown */}
            <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-b from-amber-900/10 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-amber-400 mb-4">NEMA 14-50 Setup</h3>
              <div className="space-y-3">
                {[
                  { item: "Mobile Connector", cost: "$200*" },
                  { item: "14-50 Adapter", cost: "$35-65" },
                  { item: "Commercial outlet", cost: "$15-30" },
                  { item: "Electrician (outlet install)", cost: "$300-800" },
                  { item: "GFCI breaker (if required)", cost: "$40-80" },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-sm">
                    <span className="text-zinc-300">{row.item}</span>
                    <span className="text-white font-medium">{row.cost}</span>
                  </div>
                ))}
                <div className="border-t border-amber-800/30 pt-3 flex justify-between">
                  <span className="text-base font-bold text-white">Total</span>
                  <span className="text-base font-bold text-amber-400">$500-1,300</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-3">
                *Included with some 2026 Model Y deliveries
              </p>
            </div>
          </div>

          {/* Cost factors */}
          <div className="rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-6">
            <h3 className="text-base font-bold text-white mb-3">💸 What Drives Installation Cost Up</h3>
            <div className="space-y-3">
              {[
                {
                  factor: "Panel upgrade needed",
                  impact: "+$1,500-4,000",
                  note: "Older homes with 100A panels often need a 200A upgrade",
                },
                {
                  factor: "Long wire run",
                  impact: "+$500-2,000",
                  note: "Panel in basement, charger in detached garage = lots of copper",
                },
                {
                  factor: "Trenching required",
                  impact: "+$1,000-3,000",
                  note: "Underground wiring to a detached garage or outdoor location",
                },
                {
                  factor: "Subpanel installation",
                  impact: "+$800-2,000",
                  note: "If your main panel is full but has capacity",
                },
              ].map((item) => (
                <div key={item.factor} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <div className="flex items-center gap-2 min-w-[200px]">
                    <span className="text-red-400 text-sm font-bold">{item.impact}</span>
                    <span className="text-sm font-medium text-white">{item.factor}</span>
                  </div>
                  <span className="text-xs text-zinc-500">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider image */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-16">
          <Image
            src="/images/tesla-interior-console.png"
            alt="Tesla Model Y interior — charging status on screen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </div>

        {/* === Section 4: Speed === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Charging Speed: Does the Difference Matter?
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Wall Connector: 44 mi/hr. NEMA 14-50: 30 mi/hr. That&apos;s a{" "}
            <strong className="text-white">47% speed difference</strong>. But does it
            actually matter in daily life?
          </p>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 overflow-hidden mb-8">
            <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
              <h3 className="text-base font-bold text-white">🕐 Real-World Charge Times (20% → 80%)</h3>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Wall Connector (48A)", hours: "~4.5 hrs", pct: 95 },
                { label: "NEMA 14-50 (32A)", hours: "~6.5 hrs", pct: 65 },
                { label: "Regular outlet (12A)", hours: "~22 hrs", pct: 20 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300">{item.label}</span>
                    <span className="text-white font-medium">{item.hours}</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-green-900/15 border border-green-800/30 p-6">
            <h3 className="text-base font-bold text-green-400 mb-2">✅ The Bottom Line</h3>
            <p className="text-base text-zinc-200 leading-relaxed">
              If you plug in at 10 PM and leave at 7 AM, you have{" "}
              <strong className="text-white">9 hours</strong> of charging time. The NEMA 14-50
              adds ~270 miles overnight. The Wall Connector adds ~396 miles. Unless you
              regularly drive 250+ miles per day, the NEMA 14-50 is{" "}
              <strong className="text-white">more than enough</strong> for daily use.
            </p>
          </div>
        </section>

        {/* === Section 5: Which One === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Which One Should You Choose?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl border border-cyan-700/30 bg-gradient-to-b from-cyan-900/10 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                Choose Wall Connector If:
              </h3>
              <div className="space-y-3">
                {[
                  "You drive 100+ miles daily",
                  "You have 2+ Teslas (power sharing)",
                  "You own your home & plan to stay",
                  "You want the fastest charging",
                  "You want a clean, permanent install",
                  "You value smart features (Wi-Fi, app)",
                ].map((item) => (
                  <p key={item} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-cyan-500 flex-shrink-0">✓</span> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-amber-700/30 bg-gradient-to-b from-amber-900/10 to-zinc-900 p-6">
              <h3 className="text-lg font-bold text-amber-400 mb-4">
                Choose NEMA 14-50 If:
              </h3>
              <div className="space-y-3">
                {[
                  "You drive under 100 miles daily",
                  "You rent or may move soon",
                  "You want the lowest upfront cost",
                  "You want portability (take it with you)",
                  "30 mi/hr charging is enough overnight",
                  "You want the simplest installation",
                ].map((item) => (
                  <p key={item} className="text-sm text-zinc-300 flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">✓</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-800/60 border border-zinc-700/40 p-6">
            <p className="text-base text-zinc-200 leading-relaxed">
              <strong className="text-white">Plot twist:</strong> Many owners start with
              the NEMA 14-50 and upgrade to the Wall Connector later. The electrical work
              is similar either way (both need a dedicated 240V circuit), so the upgrade
              path is straightforward — you&apos;re mostly just swapping the outlet for a
              hardwired unit.
            </p>
          </div>
        </section>

        {/* === Section 6: Electrician Tips === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Installation Tips from Real Electricians
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "🔍",
                title: "Get 3 quotes minimum",
                desc: "EV charger installation prices vary wildly. We've seen quotes from $400 to $3,500 for the same job. Most electricians who've done EV installs before charge less.",
              },
              {
                icon: "📋",
                title: "Check your panel first",
                desc: "Open your electrical panel (or take a photo) and send it to electricians. They can tell you immediately if you need an upgrade. Look for available double-pole breaker spaces.",
              },
              {
                icon: "📐",
                title: "Measure the wire run",
                desc: "The distance from your panel to the charging location is the #1 cost variable. Every 10 feet of additional wire run adds roughly $50-100 in copper and labor.",
              },
              {
                icon: "🏛️",
                title: "Pull permits",
                desc: "Most jurisdictions require permits for 240V circuits. Your electrician should handle this. Unpermitted work can cause problems when selling your home.",
              },
              {
                icon: "💡",
                title: "Consider future needs",
                desc: "If you might get a second EV or add solar, tell your electrician now. Running a slightly larger conduit or leaving space in the panel costs almost nothing upfront but saves thousands later.",
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

        {/* === Section 7: Level 1 === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What About a Regular 120V Outlet? (Level 1)
          </h2>
          <div className="rounded-2xl border-2 border-red-800/40 bg-gradient-to-br from-red-900/10 to-zinc-900 p-6 md:p-8">
            <p className="text-lg text-zinc-200 leading-relaxed mb-4">
              Technically, you <em>can</em> charge from a standard 120V household outlet.
              The Tesla Mobile Connector comes with a NEMA 5-15 adapter for this.
            </p>
            <p className="text-lg text-zinc-200 leading-relaxed mb-4">
              The problem: you get about{" "}
              <strong className="text-white">3-4 miles of range per hour</strong>. That&apos;s
              30-40 miles overnight. If your daily commute is under 30 miles, this works. For
              everyone else, it&apos;s a frustrating experience.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center mt-6">
              <div className="rounded-lg bg-zinc-800/60 p-3">
                <p className="text-xl font-bold text-red-400">3-4</p>
                <p className="text-xs text-zinc-400">mi/hr</p>
              </div>
              <div className="rounded-lg bg-zinc-800/60 p-3">
                <p className="text-xl font-bold text-red-400">~22 hrs</p>
                <p className="text-xs text-zinc-400">20→80%</p>
              </div>
              <div className="rounded-lg bg-zinc-800/60 p-3">
                <p className="text-xl font-bold text-red-400">~35 mi</p>
                <p className="text-xs text-zinc-400">overnight</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 mt-4">
              Level 1 works as a temporary solution or emergency backup, but should not
              be your primary charging method.
            </p>
          </div>
        </section>

        {/* === Section 8: Recommendation === */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Our Recommendation
          </h2>
          <div className="rounded-2xl border border-green-700/30 bg-gradient-to-br from-green-900/10 to-zinc-900 p-6 md:p-8">
            <p className="text-xl font-bold text-green-400 mb-4">
              Start with the NEMA 14-50. Upgrade later if you need to.
            </p>
            <p className="text-lg text-zinc-200 leading-relaxed mb-4">
              For 90% of Model Y owners, the NEMA 14-50 provides more than enough overnight
              charging power at a significantly lower cost. You save $700-2,000 upfront and
              still get 270 miles of range every night.
            </p>
            <p className="text-base text-zinc-300 leading-relaxed">
              The Wall Connector makes sense if you drive long daily distances, have multiple
              Teslas, or simply want the premium experience. It&apos;s a great product — just
              not a necessity for most owners.
            </p>
          </div>
        </section>

        {/* Product links */}
        <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800/80 to-zinc-900 p-8 md:p-10 text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Set Up Home Charging?</h3>
          <p className="text-base text-zinc-400 mb-6 max-w-xl mx-auto">
            Here are the products mentioned in this guide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://shop.tesla.com/product/wall-connector"
              target="_blank"
              rel="noopener sponsored"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition font-medium"
            >
              ⚡ Tesla Wall Connector ($449)
            </a>
            <a
              href="https://shop.tesla.com/product/mobile-connector"
              target="_blank"
              rel="noopener sponsored"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition font-medium"
            >
              🔌 Tesla Mobile Connector ($200)
            </a>
            <a
              href="https://www.amazon.com/dp/B0FCS5SQT2?tag=teslamodelguy-20"
              target="_blank"
              rel="noopener sponsored"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition font-medium"
            >
              🔧 Commercial NEMA 14-50 Outlet
            </a>
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
              <p className="text-sm text-zinc-400">
                24,000 miles of actual cost data — 4.25¢/mile including home charging
              </p>
            </Link>
            <Link
              href="/tools/savings-calculator"
              className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-4 hover:bg-zinc-800/60 transition block"
            >
              <p className="text-base font-medium text-white mb-1">Savings Calculator</p>
              <p className="text-sm text-zinc-400">
                Compare your exact fuel + charging costs over 5 years
              </p>
            </Link>
          </div>
        </div>

        <p className="text-sm text-zinc-600">
          Costs based on 2026 pricing and real owner-reported installation quotes across the US.
          Your actual costs will vary depending on your home&apos;s electrical setup, local
          labor rates, and permit requirements. Always hire a licensed electrician for 240V work.
        </p>
      </article>
    </>
  );
}
