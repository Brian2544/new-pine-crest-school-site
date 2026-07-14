import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const labs = [
  {
    title: "Modern Computer Laboratory",
    image: "/images/computer-laboratory-premium.png",
    imageAlt: "Two Pine Crest School learners developing digital skills in the computer laboratory",
    features: [
      "Digital literacy from an early age",
      "Coding & ICT lessons",
      "Internet-assisted learning",
      "Computer-based research",
      "Interactive digital learning",
    ],
  },
  {
    title: "Well-Equipped Science Laboratory",
    image: "/images/science-laboratory-premium.png",
    imageAlt: "Pine Crest School learners conducting practical experiments in the science laboratory",
    features: [
      "Practical science experiments",
      "Hands-on learning",
      "Safe laboratory environment",
      "Qualified science teachers",
      "Preparing learners for STEM careers",
    ],
  },
] as const;

export function LabsShowcase() {
  return (
    <section className="bg-white py-20" aria-labelledby="labs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="labs-heading"
          eyebrow="Modern Laboratories"
          title="Modern Laboratories for Modern Learners"
          description="Our state-of-the-art Computer and Science Laboratories give learners hands-on experiences that spark curiosity and build future-ready skills."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {labs.map((lab) => (
            <article
              key={lab.title}
              className="group overflow-hidden rounded-3xl border border-green-100 bg-[#FAFAF8] shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-green-900">
                <Image
                  src={lab.image}
                  alt={lab.imageAlt}
                  fill
                  quality={92}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transform-none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-serif text-xl font-bold text-white sm:text-2xl">
                  {lab.title}
                </h3>
              </div>
              <ul className="space-y-3 p-6 sm:p-8">
                {lab.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-green-950">
          <div className="grid items-stretch lg:grid-cols-[3fr_2fr]">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
              <Image
                src="/images/co-curricular-collage.png"
                alt="Pine Crest School learners participating in football, art, music, chess, robotics, and environmental activities"
                fill
                quality={92}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="px-6 pb-8 pt-2 sm:px-10 lg:py-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                Beyond the Classroom
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Sports, Arts, Clubs & Culture
              </h3>
              <p className="mt-4 leading-relaxed text-green-100">
                Empowering minds through knowledge, values and culture — shaping tomorrow&apos;s
                leaders today through cultural celebrations, sports, music, chess, clubs, and
                community service.
              </p>
              <Link
                href="/co-curricular"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-400 transition hover:gap-3"
              >
                Explore co-curricular life <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/admissions/apply" size="lg">
            Apply Now — Admissions Ongoing
          </Button>
        </div>
      </div>
    </section>
  );
}
