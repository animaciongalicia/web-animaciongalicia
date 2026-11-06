export type Section = "despedidas" | "cumpleanos" | "regalos" | "juegos";

export type ChatMessage = { who: string; text: string; out?: boolean };

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "chat"; title: string; messages: ChatMessage[] }
  | { type: "copylist"; title?: string; items: { label?: string; text: string }[] }
  | {
      type: "template";
      title?: string;
      fields: { key: string; label: string; value: string }[];
      messages: { label: string; text: string }[];
    }
  | { type: "steps"; title?: string; items: string[] }
  | { type: "checklist"; title?: string; items: string[] }
  | {
      type: "games";
      items: { name: string; duracion: string; tamano: string; reglas: string[] }[];
    }
  | {
      type: "ideas";
      title: string;
      budget: string;
      items: { titulo: string; texto: string }[];
    }
  | { type: "play" }
  | { type: "tool"; id: ToolId };

export type ToolId = "bingo" | "coartada" | "subasta" | "esquela" | "ruleta" | "tragaperras" | "rasca";

export type Article = {
  slug: string;
  section: Section;
  title: string;
  h1: string;
  description: string;
  /** Respuesta o recurso al principio. */
  answer: string;
  /** Tipo de problema, para filtrar o enlazar. */
  problema: string;
  tag: string;
  related: string[];
  blocks: Block[];
  /** Además de su sección, aparece listado en estas (p. ej. una herramienta en Juegos). */
  listIn?: Section[];
  /** Tiene su propia carpeta en app/ (no pasa por [section]/[slug]). */
  custom?: boolean;
};

export type Recomendacion = {
  articulo: string;
  titulo: string;
  /** Idea casera: siempre disponible. */
  casera: string;
  /** Enlaces externos. Vacío = no se muestra nada comercial. */
  enlaces: { label: string; url: string; comisionado: boolean }[];
};
