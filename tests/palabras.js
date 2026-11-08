// Cuenta las palabras de cada post (objetivo 400-600). Uso: con el servidor en :3100, NODE_PATH=$(npm root -g) node tests/palabras.js
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
  const sm = await (await p.request.get("http://localhost:3100/sitemap.xml")).text();
  const urls = [...sm.matchAll(/<loc>[^<]*?(\/(?:despedidas|cumpleanos|regalos|juegos)\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  const out = [];
  for (const u of urls) { await p.goto("http://localhost:3100" + u); out.push([await p.evaluate(() => ((document.querySelector(".pieza-head .dek").innerText + " " + document.querySelector(".prose").innerText).match(/\S+/g) || []).length), u]); }
  out.sort((a, b) => a[0] - b[0]); console.log(out.map((o) => o.join("  ")).join("\n")); await b.close();
})();
