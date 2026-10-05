import Link from "next/link";
import { cn } from "@/lib/utils";

export type PhilosophyNav = "sutras" | "gita" | "listen";

const tabs: { id: PhilosophyNav; href: string; label: string }[] = [
  { id: "sutras", href: "/philosophy", label: "Yoga Sūtras" },
  { id: "gita", href: "/philosophy?track=gita", label: "Bhagavad Gītā" },
  { id: "listen", href: "/philosophy/listen", label: "Vedic Listen" },
];

export function PhilosophyTabs({ active }: { active: PhilosophyNav }) {
  return (
    <div
      className="mt-8 flex flex-wrap gap-2 border-b border-border/70 pb-px"
      role="tablist"
      aria-label="Philosophy paths"
    >
      {tabs.map((t) => {
        const selected = t.id === active;
        return (
          <Link
            key={t.id}
            href={t.href}
            role="tab"
            aria-selected={selected}
            className={cn(
              "-mb-px border-b-2 px-4 py-2.5 text-sm transition-colors",
              selected
                ? "border-copper font-medium text-ink"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
