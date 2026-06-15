import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";
import { SCHOOL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Director's Note",
  description:
    "A message from the Director of Pine Crest School Ruiru — welcoming parents and sharing our commitment to excellence in education.",
  path: "/about/directors-note",
});

export default function DirectorsNotePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Director's Note", href: "/about/directors-note" },
  ];

  return (
    <>
      <PageHero title="Director's Note" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-12">
          <p className="text-lg leading-relaxed text-slate-600">
            Dear Parents and Guardians,
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Welcome to {SCHOOL.name}. It is my privilege to lead a school community dedicated to
            nurturing tomorrow&apos;s minds through excellence in education, strong Christian values,
            and a genuine care for every learner who walks through our gates.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            In an era where Kenya&apos;s education landscape is evolving through Competency-Based
            Education, we remain committed to staying ahead — equipping our teachers, investing in
            our facilities, and ensuring that your child receives an education that is both
            nationally aligned and personally meaningful.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            I invite you to visit our campus, meet our team, and experience the warmth and
            excellence that define Pine Crest. Together, we can build the foundation your child
            needs for a bright future.
          </p>
          <p className="mt-8 font-semibold text-green-900">— The Director, Pine Crest School</p>
        </div>
      </div>
    </>
  );
}
