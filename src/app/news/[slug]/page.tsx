import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { NEWS_ARTICLES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${slug}`,
  });
}

const articleContent: Record<string, string[]> = {
  "what-is-competency-based-education": [
    "Competency-Based Education (CBE), formerly known as the Competency-Based Curriculum (CBC), is Kenya's national education framework introduced to replace the 8-4-4 system. It focuses on developing competencies — practical skills, values, and knowledge — rather than rote memorisation.",
    "The system follows a 2-6-3-3-3 structure: 2 years of Pre-Primary, 6 years of Primary (Grades 1–6), 3 years of Junior School (Grades 7–9), and 3 years of Senior School (Grades 10–12).",
    "At Pine Crest School, CBE is delivered through KICD-approved learning areas organised into strands and sub-strands. Learners are assessed continuously through Competency-Based Assessment (CBA) using four performance bands: Below Expectation (BE), Approaching Expectation (AE), Meeting Expectation (ME), and Exceeding Expectation (EE).",
    "As a parent, you can support your child by engaging with their portfolio work, attending school meetings, and encouraging the values and skills emphasised in the curriculum.",
  ],
  "why-choose-a-christian-school-in-ruiru": [
    "Choosing a school is one of the most important decisions a parent makes. A Christian school like Pine Crest offers more than academics — it provides a values-based foundation that shapes character, discipline, and purpose.",
    "At Pine Crest, Christian values are woven into daily school life: morning devotions, ethical teaching, respect for others, and a nurturing community where every child is seen as uniquely created and valued.",
    "Research consistently shows that values-based education contributes to better behaviour, stronger relationships, and greater resilience in learners. In Ruiru's growing community, Pine Crest stands as a school where faith and excellence go hand in hand.",
    "We welcome families of all backgrounds who appreciate a school culture built on integrity, hard work, and respect.",
  ],
  "preparing-for-junior-school-grades-7-9": [
    "Junior School (Grades 7–9) marks an exciting transition in your child's education journey. It is the bridge between primary education and Senior School pathway selection.",
    "Learners at this level study expanded subjects including Integrated Science, Pre-Technical Studies, Business Studies, Agriculture, and Life Skills Education. Practical learning and project work increase significantly.",
    "Assessment becomes more rigorous, preparing learners for the Kenya Junior School Education Assessment (KJSEA) at the end of Grade 9. This assessment helps determine Senior School pathway placement.",
    "At Pine Crest, we support this transition with experienced Junior School teachers, adequate learning resources, and pastoral care that helps adolescents navigate this formative stage with confidence.",
  ],
};

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContent[slug] ?? [article.excerpt];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: article.title, href: `/news/${slug}` },
  ];

  return (
    <>
      <PageHero title={article.title} />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-KE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800">
            {article.category}
          </span>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
          {content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-green-100 pt-8">
          <Link href="/news" className="font-semibold text-green-800 hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
    </>
  );
}
