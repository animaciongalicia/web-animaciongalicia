import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PiezaCard } from "@/components/PiezaCard";
import { SECCIONES } from "@/content/piezas";
import { bySeccion } from "@/lib/piezas";

export const dynamicParams = false;

const CATS = ["cumpleanos", "regalos", "juegos"] as const;
type Cat = (typeof CATS)[number];

export function generateStaticParams() {
  return CATS.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!CATS.includes(section as Cat)) return {};
  const s = SECCIONES[section as Cat];
  return {
    title: s.title,
    description: s.intro,
    alternates: { canonical: s.path },
    openGraph: {
      url: s.path,
      title: s.title,
      description: s.intro,
      images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón" }],
    },
    twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
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
