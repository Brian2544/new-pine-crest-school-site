"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { useWeb3Form } from "@/hooks/useWeb3Form";
import { FORM_SUBJECTS, FORM_SUCCESS_MESSAGES } from "@/config/forms";
import { BotcheckField } from "@/components/forms/BotcheckField";

export function ContactForm() {
  const { status, errorMessage, isSubmitting, submit } = useWeb3Form();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isRhfSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const busy = isSubmitting || isRhfSubmitting;

  async function onSubmit(data: ContactFormData) {
    const result = await submit({
      subject: FORM_SUBJECTS.contact,
      botcheck: "",
      fields: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        "Enquiry Subject": data.subject,
        message: data.message,
      },
      hiddenFields: {
        from_name: data.name,
      },
    });

    if (result.ok) {
      reset();
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6" noValidate>
      <BotcheckField id="contact-botcheck" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Your Name *
          </label>
          <input
            id="name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone *
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && <p id="contact-phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
            Subject *
          </label>
          <input
            id="subject"
            className={inputClass}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" role="alert" className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={inputClass}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={busy}
        aria-busy={busy}
        className="rounded-full bg-green-800 px-8 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:opacity-50"
      >
        {busy ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          {FORM_SUCCESS_MESSAGES.contact}
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
