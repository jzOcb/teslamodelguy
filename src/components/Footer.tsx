import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-white mb-3">Tesla Model Guy</h3>
            <p className="text-base text-zinc-200 leading-relaxed">
              Real owner reviews for Tesla accessories. No fluff, just honest recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-2 text-base text-zinc-200">
              <li><Link href="/reviews" className="hover:text-white transition-colors">All Reviews</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">All Guides</Link></li>
              <li><Link href="/best" className="hover:text-white transition-colors">Best Picks</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Top Categories</h4>
            <ul className="space-y-2 text-base text-zinc-200">
              <li><Link href="/reviews/floor-mats" className="hover:text-white transition-colors">Floor Mats</Link></li>
              <li><Link href="/reviews/organizers" className="hover:text-white transition-colors">Organizers</Link></li>
              <li><Link href="/reviews/screen-protectors" className="hover:text-white transition-colors">Screen Protectors</Link></li>
              <li><Link href="/reviews/sunshades" className="hover:text-white transition-colors">Sunshades</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-zinc-700 text-center text-sm text-zinc-300">
          <p>© {new Date().getFullYear()} Tesla Model Guy. Not affiliated with Tesla, Inc.</p>
          <p className="mt-2">Some links are affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
