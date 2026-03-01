import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Tesla Exterior - Reviews & Recommendations",
  description: "Honest reviews of the best Tesla Exterior. Tested by a real owner with real photos.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Best Tesla Exterior</h1>
      <p className="text-gray-600">In-depth reviews coming soon. We are testing products now.</p>
    </div>
  );
}
