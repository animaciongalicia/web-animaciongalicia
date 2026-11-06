import { ImageResponse } from "next/og";
import { esquelaFromParams, esquelaLines } from "@/lib/esquela";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const sp = Object.fromEntries(new URL(req.url).searchParams.entries());
  const { data, planB } = esquelaFromParams(sp);
  // Satori descarga los emojis de una CDN externa: los quitamos del texto de la imagen.
  const strip = (t: string) => t.replace(/[\p{Extended_Pictographic}\u200d\ufe0f]/gu, "").trim();
  const [title, ...rest] = esquelaLines(data).map(strip);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4f1ea",
          padding: 36,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid #111",
            padding: 8,
            textAlign: "center",
            color: "#111",
            fontFamily: "Georgia, serif",
          }}
        >
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #111",
              padding: 32,
            }}
          >
          <div style={{ display: "flex", position: "relative", width: 44, height: 64 }}>
            <div style={{ position: "absolute", left: 18, top: 0, width: 8, height: 64, background: "#111" }} />
            <div style={{ position: "absolute", left: 0, top: 16, width: 44, height: 8, background: "#111" }} />
          </div>
          <div style={{ fontSize: 24, letterSpacing: 8, textTransform: "uppercase", display: "flex", marginBottom: 16 }}>
            Esquela
          </div>
          <div style={{ fontSize: 54, fontWeight: 700, display: "flex", marginBottom: 20, lineHeight: 1.1 }}>{title}</div>
          {rest.slice(0, 3).map((l, i) => (
            <div key={i} style={{ fontSize: 28, display: "flex", marginBottom: 8 }}>
              {l}
            </div>
          ))}
          {strip(planB) && (
            <div style={{ fontSize: 30, display: "flex", marginTop: 18, color: "#9a3412", fontWeight: 700 }}>{strip(planB)}</div>
          )}
          <div style={{ fontSize: 20, display: "flex", marginTop: 22, letterSpacing: 4, textTransform: "uppercase", color: "#555" }}>
            Menú Marrón
          </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
