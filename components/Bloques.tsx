import Link from "next/link";
import type { Bloque } from "@/content/types";
import { bySlug, piezaPath, seccionLabel } from "@/lib/piezas";

const ETIQUETA = { idea: "Idea", ojo: "Ojo con esto", dato: "Dato", frase: "" } as const;

export function Bloques({ bloques }: { bloques: Bloque[] }) {
  return (
    <>
      {bloques.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i}>{b.x}</p>;
          case "h2":
            return <h2 key={i}>{b.x}</h2>;
          case "ul":
            return (
              <ul key={i} className="lista">
                {b.x.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="lista-num">
                {b.x.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            );
          case "caja": {
            const lines = Array.isArray(b.x) ? b.x : [b.x];
            return (
              <aside key={i} className={`caja caja-${b.tipo}`}>
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
              <blockquote key={i} className="cita">
                <p>{b.x}</p>
                {b.autor && <footer>{b.autor}</footer>}
              </blockquote>
            );
          case "leetambien": {
            const p = bySlug(b.slug);
            if (!p) return null;
            return (
              <aside key={i} className="leetambien" data-seccion={p.seccion}>
                <p className="caja-titulo">Lee también · {seccionLabel(p.seccion)}</p>
                <Link href={piezaPath(p)}>{p.titulo}</Link>
              </aside>
            );
          }
        }
      })}
    </>
  );
}
