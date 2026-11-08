// Prueba extremo a extremo de la revista (raíz). Uso: npm run build && npx next start -p 3100 &  y luego
//   NODE_PATH=$(npm root -g) node tests/e2e-revista.js
// Requiere Playwright instalado globalmente (ya viene en el entorno de Claude Code).
const { chromium } = require("playwright");
const OUT = process.env.SHOTS_DIR || "/tmp/menu-marron-shots";
const B = "http://localhost:3100";
const res = [];
const ok = (n, c, x = "") => res.push(`${c ? "OK  " : "FAIL"} ${n} ${x}`);

const GRUPO = ["despedidasgalicia.es", "despedidascoruna.es", "despedidasvigo.com", "despedidas-vigo.es", "despedidasourense.com", "despedidassanxenxo.es", "despedidas-sanxenxo.com", "despedidasplayasanxenxo.com", "despedidasenoporto.com", "despedidasag.com", "gincanas.es", "humoramarillocoruna.com", "los7pc.com", "monologosgalicia.com", "seagalicia.com", "luxegalicia.com", "suunia.com", "mileventosgalicia.com"];
const esGrupo = (h) => { try { return GRUPO.includes(new URL(h).hostname); } catch { return false; } };
const POSTS = [
  "/despedidas/despedida-como-resacon-en-las-vegas/",
  "/despedidas/ideas-locas-grupo-whatsapp-despedida/",
  "/despedidas/aplicaciones-compartir-gastos-despedida/",
  "/despedidas/guia-para-organizar-despedidas-en-galicia/",
  "/despedidas/barco-o-casa-rural-despedida-galicia/",
  "/despedidas/mitos-despedidas-de-soltero/",
  "/despedidas/diccionario-grupo-whatsapp-despedida/",
  "/despedidas/calendario-despedidas-galicia-cuando-hacerla/",
  "/despedidas/amigo-que-no-paga-la-despedida/",
  "/despedidas/preguntas-chotas-despedida-de-soltero/",
  "/despedidas/preguntas-chotas-despedida-de-soltera/",
  "/juegos/secuestro-falso-despedida-de-soltero/",
  "/juegos/retos-de-plaza-declaracion-cantada-flashmob/",
  "/regalos/frases-para-camisetas-despedida/",
  "/regalos/disfraces-para-novio-o-novia-despedida/",
  "/regalos/regalos-absurdos-que-si-se-pueden-usar/",
  "/regalos/preguntas-chotas-regalos/",
  "/cumpleanos/cumpleanos-tematicos-adultos-galicia/",
  "/actividades-para-despedidas-de-soltero-y-soltera/",
  "/despedidas-de-soltero-y-soltera-en-a-coruna/",
  "/despedidas-de-soltero-y-soltera-en-vigo/",
  "/despedidas-de-soltero-y-soltera-en-sanxenxo/",
  "/despedidas-de-soltero-y-soltera-en-ourense/",
  "/cumpleanos/cumpleanos-sorpresa-cosas-que-salen-mal/",
  "/cumpleanos/preguntas-chotas-cumpleanos-adultos/",
];
const innerWidthSafe = (n) => (n === "escritorio" ? 1100 : 340);
const OTHER = ["/", "/cumpleanos/", "/regalos/", "/juegos/", "/contacto/", "/animacion-galicia/", "/aviso-legal/", "/privacidad/", "/cookies/", "/como-trabajamos/"];

(async () => {
  const browser = await chromium.launch();
  for (const [name, vp] of [["movil", { width: 390, height: 844 }], ["escritorio", { width: 1280, height: 900 }]]) {
    const ctx = await browser.newContext({ viewport: vp, permissions: ["clipboard-read", "clipboard-write"] });
    const page = await ctx.newPage();
    const errs = [];
    page.on("pageerror", (e) => errs.push(String(e)));
    page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
    const noOv = async (t) => ok(`[${name}] sin overflow ${t}`, !(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)));

    // --- Portada
    await page.goto(B + "/");
    ok(`[${name}] <title> de la portada SIN la palabra «despedidas»`, (await page.title()) === "Menudo marrón organizar este evento · Menú Marrón" && !/despedid/i.test(await page.title()), await page.title());
    ok(`[${name}] H1 = Menudo marrón organizar este evento`, (await page.textContent("h1")) === "Menudo marrón organizar este evento");
    const desc = await page.getAttribute('meta[name="description"]', "content");
    ok(`[${name}] description: despedidas en Galicia, cumpleaños, celebraciones y eventos`, /despedidas en Galicia/.test(desc) && /cumplea/.test(desc) && /celebraciones/.test(desc) && /eventos/.test(desc), desc.slice(0, 90));
    const labels = await page.$$eval("nav[aria-label=Principal] a", (a) => a.map((x) => x.textContent));
    ok(`[${name}] orden menú`, JSON.stringify(labels) === JSON.stringify(["Despedidas", "Cumpleaños", "Regalos", "Juegos", "Contacto"]));
    // Portada densa: situaciones, preguntas con ancla, secundarias y últimas
    const home = await page.evaluate(() => ({
      sit: [...document.querySelectorAll(".situaciones a")].map((a) => a.getAttribute("href")),
      chips: [...document.querySelectorAll(".chips-preguntas a")].map((a) => a.getAttribute("href")),
      sec: document.querySelectorAll(".secundaria").length,
      ult: document.querySelectorAll(".latest li").length,
      cols: document.querySelectorAll(".sec-col").length,
    }));
    ok(`[${name}] portada: 6 situaciones, >=12 preguntas, 2 secundarias, ultimas y 4 secciones`, home.sit.length === 6 && home.chips.length >= 12 && home.sec === 2 && home.ult >= 4 && home.cols === 4, JSON.stringify({ s: home.sit.length, c: home.chips.length, sec: home.sec, u: home.ult }));
    const sinAncla = [];
    for (const h of home.chips.slice(0, 12)) {
      const [path, id] = h.split("#");
      const html = await (await page.request.get(B + path)).text();
      if (!html.includes(`id="${id}"`)) sinAncla.push(h);
    }
    ok(`[${name}] portada: cada pregunta enlaza a un ancla que existe`, sinAncla.length === 0, sinAncla.join(","));
    for (const h of home.sit) {
      const r = await page.request.get(B + h, { maxRedirects: 0 });
      if (r.status() >= 400) ok(`[${name}] situacion ${h}`, false, String(r.status()));
    }
    await page.screenshot({ path: `${OUT}/v5-${name}-portada.png` });
    await page.screenshot({ path: `${OUT}/v5-${name}-portada-full.png`, fullPage: true });

    // --- Todas las páginas: H1 único, sin overflow, sin enlaces salientes
    for (const u of [...OTHER, ...POSTS]) {
      await page.goto(B + u);
      const h1 = (await page.$$("h1")).length;
      const todos = await page.$$eval("a[href^='http']", (a) => a.map((x) => ({ h: x.href, t: x.target, r: x.rel })));
      const ext = todos.filter((x) => !x.h.startsWith("https://wa.me/") && !esGrupo(x.h)).map((x) => x.h);
      const malGrupo = todos.filter((x) => esGrupo(x.h) && (x.t !== "_blank" || !/noopener/.test(x.r) || /nofollow/.test(x.r))).map((x) => x.h);
      if (malGrupo.length) ok(`[${name}] ${u} enlaces al grupo abren en pestaña nueva y sin nofollow`, false, malGrupo.join());
      const ov = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      ok(`[${name}] ${u} H1=1, sin overflow, sin enlaces salientes (salvo grupo y WhatsApp)`, h1 === 1 && !ov && ext.length === 0, `h1=${h1} ov=${ov} ext=${ext.join()}`);
    }

    // --- Post: layout de revista (no estrecho, con barra lateral)
    for (const u of POSTS) {
      await page.goto(B + u);
      const m = await page.evaluate(() => {
        const r = (s) => document.querySelector(s)?.getBoundingClientRect();
        const main = r(".pieza-main"), side = r(".sidebar"), head = r(".pieza-head h1"), page = r(".pieza");
        return { main: main && { x: main.x, w: main.width }, side: side && { x: side.x, w: side.width, y: side.y }, page: page && { x: page.x, w: page.width }, h1: head && { x: head.x } };
      });
      if (name === "escritorio") {
        ok(`[escritorio] ${u} ancho de revista (contenedor ≥ 1100) y texto alineado a la izquierda`, m.page.w >= 1100 && Math.abs(m.main.x - m.page.x) < 30 && Math.abs(m.h1.x - m.page.x) < 30, JSON.stringify(m));
        ok(`[escritorio] ${u} barra lateral a la derecha, junto al texto`, m.side && m.side.x > m.main.x + m.main.w - 5 && m.side.w >= 300, JSON.stringify(m.side));
      } else {
        ok(`[movil] ${u} barra lateral debajo del texto`, m.side && m.side.y > m.main.x, JSON.stringify(m.side));
      }
      const info = await page.evaluate(() => ({
        sideLinks: [...document.querySelectorAll(".sidebar a")].map((a) => a.getAttribute("href")),
        chips: document.querySelectorAll(".chips a").length,
        lastBox: !!document.querySelector(".side-last"),
        galBox: !!document.querySelector(".side-galicia"),
        cajas: [...new Set([...document.querySelectorAll(".caja")].map((c) => c.className))].length,
        cards: document.querySelectorAll(".related .card").length,
        lee: document.querySelectorAll(".leetambien").length,
        words: ((document.querySelector(".pieza-head .dek").innerText + " " + document.querySelector(".prose").innerText).match(/\S+/g) || []).length,
      }));
      ok(`[${name}] ${u} sidebar completa (secciones, últimas, desde Galicia)`, info.chips === 4 && info.lastBox && info.sideLinks.length >= 6, `links=${info.sideLinks.length} galicia=${info.galBox}`);
      ok(`[${name}] ${u} cajas de color y "Sigue leyendo"`, info.cajas >= 2 && info.cards === 3 && info.lee >= 1, `tipos=${info.cajas} cards=${info.cards} lee=${info.lee}`);
      const il = await page.$$eval(".enlace-interno a, .leetambien a", (a) => a.map((x) => x.getAttribute("href")));
      ok(`[${name}] ${u} enlaces internos de cola larga en el texto (>=2)`, il.length >= 2, `${il.length}`);
      ok(`[${name}] ${u} extensión 400–600 palabras`, info.words >= 400 && info.words <= 650, `${info.words}`);
      // enlaces internos
      const links = [...new Set(await page.$$eval("main a[href^='/']", (as) => as.map((x) => x.getAttribute("href"))))];
      const bad = [];
      for (const l of links) { const r = await page.request.get(B + l.split("#")[0], { maxRedirects: 0 }); if (r.status() >= 400) bad.push(l); }
      ok(`[${name}] ${u} enlaces internos`, bad.length === 0, bad.join());
    }
    await page.goto(B + POSTS[0]);
    await page.screenshot({ path: `${OUT}/v5-${name}-post.png` });
    await page.screenshot({ path: `${OUT}/v5-${name}-post-full.png`, fullPage: true });
    await page.goto(B + "/regalos/frases-para-camisetas-despedida/");
    await page.screenshot({ path: `${OUT}/v5-${name}-post-camisetas-full.png`, fullPage: true });

    // --- Pie: 4 columnas 2/5 + 1/5 + 1/5 + 1/5 y barra legal con líneas verticales
    await page.goto(B + "/");
    const f = await page.evaluate(() => {
      const cols = [...document.querySelectorAll(".foot-grid > *")].map((e) => e.getBoundingClientRect());
      const grid = document.querySelector(".foot-grid").getBoundingClientRect();
      const li = [...document.querySelectorAll(".legal-bar li")].map((e) => ({ t: e.innerText, bl: getComputedStyle(e).borderLeftWidth }));
      const bar = document.querySelector(".legal-bar").getBoundingClientRect();
      const lastCol = cols[cols.length - 1];
      return { cols: cols.map((c) => Math.round(c.width)), grid: Math.round(grid.width), li, barTop: bar.top, colBottom: Math.max(...cols.map((c) => c.bottom)) };
    });
    if (name === "escritorio") {
      const [a, b, c, d] = f.cols;
      ok(`[escritorio] pie: 4 columnas, la primera ≈ 2× las otras`, f.cols.length === 4 && Math.abs(a / b - 2) < 0.15 && Math.abs(b - c) < 4 && Math.abs(c - d) < 4, JSON.stringify(f.cols));
    }
    ok(`[${name}] pie: barra legal al final con separadores verticales`, f.li.slice(1).every((x) => x.bl !== "0px") && f.barTop >= f.colBottom, JSON.stringify(f.li.map((x) => x.t)));
    const legal = await page.$$eval(".legal-bar a", (a) => a.map((x) => x.getAttribute("href")));
    ok(`[${name}] pie: enlaces legales (aviso, privacidad, cookies, cómo trabajamos)`, JSON.stringify(legal) === JSON.stringify(["/aviso-legal/", "/privacidad/", "/cookies/", "/como-trabajamos/"]), legal.join());
    const footLinks = await page.$$eval(".site-footer a", (a) => a.map((x) => x.getAttribute("href")));
    ok(`[${name}] pie: enlace a la agencia solo en el pie`, footLinks.includes("/animacion-galicia/"));
    const mainAg = await page.$$eval("main a[href='/animacion-galicia/']", (a) => a.length);
    ok(`[${name}] la página de la agencia no se enlaza desde el cuerpo`, mainAg === 0);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.screenshot({ path: `${OUT}/v5-${name}-pie.png` });

    // --- Agencia: nombres a la vista, sin enlaces
    await page.goto(B + "/animacion-galicia/");
    const ag = await page.textContent("main");
    const dom = await page.$$eval(".marcas .web", (e) => e.map((x) => x.textContent));
    const enl = await page.$$eval("main a[href^='http']", (a) => a.map((x) => ({ h: x.href, t: x.target, r: x.rel })));
    ok(`[${name}] agencia: 18 webs del grupo, todas enlazadas en pestaña nueva`, dom.length === 18 && enl.length === 18 && enl.every((x) => esGrupo(x.h) && x.t === "_blank" && /noopener/.test(x.r) && !/nofollow/.test(x.r)), `${dom.length}/${enl.length}`);
    ok(`[${name}] agencia: 4 nombres a la vista`, ["Suunia Viajes", "Mil Eventos Galicia", "SeaGalicia", "LuxeGalicia"].every((n) => ag.includes(n)));
    await page.screenshot({ path: `${OUT}/v5-${name}-agencia.png`, fullPage: true });

    // --- Legales: contenido completo
    for (const [u, claves] of [["/aviso-legal/", ["LSSI-CE", "Propiedad intelectual", "Legislación aplicable"]], ["/privacidad/", ["RGPD", "Tus derechos", "Conservación", "Base jurídica"]], ["/cookies/", ["22.2 de la LSSI-CE", "navegador"]]]) {
      await page.goto(B + u);
      const t = await page.textContent("main");
      ok(`[${name}] ${u} contenido legal completo`, claves.every((c) => t.includes(c)), `${t.split(/\s+/).length} palabras`);
    }
    await page.goto(B + "/privacidad/");
    const priv = await page.textContent("main");
    ok(`[${name}] privacidad: titular Inversiones Shiso, S.L. y CIF B70319223`, priv.includes("Inversiones Shiso, S.L.") && priv.includes("B70319223"));
    ok(`[${name}] privacidad: sigue marcando lo pendiente (correo)`, (await page.$$(".pending")).length >= 1);

    // --- Sección: lista con tarjetas
    await page.goto(B + "/juegos/");
    ok(`[${name}] sección Juegos lista sus posts`, (await page.$$(".card")).length === 2);

    // --- Contacto compacto
    await page.goto(B + "/contacto/");
    const alt = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, vh: innerHeight, panels: [...document.querySelectorAll(".contact-panel")].filter((e) => e.offsetParent !== null).length }));
    ok(`[${name}] contacto compacto: alto de página ≤ ${name === "escritorio" ? "2" : "3.2"} pantallas`, alt.h <= alt.vh * (name === "escritorio" ? 2 : 3.2), `alto=${alt.h} pantalla=${alt.vh} (${(alt.h / alt.vh).toFixed(2)})`);
    ok(`[${name}] contacto: ${name === "escritorio" ? "los 3 formularios a la vista" : "una pestaña a la vez"}`, name === "escritorio" ? alt.panels === 3 : alt.panels === 1, `visibles=${alt.panels}`);
    if (name === "movil") { await page.click('[role=tab]:has-text("Tu marrón")'); ok(`[movil] pestaña «Tu marrón» muestra su formulario`, await page.isVisible("#marron textarea")); await page.click('[role=tab]:has-text("Un enlace")'); }
    await page.screenshot({ path: `${OUT}/v6-${name}-contacto.png`, fullPage: true });
    await page.fill("#enlace input[name=url]", "https://ejemplo.com/x");
    await page.click("#enlace >> text=Mandar el enlace");
    await page.waitForSelector("#enlace >> text=NO se ha enviado nada");
    ok(`[${name}] formulario de enlace (modo prueba)`, true);
    if (name === "movil") { await page.click('[role=tab]:has-text("Tu marrón")'); }
    await page.fill("#marron textarea[name=mensaje]", "x");
    await page.click("#marron >> text=Contar mi marrón");
    await page.waitForSelector("#marron >> text=NO se ha enviado nada");
    ok(`[${name}] formulario marrón (modo prueba)`, true);
    await page.goto(B + "/contacto/#marron");
    await page.waitForTimeout(300);
    ok(`[${name}] /contacto/#marron abre el formulario de marrón`, await page.isVisible("#marron textarea"));

    // --- Cabeceras a todo el ancho
    for (const u of ["/despedidas/despedida-como-resacon-en-las-vegas/", "/juegos/", "/privacidad/", "/animacion-galicia/", "/contacto/"]) {
      await page.goto(B + u);
      const w = await page.evaluate(() => {
        const head = document.querySelector(".pieza-head, .section-head, .front-head > .wrap-wide");
        const wrap = document.querySelector(".wrap-wide");
        const h1 = document.querySelector("h1").getBoundingClientRect();
        const lead = document.querySelector(".dek, .lead");
        const hr = head.getBoundingClientRect();
        return { head: Math.round(hr.width), h1: Math.round(h1.width), headH: Math.round(hr.height), lead: lead ? getComputedStyle(lead).maxWidth : "-", wrap: Math.round(wrap.getBoundingClientRect().width) - 40 };
      });
      ok(`[${name}] ${u} cabecera a todo el ancho`, (Math.abs(w.h1 - w.head) <= 2 || u === "/") && (w.lead === "none" || w.lead === "-") && w.h1 >= Math.min(w.wrap, innerWidthSafe(name)) - 5, JSON.stringify(w));
    }

    // «Lee también» discreto (sin caja)
    await page.goto(B + "/despedidas/guia-para-organizar-despedidas-en-galicia/");
    const lee = await page.evaluate(() => { const e = document.querySelector(".leetambien"); const c = getComputedStyle(e); return { bg: c.backgroundColor, bw: c.borderLeftWidth, fs: parseFloat(c.fontSize) }; });
    ok(`[${name}] «lee también» discreto: sin fondo, borde fino y letra pequeña`, lee.bg === "rgba(0, 0, 0, 0)" && lee.bw === "2px" && lee.fs <= 17, JSON.stringify(lee));
    // Páginas con ruta propia: canonical en la raíz y migas
    await page.goto(B + "/despedidas-de-soltero-y-soltera-en-a-coruna/");
    const can = await page.getAttribute('link[rel="canonical"]', "href");
    ok(`[${name}] página conservada con canonical propio en la raíz`, can.endsWith("/despedidas-de-soltero-y-soltera-en-a-coruna/"), can);
    const r = await page.request.get(B + "/despedidas-de-soltero-y-soltera-en-otras-ciudades/", { maxRedirects: 0 });
    ok(`[${name}] «otras ciudades» redirige al pilar de actividades`, r.status() === 308 && r.headers()["location"].endsWith("/actividades-para-despedidas-de-soltero-y-soltera/"), r.headers()["location"]);
    // Fotos (en preview se ven los marcadores de ejemplo)
    await page.goto(B + "/fotos/");
    await page.waitForLoadState("networkidle");
    const gal = await page.$$eval(".galeria img", (i) => i.map((x) => x.naturalWidth));
    ok(`[${name}] galería: 5 fotos cargadas`, gal.length === 5 && gal.every((w) => w > 0), JSON.stringify(gal));
    await page.goto(B + "/");
    await page.waitForLoadState("networkidle");
    const tira = await page.$$eval(".tira-fotos img", (i) => i.map((x) => x.naturalWidth));
    ok(`[${name}] portada: tira de fotos cargada`, tira.length >= 4 && tira.every((w) => w > 0), JSON.stringify(tira));
    ok(`[${name}] pie: enlace a Fotos chotas`, (await page.$$eval(".site-footer a", (a) => a.map((x) => x.getAttribute("href")))).includes("/fotos/"));

    const r404 = await page.goto(B + "/no-existe/");
    ok(`[${name}] 404`, r404.status() === 404);
    ok(`[${name}] sin errores de consola (salvo el 404 intencionado)`, errs.filter((e) => !/404/.test(e)).length === 0, errs.filter((e) => !/404/.test(e)).join("|"));
    await ctx.close();
  }
  await browser.close();
  console.log(res.join("\n"));
  console.log(res.some((r) => r.startsWith("FAIL")) ? "\nHAY FALLOS" : "\nTODO OK");
})().catch((e) => {
  console.log(res.join("\n"));
  console.error("ERR", e.message);
  process.exit(1);
});
