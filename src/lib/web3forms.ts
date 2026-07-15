/**
 * Shared Web3Forms client submission helper.
 * Submits via FormData to https://api.web3forms.com/submit
 */

import { FORM_ERROR_MESSAGE, WEB3FORMS_ENDPOINT } from "@/config/forms";

export type Web3FormFieldValue = string | number | boolean | null | undefined;

export type SubmitWeb3FormOptions = {
  /** Email subject line */
  subject: string;
  /** Form field values (sent as FormData entries) */
  fields: Record<string, Web3FormFieldValue>;
  /** Optional extra hidden fields (e.g. from_name) */
  hiddenFields?: Record<string, string>;
  /** Optional redirect URL (Web3Forms reserved field) */
  redirect?: string;
  /**
   * Honeypot value. Leave empty / false for humans.
   * Any truthy value is treated as a bot submission.
   */
  botcheck?: boolean | string;
};

export type Web3FormSuccess = { ok: true; data?: unknown };
export type Web3FormFailure = { ok: false; error: string };
export type Web3FormResult = Web3FormSuccess | Web3FormFailure;

type Web3FormsApiResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

function getAccessKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return key || undefined;
}

function appendField(formData: FormData, key: string, value: Web3FormFieldValue) {
  if (value === null || value === undefined) return;
  if (typeof value === "string" && value.trim() === "") return;
  formData.append(key, String(value));
}

/**
 * Submit form data to Web3Forms using FormData + fetch.
 * Automatically appends the public access key and spam honeypot field.
 */
export async function submitWeb3Form(options: SubmitWeb3FormOptions): Promise<Web3FormResult> {
  const accessKey = getAccessKey();

  if (!accessKey) {
    return {
      ok: false,
      error: FORM_ERROR_MESSAGE,
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", options.subject);

  // Web3Forms honeypot: must stay empty for legitimate users
  const botcheck = options.botcheck ?? "";
  formData.append("botcheck", botcheck ? String(botcheck) : "");

  if (options.redirect) {
    formData.append("redirect", options.redirect);
  }

  if (options.hiddenFields) {
    for (const [key, value] of Object.entries(options.hiddenFields)) {
      appendField(formData, key, value);
    }
  }

  for (const [key, value] of Object.entries(options.fields)) {
    appendField(formData, key, value);
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    let payload: Web3FormsApiResponse | null = null;
    try {
      payload = (await response.json()) as Web3FormsApiResponse;
    } catch {
      payload = null;
    }

    if (!response.ok || !payload?.success) {
      return {
        ok: false,
        error: FORM_ERROR_MESSAGE,
      };
    }

    return { ok: true, data: payload.data };
  } catch {
    return {
      ok: false,
      error: FORM_ERROR_MESSAGE,
    };
  }
}
