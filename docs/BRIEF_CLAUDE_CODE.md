# Brief para Claude Code · Menú Marrón / animaciongalicia.com

> Documento autosuficiente. Léelo entero antes de tocar nada. Resume todo lo decidido con el propietario,
> el estado real del repositorio y el trabajo pendiente, en orden de prioridad.

## 0. Encargo en una frase

Sustituir la web WordPress de **animaciongalicia.com** (15 años de antigüedad; el informe de Search Console muestra 99 páginas
de 40 sitios que la enlazan) por
**Menú Marrón**: una revista digital hecha en Galicia sobre organizar despedidas, cumpleaños y regalos, con humor
práctico. Se desarrolla con **Claude Code → GitHub → Vercel**, conservando la autoridad del dominio mediante una
migración cuidadosa (datos, redirecciones 301 y QA), y debe **posicionar en Galicia** y **atraer todo tipo de
búsquedas absurdas y de cola larga**.

**Lema/H1 de la portada:** «Menudo marrón organizar este evento».
**Firma:** «Menú Marrón, un proyecto de Animación Galicia».

## 1. Contexto de negocio

- **Titular legal:** Inversiones Shiso, S.L. · CIF **B70319223** · **15002 A Coruña** (calle y número: pendientes).
- **Marcas y webs del grupo:** Animación Galicia (agencia que organiza saraos en Galicia), Suunia Viajes,
  Mil Eventos Galicia, SeaGalicia, LuxeGalicia. (Confirmar escritura y URLs.)
- **Webs del grupo (18 dominios)**, listadas con su descripción en `lib/company.ts` y mostradas como texto en
  `/animacion-galicia/`: despedidasgalicia.es, despedidascoruna.es, despedidasvigo.com, despedidas-vigo.es,
  despedidasourense.com, despedidassanxenxo.es, despedidas-sanxenxo.com, despedidasplayasanxenxo.com,
  despedidasenoporto.com, despedidasag.com, gincanas.es (¿o ginkanas.es?), humoramarillocoruna.com, los7pc.com,
  monologosgalicia.com, seagalicia.com (alquiler de barcos), luxegalicia.com (traslados), suunia.com (viajes por Galicia),
  mileventosgalicia.com (eventos de empresa). **Hay tres webs de Sanxenxo y dos de Vigo para las mismas búsquedas: riesgo de canibalización.**
- **4 herramientas propias** (dominios por llegar): test-despedidas, retranca, ruleta y gastosdespedidas. Cada una tendrá
  un post. Hoy viven en `/herramientas-gratis-para-despedidas/` del WordPress.
- **Estrategia comercial:** *ya veremos vender*. Ahora, **cero venta directa**. La agencia aparece solo en el pie y
  en su propia página.
- **Voz:** directa, cercana, con humor sarcástico y sin humo («Menudo marrón…»). Referencias: Raimon Samsó
  (persuasión emocional) y Marina Miller (claridad callejera). Segunda persona, frases cortas. El humor recae en
  situaciones y papeles reconocibles, nunca en personas reales.

## 2. Estado actual de la web (WordPress, 7-nov-2026)

WordPress + Elementor + Yoast + Site Kit. Portada comercial «Despedidas en Galicia - Packs y Ofertas 2026».
**15 URLs** (listadas con destino propuesto en `docs/migracion-wordpress.md`): portada, guía, FAQ, actividades, aventuras,
herramientas, contacto, 2 posts, 5 páginas por ciudad (Vigo, A Coruña, Sanxenxo, Ourense, otras) y taxonomías.
Se puede rastrear: el dominio está permitido en el entorno.

## 2b. Datos de Search Console recibidos (8-nov-2026) — leer `docs/analisis-search-console.md`

- 142 consultas, 8.285 impresiones, **14 clics (CTR 0,17 %)**. Demanda local real, posicionamiento malo (pos. 24–35 casi todo).
- Solo hay una oportunidad inmediata: **«despedidas en galicia»** (548 impresiones, pos. **11,08**).
- Demanda: Galicia genérico 2.789 · Sanxenxo 2.418 · A Coruña 1.917 · actividades/ideas 638 (pos. 66) · Ourense 188 · Vigo 37.
- **10 de 15 páginas sin indexar.** 40 sitios enlazan (99 páginas), todos a **una** URL. La marca casi no se busca (61 impresiones).
- Faltan: periodo de las exportaciones, Search Console de cada dominio del grupo, Analytics y el WordPress.

## 3. Decisiones ya tomadas (no reabrir sin motivo)

| Tema | Decisión |
| --- | --- |
| Plataforma | Next.js 15 + TypeScript en Vercel, contenido en archivos versionados. **Se elimina WordPress.** |
| Raíz del dominio | La revista ocupa la raíz tras el corte. `NEXT_PUBLIC_BASE_PATH` (subcarpeta) sigue soportado pero no se usa. |
| Menú | Despedidas (`/`) · Cumpleaños · Regalos · Juegos · Contacto, en ese orden. `/despedidas/` redirige a `/`. |
| Páginas por ciudad | Se **conservan las URLs** de A Coruña, Sanxenxo, Ourense, Vigo y Actividades, pero como **páginas de humor «qué hacer de loco en…»**, no de agencia (ya escritas, con `ruta` propia). «Otras ciudades» redirige al pilar de actividades. **Pendiente de contrastar con el contenido del WordPress** que se porte. |
| `<title>` de la portada | **«Menudo marrón organizar este evento · Menú Marrón»: SIN la palabra «despedidas»** (decisión del propietario). La fuerza para «despedidas en Galicia» va en la **meta descripción** («Coñas, ideas y consejos para despedidas en Galicia, cumpleaños, celebraciones y demás eventos…»), en el primer párrafo, en los subtítulos y en los enlaces internos. Riesgo asumido: la portada actual rankea en pos. 11 por esa consulta con el título «Despedidas en Galicia - Packs y Ofertas»; medirlo en Search Console tras el corte. |
| Tono y modelo | **No es una agencia**: es una revista de coñas, bromas, consejos y cosas divertidas para despedidas en Galicia, sin ponerlo en el título. **«Atraer sin atraer, vender sin vender»**: la venta es solo contextual y discreta (cajas «Del grupo» y enlaces a las webs del grupo). |
| Fotos | Galería `/fotos/`, foto de cabecera por post y tira en la portada. Carpeta `fotos-para-subir/` + `npm run fotos`. Solo fotos propias o con permiso, sin menores, sin metadatos. |
| «Lee también» | **Discretos**: línea de texto pequeña con filete lateral, sin caja (el propietario los veía intrusivos). |
| Enlaces salientes | **A las webs del grupo: activos**, abren en pestaña nueva y **sin nofollow** (`SITE.salientes.grupo = true`). **A terceros: apagados** (`SITE.salientes.terceros = false`). Botón de compartir por WhatsApp con `nofollow`. |
| Afiliación | **Ninguna** por ahora. |
| Agencia | Solo en el pie y en `/animacion-galicia/` (nombres de las webs a la vista, sin venta). |
| Pie | 4 columnas: la primera 2/5 y las otras tres 1/5 (`2fr 1fr 1fr 1fr`). Barra legal abajo del todo con separadores verticales. |
| Cabeceras | Título, entradilla y migas a **todo el ancho** del contenedor (1.200 px), no en columna estrecha. |
| Post | Texto a la izquierda y **barra lateral** a la derecha (secciones, posts de la sección, lo último, «Desde Galicia», aviso de enlace). Debajo, «Sigue leyendo». |
| Color en la lectura | Cajas (idea, ojo, dato, frase), listas numeradas con círculo, subtítulos con barra, tinte por sección. |
| Contacto | Compacto: 3 formularios en columnas (escritorio) o pestañas (móvil). «Mándanos un enlace», «Cuéntanos tu marrón» y contacto. |
| Chats ficticios | Fuera. La web no inventa juegos ni herramientas: el contenido es editorial. |
| Analítica | Pendiente de decisión (banner de consentimiento o analítica sin cookies). Hoy no carga nada. |

## 4. Estado real del repositorio

Repositorio: `animaciongalicia/web-animaciongalicia`. Rama de trabajo: `claude/pensive-volta-ihrs9p` (sin PR abierto).
Todo lo de abajo **existe y está probado**.

```
app/            páginas: portada, [section], [section]/[slug], contacto, animacion-galicia, aviso-legal,
                privacidad, cookies, como-trabajamos, feed.xml, sitemap, robots, og/[file], api/contacto
components/     Header, Footer, Sidebar, PiezaView, PiezaCard, Bloques, ContactForms, ShareBar, JsonLd, LegalPage…
content/        piezas.ts (los posts), types.ts, galicia.ts, redirects.ts
lib/            site.ts (SITE, BASE, absoluteUrl, withBase), piezas.ts, company.ts, legal.ts, share.ts
docs/           este brief, migracion-wordpress.md, estrategia-seo-y-visitas.md, fuentes-para-rastreo.md
tests/          e2e-revista.js, e2e-subcarpeta.js, palabras.js (Playwright; ver README)
```

**Funciona hoy:** 25 posts publicados · portada tipo periódico · secciones · post con barra lateral · cajas de color ·
`leetambien` internos · anterior/siguiente · «Sigue leyendo» · tiempo de lectura · compartir por WhatsApp · RSS ·
sitemap/robots coherentes con el entorno (`noindex` en preview) · canonicals · Open Graph con imagen por post ·
JSON-LD (WebSite, Organization, Article, BreadcrumbList) · 404 · formularios con API y modo de prueba · páginas legales ·
redirecciones de las URLs del WordPress (propuesta) · soporte de subcarpeta · tipografías Newsreader + Inter alojadas
en la propia web.

**Comprobaciones:** `npm run lint`, `npm run typecheck`, `npm run build` limpios. `tests/e2e-revista.js` (~330 comprobaciones
en móvil y escritorio) y `tests/e2e-subcarpeta.js` pasan.

**Añadido en la última tanda:** páginas `ruta` propia (URLs antiguas conservadas) · 5 páginas «qué hacer de loco» · bloque `grupo`
con enlaces a las webs del grupo · galería de fotos y foto de cabecera · scripts `npm run foto` y `npm run fotos` · «lee también» discretos.

**No existe todavía:** proyecto de Vercel · analítica · envío de correo real · hub de herramientas · fotos reales (solo marcadores de ejemplo) ·
buscador interno · newsletter.

## 5. Arquitectura técnica

- **Contenido:** `content/piezas.ts`. Un post = objeto con `slug, seccion, tag, titulo, h1, dek, fecha, bloques[]` y
  opcionales `galicia, relacionadas, destacada, borrador, fuentes, embed`. Bloques: `p, h2, ul, ol, caja(idea|ojo|dato|frase), cita, leetambien`.
  La URL es `/<seccion>/<slug>/`. `borrador: true` solo se ve en preview.
- **Rutas:** estáticas (SSG). Las de contenido salen de `generateStaticParams()`.
- **SEO:** `lib/site.ts` + `metadata` en cada página. `SITE_INDEXABLE` controla `noindex`/`robots`.
- **Redirecciones:** `content/redirects.ts` → `next.config.ts` (solo en raíz).
- **Formularios:** `/api/contacto/` con Resend (variables `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
  Sin ellas, modo de prueba con aviso visible y sin envío.
- **Despliegue:** crear proyecto en Vercel conectado al repo, Production = `main`, previews por rama. Variables de entorno
  de `docs/migracion-wordpress.md` §5.
- **Entorno de Claude Code:** acceso de red limitado a una lista de dominios (`docs/fuentes-para-rastreo.md`). Hay que
  listar también la variante `www.` de cada host.

## 6. Contenido

### 6.1 Posts publicados (25)

| Sección | Slug | Formato |
| --- | --- | --- |
| Despedidas | `despedida-como-resacon-en-las-vegas` | Guía de supervivencia (destacada) |
| Despedidas | `guia-para-organizar-despedidas-en-galicia` | **Pilar / hub** (hereda las URLs antiguas) |
| Despedidas | `actividades-absurdas-despedidas-galicia` (`ruta` `/actividades-para-despedidas-de-soltero-y-soltera/`) | **Pilar de actividades** |
| Despedidas | `despedida-en-{a-coruna,vigo,sanxenxo,ourense}-que-hacer-de-loco` (`ruta` en la raíz, URL antigua) | Humor por destino |
| Despedidas | `ideas-locas-grupo-whatsapp-despedida` | Lista |
| Despedidas | `aplicaciones-compartir-gastos-despedida` | Comparativa (datos verificados con Tricount y Splitwise) |
| Despedidas | `barco-o-casa-rural-despedida-galicia` | Versus |
| Despedidas | `mitos-despedidas-de-soltero` | Mito / verdad |
| Despedidas | `diccionario-grupo-whatsapp-despedida` | Glosario |
| Despedidas | `calendario-despedidas-galicia-cuando-hacerla` | Calendario (comprobar fechas de fiestas cada año) |
| Despedidas | `amigo-que-no-paga-la-despedida` | Protocolo con plantillas |
| Despedidas | `preguntas-chotas-despedida-de-soltero` / `-de-soltera` | Preguntas con respuesta |
| Juegos | `secuestro-falso-despedida-de-soltero` | Reto con avisos de seguridad |
| Juegos | `retos-de-plaza-declaracion-cantada-flashmob` | Retos |
| Regalos | `frases-para-camisetas-despedida` | Listas |
| Regalos | `disfraces-para-novio-o-novia-despedida` | Guía de compra |
| Regalos | `regalos-absurdos-que-si-se-pueden-usar` | Lista |
| Regalos | `preguntas-chotas-regalos` | Preguntas con respuesta |
| Cumpleaños | `cumpleanos-tematicos-adultos-galicia` | Guía |
| Cumpleaños | `cumpleanos-sorpresa-cosas-que-salen-mal` | Lista con soluciones |
| Cumpleaños | `preguntas-chotas-cumpleanos-adultos` | Preguntas con respuesta |

Todos de 400–600 palabras, con referencia gallega natural, cajas de color y enlaces internos.

### 6.2 Reglas editoriales

1. **400–600 palabras**, útiles de verdad. Un texto vacío con la pregunta como título no aguanta en Google.
2. **Ángulo gallego natural** (Vigo, A Coruña, Sanxenxo, la lluvia, el marisco, la queimada…) **sin inventar datos**
   (precios, locales, estadísticas). Lo que no esté verificado, no se afirma.
3. **Humor con límites:** nos reímos de situaciones, no de personas ni de daños. Los retos que implican a terceros
   llevan avisos de consentimiento y seguridad.
4. **Enlaces salientes solo a las webs del grupo** (pestaña nueva, sin nofollow), de forma **contextual y discreta** (bloque `grupo`, máximo 1–2 por post). **Nada de afiliación ni enlaces a terceros** (por ahora).
5. **No copiar:** nada de textos, imágenes o vídeos ajenos. Lo leído en otras webs se usa solo para no repetir temas.
6. **Verificar** los datos de terceros contra la fuente (como se hizo con Tricount y Splitwise) y decirlo cuando no se pueda.
7. Estructura: respuesta al principio, subtítulos con la búsqueda, caja «idea/ojo/dato», frase destacada y
   un «Lee también» al final. Enlaces internos descriptivos, sin sobreoptimizar «Galicia».

### 6.3 Los 4 posts de herramientas (pendientes de dominios)

Plantilla: *qué problema resuelve · cómo se usa en 3 pasos · un ejemplo · para quién y cuándo · enlace*.
Hay que decidir si el enlace va al dominio de la herramienta o a un hub interno (mejor interno). Se activa
`SITE.salientes.grupo` ya está activo. Necesito de cada una: nombre, qué hace en una frase y URL.

### 6.3b Pilares y páginas con demanda real (prioridad máxima, por los datos)

1. **Portar y mejorar** las 4 URLs conservadas: A Coruña, Sanxenxo, Ourense y Actividades (contenido del WordPress,
   ampliado; enlazadas desde los posts). **Sin ellas no se puede cortar** (`tests/urls-conservadas.js`).
2. **Pilar «Despedida de soltera en Galicia»** y **pilar «Despedida de soltero en Galicia»** (≈1.500 impresiones en variantes, pos. 30–35).
3. **Pilar «Actividades para despedidas»** muy superior al actual (pos. 52–79).
4. Decidir con los datos de cada web del grupo **qué dominio posee cada consulta** (Sanxenxo ×3, Vigo ×2).

### 6.4 Siguientes 12 posts (prioridad alta → baja)

**Urgentes por estacionalidad (hoy es noviembre; publicar ya para indexar antes de diciembre):**
1. Cena de empresa de Navidad: cómo organizarla sin discutir
2. Amigo invisible: reglas, presupuestos y cómo evitar el desastre
3. Cena de Nochevieja en grupo: cómo repartir gastos y tareas

**Cola larga de despedidas:**
4. Hoja de gastos de una despedida: modelo para copiar
5. Despedida mixta: cómo organizarla sin dramas
6. Despedida de soltera sin alcohol: ideas que funcionan
7. Qué llevar en la maleta de una despedida (y qué se olvida siempre)
8. ¿Qué hacer si llueve en una despedida en Galicia? 7 planes cubiertos

**Humor y absurdo:**
9. 15 cosas que solo entiende quien organizó una despedida
10. Tipos de amigos en una despedida (y cuál eres)
11. Discursos de cumpleaños de tres frases
12. Cumpleaños de 40 y 50: ideas que no sean una tarta

Banco adicional de 40 titulares en `docs/estrategia-seo-y-visitas.md` §C. **Ritmo recomendado: 2–3 posts por semana.**
Las búsquedas de pregunta y de lista son el formato estrella; el formato «preguntas chotas» (8–11 preguntas
como subtítulos, 40–70 palabras de respuesta cada una) cubre muchas búsquedas absurdas a la vez.

### 6.5 Lo que solo puede aportar el propietario (lo más valioso)

Anécdotas reales y anónimas de despedidas y eventos organizados · precios reales por plan · fotos propias con
consentimiento · errores que se repiten. Un post con experiencia de primera mano gana siempre a uno genérico.

## 7. SEO

**Objetivos:** (a) posicionar en Galicia; (b) atraer búsquedas largas y absurdas; (c) aprovechar la antigüedad y los
enlaces del dominio. **Sin promesas de cifras o plazos:** se mide con Search Console.

- **Local sutil:** H1 y descripción de portada con despedidas de soltero y soltera, cumpleaños y Galicia. Títulos de
  posts con la búsqueda local natural. Bloque «Desde Galicia» (portada, barra lateral) y columna del pie.
  `geo.region = ES-GA`. JSON-LD de `Organization` con `areaServed: Galicia`. **Cuando se conozca la calle**, añadir
  dirección postal a `Organization` (A Coruña).
- **Enlazado interno de cola larga (hecho):** `content/enlaces.ts` inserta 2–3 enlaces contextuales con anclas propias en cada post (antes del 3.er y 5.º subtítulo), además de `leetambien`, «Sigue leyendo», anterior/siguiente y barra lateral. Cada pregunta de los posts de «preguntas chotas» tiene ancla propia y se enlaza desde la portada.
- **Enlazado interno (resto):** El **pilar**
  (`guia-para-organizar-despedidas-en-galicia`) enlaza a todo lo demás. Cuando haya 3–4 posts por tema, una página guía
  por sección.
- **Canibalización:** al desaparecer el WordPress no hay competencia interna, pero **no duplicar** títulos ni intenciones.
- **Técnico:** canonicals, sitemap, robots, 301, Core Web Vitals (sitio estático), alt en imágenes cuando las haya,
  Open Graph por post, feed RSS.
- **Después del corte:** Search Console (propiedad de dominio existente), sitemap, vigilancia de 404/cobertura.
- **Autoridad:** datos propios (por ejemplo «cuánto cuesta una despedida en Galicia en 2026»), prensa local, y las
  otras webs del grupo. Nunca comprar enlaces.

## 8. Diseño y UX (resumen del sistema ya implementado)

- **Identidad:** revista tipo periódico, limpia y ancha (contenedor 1.200 px), contrastes sobrios.
- **Color:** papel `#f5f2ea`, tinta `#1b1a17`, y un color por sección: Despedidas `#7b2d2d` (burdeos), Cumpleaños `#2d5a63`
  (petróleo), Regalos `#79581c` (ocre), Juegos `#3d4d6b` (pizarra), con tintes suaves para las cajas.
- **Tipografía:** Newsreader (titulares y texto) + Inter (etiquetas y UI), alojadas con `@fontsource-variable` (sin Google Fonts).
- **Layout:** cabecera tipo periódico centrada; título y entradilla de cada página a todo el ancho; post con barra
  lateral sticky ≥ 1000 px y apilada en móvil; pie `2fr 1fr 1fr 1fr` + barra legal.
- **Accesibilidad:** foco visible, contraste AA, `aria-current`, objetivos táctiles ≥ 44 px, `prefers-reduced-motion`.
- **Mobile first.** Sin vídeo ni animaciones pesadas.

## 9. Legal

Páginas ya redactadas (aviso legal, privacidad, cookies, cómo trabajamos) con los datos del titular de `lib/legal.ts`.
**Pendiente:** calle y número, correo de contacto y datos del Registro Mercantil (si procede). Los textos son una
base completa pero **conviene que los revise un profesional**. La política de cookies hoy dice que no se instalan
cookies: **hay que cambiarla si se incorpora analítica**. En privacidad se habla de «proveedores» sin nombrarlos:
citarlos cuando estén activos (Resend, Vercel…).

## 10. Plan de trabajo (en orden)

| Fase | Contenido | Entregable |
| --- | --- | --- |
| **0. Datos** | Recibido: consultas, páginas, problemas e informe de enlaces (analizado). Falta: periodo, Search Console de cada web del grupo, Analytics, WordPress y contenido de las 15 URLs; validar la matriz URL → destino | Informe + matriz validada |
| **1. Construir** | **Portar las 4 URLs con demanda**; 3 pilares nuevos (soltera, soltero, actividades); hub de herramientas; 3 posts urgentes de Navidad; cola larga; imagen propia (si se aporta) | PR a `main` |
| **2. Infraestructura** | Proyecto de Vercel conectado; variables; correo real (Resend); decisión de analítica y banner | Preview con `noindex` |
| **3. QA de migración** | Rastreo del preview vs. rastreo del WordPress; pruebas de las 301; **`tests/urls-conservadas.js` en verde**; legales completas; envío real de formularios | Informe de QA |
| **4. Corte** | TTL bajo, copia del WordPress, DNS a Vercel, `SITE_INDEXABLE=true`, comprobaciones | Producción |
| **5. Después** | Sitemap en Search Console, vigilancia de 404 y cobertura, ritmo de 2–3 posts por semana | Informe a las 2 y 8 semanas |

## 11. Criterios de aceptación

- `npm run lint`, `npm run typecheck`, `npm run build` sin avisos; `tests/e2e-revista.js` en verde.
- Cada URL antigua con tráfico o enlaces responde con 301 al equivalente por intención (o se conserva). Cero 404 nuevos en el rastreo.
- Un solo H1 por página, canonical propio, sin enlaces salientes salvo las webs del grupo (pestaña nueva, sin nofollow) y compartir, sin overflow horizontal en 390 px y 1280 px.
- `tests/urls-conservadas.js` en verde (las 5 URLs con demanda existen y responden 200).
- Formularios con envío real verificado antes de darlos por operativos.
- Páginas legales completas, sin marcadores «PENDIENTE».
- Ningún dato sin verificar presentado como cierto.

## 12. Pendientes que debe aportar el propietario

1. **Ya recibidas** (Consultas, Páginas, Problemas, Enlaces). Faltan: periodo, Rendimiento por fecha, Search Console de cada web del grupo y Analytics (GA4: páginas de destino, fuentes y qué se cuenta como conversión).
2. Calle y número, correo de contacto y datos registrales del titular.
3. Los 4 dominios y descripción de cada herramienta.
4. URLs y descripciones de Suunia Viajes, Mil Eventos Galicia, SeaGalicia y LuxeGalicia.
5. Decisión de analítica (con banner o sin cookies) y cuenta de Resend.
6. Acceso al DNS y al alojamiento del WordPress para el corte; qué ofrecían los packs de la portada actual.
7. Anécdotas reales y precios reales para dar valor a los posts.
8. Autorización expresa para activar enlaces a **terceros** (los del grupo ya están activos).
9. **Fotos chotas**: subirlas a `fotos-para-subir/` (ver `LEEME.md`). Confirmar que el repositorio es **privado** (los originales con ubicación quedan en el historial).
10. Elegir **qué web de Sanxenxo** enlazar desde la revista (hay tres) y confirmar `gincanas.es` / `ginkanas.es`.
11. Rutas de la página 404 (GA4), informe de adquisición y datos de GA4 de cada web del grupo (`docs/analisis-analytics.md`).

## 13. Qué NO hacer

- Poner la revista en la raíz **antes** de tener las redirecciones validadas y la copia del WordPress.
- Redirigir URLs antiguas «a la portada» por comodidad, ni **redirigir A Coruña, Sanxenxo, Ourense o Actividades**.
- Cortar el DNS sin que pase `tests/urls-conservadas.js`.
- Páginas por ciudad con el mismo texto cambiando el nombre.
- Publicar posts sin revisión o con datos inventados.
- Activar analítica con cookies sin consentimiento.
- Comprar o intercambiar enlaces en masa.
- Enlazar fuera de la web ni añadir afiliación sin autorización.

## 14. Prompt de arranque sugerido

> Lee `docs/BRIEF_CLAUDE_CODE.md`, `docs/migracion-wordpress.md` y `docs/estrategia-seo-y-visitas.md`. Empieza por la
> **Fase 0**: pídeme las exportaciones de Search Console y Analytics, lee el contenido de las 15 URLs del WordPress y
> propón la matriz URL → destino. No toques producción ni actives enlaces salientes. Después sigue el plan de §10.
