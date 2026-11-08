// PUERTA DEL CORTE: las URLs del WordPress con demanda deben existir (HTTP 200) en la nueva web ANTES de cambiar el DNS.
// Datos: docs/analisis-search-console.md (concentran el 76 % de las impresiones de las páginas).
// Uso (con el servidor en marcha):  BASE=http://localhost:3100 node tests/urls-conservadas.js
// Sale con código 1 mientras falte alguna.
const BASE = process.env.BASE || "http://localhost:3100";
const URLS = [
  "/despedidas-de-soltero-y-soltera-en-a-coruna/",
  "/despedidas-de-soltero-y-soltera-en-sanxenxo/",
  "/despedidas-de-soltero-y-soltera-en-ourense/",
  "/despedidas-de-soltero-y-soltera-en-vigo/",
  "/actividades-para-despedidas-de-soltero-y-soltera/",
];

(async () => {
  let faltan = 0;
  for (const u of URLS) {
    const r = await fetch(BASE + u, { redirect: "manual" });
    const ok = r.status === 200;
    if (!ok) faltan++;
    console.log(`${ok ? "OK  " : "FALTA"} ${u} -> ${r.status}`);
  }
  console.log(faltan ? `\nCORTE BLOQUEADO: faltan ${faltan} de ${URLS.length} URLs con demanda.` : "\nTodas las URLs con demanda existen.");
  process.exit(faltan ? 1 : 0);
})();
