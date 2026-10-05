import Link from "next/link";
import { cn } from "@/lib/utils";
import { seriesMeta, type SeriesId } from "@/data/postures";

export function SeriesTabs({ active }: { active: SeriesId }) {
  return (
    <div
      className="mt-8 flex flex-wrap gap-2 border-b border-border/70 pb-px"
      role="tablist"
      aria-label="Practice series"
    >
      {seriesMeta.map((s) => {
        const selected = s.id === active;
        return (
          <Link
            key={s.id}
            href={s.id === "primary" ? "/series" : `/series?path=${s.id}`}
            role="tab"
            aria-selected={selected}
            className={cn(
              "-mb-px border-b-2 px-4 py-2.5 text-sm transition-colors",
              selected
                ? "border-copper font-medium text-ink"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {s.label}
          </Link>
        );
      })}
    </div>
  );
}
