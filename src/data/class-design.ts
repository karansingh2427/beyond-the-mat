import type { Posture } from "./posture-types";
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
  hips: ["hips", "adductors", "groins", "hip flexors", "inner thighs", "inner legs"],
  hamstrings: ["hamstrings", "forward fold", "legs"],
  shoulders: ["shoulders", "wrists"],
  spine: ["spine", "twist", "lateral", "backbend", "posterior", "spinal"],
  core: ["core", "balance"],
  "whole-body": ["whole-body", "breath", "hips", "shoulders"],
};

/** Intention boosts — first-class input to pose selection, not just labels. */
const intentionTags: Record<Intention, string[]> = {
  "sthira-sukham": ["breath", "balance", "spine", "spinal", "meditation"],
  "heart-space": [
    "front body",
    "shoulders",
    "spine",
    "hip flexors",
    "chest",
    "backbend",
  ],
  grounding: [
    "hips",
    "legs",
    "ankles",
    "grip & root",
    "inner legs",
    "meditation seat",
    "glutes",
  ],
  ahiṃsā: ["breath", "spine", "spinal", "meditation", "balance"],
  "karma-yoga": ["whole-body", "breath", "core", "shoulders", "balance"],
  equanimity: ["twist", "lateral", "balance", "side body", "hips"],
  focus: ["balance", "breath", "meditation", "core", "spinal"],
};

/** Soft penalties — discourage shapes that fight the intention. */
const intentionAvoid: Record<Intention, string[]> = {
  "sthira-sukham": ["wrists", "deep fold"],
  "heart-space": ["deep fold", "forward fold depth"],
  grounding: ["inversion literacy", "wrists"],
  ahiṃsā: ["deep fold", "knees", "neck"],
  "karma-yoga": [],
  equanimity: [],
  focus: ["whole-body warm-up", "wrists"],
};

type IntentionProfile = {
  standingCount: number;
  midCount: number;
  closeCount: number;
  /** Prefer these mid-floor sections when choosing. */
  midSections: string[];
  standingCue: (p: Posture, body: BodyFocus) => string;
  midCue: (p: Posture) => string;
  openingBreathWhy: string;
  arrivalPose?: { pose: string; why: string };
  breath: string;
  pacingRationale: string;
  durationLabel: string;
  midLabel: (body: BodyFocus) => string;
  standingLabel: string;
};

function matchTags(focus: string[], tags: string[]) {
  return focus.reduce(
    (n, f) => n + (tags.some((t) => f.toLowerCase().includes(t.toLowerCase())) ? 1 : 0),
    0,
  );
}

function scoreBodyFocus(focus: string[], body: BodyFocus) {
  return matchTags(focus, focusTags[body]);
}

function scoreIntention(p: Posture, intention: Intention) {
  const boost = matchTags(p.focus, intentionTags[intention]) * 3;
  const avoid = matchTags(p.focus, intentionAvoid[intention]) * 2;
  // Gentle section lean for heart / grounding / focus
  let sectionBias = 0;
  if (intention === "heart-space") {
    if (p.section === "Backbends") sectionBias += 4;
    if (["Pūrvottānāsana", "Setu Bandhāsana", "Uṣṭrāsana", "Dhanurāsana", "Vīrabhadrāsana A"].includes(p.sanskrit))
      sectionBias += 3;
    if (p.section === "Seated" && matchTags(p.focus, ["forward fold", "deep fold"]))
      sectionBias -= 2;
  }
  if (intention === "grounding") {
    if (p.section === "Standing") sectionBias += 2;
    if (p.section === "Arm balances") sectionBias -= 3;
  }
  if (intention === "sthira-sukham" || intention === "focus") {
    if (p.section === "Arm balances") sectionBias -= 2;
  }
  if (intention === "karma-yoga") {
    if (p.section === "Sūryanamaskāra" || p.section === "Standing") sectionBias += 1;
  }
  if (intention === "equanimity") {
    if (matchTags(p.focus, ["twist", "lateral", "side"])) sectionBias += 2;
  }
  return boost - avoid + sectionBias;
}

function contraindicationBlock(c: Contraindication, text: string[]) {
  if (c === "none") return false;
  const key = c === "low-back" ? "back" : c;
  return text.some((t) => t.toLowerCase().includes(key));
}

function intentionProfiles(body: BodyFocus): Record<Intention, IntentionProfile> {
  const bodyWord = bodyFocusOptions.find((b) => b.value === body)!.label.toLowerCase();
  return {
    "sthira-sukham": {
      standingCount: 2,
      midCount: 2,
      closeCount: 1,
      midSections: ["Seated", "Backbends", "Twists & binds"],
      standingLabel: "Standing — longer holds",
      midLabel: () => "Floor — breath-paced",
      durationLabel: "45–60 min · fewer shapes, longer holds",
      openingBreathWhy:
        "Establish sthira before sukha — even breath sets the depth meter for every shape.",
      standingCue: (p) =>
        `Hold longer; depth only while breath stays even. Serves ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Stay 5–8 breaths; ease over amplitude. Props: ${p.props[0] ?? "as needed"}.`,
      breath:
        "Sama vṛtti throughout; cue “if breath shortens, back out of the shape.” Soft ujjāyī optional.",
      pacingRationale:
        "Sthira–sukham trims the sequence and lengthens holds so steadiness and ease lead, not pose count.",
    },
    "heart-space": {
      standingCount: 3,
      midCount: 4,
      closeCount: 1,
      midSections: ["Backbends", "Seated", "Twists & binds"],
      standingLabel: "Standing — chest soft, not forced",
      midLabel: () => "Front body · gentle back body",
      durationLabel: "45–60 min · openness without forcing",
      openingBreathWhy:
        "Breath into the front ribs first — open the heart space before asking the spine to go back.",
      arrivalPose: {
        pose: "Supported fish / rolled blanket under heart (optional)",
        why: "Passive front-body awareness; no active backbend yet.",
      },
      standingCue: (p) =>
        `Broaden collarbones; lift sternum without clamping low ribs. ${bodyWord} still primary via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Gentle chest / shoulder opening — no forcing backbends. Props: ${p.props[0] ?? "blanket or block"}.`,
      breath:
        "Inhale to widen the front body; exhale softens the back body. Avoid breath-holding in backbends.",
      pacingRationale:
        "Heart space boosts front-body and gentle back-body shapes while keeping body-focus postures in the mix — openness without force.",
    },
    grounding: {
      standingCount: 3,
      midCount: 3,
      closeCount: 1,
      midSections: ["Seated", "Twists & binds"],
      standingLabel: "Standing — root and rise",
      midLabel: () => "Seated grounding",
      durationLabel: "50–60 min · slower pacing",
      openingBreathWhy:
        "Feel feet / sit bones before shapes — rooting is the class metronome.",
      standingCue: (p) =>
        `Press down to rise; slower transitions. Serves ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Sit bones heavy; fewer transitions. Props: ${p.props[0] ?? "blanket under seat"}.`,
      breath:
        "Longer exhales; pause after each standing pose to re-root before the next.",
      pacingRationale:
        "Grounding favors rooted standing and seated work, slows transitions, and soft-pedals flashy arm balances.",
    },
    ahiṃsā: {
      standingCount: 2,
      midCount: 3,
      closeCount: 1,
      midSections: ["Seated", "Twists & binds", "Backbends"],
      standingLabel: "Standing — modification-first",
      midLabel: () => "Floor — 70% versions celebrated",
      durationLabel: "45–60 min · non-harm as method",
      openingBreathWhy:
        "Name that every shape has a valid easier version — ahiṃsā starts before the first āsana.",
      standingCue: (p) =>
        `Offer a prop / bent-knee option first. ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]} — exit early if sensation sharp.`,
      midCue: (p) =>
        `Modification is intelligence, not failure. Default props: ${p.props[0] ?? "blocks / strap"}.`,
      breath:
        "Breath is the non-harm gauge — if it hardens, change the shape before the body complains.",
      pacingRationale:
        "Ahiṃsā puts modifications in every cue and trims intensity so non-harm is practiced, not preached.",
    },
    "karma-yoga": {
      standingCount: 4,
      midCount: 3,
      closeCount: 1,
      midSections: ["Seated", "Arm balances", "Twists & binds", "Backbends"],
      standingLabel: "Standing — wholehearted effort",
      midLabel: () => "Floor — offer the work, release the result",
      durationLabel: "45–60 min · effort without clinging",
      openingBreathWhy:
        "Set the Gītā frame: sincere effort is the offering; the “perfect pose” is not the fruit.",
      standingCue: (p) =>
        `Wholehearted action — then soften attachment to the look of the pose. Serves ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Offer the attempt; release the result. Props welcome: ${p.props[0] ?? "as needed"}.`,
      breath:
        "Strong but unstrained ujjāyī in standing; exhale the need to “get” the posture.",
      pacingRationale:
        "Karma yoga keeps a fuller standing architecture (effort as offering) and cues release of results in every section.",
    },
    equanimity: {
      standingCount: 3,
      midCount: 3,
      closeCount: 1,
      midSections: ["Twists & binds", "Seated", "Backbends"],
      standingLabel: "Standing — even sides, even mind",
      midLabel: () => "Twists & floor — samatva",
      durationLabel: "45–60 min · even effort",
      openingBreathWhy:
        "Practice samatva in breath first — same length in / out before left / right preferences arise.",
      standingCue: (p) =>
        `Equal time both sides; notice preference without chasing it. ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Match effort L/R; soft side gets the same care as strong side. Props: ${p.props[0] ?? "as needed"}.`,
      breath:
        "Even-ratio breath; cue “same number of breaths each side” out loud.",
      pacingRationale:
        "Equanimity boosts bilateral / twisting work and makes even-sided timing the sequencing rule.",
    },
    focus: {
      standingCount: 2,
      midCount: 2,
      closeCount: 1,
      midSections: ["Seated", "Twists & binds"],
      standingLabel: "Standing — single-pointed",
      midLabel: () => "Peak work — quieter room",
      durationLabel: "40–50 min · fewer postures",
      openingBreathWhy:
        "One point: breath at the nostrils — fewer words, longer silence between cues.",
      standingCue: (p) =>
        `Quieter cues; one alignment point only. Serves ${bodyWord} via ${p.focus[0]}; watch: ${p.compensations[0]}`,
      midCue: (p) =>
        `Longer hold, fewer demos. Props set once: ${p.props[0] ?? "as needed"}.`,
      breath:
        "Minimal verbal cues; let sama vṛtti carry the room. Silence is part of the sequence.",
      pacingRationale:
        "Single-pointed focus cuts pose count and cue volume so attention can stay on one thread.",
    },
  };
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

function pickUnique(
  ranked: { p: Posture; score: number }[],
  n: number,
  sections: string[] | undefined,
  used: Set<string>,
) {
  const out: Posture[] = [];
  for (const x of ranked) {
    if (out.length >= n) break;
    if (used.has(x.p.slug)) continue;
    if (sections && !sections.includes(x.p.section)) continue;
    out.push(x.p);
    used.add(x.p.slug);
  }
  return out;
}

export function generateClassOutline(input: {
  bodyFocus: BodyFocus;
  intention: Intention;
  contraindication: Contraindication;
}): ClassOutline {
  const intentionMeta = intentionOptions.find((i) => i.value === input.intention)!;
  const bodyMeta = bodyFocusOptions.find((b) => b.value === input.bodyFocus)!;
  const profile = intentionProfiles(input.bodyFocus)[input.intention];

  const ranked = [...allPostures]
    .map((p) => {
      const bodyScore = scoreBodyFocus(p.focus, input.bodyFocus);
      const intentionScore = scoreIntention(p, input.intention);
      // Body focus remains primary; intention must be able to reshuffle within that pool.
      const score = bodyScore * 10 + intentionScore;
      const blocked = contraindicationBlock(input.contraindication, [
        ...p.contraindications,
        ...p.focus,
        p.english,
      ]);
      return { p, score, bodyScore, intentionScore, blocked };
    })
    .filter((x) => !x.blocked || input.contraindication === "none")
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.intentionScore - a.intentionScore ||
        a.p.order - b.p.order,
    );

  const used = new Set<string>();

  const opening =
    input.contraindication === "wrists"
      ? pickUnique(ranked, 1, ["Standing"], used)
      : primarySeries
          .filter((p) =>
            input.intention === "focus" || input.intention === "sthira-sukham"
              ? p.slug === "surya-a"
              : p.slug === "surya-a" ||
                (input.intention === "karma-yoga" && p.slug === "surya-b"),
          )
          .filter((p) => {
            if (used.has(p.slug)) return false;
            used.add(p.slug);
            return true;
          })
          .slice(0, input.intention === "karma-yoga" ? 2 : 1);

  // Heart space: bias opening warm-up toward chest-friendly standing if wrists ok
  if (input.intention === "heart-space" && input.contraindication !== "wrists") {
    // keep surya A already in used; standing picks will prefer heart-tagged shapes
  }

  const standing = pickUnique(
    ranked,
    profile.standingCount,
    ["Standing"],
    used,
  );

  const midFloor = pickUnique(
    ranked,
    profile.midCount,
    profile.midSections,
    used,
  );

  // If intention mid sections underfill (small ontology), backfill from other floor work
  if (midFloor.length < profile.midCount) {
    midFloor.push(
      ...pickUnique(
        ranked,
        profile.midCount - midFloor.length,
        ["Seated", "Backbends", "Twists & binds", "Arm balances"],
        used,
      ),
    );
  }

  const close = pickUnique(
    ranked,
    profile.closeCount,
    ["Finishing", "Arm balances"],
    used,
  ).filter((p) => {
    if (input.contraindication === "neck") {
      return ![
        "sarvangasana",
        "sirsesana",
        "setu-bandhasana",
        "pincha-mayurasana",
      ].includes(p.slug);
    }
    if (input.intention === "grounding" || input.intention === "ahiṃsā") {
      return !["sirsesana", "pincha-mayurasana", "tittibhasana"].includes(p.slug);
    }
    return true;
  });

  const mods: string[] = [];
  if (input.intention === "ahiṃsā") {
    mods.push(
      "Lead with modifications: announce that every posture has a valid 70% version — celebrate breath over shape.",
    );
    mods.push(
      "Offer two depths out loud before demos; never cue “full expression” as the goal.",
    );
  }
  if (input.intention === "sthira-sukham" || input.intention === "focus") {
    mods.push(
      "Fewer postures on purpose — invite students to stay one extra breath rather than add shapes.",
    );
  }
  if (input.intention === "heart-space") {
    mods.push(
      "For backbends: prop the thoracic curve (blanket / block) before asking for more lumbar extension.",
    );
  }
  if (input.intention === "grounding") {
    mods.push(
      "Keep feet on the floor when possible; skip jump-throughs if they scatter attention.",
    );
  }
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

  const philosophyHook =
    input.intention === "sthira-sukham"
      ? "Close with Yoga Sūtras module *sthira-sukham* + Listen slot YS 2.46 when sourced."
      : input.intention === "karma-yoga"
        ? "Point to Gītā module *Karma yoga on the mat* — effort without clinging."
        : input.intention === "equanimity"
          ? "Point to Gītā *Equanimity in action* / *Steady wisdom* after class."
          : input.intention === "ahiṃsā"
            ? "Point to Yoga Sūtras *Yama and niyama* module — ethics as alignment."
            : input.intention === "heart-space"
              ? "One quiet minute with hands at heart — openness as listening, not performance."
              : input.intention === "grounding"
                ? "Close seated: feel the floor supporting you; optionally Listen grounding breath track."
                : "Fewer words in savasana — single-pointed rest; optional Philosophy Listen (not playlist chant).";

  const openingItems = [
    {
      pose: "Arrival breath — Sama vṛtti",
      why: profile.openingBreathWhy,
    },
    ...(profile.arrivalPose ? [profile.arrivalPose] : []),
    ...opening.map((p) => ({
      pose: `${p.sanskrit} (${p.english})`,
      why:
        input.intention === "karma-yoga"
          ? `Warm-up as offering: link breath to movement without chasing a “good” sun salute. Focus: ${p.focus.slice(0, 2).join(" & ")}.`
          : input.intention === "sthira-sukham" || input.intention === "focus"
            ? `Fewer rounds, fuller breath — quality over quantity. Focus: ${p.focus.slice(0, 2).join(" & ")}.`
            : input.intention === "heart-space"
              ? `Move with spacious collarbones; skip forcing the backbend line in the salute. Focus: ${p.focus.slice(0, 2).join(" & ")}.`
              : `Warms ${p.focus.slice(0, 2).join(" & ")}; series-aware entry.`,
    })),
  ];

  const topIntentionHits = ranked
    .filter((x) => x.bodyScore > 0 && x.intentionScore > 0)
    .slice(0, 3)
    .map((x) => x.p.english);

  return {
    title: `${intentionMeta.label} · ${bodyMeta.label}`,
    intentionBlurb: intentionMeta.blurb,
    durationLabel: profile.durationLabel,
    sections: [
      {
        name: "Opening",
        items: openingItems,
      },
      {
        name: profile.standingLabel,
        items: standing.map((p) => ({
          pose: `${p.sanskrit} (${p.english}) · ${p.series === "intermediate" ? "Int." : "Pri."}`,
          why: profile.standingCue(p, input.bodyFocus),
        })),
      },
      {
        name: profile.midLabel(input.bodyFocus),
        items: midFloor.map((p) => ({
          pose: `${p.sanskrit} (${p.english}) · ${p.series === "intermediate" ? "Int." : "Pri."}`,
          why: profile.midCue(p),
        })),
      },
      {
        name: "Close",
        items: [
          ...close.slice(0, 1).map((p) => ({
            pose: `${p.sanskrit} (${p.english})`,
            why:
              input.intention === "ahiṃsā" || input.intention === "grounding"
                ? "Optional finishing shape — skip freely; rest is a complete practice."
                : "Finishing / inversion literacy — only if appropriate for the room.",
          })),
          {
            pose: "Easy seat + philosophy hook",
            why: philosophyHook,
          },
        ],
      },
    ],
    rationale: [
      `Body focus “${bodyMeta.label}” is the primary posture filter from the Primary + Intermediate ontology (rule-based v1).`,
      `Intention “${intentionMeta.label}” reshapes pose selection, section size, cue language, and pacing — not only the title. ${profile.pacingRationale}`,
      topIntentionHits.length
        ? `Composition example: body×intention co-ranked shapes include ${topIntentionHits.join(", ")}.`
        : `Composition: intention tags re-rank within the body-focus pool so hips+sthira ≠ hips+heart.`,
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
    breath: profile.breath,
    philosophyHook,
  };
}
