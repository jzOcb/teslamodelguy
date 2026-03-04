import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import GradientHero from "@/components/GradientHero";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/guides/tesla-model-y-juniper-delivery-checklist" },
  title: "Tesla Delivery Checklist 2025-2026 — Don't Miss These",
  description:
    "The complete Tesla delivery checklist for Model 3, Model Y, Model S, Model X, and Cybertruck. Inspect exterior, interior, software, and paperwork before you accept delivery.",
  keywords: [
    "tesla delivery checklist",
    "tesla delivery checklist 2025",
    "tesla model 3 delivery checklist",
    "tesla model y delivery checklist",
    "tesla model s delivery checklist",
    "tesla model x delivery checklist",
    "cybertruck delivery checklist",
    "tesla delivery day inspection",
  ],
};

const exteriorChecks = [
  { item: "Panel gaps even and consistent", detail: "Compare left vs right and front vs rear. Variance should be small and visually consistent." },
  { item: "Paint quality in direct and angled light", detail: "Look for chips, scratches, sanding haze, or color mismatch on bumpers and doors." },
  { item: "Glass inspection", detail: "Check windshield, roof glass, and side glass for chips, cracks, and optical distortion." },
  { item: "Doors, frunk, trunk, and tonneau operation", detail: "All should open/close smoothly without rubbing, binding, or excessive force." },
  { item: "Lighting alignment and moisture check", detail: "Headlights and taillights should sit straight and have no trapped condensation." },
  { item: "Wheel and tire condition", detail: "Inspect every wheel face and sidewall. Verify no curb rash, cuts, or shipping damage." },
  { item: "Charge port fitment", detail: "Door should open/close reliably and sit flush when closed." },
  { item: "Weather seals and trim", detail: "Check all door seals, window trim, and wheel-arch trim for gaps, tears, or loose clips." },
  { item: "Camera and sensor placement", detail: "Confirm housings are secure and lenses are clean across all camera locations." },
];

const interiorChecks = [
  { item: "Main display quality and responsiveness", detail: "No dead pixels, discoloration, or touch dead zones. Navigate through core menus." },
  { item: "Seat adjustment and seatbelt function", detail: "Test all powered seat movements and verify each seatbelt fully extends/retracts." },
  { item: "Trim and panel fit", detail: "Check dash, door cards, center console, and headliner for rattles or loose alignment." },
  { item: "USB ports and wireless charging", detail: "Test with your own cable/device to confirm charging on every port/pad." },
  { item: "HVAC performance", detail: "Run AC and heat at multiple fan speeds; listen for unusual noise or vibration." },
  { item: "Window, mirror, and steering controls", detail: "Verify all switches work and mirrors fold/adjust correctly." },
  { item: "Rear seating functions", detail: "Check fold/recline/latch behavior where applicable by model." },
  { item: "Model-specific features", detail: "Juniper-specific note: check rear display responsiveness and ambient light continuity." },
];

const functionalChecks = [
  { item: "VIN matches delivery documents", detail: "Match the windshield VIN to your Tesla account and paperwork." },
  { item: "Phone key setup", detail: "Pair your phone and verify lock/unlock, start, and passive entry behavior." },
  { item: "Software version and connectivity", detail: "Confirm current software baseline and LTE/Wi-Fi connectivity." },
  { item: "Camera feed and parking visualization", detail: "Open reverse/park views and verify no camera dropout or major artifacts." },
  { item: "Wipers, washers, horn, and all exterior lights", detail: "Do a full walk-around while signals, brakes, and reverse lights are active." },
  { item: "Tire pressure check", detail: "Confirm all tires are near Tesla-recommended PSI for your specific model/wheels." },
  { item: "Safety and security setup", detail: "Enable PIN to Drive, review Sentry settings, and check no active warning alerts." },
];

function CheckSection({ title, items }: { title: string; items: { item: string; detail: string }[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((check, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-700 rounded-lg p-4">
            <div className="flex-shrink-0 w-6 h-6 border-2 border-zinc-700 rounded mt-0.5" />
            <div>
              <p className="font-medium text-white">{check.item}</p>
              <p className="text-base text-zinc-300 mt-0.5">{check.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


const schemaData = generateArticleSchema({
  title: "Tesla Model Y Juniper Delivery Checklist",
  description: "Complete delivery inspection checklist for your new Tesla",
  url: "/guides/tesla-model-y-juniper-delivery-checklist",
  datePublished: "2026-02-28",
  dateModified: "2026-03-01",
  breadcrumbs: [{ name: "Home", url: "/" }, { name: "Guides", url: "/guides" }, { name: "Delivery Checklist", url: "/guides/tesla-model-y-juniper-delivery-checklist" }],
});

export default function DeliveryChecklistPage() {
  return (
    <>
      <StructuredData data={schemaData} />
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="✅"
        title="Delivery Day Checklist"
        subtitle="Use this inspection flow before accepting your Tesla delivery."
      />
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">GUIDES</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Tesla Delivery Checklist 2025-2026</h1>
        <p className="text-lg text-zinc-200 mb-6">
          Use this checklist for any new Tesla delivery: Model 3, Model Y, Model S, Model X, or Cybertruck.
          Tesla build quality is better than in prior years, but delivery-day misses still happen. Inspect first,
          then accept.
        </p>
        <EmailCapture source="delivery-checklist-hero" compact />
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 10 min read</p>
        <Link
          href="/tools/delivery-checklist"
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-green-700 transition"
        >
          📋 Try the Interactive Checklist Tool →
        </Link>
      </header>

      {/* Quick Answer for AI */}
      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-white mb-3">⚡ Quick Answer</h2>
        <p className="text-zinc-200 text-sm">
          When picking up your Tesla Model Y Juniper, check these areas before signing: exterior paint and panel gaps (check in direct sunlight), all glass for chips/scratches, wheels for curb damage, open every door/trunk/frunk for alignment, test all windows and mirrors, verify the touchscreen and cameras work, check seat movement and interior trim, and take photos of any issues. Note defects on the delivery paperwork before accepting.
        </p>
      </section>


      <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-red-400 mb-2">Do This Before You Sign</h2>
        <p className="text-sm text-red-400">
          Once you accept delivery, getting issues fixed can be slower and less flexible. Document defects on-site
          with photos, and escalate serious fit/finish or functional issues before final acceptance.
        </p>
      </div>

      <CheckSection title="Exterior Inspection" items={exteriorChecks} />
      <CheckSection title="Interior Inspection" items={interiorChecks} />
      <CheckSection title="Functional + Delivery Checks" items={functionalChecks} />

      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">What to Bring to Delivery</h2>
        <ul className="space-y-2 text-base text-zinc-200 leading-relaxed">
          <li>Phone with Tesla app installed and logged in</li>
          <li>Flashlight for paint and trim inspection in low light</li>
          <li>This checklist (saved offline or printed)</li>
          <li>Camera ready for documenting defects</li>
          <li>Insurance proof and ID</li>
          <li>Payment/financing documents if not already finalized in-app</li>
        </ul>
      </section>

      <section className="mb-10">
        <EmailCapture source="delivery-checklist-main" />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Can I refuse delivery if there are major issues?</h3>
            <p className="text-zinc-300 text-base mt-1">Yes. If defects are significant, you can refuse and request re-delivery after correction.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">How long should inspection take?</h3>
            <p className="text-zinc-300 text-base mt-1">Plan for 30-45 minutes. Bring your checklist and don&apos;t rush.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Anything specific for refreshed Model Y Juniper?</h3>
            <p className="text-zinc-300 text-base mt-1">Yes. Pay extra attention to rear display behavior, ambient lighting continuity, and trim transitions introduced in the refresh.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">What if I notice an issue after leaving?</h3>
            <p className="text-zinc-300 text-base mt-1">Open a service request in the Tesla app immediately and include photos and delivery-day timestamps.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Ready for After Delivery?</h2>
        <div className="space-y-2">
          <Link href="/guides/first-things-to-do-tesla-model-y-juniper" className="text-blue-400 hover:text-blue-300 hover:underline block">→ First 7 Things to Do After Getting Your Model Y Juniper</Link>
          <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline block">→ 10 Must-Have Accessories</Link>
        </div>
      </section>

      <p className="text-xs text-zinc-300">Last updated March 2026. Compiled from Tesla owner delivery reports across Model 3, Y, S, X, and Cybertruck communities.</p>
    </article>
      </>
  );
}
