import { ImageResponse } from "next/og";
import { SCHOOL } from "@/lib/constants";

export const alt = `${SCHOOL.name} — ${SCHOOL.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0d2818 0%, #1b4332 50%, #2d6a4f 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: "#d4a017",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
              color: "#0d2818",
            }}
          >
            PC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 52, fontWeight: 700 }}>{SCHOOL.name}</span>
            <span style={{ fontSize: 28, color: "#d4a017", marginTop: 8 }}>{SCHOOL.slogan}</span>
          </div>
        </div>
        <p style={{ fontSize: 26, color: "#c8e6c9", maxWidth: 900, lineHeight: 1.4 }}>
          Christian values-based CBE school in Ruiru — Play Group through Junior School
        </p>
      </div>
    ),
    { ...size },
  );
}
