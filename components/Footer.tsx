import { AjustarCookies } from "./Cookies";
import { GA_ACTIVO } from "@/lib/analytics";
import Link from "next/link";
import { SECCIONES } from "@/content/piezas";
import type { Seccion } from "@/content/types";
import { PIE_DIVERTIDO } from "@/content/galicia";
import { bySlug, piezaPath } from "@/lib/piezas";
import { fotosVisibles } from "@/lib/fotos";
import { SITE } from "@/lib/site";

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "regalos", "juegos"];

export function Footer() {
  const hayFotos = fotosVisibles().length > 0;
  const divertido = PIE_DIVERTIDO.map((d) => ({ ...d, pieza: bySlug(d.slug) })).filter((d) => d.pieza);
  return (
    <footer className="site-footer">
      <div className="wrap-wide">
        <div className="foot-grid">
          <div className="foot-brand">
            <p className="foot-logo">
              Menú <em>Marrón</em>
            </p>
            <p className="small">
              Menudo marrón organizar este evento. Ideas, retos y locuras para despedidas de soltero y de soltera,
              cumpleaños y regalos. Hecha en Galicia, con humor y sin humo.
            </p>
            <p className="small">
              {SITE.signature.replace("Animación Galicia", "")}
              <Link href="/animacion-galicia/">Animación Galicia</Link>
            </p>
          </div>

          <nav aria-label="Secciones">
            <p className="foot-title">Secciones</p>
            <ul>
              {ORDEN.map((s) => (
                <li key={s}>
                  <Link href={SECCIONES[s].path}>{SECCIONES[s].label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Lo último">
            <p className="foot-title">Para pasar el rato</p>
            <ul>
              {divertido.map((d) => (
                <li key={d.slug}>
                  <Link href={piezaPath(d.pieza!)}>{d.texto}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Participa">
            <p className="foot-title">Participa</p>
            <ul>
              {hayFotos && (
                <li>
                  <Link href="/fotos/">Mira las fotos chorras</Link>
                </li>
              )}
              <li>
                <Link href="/contacto/#enlace">Pásanos algo que nos haga reír</Link>
              </li>
              <li>
                <Link href="/contacto/#marron">Cuéntanos tu marrón</Link>
              </li>
              <li>
                <Link href="/como-trabajamos/">Quién hay detrás</Link>
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
