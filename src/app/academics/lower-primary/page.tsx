import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Lower Primary — Grades 1–3",
  description:
    "Lower Primary Grades 1–3 at Pine Crest School — foundational literacy, numeracy, and competencies through KICD-aligned CBE.",
  path: "/academics/lower-primary",
});

export default function LowerPrimaryPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Lower Primary", href: "/academics/lower-primary" },
  ];

  return (
    <>
      <PageHero title="Lower Primary" description="Grades 1–3 | Ages 6–8" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            Lower Primary at Pine Crest builds strong foundations in literacy, numeracy, and
            essential life skills. Learners in Grades 1–3 engage with KICD learning areas through
            interactive, learner-centred methods that encourage curiosity and active participation.
          </p>
          <p>
            Key learning areas include English, Kiswahili, Mathematics, Environmental Activities,
            Hygiene & Nutrition, Religious Education, and Creative Arts. Assessment follows
            Competency-Based Assessment (CBA) principles with continuous monitoring using BE, AE,
            ME, and EE performance bands.
          </p>
          <p>
            Our teachers differentiate instruction to meet diverse learning needs, ensuring every
            child progresses at a pace that builds confidence and mastery.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/admissions/apply">Apply for Lower Primary</Button>
        </div>
      </div>
    </>
  );
}
