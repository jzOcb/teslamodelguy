import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-white mb-3">Tesla Model Guy</h3>
            <p className="text-sm text-gray-400">
              Real owner reviews for Tesla accessories.
              No fluff, just honest recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/reviews/floor-mats" className="hover:text-white transition">Floor Mats</Link></li>
              <li><Link href="/reviews/organizers" className="hover:text-white transition">Organizers</Link></li>
              <li><Link href="/reviews/screen-protectors" className="hover:text-white transition">Screen Protectors</Link></li>
              <li><Link href="/reviews/sunshades" className="hover:text-white transition">Sunshades</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tesla Model Guy. Not affiliated with Tesla, Inc.</p>
          <p className="mt-1">Some links are affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
