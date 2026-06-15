import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { NEWS_ARTICLES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "News & Parent Guides",
  description:
    "School news, parent guides, and education insights from Pine Crest School Ruiru — CBE, admissions, and school life.",
  path: "/news",
});

export default function NewsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
  ];

  return (
    <>
      <PageHero
        title="News & Parent Guides"
        description="Insights, updates, and guides for parents navigating education in Kenya."
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="space-y-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="h-4 w-4" />
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
              <h2 className="mt-4 font-serif text-2xl font-bold text-green-950">
                <Link href={`/news/${article.slug}`} className="hover:text-green-700">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600">{article.excerpt}</p>
              <Link
                href={`/news/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 font-semibold text-green-800 hover:gap-2"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
