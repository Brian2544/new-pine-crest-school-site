import type { MetadataRoute } from "next";
import { NEWS_ARTICLES, SITE_URL } from "@/lib/constants";

const staticRoutes = [
  "",
  "/about",
  "/about/vision-mission",
  "/about/strategic-pillars",
  "/about/directors-note",
  "/academics",
  "/academics/pre-primary",
  "/academics/lower-primary",
  "/academics/upper-primary",
  "/academics/junior-school",
  "/co-curricular",
  "/admissions",
  "/admissions/apply",
  "/gallery",
  "/contact",
  "/faq",
  "/news",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.includes("admissions") ? 0.9 : 0.8,
  }));

  const newsPages = NEWS_ARTICLES.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...newsPages];
}
