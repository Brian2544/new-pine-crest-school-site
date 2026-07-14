type FormEmailOptions = {
  subject: string;
  replyTo: string;
  fields: Record<string, string | undefined>;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function sendFormEmail({ subject, replyTo, fields }: FormEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORM_FROM_EMAIL;
  const to = process.env.ADMISSIONS_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Form email delivery is not configured");
  }

  const text = Object.entries(fields)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed with status ${response.status}`);
  }
}
