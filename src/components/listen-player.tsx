"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ListenTrack } from "@/data/listen";
import { Pause, Play } from "lucide-react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function ListenPlayer({ track }: { track: ListenTrack }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressId = useId();
  const isDemo = track.attribution.status === "demo";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  }

  const progress = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <article className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl text-ink">{track.title}</h3>
            <Badge variant="secondary" className="capitalize">
              {track.category}
            </Badge>
            {isDemo ? (
              <Badge variant="outline">Demo recitation</Badge>
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
        <audio ref={audioRef} src={track.audioSrc} preload="metadata" />
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="shrink-0"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
        </Button>
        <div className="min-w-0 flex-1">
          <label htmlFor={progressId} className="sr-only">
            Playback progress
          </label>
          <input
            id={progressId}
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[oklch(0.58_0.12_48)]"
            onChange={(e) => {
              const audio = audioRef.current;
              if (!audio || !duration) return;
              const next = (Number(e.target.value) / 100) * duration;
              audio.currentTime = next;
              setCurrent(next);
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          {isDemo ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Demo recitation — ritual-correct pandit source TBD. Play uses a
              real file so timing works; upgrade path stays open.
            </p>
          ) : null}
        </div>
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
