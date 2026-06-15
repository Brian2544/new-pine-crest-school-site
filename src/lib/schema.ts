import { FAQ_ITEMS, SCHOOL, SITE_URL } from "./constants";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SCHOOL.name,
    url: SITE_URL,
    description: SCHOOL.tagline,
    inLanguage: "en-KE",
    publisher: {
      "@type": "EducationalOrganization",
      name: SCHOOL.name,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SCHOOL.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SCHOOL.tagline,
    slogan: SCHOOL.slogan,
    email: SCHOOL.email,
    telephone: SCHOOL.phones.map((p) => `+${p.startsWith("0") ? "254" + p.slice(1) : p}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL.address,
      addressLocality: "Ruiru",
      addressRegion: "Kiambu",
      addressCountry: "KE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
