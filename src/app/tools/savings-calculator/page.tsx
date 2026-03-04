"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ───────────────── defaults ───────────────── */

const DEFAULTS = {
  dailyMiles: 30,
  gasMpg: 28,
  gasPrice: 3.5,       // $/gal
  electricityRate: 0.16, // $/kWh
  teslaEfficiency: 28,  // kWh/100mi (Model Y)
  annualMaintGas: 1200, // $/year gas car maintenance
  annualMaintEV: 400,   // $/year Tesla maintenance
  federalCredit: 7500,
};

/* ───────────────── component ───────────────── */

export default function SavingsCalculatorPage() {
  const [dailyMiles, setDailyMiles] = useState(DEFAULTS.dailyMiles);
  const [gasMpg, setGasMpg] = useState(DEFAULTS.gasMpg);
  const [gasPrice, setGasPrice] = useState(DEFAULTS.gasPrice);
  const [electricityRate, setElectricityRate] = useState(DEFAULTS.electricityRate);
  const [includeTaxCredit, setIncludeTaxCredit] = useState(true);

  const results = useMemo(() => {
    const annualMiles = dailyMiles * 365;

    // Gas costs
    const annualGasGallons = annualMiles / gasMpg;
    const annualGasFuel = annualGasGallons * gasPrice;
    const annualGasTotal = annualGasFuel + DEFAULTS.annualMaintGas;

    // Tesla costs
    const annualTeslaKwh = (annualMiles / 100) * DEFAULTS.teslaEfficiency;
    const annualTeslaFuel = annualTeslaKwh * electricityRate;
    const annualTeslaTotal = annualTeslaFuel + DEFAULTS.annualMaintEV;

    // Savings
    const annualSavings = annualGasTotal - annualTeslaTotal;
    const monthlySavings = annualSavings / 12;
    const fiveYearSavings = annualSavings * 5 + (includeTaxCredit ? DEFAULTS.federalCredit : 0);

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
      annualCO2Saved: Math.round(annualCO2Saved),
    };
  }, [dailyMiles, gasMpg, gasPrice, electricityRate, includeTaxCredit]);

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
        {/* ── inputs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
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
            label="Current Car MPG"
            value={gasMpg}
            onChange={setGasMpg}
            unit="mpg"
            min={10}
            max={60}
            step={1}
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
            className={`w-12 h-6 rounded-full transition-colors relative ${
              includeTaxCredit ? "bg-green-600" : "bg-zinc-700"
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                includeTaxCredit ? "translate-x-6" : "translate-x-0.5"
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
              label="Gas Car"
              sublabel={`$${results.annualGasFuel}/yr fuel + $${DEFAULTS.annualMaintGas}/yr maintenance`}
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
            <li><strong>Gas car maintenance:</strong> ${DEFAULTS.annualMaintGas}/year avg (oil changes, brakes, transmission fluid, etc.)</li>
            <li><strong>Tesla maintenance:</strong> ${DEFAULTS.annualMaintEV}/year avg (tire rotation, cabin air filter, washer fluid)</li>
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
