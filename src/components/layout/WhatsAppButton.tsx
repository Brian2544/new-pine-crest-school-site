import { MessageCircle } from "lucide-react";
import { SCHOOL } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I would like to inquire about admissions at Pine Crest School.",
  );

  return (
    <a
      href={`https://wa.me/${SCHOOL.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-900/30 transition hover:scale-110 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
