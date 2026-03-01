import Image from "next/image";

interface ArticleHeroProps {
  image: string;
  alt: string;
  title?: string;
}

export default function ArticleHero({ image, alt, title }: ArticleHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] mb-8 -mx-4 md:-mx-0 md:rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        </div>
      )}
    </div>
  );
}
