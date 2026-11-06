import { ImageResponse } from "next/og";
import { articles } from "@/content/articles";

export const dynamicParams = false;

const HOME_TITLE = "Ideas, juegos y marrones para organizar una despedida";

export function generateStaticParams() {
  return [{ file: "inicio.png" }, ...articles.map((a) => ({ file: `${a.slug}.png` }))];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const slug = file.replace(/\.png$/, "");
  const title = articles.find((a) => a.slug === slug)?.h1 ?? HOME_TITLE;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6efe0",
          color: "#2a1608",
          padding: 70,
          borderBottom: "24px solid #ff5a1f",
        }}
      >
        <div style={{ fontSize: 38, fontWeight: 800 }}>MENÚ MARRÓN</div>
        <div style={{ fontSize: title.length > 60 ? 62 : 76, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
        <div style={{ fontSize: 30, color: "#a33a00", fontWeight: 700 }}>Un proyecto de Animación Galicia</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
