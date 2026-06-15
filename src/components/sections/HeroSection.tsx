import { ArrowRight, Phone } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            Admissions Open — Enrol Today
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {SCHOOL.name}
          </h1>
          <p className="mt-4 text-2xl font-medium text-amber-400 sm:text-3xl">{SCHOOL.slogan}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-100">
            A progressive, values-based day school in Ruiru delivering holistic
            Competency-Based Education from Play Group through Junior School — rooted in
            Christian values and excellence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/admissions/apply" size="lg">
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <Phone className="h-5 w-5" />
              Book a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
