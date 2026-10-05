import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-ink text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">Beyond the Mat</p>
          <p className="mt-2 max-w-md text-sm text-primary-foreground/75">
            Serious practice literacy — Primary and Intermediate anatomy, Yoga
            Sūtras and Gītā, intentional class craft. Web-first learning studio.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary-foreground/70">
          <Link href="/philosophy/listen" className="hover:text-accent">
            Vedic Listen
          </Link>
          <Link href="/series" className="hover:text-accent">
            Series
          </Link>
          <Link href="/design" className="hover:text-accent">
            Design
          </Link>
          <Link href="/continuity" className="hover:text-accent">
            Continuity
          </Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-4 py-4 text-center text-xs text-primary-foreground/50 sm:px-6">
        Educational tool only — not medical advice. Literature influences are
        named; modern books are not reproduced.
      </div>
    </footer>
  );
}
