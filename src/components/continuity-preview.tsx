"use client";

import { useMemo, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const FLOW = [
  {
    title: "Event",
    body: "A retreat or YTT ends — the teachings should not end in a WhatsApp scroll.",
  },
  {
    title: "Cohort",
    body: "Fellows stay on the same syllabus: philosophy modules, series anatomy, breath protocols.",
  },
  {
    title: "Practice",
    body: "Continuity rides on real learning objects — postures, Listen, class themes — not empty chat.",
  },
  {
    title: "Check-ins",
    body: "Scarce, scheduled teacher Q&A so the relationship continues with intention.",
  },
  {
    title: "Graph",
    body: "Later: trusted peers and teachers for discovery — not a cold marketplace feed.",
  },
] as const;

export function ContinuityPreview() {
  const [shared, setShared] = useState(false);
  const card = useMemo(
    () => ({
      title: "Sthira–sukham · practice card",
      line: "Steady and easeful — depth measured by breath.",
      series: "Primary · Daṇḍāsana",
    }),
    [],
  );

  return (
    <div className="space-y-12">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {FLOW.map((step, i) => (
          <li
            key={step.title}
            className="animate-rise relative rounded-xl border border-border/70 bg-card/70 p-4"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-2 text-xl text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      {/*
        Explicit two-column from md up. Avoid fragile fr templates that can
        collapse to a single full-width dashed box with empty right space.
      */}
      <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-dashed border-copper/40 bg-mist/50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">Continuity preview</Badge>
            <Badge variant="secondary">Coming after people-testing</Badge>
          </div>
          <h2 className="font-display mt-4 text-3xl text-ink">
            Keep the teachings alive after the retreat
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Full cohorts, teacher office hours, practice graph, and events
            discovery stay{" "}
            <strong className="font-medium text-foreground">post-v1</strong>.
            This surface tells the story now so Beyond the Mat never reads as
            solitary fitness software — community is Continuity on real practice,
            not another social feed.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• Cohorts anchored to Series, Philosophy, and Breath objects</li>
            <li>• Teacher check-ins as scarce, scheduled craft</li>
            <li>
              • Events later via trusted graph proximity — not cold SEO marketplace
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/80 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">
            Toe-hold · interactive
          </p>
          <h3 className="font-display mt-2 text-2xl text-ink">
            Share a practice card
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The only live Continuity action in this slice — a shareable card
            you could send a retreat fellow. No accounts, no feed.
          </p>

          <article className="mt-5 rounded-lg bg-hero-plane p-5 text-primary-foreground">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent/90">
              Beyond the Mat
            </p>
            <p className="font-display mt-3 text-2xl">{card.title}</p>
            <p className="mt-2 text-sm text-primary-foreground/80">{card.line}</p>
            <p className="mt-4 text-xs text-primary-foreground/60">
              {card.series}
            </p>
          </article>

          <button
            type="button"
            className={cn(buttonVariants(), "mt-4 w-full")}
            onClick={async () => {
              const text = `${card.title}\n${card.line}\n— via Beyond the Mat`;
              try {
                await navigator.clipboard.writeText(text);
                setShared(true);
              } catch {
                setShared(true);
              }
            }}
          >
            {shared ? "Card copied — send to a fellow" : "Copy shareable card"}
          </button>
          <p className="mt-2 text-xs text-muted-foreground">
            Preview only for cohorts &amp; events — this copy action is the v1
            toe-hold.
          </p>
        </div>
      </section>
    </div>
  );
}
