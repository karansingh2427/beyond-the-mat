import { allPostures, primarySeries } from "./postures";

export type BodyFocus =
  | "hips"
  | "hamstrings"
  | "shoulders"
  | "spine"
  | "core"
  | "whole-body";

export type Intention =
  | "sthira-sukham"
  | "heart-space"
  | "grounding"
  | "ahiṃsā"
  | "karma-yoga"
  | "equanimity"
  | "focus";

export type Contraindication =
  | "none"
  | "wrists"
  | "knees"
  | "neck"
  | "low-back";

export const bodyFocusOptions: { value: BodyFocus; label: string }[] = [
  { value: "hips", label: "Hips & groins" },
  { value: "hamstrings", label: "Hamstrings" },
  { value: "shoulders", label: "Shoulders & upper back" },
  { value: "spine", label: "Spinal length & folds / backbends" },
  { value: "core", label: "Core / center" },
  { value: "whole-body", label: "Whole-body vinyāsa" },
];

export const intentionOptions: {
  value: Intention;
  label: string;
  blurb: string;
}[] = [
  {
    value: "sthira-sukham",
    label: "Sthira–sukham",
    blurb: "Steady and easeful — measure depth by breath (Yoga Sūtras).",
  },
  {
    value: "karma-yoga",
    label: "Karma yoga",
    blurb: "Wholehearted action without clinging to results (Gītā).",
  },
  {
    value: "equanimity",
    label: "Equanimity / samatva",
    blurb: "Even effort across sides and preferences (Gītā).",
  },
  {
    value: "heart-space",
    label: "Heart space / openness",
    blurb: "Front body awareness without forcing backbends.",
  },
  {
    value: "grounding",
    label: "Grounding",
    blurb: "Root through feet and sit bones; slower pacing.",
  },
  {
    value: "ahiṃsā",
    label: "Ahiṃsā (non-harm)",
    blurb: "Modifications as intelligence; no pose acquisition.",
  },
  {
    value: "focus",
    label: "Single-pointed focus",
    blurb: "Fewer postures, longer holds, quieter cues.",
  },
];

export const contraindicationOptions: {
  value: Contraindication;
  label: string;
}[] = [
  { value: "none", label: "No specific flag" },
  { value: "wrists", label: "Sensitive wrists" },
  { value: "knees", label: "Sensitive knees" },
  { value: "neck", label: "Sensitive neck" },
  { value: "low-back", label: "Sensitive low back" },
];

const focusTags: Record<BodyFocus, string[]> = {
  hips: ["hips", "adductors", "groins", "hip flexors"],
  hamstrings: ["hamstrings", "forward fold"],
  shoulders: ["shoulders", "wrists"],
  spine: ["spine", "twist", "lateral", "backbend", "posterior"],
  core: ["core", "balance"],
  "whole-body": ["whole-body", "breath", "hips", "shoulders"],
};

function scorePosture(slugFocus: string[], body: BodyFocus) {
  const tags = focusTags[body];
  return slugFocus.reduce(
    (n, f) => n + (tags.some((t) => f.toLowerCase().includes(t)) ? 1 : 0),
    0,
  );
}

function contraindicationBlock(c: Contraindication, text: string[]) {
  if (c === "none") return false;
  const key = c === "low-back" ? "back" : c;
  return text.some((t) => t.toLowerCase().includes(key));
}

export type ClassOutline = {
  title: string;
  intentionBlurb: string;
  durationLabel: string;
  sections: { name: string; items: { pose: string; why: string }[] }[];
  rationale: string[];
  modifications: string[];
  breath: string;
  philosophyHook: string;
};

export function generateClassOutline(input: {
  bodyFocus: BodyFocus;
  intention: Intention;
  contraindication: Contraindication;
}): ClassOutline {
  const intention = intentionOptions.find((i) => i.value === input.intention)!;

  const ranked = [...allPostures]
    .map((p) => ({
      p,
      score: scorePosture(p.focus, input.bodyFocus),
      blocked: contraindicationBlock(input.contraindication, [
        ...p.contraindications,
        ...p.focus,
        p.english,
      ]),
    }))
    .filter((x) => !x.blocked || input.contraindication === "none")
    .sort((a, b) => b.score - a.score || a.p.order - b.p.order);

  const pick = (n: number, sections?: string[]) =>
    ranked
      .filter((x) => (sections ? sections.includes(x.p.section) : true))
      .slice(0, n)
      .map((x) => x.p);

  const opening =
    input.contraindication === "wrists"
      ? pick(2, ["Standing"]).slice(0, 1)
      : primarySeries.filter((p) => p.slug === "surya-a");

  const standing = pick(3, ["Standing"]).filter(
    (p) => !opening.find((o) => o.slug === p.slug),
  );
  const midFloor = pick(4, [
    "Seated",
    "Backbends",
    "Twists & binds",
    "Arm balances",
  ]);
  const close = pick(2, ["Finishing", "Arm balances"]).filter((p) => {
    if (input.contraindication === "neck") {
      return ![
        "sarvangasana",
        "sirsesana",
        "setu-bandhasana",
        "pincha-mayurasana",
      ].includes(p.slug);
    }
    return true;
  });

  const mods: string[] = [];
  if (input.contraindication === "wrists") {
    mods.push(
      "Replace jump-backs with step-backs; offer forearm or fist options instead of flat palms; soft-pedal crow/firefly.",
    );
  }
  if (input.contraindication === "knees") {
    mods.push(
      "No forced lotus or leg-behind-head; pad hero/frog variations; celebrate prep shapes.",
    );
  }
  if (input.contraindication === "neck") {
    mods.push(
      "Skip or heavily modify shoulderstand/headstand/forearm stand; keep gaze neutral in camel.",
    );
  }
  if (input.contraindication === "low-back") {
    mods.push(
      "Bend knees in forward folds; shorter backbend amplitude; emphasize length over depth.",
    );
  }
  if (input.intention === "ahiṃsā") {
    mods.push(
      "Announce that every posture has a valid 70% version — celebrate breath over shape.",
    );
  }

  const philosophyHook =
    input.intention === "sthira-sukham"
      ? "Close with Yoga Sūtras module *sthira-sukham* + Listen slot YS 2.46 when sourced."
      : input.intention === "karma-yoga"
        ? "Point to Gītā module *Karma yoga on the mat* — effort without clinging."
        : input.intention === "equanimity"
          ? "Point to Gītā *Equanimity in action* / *Steady wisdom* after class."
          : input.intention === "ahiṃsā"
            ? "Point to Yoga Sūtras *Yama and niyama* module — ethics as alignment."
            : "Offer one minute of even-ratio breath, then optional Philosophy Listen (not playlist chant).";

  const midLabel =
    input.bodyFocus === "spine"
      ? "Backbends / floor"
      : "Seated · twists · arm balances";

  return {
    title: `${intention.label} · ${bodyFocusOptions.find((b) => b.value === input.bodyFocus)!.label}`,
    intentionBlurb: intention.blurb,
    durationLabel: "45–60 min (template)",
    sections: [
      {
        name: "Opening",
        items: [
          {
            pose: "Arrival breath — Sama vṛtti",
            why: "Set nervous system before shapes; establishes steadiness in the breath.",
          },
          ...opening.map((p) => ({
            pose: `${p.sanskrit} (${p.english})`,
            why: `Warms ${p.focus.slice(0, 2).join(" & ")}; series-aware entry.`,
          })),
        ],
      },
      {
        name: "Standing architecture",
        items: standing.slice(0, 3).map((p) => ({
          pose: `${p.sanskrit} (${p.english}) · ${p.series === "intermediate" ? "Int." : "Pri."}`,
          why: `Serves ${input.bodyFocus} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
        })),
      },
      {
        name: midLabel,
        items: midFloor.slice(0, 4).map((p) => ({
          pose: `${p.sanskrit} (${p.english}) · ${p.series === "intermediate" ? "Int." : "Pri."}`,
          why: `Deepens focus; prop options: ${p.props[0] ?? "as needed"}.`,
        })),
      },
      {
        name: "Close",
        items: [
          ...close.slice(0, 1).map((p) => ({
            pose: `${p.sanskrit} (${p.english})`,
            why: "Finishing / inversion literacy — only if appropriate for the room.",
          })),
          {
            pose: "Easy seat + philosophy hook",
            why: philosophyHook,
          },
        ],
      },
    ],
    rationale: [
      `Body focus “${input.bodyFocus}” selected postures from the Primary + Intermediate ontology (rule-based v1 — not a black-box LLM).`,
      `Intention “${intention.label}” shapes pacing and the closing philosophy hook — Sūtras and/or Gītā as relevant.`,
      input.contraindication === "none"
        ? "No contraindication filter applied; still cue general safety."
        : `Filtered or modified for “${input.contraindication}” sensitivity — educational, not medical advice.`,
      "Expandable: as either series grows, the same generator picks from a richer pool.",
    ],
    modifications: mods.length
      ? mods
      : [
          "Offer blocks/straps in every fold; name two depths for the peak posture.",
        ],
    breath:
      "Sama vṛtti to open; soft ujjāyī optional in standing; lengthened exhale before closing sit.",
    philosophyHook,
  };
}
