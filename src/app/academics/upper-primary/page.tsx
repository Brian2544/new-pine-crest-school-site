import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Upper Primary — Grades 4–6",
  description:
    "Upper Primary Grades 4–6 at Pine Crest School Ruiru — deeper subject mastery and CBA preparation in Kenya's CBE system.",
  path: "/academics/upper-primary",
});

export default function UpperPrimaryPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Upper Primary", href: "/academics/upper-primary" },
  ];

  return (
    <>
      <PageHero title="Upper Primary" description="Grades 4–6 | Ages 9–11" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            Upper Primary (Grades 4–6) deepens learners&apos; subject knowledge and critical
            thinking skills. At this stage, students engage with expanded KICD learning areas
            including Science & Technology, Social Studies, Agriculture, and Creative Arts.
          </p>
          <p>
            Learners develop research skills, collaborative project work, and independent study
            habits. Competency-Based Assessment continues with portfolio-based evidence, practical
            tasks, and rubric-guided evaluation.
          </p>
          <p>
            Upper Primary prepares learners for the transition to Junior School (Grades 7–9), where
            they will explore career pathways and specialised learning areas.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/admissions/apply">Apply for Upper Primary</Button>
        </div>
      </div>
    </>
  );
}
