import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Tesla Model <span className="text-blue-600">Guy</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/reviews" className="hover:text-gray-900 transition">Reviews</Link>
          <Link href="/guides" className="hover:text-gray-900 transition">Guides</Link>
          <Link href="/best" className="hover:text-gray-900 transition">Best Picks</Link>
          <Link href="/about" className="hover:text-gray-900 transition">About</Link>
        </div>
      </nav>
    </header>
  );
}
