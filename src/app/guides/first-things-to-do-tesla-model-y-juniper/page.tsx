import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  title: "First 7 Things to Do After Getting Your Tesla Model Y Juniper",
  description:
    "Just picked up your Model Y Juniper? Here are the 7 things you should do on day one — from software setup to must-have accessories. A real owner's checklist.",
  keywords: [
    "tesla model y juniper setup",
    "first things to do tesla model y",
    "new tesla model y tips",
    "tesla model y juniper delivery checklist",
    "model y juniper new owner guide",
  ],
};

const steps = [
  {
    num: 1,
    title: "Inspect Your Car at Delivery",
    content: `Before you sign anything, do a thorough inspection. Tesla's quality control has improved with the Juniper, but issues still slip through. Check panel gaps (run your finger along door edges), look for paint imperfections under direct sunlight, open and close every door and the trunk, test all windows, and verify the touchscreen works. Take photos of any issues and note them on the delivery checklist before accepting.`,
    tip: "Bring a flashlight and a checklist. Do this inspection even if the delivery person seems impatient — you're spending $45,000+.",
  },
  {
    num: 2,
    title: "Set Up Your Tesla Account & App",
    content: `Download the Tesla app and log in with the account you used to order. This is your digital key — you'll use it to lock/unlock, start the car, check charging status, and precondition the cabin. Enable PIN to Drive for security (go to Controls > Safety > PIN to Drive). Set up your driver profile with your preferred seat position, mirrors, and steering settings. The car will remember these and auto-adjust when your phone connects.`,
    tip: null,
  },
  {
    num: 3,
    title: "Install a Screen Protector Immediately",
    content: `The Juniper's 15.4-inch touchscreen is the center of everything you do in this car. It will get scratched and smudged within days. Install a tempered glass screen protector before you start using it. The Spigen EZ Fit with alignment tray makes this foolproof. Also get one for the 8-inch rear screen if you have passengers.`,
    tip: "Do this BEFORE you start touching the screen. Clean it with the microfiber cloth that comes with the protector, apply in a dust-free environment (your garage with the doors closed works fine).",
  },
  {
    num: 4,
    title: "Set Up Sentry Mode with an SSD",
    content: `Sentry Mode records suspicious activity around your parked car. The built-in dashcam records while you drive. Both need external storage — Tesla doesn't include any. Get a Samsung T7 SSD (500GB is plenty), format it as exFAT on your computer, plug it into the USB-C port in the glovebox, and enable Sentry Mode in Controls > Safety. Set it to activate automatically when you're away from home.`,
    tip: "Don't use a cheap USB flash drive — they fail constantly from the continuous write cycles. An SSD is more reliable and faster.",
  },
  {
    num: 5,
    title: "Add Floor Mats",
    content: `The stock carpet mats are garbage. Get all-weather floor mats before your first rainy day. 3D MAXpider Kagu is the gold standard, or 3W if you want to save money. Make sure they say "Juniper" or "2025-2026" — old Model Y mats don't fit the refreshed interior.`,
    tip: null,
  },
  {
    num: 6,
    title: "Learn the Hidden Features",
    content: `The Model Y Juniper has features that aren't obvious on day one. Here are the ones most new owners miss: Joe Mode (Controls > Safety) reduces chime volume by half — essential if you have sleeping kids. Camp Mode (Climate > keep Climate on) runs the AC/heat while parked. Dog Mode shows a message on screen telling passersby your pet is safe. The Juniper's ventilated front seats have their own controls in the climate menu — don't forget to use them in summer.`,
    tip: null,
  },
  {
    num: 7,
    title: "Plan Your Charging Routine",
    content: `If you have a home charger (Level 2, 240V), set daily charging limit to 80% and schedule it for off-peak hours (usually after 9 PM). The car's battery management system works best when you keep it between 20-80% for daily driving. Only charge to 100% before road trips. If you don't have home charging, map out nearby Superchargers and third-party chargers using the in-car navigation or the PlugShare app.`,
    tip: "Set a charging schedule in the Tesla app under Charging > Schedule. This saves money on electricity and reduces grid strain during peak hours.",
  },
];

export default function FirstThingsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="🚀"
        title="First Week Setup Plan"
        subtitle="Seven practical actions to protect your car and avoid common new-owner mistakes."
      />
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">GUIDES</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          First 7 Things to Do After Getting Your Tesla Model Y Juniper
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          Congrats on the new car. Here&apos;s exactly what to do on day one — from the delivery
          inspection to the settings most people don&apos;t find for weeks. This is the checklist
          I wish I had.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 6 min read</p>
      </header>

      {/* Steps */}
      <div className="space-y-10">
        {steps.map((step) => (
          <section key={step.num} id={`step-${step.num}`} className="scroll-mt-20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.num}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3">{step.title}</h2>
                <p className="text-zinc-200 leading-relaxed">{step.content}</p>
                {step.tip && (
                  <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-4 mt-3 text-sm text-amber-300">
                    <strong>💡 Pro tip:</strong> {step.tip}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Quick Shopping List */}
      <section className="mt-12 bg-zinc-900 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Day 1 Shopping List</h2>
        <p className="text-base text-zinc-300 mb-4">
          These are the items you should have ready before or on delivery day:
        </p>
        <div className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-white">Screen Protector (Spigen EZ Fit)</p>
              <p className="text-base text-zinc-300">15.4&quot; front + 8&quot; rear</p>
            </div>
            <a href="https://www.amazon.com/dp/B0CHV4WP2C?tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer sponsored" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">~$35 on Amazon →</a>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-white">SSD for Sentry Mode (Samsung T7)</p>
              <p className="text-base text-zinc-300">500GB, format as exFAT</p>
            </div>
            <a href="https://www.amazon.com/dp/B0874XN4D8?tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer sponsored" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">~$70 on Amazon →</a>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-white">All-Weather Floor Mats</p>
              <p className="text-base text-zinc-300">3D MAXpider Kagu or 3W</p>
            </div>
            <a href="https://www.amazon.com/dp/B0F8PPNW49?tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer sponsored" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">~$170 on Amazon →</a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mt-10 border-t pt-8">
        <h2 className="text-lg font-semibold text-white mb-4">Related Articles</h2>
        <div className="space-y-2">
          <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline block">
            → 10 Must-Have Accessories for Model Y Juniper
          </Link>
          <Link href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats" className="text-blue-400 hover:text-blue-300 hover:underline block">
            → Best Floor Mats Compared: MAXpider vs WeatherTech vs 3W
          </Link>
          <Link href="/guides/tesla-model-y-juniper-delivery-checklist" className="text-blue-400 hover:text-blue-300 hover:underline block">
            → Tesla Model Y Juniper Delivery Checklist
          </Link>
          <Link href="/guides/tesla-model-y-ceramic-tint-cost-guide" className="text-blue-400 hover:text-blue-300 hover:underline block">
            → Ceramic Tint Cost Guide for Model Y
          </Link>
        </div>
      </section>

      <p className="text-xs text-zinc-300 mt-8">
        Some links are affiliate links. We earn a small commission at no extra cost to you.
      </p>
    </article>
  );
}
