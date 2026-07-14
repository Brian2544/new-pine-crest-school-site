import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SCHOOL } from "@/lib/constants";

export const alt = `${SCHOOL.name} — ${SCHOOL.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo-full.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={880} height={365} alt="" />
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#1b4332",
          }}
        >
          <span>Ruiru, Kihunguro</span>
          <span style={{ color: "#d4a017" }}>•</span>
          <span>PP1 – Grade 9</span>
          <span style={{ color: "#d4a017" }}>•</span>
          <span>Admissions Open</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
