import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CURRICULUM_LEVELS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CurriculumSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Curriculum"
          title="CBE-Aligned Education for Every Stage"
          description="Pine Crest is a Comprehensive School offering KICD-aligned Competency-Based Education from Early Years through Junior School."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CURRICULUM_LEVELS.map((level, index) => (
            <article
              key={level.title}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-800 to-green-950 p-6 text-white"
            >
              <span className="text-5xl font-bold text-white/10">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-serif text-xl font-bold">{level.title}</h3>
              <p className="mt-1 text-sm font-medium text-amber-300">{level.grades}</p>
              <p className="mt-1 text-xs text-green-200">{level.ages}</p>
              <p className="mt-4 text-sm leading-relaxed text-green-100">{level.description}</p>
              <Link
                href={level.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 transition hover:gap-2"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
