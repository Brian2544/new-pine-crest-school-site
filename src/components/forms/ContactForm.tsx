"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Your Name *
          </label>
          <input id="name" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input id="contact-email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone *
          </label>
          <input id="contact-phone" type="tel" className={inputClass} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
            Subject *
          </label>
          <input id="subject" className={inputClass} {...register("subject")} />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea id="contact-message" rows={5} className={inputClass} {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-green-800 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          Message sent! We will get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          Failed to send. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}
