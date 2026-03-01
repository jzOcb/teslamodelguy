import Image from "next/image";

interface GradientHeroProps {
  emoji: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function GradientHero({
  emoji,
  title,
  subtitle,
  image = "/images/tesla-hero-global.jpg",
}: GradientHeroProps) {
  return (
    <div className="relative h-[45vh] min-h-[320px] -mx-4 mb-8 overflow-hidden border border-zinc-700 bg-zinc-900 md:mx-0 md:rounded-2xl">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
        <div className="mb-4 text-5xl md:text-6xl" aria-hidden="true">{emoji}</div>
        <p className="text-2xl font-black tracking-tight text-white md:text-4xl">{title}</p>
        {subtitle ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-100 md:text-lg">{subtitle}</p> : null}
      </div>
    </div>
  );
}
