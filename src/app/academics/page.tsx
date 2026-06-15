import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CURRICULUM_LEVELS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Academics",
  description:
    "KICD-aligned Competency-Based Education at Pine Crest School — Pre-Primary, Lower Primary, Upper Primary, and Junior School (Grades 7–9) in Ruiru.",
  path: "/academics",
  keywords: ["CBE curriculum Ruiru", "KICD aligned school", "Junior School Ruiru"],
});

export default function AcademicsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
  ];

  return (
    <>
      <PageHero
        title="Academics"
        description="KICD-aligned Competency-Based Education across all levels of basic education."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-slate-600">
            Pine Crest School delivers Kenya&apos;s Competency-Based Education (CBE) across the
            2-6-3-3-3 system. Learning is organised into KICD learning areas with strands and
            sub-strands, assessed through Competency-Based Assessment (CBA) using BE, AE, ME, and EE
            rubric bands.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {CURRICULUM_LEVELS.map((level) => (
            <article
              key={level.title}
              className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h2 className="font-serif text-2xl font-bold text-green-950">{level.title}</h2>
              <p className="mt-1 font-medium text-amber-600">{level.grades}</p>
              <p className="text-sm text-slate-500">{level.ages}</p>
              <p className="mt-4 text-slate-600">{level.description}</p>
              <Link
                href={level.href}
                className="mt-6 inline-flex items-center gap-1 font-semibold text-green-800 hover:gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
