"use client";

import { useId, useMemo, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  bodyFocusOptions,
  contraindicationOptions,
  generateClassOutline,
  intentionOptions,
  type BodyFocus,
  type Contraindication,
  type Intention,
} from "@/data/class-design";

export function ClassDesigner() {
  const [bodyFocus, setBodyFocus] = useState<BodyFocus>("hips");
  const [intention, setIntention] = useState<Intention>("sthira-sukham");
  const [contraindication, setContraindication] =
    useState<Contraindication>("none");
  const [generated, setGenerated] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const bodyName = useId();
  const intentionName = useId();

  const outline = useMemo(() => {
    if (!generated) return null;
    return generateClassOutline({ bodyFocus, intention, contraindication });
  }, [bodyFocus, intention, contraindication, generated]);

  function handleGenerate() {
    setGenerated(true);
    // Defer scroll until after paint so the outline is in the DOM
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="space-y-6 rounded-xl border border-border/80 bg-card/70 p-5">
        <fieldset className="space-y-3">
          <Label className="text-xs uppercase tracking-[0.16em] text-copper">
            Body focus
          </Label>
          <div className="flex flex-col gap-2">
            {bodyFocusOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-1.5 text-sm hover:bg-muted/60 has-[:checked]:border-border has-[:checked]:bg-muted/80"
              >
                <input
                  type="radio"
                  name={bodyName}
                  value={opt.value}
                  className="accent-[oklch(0.45_0.08_155)]"
                  checked={bodyFocus === opt.value}
                  onChange={() => setBodyFocus(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <Label className="text-xs uppercase tracking-[0.16em] text-copper">
            Intention
          </Label>
          <div className="flex flex-col gap-2">
            {intentionOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer flex-col rounded-md border border-transparent px-2 py-1.5 text-sm hover:bg-muted/60 has-[:checked]:border-border has-[:checked]:bg-muted/80"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={intentionName}
                    value={opt.value}
                    className="accent-[oklch(0.45_0.08_155)]"
                    checked={intention === opt.value}
                    onChange={() => setIntention(opt.value)}
                  />
                  {opt.label}
                </span>
                <span className="ml-6 text-xs text-muted-foreground">
                  {opt.blurb}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <Label className="text-xs uppercase tracking-[0.16em] text-copper">
            Contraindication flag
          </Label>
          <select
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={contraindication}
            onChange={(e) =>
              setContraindication(e.target.value as Contraindication)
            }
          >
            {contraindicationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground">
            Educational filter only — not diagnosis or medical advice.
          </p>
        </fieldset>

        <button
          type="button"
          className={cn(buttonVariants(), "w-full")}
          onClick={handleGenerate}
        >
          Generate class outline
        </button>
      </div>

      <div ref={resultsRef} className="min-h-[320px] scroll-mt-24">
        {!outline ? (
          <div className="flex h-full items-center rounded-xl border border-dashed border-border bg-mist/40 px-6 py-16 text-center">
            <p className="mx-auto max-w-sm text-sm text-muted-foreground">
              Choose filters and generate a rule-based outline with rationale —
              seeded from Primary + Intermediate. No Tummee clone; craft over
              catalog.
            </p>
          </div>
        ) : (
          <div className="animate-rise space-y-6 rounded-xl border border-border/80 bg-card/80 p-6">
            <header>
              <p className="text-xs uppercase tracking-[0.18em] text-copper">
                {outline.durationLabel}
              </p>
              <h2 className="font-display mt-1 text-3xl text-ink">
                {outline.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {outline.intentionBlurb}
              </p>
            </header>

            {outline.sections.map((section) => (
              <section key={section.name}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {section.name}
                </h3>
                <ul className="mt-3 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item.pose}
                      className="border-l-2 border-copper/50 pl-3"
                    >
                      <p className="font-medium text-foreground">{item.pose}</p>
                      <p className="text-sm text-muted-foreground">{item.why}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Why this order
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {outline.rationale.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Modifications
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {outline.modifications.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg bg-mist/70 p-4 text-sm">
              <p>
                <span className="font-medium">Breath: </span>
                {outline.breath}
              </p>
              <p className="mt-2">
                <span className="font-medium">Philosophy hook: </span>
                {outline.philosophyHook}
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
