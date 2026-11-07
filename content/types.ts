export type Seccion = "despedidas" | "cumpleanos" | "regalos" | "juegos";

export type Fuente = {
  nombre: string;
  url: string;
  tipo: "video" | "articulo" | "hilo" | "imagen" | "audio" | "ficha";
};

/** Solo reproductores oficiales. Nunca se copia ni se re-aloja un vídeo. */
export type Embed = { proveedor: "youtube"; id: string; titulo: string };

export type Bloque =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "caja"; tipo: "idea" | "ojo" | "dato" | "frase"; titulo?: string; x: string | string[] }
  | { t: "cita"; x: string; autor?: string }
  | { t: "leetambien"; slug: string };

export type Pieza = {
  slug: string;
  seccion: Seccion;
  /** Etiqueta corta de la tarjeta. */
  tag: string;
  /** <title> y titular en listados (con la búsqueda literal). */
  titulo: string;
  /** H1 de la página. */
  h1: string;
  /** Entradilla: qué es y por qué te importa. */
  dek: string;
  /** Fecha de publicación (ISO, AAAA-MM-DD). */
  fecha: string;
  bloques: Bloque[];
  /** Hallazgos de la red (solo si se citan). Los enlaces salientes están apagados por defecto. */
  fuentes?: Fuente[];
  embed?: Embed;
  /** Pieza con ángulo gallego. */
  galicia?: boolean;
  relacionadas?: string[];
  destacada?: boolean;
  /** Borrador: visible solo en preview (noindex). No se publica en producción. */
  borrador?: boolean;
};
