import Image from "next/image";
import Link from "next/link";
import { ShareBar } from "./ShareBar";
import { Bloques } from "./Bloques";
import { EmbedVideo } from "./Embed";
import { JsonLd } from "./JsonLd";
import { PiezaCard } from "./PiezaCard";
import { Sidebar } from "./Sidebar";
import { SECCIONES } from "@/content/piezas";
import { bySeccion, bySlug, fechaLarga, minutosLectura, piezaPath, visibles } from "@/lib/piezas";
import { absoluteUrl, SITE } from "@/lib/site";
import { AGENCIA } from "@/lib/company";
import type { Pieza } from "@/content/types";

export function PiezaView({ p }: { p: Pieza }) {
  const sec = SECCIONES[p.seccion];

  // Sigue leyendo: primero las relacionadas a mano; luego otras de la sección; luego lo último.
  const elegidas = new Map<string, Pieza>();
  const candidatas = [
    ...(p.relacionadas ?? []).map((s) => bySlug(s)),
    ...bySeccion(p.seccion),
    ...visibles(),
  ];
  for (const c of candidatas) if (c && c.slug !== p.slug && elegidas.size < 3) elegidas.set(c.slug, c);

  return (
    <article className="wrap-wide page pieza" data-seccion={p.seccion}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portada", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: sec.label, item: absoluteUrl(sec.path) },
            { "@type": "ListItem", position: 3, name: p.h1, item: absoluteUrl(piezaPath(p)) },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          image: absoluteUrl(`/og/${p.slug}.png`),
          dateModified: p.fecha,
          headline: p.h1,
          description: p.dek,
          datePublished: p.fecha,
          inLanguage: "es",
          mainEntityOfPage: absoluteUrl(piezaPath(p)),
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: AGENCIA.nombre },
        }}
      />
      <header className="pieza-head">
        <p className="crumbs">
          <Link href="/">Portada</Link>
          <span aria-hidden="true"> / </span>
          <Link href={sec.path}>{sec.label}</Link>
        </p>
        <p className="kicker">{p.tag}</p>
        <h1>{p.h1}</h1>
        <p className="dek">{p.dek}</p>
        <p className="byline">
          Por la redacción de Menú Marrón · <time dateTime={p.fecha}>{fechaLarga(p.fecha)}</time> ·{" "}
          {minutosLectura(p)} min de lectura
        </p>
        {p.borrador && (
          <p className="banner" role="note">
            Borrador: visible solo en preview.
          </p>
        )}
      </header>

      <div className="pieza-layout">
        <div className="pieza-main">
          {p.imagen && (
            <figure className="hero-foto">
              <Image src={p.imagen.src} width={p.imagen.ancho} height={p.imagen.alto} alt={p.imagen.alt} priority sizes="(min-width: 1000px) 740px, 100vw" />
              {p.imagen.credito && <figcaption>Foto: {p.imagen.credito}</figcaption>}
            </figure>
          )}
          {SITE.salientes.terceros && p.embed && <EmbedVideo embed={p.embed} />}
          <div className="prose">
            <Bloques bloques={p.bloques} slug={p.slug} webs={p.webs} websEtiqueta={p.websEtiqueta} descargas={p.descargas} />
          </div>

          {p.fuentes && p.fuentes.length > 0 && (
            <aside className="source" aria-label="Fuentes">
              <p className="source-title">Fuentes</p>
              <ul>
                {p.fuentes.map((f) => (
                  <li key={f.url}>
                    {SITE.salientes.terceros ? (
                      <a href={f.url} target="_blank" rel="noopener noreferrer nofollow">
                        {f.nombre}
                      </a>
                    ) : (
                      f.nombre
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="share-row">
            <ShareBar text={p.titulo} path={piezaPath(p)} copyLabel="Copiar enlace" />
          </div>

        </div>
        <Sidebar p={p} />
      </div>

      <section className="related" aria-labelledby="rel-t">
        <h2 id="rel-t" className="section-title">
          Sigue leyendo
        </h2>
        <ul className="cards cards-3">
          {[...elegidas.values()].map((r) => (
            <PiezaCard key={r.slug} p={r} />
          ))}
        </ul>
      </section>
    </article>
  );
}
