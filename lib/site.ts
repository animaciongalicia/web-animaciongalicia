/** Subcarpeta donde vive la revista dentro del dominio (p. ej. "/revista"). Vacío = raíz. */
const rawBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();
export const BASE = rawBase && rawBase !== "/" ? `/${rawBase.replace(/^\/+|\/+$/g, "")}` : "";

export const SITE = {
  name: "Menú Marrón",
  signature: "Menú Marrón, un proyecto de Animación Galicia",
  tagline: "Menudo marrón organizar este evento: ideas, retos y locuras para despedidas de soltero y soltera, cumpleaños y regalos en Galicia.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  indexable: process.env.SITE_INDEXABLE === "true",
  /** Enlaces salientes y vídeos incrustados. Apagados hasta que se indique. */
  salientes: false,
} as const;

export const NAV = [
  { label: "Despedidas", href: "/" },
  { label: "Cumpleaños", href: "/cumpleanos/" },
  { label: "Regalos", href: "/regalos/" },
  { label: "Juegos", href: "/juegos/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

/** Añade la subcarpeta a una ruta interna (para fetch, compartir, etc.). */
export function withBase(path: string) {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteUrl(path: string) {
  return `${SITE.url}${withBase(path)}`;
}
