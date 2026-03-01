import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the guy behind Tesla Model Guy — a real Model Y Juniper owner sharing honest accessory reviews.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">About Tesla Model Guy</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Hey! I&apos;m a 2025 Tesla Model Y Juniper owner who got tired of generic &quot;best accessories&quot; 
          lists written by people who&apos;ve never sat in the car.
        </p>
        <p className="text-gray-600 mb-4">
          So I started buying, testing, and reviewing every accessory I could find — and sharing 
          honest results with the community.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">What Makes This Different</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><strong>Real ownership</strong> — I drive this car every day</li>
          <li><strong>Real photos</strong> — taken in my actual Model Y Juniper</li>
          <li><strong>Real opinions</strong> — no paid sponsorships or fake reviews</li>
          <li><strong>Juniper-specific</strong> — compatibility verified for the 2025 refresh</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-4">Affiliate Disclosure</h2>
        <p className="text-gray-600">
          Some links on this site are affiliate links. If you buy through them, I earn a small 
          commission at no extra cost to you. This helps keep the site running and allows me to 
          keep testing new accessories.
        </p>
      </div>
    </div>
  );
}
