import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiezaView } from "@/components/PiezaView";
import { getPieza, piezaPath, visibles } from "@/lib/piezas";

export const dynamicParams = false;

export function generateStaticParams() {
  return visibles().map((p) => ({ section: p.seccion, slug: p.slug }));
}

type P = { params: Promise<{ section: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { section, slug } = await params;
  const p = getPieza(section, slug);
  if (!p) return {};
  const path = piezaPath(p);
  return {
    title: p.titulo,
    description: p.dek,
    alternates: { canonical: path },
    robots: p.borrador ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      url: path,
      title: p.titulo,
      description: p.dek,
      publishedTime: p.fecha,
      images: [{ url: `/og/${p.slug}.png`, width: 1200, height: 630, alt: p.titulo }],
    },
    twitter: { card: "summary_large_image", title: p.titulo, description: p.dek, images: [`/og/${p.slug}.png`] },
  };
}

export default async function PiezaPage({ params }: P) {
  const { section, slug } = await params;
  const p = getPieza(section, slug);
  if (!p) notFound();
  return <PiezaView p={p} />;
}
