"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { allPostures, seriesMeta } from "@/data/postures";
import { Check, CircleDashed, Upload } from "lucide-react";

type ItemState = "pending" | "ok" | "review";

export function AlignmentUploader() {
  const searchParams = useSearchParams();
  const initial =
    searchParams.get("posture") &&
    allPostures.some((p) => p.slug === searchParams.get("posture"))
      ? (searchParams.get("posture") as string)
      : (allPostures.find((p) => p.slug === "utthita-trikonasana")?.slug ??
        allPostures[0].slug);
  const [slug, setSlug] = useState(initial);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [states, setStates] = useState<Record<string, ItemState> | null>(null);

  const posture = useMemo(
    () => allPostures.find((p) => p.slug === slug)!,
    [slug],
  );

  function runHeuristic() {
    // Deterministic mock feedback keyed to posture alignment points — not medical CV
    const next: Record<string, ItemState> = {};
    posture.alignmentPoints.forEach((point, i) => {
      next[point.id] = i % 3 === 1 ? "review" : "ok";
    });
    setStates(next);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5 rounded-xl border border-border/80 bg-card/70 p-5">
        <div>
          <Label htmlFor="posture">Posture</Label>
          <select
            id="posture"
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setStates(null);
            }}
          >
            {seriesMeta.map((s) => (
              <optgroup key={s.id} label={s.label}>
                {allPostures
                  .filter((p) => p.series === s.id)
                  .map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.sanskrit} — {p.english}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="photo">Upload a still image of your hold</Label>
          <label
            htmlFor="photo"
            className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-mist/50 px-4 py-10 text-center transition hover:bg-mist"
          >
            <Upload className="size-6 text-copper" />
            <span className="text-sm text-muted-foreground">
              {fileName ?? "PNG or JPG — stays in your browser for this demo"}
            </span>
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setFileName(file.name);
                const url = URL.createObjectURL(file);
                setPreview(url);
                setStates(null);
              }}
            />
          </label>
        </div>

        {preview ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-ink/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Uploaded alignment reference"
              className="size-full object-contain"
            />
          </div>
        ) : null}

        <Button
          type="button"
          className="w-full"
          disabled={!preview}
          onClick={runHeuristic}
        >
          Run alignment checklist
        </Button>
        <p className="text-xs text-muted-foreground">
          v1 uses structured heuristic feedback against this posture&apos;s
          alignment points — not live computer vision and not a medical
          assessment. Live camera cues come later.
        </p>
      </div>

      <div className="rounded-xl border border-border/80 bg-card/80 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-2xl text-ink">{posture.sanskrit}</h2>
          <Badge variant="secondary">{posture.section}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{posture.english}</p>

        {!states ? (
          <p className="mt-10 text-sm text-muted-foreground">
            Upload an image and run the checklist to see posture-specific
            points light up with OK / review cues.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {posture.alignmentPoints.map((point) => {
              const state = states[point.id] ?? "pending";
              return (
                <li
                  key={point.id}
                  className="flex gap-3 rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  <span className="mt-0.5">
                    {state === "ok" ? (
                      <Check className="size-5 text-primary" />
                    ) : (
                      <CircleDashed className="size-5 text-copper" />
                    )}
                  </span>
                  <div>
                    <p className="font-medium">
                      {point.label}{" "}
                      <span className="text-xs font-normal uppercase tracking-wide text-muted-foreground">
                        {state === "ok" ? "looks steady" : "review"}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {point.hint}
                    </p>
                    {state === "review" ? (
                      <p className="mt-1 text-sm text-copper">
                        Heuristic flag: compare against{" "}
                        {posture.compensations[0] ?? "common compensation"}.
                        Adjust, re-photograph, or ask a teacher.
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-6 rounded-lg bg-mist/80 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Stabilize / move</p>
          <p className="mt-1">
            Stabilize: {posture.stabilize.join("; ")}. Move:{" "}
            {posture.move.join("; ")}.
          </p>
        </div>
      </div>
    </div>
  );
}
