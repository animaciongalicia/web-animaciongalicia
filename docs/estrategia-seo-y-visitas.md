# Cómo hacer que Menú Marrón posicione, aparezca en buscadores y tenga visitas

Plan realista, ordenado por prioridad. Ninguna cifra está prometida: hoy no hay datos propios (no hay analítica ni
Search Console) y el dominio es nuevo. Lo que sí se puede afirmar es qué hace falta y en qué orden.

## 0. Lo que hay que tener claro

- **Un dominio nuevo tarda meses en posicionar**, no semanas. Lo normal es ver impresiones en 4–8 semanas y clics
  estables en 3–6 meses, siempre que se publique con constancia.
- **«Despedida de soltera/soltero en Galicia» es un terreno de directorios y agencias** (en las búsquedas aparecen
  portales de ocio y de presupuestos). Una revista no gana ahí el primer día. Gana antes en **búsquedas
  informativas y largas**: «frases para camisetas de despedida», «retos para una despedida», «disfraces para el
  novio», «cumpleaños temáticos para adultos». Desde ahí se sube.
- **Las búsquedas comerciales** («contratar una despedida en Vigo») las ganan las páginas de la agencia, no la
  revista. La revista genera confianza y tráfico; la agencia convierte. Eso se enlaza más adelante, cuando lo
  indiques.
- Las dos páginas de la competencia que he podido leer (una lista de 50 retos para despedida de soltera y una guía de
  cumpleaños temáticos para adultos) son **textos genéricos sin ninguna referencia local**. Esa es la ventaja:
  contenido con Galicia, con experiencia real y con humor propio.

## 1. Semana 1: cimientos técnicos (lo que más rápido se hace)

1. **Dominio definitivo y HTTPS.** Una sola versión (con o sin `www`) y redirección de la otra.
2. **Activar la indexación**: `SITE_INDEXABLE=true` y `NEXT_PUBLIC_SITE_URL` en producción. Hasta entonces la web va
   con `noindex` a propósito.
3. **Google Search Console** (propiedad de dominio) y **enviar `/sitemap.xml`**. Es lo único que da datos reales de
   qué se busca y qué posiciones hay. **Bing Webmaster Tools** importando desde Search Console (5 minutos).
4. **Analítica sin cookies** (Plausible, Umami o Vercel Web Analytics): no obliga a poner banner de cookies y da
   visitas, páginas por sesión y de dónde vienen. Si se usa otra con cookies, antes hay que añadir el aviso y
   actualizar la política de cookies.
5. **Feed RSS** (`/feed.xml`, ya hecho) y **datos estructurados** (ya hechos: WebSite, Organization, Article y
   migas de pan).
6. Si el dominio ya tenía URLs: mapa de redirecciones antes de migrar.

## 2. Contenido: lo que de verdad mueve el posicionamiento

**Ritmo.** 2 posts por semana durante 8 semanas (16 posts) pesa más que cualquier ajuste técnico. Después, 1 por
semana. Mejor 400–800 palabras útiles que relleno.

**Qué escribir (por orden de rendimiento esperado):**

| Tipo | Ejemplos | Por qué funciona |
|---|---|---|
| Listas largas y evergreen | retos para despedida de soltera / de soltero, disfraces, frases, juegos para grupos, regalos por presupuesto | Se buscan todo el año y se comparten por WhatsApp |
| Respuestas a preguntas literales | «¿quién paga la despedida?», «¿cuánto se pone cada uno?», «¿qué se hace en una despedida mixta?» | Coinciden con lo que escribe la gente en el buscador |
| **Datos locales propios** | cuánto cuesta una despedida en Galicia según el plan, calendario de mejor época para ir a Sanxenxo/Vigo/A Coruña | Los datos originales son lo que más enlaces consigue (prensa local, blogs). Requiere datos reales |
| Guías de decisión | ¿barco, casa rural o ciudad?, ¿cena o plan activo? | Retienen y enlazan a varios posts |
| Estacionales | despedidas: publicar en febrero–abril para el pico de primavera–verano; cumpleaños: constante; cenas de empresa y Navidad: octubre–noviembre | Posicionar lleva meses: hay que publicar antes de la temporada |

**Lo más valioso y que solo puede dar la agencia:** anécdotas reales (anónimas) de las despedidas y eventos que
habéis organizado, fotos propias con consentimiento, errores que habéis visto repetirse, precios reales. Google
premia la experiencia de primera mano y ningún competidor genérico la tiene. **Pásame 10 anécdotas y las convierto
en posts.**

**Mantener vivos los posts:** revisar cada 6 meses y poner «actualizado en 2026». Un post de «frases para camisetas»
que se amplía cada año gana posiciones.

## 3. Enlazado interno (ya está montado, se mantiene así)

- Cada post lleva 1–3 «Lee también» dentro del texto, «Sigue leyendo» al final, anterior/siguiente y barra lateral.
- El texto de los enlaces es descriptivo, con la búsqueda local de forma natural. No hace falta «optimizar» más: un
  exceso de «despedida en Galicia» en cada enlace es contraproducente.
- Cuando haya 3–4 posts por tema, conviene una **página guía** por sección (por ejemplo «Todo sobre despedidas de
  soltera») que enlace a todos. Esas guías son las que acaban posicionando las búsquedas más competidas.

## 4. Autoridad (enlaces desde fuera)

Sin enlaces, un dominio nuevo sube despacio. Vías limpias:

1. **Vuestras otras webs** (las cuatro de la agencia) enlazando a los posts relevantes, con contexto y sin abusar.
2. **Prensa local** (Faro de Vigo, La Voz de Galicia, El Correo Gallego, El Progreso): una nota con un dato propio
   («cuánto cuesta una despedida en Galicia en 2026») es noticiable. Una revista de humor sin dato no lo es.
3. **Colaboraciones** con negocios locales (restaurantes, casas rurales, barcos) que enlacen a posts donde se les
   menciona con sentido. Nunca comprar enlaces: penaliza.
4. **Ficha de Google Business Profile** de la agencia (posicionamiento local de la agencia, no de la revista).

## 5. Distribución: de dónde pueden venir las primeras visitas

| Canal | Qué hacer | Por qué |
|---|---|---|
| **WhatsApp** | Botón «Mandar por WhatsApp» en cada post (ya está) | Es donde se organizan las despedidas: el grupo es el canal |
| **Pinterest** | Pines verticales con el titular de cada post | Pinterest es fuerte en bodas y despedidas y manda tráfico durante meses |
| **Instagram / TikTok** | Vídeos de 20–30 s: «3 frases chotas para camisetas», «el secuestro falso en 20 segundos» | Un mismo post da 3–4 piezas cortas |
| **Google Discover** | Imágenes grandes propias (≥1.200 px), titulares con gancho | Puede dar picos de visitas sin posicionar |
| **Newsletter semanal** | «El marrón de la semana»: suscripción suave al final de cada post | Es lo que hace volver. Requiere aviso de privacidad (ya hay base) |

## 6. Cómo se mide si funciona

- **Search Console:** impresiones, clics, posición media y consultas por post. Se mira cada 2 semanas, no cada día.
- **Analítica:** páginas por sesión (objetivo: que suba por encima de 1,5 gracias a la barra lateral y «Sigue
  leyendo») y tiempo en página.
- **Objetivos orientativos a 6 meses** (a recalibrar con datos reales): 20–40 posts publicados, 500–2.000
  impresiones al día en Search Console y los primeros posts en primera página para consultas largas. Son metas de
  trabajo, no una predicción.

## 7. Mejoras de producto que merecen la pena después

1. **Buscador interno** y filtro por tipo de plan (cuando haya más de 20 posts).
2. **Página guía por sección** (ver punto 3).
3. **Suscripción por correo** con el «marrón de la semana».
4. **Hub «Desde Galicia»** con los datos locales reales (precios, épocas) cuando existan, sin páginas por ciudad.
5. **«Lo más leído»** (necesita analítica).
6. **Imagen propia en cada post** (ilustración o foto con consentimiento): mejora Discover, Pinterest y el clic en
   redes.
7. **Enlaces a la agencia**, solo cuando indiques: un único bloque contextual por post, sin tono de venta.

## 8. Lo que no conviene hacer

- Publicar decenas de posts generados sin revisión ni experiencia real: Google lo detecta y no sube.
- Páginas por ciudad con el mismo texto cambiando el nombre.
- Comprar enlaces o intercambiarlos en masa.
- Poner analítica con cookies sin aviso.
