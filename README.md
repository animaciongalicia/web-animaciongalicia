# Menú Marrón

Revista digital de humor práctico para quien se ha comido el marrón de organizar algo en un grupo de WhatsApp.
**Menú Marrón, un proyecto de Animación Galicia.** Next.js 15 + TypeScript, contenido en archivos versionados.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run typecheck
```

## Estructura

| Ruta | Qué es |
| --- | --- |
| `/` | Portada de Despedidas |
| `/cumpleanos/`, `/regalos/`, `/juegos/` | Categorías con introducción y artículos |
| `/<seccion>/<slug>/` | Artículo (URL canónica única) |
| `/despedidas/` | Redirige a `/` (los artículos viven en `/despedidas/<slug>/`) |
| `/contacto/` | Contacto y «Cuéntanos tu marrón» |
| `/informacion-editorial/` | Quiénes somos, escenas ficticias y afiliación |

## Añadir un artículo (sin tocar rutas)

Edita `content/articles.ts` y añade un objeto a `articles`:

```ts
{
  slug: "mi-articulo",
  section: "despedidas",        // despedidas | cumpleanos | regalos | juegos
  title: "…", h1: "…", description: "…",
  answer: "Respuesta o recurso al principio.",
  problema: "Acabo de crear el grupo",   // tipo de problema (sirve para filtrar/enlazar)
  tag: "Nombres de grupo",
  related: ["otro-slug"],
  blocks: [ /* chat, copylist, template, steps, checklist, games, ideas, play */ ],
}
```

La ruta, la página, el sitemap y la imagen de vista previa (`/og/<slug>.png`) salen solos.
Tipos de bloque en `content/types.ts`. Las escenas de chat siempre se muestran como «Chat ficticio».
Para listarlo en la portada, añade el slug a `HOME_ORDER`.

## Actualizar una recomendación

`content/recomendaciones.ts`. Cada entrada tiene una idea `casera` (siempre visible) y `enlaces` externos.
Con `enlaces` vacío no se muestra nada comercial. Para un enlace de afiliación real:
`{ label, url, comisionado: true }`. Sale con aviso visible y `rel="sponsored"`.

## Variables de entorno (`.env.example`)

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonicals, sitemap, Open Graph). Sin barra final. |
| `SITE_INDEXABLE` | `true` solo en producción. Si no, `noindex` y `robots.txt` bloqueado. |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Envío real del formulario (Resend). |

Sin las tres variables de correo, el formulario funciona en **modo de prueba**: avisa de forma visible y no envía nada.

## Pendiente antes de publicar

- [ ] **Dominio.** Sin decidir. `animaciongalicia.com` puede tener web propia; Menú Marrón ocupa `/`. Valorar dominio propio o subdominio.
- [ ] **Contacto.** Destinatario y proveedor de correo; verificar un envío real antes de darlo por operativo.
- [ ] **Privacidad / aviso legal.** Faltan los datos del titular. No se ha inventado texto legal. El formulario recoge correos, así que hace falta antes de producción.
- [ ] **Afiliación.** Enlaces reales del propietario (por ahora no hay ninguno y el bloque comercial está oculto).
- [ ] **Migración.** Si el dominio tiene URLs anteriores: mapa de equivalencias y redirecciones, revisión de URLs prioritarias, comprobación de seguridad y acciones manuales/indexación en Search Console antes de activar.
- [ ] **Identidad.** Logo y colores definitivos (ahora logotipo de texto y paleta propuesta).
- [ ] Revisión editorial del humor por el propietario.

Fase posterior (no incluido): salas privadas, capturas de WhatsApp, cuentas, Supabase, IA en tiempo de uso, guías locales y reservas.
