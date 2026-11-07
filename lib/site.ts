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

export function absoluteUrl(path: string) {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
