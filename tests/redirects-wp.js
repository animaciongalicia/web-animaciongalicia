// Comprueba TODAS las redirecciones del WordPress antiguo (content/redirects.ts): un solo salto, 301/308 y destino 200.
// Uso: con el servidor de producción en :3100 -> node tests/redirects-wp.js
const fs = require("fs");
const B = process.env.BASE || "http://localhost:3100";
const src = fs.readFileSync("content/redirects.ts", "utf8");
const pares = [...src.matchAll(/\{ source: "([^"]+)", destination: (GUIA|"[^"]+") \}/g)].map((m) => ({
  s: m[1],
  d: m[2] === "GUIA" ? "/despedidas/guia-para-organizar-despedidas-en-galicia/" : m[2].replace(/"/g, ""),
}));
const res = [];
const ok = (n, c, x = "") => res.push(`${c ? "OK  " : "FAIL"} ${n} ${x}`);
(async () => {
  for (const { s, d } of pares) {
    const variantes = s.endsWith(".xml") ? [s] : [s, s + "/"];
    for (const v of variantes) {
      const r = await fetch(B + v, { redirect: "manual" });
      const loc = (r.headers.get("location") || "").replace(/^https?:\/\/[^/]+/, "");
      // Con barra final (como en WordPress): un solo salto. Sin barra: primero se añade la barra y luego se redirige (dos saltos, aceptable).
      const sinBarra = !v.endsWith("/") && !v.endsWith(".xml");
      ok(`${v} -> ${d} (${sinBarra ? "añade barra y redirige" : "un salto, permanente"})`, [301, 308].includes(r.status) && (sinBarra ? loc === v + "/" : loc === d), `${r.status} ${loc}`);
    }
    const fin = await fetch(B + d, { redirect: "manual" });
    ok(`destino ${d} responde 200`, fin.status === 200, String(fin.status));
  }
  console.log(res.join("\n"));
  const mal = res.filter((l) => l.startsWith("FAIL"));
  console.log(mal.length ? `\n${mal.length} FALLOS de ${res.length}` : `\nTODO OK (${res.length} comprobaciones, ${pares.length} redirecciones)`);
  process.exit(mal.length ? 1 : 0);
})();
