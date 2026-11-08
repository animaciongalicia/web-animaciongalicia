// Añade UNA foto a la galería.
// Uso: npm run foto -- ruta/foto.jpg --alt "Descripción" --pie "Pie" --etiqueta Despedidas --credito "Nombre" --consentimiento
import fs from "node:fs";
import { procesarFoto, ETIQUETAS } from "./lib-fotos.mjs";

const args = process.argv.slice(2);
const opt = (n) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const file = args.find((a, i) => !a.startsWith("--") && !(args[i - 1] ?? "").startsWith("--"));

if (!file || !fs.existsSync(file)) {
  console.error('Falta la foto o no existe. Uso: npm run foto -- ruta/foto.jpg --alt "..." --pie "..." --etiqueta Despedidas --consentimiento');
  process.exit(1);
}
if (!args.includes("--consentimiento")) {
  console.error("Falta --consentimiento. Solo se publican fotos propias o con permiso expreso de quienes salen (sin menores).");
  process.exit(1);
}
if (!opt("alt")) {
  console.error("Falta --alt (descripción de la foto, necesaria para accesibilidad y SEO).");
  process.exit(1);
}
try {
  const r = await procesarFoto({ file, alt: opt("alt"), pie: opt("pie"), etiqueta: opt("etiqueta"), credito: opt("credito"), nombre: opt("nombre") });
  console.log(`Hecho: ${r.out} (${r.ancho}x${r.alto}, ${r.kb} KB, sin metadatos) y registrada en content/fotos.ts.`);
} catch (e) {
  console.error(e.message + (e.message.includes("etiqueta") ? "" : ""));
  process.exit(1);
}
void ETIQUETAS;
