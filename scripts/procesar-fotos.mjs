// Procesa EN BLOQUE las fotos de la carpeta fotos-para-subir/: las reduce, les quita los metadatos
// (ubicación incluida), las registra en content/fotos.ts y borra los originales de la carpeta.
//
// Uso:  npm run fotos -- --consentimiento
//   --conservar   no borra los originales
//
// Leyendas opcionales en fotos-para-subir/leyendas.txt, una por línea:
//   archivo.jpg | descripción (alt) | pie de foto | etiqueta | crédito
import fs from "node:fs";
import path from "node:path";
import { procesarFoto, ETIQUETAS } from "./lib-fotos.mjs";

const DIR = "fotos-para-subir";
const args = process.argv.slice(2);

if (!args.includes("--consentimiento")) {
  console.error(
    "Falta --consentimiento. Al ejecutarlo confirmas que todas las fotos de la carpeta son tuyas o tienes permiso expreso de las\n" +
      "personas que salen, y que no hay menores. Uso: npm run fotos -- --consentimiento",
  );
  process.exit(1);
}
if (!fs.existsSync(DIR)) {
  console.error(`No existe la carpeta ${DIR}/`);
  process.exit(1);
}

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const archivos = fs.readdirSync(DIR).filter((f) => EXT.has(path.extname(f).toLowerCase()));
if (archivos.length === 0) {
  console.log(`No hay fotos en ${DIR}/. Sube .jpg, .png o .webp (los .heic de iPhone, conviértelos antes a .jpg).`);
  process.exit(0);
}

// leyendas.txt
const leyendas = new Map();
const lp = path.join(DIR, "leyendas.txt");
if (fs.existsSync(lp)) {
  for (const linea of fs.readFileSync(lp, "utf8").split(/\r?\n/)) {
    const t = linea.trim();
    if (!t || t.startsWith("#")) continue;
    const [archivo, alt, pie, etiqueta, credito] = t.split("|").map((x) => x?.trim());
    if (archivo) leyendas.set(archivo.toLowerCase(), { alt, pie, etiqueta, credito });
  }
}

const hechas = [];
const sinLeyenda = [];
const errores = [];
for (const f of archivos) {
  const ley = leyendas.get(f.toLowerCase()) ?? {};
  const base = path.basename(f, path.extname(f));
  const altDerivado = base.replace(/[-_]+/g, " ").trim();
  const alt = ley.alt || altDerivado.charAt(0).toUpperCase() + altDerivado.slice(1);
  if (!ley.alt) sinLeyenda.push(f);
  const etiqueta = ley.etiqueta && ETIQUETAS.includes(ley.etiqueta) ? ley.etiqueta : "Eventos";
  try {
    const r = await procesarFoto({ file: path.join(DIR, f), alt, pie: ley.pie, etiqueta, credito: ley.credito, nombre: base });
    hechas.push(`${f} -> ${r.out} (${r.ancho}x${r.alto}, ${r.kb} KB)`);
    if (!args.includes("--conservar")) fs.unlinkSync(path.join(DIR, f));
  } catch (e) {
    errores.push(`${f}: ${e.message}`);
  }
}

console.log(`\nProcesadas ${hechas.length} de ${archivos.length}:`);
for (const h of hechas) console.log("  OK  " + h);
if (sinLeyenda.length) {
  console.log(`\nSin leyenda en leyendas.txt (se usó el nombre del archivo como descripción; conviene revisarla en content/fotos.ts):`);
  for (const f of sinLeyenda) console.log("  - " + f);
}
if (errores.length) {
  console.log("\nErrores:");
  for (const e of errores) console.log("  ! " + e);
  process.exit(1);
}
