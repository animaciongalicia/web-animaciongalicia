export type Seccion = "despedidas" | "cumpleanos" | "regalos" | "juegos";

export type Fuente = {
  nombre: string;
  url: string;
  tipo: "video" | "articulo" | "hilo" | "imagen" | "audio" | "ficha";
  autor?: string;
  /** Fecha de la fuente (texto libre: «marzo de 2026»). */
  fecha?: string;
};

/** Solo reproductores oficiales. Nunca se copia ni se re-aloja un vídeo. */
export type Embed = { proveedor: "youtube"; id: string; titulo: string };

export type Pieza = {
  slug: string;
  seccion: Seccion;
  /** Etiqueta corta de la tarjeta. */
  tag: string;
  /** <title> y titular en listados (con la búsqueda literal). */
  titulo: string;
  /** H1 de la página. */
  h1: string;
  /** Entradilla: qué es y por qué te importa, en dos líneas. */
  dek: string;
  /** Fecha de publicación (ISO, AAAA-MM-DD). */
  fecha: string;
  fuentes: Fuente[];
  embed?: Embed;
  /** Texto propio, párrafo a párrafo. Es lo que aporta valor. */
  cuerpo: string[];
  /** Compilaciones: varios hallazgos dentro de una misma pieza. */
  items?: { titulo: string; texto: string; fuente?: Fuente }[];
  porQueFunciona?: string;
  /** Qué hacer con esto: situación y, si procede, mensaje para pegar. */
  queHacer?: { texto: string; mensaje?: string };
  /** Nota de verificación visible al lector. */
  verificacion?: string;
  /** Pieza con ángulo gallego: aparece en el bloque de Galicia. */
  galicia?: boolean;
  lugares?: string[];
  relacionadas?: string[];
  destacada?: boolean;
  /** Borrador: visible solo en preview (noindex). No se publica en producción. */
  borrador?: boolean;
};
