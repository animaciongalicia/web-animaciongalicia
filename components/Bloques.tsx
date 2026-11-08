import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Bloque } from "@/content/types";
import { ENLACES_INTERNOS } from "@/content/enlaces";
import { bySlug, piezaPath, slugify } from "@/lib/piezas";
import { webGrupo } from "@/lib/company";
import { SITE } from "@/lib/site";
import { EnlaceGrupo } from "./EnlaceGrupo";

const ETIQUETA = { idea: "Idea", ojo: "Ojo con esto", dato: "Dato", frase: "" } as const;

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
    case "leetambien":
      return null; // se resume en la línea final «Más sobre esto»
  }
}

/**
 * Renderiza los bloques de un post. Los enlaces internos van discretos: una sola línea al final
 * («Más sobre esto: A · B», máximo 2) sin enlaces al grupo dentro del texto.
 */
export function Bloques({ bloques, slug, webs, websEtiqueta, descargas }: { bloques: Bloque[]; slug?: string; webs?: string[]; websEtiqueta?: string; descargas?: { texto: string; url: string }[] }) {
  const manuales = bloques.flatMap((b) => (b.t === "leetambien" ? [{ slug: b.slug, texto: bySlug(b.slug)?.tag ?? "" }] : []));
  const auto = (slug && ENLACES_INTERNOS[slug]) || [];
  const vistos = new Set<string>();
  const enlaces = [...auto, ...manuales]
    .filter((e) => bySlug(e.slug) && !vistos.has(e.slug) && vistos.add(e.slug))
    .slice(0, 2);
  return (
    <>
      {bloques.map((b, i) => {
        if (b.t === "grupo") return null; // las webs del grupo viven en «Cómo trabajamos», no dentro del texto
        return <Uno key={i} b={b} />;
      })}
      {descargas && descargas.length > 0 && (
        <aside className="descargas" aria-label="Descargas gratuitas">
          <p className="caja-titulo">Descargas gratuitas</p>
          <ul>
            {descargas.map((d) => (
              <li key={d.url}>
                <a href={d.url} target="_blank" rel="noopener noreferrer">
                  {d.texto}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
      {webs && SITE.salientes.grupo && (
        <p className="mas-sobre mas-sobre-webs">
          {websEtiqueta ?? "Si te toca organizarla allí"}:{" "}
          {webs.map((d, k) => {
            const w = webGrupo(d);
            return w ? (
              <Fragment key={d}>
                {k > 0 && " · "}
                <EnlaceGrupo dominio={d}>{w.ancla}</EnlaceGrupo>
              </Fragment>
            ) : null;
          })}
        </p>
      )}
      {enlaces.length > 0 && (
        <p className="mas-sobre">
          Más sobre esto:{" "}
          {enlaces.map((e, k) => (
            <Fragment key={e.slug}>
              {k > 0 && " · "}
              <Link href={piezaPath(bySlug(e.slug)!)}>{"texto" in e && e.texto ? e.texto : bySlug(e.slug)!.h1}</Link>
            </Fragment>
          ))}
        </p>
      )}
    </>
  );
}
