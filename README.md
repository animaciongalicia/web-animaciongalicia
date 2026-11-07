# Menú Marrón

Revista digital hecha en Galicia que recoge **lo mejor y lo peor de la red sobre el marrón de organizar algo**
(despedidas, cumpleaños, regalos, grupos) y lo cuenta con comentario propio. No inventa juegos ni herramientas:
encuentra, selecciona, verifica y añade valor.

**Menú Marrón, un proyecto de Animación Galicia.** La agencia aparece solo en el pie, sin venta directa.

Next.js 15 + TypeScript, contenido en archivos versionados, tipografías autoalojadas (Newsreader + Inter, sin
peticiones a Google).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Estructura

| Ruta | Qué es |
| --- | --- |
| `/` | Portada de Despedidas, estilo periódico |
| `/cumpleanos/`, `/regalos/`, `/juegos/` | Secciones: se van llenando con piezas |
| `/<seccion>/<slug>/` | Una pieza (URL canónica única) |
| `/despedidas/` | Redirige a `/` (las piezas viven en `/despedidas/<slug>/`) |
| `/contacto/` | Contacto, **«Mándanos un enlace»** y «Cuéntanos tu marrón» |
| `/informacion-editorial/` | Cómo trabajamos, derechos de terceros y afiliación |

## Cómo se añade una pieza

Todo está en `content/piezas.ts`. Una pieza es un hallazgo + texto propio:

```ts
{
  slug: "mi-pieza",
  seccion: "despedidas",            // despedidas | cumpleanos | regalos | juegos
  tag: "Viral",
  titulo: "…",                      // <title>: lleva la búsqueda literal
  h1: "…",
  dek: "Entradilla: qué es y por qué te importa.",
  fecha: "2026-11-07",
  fuentes: [{ nombre: "…", url: "https://…", tipo: "video" }],
  embed: { proveedor: "youtube", id: "XXXXXXXXXXX", titulo: "…" },   // opcional
  cuerpo: ["Texto propio, párrafo a párrafo."],
  porQueFunciona: "…",
  queHacer: { texto: "…", mensaje: "Mensaje para pegar en el grupo" },
  verificacion: "Qué comprobamos y qué no",
  galicia: true,                    // ángulo gallego: sale en el bloque de Galicia
  lugares: ["Vigo"],
  relacionadas: ["otro-slug"],
}
```

- Compilaciones (varios hallazgos en una pieza): usa `items`.
- `destacada: true` la pone de pieza principal en la portada.
- `borrador: true`: visible solo en preview (con aviso y `noindex`). **En producción no existe** (404, fuera del
  sitemap).

## Reglas editoriales (derechos y honestidad)

- Se enlaza o se incrusta con el reproductor **oficial** (YouTube sin cookies). No se copia ni se aloja ningún
  vídeo, imagen ni meme ajeno. El texto es propio; las citas, breves y con fuente.
- Las fuentes salen con `rel="noopener noreferrer nofollow"` y `target="_blank"`.
- No se hace humor a costa de daños ni de personas privadas. Lo que no se ha podido verificar se dice
  en `verificacion`.
- Quien sea autor de algo enlazado puede pedir su retirada desde Contacto.

## SEO (posicionamiento en Galicia)

- Título y H1 de la portada con «Galicia»; metadatos `geo.region = ES-GA`; JSON-LD de `WebSite` y `Organization`
  (Animación Galicia, `areaServed: Galicia`) y de `Article` en cada pieza.
- Canonicals, Open Graph con imagen por pieza (`/og/<slug>.png`), sitemap y robots coherentes con el entorno.
- En preview todo va con `noindex` y `robots.txt` bloqueado. Para producción: `SITE_INDEXABLE=true`.
- Las piezas con ángulo gallego (`galicia: true`, `lugares`) alimentan el bloque «Para quien organiza en Galicia».
  Las páginas locales por ciudad (Vigo, A Coruña…) necesitan datos reales y quedan para una fase posterior.

## Variables de entorno (`.env.example`)

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonicals, sitemap, Open Graph). Sin barra final. |
| `SITE_INDEXABLE` | `true` solo en producción. |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Envío real de los formularios (Resend). |

Sin las tres del correo, los formularios funcionan en **modo de prueba** (aviso visible, no envían nada).

## Pie con la agencia

`lib/company.ts`: lema y marcas de Animación Galicia. Rellena la `url` de cada una para que se enlacen; sin `url` se
muestra solo el nombre.

## Pendiente antes de publicar

- [ ] **Las 3 piezas actuales son muestras de formato** (borrador): se montaron con resultados de búsqueda sin poder
  leer las páginas originales. Verificarlas o sustituirlas por piezas reales.
- [ ] **Acceso de lectura a enlaces.** El entorno de Claude no puede abrir webs externas salvo las permitidas.
  Para que Claude lea los enlaces que se le pasen, hay que ampliar el acceso de red del entorno, o pegar el texto.
- [ ] URLs de la agencia y de sus marcas (Suunia Viajes, Mil Eventos Galicia, SeaGalicia, LuxeGalicia) y
  comprobar cómo se escribe cada nombre.
- [ ] Dominio (sin decidir). Si hay URLs anteriores: mapa de redirecciones y revisión en Search Console.
- [ ] Destinatario y proveedor de correo de los formularios; verificar un envío real.
- [ ] Privacidad y aviso legal (faltan los datos del titular; no se ha inventado texto legal).
- [ ] Proyecto de Vercel conectado a este repositorio (no hay ninguno ahora).
- [ ] Revisión editorial del tono por el propietario.
