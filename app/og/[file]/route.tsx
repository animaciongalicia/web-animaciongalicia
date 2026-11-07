import { ImageResponse } from "next/og";
import { visibles } from "@/lib/piezas";

export const dynamicParams = false;

const HOME_TITLE = "Menudo marrón organizar una despedida en Galicia";

export function generateStaticParams() {
  return [{ file: "inicio.png" }, ...visibles().map((p) => ({ file: `${p.slug}.png` }))];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const slug = file.replace(/\.png$/, "");
  const title = visibles().find((p) => p.slug === slug)?.h1 ?? HOME_TITLE;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f2ea",
          color: "#1b1a17",
          padding: 70,
          borderTop: "14px solid #7b2d2d",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: 4 }}>MENÚ MARRÓN</div>
        <div style={{ display: "flex", fontSize: title.length > 70 ? 56 : 68, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 28, color: "#7b2d2d" }}>Revista hecha en Galicia · Un proyecto de Animación Galicia</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
