import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CORE_VALUES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Vision, Mission & Core Values",
  description:
    "Pine Crest School's vision, mission, and core values — Excellence, Integrity, Hard Work, Commitment, and Respect & Innovation.",
  path: "/about/vision-mission",
});

export default function VisionMissionPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision & Mission", href: "/about/vision-mission" },
  ];

  return (
    <>
      <PageHero title="Vision, Mission & Core Values" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl font-bold text-green-950">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              To be a leading Christian school in Ruiru that nurtures competent, values-driven
              learners prepared to excel in academics, character, and service to society.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-green-950">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              To provide holistic Competency-Based Education in a happy, secure, and stimulating
              environment where every learner grows confidently, achieves their highest potential,
              and develops a strong foundation rooted in the Word of God.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-green-950">Core Values</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {CORE_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-green-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-green-800">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
