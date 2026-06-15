import dynamic from "next/dynamic";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, SCHOOL } from "@/lib/constants";

const NewsletterForm = dynamic(
  () => import("@/components/forms/NewsletterForm").then((m) => m.NewsletterForm),
  {
    loading: () => (
      <div className="h-24 animate-pulse rounded-lg bg-green-900/40" aria-hidden />
    ),
  },
);

export function Footer() {
  const quickLinks = [
    { label: "Pre-Primary", href: "/academics/pre-primary" },
    { label: "Lower Primary", href: "/academics/lower-primary" },
    { label: "Upper Primary", href: "/academics/upper-primary" },
    { label: "Junior School", href: "/academics/junior-school" },
    { label: "Strategic Pillars", href: "/about/strategic-pillars" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-green-950"
              aria-hidden
            >
              PC
            </div>
            <h2 className="font-serif text-xl font-bold text-white">{SCHOOL.name}</h2>
            <p className="mt-2 text-sm text-amber-300">&ldquo;{SCHOOL.slogan}&rdquo;</p>
            <p className="mt-4 text-sm leading-relaxed text-green-200/90">
              Delivering holistic Competency-Based Education rooted in Christian values in Ruiru,
              Kihunguro.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                <address className="not-italic">{SCHOOL.address}</address>
              </li>
              {SCHOOL.phones.map((phone) => (
                <li key={phone} className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                  <a href={`tel:+254${phone.slice(1)}`} className="hover:text-amber-300">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-amber-300">
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-green-300">{SCHOOL.hours}</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch className="transition hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Subscribe</h3>
            <p className="mb-4 text-sm text-green-200/90">
              Get school news, events, and parent guides delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-green-800 pt-8 text-sm text-green-300 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
          </p>
          <nav aria-label="Footer navigation" className="flex gap-6">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} prefetch className="hover:text-amber-300">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
