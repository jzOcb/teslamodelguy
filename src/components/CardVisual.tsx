import Image from "next/image";

interface CardVisualProps {
  emoji: string;
  label: string;
  image?: string;
  compact?: boolean;
}

export default function CardVisual(props: CardVisualProps) {
  const { emoji, label, image, compact = false } = props;

  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 ${compact ? "h-24" : "h-36"}`}>
        <Image
          src={image}
          alt={`${label} product photo`}
          fill
          sizes={compact ? "(min-width: 768px) 220px, 100vw" : "100vw"}
          className="object-contain bg-white p-2"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 ${compact ? "h-24" : "h-36"} flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className={`${compact ? "text-3xl" : "text-4xl"} leading-none`} aria-hidden="true">
          {emoji}
        </span>
        <span className={`${compact ? "text-xs" : "text-sm"} font-semibold uppercase tracking-[0.14em] text-zinc-300`}>
          {label}
        </span>
      </div>
    </div>
  );
}
