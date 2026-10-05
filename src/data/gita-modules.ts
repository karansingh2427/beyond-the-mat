import type { PhilosophyModule } from "./philosophy-types";

/** Bhagavad Gītā study path — original teaching copy; named translations as reading */
export const gitaModules: PhilosophyModule[] = [
  {
    slug: "gita-karma-yoga",
    track: "gita",
    title: "Karma yoga on the mat",
    sanskrit: "karma-yoga",
    summary:
      "Action without clinging to results — how series practice and teaching can become offering rather than acquisition.",
    themes: ["karma yoga", "non-attachment", "teaching"],
    steps: [
      {
        heading: "The teaching in plain language",
        body: "The Gītā’s karma-yoga thread asks for wholehearted action without the nervous grip on outcome. In a Mysore or Intermediate room that often looks like: practice the vinyāsa you have, not the Instagram ending you want.",
      },
      {
        heading: "On the mat",
        body: "Notice where you practice for a future posture, a teacher’s nod, or a private scoreboard. Karma yoga redirects effort into breath, alignment, and consistency — the fruit is not yours to clutch mid-fold.",
        prompt:
          "Name one place this week where result-hunger shortened your breath. What would wholehearted effort look like without that grip?",
      },
      {
        heading: "In class design",
        body: "Theme a class around skillful action: fewer peak poses, clearer why, and explicit permission for honest modifications. Point students to effort quality, not pose count.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Define karma yoga as full effort without clinging to the shape’s ‘success.’",
        "Cue breath as the meter of non-clinging.",
        "Close: what you offered today is complete even if a bind stayed unfinished.",
      ],
      relatedAsanas: [
        "Sūryanamaskāra A",
        "Paścimottānāsana",
        "Pāśāsana (prep OK)",
        "Bakāsana (prep OK)",
      ],
      breath: "Sama vṛtti before āsana; lengthened exhale after peak work.",
    },
    recommendedReading: [
      {
        title: "Bhagavad Gītā",
        author: "Classical text — choose a respected translation",
        note: "Study karma-yoga chapters in a full edition; we do not reproduce commentary here.",
      },
      {
        title: "Yoga Sūtras commentary tradition",
        author: "Edwin F. Bryant",
        note: "Useful cross-read on non-attachment themes — named influence only.",
      },
    ],
  },
  {
    slug: "gita-sthitaprajna",
    track: "gita",
    title: "Steady wisdom",
    sanskrit: "sthitaprajña",
    summary:
      "The person of steady wisdom — equanimity when practice (and life) swings between praise, frustration, ease, and difficulty.",
    themes: ["sthitaprajña", "equanimity", "practice psychology"],
    steps: [
      {
        heading: "What steadiness is not",
        body: "Steady wisdom is not numbness or forced positivity. The Gītā’s ideal is clarity that does not tip into elation when a posture ‘works’ or despair when Intermediate exposes a limit.",
      },
      {
        heading: "Series as training ground",
        body: "Primary and Intermediate both deliver preference and aversion. Use one posture you love and one you avoid as a laboratory for *sthitaprajña* — same breath standard for both.",
        prompt:
          "After tomorrow’s practice, write one sentence that is neither victory lap nor self-attack.",
      },
      {
        heading: "Teaching tone",
        body: "Model evenness in your voice when students succeed and when they modify. Equanimity is contagious; so is performance anxiety.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Introduce *sthitaprajña* as steady seeing, not flat feeling.",
        "Invite students to notice praise/blame stories mid-series.",
        "End in stillness long enough for the nervous system to settle.",
      ],
      relatedAsanas: ["Daṇḍāsana", "Uṣṭrāsana (or prep)", "Gomukhāsana", "Finishing seat"],
      breath: "Extended exhale after backbends or intense standing.",
    },
    recommendedReading: [
      {
        title: "Bhagavad Gītā",
        author: "Classical text — Arjuna’s questions & the sthitaprajña passages",
        note: "Read in a full translation; short public-domain excerpts only if pedagogically needed later.",
      },
      {
        title: "Light on the Yoga Sūtras / practice writings",
        author: "B.K.S. Iyengar",
        note: "Embodied steadiness as influence — not pasted commentary.",
      },
    ],
  },
  {
    slug: "gita-samatva",
    track: "gita",
    title: "Equanimity in action",
    sanskrit: "samatva",
    summary:
      "Evenness (*samatva*) as a practical class theme — heat and cool, bind and prep, strong side and weak side.",
    themes: ["equanimity", "samatva", "class theme"],
    steps: [
      {
        heading: "Evenness ≠ sameness",
        body: "Equanimity does not mean every posture gets equal time. It means the mind’s valuation softens: the ‘advanced’ Intermediate shape and the humble modification share dignity.",
      },
      {
        heading: "Practice experiment",
        body: "In Intermediate backbends or Primary folds, alternate sides with identical breath counts. Where the mind ranks one side as ‘good,’ name it and return to even effort.",
        prompt: "Which side of the body does your ego prefer? How will you even the breath there?",
      },
      {
        heading: "Design implication",
        body: "Build sequences that pair intensity with recovery and left/right honesty. Avoid classes that only celebrate the peak photo.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Define *samatva* as even-mindedness in effort and rest.",
        "Cue equal breath on both sides before chasing depth.",
        "Close with gratitude for the ‘weaker’ side as teacher.",
      ],
      relatedAsanas: [
        "Trikoṇāsana",
        "Ardha Matsyendrāsana",
        "Dhanurāsana",
        "Nāvāsana",
      ],
      breath: "Nādī śodhana (gentle) if appropriate — balance before intensity.",
    },
    recommendedReading: [
      {
        title: "Bhagavad Gītā",
        author: "Classical text",
        note: "Equanimity passages — study in translation; original BY teaching copy in-app.",
      },
      {
        title: "Bihar School of Yoga publications",
        author: "Bihar School of Yoga",
        note: "Systematic classical framing as influence.",
      },
    ],
  },
  {
    slug: "gita-bhakti-action",
    track: "gita",
    title: "Devotion through action",
    sanskrit: "bhakti & action",
    summary:
      "Devotion not as sentimentality but as dedicated action — linking breath, study, and service in the studio.",
    themes: ["bhakti", "dedication", "intention"],
    steps: [
      {
        heading: "Beyond soft aesthetics",
        body: "Studio culture sometimes packages ‘devotion’ as playlist mood. The Gītā’s bhakti-thread is tougher: orient action toward something larger than preference — teacher, tradition, clarity, or the welfare of the room.",
      },
      {
        heading: "Listen and offer",
        body: "Pair this module with Vedic Listen when rights-cleared audio exists — ritual-correct sound as study, not spa chant. Until then, a quiet dedication at the start of practice is enough.",
        prompt:
          "To what or whom do you dedicate tomorrow’s practice — in one concrete sentence?",
      },
      {
        heading: "Teaching",
        body: "Invite optional dedication without forcing belief language. Action itself can be the offering: tidy the space, cue safely, leave ego off the playlist.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Frame dedication as orientation, not performance of piety.",
        "Offer a moment of Listen or silence before āsana.",
        "End by naming one act of care (for body, neighbor, or room).",
      ],
      relatedAsanas: ["Padmāsana or easy seat", "Uṣṭrāsana (heart space, careful)", "Finishing inversions if appropriate"],
      breath: "Soft oceanic breath or quiet sit — keep sacred Listen separate from playlist.",
    },
    recommendedReading: [
      {
        title: "Bhagavad Gītā",
        author: "Classical text — bhakti / dedicated action threads",
        note: "Full translation recommended; no commercial mantra-album substitute for study.",
      },
      {
        title: "Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant (commentary tradition)",
        note: "Īśvara-praṇidhāna cross-read as named influence.",
      },
    ],
  },
  {
    slug: "gita-buddha-field",
    track: "gita",
    title: "Field and knower",
    sanskrit: "kṣetra · kṣetrajña",
    summary:
      "The body-mind as field (*kṣetra*) and the witnessing knowing (*kṣetrajña*) — anatomy literacy meets contemplative stance.",
    themes: ["discrimination", "anatomy", "witness"],
    steps: [
      {
        heading: "Two layers",
        body: "The Gītā distinguishes the field (body, senses, thoughts) from that which knows the field. Alignment study sharpens knowledge of the field; philosophy softens identification with every sensation as ‘me.’",
      },
      {
        heading: "Practice link",
        body: "In Intermediate backbends or Primary folds, label: sensation (field) vs. the story (‘I am failing’). Return to stabilize/move cues as clear seeing of the field.",
        prompt:
          "In one posture today, separate three field facts from one ego story.",
      },
      {
        heading: "Class design",
        body: "Teach one anatomy focus as ‘knowing the field,’ then one minute of witness breath. Philosophy and Body pillars meet without fluff.",
      },
    ],
    classTheme: {
      talkingPoints: [
        "Name field vs. knower in plain language.",
        "Use one alignment point as ‘field literacy.’",
        "Close with silent sit: watch breath without fixing it.",
      ],
      relatedAsanas: ["Daṇḍāsana", "Śalabhāsana A", "Paścimottānāsana", "Pīñcha Mayūrāsana (prep/wall OK)"],
      breath: "Three-part breath to feel the field; then quiet watch.",
    },
    recommendedReading: [
      {
        title: "Bhagavad Gītā",
        author: "Classical text — field/knower discourse",
        note: "Study in a respected edition; original BY modules only in-app.",
      },
      {
        title: "Yoga Anatomy",
        author: "Leslie Kaminoff",
        note: "Field literacy for the body — named influence.",
      },
    ],
  },
];
