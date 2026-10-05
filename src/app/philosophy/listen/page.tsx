import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PhilosophyTabs } from "@/components/philosophy-tabs";
import { ListenPlayer } from "@/components/listen-player";
import { listenTracks, vedicListenExplainer } from "@/data/listen";

export const metadata: Metadata = {
  title: "Vedic Listen",
  description:
    "Sūtra and mantra listen experience framed around ritual-correct Vedic intonation.",
};

export default function ListenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Sacred sound"
        title="Vedic Listen"
        description="Hear sūtras and mantras in the intonation they are supposed to according to Vedic ritual practice. This is study — not ambient new-age chant. Playlist music for breath lives elsewhere."
      />

      <PhilosophyTabs active="listen" />

      <p className="mt-6 text-sm text-muted-foreground">
        Sūtra slots pair with the{" "}
        <Link
          href="/philosophy"
          className="text-primary underline-offset-4 hover:underline"
        >
          Yoga Sūtras
        </Link>{" "}
        path (e.g. 1.2 *citta-vṛtti*, 2.46 *sthira-sukham*). Mantra slots stay
        ritual-correct — never new-age stand-ins.
      </p>

      <section className="mt-10 rounded-xl border border-border/80 bg-card/70 p-6">
        <h2 className="font-display text-2xl text-ink">
          {vedicListenExplainer.title}
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {vedicListenExplainer.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <h3 className="mt-6 text-xs uppercase tracking-[0.16em] text-copper">
          Sourcing standard
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {vedicListenExplainer.sourcingStandard.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 space-y-6">
        {listenTracks.map((track) => (
          <ListenPlayer key={track.id} track={track} />
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        For breath accompaniment playlists (a different job), see{" "}
        <Link href="/breath" className="text-primary underline-offset-4 hover:underline">
          Breath starter
        </Link>
        .
      </p>
    </div>
  );
}
