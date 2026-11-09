import Image from "next/image";
import Link from "next/link";
import { AjustarCookies } from "./Cookies";
import { GA_ACTIVO } from "@/lib/analytics";
import { SECCIONES } from "@/content/piezas";
import type { Seccion } from "@/content/types";
import { bySeccion, bySlug, piezaPath } from "@/lib/piezas";
import { SITE, withBase } from "@/lib/site";

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "eventos", "regalos", "juegos"];

const RESUMEN: Record<Seccion, string> = {
  despedidas: "Guías, retos y dinero para el grupo",
  cumpleanos: "Ideas, sorpresas y temas",
  eventos: "Cenas, jubilaciones y celebraciones",
  regalos: "Qué regalar y qué decir",
  juegos: "Retos y herramientas gratis",
};

/** «Empieza por aquí»: la guía, el pilar de actividades y las páginas de cada ciudad. */
const EMPIEZA = [
  { texto: "Guía para organizar una despedida", slug: "guia-para-organizar-despedidas-en-galicia" },
  { texto: "Actividades absurdas para despedidas", slug: "actividades-absurdas-despedidas-galicia" },
  { texto: "Herramientas gratis para organizar", slug: "herramientas-gratis-para-organizar-una-despedida" },
  { texto: "Presupuesto de una despedida", slug: "presupuesto-despedida-como-calcularlo" },
  { texto: "Qué llevar a una despedida en Galicia", slug: "que-llevar-y-que-no-llevar-a-una-despedida-en-galicia" },
];

const CIUDADES = [
  { texto: "A Coruña", slug: "despedida-en-a-coruna-que-hacer-de-loco" },
  { texto: "Vigo", slug: "despedida-en-vigo-que-hacer-de-loco" },
  { texto: "Sanxenxo", slug: "despedida-en-sanxenxo-que-hacer-de-loco" },
  { texto: "Ourense", slug: "despedida-en-ourense-que-hacer-de-loco" },
];

export function Footer() {
  const empieza = EMPIEZA.map((e) => ({ ...e, pieza: bySlug(e.slug) })).filter((e) => e.pieza);
  const ciudades = CIUDADES.map((e) => ({ ...e, pieza: bySlug(e.slug) })).filter((e) => e.pieza);
  return (
    <footer className="site-footer">
      <div className="wrap-wide">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-marca">
              <Image src="/icon-192.png" width={44} height={44} alt="" />
              <p className="foot-logo">
                Menú <em>Marrón</em>
              </p>
            </div>
            <p className="small">
              Menudo marrón organizar este evento. Ideas, retos y consejos para despedidas de soltero y de soltera,
              cumpleaños, cenas y celebraciones con amigos. Hecha en Galicia, con humor y sin humo.
            </p>
            <p className="small">
              {SITE.signature.replace("Animación Galicia", "")}
              <Link href="/como-trabajamos/">Animación Galicia</Link>.
            </p>
            <nav aria-label="Despedidas por ciudad">
              <p className="foot-title" style={{ marginTop: 14, marginBottom: 6 }}>
                Despedidas por ciudad
              </p>
              <ul className="foot-ciudades">
                {ciudades.map((c) => (
                  <li key={c.slug}>
                    <Link href={piezaPath(c.pieza!)}>{c.texto}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav aria-label="Secciones de la revista">
            <p className="foot-title">Secciones</p>
            <ul>
              {ORDEN.map((s) => (
                <li key={s}>
                  <Link href={SECCIONES[s].path}>{SECCIONES[s].label}</Link>
                  <small>
                    {RESUMEN[s]} · {bySeccion(s).length}
                  </small>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empieza por aquí">
            <p className="foot-title">Empieza por aquí</p>
            <ul>
              {empieza.map((e) => (
                <li key={e.slug}>
                  <Link href={piezaPath(e.pieza!)}>{e.texto}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Participa">
            <p className="foot-title">Participa</p>
            <ul>
              <li>
                <Link href="/contacto/#enlace">Pásanos algo que nos haga reír</Link>
              </li>
              <li>
                <Link href="/contacto/#marron">Cuéntanos tu marrón</Link>
              </li>
              <li>
                <Link href="/contacto/#contacto">Escríbenos</Link>
              </li>
              <li>
                <Link href="/como-trabajamos/">Quién hay detrás</Link>
              </li>
              <li>
                <a href={withBase("/feed.xml")}>Seguir por RSS</a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="legal-bar" aria-label="Información legal">
          <li>© {new Date().getFullYear()} Menú Marrón</li>
          <li>
            <Link href="/aviso-legal/">Aviso legal</Link>
          </li>
          <li>
            <Link href="/privacidad/">Política de privacidad</Link>
          </li>
          <li>
            <Link href="/cookies/">Política de cookies</Link>
          </li>
          <li>
            <Link href="/como-trabajamos/">Cómo trabajamos</Link>
          </li>
          {GA_ACTIVO && (
            <li>
              <AjustarCookies />
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
