"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ───────────────── car tiers ───────────────── */

type CarTier = "economy" | "midrange" | "premium" | "luxury";

const CAR_TIERS: Record<CarTier, {
  label: string;
  examples: string;
  mpg: number;
  annualMaint: number;
  maintBreakdown: string;
}> = {
  economy: {
    label: "Economy",
    examples: "Civic, Corolla, Mazda3",
    mpg: 32,
    annualMaint: 850,
    maintBreakdown: "oil changes, brakes, basic upkeep",
  },
  midrange: {
    label: "Mid-Range",
    examples: "Camry, Accord, RAV4",
    mpg: 28,
    annualMaint: 1200,
    maintBreakdown: "oil changes, brakes, transmission fluid, filters",
  },
  premium: {
    label: "Premium",
    examples: "BMW 3 Series, Audi A4, Lexus",
    mpg: 24,
    annualMaint: 1800,
    maintBreakdown: "synthetic oil, premium brakes, dealer service intervals",
  },
  luxury: {
    label: "Luxury / Sport",
    examples: "Porsche, Mercedes S-Class, BMW M",
    mpg: 20,
    annualMaint: 3200,
    maintBreakdown: "specialized service, premium parts, frequent brake/tire wear",
  },
};

/* ───────────────── defaults ───────────────── */

const DEFAULTS = {
  dailyMiles: 30,
  gasPrice: 3.5,       // $/gal
  electricityRate: 0.16, // $/kWh
  teslaEfficiency: 28,  // kWh/100mi (Model Y)
  annualMaintEV: 400,   // $/year Tesla maintenance
  federalCredit: 7500,
};

/* ───────────────── component ───────────────── */

export default function SavingsCalculatorPage() {
  const [carTier, setCarTier] = useState<CarTier>("midrange");
  const [dailyMiles, setDailyMiles] = useState(DEFAULTS.dailyMiles);
  const [gasPrice, setGasPrice] = useState(DEFAULTS.gasPrice);
  const [electricityRate, setElectricityRate] = useState(DEFAULTS.electricityRate);
  const [includeTaxCredit, setIncludeTaxCredit] = useState(true);

  const tier = CAR_TIERS[carTier];

  const results = useMemo(() => {
    const annualMiles = dailyMiles * 365;

    // Gas costs
    const annualGasGallons = annualMiles / tier.mpg;
    const annualGasFuel = annualGasGallons * gasPrice;
    const annualGasTotal = annualGasFuel + tier.annualMaint;

    // Tesla costs
    const annualTeslaKwh = (annualMiles / 100) * DEFAULTS.teslaEfficiency;
    const annualTeslaFuel = annualTeslaKwh * electricityRate;
    const annualTeslaTotal = annualTeslaFuel + DEFAULTS.annualMaintEV;

    // Savings
    const annualSavings = annualGasTotal - annualTeslaTotal;
    const monthlySavings = annualSavings / 12;
    const fiveYearSavings = annualSavings * 5 + (includeTaxCredit ? DEFAULTS.federalCredit : 0);

    // Maintenance savings alone
    const annualMaintSavings = tier.annualMaint - DEFAULTS.annualMaintEV;

    // CO2 (EPA avg: 8,887 grams CO2 per gallon of gasoline)
    const annualCO2Saved = (annualGasGallons * 8887) / 1000; // kg

    return {
      annualMiles,
      annualGasFuel: Math.round(annualGasFuel),
      annualTeslaFuel: Math.round(annualTeslaFuel),
      annualGasTotal: Math.round(annualGasTotal),
      annualTeslaTotal: Math.round(annualTeslaTotal),
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      fiveYearSavings: Math.round(fiveYearSavings),
      annualMaintSavings: Math.round(annualMaintSavings),
      annualCO2Saved: Math.round(annualCO2Saved),
    };
  }, [dailyMiles, tier, gasPrice, electricityRate, includeTaxCredit]);

  const maxBar = Math.max(results.annualGasTotal, results.annualTeslaTotal);

  return (
    <>
      {/* ── hero ── */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Tesla vs Gas Savings Calculator
        </h1>
        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
          How much would you save by switching to a Tesla Model Y? Enter your driving habits for a
          personalized 5-year cost comparison.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* ── car tier selector ── */}
        <div className="mb-8">
          <label className="text-sm text-zinc-400 block mb-3">What kind of car are you comparing?</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(CAR_TIERS) as CarTier[]).map((key) => {
              const t = CAR_TIERS[key];
              const active = carTier === key;
              return (
                <button
                  key={key}
                  onClick={() => setCarTier(key)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    active
                      ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500/40"
                      : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-600"
                  }`}
                >
                  <p className={`text-sm font-semibold ${active ? "text-blue-400" : "text-white"}`}>
                    {t.label}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">{t.examples}</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-xs text-zinc-400">{t.mpg} mpg</span>
                    <span className="text-xs text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400">${t.annualMaint.toLocaleString()}/yr</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── inputs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <InputCard
            label="Daily Commute"
            value={dailyMiles}
            onChange={setDailyMiles}
            unit="miles"
            min={1}
            max={200}
            step={5}
          />
          <InputCard
            label="Gas Price"
            value={gasPrice}
            onChange={setGasPrice}
            unit="$/gal"
            min={1}
            max={8}
            step={0.1}
            prefix="$"
          />
          <InputCard
            label="Electricity Rate"
            value={electricityRate}
            onChange={setElectricityRate}
            unit="$/kWh"
            min={0.05}
            max={0.5}
            step={0.01}
            prefix="$"
          />
        </div>

        {/* ── tax credit toggle ── */}
        <div className="flex items-center gap-3 mb-10 text-sm">
          <button
            onClick={() => setIncludeTaxCredit(!includeTaxCredit)}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
              includeTaxCredit ? "bg-green-600" : "bg-zinc-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                includeTaxCredit ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-zinc-300">
            Include ${DEFAULTS.federalCredit.toLocaleString()} federal EV tax credit
          </span>
        </div>

        {/* ── results ── */}
        <div className="border border-zinc-700 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Your Savings</h2>

          {/* big number */}
          <div className="text-center mb-8">
            <p className="text-5xl sm:text-6xl font-bold text-green-400">
              ${results.fiveYearSavings.toLocaleString()}
            </p>
            <p className="text-zinc-400 mt-1">estimated 5-year savings</p>
          </div>

          {/* comparison bars */}
          <div className="space-y-4 mb-8">
            <BarRow
              label={`${tier.label} Gas Car`}
              sublabel={`$${results.annualGasFuel}/yr fuel + $${tier.annualMaint.toLocaleString()}/yr maintenance`}
              value={results.annualGasTotal}
              max={maxBar}
              color="bg-red-500"
            />
            <BarRow
              label="Tesla Model Y"
              sublabel={`$${results.annualTeslaFuel}/yr charging + $${DEFAULTS.annualMaintEV}/yr maintenance`}
              value={results.annualTeslaTotal}
              max={maxBar}
              color="bg-green-500"
            />
          </div>

          {/* maintenance breakdown */}
          <div className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-5 mb-8">
            <h3 className="text-sm font-semibold text-white mb-3">🔧 Maintenance Cost Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">{tier.label} Gas Car</p>
                <p className="text-xl font-bold text-red-400">${tier.annualMaint.toLocaleString()}<span className="text-sm text-zinc-500 font-normal">/yr</span></p>
                <p className="text-xs text-zinc-500 mt-1">{tier.maintBreakdown}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Tesla Model Y</p>
                <p className="text-xl font-bold text-green-400">${DEFAULTS.annualMaintEV}<span className="text-sm text-zinc-500 font-normal">/yr</span></p>
                <p className="text-xs text-zinc-500 mt-1">tire rotation, cabin air filter, washer fluid</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-700/50">
              <p className="text-sm text-zinc-300">
                You save <span className="text-green-400 font-semibold">${results.annualMaintSavings.toLocaleString()}/yr</span> on maintenance alone — that&apos;s <span className="text-green-400 font-semibold">${Math.round(results.annualMaintSavings / 12)}/mo</span> back in your pocket.
              </p>
            </div>
          </div>

          {/* stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatBox label="Monthly Savings" value={`$${results.monthlySavings}`} />
            <StatBox label="Annual Savings" value={`$${results.annualSavings.toLocaleString()}`} />
            <StatBox label="Annual Miles" value={results.annualMiles.toLocaleString()} />
            <StatBox label="CO₂ Saved/Year" value={`${results.annualCO2Saved.toLocaleString()} kg`} />
          </div>
        </div>

        {/* ── CTA ── */}
        <section className="border border-zinc-700 rounded-xl p-6 text-center mb-8">
          <h3 className="text-lg font-bold text-white mb-2">Ready to Make the Switch?</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Here&apos;s everything you need for day one with your new Tesla:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/delivery-checklist"
              className="text-sm bg-zinc-700 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 transition"
            >
              📋 Delivery Checklist
            </Link>
            <Link
              href="/tools/new-owner-setup"
              className="text-sm bg-zinc-700 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 transition"
            >
              🧙 Setup Guide
            </Link>
            <Link
              href="/best/tesla-model-y-juniper-accessories"
              className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              🛒 Must-Have Accessories
            </Link>
          </div>
        </section>

        {/* ── methodology ── */}
        <section className="mt-12 mb-8 prose prose-invert prose-zinc max-w-none">
          <h2>How We Calculate</h2>
          <ul>
            <li><strong>Tesla efficiency:</strong> {DEFAULTS.teslaEfficiency} kWh per 100 miles (EPA-rated Model Y Long Range)</li>
            <li><strong>Gas car maintenance</strong> varies by tier:
              <ul>
                <li>Economy (Civic, Corolla): ~$850/yr</li>
                <li>Mid-Range (Camry, RAV4): ~$1,200/yr</li>
                <li>Premium (BMW 3, Audi A4): ~$1,800/yr</li>
                <li>Luxury/Sport (Porsche, Mercedes S): ~$3,200/yr</li>
              </ul>
              Based on AAA and RepairPal average annual ownership cost data.
            </li>
            <li><strong>Tesla maintenance:</strong> ${DEFAULTS.annualMaintEV}/year avg (tire rotation, cabin air filter, washer fluid — no oil, no transmission, no exhaust system)</li>
            <li><strong>Federal tax credit:</strong> ${DEFAULTS.federalCredit.toLocaleString()} (subject to eligibility and income limits)</li>
            <li><strong>CO₂ calculation:</strong> EPA average of 8,887 grams CO₂ per gallon of gasoline burned</li>
          </ul>
          <p>
            This calculator provides estimates based on the inputs you provide. Actual savings depend on
            driving habits, local energy rates, vehicle condition, and other factors. Insurance costs are not
            included as they vary significantly by driver and location.
          </p>
        </section>
      </div>
    </>
  );
}

/* ───────────────── sub-components ───────────────── */

function InputCard({
  label, value, onChange, unit, min, max, step, prefix,
}: {
  label: string; value: number; onChange: (v: number) => void;
  unit: string; min: number; max: number; step: number; prefix?: string;
}) {
  return (
    <div className="border border-zinc-700 rounded-xl p-4">
      <label className="text-sm text-zinc-400 block mb-2">{label}</label>
      <div className="flex items-baseline gap-1 mb-3">
        {prefix && <span className="text-2xl font-bold text-white">{prefix}</span>}
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-sm text-zinc-500 ml-1">{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-blue-500"
      />
      <div className="flex justify-between text-xs text-zinc-600 mt-1">
        <span>{prefix}{min}</span>
        <span>{prefix}{max}</span>
      </div>
    </div>
  );
}

function BarRow({
  label, sublabel, value, max, color,
}: {
  label: string; sublabel: string; value: number; max: number; color: string;
}) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm font-bold text-white">${value.toLocaleString()}/yr</span>
      </div>
      <div className="w-full h-6 bg-zinc-800 rounded-lg overflow-hidden">
        <div
          className={`h-full ${color} rounded-lg transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-zinc-500 mt-1">{sublabel}</p>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-3 text-center">
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="text-xs text-zinc-500">{label}</p>
    </div>
  );
}
