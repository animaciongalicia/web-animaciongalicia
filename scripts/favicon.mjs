// Genera el favicon y los iconos de la web en public/ (icon.svg, icon-48.png, icon-192.png, apple-icon.png, favicon.ico).
//
// Uso:
//   npm run favicon                       -> icono por defecto: una «M» crema sobre marrón oscuro
//   npm run favicon -- ruta/avatar.png    -> usa tu avatar (cuadrado, mínimo 512 px; se recorta al centro)
//
// Pensado para Google: icono cuadrado a pantalla completa (sin esquinas transparentes, porque Google lo recorta en
// círculo), lados múltiplo de 48 px (48, 96, 192) y /favicon.ico en la raíz.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const sharp = createRequire(import.meta.url)("sharp");
const OUT = "public";
const MARRON = "#5a3921"; // marrón oscuro, con carácter
const CREMA = "#f5f2ea";

const svgDefecto = (r = 0) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="${r}" fill="${MARRON}"/>
  <path fill="${CREMA}" d="M104 396V118h64l88 138 88-138h64v278h-58V226l-76 118h-36l-76-118v170z"/>
</svg>`;

const arg = process.argv[2];
let base; // Buffer PNG 512x512
if (arg) {
  if (!fs.existsSync(arg)) {
    console.error(`No existe ${arg}`);
    process.exit(1);
  }
  base = await sharp(arg).rotate().resize(512, 512, { fit: "cover", position: "centre" }).png().toBuffer();
  fs.writeFileSync(path.join(OUT, "icon.svg"), svgDefecto(96)); // el SVG sigue siendo el por defecto
} else {
  base = await sharp(Buffer.from(svgDefecto(0)), { density: 384 }).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(OUT, "icon.svg"), svgDefecto(96));
}

const png = (n) => sharp(base).resize(n, n).png({ compressionLevel: 9 }).toBuffer();
fs.writeFileSync(path.join(OUT, "icon-192.png"), await png(192));
fs.writeFileSync(path.join(OUT, "apple-icon.png"), await png(180));
fs.writeFileSync(path.join(OUT, "icon-48.png"), await png(48));

// favicon.ico con tres tamaños (16, 32 y 48) en PNG incrustado
const tamanos = [16, 32, 48];
const imgs = await Promise.all(tamanos.map((n) => png(n)));
const head = Buffer.alloc(6);
head.writeUInt16LE(0, 0);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(tamanos.length, 4);
let offset = 6 + 16 * tamanos.length;
const dir = Buffer.concat(
  imgs.map((b, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(tamanos[i], 0);
    e.writeUInt8(tamanos[i], 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(b.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += b.length;
    return e;
  }),
);
fs.writeFileSync(path.join(OUT, "favicon.ico"), Buffer.concat([head, dir, ...imgs]));
console.log("Listo en public/: icon.svg, icon-48.png, icon-192.png, apple-icon.png (180) y favicon.ico (16/32/48).");
