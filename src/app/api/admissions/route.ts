import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/form-email";
import { checkRateLimit } from "@/lib/rate-limit";
import { admissionSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, "admissions");
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
    );
  }

  try {
    const body = await request.json();
    const result = admissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    await sendFormEmail({
      subject: `New admission application: ${result.data.childName}`,
      replyTo: result.data.email,
      fields: {
        "Parent / Guardian": result.data.parentName,
        Phone: result.data.phone,
        Email: result.data.email,
        Child: result.data.childName,
        "Date of birth": result.data.dateOfBirth,
        "Grade applying for": result.data.grade,
        Message: result.data.message,
      },
    });

    return NextResponse.json({ success: true, message: "Application received" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
