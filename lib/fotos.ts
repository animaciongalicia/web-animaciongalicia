import { FOTOS, type Foto } from "@/content/fotos";
import { SITE } from "./site";

/** Solo las fotos con consentimiento. Los marcadores de ejemplo se ven en preview y desaparecen en producción. */
export const fotosVisibles = (): Foto[] =>
  FOTOS.filter((f) => f.consentimiento && (!f.ejemplo || !SITE.indexable)).sort((a, b) => b.fecha.localeCompare(a.fecha));
