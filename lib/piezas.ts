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
