import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getModule, philosophyModules, trackMeta } from "@/data/philosophy";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return philosophyModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/philosophy/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) return { title: "Module" };
  return { title: mod.title, description: mod.summary };
}

export default async function PhilosophyModulePage({
  params,
}: PageProps<"/philosophy/[slug]">) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  const track = trackMeta.find((t) => t.id === mod.track)!;
  const backHref =
    mod.track === "gita" ? "/philosophy?track=gita" : "/philosophy";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href={backHref}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {track.label}
      </Link>

      <header className="mt-6 animate-rise">
        <Badge variant="secondary" className="mb-3">
          {track.label}
        </Badge>
        {mod.sanskrit ? (
          <p className="text-xs uppercase tracking-[0.2em] text-copper">
            {mod.sanskrit}
          </p>
        ) : null}
        <h1 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
          {mod.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{mod.summary}</p>
      </header>

      <ol className="mt-12 space-y-10">
        {mod.steps.map((step, i) => (
          <li key={step.heading} className="animate-rise">
            <p className="text-xs uppercase tracking-[0.18em] text-copper">
              Step {i + 1}
            </p>
            <h2 className="font-display mt-1 text-2xl text-ink">
              {step.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {step.body}
            </p>
            {step.prompt ? (
              <p className="mt-4 rounded-lg border border-border/70 bg-mist/70 p-4 text-sm italic text-foreground/90">
                Reflect: {step.prompt}
              </p>
            ) : null}
          </li>
        ))}
      </ol>

      <section className="mt-12 rounded-xl border border-border/80 bg-card/70 p-6">
        <h2 className="font-display text-2xl text-ink">Class-theme mode</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Talking points + related āsanas + breath for teaching from this module.
        </p>
        <h3 className="mt-5 text-xs uppercase tracking-[0.16em] text-copper">
          Talking points
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {mod.classTheme.talkingPoints.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <h3 className="mt-5 text-xs uppercase tracking-[0.16em] text-copper">
          Related āsanas
        </h3>
        <p className="mt-2 text-sm">{mod.classTheme.relatedAsanas.join(" · ")}</p>
        <h3 className="mt-5 text-xs uppercase tracking-[0.16em] text-copper">
          Breath
        </h3>
        <p className="mt-2 text-sm">{mod.classTheme.breath}</p>
        <Link
          href="/design"
          className={cn(buttonVariants({ variant: "outline" }), "mt-6 inline-flex")}
        >
          Open class design assist
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl text-ink">Recommended reading</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Influences and citation targets — not pasted copyrighted commentary.
        </p>
        <ul className="mt-4 space-y-3">
          {mod.recommendedReading.map((r) => (
            <li
              key={r.title}
              className="border-l-2 border-copper/50 pl-3 text-sm"
            >
              <p className="font-medium">
                {r.title} — {r.author}
              </p>
              <p className="text-muted-foreground">{r.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <Link
          href="/philosophy/listen"
          className={cn(buttonVariants(), "inline-flex")}
        >
          Continue with Vedic Listen
        </Link>
      </div>
    </div>
  );
}
