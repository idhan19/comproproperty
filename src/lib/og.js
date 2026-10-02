import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { company } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };

/** Gambar Open Graph 1200x630 dari logo dan warna brand PMU. */
export async function renderOgImage() {
  const logo = await readFile(join(process.cwd(), "public", company.logo));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#262a45",
          padding: "0 80px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 24, background: "#fe0000" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: 40,
            background: "#ffffff",
            flexShrink: 0,
          }}
        >
          {/* next/og hanya mendukung <img>, bukan next/image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={216} height={216} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56, color: "#ffffff" }}>
          <div style={{ fontSize: 30, color: "#fddf6b", letterSpacing: 2, marginBottom: 16 }}>
            KABUPATEN BOGOR, JAWA BARAT
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>PT Ponco Munaro Utama</div>
          <div style={{ fontSize: 32, marginTop: 24, lineHeight: 1.35, color: "#e6e8f1", maxWidth: 680 }}>
            Kontraktor Konstruksi, Mekanikal Elektrikal &amp; Supplier Material
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
