import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/tesla-model-y-juniper-24000-mile-review" },
  title:
    "Tesla Model Y Juniper: What It Actually Costs to Own After 24,000 Miles",
  description:
    "Real cost of ownership data after 24,000 miles: electricity at 4.25¢/mile, $0 maintenance, zero brake work, and what nobody tells you about tire wear, washer fluid, and perforated seats.",
  keywords: [
    "tesla model y cost of ownership",
    "tesla model y juniper running cost",
    "how much does tesla model y cost per mile",
    "tesla model y maintenance cost",
    "tesla model y electricity cost",
    "tesla model y vs gas cost",
    "model y juniper charging cost",
    "is tesla model y cheap to own",
    "tesla model y juniper long term cost",
  ],
  openGraph: {
    title: "Tesla Model Y Juniper: What It Actually Costs to Own After 24,000 Miles",
    description:
      "4.25¢/mile electricity. $0 maintenance. Original brakes at 90K miles. Here's every real cost of owning a Model Y Juniper.",
    url: "https://www.teslamodelguy.com/guides/tesla-model-y-juniper-24000-mile-review",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Tesla Model Y cost per mile to drive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At the national average electricity rate of $0.17/kWh and a real-world efficiency of 250 Wh/mile, the Model Y Juniper costs about 4.25 cents per mile. A comparable gas SUV at 28 MPG and $3.50/gallon costs 12.5 cents per mile — nearly 3x more.",
      },
    },
    {
      "@type": "Question",
      name: "What maintenance does a Tesla Model Y need in the first 25,000 miles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After 24,000 miles, the only maintenance is windshield washer fluid refills and tire rotations every 6,250 miles. Zero oil changes, zero brake work (regenerative braking handles virtually all stopping), and zero service visits. Total maintenance cost: essentially $0.",
      },
    },
    {
      "@type": "Question",
      name: "How long do Tesla Model Y brakes last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thanks to regenerative braking, Tesla brakes last far longer than conventional cars. A Model 3 with 90,000 miles still has original brake pads that look new. The Model Y Juniper uses regenerative braking for virtually 100% of stopping, so the hydraulic disc brakes rarely engage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to charge a Tesla Model Y on a road trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Superchargers averaging $0.38/kWh, a typical 10-60% charge costs roughly $12-15 and takes about 18 minutes, giving approximately 150+ miles of range. Home charging at the national average of $0.17/kWh is significantly cheaper — about $6-7 for the same amount of energy.",
      },
    },
    {
      "@type": "Question",
      name: "How long do Tesla Model Y tires last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With rotations every 6,250 miles, the original tires on a Model Y Juniper are on track for approximately 50,000 miles. They may wear slightly more on the edges due to the vehicle's weight and higher center of gravity compared to smaller EVs.",
      },
    },
  ],
};

export default function ModelYJuniperCostOfOwnership() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <GradientHero
        emoji="💰"
        title="What It Actually Costs to Own a Tesla Model Y Juniper"
        subtitle="24,000 miles of real cost data — every dollar, every charge, every surprise."
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-zinc-500 mb-6">Last updated: March 2026 · 10 min read</p>

        {/* Intro */}
        <p className="text-xl text-zinc-200 leading-relaxed mb-8">
          Everyone talks about the sticker price. Nobody talks about what happens after. After
          24,000 miles of daily driving a 2026 Model Y Juniper Long Range, we tracked every cost
          — electricity, maintenance, tires, charging on the road — and the numbers might change
          how you think about buying a car.
        </p>

        {/* Cost summary card */}
        <div className="my-10 rounded-xl border border-zinc-700 bg-zinc-800/50 p-6">
          <h3 className="text-lg font-bold text-white mb-4">💰 24,000-Mile Cost Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Cost Per Mile", value: "4.25¢" },
              { label: "Maintenance", value: "$0" },
              { label: "Oil Changes", value: "0" },
              { label: "Brake Work", value: "0" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-green-400">{s.value}</p>
                <p className="text-sm text-zinc-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOC */}
        <div className="my-10 rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-6">
          <h3 className="text-base font-bold text-white mb-3">What We&apos;ll Cover</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Electricity: Cost Per Mile",
              "Home Charging vs Supercharging",
              "Maintenance: What You'll Actually Pay",
              "Brakes: Why You May Never Replace Them",
              "Tires: Real-World Lifespan",
              "The Hidden Costs Nobody Mentions",
              "Model Y vs Gas SUV: 5-Year Projection",
              "Is It Worth It?",
            ].map((item, i) => (
              <p key={item} className="text-base text-zinc-400">
                <span className="text-zinc-600 mr-2">{i + 1}.</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Section 1: Electricity cost */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Electricity: What You&apos;re Actually Paying Per Mile
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            The Model Y Juniper Long Range averages{" "}
            <strong className="text-white">250 Wh per mile</strong> in real-world driving — not
            the EPA estimate, actual driving over 24,000 miles including highway, city, winter,
            and summer.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            That works out to about 4 miles per kWh. At the national average electricity rate
            of $0.17/kWh, your cost is{" "}
            <strong className="text-white">4.25 cents per mile</strong>.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Here&apos;s what makes that number impressive: the Model Y Juniper is 850 lbs heavier
            than a Model 3 (bigger battery, taller body, more air resistance) and gets the exact
            same efficiency. Tesla&apos;s engineering improvements have completely offset the extra
            weight.
          </p>

          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">⚡ Cost Per Mile Comparison</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-base mb-2">
                  <span className="text-zinc-200">Model Y Juniper (electric)</span>
                  <span className="text-green-400 font-bold">4.25¢/mile</span>
                </div>
                <div className="h-5 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "34%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-base mb-2">
                  <span className="text-zinc-200">Toyota RAV4 (28 MPG gas)</span>
                  <span className="text-red-400 font-bold">12.5¢/mile</span>
                </div>
                <div className="h-5 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4">
              Based on $0.17/kWh electricity · $3.50/gallon gas · Real-world averages
            </p>
          </div>
        </section>

        {/* Section 2: Charging costs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Home Charging vs Supercharging: The Real Numbers
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            About 90% of charging happens at home. Plug in when you get home, charge to 80%
            overnight, done. Most days you won&apos;t use more than 30% of the battery, so a
            single overnight charge covers everything.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Road trips are where Supercharging comes in — and the Juniper&apos;s bigger battery
            makes a real difference in how fast you&apos;re back on the road:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
              <p className="text-3xl font-bold text-cyan-400">18 min</p>
              <p className="text-base text-zinc-300 mt-2">10% → 60%</p>
              <p className="text-sm text-zinc-500">~150 miles · ~$12-15</p>
            </div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
              <p className="text-3xl font-bold text-cyan-400">35 min</p>
              <p className="text-base text-zinc-300 mt-2">10% → 90%</p>
              <p className="text-sm text-zinc-500">~250 miles · ~$20-25</p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6">
            <h3 className="text-base font-bold text-white mb-3">💡 Charging Cost Breakdown</h3>
            <div className="space-y-3">
              {[
                { where: "Home (overnight)", rate: "$0.17/kWh", cost: "~$6-7 per full charge", note: "National average" },
                { where: "Supercharger (road trip)", rate: "$0.38/kWh", cost: "~$12-15 per stop", note: "10% → 60%" },
                { where: "Free charging (hotels, malls)", rate: "$0.00", cost: "Free", note: "More common than you think" },
              ].map((item) => (
                <div key={item.where} className="flex justify-between items-center gap-4 py-2 border-b border-zinc-700/50 last:border-0">
                  <div>
                    <p className="text-base text-white font-medium">{item.where}</p>
                    <p className="text-sm text-zinc-500">{item.note}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-base text-green-400 font-bold">{item.cost}</p>
                    <p className="text-xs text-zinc-500">{item.rate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Maintenance */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Maintenance After 24,000 Miles: The $0 Reality
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-5">
            This is where the cost-of-ownership math gets wild. After 24,000 miles, here&apos;s
            the complete maintenance ledger:
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                icon: "💧",
                text: "Windshield washer fluid",
                cost: "~$15/year",
                detail: "The car uses more than you'd expect — auto-cleans the FSD cameras",
              },
              {
                icon: "🔄",
                text: "Tire rotations every 6,250 miles",
                cost: "$0 (DIY) or ~$80/year",
                detail: "Jack, torque wrench, 30 minutes — or any tire shop",
              },
              {
                icon: "🛢️",
                text: "Oil changes",
                cost: "$0 forever",
                detail: "No engine, no oil. A gas SUV would need 2-3 by now (~$200+)",
              },
              {
                icon: "🛑",
                text: "Brake pads & rotors",
                cost: "$0 (possibly forever)",
                detail: "Regenerative braking does 100% of the work — see below",
              },
              {
                icon: "🔧",
                text: "Service visits / recalls",
                cost: "$0",
                detail: "Zero trips to Tesla in 24,000 miles. Zero recalls.",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex gap-4 items-start rounded-lg border border-zinc-800 bg-zinc-800/30 p-4"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-base font-medium text-white">{item.text}</p>
                    <p className="text-sm font-bold text-green-400 flex-shrink-0 ml-3">{item.cost}</p>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed">
            A comparable gas SUV at 24,000 miles would have needed 2-3 oil changes ($70-100 each),
            a cabin air filter, possibly new wiper blades, and would be 24,000 miles closer to
            needing brake work. That&apos;s $300-500 in maintenance costs that simply don&apos;t
            exist with the Model Y.
          </p>
        </section>

        {/* Section 4: Brakes */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Brakes: Why You May Never Replace Them
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            This is the single most underrated cost advantage of EVs. The Model Y uses{" "}
            <strong className="text-white">regenerative braking</strong> for virtually 100%
            of stopping — the electric motor runs in reverse to slow the car and recover energy
            back to the battery.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            The traditional hydraulic disc brakes barely engage. How long do they last? A Model 3
            with <strong className="text-white">90,000 miles still has original brake pads that
            look brand new</strong>. That&apos;s not an exaggeration — the pads show almost zero
            wear.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed">
            On a gas SUV, brake pads typically need replacement every 30,000-70,000 miles
            ($250-500 per axle). On a Tesla, you might never replace them during normal ownership.
          </p>
        </section>

        {/* Section 5: Tires */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Tires: Real-World Lifespan
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            With rotations every 6,250 miles, the original tires are on track for about{" "}
            <strong className="text-white">50,000 miles</strong>. That&apos;s solid for an EV —
            the instant torque and extra weight can be hard on tires.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            One thing to watch: the tires wear slightly more on the outer edges than on a lighter
            car. The Model Y&apos;s higher center of gravity and heavier weight (thanks to the
            big battery) puts more stress on the tire shoulders. Keep them inflated to 42 PSI
            and rotate on schedule.
          </p>

          <div className="rounded-lg border border-amber-800/20 bg-amber-900/5 p-4">
            <p className="text-base text-amber-300">
              💡 <strong>Budget tip:</strong> A set of replacement tires for the Model Y Juniper
              runs $800-1,200 depending on brand. At 50,000 miles per set, that&apos;s about
              2¢/mile for tires — still cheaper than gas per mile.
            </p>
          </div>
        </section>

        {/* Section 6: Hidden costs */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            The Hidden Costs Nobody Mentions
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-5">
            It&apos;s not all savings. Here are the costs and annoyances that don&apos;t show up
            in the marketing materials:
          </p>

          <div className="space-y-3">
            {[
              {
                icon: "💧",
                title: "Windshield Washer Fluid — You'll Buy a Lot",
                desc: "The car auto-sprays to keep FSD cameras clean (windshield and front bumper camera). It uses 3-4x more washer fluid than a normal car. Not expensive, but surprisingly annoying.",
                cost: "~$15-20/year",
              },
              {
                icon: "🧽",
                title: "Perforated Seats Are Harder to Clean",
                desc: "The ventilated seats have tiny holes that trap crumbs, fuzz, and dirt. The rear seats have the same perforations just for looks (they're not even ventilated). You'll spend more time and effort cleaning them than smooth seats.",
                cost: "Time, not money",
              },
              {
                icon: "🔊",
                title: "Occasional Interior Rattles",
                desc: "A faint rattle from the rear seat area happens occasionally — maybe 5-10% of drives. Too intermittent to diagnose. Common enough across owners to mention.",
                cost: "Annoyance factor",
              },
              {
                icon: "🛞",
                title: "Uneven Tire Wear",
                desc: "The heavier weight causes slightly more wear on tire edges than a lighter car. Regular rotation helps, but expect slightly shorter tire life than a gas sedan.",
                cost: "Possible earlier tire replacement",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-amber-800/30 bg-amber-900/5 p-5 flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="flex justify-between items-start gap-3">
                    <p className="text-base font-bold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-amber-400 flex-shrink-0 mt-1">{item.cost}</p>
                  </div>
                  <p className="text-base text-zinc-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: 5-year comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Model Y vs Gas SUV: 5-Year Cost Projection
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-6">
            Based on 12,000 miles/year (the average American drives about this much), here&apos;s
            what 5 years of ownership looks like:
          </p>

          <div className="overflow-x-auto rounded-xl border border-zinc-700">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-800/80">
                  <th className="py-4 px-5 text-base font-bold text-white">Expense</th>
                  <th className="py-4 px-5 text-base font-bold text-green-400 text-center">Model Y Juniper</th>
                  <th className="py-4 px-5 text-base font-bold text-red-400 text-center">Gas SUV (28 MPG)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fuel / Electricity", "$2,550", "$7,500"],
                  ["Oil Changes", "$0", "$750"],
                  ["Brake Work", "$0", "$500"],
                  ["Tire Rotations", "$0 - $400", "$400"],
                  ["Other Maintenance", "$0", "$500"],
                  ["Tires (1 replacement)", "$1,000", "$800"],
                  ["Total (5 years)", "$3,550 - $3,950", "$10,450"],
                ].map(([expense, tesla, gas], i) => (
                  <tr
                    key={expense}
                    className={`${i % 2 === 0 ? "bg-zinc-800/30" : "bg-zinc-800/10"} ${
                      i === 6 ? "font-bold border-t-2 border-zinc-600" : ""
                    }`}
                  >
                    <td className="py-3 px-5 text-base text-white">{expense}</td>
                    <td className="py-3 px-5 text-base text-zinc-300 text-center">{tesla}</td>
                    <td className="py-3 px-5 text-base text-zinc-300 text-center">{gas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base text-zinc-400 mt-4">
            That&apos;s roughly <strong className="text-white">$6,500 - $7,000 in savings</strong>{" "}
            over 5 years on running costs alone — before considering the $7,500 federal tax credit
            (if eligible) or any state incentives.
          </p>
        </section>

        <div className="my-8">
          <Link
            href="/tools/savings-calculator"
            className="block rounded-xl border border-cyan-800/50 bg-cyan-900/10 p-5 hover:bg-cyan-900/20 transition text-center"
          >
            <p className="text-lg text-cyan-400 font-medium">
              ⚡ Calculate your exact savings with our free Tesla vs Gas Calculator →
            </p>
          </Link>
        </div>

        {/* Section 8: Bottom line */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Is It Worth It?
          </h2>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            The sticker price of a Model Y is higher than most gas SUVs. But the running costs
            tell a completely different story. At{" "}
            <strong className="text-white">4.25¢/mile vs 12.5¢/mile</strong> for fuel, near-zero
            maintenance, and brakes that may never need replacing — the total cost of ownership
            gap closes fast.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed mb-4">
            After 24,000 miles, the Model Y has needed nothing but windshield washer fluid and
            tire rotations. No oil changes, no brake work, no dealer visits, no recalls. The car
            is mechanically identical to the day it was delivered.
          </p>
          <p className="text-lg text-zinc-200 leading-relaxed">
            If you drive 12,000+ miles a year and have home charging, the math is straightforward.
            The Model Y Juniper isn&apos;t just cheaper to fuel — it&apos;s{" "}
            <strong className="text-white">
              cheaper to own, period.
            </strong>
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-8 text-center mb-10">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Run the Numbers?</h3>
          <p className="text-base text-zinc-400 mb-5">
            Free tools to help you make the decision:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/savings-calculator"
              className="bg-cyan-600 text-white px-5 py-3 rounded-lg hover:bg-cyan-700 transition font-medium"
            >
              ⚡ Savings Calculator
            </Link>
            <Link
              href="/tools/delivery-checklist"
              className="bg-cyan-600 text-white px-5 py-3 rounded-lg hover:bg-cyan-700 transition font-medium"
            >
              📋 Delivery Checklist
            </Link>
            <Link
              href="/tools/new-owner-setup"
              className="bg-cyan-600 text-white px-5 py-3 rounded-lg hover:bg-cyan-700 transition font-medium"
            >
              🧙 New Owner Guide
            </Link>
          </div>
        </div>

        <p className="text-sm text-zinc-500">
          All cost data based on 24,000 miles of real-world daily driving with a 2026 Model Y
          Juniper Long Range. Electricity rates use the national average of $0.17/kWh. Gas
          comparison uses $3.50/gallon and 28 MPG (comparable compact SUV).
        </p>
      </article>
    </>
  );
}
