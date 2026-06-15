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
          <input id="parentName" className={inputClass} {...register("parentName")} />
          {errors.parentName && (
            <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input id="phone" type="tel" className={inputClass} {...register("phone")} />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="childName" className="mb-2 block text-sm font-medium text-slate-700">
            Child&apos;s Name *
          </label>
          <input id="childName" className={inputClass} {...register("childName")} />
          {errors.childName && (
            <p className="mt-1 text-sm text-red-600">{errors.childName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium text-slate-700">
            Date of Birth *
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className={inputClass}
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="grade" className="mb-2 block text-sm font-medium text-slate-700">
            Grade Applying For *
          </label>
          <select id="grade" className={inputClass} {...register("grade")} defaultValue="">
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
            <p className="mt-1 text-sm text-red-600">{errors.grade.message}</p>
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
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-green-800 px-8 py-4 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>

      {status === "success" && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you! Your application has been received. Our admissions office will contact you
          shortly.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  );
}
