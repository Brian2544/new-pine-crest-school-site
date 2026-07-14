import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { SCHOOL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Our Story",
  description:
    "Discover Pine Crest School's story — a values-based Christian school in Ruiru nurturing learners through Competency-Based Education since our founding.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="Our Story"
        description="Building firm foundations for tomorrow's leaders in Ruiru, Kihunguro."
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-none space-y-5 text-lg leading-relaxed text-slate-600">
          <p>
            {SCHOOL.name} was founded with a clear vision: to provide quality, holistic education
            rooted in Christian values for families in Ruiru and surrounding communities. Located in
            Kihunguro, behind Ruiru Star High School, we have grown into a trusted Comprehensive
            School serving learners from Play Group through Junior School.
          </p>
          <p>
            Our motto, &ldquo;{SCHOOL.slogan},&rdquo; reflects our commitment to nurturing not just
            academic ability, but character, creativity, and spiritual growth. We believe every
            child is unique, and our learner-centred approach ensures each one receives the
            attention and support they need to thrive.
          </p>
          <p>
            As Kenya&apos;s education system transitioned to Competency-Based Education (CBE), Pine
            Crest embraced the change wholeheartedly. Our teachers are trained in KICD curriculum
            delivery, Competency-Based Assessment (CBA), and the values that define excellent
            teaching in the 21st century.
          </p>
          <p>
            Today, we stand as a school where parents trust us with their most precious gift — their
            children — and where learners leave prepared not just for the next grade, but for life.
          </p>
        </div>
      </div>
    </>
  );
}
