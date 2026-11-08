import type { MetadataRoute } from "next";
import { piezaPath, visibles } from "@/lib/piezas";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "/", "/cumpleanos/", "/eventos/", "/regalos/", "/juegos/", "/contacto/", "/como-trabajamos/", "/despedidas/",
    "/aviso-legal/", "/privacidad/", "/cookies/", "/como-trabajamos/",
  ];
  return [
    ...fixed.map((p) => ({ url: absoluteUrl(p) })),
    ...visibles()
      .filter((p) => !p.borrador)
      .map((p) => ({ url: absoluteUrl(piezaPath(p)), lastModified: p.fecha })),
  ];
}
