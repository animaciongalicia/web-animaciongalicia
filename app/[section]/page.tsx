import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiezaCard } from "@/components/PiezaCard";
import { PiezaView } from "@/components/PiezaView";
import { SECCIONES } from "@/content/piezas";
import { absoluteUrl } from "@/lib/site";
import { metadataPieza } from "@/lib/seo";
import { bySeccion, conRuta, getPorRaiz } from "@/lib/piezas";

export const dynamicParams = false;

const CATS = ["cumpleanos", "regalos", "juegos"] as const;
type Cat = (typeof CATS)[number];
const raiz = (ruta?: string) => (ruta ?? "").replace(/^\/|\/$/g, "");

/**
 * Este segmento sirve dos cosas: las secciones (/regalos/, /juegos/…) y los posts con `ruta` propia en la raíz
 * (URLs antiguas conservadas, p. ej. /despedidas-de-soltero-y-soltera-en-a-coruna/).
 */
export function generateStaticParams() {
  return [...CATS.map((section) => ({ section })), ...conRuta().map((p) => ({ section: raiz(p.ruta) }))];
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (CATS.includes(section as Cat)) {
    const s = SECCIONES[section as Cat];
    const img = absoluteUrl("/og/inicio.png");
    return {
      title: s.title,
      description: s.intro,
      alternates: { canonical: absoluteUrl(s.path) },
      openGraph: { url: absoluteUrl(s.path), title: s.title, description: s.intro, images: [{ url: img, width: 1200, height: 630, alt: "Menú Marrón" }] },
      twitter: { card: "summary_large_image", images: [img] },
    };
  }
  const p = getPorRaiz(section);
  return p ? metadataPieza(p) : {};
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const propia = getPorRaiz(section);
  if (propia) return <PiezaView p={propia} />;
  if (!CATS.includes(section as Cat)) notFound();
  const s = SECCIONES[section as Cat];
  const list = bySeccion(section as Cat);
  return (
    <div className="wrap-wide page" data-seccion={section}>
      <header className="section-head">
        <p className="kicker">{s.label}</p>
        <h1>{s.title}</h1>
        <p className="lead">{s.intro}</p>
      </header>
      {list.length ? (
        <ul className="cards cards-3">
          {list.map((p) => (
            <PiezaCard key={p.slug} p={p} />
          ))}
        </ul>
      ) : (
        <p className="deck">Todavía no hay nada aquí. Mándanos el primer enlace desde Contacto.</p>
      )}
    </div>
  );
}
