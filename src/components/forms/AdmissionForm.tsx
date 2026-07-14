"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GRADE_OPTIONS } from "@/lib/constants";
import { admissionSchema, type AdmissionFormData } from "@/lib/validations";

export function AdmissionForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  async function onSubmit(data: AdmissionFormData) {
    setStatus("idle");
    try {
      const res = await fetch("/api/admissions", {
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
          <label htmlFor="parentName" className="mb-2 block text-sm font-medium text-slate-700">
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? "parent-name-error" : undefined}
            {...register("parentName")}
          />
          {errors.parentName && (
            <p id="parent-name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "admission-phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="admission-phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "admission-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="admission-email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="childName" className="mb-2 block text-sm font-medium text-slate-700">
            Child&apos;s Name *
          </label>
          <input
            id="childName"
            autoComplete="off"
            className={inputClass}
            aria-invalid={Boolean(errors.childName)}
            aria-describedby={errors.childName ? "child-name-error" : undefined}
            {...register("childName")}
          />
          {errors.childName && (
            <p id="child-name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.childName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium text-slate-700">
            Date of Birth *
          </label>
          <input
            id="dateOfBirth"
            type="date"
            autoComplete="bday"
            className={inputClass}
            aria-invalid={Boolean(errors.dateOfBirth)}
            aria-describedby={errors.dateOfBirth ? "date-of-birth-error" : undefined}
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p id="date-of-birth-error" role="alert" className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="grade" className="mb-2 block text-sm font-medium text-slate-700">
            Grade Applying For *
          </label>
          <select
            id="grade"
            className={inputClass}
            aria-invalid={Boolean(errors.grade)}
            aria-describedby={errors.grade ? "grade-error" : undefined}
            defaultValue=""
            {...register("grade")}
          >
            <option value="" disabled>
              Select grade
            </option>
            {GRADE_OPTIONS.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p id="grade-error" role="alert" className="mt-1 text-sm text-red-600">{errors.grade.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Additional Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          placeholder="Any additional information you'd like to share..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "admission-message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="admission-message-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-green-800 px-8 py-4 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>

      {status === "success" && (
        <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you! Your application has been received. Our admissions office will contact you
          shortly.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  );
}
