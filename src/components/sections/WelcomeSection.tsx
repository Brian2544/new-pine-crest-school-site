import { SCHOOL } from "@/lib/constants";

export function WelcomeSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
              Welcome to Pine Crest
            </p>
            <h2 className="font-serif text-4xl font-bold text-green-950 sm:text-5xl">
              {SCHOOL.slogan}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Pine Crest School is a progressive, values-based day school in Ruiru, Kihunguro —
              behind Ruiru Star High School. We deliver holistic Competency-Based Education (CBE)
              rooted in Christian values, with certified teachers who nurture every child&apos;s
              unique potential from Play Group through Junior School.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              When it comes to education, we lead. Your child receives an education customised to
              their individual needs, with virtues instilled into every school day.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 to-green-900 shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
                <p className="font-serif text-6xl font-bold text-amber-400">PC</p>
                <p className="mt-4 text-xl font-medium">Excellence in Education</p>
                <p className="mt-2 text-sm text-green-200">Ruiru, Kihunguro, Kenya</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-amber-500 px-6 py-4 shadow-xl">
              <p className="text-sm font-semibold text-green-950">CBE-Aligned</p>
              <p className="text-xs text-green-900">PP1 – Grade 9</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
