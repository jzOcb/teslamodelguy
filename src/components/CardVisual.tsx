interface CardVisualProps {
  emoji: string;
  label: string;
  gradient?: string;
  compact?: boolean;
}

export default function CardVisual(props: CardVisualProps) {
  const { emoji, label, compact = false } = props;

  return (
    <div
      className={`relative rounded-xl border border-zinc-700 bg-zinc-900 px-4 ${compact ? "py-3" : "py-4"}`}
    >
      <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-blue-400/70" />
      <div className={`flex items-center gap-4 ${compact ? "min-h-12" : "min-h-16"}`}>
        <span className={`${compact ? "text-2xl" : "text-3xl"} leading-none`} aria-hidden="true">
          {emoji}
        </span>
        <span
          className={`${compact ? "text-xs" : "text-sm"} font-semibold uppercase tracking-wider text-zinc-100`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
