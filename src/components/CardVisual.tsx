interface CardVisualProps {
  emoji: string;
  label: string;
  compact?: boolean;
}

export default function CardVisual(props: CardVisualProps) {
  const { emoji, label, compact = false } = props;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 ${compact ? "h-24" : "h-36"} flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className={`${compact ? "text-3xl" : "text-4xl"} leading-none`} aria-hidden="true">
          {emoji}
        </span>
        <span
          className={`${compact ? "text-xs" : "text-sm"} font-semibold uppercase tracking-[0.14em] text-zinc-300`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
