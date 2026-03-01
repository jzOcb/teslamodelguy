import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import GradientHero from "@/components/GradientHero";

export const metadata: Metadata = {
  title: "Best Screen Protector for Tesla Model Y Juniper 15.4\" (2025-2026)",
  description:
    "Spigen vs dbrand vs TPARTS vs Tesery — the best screen protectors for your Model Y Juniper's new 15.4-inch touchscreen. Matte vs clear, real comparisons.",
  keywords: [
    "tesla model y juniper screen protector",
    "best screen protector model y 2025",
    "spigen tesla screen protector juniper",
    "dbrand prism tesla model y",
    "model y juniper 15.4 inch screen protector",
  ],
};

export default function ScreenProtectorPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <GradientHero
        emoji="🛡️"
        title="Screen Protector Showdown"
        subtitle="Matte vs clear and which protector fits the 15.4-inch Juniper display best."
      />
      <header className="mb-10">
        <p className="text-sm text-blue-400 font-medium mb-2">REVIEWS / SCREEN PROTECTORS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Best Screen Protector for Tesla Model Y Juniper (15.4&quot; Display)
        </h1>
        <p className="text-lg text-zinc-200 leading-relaxed">
          The Juniper upgraded to a 15.4-inch touchscreen — which means your old Model Y screen
          protector won&apos;t fit. Here are the 4 best options for the new display.
        </p>
        <p className="text-base text-zinc-300 mt-4">Last updated: March 2026 · 5 min read</p>
      </header>

      <section className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-red-400 mb-2">⚠️ Compatibility Warning</h2>
        <p className="text-sm text-red-400">
          The Juniper&apos;s screen is 15.4 inches, up from 15 inches on the previous Model Y.
          Screen protectors for the 2020-2024 Model Y will NOT fit. Only buy protectors that
          explicitly state &quot;Juniper,&quot; &quot;2025,&quot; or &quot;2026&quot; compatibility.
        </p>
      </section>

      <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-white mb-3">⚡ Quick Verdict</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>Best Overall:</strong> Spigen EZ Fit — foolproof installation, great protection, fair price</li>
          <li><strong>Best Premium:</strong> dbrand Prism 2.0 — best glass quality, self-aligning tray, but pricier</li>
          <li><strong>Best Budget:</strong> TPARTS Tempered Glass — solid protection at the lowest price</li>
          <li><strong>Best Anti-Glare:</strong> Tesery Matte — if you drive in sunny conditions, this kills reflections</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Matte vs Clear: Which Should You Get?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-zinc-700 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Clear / HD</h3>
            <ul className="text-base text-zinc-300 space-y-1">
              <li>✅ Colors look identical to bare screen</li>
              <li>✅ Sharpest text and images</li>
              <li>✅ Best for garage parkers</li>
              <li>❌ Shows fingerprints more</li>
              <li>❌ Glare in direct sunlight</li>
            </ul>
          </div>
          <div className="border border-zinc-700 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Matte / Anti-Glare</h3>
            <ul className="text-base text-zinc-300 space-y-1">
              <li>✅ Dramatically reduces glare</li>
              <li>✅ Hides fingerprints</li>
              <li>✅ Paper-like feel</li>
              <li>❌ Slightly reduces clarity</li>
              <li>❌ Colors look marginally muted</li>
            </ul>
          </div>
        </div>
        <p className="text-base text-zinc-300 mt-3">
          <strong>Our recommendation:</strong> Go matte if you park outdoors or drive in sunny areas.
          Go clear if you mostly use a garage and want maximum visual quality.
        </p>
      </section>

      {/* Individual reviews */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">The 4 Best Options</h2>

        <div className="border border-zinc-700 rounded-2xl p-6">
          <span className="bg-blue-900/50 text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full">BEST OVERALL</span>
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white">
                <Image src="/images/spigen-product.jpg" alt="Spigen EZ Fit Tempered Glass" fill className="object-contain p-4" sizes="(min-width: 768px) 600px, 100vw" />
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">Spigen EZ Fit Tempered Glass</h3>
          <p className="text-zinc-200 mb-3">
            Spigen&apos;s auto-alignment tray is the killer feature. You place the tray on the screen,
            peel the backing, press down, and remove the tray — perfect placement every time with
            zero bubbles. 9H hardness, oleophobic coating, and full touch sensitivity. Available
            in both clear and matte finishes.
          </p>
          <p className="text-zinc-200 mb-3">
            The matte version is genuinely excellent at killing glare. The slight texture also makes
            the screen feel better to swipe — less sticky than bare glass.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$30–40</span>
            <a href="https://www.amazon.com/s?k=Spigen+EZ+Fit+Tesla+Model+Y+Juniper+screen+protector&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Amazon →</a>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-2xl p-6">
          <span className="bg-purple-900/50 text-purple-400 text-xs font-medium px-2 py-0.5 rounded-full">PREMIUM PICK</span>
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white">
                <Image src="/images/dbrand-product.jpg" alt="dbrand Prism 2.0" fill className="object-contain p-4" sizes="(min-width: 768px) 600px, 100vw" />
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">dbrand Prism 2.0</h3>
          <p className="text-zinc-200 mb-3">
            dbrand calls this &quot;idiot-proof&quot; and they&apos;re not wrong. The self-aligning
            installation tray is the best in the business — even better than Spigen&apos;s. The glass
            itself is noticeably thinner and clearer than competitors.
          </p>
          <p className="text-zinc-200 mb-3">
            Premium price, premium product. If you want the absolute best and don&apos;t mind paying for it.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$40–50</span>
            <a href="https://dbrand.com" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Buy from dbrand →</a>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-2xl p-6">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium px-2 py-0.5 rounded-full">BEST BUDGET</span>
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white">
                <Image src="/images/tparts-product.jpg" alt="TPARTS Tempered Glass" fill className="object-contain p-4" sizes="(min-width: 768px) 600px, 100vw" />
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">TPARTS Tempered Glass</h3>
          <p className="text-zinc-200 mb-3">
            No-frills 9H tempered glass at a budget price. Installation isn&apos;t as easy as Spigen
            or dbrand (no alignment tray), but the protection is comparable. If you&apos;re careful
            with installation, you get 90% of the premium experience at 60% of the price.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$15–25</span>
            <a href="https://www.amazon.com/s?k=Tesla+Model+Y+Juniper+screen+protector&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Amazon →</a>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-2xl p-6">
          <span className="bg-amber-100 text-amber-400 text-xs font-medium px-2 py-0.5 rounded-full">BEST ANTI-GLARE</span>
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-white">
                <Image src="/images/tesery-product.jpg" alt="Tesery Matte Screen Protector" fill className="object-contain p-4" sizes="(min-width: 768px) 600px, 100vw" />
              </div>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">Tesery Matte Screen Protector</h3>
          <p className="text-zinc-200 mb-3">
            If anti-glare is your top priority, Tesery&apos;s matte protector does the best job of
            any option we&apos;ve seen. Also includes blue light filtering, which reduces eye strain
            on long drives. 9H tempered glass with anti-fingerprint coating.
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold">$20–35</span>
            <a href="https://www.amazon.com/s?k=Tesla+Model+Y+Juniper+screen+protector&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">Check Amazon →</a>
            <a href="https://evbandit.com/products/tesla-model-y-juniper-2025-2026-model-3-highland-2024-2025-matte-screen-protector-2-pack-15-4-front-rear-9h-tempered-glass-anti-glare-fingerprint-dashboard-display-cover?sca_ref=10733634.pROAnZ9F8x" target="_blank" rel="noopener noreferrer" className="text-sm bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy at EV Bandit →</a>
          </div>
        </div>
      </section>

      {/* Don't Forget Rear Screen */}
      <section className="bg-zinc-900 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-white mb-3">Don&apos;t Forget the Rear Screen</h2>
        <p className="text-zinc-300 text-base mb-3">
          The Juniper added a new 8-inch rear passenger screen for climate and entertainment controls.
          If you have kids or regular backseat passengers, protect this too. Spigen makes a matching
          EZ Fit for the rear screen that uses the same easy alignment system.
        </p>
        <a href="https://www.amazon.com/s?k=Tesla+Model+Y+Juniper+screen+protector&tag=teslamodelguy-20" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">Find rear screen protectors on Amazon →</a>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">Will a screen protector affect touch sensitivity?</h3>
            <p className="text-zinc-300 text-base mt-1">No. All four options maintain full touch responsiveness. You won&apos;t notice any difference in daily use.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Can I remove it and reapply?</h3>
            <p className="text-zinc-300 text-base mt-1">Tempered glass protectors are one-time use. If you mess up installation, you&apos;ll need a new one. This is why the Spigen and dbrand alignment trays are worth the extra cost.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Does the protector interfere with the camera (if applicable)?</h3>
            <p className="text-zinc-300 text-base mt-1">Juniper-specific protectors have precise cutouts for the cabin camera. No interference.</p>
          </div>
        </div>
      </section>

      <p className="text-xs text-zinc-300 mb-8">
        Some links are affiliate links. We earn a small commission at no extra cost to you.
      </p>

      <div className="flex gap-4">
        <Link href="/best/tesla-model-y-juniper-accessories" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">← 10 Must-Have Accessories</Link>
        <Link href="/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Floor Mats →</Link>
      </div>
    </article>
  );
}
