interface GradientHeroProps {
  emoji: string;
  title: string;
  subtitle?: string;
  gradient?: string;
}

const DEFAULT_GRADIENT = "from-slate-900 via-blue-900 to-cyan-700";

export default function GradientHero({
  emoji,
  title,
  subtitle,
  gradient = DEFAULT_GRADIENT,
}: GradientHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] -mx-4 md:mx-0 md:rounded-2xl overflow-hidden mb-8 border border-zinc-700 bg-zinc-900">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
        <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">{emoji}</div>
        <p className="text-2xl md:text-4xl font-black text-white tracking-tight">{title}</p>
        {subtitle ? <p className="text-base md:text-lg text-zinc-100 mt-3 max-w-2xl leading-relaxed">{subtitle}</p> : null}
      </div>
    </div>
  );
}
