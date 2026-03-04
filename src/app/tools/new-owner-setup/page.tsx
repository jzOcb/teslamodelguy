"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

/* ───────────────── step data ───────────────── */

interface Step {
  id: string;
  num: number;
  title: string;
  timeEstimate: string;
  content: string;
  tip?: string;
  product?: {
    name: string;
    price: string;
    href: string;
  };
  learnMore?: {
    label: string;
    href: string;
  };
}

const steps: Step[] = [
  {
    id: "app-setup",
    num: 1,
    title: "Download & Set Up the Tesla App",
    timeEstimate: "5 min",
    content:
      "The Tesla app is your digital key, remote control, and charging monitor. Download it, log in with the account you used to order, and make sure your car shows up. Enable notifications for charging alerts and software updates.",
    tip: "Enable PIN to Drive (Controls > Safety > PIN to Drive) for theft prevention.",
  },
  {
    id: "phone-key",
    num: 2,
    title: "Set Up Phone Key & Key Cards",
    timeEstimate: "5 min",
    content:
      "Your phone becomes the primary key via Bluetooth. Test that it locks when you walk away and unlocks when you approach. Keep both key cards in your wallet as backup — one for you, one for a family member or hidden in a safe spot.",
    tip: "If phone key is unreliable, make sure Bluetooth and Location are always on for the Tesla app.",
  },
  {
    id: "wifi",
    num: 3,
    title: "Connect to Home WiFi",
    timeEstimate: "2 min",
    content:
      "Your Tesla needs WiFi for over-the-air software updates, map downloads, and Spotify/Netflix streaming. Park in your garage and connect via Controls > WiFi. Software updates download overnight on WiFi — they won't download over cellular.",
  },
  {
    id: "screen-protector",
    num: 4,
    title: "Install a Screen Protector",
    timeEstimate: "10 min",
    content:
      "The 15.4-inch touchscreen is the center of everything. It WILL get scratched within days if unprotected. Install a tempered glass protector before you start using it. The Spigen EZ Fit with alignment tray makes this foolproof. Do this in your garage with doors closed to minimize dust.",
    tip: "Do this BEFORE you start using the screen. Clean with the included microfiber cloth first.",
    product: {
      name: "Spigen EZ Fit Screen Protector",
      price: "$30–35",
      href: "https://www.amazon.com/dp/B0CHV4WP2C?tag=teslamodelguy-20",
    },
    learnMore: {
      label: "Best Screen Protectors Compared",
      href: "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
    },
  },
  {
    id: "sentry-ssd",
    num: 5,
    title: "Set Up Sentry Mode with an SSD",
    timeEstimate: "15 min",
    content:
      "Sentry Mode records activity around your parked car. The dashcam records while you drive. Both need external storage — Tesla doesn't include any. Get a Samsung T7 SSD (500GB is plenty), format it as exFAT, plug into the USB-C port in the glovebox, and enable Sentry Mode in Controls > Safety.",
    tip: "Don't use a cheap USB flash drive — they fail from continuous write cycles. An SSD is reliable and fast.",
    product: {
      name: "Samsung T7 500GB SSD",
      price: "$60–70",
      href: "https://www.amazon.com/dp/B0874XN4D8?tag=teslamodelguy-20",
    },
  },
  {
    id: "floor-mats",
    num: 6,
    title: "Install All-Weather Floor Mats",
    timeEstimate: "10 min",
    content:
      "The stock carpet mats are terrible. Get all-weather mats before your first rainy day. 3D MAXpider Kagu is the gold standard — three-layer construction, raised edges that catch spills, and a premium look. Make sure they say 'Juniper' or '2025-2026' — old Model Y mats don't fit.",
    product: {
      name: "3D MAXpider Kagu Floor Mats",
      price: "$150–180",
      href: "https://www.amazon.com/dp/B0F8PPNW49?tag=teslamodelguy-20",
    },
    learnMore: {
      label: "Best Floor Mats Compared",
      href: "/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats",
    },
  },
  {
    id: "driver-profile",
    num: 7,
    title: "Set Up Your Driver Profile",
    timeEstimate: "5 min",
    content:
      "Adjust your seat, mirrors, and steering wheel to your preferred positions, then save to your driver profile. The car auto-adjusts when your phone key connects. If multiple people drive the car, each person should set up their own profile.",
  },
  {
    id: "regen-braking",
    num: 8,
    title: "Learn One-Pedal Driving",
    timeEstimate: "Practice on first drive",
    content:
      "Tesla's regenerative braking slows the car when you lift off the accelerator. Most owners love it after a day. Go to Controls > Dynamics and make sure regenerative braking is on 'Standard'. Practice in a quiet parking lot — within an hour, you'll barely touch the brake pedal.",
    tip: "One-pedal driving extends your range by recovering energy and reduces brake pad wear significantly.",
  },
  {
    id: "console-organizer",
    num: 9,
    title: "Organize Your Center Console",
    timeEstimate: "5 min",
    content:
      "The Model Y center console is a deep black hole without an organizer. Sunglasses, key cards, coins — everything slides around. A simple tray organizer gives you compartments for daily carry items. The Spigen organizer fits the Juniper perfectly.",
    product: {
      name: "Spigen Center Console Organizer",
      price: "$30–40",
      href: "https://www.amazon.com/dp/B0D19WTR58?tag=teslamodelguy-20",
    },
    learnMore: {
      label: "Best Console Organizers Compared",
      href: "/reviews/organizers/best-tesla-model-y-juniper-center-console-organizer",
    },
  },
  {
    id: "hidden-features",
    num: 10,
    title: "Learn the Hidden Features",
    timeEstimate: "10 min",
    content:
      "Features most new owners miss: Joe Mode (Controls > Safety) reduces chime volume — essential with sleeping kids. Camp Mode runs climate while parked. Dog Mode shows a message telling passersby your pet is safe. The Juniper's ventilated seats have separate controls in the climate menu. Try voice commands: 'Navigate to the nearest Supercharger', 'Open the glovebox', 'Turn on Dog Mode'.",
  },
  {
    id: "charging-routine",
    num: 11,
    title: "Set Up Your Charging Routine",
    timeEstimate: "10 min",
    content:
      "Set your daily charge limit to 80% for battery longevity (Controls > Charging). Enable Scheduled Departure to start charging at the cheapest off-peak rate and have the cabin pre-conditioned when you leave. If you have a home charger, set a location-based charging rule. Only charge to 100% before long road trips.",
    tip: "Download the A Better Route Planner (ABRP) app for road trip planning with Supercharger stops.",
  },
  {
    id: "first-trip",
    num: 12,
    title: "Plan Your First Road Trip",
    timeEstimate: "Whenever you're ready",
    content:
      "Nothing beats the feeling of your first Tesla road trip. Use the in-car navigation — it automatically routes through Superchargers and shows real-time availability. Pack a portable tire inflator (Tesla doesn't include a spare tire), bring your mobile connector for destination charging, and enjoy Autopilot on the highway.",
    product: {
      name: "AstroAI Portable Tire Inflator",
      price: "$30–35",
      href: "https://www.amazon.com/dp/B07QR4Q42L?tag=teslamodelguy-20",
    },
  },
];

/* ───────────────── state ───────────────── */

const STORAGE_KEY = "tmg-new-owner-setup";

interface SetupState {
  completed: Record<string, boolean>;
  currentStep: number;
}

function loadState(): SetupState {
  if (typeof window === "undefined") return { completed: {}, currentStep: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completed: {}, currentStep: 0 };
}

/* ───────────────── component ───────────────── */

export default function NewOwnerSetupPage() {
  const [state, setState] = useState<SetupState>({ completed: {}, currentStep: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setState(loadState());
    setMounted(true);
  }, []);

  const persist = useCallback((next: SetupState) => {
    setState(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }, []);

  const toggleComplete = (id: string) => {
    const completed = { ...state.completed, [id]: !state.completed[id] };
    persist({ ...state, completed });
  };

  const stepRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    persist({ ...state, currentStep: idx });
    requestAnimationFrame(() => {
      stepRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const completedCount = Object.values(state.completed).filter(Boolean).length;
  const pct = Math.round((completedCount / steps.length) * 100);
  const current = steps[state.currentStep] || steps[0];

  return (
    <>
      {/* ── hero ── */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          New Tesla Owner Setup Guide
        </h1>
        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
          {steps.length} steps for your first week with a Tesla Model Y. Track your progress and
          complete at your own pace.
        </p>
        <p className="text-zinc-500 text-sm mt-2">
          Updated for 2025–2026 Model Y Juniper
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ── progress ── */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-zinc-400 mb-2">
            <span>{completedCount} / {steps.length} completed</span>
            <span>{pct}%</span>
          </div>
          <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* ── step navigation (pills) ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {steps.map((s, i) => {
            const done = !!state.completed[s.id];
            const active = i === state.currentStep;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`w-9 h-9 rounded-full text-sm font-medium transition-colors flex items-center justify-center ${
                  active
                    ? "bg-blue-600 text-white ring-2 ring-blue-400"
                    : done
                    ? "bg-green-800 text-green-300"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                {done ? "✓" : s.num}
              </button>
            );
          })}
        </div>

        {/* ── current step detail ── */}
        <div ref={stepRef} className="border border-zinc-700 rounded-2xl p-6 sm:p-8 mb-6 scroll-mt-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs text-zinc-500 uppercase tracking-wider">
              Step {current.num} of {steps.length}
            </span>
            <span className="text-xs text-zinc-600">•</span>
            <span className="text-xs text-zinc-500">⏱ {current.timeEstimate}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">{current.title}</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">{current.content}</p>

          {current.tip && (
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 mb-4">
              <p className="text-sm text-zinc-300">💡 <strong>Tip:</strong> {current.tip}</p>
            </div>
          )}

          {current.product && (
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-4 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-sm font-medium text-white">{current.product.name}</p>
                <p className="text-xs text-zinc-400">{current.product.price}</p>
              </div>
              <a
                href={current.product.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-sm bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Check Price on Amazon →
              </a>
            </div>
          )}

          {current.learnMore && (
            <Link
              href={current.learnMore.href}
              className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
            >
              📖 {current.learnMore.label}
            </Link>
          )}

          {/* ── step actions ── */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-zinc-700">
            <button
              onClick={() => toggleComplete(current.id)}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                state.completed[current.id]
                  ? "bg-green-800 text-green-300 hover:bg-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {state.completed[current.id] ? "✓ Completed" : "Mark Complete"}
            </button>
            {state.currentStep < steps.length - 1 && (
              <button
                onClick={() => goTo(state.currentStep + 1)}
                className="px-4 py-3 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 transition"
              >
                Next →
              </button>
            )}
          </div>
        </div>

        {/* ── previous / next nav ── */}
        <div className="flex justify-between text-sm mb-8">
          {state.currentStep > 0 ? (
            <button
              onClick={() => goTo(state.currentStep - 1)}
              className="text-zinc-400 hover:text-zinc-200"
            >
              ← {steps[state.currentStep - 1].title}
            </button>
          ) : <span />}
          {state.currentStep < steps.length - 1 ? (
            <button
              onClick={() => goTo(state.currentStep + 1)}
              className="text-zinc-400 hover:text-zinc-200"
            >
              {steps[state.currentStep + 1].title} →
            </button>
          ) : <span />}
        </div>

        {/* ── completion ── */}
        {pct === 100 && (
          <section className="mb-8 border border-green-800/50 rounded-xl p-6 bg-green-900/10 text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-2">🎉 You&apos;re All Set!</h2>
            <p className="text-zinc-300 mb-4">
              You&apos;ve completed all {steps.length} setup steps. Enjoy your Tesla!
            </p>
            <Link
              href="/best/tesla-model-y-juniper-accessories"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Explore More Accessories →
            </Link>
          </section>
        )}

        {/* ── SEO content ── */}
        <section className="mt-12 mb-8 prose prose-invert prose-zinc max-w-none">
          <h2>Your First Week with a Tesla Model Y</h2>
          <p>
            Congratulations on your new Tesla Model Y Juniper! The first week is exciting but can feel
            overwhelming with all the new technology. This interactive setup guide walks you through the{" "}
            {steps.length} most important things to do, from essential app setup to accessories that
            protect your investment.
          </p>
          <p>
            Each step includes an estimated time, practical tips from real owners, and product
            recommendations where relevant. Your progress is saved automatically — come back anytime
            to continue where you left off.
          </p>
        </section>
      </div>
    </>
  );
}
