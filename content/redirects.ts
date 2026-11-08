/**
 * Redirecciones 301 desde las URLs del WordPress anterior (animaciongalicia.com).
 *
 * PROPUESTA — validar con Search Console y Analytics ANTES de publicar:
 *  - Una URL con tráfico o enlaces propios relevantes se conserva (o se redirige a su equivalente más cercano
 *    por INTENCIÓN de búsqueda, nunca «a la portada por defecto»: Google lo trata como soft 404).
 *  - Las páginas por ciudad se redirigen a la guía pilar. Si Search Console demuestra que reciben tráfico propio,
 *    se pueden recuperar como páginas con contenido real.
 *  - `/herramientas-gratis-para-despedidas/` queda pendiente: se resuelve cuando lleguen los 4 dominios.
 *
 * Solo se aplican cuando la revista vive en la raíz del dominio (sin NEXT_PUBLIC_BASE_PATH).
 */
const GUIA = "/despedidas/guia-para-organizar-despedidas-en-galicia/";

export const REDIRECTS_WORDPRESS: { source: string; destination: string }[] = [
  { source: "/organizar-una-despedida-en-galicia-animaciongalicia", destination: GUIA },
  { source: "/guia-para-organizar-despedidas-en-galicia", destination: GUIA },
  { source: "/como-organizar-una-despedida-en-galicia-sin-discusiones-ni-caos", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-vigo", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-a-coruna", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-sanxenxo", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-ourense", destination: GUIA },
  { source: "/despedidas-de-soltero-y-soltera-en-otras-ciudades", destination: GUIA },
  { source: "/actividades-para-despedidas-de-soltero-y-soltera", destination: "/juegos/" },
  { source: "/aventuras-para-despedidas", destination: "/juegos/" },
  { source: "/preguntas-frecuentas-y-dudas-para-despedidas", destination: "/despedidas/preguntas-chotas-despedida-de-soltero/" },
  { source: "/noticias-despedidas", destination: "/" },
  { source: "/contacto-organizar-despedidas-en-galicia", destination: "/contacto/" },
  { source: "/category/despedidas-en-galicia", destination: "/" },
  { source: "/author/admin", destination: "/" },
  { source: "/feed", destination: "/feed.xml" },
];
