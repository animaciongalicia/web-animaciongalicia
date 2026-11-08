// Utilidades compartidas para añadir fotos a la galería (content/fotos.ts + public/fotos).
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

export const ETIQUETAS = ["Despedidas", "Cumpleaños", "Regalos", "Juegos", "Eventos"];

export const slugify = (t) =>
  t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

const esc = (t) => t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

/**
 * Reduce la foto a 1600 px, le quita todos los metadatos (ubicación GPS incluida) y la registra en content/fotos.ts.
 * `rotate()` aplica la orientación EXIF antes de borrarla; sharp descarta el resto de metadatos por defecto.
 */
export async function procesarFoto({ file, alt, pie, etiqueta = "Eventos", credito, nombre }) {
  if (!ETIQUETAS.includes(etiqueta)) throw new Error(`La etiqueta debe ser una de: ${ETIQUETAS.join(", ")}`);
  const slug = slugify(nombre ?? alt);
  if (!slug) throw new Error("No se puede generar un nombre de archivo (falta alt o nombre).");
  const out = path.join("public", "fotos", `${slug}.jpg`);
  if (fs.existsSync(out)) throw new Error(`Ya existe ${out}`);

  const info = await sharp(file).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);

  const fecha = new Date().toISOString().slice(0, 10);
  const entrada =
    `  { src: "/fotos/${slug}.jpg", ancho: ${info.width}, alto: ${info.height}, alt: "${esc(alt)}"` +
    (pie ? `, pie: "${esc(pie)}"` : "") +
    (credito ? `, credito: "${esc(credito)}"` : "") +
    `, etiqueta: "${etiqueta}", fecha: "${fecha}", consentimiento: true },\n`;

  const dest = "content/fotos.ts";
  const src = fs.readFileSync(dest, "utf8");
  if (!src.includes("  // FOTOS_FIN")) throw new Error("No encuentro el marcador // FOTOS_FIN en content/fotos.ts");
  fs.writeFileSync(dest, src.replace("  // FOTOS_FIN", entrada + "  // FOTOS_FIN"));
  return { out, ancho: info.width, alto: info.height, kb: Math.round(info.size / 1024) };
}
