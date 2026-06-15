import dynamic from "next/dynamic";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

const AdmissionForm = dynamic(
  () => import("@/components/forms/AdmissionForm").then((m) => m.AdmissionForm),
  {
    loading: () => (
      <div className="space-y-6" aria-hidden>
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
        <div className="h-32 animate-pulse rounded-xl bg-slate-100" />
      </div>
    ),
  },
);

export const metadata = createMetadata({
  title: "Apply Online",
  description:
    "Apply online to Pine Crest School Ruiru. Fill in your details and our admissions office will contact you.",
  path: "/admissions/apply",
});

export default function ApplyPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Admissions", href: "/admissions" },
    { name: "Apply Online", href: "/admissions/apply" },
  ];

  return (
    <>
      <PageHero
        title="Apply to Pine Crest School"
        description="Thank you for considering our school. Complete the form below and we will be in touch."
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
          <AdmissionForm />
        </div>
      </div>
    </>
  );
}
