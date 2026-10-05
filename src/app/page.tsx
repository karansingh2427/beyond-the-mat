import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const pillars = [
  {
    href: "/series",
    title: "Series",
    body: "Primary and Intermediate — series → posture → anatomy & alignment. Expandable Mysore literacy spine.",
  },
  {
    href: "/philosophy",
    title: "Philosophy",
    body: "Yoga Sūtras and Bhagavad Gītā as equal study paths, plus Vedic Listen — ritual intonation, not spa chant.",
  },
  {
    href: "/design",
    title: "Class Design",
    body: "Filter by body focus, intention, and contraindication → outline with why-this-order rationale.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-hero-plane relative min-h-[min(92vh,820px)] overflow-hidden text-primary-foreground">
        <div
          aria-hidden
          className="animate-soft-pulse pointer-events-none absolute -right-20 top-20 size-80 rounded-full bg-ochre/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-24 size-56 rounded-full bg-clay/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        />
        <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <div className="animate-rise">
            <BrandMark size={72} tone="light" className="opacity-95" />
          </div>
          <h1 className="sr-only">Beyond the Mat</h1>
          <p className="animate-rise-delay font-display mt-5 max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Beyond the Mat
          </p>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Learn and teach with anatomy, alignment, and classical intelligence —
            serious practice literacy, not another fitness follow-along.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/series"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-clay text-primary-foreground hover:bg-clay/90",
              )}
            >
              Enter the series
            </Link>
            <Link
              href="/philosophy"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
              )}
            >
              Study philosophy
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            One studio. Equal pillars.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Primary + Intermediate as practice spine; Yoga Sūtras and Gītā in
            Philosophy; Class Design weighted equally. Continuity is previewed
            now — full cohorts after people-testing.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block border-t border-copper/40 pt-5 transition-transform hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-display text-2xl text-ink group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link href="/alignment" className="text-primary underline-offset-4 hover:underline">
            Upload alignment feedback
          </Link>
          <Link href="/breath" className="text-primary underline-offset-4 hover:underline">
            Breath starter
          </Link>
          <Link
            href="/philosophy/listen"
            className="text-primary underline-offset-4 hover:underline"
          >
            Vedic Listen
          </Link>
          <Link
            href="/continuity"
            className="text-primary underline-offset-4 hover:underline"
          >
            Continuity preview
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-mist/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper">
              After the retreat
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink sm:text-4xl">
              Continuity belongs in the story
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cohorts, teacher check-ins, and a trusted practice graph come after
              this studio proves itself with real people. Meet the preview —
              Event → Cohort → Practice → Check-ins → Graph.
            </p>
          </div>
          <Link
            href="/continuity"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
          >
            Open Continuity preview
          </Link>
        </div>
      </section>
    </>
  );
}
