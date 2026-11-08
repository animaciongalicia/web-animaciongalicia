import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PiezaView } from "@/components/PiezaView";
import { SECCIONES } from "@/content/piezas";
import { absoluteUrl } from "@/lib/site";
import { metadataPieza } from "@/lib/seo";
import { bySeccion, conRuta, fechaLarga, getPorRaiz, minutosLectura, piezaPath, preguntas } from "@/lib/piezas";

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
  return <SeccionMagazine seccion={section as Cat} />;
}

function SeccionMagazine({ seccion }: { seccion: Cat }) {
  const s = SECCIONES[seccion];
  const list = bySeccion(seccion);
  const lead = list.find((p) => p.destacada) ?? list[0];
  const resto = list.filter((p) => p !== lead);
  const secundarias = resto.slice(0, 2);
  const ultimas = resto.slice(2, 8);
  const chips = preguntas().filter((q) => q.pieza.seccion === seccion).slice(0, 8);
  const otras = (["despedidas", "cumpleanos", "regalos", "juegos"] as const).filter((x) => x !== seccion);

  return (
    <div data-seccion={seccion}>
      <section className="front-head">
        <div className="wrap-wide">
          <p className="kicker">{s.label}</p>
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
        </div>
      </section>

      {lead ? (
        <section className="wrap-wide front-grid" aria-label={`En portada de ${s.label}`}>
          <article className="lead-story" data-seccion={lead.seccion}>
            {lead.imagen ? (
              <div className="lead-foto">
                <Image src={lead.imagen.src} width={lead.imagen.ancho} height={lead.imagen.alto} alt={lead.imagen.alt} priority sizes="(min-width: 1100px) 640px, 100vw" />
              </div>
            ) : (
              <div className="lead-art" aria-hidden="true">
                <span>{lead.tag}</span>
              </div>
            )}
            <p className="kicker">{lead.tag}</p>
            <h2>
              <Link href={piezaPath(lead)}>{lead.titulo}</Link>
            </h2>
            <p className="dek">{lead.dek}</p>
            <p className="meta">
              <time dateTime={lead.fecha}>{fechaLarga(lead.fecha)}</time>
              <span>{minutosLectura(lead)} min</span>
            </p>
          </article>

          <div className="secundarias">
            {secundarias.map((p) => (
              <article key={p.slug} className="secundaria" data-seccion={p.seccion}>
                <p className="kicker">{p.tag}</p>
                <h3>
                  <Link href={piezaPath(p)}>{p.titulo}</Link>
                </h3>
                <p className="deck">{p.dek}</p>
                <p className="meta">
                  <time dateTime={p.fecha}>{fechaLarga(p.fecha)}</time>
                  <span>{minutosLectura(p)} min</span>
                </p>
              </article>
            ))}
          </div>

          {ultimas.length > 0 && (
            <aside className="latest" aria-label="Más en esta sección">
              <h2 className="section-title">Más en {s.label}</h2>
              <ul>
                {ultimas.map((p) => (
                  <li key={p.slug} data-seccion={p.seccion}>
                    <p className="kicker">{p.tag}</p>
                    <Link href={piezaPath(p)}>{p.titulo}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </section>
      ) : (
        <section className="wrap-wide section">
          <p className="deck">Todavía no hay nada aquí. Mándanos el primer enlace desde Contacto.</p>
        </section>
      )}

      {chips.length > 0 && (
        <section className="preguntas" aria-labelledby="preg-t">
          <div className="wrap-wide">
            <h2 id="preg-t" className="section-title">
              Lo que se pregunta
            </h2>
            <ul className="chips-preguntas">
              {chips.map((q) => (
                <li key={q.pieza.slug + q.ancla} data-seccion={q.pieza.seccion}>
                  <Link href={`${piezaPath(q.pieza)}#${q.ancla}`}>{q.pregunta}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}


      <section className="band">
        <div className="wrap-wide section">
          <h2 className="section-title">Sigue por otras secciones</h2>
          <div className="sections-grid">
            {otras.map((o) => (
              <div key={o} className="sec-col" data-seccion={o}>
                <h3>
                  <Link href={SECCIONES[o].path}>{SECCIONES[o].label}</Link> <span className="count">{bySeccion(o).length}</span>
                </h3>
                <p className="muted">{SECCIONES[o].intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
