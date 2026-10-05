import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ClassDesigner } from "@/components/class-designer";

export const metadata: Metadata = {
  title: "Class Design",
  description:
    "Generate a Primary-series-aware class outline with filters and rationale.",
};

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <PageIntro
        eyebrow="Equal pillar"
        title="Class design assist"
        description="Choose body focus, intention (including Sūtras and Gītā themes), and a contraindication flag. Get a rule-based outline with sequencing rationale — seeded from Primary + Intermediate."
      />
      <div className="mt-12">
        <ClassDesigner />
      </div>
    </div>
  );
}
