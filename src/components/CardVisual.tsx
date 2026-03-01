import Image from "next/image";

interface CardVisualProps {
  emoji: string;
  label: string;
  image?: string;
  alt?: string;
  compact?: boolean;
}

export default function CardVisual(props: CardVisualProps) {
  const {
    emoji,
    label,
    image = "/images/tesla-interior.jpg",
    alt = `${label} background`,
    compact = false,
  } = props;

  return (
    <div className={`relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 ${compact ? "h-24" : "h-36"}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes={compact ? "(min-width: 768px) 220px, 100vw" : "100vw"}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className={`${compact ? "text-xl" : "text-2xl"} leading-none mr-3`} aria-hidden="true">
          {emoji}
        </span>
        <span className={`${compact ? "text-xs" : "text-sm"} font-semibold uppercase tracking-[0.14em] text-zinc-100`}>
          {label}
        </span>
      </div>
    </div>
  );
}
