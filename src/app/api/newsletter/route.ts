import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    console.log("[Newsletter Signup]", result.data);

    return NextResponse.json({ success: true, message: "Subscribed" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
