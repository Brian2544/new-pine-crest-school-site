import { z } from "zod";
import { GRADE_OPTIONS } from "./constants";

export const admissionSchema = z.object({
  parentName: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid phone number"),
  email: z.string().trim().max(254, "Email address is too long").email("Please enter a valid email address"),
  childName: z.string().trim().min(2, "Please enter your child's name").max(100, "Name is too long"),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date of birth")
    .refine(
      (value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)),
      "Please enter a valid date of birth",
    )
    .refine((value) => new Date(`${value}T00:00:00Z`) <= new Date(), "Date of birth cannot be in the future"),
  grade: z.enum([...GRADE_OPTIONS] as [string, ...string[]], {
    message: "Please select a grade",
  }),
  message: z.string().trim().max(2000, "Message is too long").optional(),
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().max(254, "Email address is too long").email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid phone number"),
  subject: z.string().trim().min(3, "Please enter a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Please enter your message").max(3000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().max(254, "Email address is too long").email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
