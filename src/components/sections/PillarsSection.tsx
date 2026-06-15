import { GraduationCap, Heart, Laptop } from "lucide-react";
import { PILLARS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  "graduation-cap": GraduationCap,
  heart: Heart,
  laptop: Laptop,
};

export function PillarsSection() {
  return (
    <section className="bg-[#FAFAF8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Pine Crest"
          title="Nourishing Mind, Body & Spirit"
          description="We deliver holistic education that prepares learners for success in academics, character, and the digital age."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-800 transition group-hover:bg-green-800 group-hover:text-amber-400">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-green-950">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
