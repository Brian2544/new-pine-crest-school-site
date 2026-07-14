import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admissions",
  description:
    "Admissions at Pine Crest School Ruiru — requirements, process, and how to apply for Play Group through Grade 9. Limited spaces available.",
  path: "/admissions",
  keywords: ["school admissions Ruiru", "apply Pine Crest School"],
});

const requirements = [
  "Completed online application form",
  "Copy of child's birth certificate",
  "Passport-size photographs (2)",
  "Previous school report / transfer letter (if applicable)",
  "Parent / guardian national ID copy",
];

const steps = [
  { step: 1, title: "Apply Online", description: "Fill in the application form on our website." },
  {
    step: 2,
    title: "Admissions Review",
    description: "Our admissions office reviews your application and contacts you.",
  },
  {
    step: 3,
    title: "School Visit",
    description: "Schedule a campus visit to meet our team and tour the facilities.",
  },
  {
    step: 4,
    title: "Enrolment",
    description: "Complete enrolment documents and secure your child's place.",
  },
];

export default function AdmissionsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Admissions", href: "/admissions" },
  ];

  return (
    <>
      <PageHero
        title="Admissions"
        description="Join the Pine Crest family — admissions are ongoing for all levels."
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mb-12 grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-amber-50 p-8 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Limited Spaces Available
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-green-950">
              Admissions Ongoing
            </h2>
            <p className="mt-4 text-slate-600">
              From Play Group to Junior School (Grades 7–9). Give your child a firm foundation in a
              modern, values-based learning environment with computer and science laboratories.
            </p>
            <div className="mt-6">
              <Button href="/admissions/apply" size="lg">
                Apply Online Now
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-green-100 shadow-lg">
            <Image
              src="/images/admissions-flyer.jpg"
              alt="Pine Crest School admissions flyer — modern laboratories for modern learners"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 384px"
              priority
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-green-950">Admission Process</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-green-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-green-950">Requirements</h2>
          <ul className="mt-6 space-y-3">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3 text-slate-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                {req}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
