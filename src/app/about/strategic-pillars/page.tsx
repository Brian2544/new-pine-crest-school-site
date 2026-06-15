import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PILLARS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Strategic Pillars",
  description:
    "Pine Crest School's strategic pillars: Academic Excellence, Spiritual Nourishment, and Technology integration for 21st-century learners.",
  path: "/about/strategic-pillars",
});

export default function StrategicPillarsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Strategic Pillars", href: "/about/strategic-pillars" },
  ];

  return (
    <>
      <PageHero
        title="Strategic Pillars"
        description="The foundations that guide everything we do at Pine Crest School."
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-8">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-semibold text-amber-600">Pillar {index + 1}</span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-green-950">{pillar.title}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
