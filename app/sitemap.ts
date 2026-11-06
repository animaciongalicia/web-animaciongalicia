import type { MetadataRoute } from "next";
import { articles, articlePath } from "@/content/articles";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/cumpleanos/", "/regalos/", "/juegos/", "/contacto/", "/informacion-editorial/"];
  return [
    ...fixed.map((p) => ({ url: `${SITE.url}${p}` })),
    ...articles.map((a) => ({ url: `${SITE.url}${articlePath(a)}` })),
  ];
}
