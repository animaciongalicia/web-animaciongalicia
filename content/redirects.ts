/**
 * Redirecciones 301 desde las URLs del WordPress anterior (animaciongalicia.com).
 *
 * NO SE REDIRIGEN (tienen la demanda, ver docs/analisis-search-console.md): estas 4 URLs concentran el 76 % de las
 * impresiones de las páginas. Hay que CONSERVARLAS y portar/mejorar su contenido antes del corte:
 *   /despedidas-de-soltero-y-soltera-en-a-coruna/   (2.775 impresiones)
 *   /despedidas-de-soltero-y-soltera-en-sanxenxo/   (2.521)
 *   /actividades-para-despedidas-de-soltero-y-soltera/ (2.189)
 *   /despedidas-de-soltero-y-soltera-en-ourense/    (849)
 *   /despedidas-de-soltero-y-soltera-en-vigo/       (42 vistas en Analytics)
 * Ya existen en la nueva web como páginas de «qué hacer de loco» (humor, sin tono de agencia).
 * Mientras no existan en la nueva web, el corte NO puede hacerse (darían 404).
 *
 * PROPUESTA — validar con Search Console y Analytics ANTES de publicar:
 *  - Una URL con tráfico o enlaces propios relevantes se conserva (o se redirige a su equivalente más cercano
 *    por INTENCIÓN de búsqueda, nunca «a la portada por defecto»: Google lo trata como soft 404).
 *  - `/herramientas-gratis-para-despedidas/` queda pendiente: se resuelve cuando lleguen los 4 dominios.
 *
 * Solo se aplican cuando la revista vive en la raíz del dominio (sin NEXT_PUBLIC_BASE_PATH).
 */
const GUIA = "/despedidas/guia-para-organizar-despedidas-en-galicia/";

export const REDIRECTS_WORDPRESS: { source: string; destination: string }[] = [
  { source: "/organizar-una-despedida-en-galicia-animaciongalicia", destination: GUIA },
  { source: "/guia-para-organizar-despedidas-en-galicia", destination: GUIA },
  { source: "/como-organizar-una-despedida-en-galicia-sin-discusiones-ni-caos", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-otras-ciudades", destination: "/actividades-para-despedidas-de-soltero-y-soltera/" },
  { source: "/aventuras-para-despedidas", destination: "/juegos/" },
  { source: "/preguntas-frecuentas-y-dudas-para-despedidas", destination: "/despedidas/preguntas-chotas-despedida-de-soltero/" },
  { source: "/noticias-despedidas", destination: "/" },
  { source: "/contacto-organizar-despedidas-en-galicia", destination: "/contacto/" },
  { source: "/category/despedidas-en-galicia", destination: "/" },
  { source: "/author/admin", destination: "/" },
  { source: "/feed", destination: "/feed.xml" },
];
