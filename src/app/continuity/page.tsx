import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ContinuityPreview } from "@/components/continuity-preview";

export const metadata: Metadata = {
  title: "Continuity",
  description:
    "Post-retreat and YTT continuity vision for Beyond the Mat — cohorts, practice objects, teacher check-ins, and a trusted graph later.",
};

export default function ContinuityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="After the retreat"
        title="Continuity"
        description="Practice continuity when the program ends — fellows on a shared syllabus, teachers still in the loop, learning objects that outlast the chat thread. Full Continuity ships after people-testing validates the studio; this page is the honest preview."
      />
      <div className="mt-12">
        <ContinuityPreview />
      </div>
    </div>
  );
}
