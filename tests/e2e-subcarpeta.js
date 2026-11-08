// Prueba del modo subcarpeta. Uso:
//   NEXT_PUBLIC_BASE_PATH=/revista NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com SITE_INDEXABLE=true npm run build
//   (mismas variables) npx next start -p 3102 &  y luego  NODE_PATH=$(npm root -g) node tests/e2e-subcarpeta.js
const { chromium } = require("playwright");
const B = "http://localhost:3102";
const res = [];
const ok = (n, c, x = "") => res.push(`${c ? "OK  " : "FAIL"} ${n} ${x}`);
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, permissions: ["clipboard-read", "clipboard-write"] });
  const page = await ctx.newPage();
  const errs = [];
  page.on("pageerror", (e) => errs.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  const failed = [];
  page.on("response", (r) => { if (r.status() >= 400 && !/no-existe/.test(r.url())) failed.push(r.status() + " " + r.url()); });

  await page.goto(B + "/revista/");
  const fonts = await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter((f) => f.status === "loaded").map((f) => f.family); });
  ok("tipografías cargan bajo /revista", fonts.some((f) => /Newsreader/.test(f)) && fonts.some((f) => /Inter/.test(f)));

  // Rastreo de todos los enlaces internos de varias páginas
  const pages = ["/revista/", "/revista/regalos/", "/revista/juegos/", "/revista/cumpleanos/", "/revista/contacto/", "/revista/despedidas/despedida-como-resacon-en-las-vegas/", "/revista/animacion-galicia/", "/revista/privacidad/"];
  const all = new Set();
  for (const u of pages) {
    await page.goto(B + u);
    for (const h of await page.$$eval("a[href]", (a) => a.map((x) => x.getAttribute("href")))) if (h.startsWith("/")) all.add(h.split("#")[0]);
  }
  const noBase = [...all].filter((h) => !h.startsWith("/revista"));
  ok("todos los enlaces internos llevan /revista", noBase.length === 0, noBase.join());
  const bad = [];
  for (const h of all) { const r = await page.request.get(B + h, { maxRedirects: 0 }); if (r.status() >= 400) bad.push(h + " " + r.status()); }
  ok(`${all.size} enlaces internos distintos resuelven`, bad.length === 0, bad.join());

  // Menú: activo y navegación
  await page.goto(B + "/revista/");
  await page.click('nav[aria-label=Principal] a:text-is("Regalos")');
  await page.waitForURL(B + "/revista/regalos/");
  ok("menú navega dentro de /revista", true);
  ok("menú marca la sección activa", (await page.getAttribute('nav[aria-label=Principal] a[aria-current="page"]', "href")) === "/revista/regalos/");

  // Compartir con subcarpeta
  await page.goto(B + "/revista/despedidas/despedida-como-resacon-en-las-vegas/");
  await page.click("text=Copiar enlace");
  const clip = await page.evaluate(() => navigator.clipboard.readText());
  ok("copiar enlace incluye /revista", clip.includes("/revista/despedidas/despedida-como-resacon-en-las-vegas/"), clip.slice(-70));
  const wa = decodeURIComponent(await page.getAttribute("a.btn-wa", "href"));
  ok("WhatsApp incluye /revista", wa.includes("/revista/despedidas/"));

  // Formulario: POST a /revista/api/contacto/
  await page.goto(B + "/revista/contacto/");
  await page.fill("#enlace input[name=url]", "https://ejemplo.com/x");
  await page.click("#enlace >> text=Mandar el enlace");
  await page.waitForSelector("#enlace >> text=NO se ha enviado nada");
  ok("formulario funciona bajo /revista", true);

  // Redirección sin cadena
  const r1 = await page.request.get(B + "/revista/despedidas/", { maxRedirects: 0 });
  ok("/revista/despedidas/ → /revista/ en un solo salto", r1.status() === 308 && r1.headers()["location"].endsWith("/revista/"), r1.headers()["location"]);

  // Aislamiento: la raíz y rutas fuera de /revista no existen aquí (las sirve WordPress)
  const root = await page.request.get(B + "/", { maxRedirects: 0 });
  ok("la raíz NO es de la revista (la sigue sirviendo WordPress)", root.status() === 404);

  ok("sin recursos 4xx/5xx", failed.length === 0, failed.slice(0, 3).join(" | "));
  ok("sin errores de consola", errs.length === 0, errs.slice(0, 2).join(" | "));
  await browser.close();
  console.log(res.join("\n"));
  console.log(res.some((r) => r.startsWith("FAIL")) ? "\nHAY FALLOS" : "\nTODO OK");
})().catch((e) => { console.log(res.join("\n")); console.error("ERR", e.message); process.exit(1); });
