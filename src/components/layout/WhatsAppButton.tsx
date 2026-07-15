"use client";

import { useSyncExternalStore } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_CONFIG } from "@/config/forms";

function getWhatsAppNumber(): string | undefined {
  const value = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (!value) return undefined;
  return value.replace(/[^\d]/g, "");
}

const emptySubscribe = () => () => {};

/**
 * Client-only floating WhatsApp control.
 * Renders after mount to avoid SSR/client markup mismatches (HMR + icon SVG).
 */
export function WhatsAppButton() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return null;
  }

  const number = getWhatsAppNumber();

  if (!number) {
    return null;
  }

  const message = encodeURIComponent(WHATSAPP_CONFIG.prefilledMessage);
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Admissions on WhatsApp"
      className="group fixed bottom-5 right-5 z-[9999] inline-flex items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition duration-300 ease-out hover:scale-105 hover:bg-[#20BD5A] hover:shadow-[0_10px_28px_rgba(37,211,102,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/25"
      />

      <span className="relative z-10 flex h-14 w-14 items-center justify-center sm:h-auto sm:w-auto sm:gap-2.5 sm:px-5 sm:py-3.5">
        <FaWhatsapp className="h-7 w-7 shrink-0" aria-hidden />
        <span className="hidden text-sm font-semibold tracking-tight sm:inline">
          {WHATSAPP_CONFIG.desktopLabel}
        </span>
      </span>
    </a>
  );
}
