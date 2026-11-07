import Link from "next/link";
import { CopyButton } from "./CopyButton";
import { ShareBar } from "./ShareBar";
import { EmbedVideo } from "./Embed";
import { JsonLd } from "./JsonLd";
import { PiezaCard } from "./PiezaCard";
import { SECCIONES } from "@/content/piezas";
import { bySlug, fechaLarga, piezaPath } from "@/lib/piezas";
import { absoluteUrl, SITE } from "@/lib/site";
import { AGENCIA } from "@/lib/company";
import type { Pieza } from "@/content/types";

export function PiezaView({ p }: { p: Pieza }) {
  const sec = SECCIONES[p.seccion];
  const relacionadas = (p.relacionadas ?? []).map((s) => bySlug(s)).filter((x): x is Pieza => !!x);

  return (
    <article className="wrap-wide page pieza" data-seccion={p.seccion}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.h1,
          description: p.dek,
          datePublished: p.fecha,
          inLanguage: "es",
          mainEntityOfPage: absoluteUrl(piezaPath(p)),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: AGENCIA.nombre },
        }}
      />
      <header className="pieza-head read">
        <p className="crumbs">
          <Link href="/">Portada</Link>
          {p.seccion !== "despedidas" && (
            <>
              <span aria-hidden="true"> / </span>
              <Link href={sec.path}>{sec.label}</Link>
            </>
          )}
        </p>
        <p className="kicker">{p.tag}</p>
        <h1>{p.h1}</h1>
        <p className="dek">{p.dek}</p>
        <p className="byline">
          Por la redacción de Menú Marrón · <time dateTime={p.fecha}>{fechaLarga(p.fecha)}</time>
        </p>
        {p.borrador && (
          <p className="banner" role="note">
            Muestra de formato (borrador). {p.verificacion}
          </p>
        )}
      </header>

      <div className="read">
        {p.embed && <EmbedVideo embed={p.embed} />}

        <aside className="source" aria-label="Fuentes">
          <p className="source-title">Lo hemos visto en</p>
          <ul>
            {p.fuentes.map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer nofollow">
                  {f.nombre}
                </a>
                <span className="source-type"> · {f.tipo}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="prose">
          {p.cuerpo.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>

        {p.items && (
          <ol className="items">
            {p.items.map((it) => (
              <li key={it.titulo}>
                <h2>{it.titulo}</h2>
                <p>{it.texto}</p>
                {it.fuente && (
                  <p className="source-line">
                    Fuente:{" "}
                    <a href={it.fuente.url} target="_blank" rel="noopener noreferrer nofollow">
                      {it.fuente.nombre}
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}

        {p.porQueFunciona && (
          <section className="note">
            <h2>Por qué funciona</h2>
            <p>{p.porQueFunciona}</p>
          </section>
        )}

        {p.queHacer && (
          <section className="note note-do">
            <h2>Qué hacer con esto</h2>
            <p>{p.queHacer.texto}</p>
            {p.queHacer.mensaje && (
              <>
                <blockquote className="msg">{p.queHacer.mensaje}</blockquote>
                <ShareBar text={p.queHacer.mensaje} path={piezaPath(p)} copyLabel="Copiar mensaje" />
              </>
            )}
          </section>
        )}

        {!p.queHacer?.mensaje && (
          <div className="share-row">
            <CopyButton text={absoluteUrl(piezaPath(p))} label="Copiar enlace" />
          </div>
        )}
      </div>

      {relacionadas.length > 0 && (
        <section className="related" aria-labelledby="rel-t">
          <h2 id="rel-t" className="section-title">
            Más de la misma revista
          </h2>
          <ul className="cards cards-3">
            {relacionadas.map((r) => (
              <PiezaCard key={r.slug} p={r} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
