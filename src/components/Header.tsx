import Link from "next/link";

const navLinks = [
  { href: "/reviews", label: "Reviews" },
  { href: "/guides", label: "Guides" },
  { href: "/best", label: "Best Picks" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-700/70 sticky top-0 z-50">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white tracking-tight">
            Tesla Model <span className="text-cyan-400">Guy</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-zinc-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <ul className="mt-4 flex md:hidden gap-4 overflow-x-auto pb-1 text-sm font-semibold text-zinc-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="whitespace-nowrap hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
