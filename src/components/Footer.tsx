import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Tesla Model Guy</h3>
            <p className="text-sm text-gray-600">
              Real owner reviews for Tesla Model Y Juniper accessories.
              No fluff, just honest recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/reviews/floor-mats" className="hover:text-gray-900">Floor Mats</Link></li>
              <li><Link href="/reviews/organizers" className="hover:text-gray-900">Organizers</Link></li>
              <li><Link href="/reviews/screen-protectors" className="hover:text-gray-900">Screen Protectors</Link></li>
              <li><Link href="/reviews/sunshades" className="hover:text-gray-900">Sunshades</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://reddit.com/r/TeslaModelY" target="_blank" rel="noopener" className="hover:text-gray-900">Reddit</a></li>
              <li><a href="https://pinterest.com/teslamodelguy" target="_blank" rel="noopener" className="hover:text-gray-900">Pinterest</a></li>
              <li><a href="https://youtube.com/@teslamodelguy" target="_blank" rel="noopener" className="hover:text-gray-900">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tesla Model Guy. Not affiliated with Tesla, Inc.</p>
          <p className="mt-1">Some links are affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
