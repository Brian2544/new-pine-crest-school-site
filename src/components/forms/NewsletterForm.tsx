"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";
import { useWeb3Form } from "@/hooks/useWeb3Form";
import { FORM_SUBJECTS, FORM_SUCCESS_MESSAGES } from "@/config/forms";
import { BotcheckField } from "@/components/forms/BotcheckField";

export function NewsletterForm() {
  const { status, errorMessage, isSubmitting, submit } = useWeb3Form();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isRhfSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const busy = isSubmitting || isRhfSubmitting;

  async function onSubmit(data: NewsletterFormData) {
    const result = await submit({
      subject: FORM_SUBJECTS.newsletter,
      botcheck: "",
      fields: {
        email: data.email,
      },
    });

    if (result.ok) {
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-3" noValidate>
      <BotcheckField id="newsletter-botcheck" />
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          className="w-full rounded-lg border border-green-700 bg-green-900/50 px-4 py-2.5 text-sm text-white placeholder:text-green-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="newsletter-email-error" role="alert" className="mt-1 text-xs text-red-300">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={busy}
        aria-busy={busy}
        className="w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-950 disabled:opacity-50"
      >
        {busy ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "success" && (
        <p role="status" className="text-xs text-amber-300">{FORM_SUCCESS_MESSAGES.newsletter}</p>
      )}
      {status === "error" && (
        <p role="alert" className="text-xs text-red-300">{errorMessage}</p>
      )}
    </form>
  );
}
