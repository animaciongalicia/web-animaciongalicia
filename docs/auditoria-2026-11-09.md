# Auditoría desde varios puntos de vista (9-nov-2026)

Hecha sobre la compilación de producción en local (57 URLs del sitemap), móvil y escritorio. No hay datos de usuarios
reales ni se ha probado en Vercel.

## Qué se midió

| Punto de vista | Cómo | Resultado |
| --- | --- | --- |
| Accesibilidad | axe-core (WCAG 2.0/2.1/2.2 AA + buenas prácticas) en las 57 páginas | 1 aviso («landmark-unique», dos navegaciones con la misma etiqueta). **Corregido.** |
| SEO técnico | Títulos, H1 y descripciones duplicados; enlaces internos rotos o con redirección | 0 duplicados, 0 rotos. Títulos ≤ 60. |
| Rendimiento (móvil, 4G lento, CPU ×4) | LCP, CLS | Portada LCP 1,3 s; post 1,0 s; sección 0,6 s. CLS 0,012. Buenos. |
| Seguridad | Cabeceras HTTP, rutas | Faltaban cabeceras de seguridad: añadidas (nosniff, referrer, permisos, HSTS, X-Frame-Options). `robots.txt` apuntaba a una ruta `/api/` que ya no existe: corregido. |
| Enlazado interno | Enlaces entrantes en el cuerpo de las páginas clave | Sanxenxo 3 y Ourense 3 eran pocos: se añaden 2 enlaces desde el calendario y el barco. Un post huérfano: corregido. |
| Contenido y marca | Frases repetidas, uso de «nosotros» | Sin «nosotros/nuestro». Solo se repiten titulares. Plantilla muy uniforme (ver pendientes). |
| Imágenes | Resolución real frente a tamaño mostrado | Las fotos de origen miden 600–1280 px: en pantalla grande y retina se ven blandas (ver pendientes). |

## Pendiente (lo decides tú o necesita contenido)

1. **Fotos de cabecera de más resolución** (≥ 1600 px de ancho). Las actuales son pequeñas y los posts nuevos no tienen foto.
2. **Plantilla de los posts demasiado uniforme.** Los 22 posts nuevos cierran igual (caja «frase»), con el mismo orden de cajas. Variar formatos: un test, una lista corta, una conversación, un «antes y después».
3. **Contenido local de Sanxenxo, Ourense, A Coruña y Vigo** con detalles reales de sitios (hoy es genérico a propósito).
4. **Eventos de analítica**: solo existe `generate_lead`. Faltan clics salientes a las webs del grupo y uso del buscador.
5. **CSP estricta**: no se ha puesto porque Google Analytics y Next usan scripts en línea. Se puede añadir con nonce cuando se decida la analítica definitiva.
6. **URLs que daban 404 en el WordPress** (216 vistas en GA4) y revisión de las 5 páginas conservadas con el contenido real del WordPress.
7. **Vercel**: conectar el proyecto, dominio y variables (`NEXT_PUBLIC_SITE_URL`, `SITE_INDEXABLE=true`).
8. **Revisión legal profesional** de las tres páginas legales.
