import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Co-Curricular Activities",
  description:
    "Sports, games, athletics, cultural activities, music, chess, and clubs at Pine Crest School Ruiru — holistic learner development beyond the classroom.",
  path: "/co-curricular",
});

const activities = [
  {
    title: "Cultural Celebrations",
    description:
      "Cultural day celebrations, traditional dress, music, dance, and drama that celebrate Kenya's rich heritage.",
  },
  {
    title: "Sports & Games",
    description:
      "Football, athletics, and team sports that build fitness, teamwork, discipline, and school spirit.",
  },
  {
    title: "Music & Performing Arts",
    description:
      "Violin, keyboard, recorder, and performance opportunities that nurture creativity and confidence.",
  },
  {
    title: "Chess & Clubs",
    description:
      "Chess, societies, and interest-based clubs that develop leadership, strategy, and collaboration.",
  },
  {
    title: "Community Service",
    description:
      "Hands-on community projects that teach responsibility, empathy, and service to others.",
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
        description="Empowering minds through knowledge, values and culture — shaping tomorrow's leaders today."
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl bg-green-900 shadow-lg sm:aspect-[2.4/1]">
          <Image
            src="/images/extracurricular.jpg"
            alt="Pine Crest School learners in cultural, sports, music, chess, and community activities"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-serif text-xl font-bold text-white sm:text-2xl">
            Sports · Arts · Clubs · Culture · Service
          </p>
        </div>

        <p className="mb-12 text-lg leading-relaxed text-slate-600">
          At Pine Crest School, co-curricular activities are integral to holistic education. Learners
          participate in programmes that enhance their physical, social, emotional, and creative
          development — building well-rounded individuals ready for life beyond academics.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
