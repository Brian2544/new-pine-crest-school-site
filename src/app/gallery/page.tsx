import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GALLERY_ITEMS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Photo gallery of Pine Crest School Ruiru — cultural day, sports, classroom activities, and school events.",
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
        description="Moments from school life at Pine Crest — events, sports, and learning in action."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <article
              key={item.id}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} shadow-md transition hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-300">
                  {item.category}
                </span>
                <h2 className="mt-1 font-serif text-lg font-bold text-white">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          School photos will be added here. Contact us to share event images for the gallery.
        </p>
      </div>
    </>
  );
}
