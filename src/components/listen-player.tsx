"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ListenTrack } from "@/data/listen";
import { Pause, Play } from "lucide-react";

export function ListenPlayer({ track }: { track: ListenTrack }) {
  const [demoPulse, setDemoPulse] = useState(false);
  const isPlaceholder = !track.audioSrc;

  return (
    <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl text-ink">{track.title}</h3>
            <Badge variant="secondary" className="capitalize">
              {track.category}
            </Badge>
            {isPlaceholder ? (
              <Badge variant="outline">Audio placeholder</Badge>
            ) : (
              <Badge>Rights-cleared</Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{track.textRef}</p>
        </div>
        <p className="text-xs text-muted-foreground">{track.durationLabel}</p>
      </div>

      <p className="font-display mt-4 text-lg text-primary/90 italic">
        {track.transliteration}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {track.meaningNote}
      </p>

      <div className="mt-5 flex items-center gap-3 rounded-lg bg-mist/80 px-4 py-3">
        {isPlaceholder ? (
          <>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="shrink-0"
              onClick={() => setDemoPulse((v) => !v)}
              aria-label="Preview placeholder player"
            >
              {demoPulse ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
            </Button>
            <div className="min-w-0 flex-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full bg-copper/70 transition-all ${
                    demoPulse ? "w-2/5 animate-soft-pulse" : "w-0"
                  }`}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {demoPulse
                  ? "Placeholder active — no commercial track is playing. Slot awaits ritual-correct Vedic audio."
                  : "Press play to preview the player shell. Real audio attaches when rights-cleared."}
              </p>
            </div>
          </>
        ) : (
          <audio controls className="w-full" src={track.audioSrc!} />
        )}
      </div>

      <dl className="mt-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
        <div>
          <dt className="font-medium text-foreground/80">Reciter</dt>
          <dd>{track.attribution.reciterSlot}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground/80">Tradition</dt>
          <dd>{track.attribution.traditionSlot}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="font-medium text-foreground/80">Rights</dt>
          <dd>{track.attribution.rightsNote}</dd>
        </div>
      </dl>

      <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-4 text-sm text-muted-foreground">
        {track.pedagogy.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-copper" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
