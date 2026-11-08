import { piezas, SECCIONES } from "@/content/piezas";
import type { Pieza, Seccion } from "@/content/types";
import { SITE } from "./site";

/** En producción (indexable) los borradores no existen. En preview se ven. */
export const visibles = (): Pieza[] =>
  piezas
    .filter((p) => !p.borrador || !SITE.indexable)
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

export const piezaPath = (p: Pick<Pieza, "seccion" | "slug" | "ruta">) => p.ruta ?? `/${p.seccion}/${p.slug}/`;

/** Posts con ruta propia en la raíz (URLs antiguas conservadas). */
export const conRuta = () => visibles().filter((p) => p.ruta);
export const getPorRaiz = (slugRaiz: string) => conRuta().find((p) => p.ruta === `/${slugRaiz}/`);
export const getPieza = (seccion: string, slug: string) =>
  visibles().find((p) => !p.ruta && p.seccion === seccion && p.slug === slug);
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

/** Identificador para anclas (sin acentos ni signos). */
export function slugify(t: string) {
  return t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Pares pregunta-respuesta de un post (subtítulo acabado en «?» + el texto que le sigue), para datos estructurados. */
export function faqDe(p: Pieza) {
  const out: { q: string; a: string }[] = [];
  for (let i = 0; i < p.bloques.length; i++) {
    const b = p.bloques[i];
    if (b.t !== "h2" || !b.x.trim().endsWith("?")) continue;
    const partes: string[] = [];
    for (let j = i + 1; j < p.bloques.length && p.bloques[j].t !== "h2"; j++) {
      const c = p.bloques[j];
      if (c.t === "p") partes.push(c.x);
      else if (c.t === "ul" || c.t === "ol") partes.push(c.x.join(" "));
      else if (c.t === "caja") partes.push(Array.isArray(c.x) ? c.x.join(" ") : c.x);
    }
    const a = partes.join(" ").trim();
    if (a) out.push({ q: b.x.trim(), a });
  }
  return out;
}

/** Preguntas (subtítulos acabados en «?») de los posts de «preguntas chorras», con su ancla. */
export function preguntas() {
  const out: { pregunta: string; ancla: string; pieza: Pieza }[] = [];
  for (const p of visibles()) {
    if (p.tag !== "Preguntas chorras") continue;
    for (const b of p.bloques) {
      if (b.t === "h2" && b.x.trim().endsWith("?")) out.push({ pregunta: b.x, ancla: slugify(b.x), pieza: p });
    }
  }
  return out;
}
