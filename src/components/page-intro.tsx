export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="animate-rise max-w-2xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-copper">{eyebrow}</p>
      ) : null}
      <h1 className="font-display mt-2 text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
