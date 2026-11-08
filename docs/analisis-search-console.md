# Análisis de Search Console (exportación del 8-nov-2026) y decisiones que se derivan

Fuentes: `Consultas.csv`, `Páginas.csv`, `Problemas críticos.csv`, `Top linking sites` y `Aparición en búsquedas`
(este último, vacío). **No se indica el periodo de las exportaciones**: hay que confirmarlo (Search Console conserva
16 meses como máximo). No hay datos de Analytics todavía.

## 1. Cifras

| Medida | Valor |
| --- | --- |
| Consultas distintas | 142 |
| Impresiones (consultas) | 8.285 |
| Clics (consultas) | 14 |
| CTR | **0,17 %** |
| Impresiones (páginas) | 10.907 |
| Clics (páginas) | 94 (84 en la portada) |
| Sitios que enlazan | **40** |
| Páginas que enlazan | **99** (todas a **una** URL de destino, presumiblemente la portada) |

## 2. Dónde está la demanda (consultas agrupadas)

| Grupo | Consultas | Impresiones | Clics | Posición media |
| --- | ---: | ---: | ---: | ---: |
| Galicia (genérico) | 15 | 2.789 | 5 | 28,1 |
| Sanxenxo / Portonovo | 21 | 2.418 | 0 | 28,8 |
| A Coruña | 20 | 1.917 | 0 | 24,4 |
| Actividades / ideas | 23 | 638 | 0 | **66,1** |
| Ourense | 7 | 188 | 0 | 25,1 |
| Organizar (despedida) | 22 | 174 | 0 | 64,6 |
| Marca (Animación Galicia) | 4 | 61 | 9 | 8,0 |
| Vigo / Baiona | 6 | 37 | 0 | 32,8 |
| Otras ciudades | 5 | 11 | 0 | 61,3 |

Lectura:

1. **La demanda existe y es local**: Galicia en genérico, Sanxenxo y A Coruña suman casi 7.100 impresiones.
2. **No se convierte en clics porque el posicionamiento es malo**: casi todo está en página 3–4 (posiciones 24–35).
3. **Solo hay una oportunidad cercana**: «despedidas en galicia» (548 impresiones, **posición 11,08**) y
   «despedidas galicia» (156, posición 17). Entrar en el top 10 con la portada es el objetivo más rentable.
4. **«Actividades» y «organizar» están hundidas** (posición 65–75): hay contenido que no responde a la búsqueda.
   Es justo el tipo de contenido que la revista sí puede construir.
5. **Vigo prácticamente no aparece** (37 impresiones), con las dos webs `despedidasvigo.com` y `despedidas-vigo.es` del
   grupo. Hay que mirarlo en esas webs.
6. **La marca casi no se busca** (61 impresiones). El nombre no sostiene el tráfico: hay que ganarlo con búsquedas sin marca.

## 3. Qué páginas tienen demanda

| Página | Impresiones | Clics | Posición |
| --- | ---: | ---: | ---: |
| `/` | 2.305 | 84 | 14,3 |
| `/despedidas-de-soltero-y-soltera-en-a-coruna/` | 2.775 | 3 | 29,6 |
| `/despedidas-de-soltero-y-soltera-en-sanxenxo/` | 2.521 | 3 | 27,7 |
| `/actividades-para-despedidas-de-soltero-y-soltera/` | 2.189 | 1 | 51,6 |
| `/despedidas-de-soltero-y-soltera-en-ourense/` | 849 | 3 | 43,8 |
| `/organizar-una-despedida-en-galicia-animaciongalicia/` | 139 | 0 | 57,4 |
| `/herramientas-gratis-para-despedidas/` | 26 | 0 | 7,7 |
| `/contacto-organizar-despedidas-en-galicia/` | 20 | 0 | 22,7 |

**Las páginas por ciudad y la de actividades concentran el 76 % de las impresiones de las páginas**
(8.334 de 10.907). Aunque rindan mal, son la demanda. **Decisión: no se redirigen. Se conservan las URLs y se mejora el
contenido.** Esto corrige lo propuesto antes (redirigirlas a la guía).

Las páginas **sin ninguna impresión** (guía, FAQ, aventuras, noticias, post, Vigo, «otras ciudades») no están indexadas
o no se muestran: redirigirlas no cuesta nada.

## 4. Problemas de indexación

| Motivo | Páginas |
| --- | ---: |
| Descubierta: actualmente sin indexar | **9** |
| Rastreada: actualmente sin indexar | 1 |
| Página con redirección | 3 |
| No se ha encontrado (404) | 1 |

**10 de las 15 páginas del sitio no están indexadas.** Para un dominio de 15 años es una señal de calidad o de
rastreo débil. La migración a un sitio rápido, con enlazado interno fuerte y un sitemap limpio puede ayudar, pero
**no es automático**: hay que solicitar indexación de las URLs clave tras el corte y vigilar la cobertura.
El 404 y las 3 redirecciones hay que identificarlos en Search Console (pestaña Indexación → Páginas) y resolverlos.

## 5. Enlaces entrantes (corregir una expectativa)

- **40 sitios y 99 páginas** que enlazan. No 3.000. Si esa cifra viene de otra herramienta, probablemente cuenta enlaces
  repetidos del mismo sitio.
- **Una buena parte son tus propias webs**: `ginkanas.es` (32 páginas), `humoramarillocoruna.com` (8),
  `despedidasourense.com`, `los7pc.com`. Cuentan, pero no son autoridad independiente.
- **Independientes**: wordpress.com y blogspot.com (blogs), `absolutourense.com`, `despedidasdesolterosmalaga.com`,
  `enlacesdeturismo.com`, `enriquedans.com`, `publiespectaculos.com`, `turismoenxebre.com`, `queverengalicia.com`,
  `paginasamarillas.es`, `galiciamaxica.eu` y unos 25 más con un enlace cada uno.
- **Todos apuntan a una sola página.** Cualquier otra URL parte de cero en enlaces, y por eso el enlazado interno pesa tanto.
- Apunte de ortografía: el informe dice `ginkanas.es`; la lista del grupo dice `ginkanas.es`. Confirmar cuál es.

## 6. Decisiones que cambian

| Antes | Ahora (con datos) |
| --- | --- |
| Redirigir las páginas por ciudad a la guía | **Conservar** A Coruña, Sanxenxo, Ourense y Actividades con contenido portado y mejorado |
| Título de portada «Menudo marrón organizar este evento» | **Mantener el H1**, pero el `<title>` y la primera frase llevan «Despedidas en Galicia» (la consulta que hoy da 84 clics) |
| «El nombre pesa en Galicia» | Dato: la marca casi no se busca. Hay que ganar posiciones sin marca |
| 3.000 enlaces | ~99 páginas de 40 sitios, parte propias |
| «Dominio de 15 años = ventaja inmediata» | Ventaja real pero modesta: 10 de 15 páginas sin indexar y posiciones 25–35 |

## 7. Plan de ataque por orden de retorno

1. **Portada (`/`) → top 10 de «despedidas en galicia»** (hoy en 11,08). Título, H1/primer párrafo y enlaces internos
   con esa frase. Es el cambio más barato con el mayor efecto esperado.
2. **Mantener y reforzar las 4 URLs con demanda** (A Coruña, Sanxenxo, Ourense, Actividades). Portar su contenido,
   ampliarlo y enlazarlas desde los posts de la revista.
3. **Dos pilares nuevos para los términos con más volumen disperso**: «Despedida de soltera en Galicia» y «Despedida de
   soltero en Galicia» (≈1.500 impresiones en variantes, posición 30–35). La guía actual los cubre en general; los
   pilares los trabajan por separado.
4. **Un pilar de «Actividades para despedidas»** muy superior al actual (posición 52–79). Los posts de retos, barco
   frente a casa rural y secuestro falso lo alimentan con enlaces internos.
5. **Un pilar «Organizar una despedida»** (ya existe: la guía) para las consultas «organizar despedidas» (posición 65+).
6. **Indexación**: solicitar indexación de las URLs clave tras el corte; sitemap limpio; vigilar cobertura.

## 8. Interlinking de cola larga (matriz objetivo ← apoyo)

Regla: **cada página-objetivo recibe 3–6 enlaces internos contextuales** desde posts de apoyo, con anclas descriptivas y
variadas (nunca la misma frase exacta repetida). Está implementado en `content/enlaces.ts` (enlaces insertados a mitad
del texto de cada post).

| Objetivo (consulta) | Página | Posts de apoyo → ancla sugerida |
| --- | --- | --- |
| despedidas en galicia | `/` | Todos los posts, por el logotipo y migas |
| organizar despedidas (soltero/soltera) | Guía pilar | `calendario` → «cuándo hacer una despedida en Galicia»; `amigo-que-no-paga` → «cómo organizar una despedida sin discusiones»; `aplicaciones-compartir-gastos` → «organizar los gastos de una despedida» |
| actividades despedida de soltero/soltera | Pilar Actividades (por crear) | `secuestro-falso` → «actividades originales para una despedida de soltero»; `retos-de-plaza` → «retos y actividades de calle»; `barco-o-casa-rural` → «actividades para una despedida en Galicia» |
| despedidas A Coruña / Sanxenxo / Ourense | Páginas conservadas (por portar) | `calendario`, `barco-o-casa-rural`, `despedida-como-resacon` → anclas con la ciudad (cuando existan las páginas) |
| despedida de soltera en galicia | Pilar soltera (por crear) | `preguntas-chorras-soltera`, `frases-camisetas`, `ideas-locas-grupo-whatsapp` |
| despedida de soltero en galicia | Pilar soltero (por crear) | `preguntas-chorras-soltero`, `mitos`, `secuestro-falso`, `despedida-como-resacon` |
| cumpleaños en galicia | `cumpleanos-tematicos-adultos-galicia` | `cumpleanos-sorpresa`, `preguntas-chorras-cumpleanos` |
| regalos de cumpleaños / despedida | `regalos-absurdos-*` | `frases-camisetas`, `disfraces`, `preguntas-chorras-regalos` |

**Preguntas con ancla propia:** cada pregunta de los posts «preguntas chorras» tiene un `id` (por ejemplo
`/despedidas/preguntas-chorras-despedida-de-soltero/#puede-el-novio-llevarse-el-movil-a-su-despedida`). Se enlazan desde la
portada («lo que se pregunta») y permiten a Google mostrar enlaces directos a cada pregunta.

## 9. El grupo de webs: canibalización y enlaces

Hay 18 dominios, varios para el mismo destino (tres de Sanxenxo, dos de Vigo, más A Coruña, Ourense, Galicia y Oporto).
Riesgos y decisiones pendientes:

1. **Canibalización dentro del grupo**: si `despedidassanxenxo.es`, `despedidas-sanxenxo.com`,
   `despedidasplayasanxenxo.com` y `animaciongalicia.com/…-sanxenxo/` compiten por «despedidas en Sanxenxo»,
   Google elige una y relega las otras. Hace falta **Search Console de cada dominio** (Páginas y Consultas) para decidir
   cuál «posee» cada consulta.
2. **Enlaces entre webs propias**: aportan, pero **no son autoridad independiente** y un patrón excesivo de enlaces
   entre muchos dominios propios puede considerarse un esquema de enlaces. Conviene enlazar con criterio (contextual,
   pertinente) y no con bloques de 18 enlaces en el pie de cada web.
3. **Posible consolidación**: dominios con poco tráfico y contenido repetido se pueden fusionar con 301 en el dominio
   que posee la consulta. Es una decisión estratégica para más adelante, con datos de cada web.
4. **Hoy**: en `/animacion-galicia/` se listan las 18 webs como **texto** (sin enlaces), a la espera de que se indique
   activar enlaces salientes.

## 10. Datos que faltan (a pasar)

1. Periodo de las exportaciones y las exportaciones de **Rendimiento por fecha** (para ver la tendencia).
2. Search Console de **cada dominio del grupo** (Páginas y Consultas) y su informe de enlaces.
3. Analytics (GA4): páginas de destino, fuentes, conversiones (¿formulario, teléfono, WhatsApp?). No sé qué se mide como éxito.
4. El WordPress (exportación) y el contenido de las 15 URLs, sobre todo A Coruña, Sanxenxo, Ourense y Actividades.
5. Qué ofrecían los packs de la portada.
