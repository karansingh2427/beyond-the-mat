import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { breathProtocols } from "@/data/breath";

export const metadata: Metadata = {
  title: "Breath",
  description:
    "Starter prāṇāyāma protocols with playlist notes — distinct from Vedic Listen.",
};

export default function BreathPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Breath starter"
        title="Prāṇāyāma protocols"
        description="Five starter protocols for serious practice. You may accompany seated breath with your own playlist — that is music accompaniment, not Vedic sūtra/mantra recitation."
      />

      <p className="mt-6 text-sm text-muted-foreground">
        For ritual-correct chanting, use{" "}
        <Link
          href="/philosophy/listen"
          className="text-primary underline-offset-4 hover:underline"
        >
          Philosophy → Vedic Listen
        </Link>
        .
      </p>

      <ul className="mt-12 space-y-8">
        {breathProtocols.map((p) => (
          <li
            key={p.slug}
            id={p.slug}
            className="rounded-xl border border-border/80 bg-card/70 p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl text-ink">{p.name}</h2>
              <Badge variant="secondary">{p.level}</Badge>
              <Badge variant="outline">{p.duration}</Badge>
            </div>
            <p className="mt-1 text-sm text-copper">{p.sanskrit}</p>
            <p className="mt-3 text-muted-foreground">{p.summary}</p>

            <h3 className="mt-5 text-xs uppercase tracking-[0.16em] text-copper">
              Steps
            </h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
              {p.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <div className="mt-5 rounded-lg bg-mist/80 p-4 text-sm">
              <p className="font-medium">Playlist note</p>
              <p className="mt-1 text-muted-foreground">{p.playlistNote}</p>
            </div>

            <h3 className="mt-5 text-xs uppercase tracking-[0.16em] text-copper">
              Cautions
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {p.cautions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-muted-foreground">
              Influences: {p.influences.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
