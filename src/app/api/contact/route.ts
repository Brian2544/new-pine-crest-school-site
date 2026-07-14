import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/form-email";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "contact");
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
    );
  }

  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    await sendFormEmail({
      subject: `Website enquiry: ${result.data.subject}`,
      replyTo: result.data.email,
      fields: {
        Name: result.data.name,
        Email: result.data.email,
        Phone: result.data.phone,
        Subject: result.data.subject,
        Message: result.data.message,
      },
    });

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
