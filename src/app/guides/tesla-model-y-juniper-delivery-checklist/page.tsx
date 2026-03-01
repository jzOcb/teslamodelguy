import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tesla Model Y Juniper Delivery Checklist (2025-2026) — Don't Miss These",
  description:
    "The complete delivery inspection checklist for your Tesla Model Y Juniper. Panel gaps, paint, software, interior — everything to check before you sign. Printable guide.",
  keywords: [
    "tesla model y delivery checklist",
    "model y juniper delivery inspection",
    "tesla delivery day what to check",
    "model y panel gaps check",
    "tesla model y juniper quality issues",
  ],
};

const exteriorChecks = [
  { item: "Panel gaps even on both sides", detail: "Compare left vs right. Run your finger along door edges." },
  { item: "Paint — no scratches, chips, or swirl marks", detail: "Use phone flashlight. Check hood, bumpers, door edges, roof rails." },
  { item: "Frunk & trunk sit flush", detail: "No gaps or misalignment. Should not pool water." },
  { item: "All glass — no chips, cracks, distortions", detail: "Windshield, roof, side windows. Look for stress lines." },
  { item: "Headlights & taillights aligned", detail: "No condensation inside. Even gaps to body panels." },
  { item: "Wheels — no curb rash or scratches", detail: "Check all 4 rims closely. Verify valve stems present." },
  { item: "Charge port door opens/closes smoothly", detail: "Sits flush when closed. Latches properly." },
  { item: "All doors open & close smoothly", detail: "No sticking, excessive force, or weird noises." },
  { item: "Rubber seals intact on all doors", detail: "No peeling, gaps, or loose trim." },
  { item: "Camera housings tight (not loose)", detail: "Gently wiggle front, rear, and side repeater cameras." },
  { item: "Mud flaps (if applicable)", detail: "Check they're properly attached with no missing clips." },
];

const interiorChecks = [
  { item: "Touchscreen — no dead pixels or scratches", detail: "15.4\" front + 8\" rear. Swipe through all menus." },
  { item: "All seats adjust properly", detail: "Forward, backward, up, down. Test lumbar if available." },
  { item: "Seatbelts fully extend & retract", detail: "Test all 5 seatbelts." },
  { item: "Rear seats fold & lock back", detail: "Test both button and manual. Should click firmly." },
  { item: "No rattles — press on trim pieces", detail: "Gently press dashboard, door cards, center console." },
  { item: "All USB-C ports working", detail: "Front console and rear ports. Plug in a device to test." },
  { item: "Wireless charging pad works", detail: "Place your phone on both pads." },
  { item: "Heated & ventilated seats work", detail: "Test all levels for front seats. Check rear heated seats." },
  { item: "AC & heat functioning", detail: "Test hot, cold, different fan speeds. Listen for unusual noises." },
  { item: "Ambient lighting works evenly", detail: "No flickering or dead sections." },
  { item: "Glovebox opens smoothly", detail: "Button release should be responsive." },
];

const functionalChecks = [
  { item: "VIN matches your paperwork", detail: "Check windshield VIN against order confirmation." },
  { item: "Tesla app connects via Bluetooth", detail: "Phone key should unlock/lock the car." },
  { item: "Software version is current", detail: "Go to Controls > Software. Set updates to Advanced." },
  { item: "All cameras display clearly", detail: "Check backup camera, side views, and forward camera." },
  { item: "Wipers & washer fluid work", detail: "Test spray and all wiper speeds." },
  { item: "All exterior lights function", detail: "Headlights, fog lights, brake lights, turn signals, reverse." },
  { item: "Tire pressure ~42 PSI all around", detail: "Check in the Tesla app or on-screen tire display." },
  { item: "PIN to Drive set up", detail: "Controls > Safety > PIN to Drive. Essential security feature." },
  { item: "No active alerts on screen", detail: "Check for any error messages or warning indicators." },
];

function CheckSection({ title, items }: { title: string; items: { item: string; detail: string }[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((check, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 rounded-lg p-4">
            <div className="flex-shrink-0 w-6 h-6 border-2 border-zinc-700 rounded mt-0.5" />
            <div>
              <p className="font-medium text-white">{check.item}</p>
              <p className="text-sm text-zinc-400 mt-0.5">{check.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DeliveryChecklistPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-[40vh] min-h-[300px] -mx-4 md:mx-0 md:rounded-2xl overflow-hidden mb-8">
        <Image src="/images/tesla-hero-global.jpg" alt="Tesla Model Y" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">GUIDES</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tesla Model Y Juniper Delivery Checklist
        </h1>
        <p className="text-lg text-zinc-300">
          Tesla&apos;s quality has improved with the Juniper, but issues still slip through.
          Don&apos;t let excitement make you skip the inspection. Here&apos;s everything to check
          before you sign — bookmark this page and pull it up at delivery.
        </p>
        <p className="text-sm text-zinc-400 mt-4">Last updated: March 2026 · 10 min read</p>
      </header>

      <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-red-400 mb-2">⚠️ Do This Before You Sign</h2>
        <p className="text-sm text-red-400">
          Once you accept delivery, getting issues fixed becomes significantly harder. Tesla may
          promise to &quot;fix it later&quot; — but your leverage drops the moment you drive off the lot.
          Take your time. If something is seriously wrong, you can refuse delivery and reschedule.
        </p>
      </div>

      <CheckSection title="🚗 Exterior Inspection (31 checkpoints)" items={exteriorChecks} />
      <CheckSection title="🪑 Interior Inspection (11 checkpoints)" items={interiorChecks} />
      <CheckSection title="⚙️ Functional Checks (9 checkpoints)" items={functionalChecks} />

      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">What to Bring to Delivery</h2>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>📱 <strong>Phone</strong> — Tesla app installed & logged in</li>
          <li>🔦 <strong>Flashlight</strong> — for paint inspection in indoor delivery centers</li>
          <li>📋 <strong>This checklist</strong> — bookmark or screenshot this page</li>
          <li>📷 <strong>Camera ready</strong> — photograph any issues before signing</li>
          <li>📄 <strong>Insurance proof</strong> — coverage effective on delivery day</li>
          <li>💳 <strong>Payment/financing docs</strong> — if not already completed online</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Can I really refuse delivery?</h3>
            <p className="text-zinc-400 text-sm mt-1">Yes. If there are significant defects (major paint damage, panel misalignment, software issues), you can refuse and Tesla will reschedule. Your deposit is safe.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">How long should the inspection take?</h3>
            <p className="text-zinc-400 text-sm mt-1">Budget 30-45 minutes. Don&apos;t let anyone rush you. This is a $45,000+ purchase.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">What if I find an issue after driving home?</h3>
            <p className="text-zinc-400 text-sm mt-1">You can still report issues through the Tesla app (Service &gt; Request Service). But it&apos;s much easier to document issues at delivery. Always photograph everything on the spot.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Are Juniper panel gaps better than older Model Y?</h3>
            <p className="text-zinc-400 text-sm mt-1">Generally yes — Tesla improved fit and finish significantly with the Juniper refresh. But it&apos;s not perfect. Still worth checking every panel.</p>
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

      <p className="text-xs text-zinc-400">Last updated March 2026. Based on community reports from r/TeslaModelY and real owner experiences.</p>
    </article>
  );
}
