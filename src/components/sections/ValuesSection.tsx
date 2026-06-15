import { CORE_VALUES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ValuesSection() {
  return (
    <section className="bg-green-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Core Values"
          title="Guided by Virtue & Excellence"
          description="We uphold important virtues in every interaction with learners, parents, teachers, and stakeholders."
          light
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-green-800 bg-green-900/50 p-6 backdrop-blur"
            >
              <h3 className="font-serif text-lg font-bold text-amber-400">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-green-100">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
