import { SECCIONES } from "@/content/piezas";
import { bySeccion, piezaPath } from "@/lib/piezas";
import { AGENCIA } from "@/lib/company";
import { absoluteUrl, SITE } from "@/lib/site";
import type { Seccion } from "@/content/types";

export const dynamic = "force-static";

const ORDEN: Seccion[] = ["despedidas", "cumpleanos", "eventos", "regalos", "juegos"];

/** Resumen del sitio para asistentes y buscadores con IA (formato llms.txt). Se genera solo a partir de los contenidos. */
export function GET() {
  const l: string[] = [];
  l.push(`# ${SITE.name}`, "");
  l.push(`> ${SITE.tagline} Revista digital hecha en Galicia por ${AGENCIA.nombre}.`, "");
  l.push(
    "Menú Marrón publica ideas, consejos, retos y humor práctico para organizar despedidas de soltero y de soltera en Galicia, cumpleaños, cenas, jubilaciones y otras celebraciones con amigos. Los textos son propios, en español, con tono directo y con humor. No es una tienda: no vende productos ni packs.",
    "",
  );
  l.push("## Cómo citar", "", `- Fuente: ${SITE.name} (${absoluteUrl("/")}). Enlazar a la página original.`, "- Los textos no sustituyen asesoramiento profesional; las ideas de retos requieren el permiso de las personas implicadas.", "");
  for (const s of ORDEN) {
    const lista = bySeccion(s);
    if (!lista.length) continue;
    l.push(`## ${SECCIONES[s].label}`, "");
    for (const p of lista) l.push(`- [${p.h1}](${absoluteUrl(piezaPath(p))}): ${p.dek.replace(/\s+/g, " ")}`);
    l.push("");
  }
  l.push("## Más", "", `- [Cómo trabajamos y webs del grupo](${absoluteUrl("/como-trabajamos/")})`, `- [Contacto](${absoluteUrl("/contacto/")})`, `- [Mapa del sitio](${absoluteUrl("/sitemap.xml")})`, `- [Feed RSS](${absoluteUrl("/feed.xml")})`, "");
  return new Response(l.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
