import type { Metadata } from "next";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { AlignmentUploader } from "@/components/alignment-uploader";

export const metadata: Metadata = {
  title: "Upload alignment",
  description:
    "Pick a Primary or Intermediate posture, upload a still, get structured checklist feedback.",
};

export default function AlignmentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Anatomy loop"
        title="Upload alignment"
        description="Choose a Primary or Intermediate posture, upload a still of your hold, and receive structured checklist feedback tied to that posture’s alignment points. Heuristic v1 — clearly not medical diagnosis; live camera cues come later."
      />
      <div className="mt-12">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading…</p>}>
          <AlignmentUploader />
        </Suspense>
      </div>
    </div>
  );
}
