# Checklist: cambio de DNS y lanzamiento de animaciongalicia.com

Estado técnico verificado el 9-nov-2026 sobre la compilación de producción en local (ver «Resultado de la revisión» al final).

## 0. Lo que NO se puede romper: el correo

`info@animaciongalicia.com` es el correo legal y el de los formularios. Depende de los registros **MX y TXT** (SPF, DKIM, DMARC) del dominio.

- **No toques MX ni TXT.** Solo se cambian el registro del dominio raíz (A/AAAA) y el de `www` (CNAME).
- Antes de tocar nada, **copia todos los registros actuales** (captura o exportación): A, AAAA, CNAME, MX, TXT, SRV, CAA.
- Si el DNS lo lleva el hosting del WordPress y vas a pasar el DNS a Vercel (nameservers), hay que recrear **todos** esos registros allí. Más seguro: mantener el DNS donde está y solo cambiar A y CNAME.
- Guarda el TXT `google-site-verification` (Search Console) y cualquier otro de verificación (GA/GTM, Meta, etc.).

## 1. Antes del cambio (24-48 h antes)

- [ ] Bajar el TTL de los registros que vas a cambiar a 300 s.
- [ ] Copia completa del WordPress (archivos y base de datos). No cancelar el alojamiento hasta 30-60 días después.
- [ ] En Vercel: proyecto conectado a la rama de producción, build correcto.
- [ ] Variables de entorno de producción (Vercel → Settings → Environment Variables):
  - `NEXT_PUBLIC_SITE_URL=https://animaciongalicia.com` (sin barra final)
  - `SITE_INDEXABLE=true`
  - `NEXT_PUBLIC_BASE_PATH` vacío
  - `NEXT_PUBLIC_GA_ID=G-JY6XXV50MM` (opcional: es el valor por defecto)
- [ ] Vercel → Domains: añadir `animaciongalicia.com` y `www.animaciongalicia.com`. **El dominio sin `www` debe ser el principal** y `www` debe redirigir a él (el canonical de la web, el sitemap y las URLs del WordPress antiguo son sin `www`). Por defecto Vercel suele hacerlo al revés: comprobar la flecha de redirección en cada dominio y corregirla.
- [ ] Si prefieres `www` como principal, cambia entonces `NEXT_PUBLIC_SITE_URL` a `https://www.animaciongalicia.com`. Lo importante es que el dominio principal, el canonical y la variable coincidan.
- [ ] Anotar los valores DNS que Vercel muestre para el dominio y para `www` (usa esos, no los de memoria).

## 2. El cambio

- [ ] En el DNS: registro A (y AAAA si existe) del dominio raíz → valor de Vercel. CNAME de `www` → valor de Vercel.
- [ ] Esperar la propagación (con TTL de 300 s, minutos) y comprobar que Vercel marca el dominio como válido y emite el certificado HTTPS.
- [ ] Hacerlo fuera de horas punta.

## 3. Comprobaciones inmediatas (primera hora)

- [ ] `https://animaciongalicia.com/` carga con candado, sin avisos.
- [ ] `https://www.animaciongalicia.com/` redirige a la versión sin `www`.
- [ ] `http://` redirige a `https://`.
- [ ] `/robots.txt` permite todo y apunta al sitemap; `/sitemap.xml` lista las páginas; `/llms.txt` responde.
- [ ] Ver el código fuente de la portada: `<meta name="robots" content="index, follow">` y canonical a `https://animaciongalicia.com/`.
- [ ] Redirecciones del WordPress: con el sitio en producción, `BASE=https://animaciongalicia.com node tests/redirects-wp.js` (debe decir TODO OK).
- [ ] URLs con demanda: `node tests/urls-conservadas.js` (las 5 en 200).
- [ ] Enviar un correo a `info@animaciongalicia.com` y comprobar que llega (el MX no debe haberse tocado).
- [ ] Probar los formularios de Contacto: abren el programa de correo con el destinatario correcto.
- [ ] Aceptar cookies y comprobar en GA4 (tiempo real) que registra la visita.

## 4. Search Console y analítica (primeras semanas)

- [ ] Search Console: la propiedad de dominio sigue valiendo. Enviar `https://animaciongalicia.com/sitemap.xml`.
- [ ] Inspeccionar y solicitar indexación de: portada, las 5 páginas con demanda (A Coruña, Vigo, Sanxenxo, Ourense, Actividades) y la guía.
- [ ] Revisar **cobertura y errores 404** a diario las dos primeras semanas; cada 404 relevante, una redirección.
- [ ] Vigilar caídas de posición en las 5 páginas con demanda (títulos nuevos más cortos).
- [ ] Favicon: Google tarda días o semanas en mostrarlo. Comprobar que `https://animaciongalicia.com/favicon.ico` carga.
- [ ] GA4 → Administrar → Recopilación de datos → Retención: 2 meses (predeterminado) o hasta 14.
- [ ] No borrar el WordPress hasta que el tráfico esté estable (30-60 días).

## 5. Si algo falla (vuelta atrás)

Volver a poner los registros A/CNAME anteriores (los que copiaste en el paso 0). Con TTL de 300 s, la vuelta atrás tarda minutos.

## Resultado de la revisión técnica (9-nov-2026)

| Área | Resultado |
| --- | --- |
| Lighthouse móvil (simulado) | Rendimiento 95-99, Accesibilidad 100, Buenas prácticas 100, SEO 100. LCP 0,8 s en portada; 2,5-2,9 s en páginas con foto grande (se aplicó `fetchpriority=high`, calidad 70 y menos tamaños de imagen para bajarlo). |
| Accesibilidad (axe-core, 57 páginas) | 0 incidencias. |
| SEO | 0 títulos, H1 o descripciones duplicados; 0 enlaces internos rotos; títulos ≤ 60; canonical, Open Graph y JSON-LD (WebSite, Organization con logo, Article, BreadcrumbList y FAQPage en los posts de preguntas). |
| Redirecciones WordPress | 19 redirecciones, 51 comprobaciones: con barra final, un solo salto permanente; sin barra, se añade la barra y se redirige. Sitemaps de Yoast/WP y la página de herramientas incluidos. |
| GEO / IA | `/llms.txt` generado a partir de los contenidos; datos estructurados; respuestas al principio (entradilla); robots permite rastreadores de IA. |
| Seguridad | nosniff, Referrer-Policy, Permissions-Policy, HSTS, X-Frame-Options. Sin CSP estricta (GA y Next usan scripts en línea). |
| Privacidad | Banner con aceptar/rechazar; Google Analytics solo tras aceptar y solo en producción; formularios sin servidor; fotos sin metadatos ni ubicación. |
