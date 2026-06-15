import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-400 py-20">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-green-950 sm:text-4xl">
          Admissions Are Ongoing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-900/80">
          Give your child the foundation they deserve. Apply today and our admissions team will
          guide you through every step.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/admissions/apply" variant="secondary" size="lg">
            Apply Now
          </Button>
          <Button
            href="/admissions"
            variant="outline"
            size="lg"
            className="border-green-900/30 text-green-950 hover:bg-green-900/10"
          >
            View Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}
