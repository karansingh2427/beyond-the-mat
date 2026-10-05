import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SeriesTabs } from "@/components/series-tabs";
import { Badge } from "@/components/ui/badge";
import {
  getSeriesMeta,
  posturesBySection,
  type SeriesId,
} from "@/data/postures";

export const metadata: Metadata = {
  title: "Series",
  description:
    "Browse Ashtanga Primary and Intermediate Series postures with anatomy and alignment cards.",
};

type SearchParams = Promise<{ path?: string }>;

function resolveSeries(path?: string): SeriesId {
  return path === "intermediate" ? "intermediate" : "primary";
}

export default async function SeriesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { path } = await searchParams;
  const seriesId = resolveSeries(path);
  const meta = getSeriesMeta(seriesId);
  const groups = posturesBySection(seriesId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Practice spine"
        title={meta.label}
        description={`${meta.description} Series → posture → anatomy & alignment. Expandable subsets — not a Tummee-scale dump.`}
      />

      <SeriesTabs active={seriesId} />

      <div className="mt-10 space-y-12">
        {groups.map(({ section, postures }) => (
          <section key={section} className="animate-rise">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {section}
              </h2>
              <Badge variant="secondary">{postures.length}</Badge>
            </div>
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {postures.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/series/${p.slug}`}
                    className="flex flex-col gap-1 py-4 transition-colors hover:bg-mist/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-2"
                  >
                    <span>
                      <span className="font-medium text-foreground">
                        {p.sanskrit}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted-foreground sm:mt-0 sm:ml-3 sm:inline">
                        {p.english}
                      </span>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {p.focus.slice(0, 2).join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
