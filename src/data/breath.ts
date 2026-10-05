export type BreathProtocol = {
  slug: string;
  name: string;
  sanskrit: string;
  duration: string;
  level: "starter" | "steady";
  summary: string;
  steps: string[];
  playlistNote: string;
  cautions: string[];
  influences: string[];
};

export const breathProtocols: BreathProtocol[] = [
  {
    slug: "sama-vrtti",
    name: "Even-ratio breathing",
    sanskrit: "Sama vṛtti",
    duration: "3–5 min",
    level: "starter",
    summary:
      "Match inhale and exhale lengths to settle attention before or after series work.",
    steps: [
      "Sit in a steady seat (Daṇḍāsana or easy cross-leg) with a long spine.",
      "Inhale through the nose for a count of 4.",
      "Exhale through the nose for a count of 4.",
      "Continue 8–12 rounds. Increase to 5–6 only if the breath stays smooth.",
    ],
    playlistNote:
      "Optional: bring your own quiet playlist as accompaniment — soft instrumental is fine. This is not Vedic sūtra/mantra recitation; use Philosophy → Listen for ritual-correct chanting.",
    cautions: [
      "Stop if you feel dizzy or anxious.",
      "No breath retention in this starter version.",
    ],
    influences: ["Bihar School breath literacy", "Haṭha practice context"],
  },
  {
    slug: "dirgha",
    name: "Three-part breath",
    sanskrit: "Dīrgha / full yogic breath",
    duration: "4 min",
    level: "starter",
    summary:
      "Belly, ribs, then chest on the inhale — reverse on the exhale. Builds awareness of respiratory shape.",
    steps: [
      "One hand on belly, one on side ribs if helpful.",
      "Inhale: belly softens wide → ribs expand → chest gently lifts.",
      "Exhale: chest softens → ribs narrow → belly draws in lightly.",
      "Keep the face and jaw easy; nasal breathing throughout.",
    ],
    playlistNote:
      "User playlists welcome as background. Keep volume below the sound of your own breath.",
    cautions: [
      "Avoid forcing the chest or creating strain in the neck.",
      "Skip deep full breaths if recovering from respiratory illness — consult a professional.",
    ],
    influences: ["Leslie Kaminoff (breath–structure)", "Bihar School"],
  },
  {
    slug: "nadi-shodhana",
    name: "Alternate-nostril breath",
    sanskrit: "Nādī śodhana (gentle)",
    duration: "5 min",
    level: "steady",
    summary:
      "A gentle balancing practice. Starter version without long retention.",
    steps: [
      "Use the right hand in a comfortable nostril-control position (or simply use a finger).",
      "Close the right nostril; inhale left.",
      "Close the left; exhale right.",
      "Inhale right; close right; exhale left. That is one round.",
      "Continue 6–10 rounds with even, quiet breath.",
    ],
    playlistNote:
      "Optional personal playlist. Do not layer commercial “chant” albums here and call them Vedic — keep sacred Listen separate.",
    cautions: [
      "Skip if nasal congestion is severe.",
      "No extended kumbhaka (retention) in v1 starter — learn with a teacher first.",
    ],
    influences: ["Bihar School of Yoga publications", "Haṭha Yoga Pradīpikā (context)"],
  },
  {
    slug: "ujjayi-lite",
    name: "Soft oceanic breath",
    sanskrit: "Ujjāyī (gentle)",
    duration: "2–4 min seated, or during slow āsana",
    level: "steady",
    summary:
      "A light throat constriction that makes the breath softly audible to you — common in vinyāsa rooms, taught here as awareness, not force.",
    steps: [
      "Inhale and exhale through the nose.",
      "Slightly narrow the back of the throat as if fogging a mirror, but with the mouth closed.",
      "Keep the sound soft — you should hear it; your neighbor need not.",
      "Pair with slow Sūryanamaskāra only if the breath stays steady.",
    ],
    playlistNote:
      "During āsana, prefer no playlist or very low volume so you can hear ujjāyī. Save playlists for seated breath if desired.",
    cautions: [
      "If the throat feels strained, release the constriction and return to quiet nasal breath.",
      "Not a competition for louder breath.",
    ],
    influences: ["Ashtanga / vinyāsa breath culture", "Iyengar breath precision as influence"],
  },
  {
    slug: "extended-exhale",
    name: "Lengthened exhale",
    sanskrit: "Viṣama vṛtti (exhale-long)",
    duration: "3–4 min",
    level: "starter",
    summary:
      "Slightly longer exhales to downshift after intense series work or before philosophy study.",
    steps: [
      "Inhale nasal for 4.",
      "Exhale nasal for 6.",
      "Keep shoulders soft; pause naturally if needed — no forced hold.",
      "After 8 rounds, sit quietly for three ordinary breaths.",
    ],
    playlistNote:
      "A calm personal playlist can accompany this. For sūtra listening afterward, switch to Philosophy → Listen (ritual intonation), not the same playlist.",
    cautions: [
      "If longer exhales create panic, return to equal counts.",
      "Educational practice only — not a medical treatment for anxiety.",
    ],
    influences: ["Bihar School", "Contemporary breath pedagogy grounded in classical practice"],
  },
];
