/**
 * Enlaces internos "desde Galicia" para la barra lateral y el pie.
 * El texto del enlace lleva la búsqueda local de forma natural (sutil: son titulares, no etiquetas).
 */
export const DESDE_GALICIA = [
  { texto: "Despedida de soltero en Galicia: el secuestro falso", slug: "secuestro-falso-despedida-de-soltero" },
  { texto: "Despedida de soltera en Galicia: ideas para el grupo", slug: "ideas-locas-grupo-whatsapp-despedida" },
  { texto: "Cumpleaños temáticos para adultos en Galicia", slug: "cumpleanos-tematicos-adultos-galicia" },
  { texto: "Cómo organizar la despedida sin pelearte por el dinero", slug: "aplicaciones-compartir-gastos-despedida" },
];

/** Enlaces del pie, columna «Para pasar el rato»: lo más divertido, con textos cortos. */
export const PIE_DIVERTIDO = [
  { texto: "La despedida que acaba como Resacón", slug: "despedida-como-resacon-en-las-vegas" },
  { texto: "El secuestro falso", slug: "secuestro-falso-despedida-de-soltero" },
  { texto: "Frases chorras para camisetas", slug: "frases-para-camisetas-despedida" },
  { texto: "Ideas locas para el grupo de WhatsApp", slug: "ideas-locas-grupo-whatsapp-despedida" },
];

/** Portada: dos historias secundarias junto a la principal (la `destacada`). */
export const PORTADA_SECUNDARIAS = [
  "guia-para-organizar-despedidas-en-galicia",
  "barco-o-casa-rural-despedida-galicia",
];

/** Portada: «¿Qué marrón te ha tocado?». Atajos por situación hacia el post que la resuelve. */
export const SITUACIONES = [
  { texto: "Nadie contesta en el grupo", sub: "Ideas para mover el chat", slug: "ideas-locas-grupo-whatsapp-despedida" },
  { texto: "Un amigo no ha pagado", sub: "Mensajes y normas", slug: "amigo-que-no-paga-la-despedida" },
  { texto: "No sabemos qué plan elegir", sub: "Barco o casa rural", slug: "barco-o-casa-rural-despedida-galicia" },
  { texto: "¿Qué fecha elegimos?", sub: "Calendario gallego", slug: "calendario-despedidas-galicia-cuando-hacerla" },
  { texto: "Cumpleaños sorpresa", sub: "Lo que puede salir mal", slug: "cumpleanos-sorpresa-cosas-que-salen-mal" },
  { texto: "No sé qué regalar", sub: "Absurdos que sí se usan", slug: "regalos-absurdos-que-si-se-pueden-usar" },
];

/**
 * Cabecera de cada sección (salvo Despedidas, que usa SITUACIONES en la portada): «qué marrón te ha tocado»,
 * con el tono de cada una. Cada ficha lleva al post que lo resuelve.
 */
export const SITUACIONES_SECCION: Record<string, { titulo: string; items: { texto: string; sub: string; slug: string }[] }> = {
  cumpleanos: {
    titulo: "¿Qué cumple te ha tocado?",
    items: [
      { texto: "«Organízalo tú, que eres el de las ideas»", sub: "Dónde celebrarlo (en casa no)", slug: "donde-celebrar-un-cumpleanos-en-galicia" },
      { texto: "Cumplo 30, 40 o 50 y no me hables", sub: "Cómo celebrarlo sin dramas", slug: "cumplir-30-40-50-como-celebrarlo" },
      { texto: "Hay que hacer una sorpresa", sub: "Lo que suele salir mal", slug: "cumpleanos-sorpresa-cosas-que-salen-mal" },
      { texto: "Ni dinero ni ganas", sub: "Un cumple con poco presupuesto", slug: "cumpleanos-con-poco-presupuesto" },
      { texto: "Me toca decir unas palabras", sub: "Un brindis sin llorar (o sí)", slug: "brindis-gracioso-cumpleanos" },
      { texto: "¿Y si llueve?", sub: "El plan B gallego de toda la vida", slug: "cumpleanos-con-lluvia-plan-b-galicia" },
    ],
  },
  eventos: {
    titulo: "¿Qué sarao te ha caído?",
    items: [
      { texto: "Una cena de amigos que no se cierra", sub: "Fecha, sitio y plazo", slug: "cena-de-amigos-organizar-sin-caos" },
      { texto: "Doce en una mesa y una sola cuenta", sub: "Reservar, pedir y pagar", slug: "cena-de-grupo-restaurante-reservar-y-pagar" },
      { texto: "Se jubila alguien y toca fiesta", sub: "Con humor y con cariño", slug: "fiesta-de-jubilacion-como-celebrarla" },
      { texto: "Te han pedido el discurso", sub: "Y un regalo que no sea un reloj", slug: "jubilacion-discurso-y-regalo-gracioso" },
      { texto: "Reencuentro: ¿vendrá alguien?", sub: "Juntar a toda la clase", slug: "reencuentro-de-amigos-antiguos-companeros" },
      { texto: "Un amigo se va a vivir fuera", sub: "Despedirlo sin llorar", slug: "despedida-de-amigo-que-se-va-a-vivir-fuera" },
    ],
  },
  regalos: {
    titulo: "¿Qué regalo no te sale?",
    items: [
      { texto: "Es hoy y no tienes nada", sub: "Rescate en 60 minutos", slug: "regalos-de-ultima-hora-cumpleanos" },
      { texto: "Lo tiene todo (y lo que no, no lo quiere)", sub: "Regalar a los imposibles", slug: "regalos-para-quien-lo-tiene-todo" },
      { texto: "Los suegros, otra vez", sub: "Sin meterte en un lío", slug: "regalos-para-suegros-que-no-fallan" },
      { texto: "El regalo no te gusta y se te nota", sub: "Qué decir y cómo decirlo", slug: "que-decir-cuando-no-te-gusta-el-regalo" },
      { texto: "Quieres un regalo con cara dura", sub: "Atrevidos, con límites", slug: "regalos-atrevidos-para-cumpleanos" },
      { texto: "Regalar dinero, pero con gracia", sub: "El bote con los billetes dentro", slug: "regalar-un-bote-de-ahorro-con-dinero-ya-metido" },
    ],
  },
  juegos: {
    titulo: "¿Qué grupo te toca animar?",
    items: [
      { texto: "El grupo se aburre", sub: "20 juegos sin vergüenza ajena", slug: "20-juegos-y-retos-para-despedidas-sin-verguenza-ajena" },
      { texto: "¿Gincana o escape room?", sub: "Para qué grupo sirve cada una", slug: "gincanas-y-escape-rooms-para-despedidas-en-galicia" },
      { texto: "La cena se ha quedado muda", sub: "Preguntas que dan guerra", slug: "juego-yo-nunca-cena-amigos-preguntas" },
      { texto: "Hay que cantar en una plaza", sub: "Dos retos de calle", slug: "retos-de-plaza-declaracion-cantada-flashmob" },
      { texto: "Han sacado el karaoke", sub: "Reglas para sobrevivir", slug: "karaoke-en-casa-reglas-para-que-no-acabe-mal" },
      { texto: "Quieres que lo haga otro", sub: "Herramientas gratis", slug: "herramientas-gratis-para-organizar-una-despedida" },
    ],
  },
};
