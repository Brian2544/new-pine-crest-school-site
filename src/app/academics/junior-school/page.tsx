import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Junior School — Grades 7–9",
  description:
    "Junior School Grades 7–9 at Pine Crest School — Integrated Science, Pre-Technical Studies, Life Skills, and KJSEA preparation in Ruiru.",
  path: "/academics/junior-school",
  keywords: ["Junior School Ruiru", "Grade 7 8 9 school", "KJSEA preparation"],
});

const subjects = [
  "English & Kiswahili",
  "Mathematics",
  "Integrated Science",
  "Pre-Technical Studies",
  "Social Studies",
  "Business Studies",
  "Agriculture",
  "Home Science",
  "Creative Arts & Sports",
  "Religious Education",
  "Life Skills Education",
];

export default function JuniorSchoolPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Junior School", href: "/academics/junior-school" },
  ];

  return (
    <>
      <PageHero
        title="Junior School"
        description="Grades 7–9 | Ages 12–14 | Preparing for Senior School pathways"
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            Junior School (Grades 7–9) is a critical transition phase in Kenya&apos;s
            2-6-3-3-3 education system. Learners develop deeper competencies, explore career
            interests, and prepare for the Kenya Junior School Education Assessment (KJSEA) at the
            end of Grade 9.
          </p>
          <h2 className="font-serif text-2xl font-bold text-green-950">Learning Areas</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {subjects.map((subject) => (
              <li key={subject} className="flex items-center gap-2 text-base">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                {subject}
              </li>
            ))}
          </ul>
          <p>
            Our Junior School programme emphasises practical learning, laboratory work, pre-technical
            skills, and life skills education. Learners are guided to discover their strengths and
            interests ahead of Senior School pathway selection.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/admissions/apply">Apply for Junior School</Button>
        </div>
      </div>
    </>
  );
}
