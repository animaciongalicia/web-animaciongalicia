import type { MetadataRoute } from "next";
import { piezaPath, visibles } from "@/lib/piezas";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/cumpleanos/", "/regalos/", "/juegos/", "/contacto/", "/informacion-editorial/"];
  return [
    ...fixed.map((p) => ({ url: `${SITE.url}${p}` })),
    ...visibles()
      .filter((p) => !p.borrador)
      .map((p) => ({ url: `${SITE.url}${piezaPath(p)}`, lastModified: p.fecha })),
  ];
}
