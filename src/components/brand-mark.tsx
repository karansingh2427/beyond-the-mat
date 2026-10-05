import { cn } from "@/lib/utils";

type Tone = "ink" | "light" | "copper";

const toneClass: Record<Tone, string> = {
  ink: "text-ink",
  light: "text-primary-foreground",
  copper: "text-copper",
};

export function BrandMark({
  className,
  size = 36,
  tone = "ink",
}: {
  className?: string;
  size?: number;
  tone?: Tone;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={cn("shrink-0", toneClass[tone], className)}
      aria-hidden
    >
      <rect
        x="10"
        y="38"
        width="44"
        height="8"
        rx="1.5"
        fill="currentColor"
        opacity="0.92"
      />
      <rect
        x="12"
        y="40"
        width="40"
        height="1.2"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M32 10v28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M22 36c0-10 4.5-18 10-22 5.5 4 10 12 10 22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function BrandLockup({
  className,
  tone = "ink",
  size = "md",
}: {
  className?: string;
  tone?: "ink" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const mark = size === "lg" ? 52 : size === "sm" ? 28 : 36;
  const text =
    size === "lg"
      ? "font-display text-4xl leading-none sm:text-5xl md:text-6xl"
      : size === "sm"
        ? "font-display text-lg leading-none sm:text-xl"
        : "font-display text-xl leading-none sm:text-2xl";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "light" ? "text-primary-foreground" : "text-ink",
        className,
      )}
    >
      <BrandMark size={mark} tone={tone} />
      <span className={cn(text, "tracking-tight")}>Beyond the Mat</span>
    </span>
  );
}
