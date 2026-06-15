type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-green-100">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
