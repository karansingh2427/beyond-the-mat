import { gitaModules } from "./gita-modules";
import type { PhilosophyModule, PhilosophyTrack } from "./philosophy-types";

export type { PhilosophyModule, PhilosophyTrack } from "./philosophy-types";
export { trackMeta } from "./philosophy-types";

/** Patañjali · Yoga Sūtras study path — original teaching copy */
const patanjaliModules: PhilosophyModule[] = [
  {
    slug: "citta-vrtti",
    track: "patanjali",
    title: "Fluctuations of the mind",
    sanskrit: "citta-vṛtti",
    summary:
      "Yoga as stilling the whirls of mind-stuff — how series practice reveals restlessness, and what to do with it. Pair with Vedic Listen for YS 1.2.",
    themes: ["citta", "vṛtti", "definition of yoga"],
    steps: [
      {
        heading: "The classical claim",
        body: "Patañjali’s famous definition frames yoga as the stilling of *citta-vṛtti* — the mind’s patterned movements. Not “empty your head by force,” but learn to see the whirls without being dragged by every one.",
      },
      {
        heading: "On the mat",
        body: "In Primary or Intermediate, watch the *vṛtti* mid-practice: planning the next pose, replaying a correction, ranking yourself. Alignment literacy and breath give the mind something truer to do than spin.",
        prompt:
          "Name three *vṛttis* that showed up in your last practice. Which one shortened the breath?",
      },
      {
        heading: "Listen + study",
        body: "Open Vedic Listen for Yoga Sūtra 1.2 when audio is sourced — ritual-correct intonation, not ambient chant. Until then, sit with the transliteration and this module’s prompt.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Define yoga as relationship to mental fluctuations — not only flexibility.",
        "Invite students to notice one recurring thought-pattern mid-series.",
        "Close with Listen or silence after āsana.",
      ],
      relatedAsanas: ["Daṇḍāsana", "Nāvāsana", "Padmāsana or easy seat"],
      breath: "Sama vṛtti, then quiet sit — notice *vṛtti* without chasing them.",
    },
    recommendedReading: [
      {
        title: "The Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "Commentary tradition for *citta-vṛtti* — study the book; not reproduced here.",
      },
      {
        title: "Light on the Yoga Sūtras",
        author: "B.K.S. Iyengar",
        note: "Practice-linked reading of the sūtras.",
      },
    ],
  },
  {
    slug: "abhyasa-vairagya",
    track: "patanjali",
    title: "Practice and non-attachment",
    sanskrit: "abhyāsa · vairāgya",
    summary:
      "The twin means: sustained practice (*abhyāsa*) and release of clinging (*vairāgya*) — the engine of serious series work.",
    themes: ["abhyāsa", "vairāgya", "method"],
    steps: [
      {
        heading: "Two wings",
        body: "Patañjali pairs long, uninterrupted, devoted practice with non-attachment. One without the other skews: grinding ambition, or vague ‘letting go’ without showing up.",
      },
      {
        heading: "Series application",
        body: "*Abhyāsa* is returning to the same standing sequence with care. *Vairāgya* is not faking Intermediate binds or measuring worth by pose number. Anatomy cards support both — clarity reduces frantic grasping.",
        prompt:
          "Where is your *abhyāsa* strong this month? Where is *vairāgya* thin?",
      },
      {
        heading: "Teaching",
        body: "Praise consistency louder than novelty. Offer peak postures with multiple honest endpoints so non-attachment has a shape.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Name the twin means in one sentence each.",
        "Design a class that rewards return and precision over new tricks.",
        "Close: release the story of today’s practice as ‘good’ or ‘bad.’",
      ],
      relatedAsanas: ["Sūryanamaskāra A", "Trikoṇāsana", "Paścimottānāsana", "Bakāsana (prep OK)"],
      breath: "Even breath through familiar standing — practice as devotion, not hunt.",
    },
    recommendedReading: [
      {
        title: "Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "For *abhyāsa* / *vairāgya* — named influence only.",
      },
      {
        title: "Bhagavad Gītā",
        author: "Classical text",
        note: "Cross-read with karma-yoga modules on non-clinging action.",
      },
    ],
  },
  {
    slug: "sthira-sukham",
    track: "patanjali",
    title: "Steady and comfortable",
    sanskrit: "sthira-sukham āsanam",
    summary:
      "Āsana as steadiness and ease — not performance flexibility. Pair with Vedic Listen for YS 2.46.",
    themes: ["āsana", "practice quality", "teaching"],
    steps: [
      {
        heading: "What the teaching asks",
        body: "Classical practice names a dual quality: the seat (and by extension the posture) should be steady (*sthira*) and easeful (*sukha*). Modern studios often hear only “push harder” or only “be gentle.” The craft is holding both.",
      },
      {
        heading: "On the mat",
        body: "In Primary or Intermediate, notice where you chase depth and lose breath, or where you collapse soft and lose clarity. Alignment literacy (hips, spine, breath) is how *sthira* becomes intelligent rather than rigid.",
        prompt:
          "Name one posture today where breath shortened. What would steadiness look like at 80% depth?",
      },
      {
        heading: "Listen + class design",
        body: "Theme a class around this pair; cue breath as the meter. Use Vedic Listen for *sthira-sukham āsanam* when ritual-correct audio is attached.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Introduce *sthira* as attention and structural clarity — not grit for its own sake.",
        "Introduce *sukha* as space in the breath and face — not floppy collapse.",
        "Invite students to measure depth by breath quality.",
      ],
      relatedAsanas: ["Daṇḍāsana", "Trikoṇāsana", "Paścimottānāsana", "Uṣṭrāsana (or prep)"],
      breath: "Even ratio nasal breathing (sama vṛtti) for 2–3 minutes before āsana.",
    },
    recommendedReading: [
      {
        title: "The Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "Influence for classical terminology — study the book; we do not reproduce commentary here.",
      },
      {
        title: "Light on Yoga / Light on the Yoga Sūtras",
        author: "B.K.S. Iyengar",
        note: "Alignment and practice as embodied philosophy.",
      },
    ],
  },
  {
    slug: "yama-niyama",
    track: "patanjali",
    title: "Yama and niyama as practice ethics",
    sanskrit: "yama · niyama",
    summary:
      "The ethical limbs as daily studio decisions — not wallpaper slogans. Includes *ahiṃsā* and *aparigraha* as lived alignment.",
    themes: ["yama", "niyama", "ethics"],
    steps: [
      {
        heading: "Outer and inner discipline",
        body: "*Yama* shapes how we relate (non-harm, truthfulness, non-stealing, appropriate use of energy, non-grasping). *Niyama* shapes inner culture (purity, contentment, heat of practice, self-study, dedication). Together they keep series work from becoming vanity sport.",
      },
      {
        heading: "Ahiṃsā and aparigraha on the mat",
        body: "Non-harm includes knees in lotus and Intermediate hip openers. Non-grasping includes not faking binds. Props and prep shapes are ethical technology.",
        prompt:
          "Which *yama* or *niyama* is most tested by your current series edge?",
      },
      {
        heading: "Teacher language",
        body: "Replace “everyone should bind” with pathways. Name contraindications without fear-mongering. Point students to anatomy cards before forcing.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Sketch yama/niyama in under a minute — concrete, not vague virtue.",
        "Frame modifications as intelligence (*ahiṃsā*).",
        "Close with contentment (*santoṣa*): enough for today.",
      ],
      relatedAsanas: [
        "Ardha Baddha Padmottānāsana",
        "Pāśāsana (prep OK)",
        "Eka Pāda Śīrṣāsana (prep OK)",
        "Baddha Koṇāsana",
      ],
      breath: "Gentle lengthened exhale to settle competitive nervous energy.",
    },
    recommendedReading: [
      {
        title: "Yoga Sūtras commentary tradition",
        author: "Edwin F. Bryant",
        note: "For *yama* / *niyama* definitions in classical context.",
      },
      {
        title: "Yoga Anatomy",
        author: "Leslie Kaminoff",
        note: "Structural literacy that supports non-harm in āsana.",
      },
    ],
  },
  {
    slug: "kleasa",
    track: "patanjali",
    title: "The five afflictions",
    sanskrit: "kleśa",
    summary:
      "How ignorance, egoism, attachment, aversion, and fear of loss show up as alignment habits and class culture.",
    themes: ["kleśa", "psychology of practice", "Patañjali"],
    steps: [
      {
        heading: "Map the five",
        body: "Classical yoga names afflictions that color perception (*avidyā*, *asmitā*, *rāga*, *dveṣa*, *abhiniveśa*). On the mat they look like: “I am my Mysore number,” craving a deeper fold, avoiding a weak side, fearing rest days.",
      },
      {
        heading: "Practice experiment",
        body: "Pick one posture you love and one you avoid across Primary or Intermediate. Notice craving and aversion in the body — jaw, breath, eyes — before changing the shape.",
        prompt:
          "Which *kleśa* most often runs your practice? Write one counter-habit for tomorrow’s series.",
      },
      {
        heading: "Teaching without therapy theater",
        body: "Name the pattern lightly; do not diagnose students. Use philosophy as a mirror for practice choices, then return to breath and alignment.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Open with a plain-language map of the five afflictions.",
        "Invite curiosity when aversion appears mid-series.",
        "Close: steadiness is practicing through preference, not indulging it.",
      ],
      relatedAsanas: ["Sūryanamaskāra", "Pārśvottānāsana", "Kapotāsana (prep)", "Nāvāsana"],
      breath: "Nādī śodhana (gentle) if appropriate — balance before intensity.",
    },
    recommendedReading: [
      {
        title: "Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "Primary modern commentary influence for *kleśa* study.",
      },
      {
        title: "Bihar School of Yoga publications",
        author: "Bihar School of Yoga",
        note: "Systematic classical framing for practice psychology.",
      },
    ],
  },
  {
    slug: "astanga-limbs",
    track: "patanjali",
    title: "Eight limbs as studio path",
    sanskrit: "aṣṭāṅga",
    summary:
      "Overview of the eight limbs — āsana and prāṇāyāma as doors, not the whole house. Beyond the Mat keeps the map visible.",
    themes: ["eight limbs", "path", "integration"],
    steps: [
      {
        heading: "The map",
        body: "Outer limbs (*yama*, *niyama*) shape relationship and discipline; *āsana* and *prāṇāyāma* refine body-breath; inner limbs turn toward concentration and absorption. Fitness apps stop at movement.",
      },
      {
        heading: "Where this product lives",
        body: "Primary + Intermediate anatomy = intelligent *āsana*. Breath starter = *prāṇāyāma* literacy. Sūtra and Gītā modules = ethics and mind. Vedic Listen honors sound as study.",
        prompt: "Which limb is overdeveloped in your week? Which is missing?",
      },
      {
        heading: "Class design implication",
        body: "A themed class can touch one ethical limb + one embodied focus + one breath — so students leave with a path, not only a sweat.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Sketch eight limbs in one minute — no jargon fog.",
        "Name today’s class as one outer + one inner emphasis.",
        "Offer a home practice: two minutes of Listen or breath after āsana.",
      ],
      relatedAsanas: [
        "Daṇḍāsana",
        "Padmāsana (or easy seat)",
        "Finishing inversions (if appropriate)",
      ],
      breath: "Choose one protocol from the Breath starter — keep it short and teachable.",
    },
    recommendedReading: [
      {
        title: "Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "Eight-limb architecture.",
      },
      {
        title: "Light on Yoga",
        author: "B.K.S. Iyengar",
        note: "Practice as integrated path.",
      },
      {
        title: "Haṭha Yoga Pradīpikā",
        author: "Classical text (study a reputable edition)",
        note: "Haṭha context for āsana/prāṇāyāma — public-domain or rights-cleared editions.",
      },
    ],
  },
];

export const philosophyModules: PhilosophyModule[] = [
  ...patanjaliModules,
  ...gitaModules,
];

export function getModule(slug: string) {
  return philosophyModules.find((m) => m.slug === slug);
}

export function modulesForTrack(track: PhilosophyTrack) {
  return philosophyModules.filter((m) => m.track === track);
}
