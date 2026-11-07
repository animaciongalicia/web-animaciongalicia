import type { Metadata } from "next";
import Link from "next/link";
import { SECCIONES } from "@/content/piezas";
import type { Seccion } from "@/content/types";
import { DESDE_GALICIA } from "@/content/galicia";
import { bySeccion, bySlug, fechaLarga, minutosLectura, piezaPath, seccionLabel, visibles } from "@/lib/piezas";

const TITLE = "Menú Marrón · Menudo marrón organizar este evento";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Ideas, retos y locuras para organizar despedidas de soltero y de soltera, cumpleaños y regalos en Galicia. Humor con cabeza para quien se ha comido el marrón de organizar. Un proyecto de Animación Galicia.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: TITLE,
    images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
};

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "regalos", "juegos"];

export default function Home() {
  const todas = visibles();
  const lead = todas.find((p) => p.destacada) ?? todas[0];
  const resto = todas.filter((p) => p !== lead);
  const gal = DESDE_GALICIA.map((g) => ({ ...g, pieza: bySlug(g.slug) })).filter((g) => g.pieza);

  return (
    <>
      <section className="front-head">
        <div className="wrap-wide">
          <p className="kicker">Despedidas · Cumpleaños · Regalos · Juegos</p>
          <h1>Menudo marrón organizar este evento</h1>
          <p className="lead">
            Ideas, retos y locuras para organizar despedidas de soltero y de soltera, cumpleaños y regalos en Galicia.
            Con humor, con cabeza y sin humo.
          </p>
        </div>
      </section>

      {lead ? (
        <section className="wrap-wide front" aria-labelledby="portada-t">
          <h2 id="portada-t" className="visually-hidden">
            En portada
          </h2>
          <article className="lead-story" data-seccion={lead.seccion}>
            <p className="kicker">
              {seccionLabel(lead.seccion)} · {lead.tag}
            </p>
            <h3>
              <Link href={piezaPath(lead)}>{lead.titulo}</Link>
            </h3>
            <p className="dek">{lead.dek}</p>
            <p className="meta">
              <time dateTime={lead.fecha}>{fechaLarga(lead.fecha)}</time>
              <span>{minutosLectura(lead)} min</span>
              {lead.borrador && <span className="draft">Borrador</span>}
            </p>
            <Link href={piezaPath(lead)} className="more">
              Leer la pieza →
            </Link>
          </article>
          <aside className="latest" aria-labelledby="ult-t">
            <h2 id="ult-t" className="section-title">
              Lo último
            </h2>
            {resto.length > 0 ? (
              <ul>
                {resto.slice(0, 5).map((p) => (
                  <li key={p.slug} data-seccion={p.seccion}>
                    <p className="kicker">{seccionLabel(p.seccion)}</p>
                    <Link href={piezaPath(p)}>{p.titulo}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">La primera edición está en marcha.</p>
            )}
          </aside>
        </section>
      ) : (
        <section className="wrap-wide section">
          <p className="deck">Estamos preparando la primera edición. Vuelve pronto.</p>
        </section>
      )}

      <section className="band" aria-labelledby="sec-t">
        <div className="wrap-wide section">
        <h2 id="sec-t" className="section-title">
          Por secciones
        </h2>
        <div className="sections-grid">
          {ORDEN.map((s) => {
            const list = bySeccion(s).slice(0, 3);
            const sec = SECCIONES[s];
            return (
              <div key={s} className="sec-col" data-seccion={s}>
                <h3>
                  <Link href={sec.path}>{sec.label}</Link>
                </h3>
                <p className="muted">{sec.intro}</p>
                {list.length ? (
                  <ul>
                    {list.map((p) => (
                      <li key={p.slug}>
                        <Link href={piezaPath(p)}>{p.titulo}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="soon">Próximamente</p>
                )}
              </div>
            );
          })}
        </div>
        </div>
      </section>

      <section className="wrap-wide section galicia" aria-labelledby="gal-t">
        <div>
          <p className="kicker">Hecha en Galicia</p>
          <h2 id="gal-t" className="feature-title">
            Para quien organiza desde Galicia
          </h2>
          <p className="deck">
            El marrón es el mismo en Vigo, A Coruña, Santiago, Ourense, Lugo, Pontevedra o Sanxenxo. Los planes, los
            precios y la lluvia, no. Aquí vamos juntando lo que funciona por aquí.
          </p>
        </div>
        {gal.length > 0 && (
          <ul className="gal-list">
            {gal.map((g) => (
              <li key={g.slug} data-seccion={g.pieza!.seccion}>
                <Link href={piezaPath(g.pieza!)}>{g.texto}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="wrap-wide section tip" aria-labelledby="tip-t">
        <div className="closing">
          <h2 id="tip-t">¿Has visto algo que tenemos que ver?</h2>
          <p>Mándanos el enlace o cuéntanos tu marrón. Si nos hace reír y ayuda a quien organiza, lo contamos.</p>
          <Link href="/contacto/#enlace" className="btn btn-primary">
            Mandar un enlace
          </Link>
        </div>
      </section>
    </>
  );
}
