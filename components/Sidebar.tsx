import Link from "next/link";
import { SECCIONES } from "@/content/piezas";
import type { Pieza, Seccion } from "@/content/types";
import { bySeccion, piezaPath } from "@/lib/piezas";

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "eventos", "regalos", "juegos"];

export function Sidebar({ p }: { p: Pieza }) {
  const mismas = bySeccion(p.seccion);
  // Solo los 5 más cercanos al post actual (si no, en secciones grandes la barra se alarga demasiado).
  const i = Math.max(0, mismas.findIndex((x) => x.slug === p.slug));
  const desde = Math.min(Math.max(0, i - 2), Math.max(0, mismas.length - 5));
  const cercanas = mismas.slice(desde, desde + 5);

  return (
    <aside className="sidebar" aria-label="Seguir leyendo">
      <nav className="chips" aria-label="Cambiar de sección">
        {ORDEN.map((s) => (
          <Link key={s} href={SECCIONES[s].path} data-seccion={s} aria-current={s === p.seccion ? "true" : undefined}>
            {SECCIONES[s].label}
          </Link>
        ))}
      </nav>

      <section className="side-box" data-seccion={p.seccion}>
        <h2>En {SECCIONES[p.seccion].label}</h2>
        <ul>
          {cercanas.map((x) => (
            <li key={x.slug} aria-current={x.slug === p.slug ? "true" : undefined}>
              {x.slug === p.slug ? <span>{x.titulo}</span> : <Link href={piezaPath(x)}>{x.titulo}</Link>}
            </li>
          ))}
        </ul>
        {mismas.length > cercanas.length && (
          <Link href={p.seccion === "despedidas" ? "/despedidas/" : SECCIONES[p.seccion].path} className="more">
            Ver los {mismas.length} →
          </Link>
        )}
      </section>

      <section className="side-box side-tip">
        <h2>¿Algo que tengamos que ver?</h2>
        <p>Mándanos el enlace o cuéntanos tu marrón.</p>
        <Link href="/contacto/#enlace" className="more">
          Mandar un enlace →
        </Link>
      </section>
    </aside>
  );
}
