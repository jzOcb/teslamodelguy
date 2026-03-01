import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-zinc-300 mb-4">404</h1>
      <p className="text-xl text-zinc-400 mb-8">Page not found — but we have plenty of Tesla accessories to explore.</p>
      <Link href="/" className="bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition">
        Back to Home →
      </Link>
    </div>
  );
}
