/**
 * Central form & messaging configuration.
 * Update subjects, success copy, and WhatsApp defaults here.
 */

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit" as const;

export const FORM_SUBJECTS = {
  contact: "New Website Contact Message",
  admissions: "New Admission Enquiry",
  newsletter: "New Newsletter Subscription",
  bookVisit: "New School Visit Request",
  careers: "New Job Application",
  events: "New Event Registration",
} as const;

export type FormSubjectKey = keyof typeof FORM_SUBJECTS;

export const FORM_SUCCESS_MESSAGES = {
  contact:
    "Thank you for contacting Pine Crest School. Your submission has been received successfully. A member of our team will contact you shortly.",
  admissions:
    "Thank you for contacting Pine Crest School. Your admission enquiry has been received successfully. A member of our team will contact you shortly.",
  newsletter:
    "Thank you for contacting Pine Crest School. Your newsletter subscription has been received successfully.",
} as const;

export const FORM_ERROR_MESSAGE =
  "We were unable to submit your request. Please try again or contact us via WhatsApp.";

export const WHATSAPP_CONFIG = {
  /** Visible label next to the icon on desktop */
  desktopLabel: "Chat with Admissions",
  /** Prefill text when opening WhatsApp */
  prefilledMessage: `Hello Pine Crest School,

I would like to enquire about admissions.

Please assist me.`,
} as const;
