export type ListenTrack = {
  id: string;
  title: string;
  category: "sūtra" | "mantra";
  textRef: string;
  transliteration: string;
  meaningNote: string;
  durationLabel: string;
  audioSrc: string;
  attribution: {
    status: "demo" | "rights-cleared";
    reciterSlot: string;
    traditionSlot: string;
    rightsNote: string;
  };
  pedagogy: string[];
};

/**
 * Vedic Listen catalog — real files in /public/audio.
 * No commercial mantra albums. Demos labeled honestly until pandit Vedic-svara ships.
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
    durationLabel: "~0:06 · demo",
    audioSrc: "/audio/ys-1-2-demo.m4a",
    attribution: {
      status: "demo",
      reciterSlot: "Beyond the Mat demo recitation (TTS) — pandit source TBD",
      traditionSlot: "Spoken Sanskrit study aid — not ritual Vedic svara",
      rightsNote:
        "Original demo recording for this app. Ritual-correct Vedic intonation will replace this when rights-cleared.",
    },
    pedagogy: [
      "Sit tall. Listen for syllable shapes — this demo is study speech, not Vedic pitch accent.",
      "Do not treat sacred Listen as background spa sound. Follow the syllables; notice attention.",
      "Seek a living teacher’s traditional form when you can; this card keeps the text audible in the meantime.",
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
    durationLabel: "~0:05 · demo",
    audioSrc: "/audio/ys-2-46-demo.m4a",
    attribution: {
      status: "demo",
      reciterSlot: "Beyond the Mat demo recitation (TTS) — pandit source TBD",
      traditionSlot: "Spoken Sanskrit study aid — not ritual Vedic svara",
      rightsNote:
        "Original demo recording. Demo recitation — ritual-correct pandit source TBD.",
    },
    pedagogy: [
      "Hear steadiness and ease as qualities in the sound — unhurried, exact.",
      "After listening, take Daṇḍāsana or easy seat for three breaths and feel the pair in the body.",
    ],
  },
  {
    id: "gayatri-short",
    title: "Gāyatrī (short form)",
    category: "mantra",
    textRef: "Gāyatrī mantra — traditional Vedic",
    transliteration:
      "oṃ bhūr bhuvaḥ svaḥ · tat savitur vareṇyaṃ · bhargo devasya dhīmahi · dhiyo yo naḥ pracodayāt",
    meaningNote:
      "Mantra study belongs with correct transmission and intonation. This recording is a rights-cleared traditional-style recitation for study — not a commercial “meditation chant” album.",
    durationLabel: "~0:22",
    audioSrc: "/audio/gayatri.m4a",
    attribution: {
      status: "rights-cleared",
      reciterSlot: "Rameshvar (Wikimedia Commons)",
      traditionSlot: "Traditional-style Gāyatrī recitation",
      rightsNote:
        "Source: Wikimedia Commons “Gayatri Mantra as it is” — Free Art License. Converted to AAC for browser playback. Prefer your teacher’s lineage form when you have it.",
    },
    pedagogy: [
      "Vedic mantra is ritual speech. Intonation is part of correct form — like alignment in āsana.",
      "Use this for familiarization; deepen with a living teacher’s transmission.",
    ],
  },
  {
    id: "invocation-slot",
    title: "Opening invocation (Ashtanga context)",
    category: "mantra",
    textRef: "Traditional opening chant used in many Ashtanga rooms",
    transliteration:
      "vande gurūṇāṃ caraṇāravinde … (study the full form with your shala)",
    meaningNote:
      "Many Mysore rooms open with a traditional invocation. Beyond the Mat’s job is respect and clear sourcing — not a studio remix.",
    durationLabel: "~0:06 · demo",
    audioSrc: "/audio/invocation-demo.m4a",
    attribution: {
      status: "demo",
      reciterSlot: "Beyond the Mat demo recitation (TTS) — lineage form TBD",
      traditionSlot: "As taught in your lineage / shala — prefer that transmission",
      rightsNote:
        "Original demo snippet only. Demo recitation — ritual-correct pandit / shala source TBD. Privilege your shala’s taught form.",
    },
    pedagogy: [
      "If your shala teaches an opening chant, privilege that transmission.",
      "Use this Listen slot for home familiarization until a properly attributed traditional recording is attached.",
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
    "Ritual-correct Vedic / traditional pandit recitation when available",
    "Clear attribution: reciter, tradition/śākhā, rights",
    "No unlicensed commercial mantra albums",
    "Demos stay labeled until ritual-correct audio replaces them",
  ],
};
