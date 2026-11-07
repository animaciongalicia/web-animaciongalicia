# Dónde vive la revista dentro de animaciongalicia.com

## Lo que hay hoy en el dominio (comprobado el 7-nov-2026)

`animaciongalicia.com` es una web **WordPress** (Elementor + Yoast + Site Kit) en producción. Su portada se titula
«Despedidas en Galicia - Packs y Ofertas 2026» y es una página comercial: «¿Cómo te ayudamos?», «Si lo hacemos
nosotros», «Más de 15 años organizando despedidas…». Hoy tiene **15 URLs**:

| URL | Qué es |
| --- | --- |
| `/` | Portada comercial |
| `/organizar-una-despedida-en-galicia-animaciongalicia/` | Página de organización |
| `/guia-para-organizar-despedidas-en-galicia/` | Guía |
| `/como-organizar-una-despedida-en-galicia-sin-discusiones-ni-caos/` | Post |
| `/noticias-despedidas/` | Post / índice de noticias |
| `/preguntas-frecuentas-y-dudas-para-despedidas/` | FAQ |
| `/actividades-para-despedidas-de-soltero-y-soltera/` | Actividades |
| `/aventuras-para-despedidas/` | Aventuras |
| `/herramientas-gratis-para-despedidas/` | Herramientas (tus 4 herramientas) |
| `/despedidas-de-soltero-y-soltera-en-vigo/` (y `-a-coruna`, `-sanxenxo`, `-ourense`, `-otras-ciudades`) | Páginas por ciudad |
| `/contacto-organizar-despedidas-en-galicia/` | Contacto |

**Los ~3.000 enlaces entrantes que mencionas apuntarán a estas páginas** (sobre todo a la portada). No he podido
verificar la cifra: hace falta Search Console (Enlaces) o una herramienta de enlaces. Esa auditoría hay que hacerla
**antes** de tocar nada.

## Regla de oro

> **La revista no debe ocupar la raíz.** Sustituir la portada de WordPress por la revista haría desaparecer una
> página comercial que ya posiciona «despedidas en Galicia» y que concentra los enlaces. Y la revista, que es
> editorial y humorística, no ocuparía su sitio.

## Opciones

| Opción | Cómo queda | Autoridad heredada | Dificultad | Recomendación |
| --- | --- | --- | --- | --- |
| **A. Subcarpeta** | `animaciongalicia.com/revista/` | **Total**: es el mismo sitio para Google | Media: hace falta un proxy inverso | **Recomendada** |
| B. Subdominio | `revista.animaciongalicia.com` | Parcial: Google lo trata casi como un sitio aparte, aunque la marca ayuda | Baja: un registro DNS en Vercel | Plan B si A no es viable |
| C. Raíz | `animaciongalicia.com/` | Total, pero destruye lo existente | — | **No** |

La revista ya está preparada para A: `NEXT_PUBLIC_BASE_PATH=/revista` (probado: canonicals, imágenes de vista previa,
sitemap, feed, datos estructurados, formularios, compartir, menú y redirecciones respetan la subcarpeta).

## Cómo se monta la opción A

Se despliega la revista en Vercel (con `NEXT_PUBLIC_BASE_PATH=/revista`) y el dominio principal **reenvía** las
rutas `/revista/*` a ese despliegue. El resto del dominio sigue siendo WordPress. Hay tres maneras, según dónde esté
el DNS y el alojamiento. **Son plantillas sin probar contra tu infraestructura**: hay que ensayarlas en un entorno de
pruebas antes de producción.

**1. Cloudflare Worker** (si el dominio pasa por Cloudflare; es lo más cómodo):

```js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/revista" || url.pathname.startsWith("/revista/")) {
      url.hostname = "TU-PROYECTO.vercel.app";
      return fetch(new Request(url, request));
    }
    return fetch(request);
  },
};
// Ruta del Worker: animaciongalicia.com/revista*
```

**2. Nginx** (si el WordPress lo sirve un Nginx tuyo):

```nginx
location ^~ /revista/ {
  proxy_pass https://TU-PROYECTO.vercel.app;
  proxy_ssl_server_name on;
  proxy_set_header Host TU-PROYECTO.vercel.app;
}
```

**3. Apache** (con `mod_proxy` y `mod_ssl`; en alojamientos compartidos suele no estar permitido):

```apache
SSLProxyEngine On
ProxyPreserveHost Off
ProxyPass        /revista/ https://TU-PROYECTO.vercel.app/revista/
ProxyPassReverse /revista/ https://TU-PROYECTO.vercel.app/revista/
```

Si ninguna es posible (alojamiento compartido sin proxy), se usa la **opción B** (subdominio) y se compensa con
enlaces cruzados entre WordPress y la revista.

## Lista de comprobación antes de publicar

1. **Auditoría de enlaces entrantes** (Search Console → Enlaces, o Semrush/Ahrefs): qué páginas reciben los enlaces y
   cuáles son las más valiosas. **No se cambia ni se borra ninguna URL actual.**
2. **No tocar el `robots.txt` de WordPress** salvo para comprobar que no bloquea `/revista/`. Hoy no lo bloquea
   (solo `/?s=`, `/search/`, `/wp-json/` y `AdsBot`).
3. **Sitemap de la revista**: `https://animaciongalicia.com/revista/sitemap.xml`. Se envía a Google Search Console
   aparte del de Yoast (Yoast no puede incluir sitemaps externos).
4. **Canonicals**: cada post tiene el suyo con `/revista/` (comprobado). Nada de canonical a la raíz.
5. **Variables en producción**: `NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com` (sin subcarpeta),
   `NEXT_PUBLIC_BASE_PATH=/revista`, `SITE_INDEXABLE=true` solo cuando todo esté probado.
6. **Enlaces cruzados** (cuando lo indiques): WordPress → revista desde «noticias-despedidas» y desde la portada;
   revista → páginas comerciales con enlaces contextuales y discretos. Al ser el mismo dominio, son enlaces internos
   y pasan autoridad a las páginas que convierten.
7. **Canibalización**: la revista no compite con las páginas por ciudad ni con la portada. Trabaja búsquedas
   informativas, largas y absurdas. Las comerciales («despedidas en Vigo», «packs») las siguen ganando las páginas
   actuales.
8. **Redirecciones**: no hacen falta mientras nada actual cambie de URL. Si algún día se renombra algo, 301 uno a uno.

## Las 4 herramientas

Cuando pases los dominios (test-despedidas, retranca, ruleta, gastosdespedidas) se hace **un post por herramienta**
(400–600 palabras, con ángulo gallego) que explica qué resuelve y enlaza a ella. Tres cosas a decidir con
antelación:

- ¿Las herramientas viven en dominios propios (enlace saliente) o también dentro de animaciongalicia.com
  (`/herramientas-gratis-para-despedidas/`)? Si es lo segundo, el enlace es interno y mejor.
- El interruptor `SITE.salientes` está apagado. Para estos enlaces propios se activará solo para esos dominios.
- Cada post necesita saber qué hace cada herramienta. Pásame para cada una: nombre, qué hace en una frase, URL.
