"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(data: NewsletterFormData) {
    try {
      const res = await fetch("/api/newsletter", {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          className="w-full rounded-lg border border-green-700 bg-green-900/50 px-4 py-2.5 text-sm text-white placeholder:text-green-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-amber-400 disabled:opacity-50"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "success" && (
        <p className="text-xs text-amber-300">Thank you for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-300">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
