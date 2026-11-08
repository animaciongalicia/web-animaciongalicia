import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Bloque } from "@/content/types";
import { ENLACES_INTERNOS } from "@/content/enlaces";
import { bySlug, piezaPath, seccionLabel, slugify } from "@/lib/piezas";
import { webGrupo } from "@/lib/company";
import { SITE } from "@/lib/site";
import { EnlaceGrupo } from "./EnlaceGrupo";

const ETIQUETA = { idea: "Idea", ojo: "Ojo con esto", dato: "Dato", frase: "" } as const;

function Enlace({ slug, texto }: { slug: string; texto: string }) {
  const p = bySlug(slug);
  if (!p) return null;
  return (
    <p className="enlace-interno">
      <span>Te puede interesar:</span> <Link href={piezaPath(p)}>{texto}</Link>
    </p>
  );
}

function Uno({ b }: { b: Bloque }) {
  switch (b.t) {
    case "p":
      return <p>{b.x}</p>;
    case "h2":
      return <h2 id={slugify(b.x)}>{b.x}</h2>;
    case "ul":
      return (
        <ul className="lista">
          {b.x.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="lista-num">
          {b.x.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      );
    case "caja": {
      const lines = Array.isArray(b.x) ? b.x : [b.x];
      return (
        <aside className={`caja caja-${b.tipo}`}>
          {b.tipo !== "frase" && <p className="caja-titulo">{b.titulo ?? ETIQUETA[b.tipo]}</p>}
          {lines.length > 1 ? (
            <ul>
              {lines.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : (
            <p className={b.tipo === "frase" ? "frase" : undefined}>{lines[0]}</p>
          )}
        </aside>
      );
    }
    case "cita":
      return (
        <blockquote className="cita">
          <p>{b.x}</p>
          {b.autor && <footer>{b.autor}</footer>}
        </blockquote>
      );
    case "foto":
      return (
        <figure className="foto">
          <Image src={b.src} width={b.ancho} height={b.alto} alt={b.alt} sizes="(min-width: 1000px) 740px, 100vw" />
          {b.pie && <figcaption>{b.pie}</figcaption>}
        </figure>
      );
    case "grupo": {
      const w = webGrupo(b.dominio);
      if (!w || !SITE.salientes.grupo) return null;
      return (
        <aside className="caja caja-grupo">
          <p className="caja-titulo">Del grupo</p>
          <p>
            <EnlaceGrupo dominio={b.dominio}>{w.nombre}</EnlaceGrupo>. {b.x}
          </p>
        </aside>
      );
    }
    case "leetambien": {
      const p = bySlug(b.slug);
      if (!p) return null;
      return (
        <aside className="leetambien" data-seccion={p.seccion}>
          <p className="caja-titulo">Lee también · {seccionLabel(p.seccion)}</p>
          <Link href={piezaPath(p)}>{p.titulo}</Link>
        </aside>
      );
    }
  }
}

/**
 * Renderiza los bloques de un post e inserta sus enlaces internos de cola larga (content/enlaces.ts):
 * antes del 3.er y del 5.º subtítulo; los que sobren, al final. No repite destinos ya enlazados con «lee también».
 */
export function Bloques({ bloques, slug }: { bloques: Bloque[]; slug?: string }) {
  const yaEnlazados = new Set(bloques.flatMap((b) => (b.t === "leetambien" ? [b.slug] : [])));
  const pendientes = ((slug && ENLACES_INTERNOS[slug]) || []).filter((e) => !yaEnlazados.has(e.slug) && bySlug(e.slug));
  let usados = 0;
  let h2 = 0;

  return (
    <>
      {bloques.map((b, i) => {
        let insertar = null;
        if (b.t === "h2") {
          h2++;
          if ((h2 === 3 || h2 === 5) && pendientes[usados]) {
            const e = pendientes[usados++];
            insertar = <Enlace slug={e.slug} texto={e.texto} />;
          }
        }
        return (
          <Fragment key={i}>
            {insertar}
            <Uno b={b} />
          </Fragment>
        );
      })}
      {pendientes.slice(usados).map((e) => (
        <Enlace key={e.slug} slug={e.slug} texto={e.texto} />
      ))}
    </>
  );
}
