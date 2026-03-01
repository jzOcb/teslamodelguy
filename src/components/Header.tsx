import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Tesla Model <span className="text-blue-500">Guy</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/reviews" className="hover:text-white transition">Reviews</Link>
          <Link href="/guides" className="hover:text-white transition">Guides</Link>
          <Link href="/best" className="hover:text-white transition">Best Picks</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
        </div>
      </nav>
    </header>
  );
}
