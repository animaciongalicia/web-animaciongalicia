import { piezas, SECCIONES } from "@/content/piezas";
import type { Pieza, Seccion } from "@/content/types";
import { SITE } from "./site";

/** En producción (indexable) los borradores no existen. En preview se ven. */
export const visibles = (): Pieza[] =>
  piezas
    .filter((p) => !p.borrador || !SITE.indexable)
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

export const piezaPath = (p: Pick<Pieza, "seccion" | "slug">) => `/${p.seccion}/${p.slug}/`;
export const getPieza = (seccion: string, slug: string) =>
  visibles().find((p) => p.seccion === seccion && p.slug === slug);
export const bySlug = (slug: string) => visibles().find((p) => p.slug === slug);
export const bySeccion = (s: Seccion) => visibles().filter((p) => p.seccion === s);
export const galicia = () => visibles().filter((p) => p.galicia);
export const seccionLabel = (s: Seccion) => SECCIONES[s].label;

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
export function fechaLarga(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MESES[m - 1]} ${y}`;
}

function textos(p: Pieza): string[] {
  const out: string[] = [p.dek];
  for (const b of p.bloques) {
    if (b.t === "p" || b.t === "h2" || b.t === "cita") out.push(b.x);
    else if (b.t === "ul" || b.t === "ol") out.push(...b.x);
    else if (b.t === "caja") out.push(...(Array.isArray(b.x) ? b.x : [b.x]));
  }
  return out;
}
export const palabras = (p: Pieza) => textos(p).join(" ").split(/\s+/).filter(Boolean).length;
export const minutosLectura = (p: Pieza) => Math.max(1, Math.round(palabras(p) / 200));

/** Anterior y siguiente dentro de la misma sección (más nuevo primero). */
export function vecinas(p: Pieza) {
  const lista = bySeccion(p.seccion);
  const i = lista.findIndex((x) => x.slug === p.slug);
  return { siguiente: lista[i + 1], anterior: lista[i - 1] };
}
