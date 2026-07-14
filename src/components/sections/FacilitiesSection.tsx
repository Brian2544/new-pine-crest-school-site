import { Bus, FlaskConical, Monitor, Trophy, Utensils } from "lucide-react";
import { FACILITIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  bus: Bus,
  trophy: Trophy,
  school: FlaskConical,
  monitor: Monitor,
  utensils: Utensils,
};

export function FacilitiesSection() {
  return (
    <section className="bg-[#FAFAF8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="An Environment to Grow & Excel"
          description="We provide a happy, secure, and stimulating learning environment where every learner can reach their highest potential."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => {
            const Icon = iconMap[facility.icon];
            return (
              <article
                key={facility.title}
                className="flex gap-4 rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-green-950">{facility.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {facility.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
