"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarDays,
  Camera,
  GraduationCap,
  HeartHandshake,
  Images,
  Music2,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

type Category =
  | "All"
  | "Academics"
  | "Co-curricular"
  | "Sports"
  | "Events"
  | "Community"
  | "Facilities";

type GalleryItem = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  icon: LucideIcon;
  imagePosition?: string;
};

const categories: { label: Category; icon: LucideIcon }[] = [
  { label: "All", icon: Images },
  { label: "Academics", icon: GraduationCap },
  { label: "Co-curricular", icon: Users },
  { label: "Sports", icon: Trophy },
  { label: "Events", icon: CalendarDays },
  { label: "Community", icon: HeartHandshake },
  { label: "Facilities", icon: Building2 },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Learning in Action",
    category: "Academics",
    image: "/images/computer-laboratory-premium.png",
    alt: "Pine Crest learners developing digital skills in the computer laboratory",
    icon: GraduationCap,
  },
  {
    title: "Music & Performing Arts",
    category: "Co-curricular",
    image: "/images/co-curricular-collage.png",
    alt: "Pine Crest learners taking part in music and cultural activities",
    icon: Music2,
  },
  {
    title: "Teamwork Through Sport",
    category: "Sports",
    image: "/images/co-curricular-showcase.png",
    alt: "Pine Crest learners participating in football and other activities",
    icon: Trophy,
    imagePosition: "object-top",
  },
  {
    title: "School Celebrations",
    category: "Events",
    image: "/images/hero-students-hq.png",
    alt: "Pine Crest learners sharing a joyful moment on campus",
    icon: CalendarDays,
  },
  {
    title: "Growing Together",
    category: "Community",
    image: "/images/hero-supportive-environment.png",
    alt: "A teacher supporting younger Pine Crest learners",
    icon: HeartHandshake,
  },
  {
    title: "Culture & Creativity",
    category: "Co-curricular",
    image: "/images/hero-co-curricular.png",
    alt: "Pine Crest learners expressing their talents through creative activities",
    icon: Users,
    imagePosition: "object-right",
  },
  {
    title: "Clubs & Societies",
    category: "Co-curricular",
    image: "/images/hero-caring-teachers.png",
    alt: "Pine Crest learners collaborating with a caring teacher",
    icon: Users,
  },
  {
    title: "Future-Ready Facilities",
    category: "Facilities",
    image: "/images/science-laboratory-premium.png",
    alt: "Learners carrying out practical work in the Pine Crest science laboratory",
    icon: Building2,
  },
];

const featuredImages = [
  {
    src: "/images/computer-laboratory-premium.png",
    alt: "Learners collaborating in the computer laboratory",
    className: "col-span-7 row-span-2 sm:col-span-5",
  },
  {
    src: "/images/co-curricular-collage.png",
    alt: "Learners enjoying music activities",
    className: "col-span-5 sm:col-span-3",
  },
  {
    src: "/images/co-curricular-showcase.png",
    alt: "Learners participating in sports",
    className: "col-span-5 sm:col-span-3",
  },
  {
    src: "/images/hero-co-curricular.png",
    alt: "Learners celebrating culture and creativity",
    className: "hidden row-span-2 sm:col-span-4 sm:block",
  },
] as const;

export function GalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const showAllPhotos = () => {
    setActiveCategory("All");
    document.getElementById("gallery-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-[#fbfcfa]">
      <section className="border-b border-green-100" aria-labelledby="gallery-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.85fr_2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-700">Gallery</p>
            <h1
              id="gallery-heading"
              className="mt-3 max-w-md font-serif text-4xl font-bold leading-tight text-green-950 sm:text-5xl"
            >
              Moments that Inspire Us
            </h1>
            <p className="mt-5 max-w-md leading-7 text-slate-600">
              A glimpse into life at Pine Crest School. From academics and co-curricular activities
              to special events and everyday moments, our gallery celebrates our vibrant community.
            </p>
            <button
              type="button"
              onClick={showAllPhotos}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-green-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
            >
              <Camera className="h-4 w-4" aria-hidden />
              View All Photos
            </button>
          </div>

          <div className="grid h-[280px] grid-cols-12 grid-rows-2 gap-1.5 sm:h-[340px] sm:gap-2">
            {featuredImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-xl bg-green-950 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  quality={92}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-label="School photo gallery">
        <div
          className="flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible"
          aria-label="Filter gallery by category"
        >
          {categories.map(({ label, icon: Icon }) => {
            const isActive = activeCategory === label;

            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                aria-pressed={isActive}
                className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-green-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-green-50 hover:text-green-900"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </button>
            );
          })}
        </div>

        <div
          id="gallery-grid"
          className="mt-7 grid scroll-mt-28 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-live="polite"
        >
          {visibleItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-green-950">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    quality={92}
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none ${
                      item.imagePosition ?? "object-center"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-2 text-green-950">
                    <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    <h2 className="truncate text-sm font-semibold">{item.title}</h2>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">{item.category}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
