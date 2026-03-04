import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Tesla Tools — Tesla Model Guy",
  description:
    "Free interactive tools for Tesla owners: delivery day checklist, new owner setup wizard, and EV savings calculator. Built by Tesla owners, for Tesla owners.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    title: "Delivery Day Checklist",
    emoji: "📋",
    description:
      "56-item interactive inspection checklist for your Tesla Model Y delivery. Saves progress, flags issues, and works offline on your phone.",
    href: "/tools/delivery-checklist",
    status: "live" as const,
  },
  {
    title: "New Owner Setup Wizard",
    emoji: "🧙",
    description:
      "Step-by-step guide for your first week with a new Tesla. From app setup to must-have accessories — complete each step at your own pace.",
    href: "/tools/new-owner-setup",
    status: "live" as const,
  },
  {
    title: "Tesla vs Gas Savings Calculator",
    emoji: "⚡",
    description:
      "Find out how much you'd save switching from gas to a Tesla Model Y. Enter your commute, gas price, and electricity rate for a personalized comparison.",
    href: "/tools/savings-calculator",
    status: "coming" as const,
  },
];

export default function ToolsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Free Tesla Tools</h1>
        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
          Interactive tools built by Tesla owners, for Tesla owners. No account needed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="border border-zinc-700 rounded-2xl p-6 flex flex-col hover:border-zinc-500 transition"
            >
              <div className="text-4xl mb-3">{tool.emoji}</div>
              <h2 className="text-lg font-bold text-white mb-2">{tool.title}</h2>
              <p className="text-sm text-zinc-400 flex-1 mb-4">{tool.description}</p>
              {tool.status === "live" ? (
                <Link
                  href={tool.href}
                  className="inline-block bg-green-600 text-white text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                >
                  Use Tool →
                </Link>
              ) : (
                <span className="inline-block bg-zinc-800 text-zinc-500 text-center px-4 py-2 rounded-lg text-sm font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
