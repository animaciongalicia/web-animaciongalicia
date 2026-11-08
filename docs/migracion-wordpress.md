# Migración: de WordPress a la revista (animaciongalicia.com)

Decisión del propietario: **se elimina el WordPress y la revista pasa a ser toda la web del dominio**, reaprovechando
la antigüedad (15 años), los enlaces entrantes (~3.000, dato sin verificar) y las URLs antiguas que valga la pena
conservar. Es una migración de un sitio con autoridad: se hace con inventario, datos y redirecciones 301. Un error
aquí cuesta posiciones y enlaces.

## 1. Inventario del WordPress actual (comprobado el 7-nov-2026)

WordPress + Elementor + Yoast + Site Kit de Google. Sitemap: `https://animaciongalicia.com/sitemap_index.xml`
(post, page, category y author). 21 URLs entre contenido y sitemaps; el contenido real es este:

| URL actual | Tipo | Última modificación | Destino propuesto en la revista |
| --- | --- | --- | --- |
| `/` | Portada comercial: «Despedidas en Galicia - Packs y Ofertas 2026» | 2026-02-06 | `/` (portada de la revista) |
| `/organizar-una-despedida-en-galicia-animaciongalicia/` | Página | 2026-01-11 | 301 → guía pilar |
| `/guia-para-organizar-despedidas-en-galicia/` | Página | 2026-01-02 | 301 → guía pilar |
| `/como-organizar-una-despedida-en-galicia-sin-discusiones-ni-caos/` | Post | 2026-01-05 | 301 → guía pilar |
| `/despedidas-de-soltero-y-soltera-en-a-coruna/` | Ciudad | 2026-01-11 | **CONSERVAR** (2.775 impresiones, pos. 29,6). Portar y mejorar |
| `/despedidas-de-soltero-y-soltera-en-sanxenxo/` | Ciudad | 2026-01-11 | **CONSERVAR** (2.521, pos. 27,7). Portar y mejorar |
| `/despedidas-de-soltero-y-soltera-en-ourense/` | Ciudad | 2026-01-11 | **CONSERVAR** (849, pos. 43,8). Portar y mejorar |
| `/actividades-para-despedidas-de-soltero-y-soltera/` | Página | 2026-01-11 | **CONSERVAR** (2.189, pos. 51,6). Será el pilar de actividades |
| `/despedidas-de-soltero-y-soltera-en-vigo/` y `-en-otras-ciudades/` | Ciudad | 2026-01-11 | 301 → guía pilar (sin impresiones ni indexación) |
| `/aventuras-para-despedidas/` | Página | 2026-01-11 | 301 → `/juegos/` |
| `/preguntas-frecuentas-y-dudas-para-despedidas/` | FAQ | 2025-12-22 | 301 → preguntas chotas de soltero |
| `/noticias-despedidas/` | Post / índice | 2026-01-05 | 301 → `/` |
| `/herramientas-gratis-para-despedidas/` | Página (las 4 herramientas) | 2026-02-03 | **Pendiente** (hub de herramientas cuando lleguen los 4 dominios) |
| `/contacto-organizar-despedidas-en-galicia/` | Contacto | 2026-02-03 | 301 → `/contacto/` |
| `/category/despedidas-en-galicia/`, `/author/admin/` | Taxonomías | — | 301 → `/` |
| `/feed/` | Feed de WordPress | — | 301 → `/feed.xml` |

Ya está en el repo, en `content/redirects.ts` y `next.config.ts`, y probado: las URLs con barra final redirigen en un
solo salto y todos los destinos responden 200. **Es una propuesta: se valida con Search Console antes de publicar.**

**Las 4 URLs marcadas «CONSERVAR» no están en la lista de redirecciones a propósito y hoy dan 404 en la nueva web**
(falta portar su contenido). `tests/urls-conservadas.js` es la **puerta del corte**: falla mientras falte alguna.
Análisis completo y razones en `docs/analisis-search-console.md`.

Observaciones:

- **Se conserva el formato de URL con barra final** (`trailingSlash: true`), igual que WordPress.
- **Solo he leído títulos y estructura, no el contenido de cada página.** Antes de cortar hay que leer el contenido
  de las 15 URLs y portar lo que merezca la pena (precios, textos que posicionan, testimonios).
- **Datos recibidos (8-nov-2026):** A Coruña, Sanxenxo, Ourense y Actividades concentran el 76 % de las impresiones de las
  páginas. Se conservan. Vigo y «otras ciudades» no tienen impresiones y se redirigen. Una redirección a algo
  irrelevante («a la portada por defecto») la trata Google como *soft 404*.

## 2. Datos que hay que pedir y analizar ANTES de cortar (Fase 0)

El propietario dispone de Analytics y Search Console. Hay que pedir exportaciones, no capturas:

| Qué | Dónde | Para qué |
| --- | --- | --- |
| Rendimiento por **página** (clics, impresiones, posición) | Search Console → Rendimiento → Páginas | Qué URLs tienen tráfico: se conservan o se redirigen con cuidado |
| Rendimiento por **consulta** | Search Console → Rendimiento → Consultas | Qué se busca de verdad: alimenta el banco de posts |
| **Enlaces**: páginas más enlazadas, sitios que enlazan, texto de enlace | Search Console → Enlaces → Exportar | Verificar los ~3.000 enlaces y saber a qué URLs apuntan |
| Páginas de destino y fuentes | Analytics (GA4) → Informes → Páginas de destino | Qué páginas traen visitas y de dónde |
| Histórico anterior a GA4 | Exportaciones antiguas de Universal Analytics, si se hicieron | Contexto de 15 años |

**Avisos honestos sobre los datos históricos:**

- Search Console conserva solo **16 meses** de rendimiento. Lo anterior solo existe si se exportó en su día. **Las
exportaciones recibidas no indican el periodo: confirmarlo.**
- Universal Analytics dejó de procesar datos en 2023 y se borró en 2024; sin exportación, no se recupera.
- Los enlaces: el informe de Search Console muestra **40 sitios y 99 páginas que enlazan, todas a una sola URL de destino**
  (no 3.000). Varios son webs propias (`ginkanas.es`, `humoramarillocoruna.com`, `despedidasourense.com`, `los7pc.com`).
- **Indexación:** 10 de las 15 páginas están sin indexar (9 «descubiertas», 1 «rastreada»). Solicitar indexación tras el corte.

**Reglas de decisión por URL** (con los datos delante):

1. Con **tráfico orgánico o enlaces relevantes** → se conserva la URL con contenido equivalente o mejor, o se redirige
   301 al equivalente **por intención de búsqueda**.
2. Sin tráfico ni enlaces → 301 a la página más cercana por tema.
3. Sin equivalente razonable → 410 (gone) antes que redirigir a la portada.
4. Nada se borra sin redirección ni decisión consciente.

## 3. Fases

**Fase 0: datos y decisiones.** Exportaciones, lectura del contenido de las 15 URLs, matriz URL → destino validada.

**Fase 1: construir y portar.** Revista completa (ya está), guía pilar, hub de herramientas y contenido valioso portado.

**Fase 2: preview y QA.**
- Proyecto de Vercel conectado a GitHub, preview en una URL de Vercel con `noindex`.
- Prueba de **todas** las redirecciones (script), comparación con el rastreo del WordPress, revisión de enlaces rotos,
  metadatos, sitemap, formularios con envío real, páginas legales completas.
- Rastreo del preview con un rastreador SEO y comparación de URLs antes/después.

**Fase 3: corte.**
1. Bajar el TTL del DNS a 300 s con 24–48 h de antelación.
2. Hacer una **copia completa del WordPress** (archivos y base de datos) y guardarla. No se borra el alojamiento
   hasta 30–60 días después.
3. Añadir el dominio en Vercel, apuntar el DNS, comprobar HTTPS.
4. Activar `SITE_INDEXABLE=true` y `NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com`.
5. Comprobar `robots.txt`, `sitemap.xml`, canonicals y las redirecciones en producción.

**Fase 4: después del corte (primeras 8 semanas).**
- Search Console: la propiedad de dominio sigue siendo la misma; enviar `https://animaciongalicia.com/sitemap.xml`.
- Vigilar **cobertura, 404 y consultas** cada pocos días las primeras dos semanas. Corregir cada 404 con redirección.
- Si aparecen caídas en URLs concretas, revisar si su destino es el adecuado.
- Retirar el WordPress solo cuando el tráfico esté estable.

## 4. Analítica y cookies (decisión pendiente)

Hoy se usa Google Analytics a través de Site Kit. En la nueva web:

- **Con Google Analytics** hace falta un **banner de consentimiento** que bloquee GA hasta aceptar (art. 22.2 LSSI-CE
  y guía de la AEPD) y actualizar la política de cookies, que ahora dice que no se usa ninguna.
- **Alternativa sin cookies** (Plausible, Umami o Vercel Web Analytics): no exige banner y da lo esencial. Se puede
  mantener GA4 en paralelo solo para conservar el histórico.
- Hasta decidirlo, la web no carga ninguna analítica.

## 5. Variables en producción

```bash
NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com
NEXT_PUBLIC_BASE_PATH=          # vacío: la revista ocupa la raíz
SITE_INDEXABLE=true             # solo al hacer el corte
RESEND_API_KEY= CONTACT_TO_EMAIL= CONTACT_FROM_EMAIL=
```

`NEXT_PUBLIC_BASE_PATH=/revista` sigue soportado (probado) por si algún día se prefiere una subcarpeta. No se usa.

## 6. Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Perder posiciones de la portada comercial | Decidir con datos qué se porta; redirecciones por intención; vigilar Search Console |
| Perder enlaces por 404 | Matriz URL → destino; script de pruebas; 404 monitorizados las primeras semanas |
| Contenido comercial que desaparece sin sustituto | Revisar qué ofrecía la portada (packs, ofertas) y decidir dónde vive: página de la agencia o contacto |
| Cookies y analítica sin consentimiento | Decisión de la sección 4 antes de cargar nada |
| Cambio de hosting con caída | TTL bajo, copia del WordPress, corte fuera de horas punta |
