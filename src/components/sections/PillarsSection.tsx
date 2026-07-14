import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Cross,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { SCHOOL } from "@/lib/constants";

const REASONS = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "KICD-aligned Competency-Based Education delivered through qualified teachers and engaging learning experiences.",
    href: "/academics",
  },
  {
    icon: Cross,
    title: "Christian Values",
    description:
      "We nurture integrity, respect, responsibility and servant leadership in every learner.",
    href: "/about/vision-mission",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description:
      "Modern ICT resources and digital skills prepare learners for tomorrow’s technology-driven world.",
    href: "/academics",
  },
  {
    icon: Trophy,
    title: "Talent Development",
    description:
      "Sports, music, drama, chess and clubs help every learner discover and develop their potential.",
    href: "/co-curricular",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "Every child learns in a secure, caring and supportive school community.",
    href: "/contact",
  },
] as const;

const PILLAR_STATS = [
  {
    icon: Users,
    value: `${SCHOOL.stats.students}+`,
    label: "Happy Learners",
  },
  {
    icon: BookOpenCheck,
    value: "CBE",
    label: "Aligned Learning",
  },
  {
    icon: Award,
    value: `${SCHOOL.stats.years}+`,
    label: "Years of Excellence",
  },
  {
    icon: GraduationCap,
    value: `${SCHOOL.stats.staff}+`,
    label: "Dedicated Teachers",
  },
] as const;

export function PillarsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8F6EE] py-8 sm:py-9 lg:min-h-[670px] lg:py-10"
      aria-labelledby="why-pine-crest-heading"
    >
      <div
        className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-green-100/70 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-5 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Why Parents Choose Pine Crest School
          </p>
        </div>

        <div className="relative grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#F8F6EE] shadow-[0_18px_45px_rgba(15,61,38,0.14)] sm:min-h-[400px] lg:order-2 lg:h-full lg:min-h-0">
            <Image
              src="/images/why-pine-crest-classroom.png"
              alt="A Pine Crest School teacher guiding four learners around an open book in a bright classroom"
              fill
              quality={92}
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 48vw"
            />
          </div>

          <div className="flex flex-col justify-center lg:order-1">
            <h2
              id="why-pine-crest-heading"
              className="mt-2 max-w-3xl font-serif text-3xl font-bold leading-[1.03] tracking-tight text-green-950 sm:text-4xl lg:text-[2.7rem]"
            >
              Developing Confident, Purpose-Driven Learners
            </h2>
            <div className="mt-2.5 h-0.5 w-12 bg-amber-500" aria-hidden />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              At Pine Crest School, we combine academic excellence, Christian values, technology
              and talent development to prepare learners for life—not just examinations.
            </p>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-6">
              {REASONS.map((reason, index) => (
                <article
                  key={reason.title}
                  className={`group flex flex-col rounded-xl border border-green-900/5 bg-white p-3 shadow-[0_6px_20px_rgba(15,61,38,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,61,38,0.11)] motion-reduce:transform-none ${
                    index < 3 ? "sm:col-span-2" : "sm:col-span-3"
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-800 transition-colors group-hover:bg-green-800 group-hover:text-amber-300">
                    <reason.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-2 font-serif text-base font-bold text-green-950">
                    {reason.title}
                  </h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                  <Link
                    href={reason.href}
                    className="mt-2 inline-flex w-fit items-center gap-1.5 rounded text-xs font-semibold text-green-800 transition hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-xl border border-green-900/5 bg-white shadow-[0_8px_24px_rgba(15,61,38,0.07)]">
          <dl className="grid grid-cols-2 divide-x divide-y divide-green-900/5 sm:grid-cols-4 sm:divide-y-0">
            {PILLAR_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-2.5 px-3 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                  <stat.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className="order-2 mt-1 text-xs text-slate-500">{stat.label}</dt>
                  <dd className="order-1 font-serif text-xl font-bold leading-none text-green-900 sm:text-2xl">
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
