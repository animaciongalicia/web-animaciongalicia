import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiezaView } from "@/components/PiezaView";
import { metadataPieza } from "@/lib/seo";
import { getPieza, visibles } from "@/lib/piezas";

export const dynamicParams = false;

export function generateStaticParams() {
  return visibles()
    .filter((p) => !p.ruta)
    .map((p) => ({ section: p.seccion, slug: p.slug }));
}

type P = { params: Promise<{ section: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { section, slug } = await params;
  const p = getPieza(section, slug);
  return p ? metadataPieza(p) : {};
}

export default async function PiezaPage({ params }: P) {
  const { section, slug } = await params;
  const p = getPieza(section, slug);
  if (!p) notFound();
  return <PiezaView p={p} />;
}
