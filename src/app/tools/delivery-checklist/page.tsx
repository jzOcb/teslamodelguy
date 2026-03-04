"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ───────────────── checklist data ───────────────── */

interface CheckItem {
  id: string;
  label: string;
  tip?: string;
}

interface CheckCategory {
  title: string;
  emoji: string;
  items: CheckItem[];
}

const categories: CheckCategory[] = [
  {
    title: "Before You Go",
    emoji: "📋",
    items: [
      { id: "doc-1", label: "Driver's license & proof of insurance ready" },
      { id: "doc-2", label: "Tesla app downloaded and logged in" },
      { id: "doc-3", label: "Financing / payment method confirmed" },
      { id: "doc-4", label: "Phone charged (you'll need the flashlight)" },
      { id: "doc-5", label: "Printed or saved this checklist on your phone" },
    ],
  },
  {
    title: "Exterior — Paint & Body",
    emoji: "🎨",
    items: [
      { id: "ext-p1", label: "VIN on windshield matches your paperwork" },
      { id: "ext-p2", label: "Correct exterior color, wheels, and trim" },
      { id: "ext-p3", label: "No scratches, chips, or dents on all panels", tip: "Use your phone flashlight and check under direct light" },
      { id: "ext-p4", label: "No paint swirls or orange peel texture" },
      { id: "ext-p5", label: "Panel gaps are even and symmetrical on both sides" },
      { id: "ext-p6", label: "Hood/frunk sits flush with quarter panels" },
      { id: "ext-p7", label: "All doors close flush — none stick out" },
      { id: "ext-p8", label: "Trunk/hatch alignment is even" },
      { id: "ext-p9", label: "Black rocker panels and trim undamaged" },
      { id: "ext-p10", label: "No transport film residue or tape marks" },
    ],
  },
  {
    title: "Exterior — Glass & Lights",
    emoji: "💡",
    items: [
      { id: "ext-g1", label: "Windshield — no chips or cracks" },
      { id: "ext-g2", label: "Glass roof — no scratches or defects" },
      { id: "ext-g3", label: "All side windows — no chips" },
      { id: "ext-g4", label: "Headlights work (low beam & high beam)" },
      { id: "ext-g5", label: "Fog lights work" },
      { id: "ext-g6", label: "Tail lights & brake lights work" },
      { id: "ext-g7", label: "Turn signals work (front, rear, side repeaters)" },
      { id: "ext-g8", label: "No condensation inside any light housing" },
    ],
  },
  {
    title: "Exterior — Wheels & Doors",
    emoji: "🛞",
    items: [
      { id: "ext-w1", label: "All 4 rims — no curb rash or scratches" },
      { id: "ext-w2", label: "Hubcaps/aero covers present and secure" },
      { id: "ext-w3", label: "Tires — no debris (nails, screws), proper inflation ~42 PSI" },
      { id: "ext-w4", label: "All 4 doors open and close smoothly" },
      { id: "ext-w5", label: "Frunk opens, closes, and latches properly" },
      { id: "ext-w6", label: "Power liftgate opens fully and closes without catching seal" },
      { id: "ext-w7", label: "Charge port opens and closes smoothly" },
    ],
  },
  {
    title: "Interior — Seats & Surfaces",
    emoji: "💺",
    items: [
      { id: "int-s1", label: "Correct interior color matches your order" },
      { id: "int-s2", label: "No scuffs, stains, or tears on seats" },
      { id: "int-s3", label: "Driver seat adjusts (forward, back, recline, height)" },
      { id: "int-s4", label: "Passenger seat adjusts properly" },
      { id: "int-s5", label: "All seatbelts extend and retract smoothly" },
      { id: "int-s6", label: "Rear seats fold down using both seat and trunk buttons" },
      { id: "int-s7", label: "Touchscreen — no scratches or dead pixels", tip: "Check before installing a screen protector!" },
      { id: "int-s8", label: "Center console, dash, and trim — no scratches or dings" },
      { id: "int-s9", label: "Glovebox opens and closes (via touchscreen)" },
      { id: "int-s10", label: "Carpet floor mats included" },
    ],
  },
  {
    title: "Interior — Controls & Windows",
    emoji: "🪟",
    items: [
      { id: "int-c1", label: "All 4 windows go fully up and down smoothly" },
      { id: "int-c2", label: "One-click window operation works" },
      { id: "int-c3", label: "Windshield wipers and washer fluid work" },
      { id: "int-c4", label: "Steering wheel scroll buttons and stalks respond" },
      { id: "int-c5", label: "Sun visors move smoothly, mirrors intact" },
      { id: "int-c6", label: "Rear-view mirror adjusts properly" },
    ],
  },
  {
    title: "Electronics & Connectivity",
    emoji: "🔌",
    items: [
      { id: "elec-1", label: "Wireless phone charger works (both sides)" },
      { id: "elec-2", label: "Front USB-C ports charge a device" },
      { id: "elec-3", label: "Rear USB-C ports charge a device" },
      { id: "elec-4", label: "Backup camera shows clear image" },
      { id: "elec-5", label: "Turn signal cameras display on screen" },
      { id: "elec-6", label: "Bluetooth pairs with your phone" },
      { id: "elec-7", label: "Audio plays from all speakers — no distortion" },
      { id: "elec-8", label: "AC and heating work, heated/ventilated seats respond" },
      { id: "elec-9", label: "Both key cards start the vehicle" },
      { id: "elec-10", label: "Phone key locks and unlocks reliably" },
    ],
  },
  {
    title: "Final Steps",
    emoji: "✅",
    items: [
      { id: "fin-1", label: "Software is up to date (ask delivery team to update if not)" },
      { id: "fin-2", label: "Short test drive — listen for rattles over bumps" },
      { id: "fin-3", label: "Mobile connector and J1772 adapter included" },
      { id: "fin-4", label: "Document any issues with delivery team BEFORE signing", tip: "Tesla cosmetic warranty: 24 hours or 100 miles after delivery" },
    ],
  },
];

const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

/* ───────────────── state types ───────────────── */

interface CheckState {
  checked: Record<string, boolean>;
  issues: Record<string, string>;
}

const STORAGE_KEY = "tmg-delivery-checklist";

function loadState(): CheckState {
  if (typeof window === "undefined") return { checked: {}, issues: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { checked: {}, issues: {} };
}

/* ───────────────── component ───────────────── */

export default function DeliveryChecklistPage() {
  const [state, setState] = useState<CheckState>({ checked: {}, issues: {} });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setState(loadState());
    setMounted(true);
  }, []);

  const persist = useCallback((next: CheckState) => {
    setState(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  }, []);

  const toggle = (id: string) => {
    const next = { ...state, checked: { ...state.checked, [id]: !state.checked[id] } };
    persist(next);
  };

  const toggleIssue = (id: string) => {
    const issues = { ...state.issues };
    if (issues[id] !== undefined) {
      delete issues[id];
    } else {
      issues[id] = "";
    }
    persist({ ...state, issues });
  };

  const setIssueNote = (id: string, note: string) => {
    persist({ ...state, issues: { ...state.issues, [id]: note } });
  };

  const reset = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      persist({ checked: {}, issues: {} });
    }
  };

  const checkedCount = Object.values(state.checked).filter(Boolean).length;
  const issueCount = Object.keys(state.issues).length;
  const pct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <>
      {/* ── hero ── */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4 text-center print:hidden">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Tesla Model Y Delivery Day Checklist
        </h1>
        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
          Don&apos;t drive off the lot without checking these {totalItems} things. Interactive, saves your
          progress, and works offline on your phone.
        </p>
        <p className="text-zinc-500 text-sm mt-2">
          Updated for 2025–2026 Model Y Juniper
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ── progress bar ── */}
        <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur py-3 mb-6 print:hidden">
          <div className="flex items-center justify-between text-sm text-zinc-400 mb-1">
            <span>{checkedCount} / {totalItems} checked</span>
            <span className="flex gap-3">
              {issueCount > 0 && (
                <span className="text-red-400">⚠ {issueCount} issue{issueCount > 1 ? "s" : ""}</span>
              )}
              <span>{pct}%</span>
            </span>
          </div>
          <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
          {mounted && checkedCount > 0 && (
            <button onClick={reset} className="text-xs text-zinc-500 hover:text-zinc-300 mt-1">
              Reset checklist
            </button>
          )}
        </div>

        {/* ── categories ── */}
        {categories.map((cat) => {
          const catChecked = cat.items.filter((i) => state.checked[i.id]).length;
          return (
            <section key={cat.title} className="mb-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>{cat.emoji}</span>
                <span>{cat.title}</span>
                <span className="text-sm font-normal text-zinc-500 ml-auto">
                  {catChecked}/{cat.items.length}
                </span>
              </h2>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const checked = !!state.checked[item.id];
                  const hasIssue = state.issues[item.id] !== undefined;
                  return (
                    <div key={item.id} className="rounded-lg border border-zinc-700 p-3">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggle(item.id)}
                          className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                            checked
                              ? "bg-green-600 border-green-600 text-white"
                              : "border-zinc-500 text-transparent hover:border-zinc-300"
                          }`}
                          aria-label={checked ? "Uncheck" : "Check"}
                        >
                          {checked && "✓"}
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm ${checked ? "text-zinc-500 line-through" : "text-zinc-200"}`}>
                            {item.label}
                          </p>
                          {item.tip && !checked && (
                            <p className="text-xs text-zinc-500 mt-1">💡 {item.tip}</p>
                          )}
                        </div>
                        <button
                          onClick={() => toggleIssue(item.id)}
                          className={`flex-shrink-0 text-xs px-2 py-1 rounded transition-colors ${
                            hasIssue
                              ? "bg-red-900/50 text-red-400 border border-red-800"
                              : "text-zinc-500 hover:text-red-400 hover:bg-red-900/20"
                          }`}
                        >
                          {hasIssue ? "⚠ Issue" : "Flag"}
                        </button>
                      </div>
                      {hasIssue && (
                        <div className="mt-2 ml-9">
                          <input
                            type="text"
                            placeholder="Describe the issue..."
                            value={state.issues[item.id] || ""}
                            onChange={(e) => setIssueNote(item.id, e.target.value)}
                            className="w-full bg-zinc-800 border border-red-800/50 rounded px-3 py-1.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* ── issue summary (print-friendly) ── */}
        {issueCount > 0 && (
          <section className="mb-8 border border-red-800/50 rounded-xl p-6 bg-red-900/10">
            <h2 className="text-lg font-bold text-red-400 mb-3">⚠ Issues Found ({issueCount})</h2>
            <ul className="space-y-2">
              {Object.entries(state.issues).map(([id, note]) => {
                const item = categories.flatMap((c) => c.items).find((i) => i.id === id);
                return (
                  <li key={id} className="text-sm text-zinc-300">
                    <span className="text-red-400 font-medium">•</span>{" "}
                    {item?.label || id}
                    {note && <span className="text-zinc-400"> — {note}</span>}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => window.print()}
              className="mt-4 text-sm bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition print:hidden"
            >
              Print Issue Report
            </button>
          </section>
        )}

        {/* ── completion CTA ── */}
        {pct === 100 && (
          <section className="mb-8 border border-green-800/50 rounded-xl p-6 bg-green-900/10 text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-2">🎉 All Clear!</h2>
            <p className="text-zinc-300 mb-6">
              Your Tesla passed inspection. Now protect your investment with these must-have accessories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { name: "Screen Protector", price: "$30–35", href: "https://www.amazon.com/dp/B0CHV4WP2C?tag=teslamodelguy-20" },
                { name: "All-Weather Floor Mats", price: "$150–180", href: "https://www.amazon.com/dp/B0F8PPNW49?tag=teslamodelguy-20" },
                { name: "Console Organizer", price: "$30–40", href: "https://www.amazon.com/dp/B0D19WTR58?tag=teslamodelguy-20" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block border border-zinc-700 rounded-xl p-4 hover:border-green-700 transition"
                >
                  <p className="font-semibold text-white">{p.name}</p>
                  <p className="text-sm text-zinc-400">{p.price}</p>
                  <p className="text-xs text-green-400 mt-2">Check Price →</p>
                </a>
              ))}
            </div>
            <Link
              href="/best/tesla-model-y-juniper-accessories"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              See All Must-Have Accessories →
            </Link>
          </section>
        )}

        {/* ── always-visible CTA ── */}
        {pct < 100 && (
          <section className="mb-8 border border-zinc-700 rounded-xl p-6 text-center print:hidden">
            <p className="text-zinc-400 text-sm mb-3">Looking for accessories for your new Tesla?</p>
            <Link
              href="/best/tesla-model-y-juniper-accessories"
              className="inline-block bg-zinc-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-600 transition"
            >
              Browse Top 10 Must-Have Accessories →
            </Link>
          </section>
        )}

        {/* ── SEO content ── */}
        <section className="mt-12 mb-8 prose prose-invert prose-zinc max-w-none">
          <h2>Why You Need a Tesla Delivery Checklist</h2>
          <p>
            Tesla&apos;s quality control has improved significantly with the Model Y Juniper refresh, but
            issues still slip through. Panel gaps, paint defects, and software glitches are the most common
            problems reported by new owners on Reddit. Tesla&apos;s cosmetic warranty gives you just{" "}
            <strong>24 hours or 100 miles</strong> after delivery to report issues — so a systematic inspection
            on delivery day isn&apos;t optional, it&apos;s essential.
          </p>
          <p>
            This interactive checklist covers {totalItems} items across {categories.length} categories, from paint
            inspection to electronics testing. It saves your progress on your phone so you can pick up where you
            left off, and lets you flag issues with notes to show your delivery advisor.
          </p>
          <h2>Tips for a Smooth Tesla Delivery</h2>
          <ul>
            <li><strong>Arrive early</strong> — give yourself at least 45 minutes for inspection</li>
            <li><strong>Bring a friend</strong> — a second pair of eyes catches more</li>
            <li><strong>Use your phone flashlight</strong> — essential for checking paint under indoor lighting</li>
            <li><strong>Don&apos;t feel rushed</strong> — you&apos;re spending $45,000+, take your time</li>
            <li><strong>Document everything</strong> — photos of any issues before signing</li>
          </ul>
        </section>
      </div>

      {/* ── print styles ── */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          nav, footer { display: none !important; }
        }
      `}</style>
    </>
  );
}
