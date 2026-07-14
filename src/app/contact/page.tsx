import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LazyMapEmbed } from "@/components/contact/LazyMapEmbed";
import { createMetadata } from "@/lib/seo";
import { SCHOOL } from "@/lib/constants";

const ContactForm = dynamic(
  () => import("@/components/forms/ContactForm").then((m) => m.ContactForm),
  {
    loading: () => (
      <div role="status">
        <span className="sr-only">Loading contact form…</span>
        <div className="space-y-4" aria-hidden>
          <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
          <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
          <div className="h-32 animate-pulse rounded-xl bg-slate-100" />
        </div>
      </div>
    ),
  },
);

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Pine Crest School Ruiru — phone, email, address, and online enquiry form. Open Mon–Fri, 7:30 AM – 4:30 PM.",
  path: "/contact",
  keywords: ["Pine Crest School contact", "school Ruiru phone number"],
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out anytime during school hours."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-green-950">Get in Touch</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-green-700" aria-hidden />
                <div>
                  <p className="font-medium text-green-950">Address</p>
                  <p className="text-slate-600">{SCHOOL.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-green-700" aria-hidden />
                <div>
                  <p className="font-medium text-green-950">Phone</p>
                  {SCHOOL.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+254${phone.slice(1)}`}
                      className="block text-slate-600 hover:text-green-800"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-green-700" aria-hidden />
                <div>
                  <p className="font-medium text-green-950">Email</p>
                  <a
                    href={`mailto:${SCHOOL.email}`}
                    className="text-slate-600 hover:text-green-800"
                  >
                    {SCHOOL.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-green-700" aria-hidden />
                <div>
                  <p className="font-medium text-green-950">School Hours</p>
                  <p className="text-slate-600">{SCHOOL.hours}</p>
                </div>
              </li>
            </ul>

            <LazyMapEmbed />
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-green-950">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
