/** Subcarpeta donde vive la revista dentro del dominio (p. ej. "/revista"). Vacío = raíz. */
const rawBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();
export const BASE = rawBase && rawBase !== "/" ? `/${rawBase.replace(/^\/+|\/+$/g, "")}` : "";

export const SITE = {
  name: "Menú Marrón",
  signature: "Menú Marrón, un proyecto de Animación Galicia",
  tagline: "Coñas, ideas y consejos para despedidas en Galicia, cumpleaños, celebraciones y demás eventos. Menudo marrón organizarlos.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  indexable: process.env.SITE_INDEXABLE === "true",
  /**
   * Enlaces salientes. `grupo`: webs propias del grupo (activos; abren en pestaña nueva, sin nofollow).
   * `terceros`: cualquier otra web y vídeos incrustados (apagado hasta que el propietario lo indique).
   */
  salientes: { grupo: true, terceros: false },
} as const;

// Red de seguridad en Vercel: en producción, indexable y sin URL pública sería publicar canónicos a localhost.
if (process.env.VERCEL_ENV === "production" && SITE.indexable && SITE.url.includes("localhost")) {
  throw new Error("Falta NEXT_PUBLIC_SITE_URL en las variables de producción de Vercel (p. ej. https://animaciongalicia.com).");
}

export const NAV = [
  { label: "Despedidas", href: "/" },
  { label: "Cumpleaños", href: "/cumpleanos/" },
  { label: "Eventos", href: "/eventos/" },
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
