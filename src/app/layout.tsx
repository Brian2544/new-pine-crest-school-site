import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { SCHOOL } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b4332",
  colorScheme: "light",
};

export const metadata: Metadata = {
  ...createMetadata({
    title: SCHOOL.name,
    description:
      "Pine Crest School Ruiru — Christian values-based day school delivering KICD-aligned Competency-Based Education from Play Group through Junior School. Admissions open.",
    path: "/",
    keywords: [
      "best primary school Ruiru",
      "private school Kihunguro",
      "school with transport Ruiru",
    ],
  }),
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${jakarta.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
