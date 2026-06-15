import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Pine Crest School Ruiru — location, curriculum, transport, admissions, and school hours.",
  path: "/faq",
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema()} />
      {children}
    </>
  );
}
