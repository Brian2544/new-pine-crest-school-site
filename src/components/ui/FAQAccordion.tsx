type FAQItem = { question: string; answer: string };

type FAQAccordionProps = {
  items: readonly FAQItem[];
  defaultOpenIndex?: number;
};

export function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-xl border border-green-100 bg-white open:shadow-sm"
          open={index === defaultOpenIndex}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-green-950 transition hover:bg-green-50 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              className="shrink-0 text-green-600 transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▼
            </span>
          </summary>
          <div className="border-t border-green-50 px-6 py-4 text-slate-600">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
