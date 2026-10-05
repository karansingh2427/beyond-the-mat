export type PhilosophyTrack = "patanjali" | "gita";

export type PhilosophyModule = {
  slug: string;
  track: PhilosophyTrack;
  title: string;
  sanskrit?: string;
  summary: string;
  themes: string[];
  steps: { heading: string; body: string; prompt?: string }[];
  classTheme: {
    talkingPoints: string[];
    relatedAsanas: string[];
    breath: string;
  };
  recommendedReading: { title: string; author: string; note: string }[];
};

export const trackMeta: {
  id: PhilosophyTrack;
  label: string;
  description: string;
}[] = [
  {
    id: "patanjali",
    label: "Patañjali · Yoga Sūtras",
    description:
      "Interactive modules on classical yoga psychology and practice qualities.",
  },
  {
    id: "gita",
    label: "Bhagavad Gītā",
    description:
      "Themes for practice and teaching — karma yoga, equanimity, devotion through action.",
  },
];
