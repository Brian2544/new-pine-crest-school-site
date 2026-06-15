import { z } from "zod";
import { GRADE_OPTIONS } from "./constants";

export const admissionSchema = z.object({
  parentName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  childName: z.string().min(2, "Please enter your child's name"),
  dateOfBirth: z.string().min(1, "Please enter date of birth"),
  grade: z.enum([...GRADE_OPTIONS] as [string, ...string[]], {
    message: "Please select a grade",
  }),
  message: z.string().optional(),
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter your message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
