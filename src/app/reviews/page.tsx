import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - Tesla Model Y Juniper Accessories",
  description: "Browse our reviews for Tesla Model Y Juniper accessories — tested by a real owner.",
};

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>
      <p className="text-gray-600">Coming soon — we are working on detailed reviews for Model Y Juniper accessories.</p>
    </div>
  );
}
