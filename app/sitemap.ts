import type { MetadataRoute } from "next";
import { piezaPath, visibles } from "@/lib/piezas";
import { absoluteUrl } from "@/lib/site";
import { fotosVisibles } from "@/lib/fotos";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "/", "/cumpleanos/", "/regalos/", "/juegos/", "/contacto/", "/animacion-galicia/",
    "/aviso-legal/", "/privacidad/", "/cookies/", "/como-trabajamos/",
  ];
  return [
    ...fixed.map((p) => ({ url: absoluteUrl(p) })),
    ...(fotosVisibles().length ? [{ url: absoluteUrl("/fotos/") }] : []),
    ...visibles()
      .filter((p) => !p.borrador)
      .map((p) => ({ url: absoluteUrl(piezaPath(p)), lastModified: p.fecha })),
  ];
}
