export const SITE = {
  name: "Menú Marrón",
  signature: "Menú Marrón, un proyecto de Animación Galicia",
  tagline: "Tonterías útiles, juegos absurdos y mensajes listos para sobrevivir al marrón de organizar algo",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  indexable: process.env.SITE_INDEXABLE === "true",
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
