import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pre-Primary Education",
  description:
    "Play Group, PP1 & PP2 at Pine Crest School Ruiru — play-based Early Years Education aligned with Kenya's CBE framework.",
  path: "/academics/pre-primary",
});

const learningAreas = [
  "Mathematical Activities",
  "Language Activities (English & Kiswahili)",
  "Environmental Activities",
  "Psychomotor & Creative Activities",
  "Religious Education Activities",
];

export default function PrePrimaryPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Pre-Primary", href: "/academics/pre-primary" },
  ];

  return (
    <>
      <PageHero
        title="Pre-Primary"
        description="Play Group, PP1 & PP2 — Ages 4–5 | Early Years Education"
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-none space-y-6 text-lg leading-relaxed">
          <p className="text-slate-600">
            Our Pre-Primary programme provides a joyful, play-based foundation for lifelong
            learning. Learners in Play Group, PP1, and PP2 develop early literacy, numeracy,
            social skills, and creativity in a safe, nurturing Christian environment.
          </p>
          <h2 className="font-serif text-2xl font-bold text-green-950">KICD Learning Areas</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {learningAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            Assessment at this level is continuous and competency-based, focusing on observable
            milestones rather than formal examinations. Our experienced early years teachers create
            engaging activities that build confidence and curiosity.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/admissions/apply">Apply for Pre-Primary</Button>
        </div>
      </div>
    </>
  );
}
