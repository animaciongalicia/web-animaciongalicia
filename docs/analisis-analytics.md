# Análisis de Analytics (GA4, exportación del 8-nov-2026)

Fuente: «Páginas y pantallas: título de página y clase de pantalla». Cuenta Animaciongalicia.com. Periodo: **1-ene-2026
a 8-nov-2026** (10,2 meses). Todos los usuarios. Se cruza con `docs/analisis-search-console.md`.

## 1. Cifras

| Medida | Valor |
| --- | ---: |
| Vistas totales | **1.262** (~124 al mes) |
| Vistas sin la página 404 | 1.046 |
| Vistas por usuario activo | 1,0–1,4 (casi nadie visita una segunda página) |
| **Eventos clave (conversiones)** | **0** |
| Ingresos | 0 |

**Es una web muy pequeña.** Cualquier decisión debe asumir ~100 visitas útiles al mes, no miles.

## 2. Páginas

| Página | Vistas | Usuarios | Interacción media (s) |
| --- | ---: | ---: | ---: |
| Portada («Packs y Ofertas 2026») | 427 | 358 | 11,0 |
| **Página no encontrada (404)** | **216** | 214 | **0,03** |
| «Despedidas en Galicia» (otra variante de título) | 74 | 54 | 7,1 |
| Actividades | 65 | 60 | 10,3 |
| Contacto | 65 | 62 | 6,9 |
| A Coruña | 59 | 53 | 10,2 |
| Guía | 58 | 51 | 5,4 |
| Aventuras de grupo | 50 | 47 | 2,9 |
| Sanxenxo | 47 | 46 | **19,8** |
| Vigo | 42 | 42 | 4,1 |
| Ourense | 41 | 41 | **0,9** |
| Herramientas | 41 | 41 | 3,7 |
| Preguntas frecuentes | 36 | 36 | 6,8 |
| Noticias | 33 | 33 | **0,3** |
| Cómo organizar… (post) | 5 | 5 | 0,6 |
| Otras ciudades | 2 | 2 | 0 |
| Versiones en portugués e inglés (5 filas) | 0 | — | — |

## 3. Lo que dicen

1. **La 404 es la segunda «página» más vista: 216 vistas, el 17 % del total, con 0,03 s de permanencia.** Son enlaces rotos
   o robots. Search Console solo lista 1 URL con 404. **Hay que averiguar qué rutas son** (en GA4: Informes → Páginas
   y pantallas, con la ruta de página de la 404, y su fuente/medio). Es lo primero que se arregla: cada visita
   perdida a una 404 es una visita que ya habías conseguido.
2. **Cero conversiones medidas.** Nadie ha definido qué es éxito (formulario, llamada, WhatsApp). Sin eso no se puede
   saber si algo funciona. La web nueva debe medir **al menos**: envío de cada formulario y clic en enlaces a las webs del grupo.
3. **Nadie navega:** 1,0–1,4 vistas por usuario. Es coherente con un enlazado interno débil. La barra lateral,
   «Sigue leyendo» y los enlaces internos de cola larga atacan justo esto.
4. **Ourense (0,9 s) y Noticias (0,3 s) no retienen a nadie.** Ourense tiene 849 impresiones en Google, así que atrae
   clics y los pierde al instante. Sanxenxo (19,8 s) es la que mejor funciona: es el modelo de contenido a imitar.
5. **Google no es la fuente principal:** la portada tiene 427 vistas y 84 clics desde Google. Cerca del 80 % llega por
   otro canal (directo, webs del grupo, redes). **Falta el informe de adquisición** para saberlo.
6. **Vigo tiene 42 vistas y casi cero impresiones en Google:** su tráfico llega de otra parte (probablemente las otras webs).
7. **Las versiones en portugués e inglés suman 0 vistas.** Se pueden ignorar (si vienen de un plugin de traducción,
   desaparecen con el WordPress).
8. **Contacto recibe 65 vistas** (5 %), pero sin eventos medidos no sabemos cuántas acabaron en contacto real.

## 4. Decisiones

- Resolver las rutas de la 404 antes del corte. Si son URLs antiguas con enlaces, redirigirlas a su equivalente.
- Medir conversiones desde el primer día (ver §2 del plan de migración sobre cookies y consentimiento).
- Convertir **Sanxenxo** en el patrón del resto de páginas de destino (es la que retiene).
- Rehacer **Ourense** y descartar **Noticias** (redirección).
- Pedir: informe de **adquisición** (fuente/medio), la **ruta de página** de la 404, el **embudo de contacto** y los datos
  de GA4 de cada web del grupo.
