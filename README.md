# Menú Marrón

**Menudo marrón organizar este evento.** Revista digital hecha en Galicia con ideas, retos y locuras para despedidas
de soltero y de soltera, cumpleaños y regalos. Humor con cabeza y sin humo.

**Menú Marrón, un proyecto de Animación Galicia.** La agencia aparece solo en el pie y en su propia página.

Next.js 15 + TypeScript, contenido en archivos versionados, tipografías autoalojadas (Newsreader + Inter, sin
peticiones a Google).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Dominio y dónde vive

`animaciongalicia.com` tiene 15 años y ~3.000 enlaces entrantes (dato aportado, sin verificar), y **hoy es una web
WordPress comercial en producción**. La revista **no ocupa la raíz**: está preparada para vivir en `/revista/`.
Ver `docs/arquitectura-subcarpeta.md`.

```bash
NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com   # sin subcarpeta
NEXT_PUBLIC_BASE_PATH=/revista                      # vacío = raíz
```

Con `NEXT_PUBLIC_BASE_PATH=/revista`, todas las rutas de abajo cuelgan de `/revista` (menú, enlaces, canonicals,
sitemap, feed, imágenes de vista previa, formularios y botones de compartir).

## Estructura

| Ruta | Qué es |
| --- | --- |
| `/` | Portada (sección Despedidas), estilo periódico |
| `/cumpleanos/`, `/regalos/`, `/juegos/` | Secciones: se van llenando con posts |
| `/<seccion>/<slug>/` | Un post: texto a la izquierda y barra lateral para seguir navegando |
| `/despedidas/` | Redirige a `/` (los posts viven en `/despedidas/<slug>/`) |
| `/contacto/` | Contacto, «Mándanos un enlace» y «Cuéntanos tu marrón» |
| `/animacion-galicia/` | La agencia y sus webs. Solo se enlaza desde el pie |
| `/aviso-legal/`, `/privacidad/`, `/cookies/`, `/como-trabajamos/` | Páginas legales, en la barra de abajo del pie |

## Cómo se añade un post

Todo está en `content/piezas.ts`. Copia un objeto, cambia el `slug` y rellena `bloques`:

```ts
{
  slug: "mi-post",
  seccion: "despedidas",            // despedidas | cumpleanos | regalos | juegos
  tag: "Dinero",
  titulo: "…",                      // <title>: lleva la búsqueda literal
  h1: "…",
  dek: "Entradilla.",
  fecha: "2026-11-07",
  galicia: true,
  relacionadas: ["otro-slug"],      // salen en «Sigue leyendo»
  bloques: [
    { t: "p", x: "Párrafo." },
    { t: "h2", x: "Subtítulo" },
    { t: "ol", x: ["Paso uno", "Paso dos"] },            // lista numerada (también "ul")
    { t: "caja", tipo: "idea", titulo: "Idea", x: "…" }, // idea | ojo | dato | frase
    { t: "leetambien", slug: "otro-slug" },              // enlace interno dentro del texto
  ],
}
```

- La URL, la tarjeta, el sitemap, la imagen de vista previa (`/og/<slug>.png`), el tiempo de lectura, la barra
  lateral y el «anterior/siguiente» salen solos.
- `destacada: true` lo pone como pieza principal de la portada.
- `borrador: true`: visible solo en preview. En producción no existe.
- Para que un post salga en «Desde Galicia» (barra lateral y portada) o en el pie, edita `content/galicia.ts`.

## Cómo retiene al lector (sin prometer cifras)

La evidencia pública es débil (casi todo son blogs de agencias), pero todas las guías coinciden en lo mismo, y es lo
que hace la web: enlaces internos dentro del texto (`leetambien`), un bloque de posts relacionados al final
(«Sigue leyendo»), anterior/siguiente dentro de la sección y una barra lateral con la sección, lo último y «Desde
Galicia». Para medirlo hará falta analítica (no hay ninguna instalada); habría que añadir aviso de cookies antes.

## Estrategia de visitas y posicionamiento

Ver `docs/estrategia-seo-y-visitas.md`.

## SEO para Galicia (sutil)

- Portada: H1 «Menudo marrón organizar este evento», con descripción que menciona despedidas de soltero y soltera,
  cumpleaños y Galicia. Metadatos `geo.region = ES-GA`, JSON-LD de `WebSite`, `Organization` y `Article`.
- Los títulos de los posts llevan la búsqueda local de forma natural. El bloque «Desde Galicia» enlaza con texto
  descriptivo, no con etiquetas. No hay páginas por ciudad.
- En preview todo va con `noindex` y `robots.txt` bloqueado. Para producción: `SITE_INDEXABLE=true`.

## Enlaces salientes y afiliación

Apagados. `SITE.salientes = false` (en `lib/site.ts`): las fuentes salen como texto y los vídeos incrustados no se
cargan. No hay afiliación. Para activarlos, cambiar ese valor y hacerlo con tu indicación.

## Variables de entorno (`.env.example`)

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonicals, sitemap, Open Graph). Sin barra final. |
| `SITE_INDEXABLE` | `true` solo en producción. |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Envío real de los formularios (Resend). |

Sin las tres del correo, los formularios funcionan en **modo de prueba** (aviso visible, no envían nada).

## Pendiente antes de publicar

- [ ] **Datos del titular** en `lib/legal.ts` (nombre/razón social, NIF, domicilio, correo, registro). Mientras falten,
  el aviso legal y la privacidad muestran «[PENDIENTE DE COMPLETAR]». Los textos son una base completa, pero conviene
  que los revise un profesional. En privacidad se habla de «proveedores» sin nombrarlos: si se activa Resend u otro,
  conviene citarlo.
- [ ] **La agencia**: `web` y `descripcion` de cada marca en `lib/company.ts` (ahora solo hay una palabra para
  Suunia Viajes y Mil Eventos Galicia y nada para SeaGalicia y LuxeGalicia). Comprobar cómo se escribe cada nombre.
- [ ] **Revisión editorial** de los 8 posts: son textos propios, no proceden de una fuente. Lo que dicen de Tricount
  y Splitwise está comprobado contra sus webs; falta Settle Up y Bizum (la película citada es de conocimiento general).
- [x] Acceso de lectura a enlaces: dominios añadidos al entorno (hay que listar también la variante `www.` de cada uno).
- [ ] **Decidir dónde vive la revista**: subcarpeta `/revista/` con proxy (recomendado), subdominio, o ninguna.
- [ ] **Auditoría de enlaces entrantes** antes de tocar nada (Search Console → Enlaces).
- [ ] Los 4 dominios de las herramientas y qué hace cada una, para su post.
- [ ] Correo de los formularios, proyecto de Vercel conectado, y analítica con su aviso de cookies si se quiere medir.
