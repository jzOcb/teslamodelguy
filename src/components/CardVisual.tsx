interface CardVisualProps {
  emoji: string;
  label: string;
  gradient?: string;
  compact?: boolean;
}

export default function CardVisual({
  emoji,
  label,
  gradient = "from-zinc-800 via-sky-900 to-blue-700",
  compact = false,
}: CardVisualProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 ${compact ? "h-20" : "h-32"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/15 blur-2xl" />
      <div className="relative h-full flex items-end justify-between p-4">
        <span className={`${compact ? "text-2xl" : "text-3xl"}`} aria-hidden="true">{emoji}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-100/90">{label}</span>
      </div>
    </div>
  );
}
