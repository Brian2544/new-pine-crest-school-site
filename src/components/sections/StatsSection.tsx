import { SCHOOL } from "@/lib/constants";

const stats = [
  { label: "Years of Excellence", value: SCHOOL.stats.years },
  { label: "Learners Enrolled", value: SCHOOL.stats.students },
  { label: "Qualified Staff", value: SCHOOL.stats.staff },
] as const;

export function StatsSection() {
  return (
    <section className="bg-green-900 py-16" aria-label="School statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-5xl font-bold text-amber-400 sm:text-6xl">
              {stat.value}+
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-green-200">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
