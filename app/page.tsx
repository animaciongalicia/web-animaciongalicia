import type { Metadata } from "next";
import Link from "next/link";
import { SECCIONES } from "@/content/piezas";
import type { Pieza, Seccion } from "@/content/types";
import { DESDE_GALICIA, PORTADA_SECUNDARIAS, SITUACIONES } from "@/content/galicia";
import Image from "next/image";
import { absoluteUrl } from "@/lib/site";
import { bySeccion, bySlug, fechaLarga, minutosLectura, piezaPath, preguntas, seccionLabel, visibles } from "@/lib/piezas";

// Decisión del propietario: el <title> NO lleva la palabra «despedidas». La fuerza para «despedidas en Galicia» va en la
// meta descripción, en el primer párrafo, en los subtítulos y en los enlaces internos.
const TITLE = "Menudo marrón organizar este evento · Menú Marrón";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Coñas, ideas y consejos para despedidas en Galicia, cumpleaños, celebraciones y demás eventos. Menudo marrón organizarlos: aquí está el plan, el humor y el mensaje para el grupo. Un proyecto de Animación Galicia.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: TITLE,
    images: [{ url: absoluteUrl("/og/inicio.png"), width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }],
  },
  twitter: { card: "summary_large_image", images: [absoluteUrl("/og/inicio.png")] },
};

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "eventos", "regalos", "juegos"];

export default function Home() {
  const todas = visibles();
  const lead = todas.find((p) => p.destacada) ?? todas[0];
  const secundarias = PORTADA_SECUNDARIAS.map((s) => bySlug(s)).filter((p): p is Pieza => !!p && p !== lead);
  const ultimas = todas.filter((p) => p !== lead && !secundarias.includes(p)).slice(0, 6);
  const situaciones = SITUACIONES.map((s) => ({ ...s, pieza: bySlug(s.slug) })).filter((s) => s.pieza);
  const gal = DESDE_GALICIA.map((g) => ({ ...g, pieza: bySlug(g.slug) })).filter((g) => g.pieza);

  // Una selección variada de preguntas (3 por cada post de «preguntas chorras»).
  const porPost = new Map<string, ReturnType<typeof preguntas>>();
  for (const q of preguntas()) porPost.set(q.pieza.slug, [...(porPost.get(q.pieza.slug) ?? []), q]);
  const chips = [...porPost.values()].flatMap((l) => l.slice(0, 3));

  return (
    <>
      <section className="front-head">
        <div className="wrap-wide front-head-grid">
          <div>
            <p className="kicker">Despedidas · Cumpleaños · Regalos · Juegos</p>
            <h1>Menudo marrón organizar este evento</h1>
            <p className="lead">
              Ideas, retos y trucos para organizar despedidas en Galicia (de soltero, de soltera y mixtas), cumpleaños y
              regalos. Con humor, con cabeza y sin humo.
            </p>
            <p className="head-links">
              <Link href="/despedidas/guia-para-organizar-despedidas-en-galicia/" className="btn btn-primary">
                Guía para organizar una despedida en Galicia
              </Link>
            </p>
          </div>
          <nav className="situaciones" aria-labelledby="sit-t">
            <h2 id="sit-t" className="section-title">
              ¿Qué marrón te ha tocado?
            </h2>
            <ul>
              {situaciones.map((s, i) => (
                <li key={s.slug} data-seccion={s.pieza!.seccion}>
                  <Link href={piezaPath(s.pieza!)}>
                    <span className="num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <strong>{s.texto}</strong>
                    <span className="sub">{s.sub} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {lead && (
        <section className="wrap-wide front-grid" aria-labelledby="portada-t">
          <h2 id="portada-t" className="visually-hidden">
            En portada
          </h2>
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
            </p>
          </article>

          <div className="secundarias">
            {secundarias.map((p) => (
              <article key={p.slug} className="secundaria" data-seccion={p.seccion}>
                <p className="kicker">
                  {seccionLabel(p.seccion)} · {p.tag}
                </p>
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

          <aside className="latest" aria-labelledby="ult-t">
            <h2 id="ult-t" className="section-title">
              Lo último
            </h2>
            <ul>
              {ultimas.map((p) => (
                <li key={p.slug} data-seccion={p.seccion}>
                  <p className="kicker">{seccionLabel(p.seccion)}</p>
                  <Link href={piezaPath(p)}>{p.titulo}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      )}

      {chips.length > 0 && (
        <section className="preguntas" aria-labelledby="preg-t">
          <div className="wrap-wide">
            <h2 id="preg-t" className="section-title">
              Lo que se pregunta (con respuesta de verdad)
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


      <section className="band" aria-labelledby="sec-t">
        <div className="wrap-wide section">
          <h2 id="sec-t" className="section-title">
            Por secciones
          </h2>
          <div className="sections-grid">
            {ORDEN.map((s) => {
              const list = bySeccion(s);
              const sec = SECCIONES[s];
              return (
                <div key={s} className="sec-col" data-seccion={s}>
                  <h3>
                    <Link href={sec.path}>{sec.label}</Link> <span className="count">{list.length}</span>
                  </h3>
                  <p className="muted">{sec.intro}</p>
                  {list.length ? (
                    <ul>
                      {list.slice(0, 4).map((p) => (
                        <li key={p.slug}>
                          <Link href={piezaPath(p)}>{p.titulo}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="soon">Próximamente</p>
                  )}
                  {list.length > 4 && (
                    <Link href={sec.path} className="more">
                      Ver los {list.length} →
                    </Link>
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

      <section className="wrap-wide section tip-grid" aria-labelledby="tip-t">
        <h2 id="tip-t" className="visually-hidden">
          Participa
        </h2>
        <div className="closing">
          <h3>¿Has visto algo que tenemos que ver?</h3>
          <p>Mándanos el enlace. Si nos hace reír y ayuda a quien organiza, lo contamos.</p>
          <Link href="/contacto/#enlace" className="btn btn-primary">
            Mandar un enlace
          </Link>
        </div>
        <div className="closing closing-alt">
          <h3>¿Cuál ha sido tu mayor marrón?</h3>
          <p>La frase que hundió el plan, el Bizum que no llegó. Cuéntalo y, si quieres, lo citamos sin tu nombre.</p>
          <Link href="/contacto/#marron" className="btn">
            Contar mi marrón
          </Link>
        </div>
      </section>
    </>
  );
}
