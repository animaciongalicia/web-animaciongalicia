import Link from "next/link";
import { SECCIONES } from "@/content/piezas";
import { DESDE_GALICIA } from "@/content/galicia";
import type { Pieza, Seccion } from "@/content/types";
import { bySeccion, bySlug, piezaPath, visibles } from "@/lib/piezas";

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "regalos", "juegos"];

export function Sidebar({ p }: { p: Pieza }) {
  const mismas = bySeccion(p.seccion);
  // Solo los 6 más cercanos al post actual (si no, en secciones grandes la barra se alarga demasiado).
  const i = Math.max(0, mismas.findIndex((x) => x.slug === p.slug));
  const desde = Math.min(Math.max(0, i - 2), Math.max(0, mismas.length - 6));
  const cercanas = mismas.slice(desde, desde + 6);
  const ultimas = visibles().filter((x) => x.slug !== p.slug).slice(0, 4);
  const galicia = DESDE_GALICIA.map((g) => ({ ...g, pieza: bySlug(g.slug) })).filter((g) => g.pieza && g.slug !== p.slug);

  return (
    <aside className="sidebar" aria-label="Seguir leyendo">
      <nav className="chips" aria-label="Secciones">
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
          <Link href={SECCIONES[p.seccion].path} className="more">
            Ver los {mismas.length} →
          </Link>
        )}
      </section>

      <section className="side-box side-last">
        <h2>Lo último</h2>
        <ul>
          {ultimas.map((x) => (
            <li key={x.slug} data-seccion={x.seccion}>
              <span className="kicker">{SECCIONES[x.seccion].label}</span>
              <Link href={piezaPath(x)}>{x.titulo}</Link>
            </li>
          ))}
        </ul>
      </section>

      {galicia.length > 0 && (
        <section className="side-box side-galicia">
          <h2>Desde Galicia</h2>
          <ul>
            {galicia.map((g) => (
              <li key={g.slug}>
                <Link href={piezaPath(g.pieza!)}>{g.texto}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

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
