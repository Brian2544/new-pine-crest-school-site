import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/form-email";
import { checkRateLimit } from "@/lib/rate-limit";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "newsletter");
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
    );
  }

  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    await sendFormEmail({
      subject: "New newsletter subscription",
      replyTo: result.data.email,
      fields: {
        "Subscriber email": result.data.email,
      },
    });

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
