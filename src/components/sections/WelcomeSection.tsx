import Image from "next/image";
import {
  Award,
  GraduationCap,
  HeartHandshake,
  Presentation,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SCHOOL } from "@/lib/constants";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "CBE-Aligned",
    detail: "PP1 – Grade 9",
  },
  {
    icon: Presentation,
    title: "Certified Teachers",
    detail: "Nurturing Excellence",
  },
  {
    icon: ShieldCheck,
    title: "Christian Values",
    detail: "Nurture in Action",
  },
  {
    icon: Users,
    title: "Holistic Development",
    detail: "Mind, Body & Spirit",
  },
] as const;

const STATS = [
  {
    icon: School,
    value: `${SCHOOL.stats.students}+`,
    label: "Students",
  },
  {
    icon: Users,
    value: `${SCHOOL.stats.staff}+`,
    label: "Qualified Teachers",
  },
  {
    icon: Award,
    value: `${SCHOOL.stats.years}+`,
    label: "Years of Excellence",
  },
  {
    icon: HeartHandshake,
    value: "1 Goal",
    label: "Your Child’s Future",
  },
] as const;

export function WelcomeSection() {
  return (
    <section
      className="bg-[#F7F6F1] pb-7 pt-[84px] sm:pb-8 sm:pt-24 lg:pb-10 lg:pt-[120px]"
      aria-labelledby="welcome-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-5 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Welcome to Pine Crest
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="flex flex-col justify-center lg:order-2">
            <h2
              id="welcome-heading"
              className="max-w-xl font-serif text-3xl font-bold leading-[1.02] text-green-950 sm:text-4xl lg:text-[2.75rem]"
            >
              {SCHOOL.slogan}
            </h2>
            <div className="mt-2 flex items-center gap-3" aria-hidden>
              <span className="h-0.5 w-10 bg-amber-500" />
              <span className="h-2 w-5 rounded-full bg-green-700 [clip-path:polygon(0_50%,100%_0,75%_100%)]" />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Pine Crest School is a progressive, values-based day school in Ruiru, Kihunguro —
              behind Ruiru Star High School. We deliver holistic Competency-Based Education (CBE)
              rooted in Christian values, with certified teachers who nurture every child&apos;s
              unique potential from Play Group through Junior School.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              When it comes to education, we lead. Your child receives an education customised to
              their individual needs, with virtues instilled into every school day.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-green-900/5 bg-white px-2 py-2.5 text-center shadow-[0_6px_18px_rgba(15,61,38,0.07)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-800">
                    <highlight.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-2 text-xs font-semibold leading-tight text-green-950">
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-xs leading-tight text-slate-600">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-green-950 shadow-[0_18px_40px_rgba(15,61,38,0.18)] ring-1 ring-green-900/10 sm:min-h-[340px] lg:order-1 lg:min-h-full">
            <Image
              src="/images/excellence-in-education.png"
              alt="Pine Crest School crest above the words Excellence in Education, with the school campus and core education values"
              fill
              quality={92}
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 46vw"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-green-900/5 border-l-4 border-l-green-800 bg-white shadow-[0_8px_24px_rgba(15,61,38,0.07)]">
          <dl className="grid grid-cols-2 divide-x divide-y divide-green-900/5 sm:grid-cols-4 sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-2.5 px-3 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                  <stat.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <dt className="text-xs text-slate-500">{stat.label}</dt>
                  <dd className="font-serif text-xl font-bold leading-none text-green-900 sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
