import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GALLERY_ITEMS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Photo gallery of Pine Crest School Ruiru — laboratories, co-curricular activities, and school life.",
  path: "/gallery",
});

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <PageHero
        title="Gallery"
        description="Moments from school life at Pine Crest — laboratories, activities, and admissions highlights."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid gap-6 sm:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div
                className={`relative overflow-hidden bg-green-900 ${
                  item.id === 1 ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-amber-300">
                    {item.category}
                  </span>
                  <h2 className="mt-1 font-serif text-xl font-bold text-white">{item.title}</h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
