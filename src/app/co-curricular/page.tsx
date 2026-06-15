import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Co-Curricular Activities",
  description:
    "Sports, games, athletics, cultural activities, and clubs at Pine Crest School Ruiru — holistic learner development beyond the classroom.",
  path: "/co-curricular",
});

const activities = [
  {
    title: "Games & Sports",
    description:
      "Football, athletics, and team sports that build fitness, teamwork, discipline, and school spirit.",
  },
  {
    title: "Cultural Activities",
    description:
      "Cultural day celebrations, music, dance, and drama that celebrate Kenya's rich heritage and learner creativity.",
  },
  {
    title: "Clubs & Societies",
    description:
      "Interest-based clubs that develop leadership, collaboration, and specialised skills outside core academics.",
  },
  {
    title: "Events & Competitions",
    description:
      "Inter-school competitions, talent shows, and community events that give learners platforms to shine.",
  },
];

export default function CoCurricularPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Co-Curricular", href: "/co-curricular" },
  ];

  return (
    <>
      <PageHero
        title="Co-Curricular Activities"
        description="Developing the whole child through sports, culture, and creative expression."
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <p className="mb-12 text-lg leading-relaxed text-slate-600">
          At Pine Crest School, co-curricular activities are integral to holistic education. Learners
          participate in programmes that enhance their physical, social, emotional, and creative
          development — building well-rounded individuals ready for life beyond academics.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-xl font-bold text-green-950">{activity.title}</h2>
              <p className="mt-3 text-slate-600">{activity.description}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
