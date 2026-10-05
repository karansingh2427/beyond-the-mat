import type { Posture, SeriesSection } from "@/data/posture-types";
import { cn } from "@/lib/utils";

type FigureKind =
  | "surya"
  | "standing-fold"
  | "standing-wide"
  | "standing-balance"
  | "warrior"
  | "seated-fold"
  | "seated-open"
  | "twist"
  | "backbend"
  | "arm-balance"
  | "inversion"
  | "lotus"
  | "default";

function hashSlug(slug: string) {
  let n = 0;
  for (let i = 0; i < slug.length; i++) n = (n + slug.charCodeAt(i) * (i + 1)) % 7;
  return n;
}

function figureKind(posture: Posture): FigureKind {
  const { slug, section } = posture;
  if (slug.startsWith("surya")) return "surya";
  if (
    slug.includes("sirsesana") ||
    slug.includes("sarvangasana") ||
    slug.includes("pincha")
  )
    return "inversion";
  if (slug.includes("padmasana") || slug.includes("kurmasana")) return "lotus";
  if (
    slug.includes("bakasana") ||
    slug.includes("tittibhasana") ||
    slug.includes("mayurasana") ||
    section === "Arm balances"
  )
    return "arm-balance";
  if (
    section === "Backbends" ||
    slug.includes("ustrasana") ||
    slug.includes("dhanurasana") ||
    slug.includes("kapotasana") ||
    slug.includes("setu") ||
    slug.includes("shalabhasana") ||
    slug.includes("bhekasana") ||
    slug.includes("purvottanasana")
  )
    return "backbend";
  if (
    section === "Twists & binds" ||
    slug.includes("marichyasana") ||
    slug.includes("matsyendra") ||
    slug.includes("bharadvaja") ||
    slug.includes("pasasana") ||
    slug.includes("parivrtta")
  )
    return "twist";
  if (
    slug.includes("virabhadrasana") ||
    slug.includes("parsvakonasana") ||
    slug.includes("trikonasana")
  )
    return "warrior";
  if (
    slug.includes("padangustha") ||
    slug.includes("padahasta") ||
    slug.includes("parsvottanasana") ||
    slug.includes("prasarita")
  )
    return slug.includes("prasarita") ? "standing-wide" : "standing-fold";
  if (
    slug.includes("hasta-padangustha") ||
    slug.includes("ardha-baddha-padmottanasana")
  )
    return "standing-balance";
  if (
    slug.includes("baddha-kona") ||
    slug.includes("upavistha") ||
    slug.includes("navasana") ||
    slug.includes("gomukha")
  )
    return "seated-open";
  if (
    section === "Seated" ||
    slug.includes("paschimottanasana") ||
    slug.includes("janu") ||
    slug.includes("dandasana") ||
    slug.includes("krounchasana")
  )
    return "seated-fold";
  if (section === "Standing") return "standing-fold";
  if (section === "Finishing") return "lotus";
  return "default";
}

function Ground({ y = 210 }: { y?: number }) {
  return (
    <path
      d={`M28 ${y} Q120 ${y + 6} 212 ${y}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      opacity="0.35"
    />
  );
}

function Head({ cx, cy, r = 11 }: { cx: number; cy: number; r?: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
    />
  );
}

/** Earthy line illustrations — one visual language across Primary + Intermediate */
function Silhouette({ kind, variant }: { kind: FigureKind; variant: number }) {
  const lean = variant % 2 === 0 ? 1 : -1;

  switch (kind) {
    case "surya":
      return (
        <g>
          <Ground />
          <Head cx={120} cy={48} />
          <path
            d="M120 60 V118 M120 78 L78 108 M120 78 L162 108 M120 118 L92 168 M120 118 L148 168 M92 168 L84 198 M148 168 L156 198"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78 108 Q120 88 162 108"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.45"
          />
        </g>
      );
    case "standing-fold":
      return (
        <g>
          <Ground />
          <Head cx={120 + lean * 8} cy={78} />
          <path
            d={`M${120 + lean * 8} 90 Q${120 + lean * 4} 120 120 145 M120 145 L95 198 M120 145 L145 198 M${120 + lean * 8} 100 L${95 + lean * 10} 155 M${120 + lean * 8} 100 L${145 + lean * 6} 155`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "standing-wide":
      return (
        <g>
          <Ground />
          <Head cx={120} cy={70} />
          <path
            d="M120 82 V130 M120 95 L70 125 M120 95 L170 125 M120 130 L70 198 M120 130 L170 198"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "standing-balance":
      return (
        <g>
          <Ground />
          <Head cx={118} cy={42} />
          <path
            d="M118 54 V120 M118 70 L85 55 M118 70 L155 100 M118 120 L118 198 M118 120 L155 155 L155 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "warrior":
      return (
        <g>
          <Ground />
          <Head cx={128} cy={40} />
          <path
            d="M128 52 V110 M128 70 L95 55 M128 70 L165 55 M128 110 L78 175 L70 198 M128 110 L175 150 L185 198"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "seated-fold":
      return (
        <g>
          <Ground y={200} />
          <Head cx={120} cy={95} />
          <path
            d="M120 107 Q118 130 120 150 M70 165 H170 M120 150 L75 165 M120 150 L165 165 M120 110 L85 150 M120 110 L155 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "seated-open":
      return (
        <g>
          <Ground y={200} />
          <Head cx={120} cy={58} />
          <path
            d="M120 70 V130 M120 90 L75 110 M120 90 L165 110 M120 130 L70 175 M120 130 L170 175 M70 175 Q120 195 170 175"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "twist":
      return (
        <g>
          <Ground y={200} />
          <Head cx={132} cy={55} />
          <path
            d="M128 68 Q120 100 118 135 M70 165 H165 M118 135 L80 165 M118 135 L155 168 M128 80 L95 120 M128 80 L160 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "backbend":
      return (
        <g>
          <Ground />
          <Head cx={120} cy={55} />
          <path
            d="M120 68 Q95 110 85 150 M120 68 Q145 110 155 150 M70 175 H170 M85 150 L70 175 M155 150 L170 175 M100 95 L70 115 M140 95 L170 115"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "arm-balance":
      return (
        <g>
          <Ground />
          <Head cx={120} cy={48} />
          <path
            d="M120 60 V105 M95 130 H145 M120 105 L95 130 M120 105 L145 130 M95 130 L78 175 M145 130 L162 175 M120 70 L88 95 M120 70 L152 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "inversion":
      return (
        <g>
          <Ground />
          <Head cx={120} cy={175} r={12} />
          <path
            d="M120 162 V95 M95 198 H145 M120 162 L95 198 M120 162 L145 198 M120 110 L85 80 M120 110 L155 80 M85 80 L78 55 M155 80 L162 55"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case "lotus":
      return (
        <g>
          <Ground y={200} />
          <Head cx={120} cy={62} />
          <path
            d="M120 74 V125 M120 95 L88 115 M120 95 L152 115 M90 155 Q120 175 150 155 M120 125 L90 155 M120 125 L150 155 M100 160 Q120 148 140 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    default:
      return (
        <g>
          <Ground />
          <Head cx={120} cy={50} />
          <path
            d="M120 62 V125 M120 80 L85 110 M120 80 L155 110 M120 125 L95 198 M120 125 L145 198"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
  }
}

const sectionLabel: Record<SeriesSection, string> = {
  Sūryanamaskāra: "Warming form",
  Standing: "Standing form",
  Seated: "Seated form",
  Backbends: "Backbend form",
  "Twists & binds": "Twist form",
  "Arm balances": "Arm balance",
  Finishing: "Finishing form",
};

export function PostureFigure({
  posture,
  className,
}: {
  posture: Posture;
  className?: string;
}) {
  const kind = figureKind(posture);
  const variant = hashSlug(posture.slug);

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/70 bg-card/60",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 70% 20%, oklch(0.78 0.08 55 / 0.28), transparent 60%),
            radial-gradient(ellipse 60% 50% at 20% 90%, oklch(0.86 0.04 80 / 0.5), transparent 55%),
            linear-gradient(165deg, oklch(0.94 0.025 78), oklch(0.9 0.035 70))
          `,
        }}
      />
      <svg
        viewBox="0 0 240 230"
        className="relative mx-auto block w-full max-w-md text-ink animate-rise"
        role="img"
        aria-label={`Line illustration for ${posture.sanskrit}`}
      >
        <Silhouette kind={kind} variant={variant} />
      </svg>
      <figcaption className="relative border-t border-border/50 px-4 py-3 text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-copper">
          {sectionLabel[posture.section]}
        </p>
        <p className="mt-1 font-display text-lg text-ink">{posture.sanskrit}</p>
        <p className="text-xs text-muted-foreground">{posture.english}</p>
      </figcaption>
    </figure>
  );
}
