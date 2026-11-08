import type { Metadata } from "next";
import type { Pieza } from "@/content/types";
import { absoluteUrl } from "./site";
import { piezaPath } from "./piezas";

/** Metadatos de un post (título, canonical, Open Graph, Twitter). Se reutiliza en las rutas normales y en las propias. */
export function metadataPieza(p: Pieza): Metadata {
  const url = absoluteUrl(piezaPath(p));
  const img = absoluteUrl(`/og/${p.slug}.png`);
  return {
    title: p.titulo,
    description: p.dek,
    alternates: { canonical: url },
    robots: p.borrador ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url,
      title: p.titulo,
      description: p.dek,
      publishedTime: p.fecha,
      images: [{ url: img, width: 1200, height: 630, alt: p.titulo }],
    },
    twitter: { card: "summary_large_image", title: p.titulo, description: p.dek, images: [img] },
  };
}
