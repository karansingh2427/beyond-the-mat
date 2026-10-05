import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PostureFigure } from "@/components/posture-figure";
import {
  allPostures,
  getPosture,
  getSeriesMeta,
} from "@/data/postures";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return allPostures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/series/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const posture = getPosture(slug);
  if (!posture) return { title: "Posture" };
  const series = getSeriesMeta(posture.series);
  return {
    title: posture.sanskrit,
    description: `${posture.english} — anatomy and alignment for ${series.label}.`,
  };
}

export default async function PosturePage({
  params,
}: PageProps<"/series/[slug]">) {
  const { slug } = await params;
  const posture = getPosture(slug);
  if (!posture) notFound();
  const series = getSeriesMeta(posture.series);
  const seriesHref =
    posture.series === "intermediate"
      ? "/series?path=intermediate"
      : "/series";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href={seriesHref}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {series.label}
      </Link>

      <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="animate-rise min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{series.shortLabel}</Badge>
            <Badge variant="secondary">{posture.section}</Badge>
            <Badge variant="outline">#{posture.order}</Badge>
          </div>
          <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            {posture.sanskrit}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {posture.english}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <section>
              <h2 className="text-xs uppercase tracking-[0.18em] text-copper">
                Stabilize
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {posture.stabilize.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.18em] text-copper">
                Move
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {posture.move.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-ink">Focus</h2>
            <p className="mt-2 text-muted-foreground">
              {posture.focus.join(" · ")}
            </p>
          </section>

          <section className="mt-8 rounded-xl border border-border/80 bg-card/70 p-5">
            <h2 className="font-display text-2xl text-ink">Alignment points</h2>
            <ul className="mt-4 space-y-3">
              {posture.alignmentPoints.map((a) => (
                <li key={a.id} className="border-l-2 border-copper/60 pl-3">
                  <p className="font-medium">{a.label}</p>
                  <p className="text-sm text-muted-foreground">{a.hint}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <PostureFigure
          posture={posture}
          className="animate-rise-delay lg:sticky lg:top-24"
        />
      </div>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-copper">
            Common compensations
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {posture.compensations.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-copper">
            Props
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {posture.props.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xs uppercase tracking-[0.18em] text-copper">
          Contraindications / caution
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {posture.contraindications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">
          Educational notes only — not medical advice. Work with a qualified
          teacher for injuries.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl text-ink">Cues</h2>
        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
          {posture.cues.map((c) => (
            <li key={c}>“{c}”</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-lg bg-mist/80 p-4 text-sm">
        <p className="font-medium">Influences / further study</p>
        <p className="mt-1 text-muted-foreground">
          {posture.influences.join(" · ")}. Original Beyond the Mat teaching
          copy — modern books are named, not reproduced.
        </p>
      </section>

      <div className="mt-10">
        <Link
          href={`/alignment?posture=${posture.slug}`}
          className={cn(buttonVariants(), "inline-flex")}
        >
          Upload alignment for this posture
        </Link>
      </div>
    </div>
  );
}
