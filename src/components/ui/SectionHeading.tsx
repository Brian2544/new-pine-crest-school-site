type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-amber-300" : "text-amber-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-green-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-green-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
