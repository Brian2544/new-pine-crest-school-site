import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Answers to common questions from parents exploring Pine Crest School."
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <FAQAccordion items={FAQ_ITEMS} />
      </div>
    </>
  );
}
