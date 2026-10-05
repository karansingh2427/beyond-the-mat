import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PhilosophyTabs } from "@/components/philosophy-tabs";
import {
  modulesForTrack,
  trackMeta,
  type PhilosophyTrack,
} from "@/data/philosophy";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Yoga Sūtras and Bhagavad Gītā study paths, plus Vedic Listen for ritual-correct intonation.",
};

type SearchParams = Promise<{ track?: string }>;

function resolveTrack(track?: string): PhilosophyTrack {
  return track === "gita" ? "gita" : "patanjali";
}

export default async function PhilosophyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { track: trackParam } = await searchParams;
  const track = resolveTrack(trackParam);
  const meta = trackMeta.find((t) => t.id === track)!;
  const modules = modulesForTrack(track);
  const nav = track === "gita" ? "gita" : "sutras";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Equal pillar"
        title="Philosophy"
        description="Two first-class study paths — Patañjali’s Yoga Sūtras and the Bhagavad Gītā — plus Vedic Listen for ritual-correct sūtra and mantra intonation. Original teaching copy; Bryant, Iyengar, and others as recommended reading only."
      />

      <PhilosophyTabs active={nav} />

      <div className="mt-8 max-w-2xl">
        <h2 className="font-display text-2xl text-ink">{meta.label}</h2>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
        {track === "patanjali" ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Sūtra recitation slots live in{" "}
            <Link
              href="/philosophy/listen"
              className="text-primary underline-offset-4 hover:underline"
            >
              Vedic Listen
            </Link>{" "}
            (YS 1.2, 2.46, and more as sourced).
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Gītā themes feed class-theme mode and Class Design intentions
            (equanimity, karma yoga, dedication).
          </p>
        )}
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {modules.map((m, i) => (
          <li key={m.slug}>
            <Link
              href={`/philosophy/${m.slug}`}
              className="animate-rise group block h-full rounded-xl border border-border/80 bg-card/60 p-6 transition hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-md"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {m.sanskrit ? (
                <p className="text-xs uppercase tracking-[0.16em] text-copper">
                  {m.sanskrit}
                </p>
              ) : null}
              <h3 className="font-display mt-2 text-2xl text-ink group-hover:text-primary">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.summary}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                {m.themes.join(" · ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
