import { NextResponse } from "next/server";
import { admissionSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = admissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    // Log submission — replace with email (Resend) or database storage in production
    console.log("[Admission Application]", result.data);

    return NextResponse.json({ success: true, message: "Application received" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
