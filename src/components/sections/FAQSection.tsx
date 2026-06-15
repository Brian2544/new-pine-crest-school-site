import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  return (
    <section className="py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers for parents exploring Pine Crest School."
        />
        <FAQAccordion items={FAQ_ITEMS.slice(0, 4)} />
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
