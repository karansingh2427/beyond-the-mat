export type SeriesId = "primary" | "intermediate";

export type SeriesSection =
  | "Sūryanamaskāra"
  | "Standing"
  | "Seated"
  | "Backbends"
  | "Twists & binds"
  | "Arm balances"
  | "Finishing";

export type Posture = {
  series: SeriesId;
  slug: string;
  sanskrit: string;
  english: string;
  section: SeriesSection;
  order: number;
  focus: string[];
  stabilize: string[];
  move: string[];
  compensations: string[];
  props: string[];
  contraindications: string[];
  cues: string[];
  alignmentPoints: { id: string; label: string; hint: string }[];
  influences: string[];
};

export type PostureSeed = Omit<Posture, "series">;
