import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    console.log("[Contact Form]", result.data);

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
