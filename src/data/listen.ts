export type ListenTrack = {
  id: string;
  title: string;
  category: "sūtra" | "mantra";
  textRef: string;
  transliteration: string;
  meaningNote: string;
  durationLabel: string;
  /** null = placeholder until rights-cleared Vedic recitation is plugged in */
  audioSrc: string | null;
  attribution: {
    status: "placeholder" | "rights-cleared";
    reciterSlot: string;
    traditionSlot: string;
    rightsNote: string;
  };
  pedagogy: string[];
};

/**
 * Vedic Listen catalog — UX + pedagogy first.
 * No commercial mantra albums. Audio slots await ritual-correct, rights-cleared recitation.
 */
export const listenTracks: ListenTrack[] = [
  {
    id: "ys-1-2",
    title: "Yoga Sūtra 1.2",
    category: "sūtra",
    textRef: "Patañjali Yoga Sūtra 1.2",
    transliteration: "yogaś citta-vṛtti-nirodhaḥ",
    meaningNote:
      "A working sense: yoga is the stilling of the fluctuations of mind-stuff — study a full commentary (e.g. Bryant) for nuance. We keep translation light and point you to sources.",
    durationLabel: "~0:45 (when sourced)",
    audioSrc: null,
    attribution: {
      status: "placeholder",
      reciterSlot: "Traditional Vedic / pandit reciter — TBD",
      traditionSlot: "Śākhā / chanting lineage — TBD",
      rightsNote:
        "Placeholder player. Beyond the Mat will only attach ritual-correct Vedic intonation recordings with clear rights and attribution — never generic new-age chant albums.",
    },
    pedagogy: [
      "Sit tall. Listen for pitch contour — Vedic recitation carries svara (intonation), not a pop melody.",
      "Do not treat this as background spa sound. Follow the syllables; notice attention.",
      "If the player is still a placeholder, read the transliteration aloud slowly after hearing a teacher’s traditional form when you can.",
    ],
  },
  {
    id: "ys-2-46",
    title: "Yoga Sūtra 2.46",
    category: "sūtra",
    textRef: "Patañjali Yoga Sūtra 2.46",
    transliteration: "sthira-sukham āsanam",
    meaningNote:
      "The seat/posture is steady and easeful — the spine of Beyond the Mat’s āsana philosophy module.",
    durationLabel: "~0:40 (when sourced)",
    audioSrc: null,
    attribution: {
      status: "placeholder",
      reciterSlot: "Traditional Vedic / pandit reciter — TBD",
      traditionSlot: "Śākhā / chanting lineage — TBD",
      rightsNote:
        "Awaiting licensed or otherwise rights-cleared ritual recitation. Will not substitute ambient Om loops.",
    },
    pedagogy: [
      "Hear steadiness and ease as qualities in the sound — unhurried, exact.",
      "After listening, take Daṇḍāsana or easy seat for three breaths and feel the pair in the body.",
    ],
  },
  {
    id: "gayatri-short",
    title: "Gāyatrī (short form slot)",
    category: "mantra",
    textRef: "Gāyatrī mantra — traditional Vedic",
    transliteration: "oṃ bhūr bhuvaḥ svaḥ … (full line via your teacher / rights-cleared source)",
    meaningNote:
      "We do not print a casual pop transliteration as “good enough.” Mantra study belongs with correct transmission and intonation.",
    durationLabel: "~1:30 (when sourced)",
    audioSrc: null,
    attribution: {
      status: "placeholder",
      reciterSlot: "Authorized Vedic reciter — TBD",
      traditionSlot: "Traditional Vedic ritual chanting — TBD",
      rightsNote:
        "Mantra audio will only ship when properly sourced. No commercial “meditation chant” album stand-ins.",
    },
    pedagogy: [
      "Vedic mantra is ritual speech. Intonation is part of correct form — like alignment in āsana.",
      "Until audio is attached, use this card to learn *why* sourcing matters, then seek a living teacher’s recitation.",
    ],
  },
  {
    id: "invocation-slot",
    title: "Opening invocation (Ashtanga context)",
    category: "mantra",
    textRef: "Traditional opening chant used in many Ashtanga rooms",
    transliteration: "Study with your shala’s taught form; we do not invent a studio remix.",
    meaningNote:
      "Many Mysore rooms open with a traditional invocation. Beyond the Mat’s job is correct sound sourcing and respect — not a new-age cover.",
    durationLabel: "~2:00 (when sourced)",
    audioSrc: null,
    attribution: {
      status: "placeholder",
      reciterSlot: "Lineage-appropriate reciter — TBD",
      traditionSlot: "As taught in your lineage / shala — TBD",
      rightsNote:
        "Placeholder with attribution slots for a rights-cleared traditional recording.",
    },
    pedagogy: [
      "If your shala teaches an opening chant, privilege that transmission.",
      "Use this Listen slot for home study only with properly attributed audio once available.",
    ],
  },
];

export const vedicListenExplainer = {
  title: "Why intonation matters",
  paragraphs: [
    "Karandeep’s bar: sūtras and mantras should be heard in the intonation they are supposed to according to Vedic ritual practice — not as generic ambient or new-age chant tracks.",
    "In pedagogical terms, Vedic recitation preserves pitch accent and traditional contour (often introduced via ideas like udātta, anudātta, and svarita). Beyond the Mat teaches the importance of this without pretending an app replaces a living teacher.",
    "Playlist music that accompanies breathwork is a different job. Sacred Listen is text-and-ritual sound.",
  ],
  sourcingStandard: [
    "Ritual-correct Vedic / traditional pandit recitation",
    "Clear attribution: reciter, tradition/śākhā, rights",
    "No unlicensed commercial mantra albums",
    "Placeholders stay labeled until audio is real",
  ],
};
