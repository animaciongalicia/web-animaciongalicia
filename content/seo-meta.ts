/**
 * <title> y descripción de cada post, pensados para Google (título ≤ 60 caracteres, sin la marca).
 * El h1 y el titular de las tarjetas siguen siendo `titulo` en content/piezas.ts.
 * Si un slug no está aquí, se usa `titulo` y la entradilla recortada a 160 caracteres.
 * IMPORTANTE: las 5 páginas con demanda (A Coruña, Vigo, Sanxenxo, Ourense, Actividades) conservan al principio la frase que ya posiciona.
 */
export const META_PIEZAS: Record<string, { title: string; description?: string }> = {
  "actividades-absurdas-despedidas-galicia": { title: "Actividades absurdas para despedidas en Galicia" },
  "despedida-en-a-coruna-que-hacer-de-loco": { title: "Despedidas de soltero y soltera en A Coruña: ocho locuras" },
  "despedida-en-vigo-que-hacer-de-loco": { title: "Despedidas de soltero y soltera en Vigo: ocho locuras" },
  "despedida-en-sanxenxo-que-hacer-de-loco": { title: "Despedidas de soltero y soltera en Sanxenxo: ocho locuras" },
  "despedida-en-ourense-que-hacer-de-loco": { title: "Despedidas de soltero y soltera en Ourense: ocho locuras" },
  "guia-para-organizar-despedidas-en-galicia": { title: "Guía para organizar una despedida en Galicia, paso a paso" },
  "barco-o-casa-rural-despedida-galicia": { title: "Barco o casa rural para una despedida en Galicia" },
  "mitos-despedidas-de-soltero": { title: "Mitos de las despedidas de soltero que nadie debería creer" },
  "diccionario-grupo-whatsapp-despedida": { title: "Diccionario del grupo de WhatsApp de una despedida" },
  "calendario-despedidas-galicia-cuando-hacerla": { title: "Cuándo hacer una despedida en Galicia: fechas a evitar" },
  "amigo-que-no-paga-la-despedida": { title: "Qué hacer si un amigo no paga la despedida" },
  "cumpleanos-sorpresa-cosas-que-salen-mal": { title: "Cumpleaños sorpresa: 10 cosas que salen mal" },
  "regalos-absurdos-que-si-se-pueden-usar": { title: "Regalos absurdos que sí se pueden usar" },
  "despedida-como-resacon-en-las-vegas": { title: "Si tu despedida acaba como Resacón en Las Vegas" },
  "ideas-locas-grupo-whatsapp-despedida": { title: "Ideas locas para el grupo de WhatsApp de una despedida" },
  "aplicaciones-compartir-gastos-despedida": { title: "Apps para compartir gastos en una despedida" },
  "secuestro-falso-despedida-de-soltero": { title: "El secuestro falso: despedida de soltero en Galicia" },
  "retos-de-plaza-declaracion-cantada-flashmob": { title: "Retos de plaza para despedidas: declaración y flashmob" },
  "frases-para-camisetas-despedida": { title: "Frases chorras para camisetas de despedida" },
  "disfraces-para-novio-o-novia-despedida": { title: "Disfraces baratos de Amazon para novio o novia" },
  "cumpleanos-tematicos-adultos-galicia": { title: "Cumpleaños temáticos para adultos en Galicia" },
  "preguntas-chorras-despedida-de-soltero": { title: "Preguntas chorras sobre despedidas de soltero" },
  "preguntas-chorras-despedida-de-soltera": { title: "Preguntas chorras sobre despedidas de soltera" },
  "preguntas-chorras-cumpleanos-adultos": { title: "Preguntas chorras sobre cumpleaños de adultos" },
  "preguntas-chorras-regalos": { title: "Preguntas chorras sobre regalos: ¿cuánto gastar?" },
  "que-regalar-en-un-cumpleanos-ideas-divertidas": { title: "Qué regalar en un cumpleaños: ideas divertidas" },
  "regalos-atrevidos-para-cumpleanos": { title: "Regalos atrevidos para un cumpleaños" },
  "regalar-un-bote-de-ahorro-con-dinero-ya-metido": { title: "Bote de ahorro con dinero ya dentro: regalo original" },
  "regalos-de-ultima-hora-cumpleanos": { title: "Regalos de última hora para un cumpleaños" },
  "regalo-colectivo-cumpleanos-sin-enemistades": { title: "Regalo colectivo: cómo recoger el dinero sin pelear" },
  "donde-celebrar-un-cumpleanos-en-galicia": { title: "Dónde celebrar un cumpleaños en Galicia (en casa no)" },
  "cumplir-30-40-50-como-celebrarlo": { title: "Cumplir 30, 40 o 50: cómo celebrarlo sin dramas" },
  "cumpleanos-con-poco-presupuesto": { title: "Cumpleaños con poco presupuesto: ideas que funcionan" },
  "brindis-gracioso-cumpleanos": { title: "Cómo hacer un brindis gracioso de cumpleaños" },
  "juegos-para-cumpleanos-de-adultos": { title: "Juegos para un cumpleaños de adultos" },
  "juego-yo-nunca-cena-amigos-preguntas": { title: "Yo nunca y otros juegos de cena entre amigos" },
  "regalos-para-suegros-que-no-fallan": { title: "Regalos para suegros que no fallan" },
  "amigo-invisible-oficina-ideas-y-normas": { title: "Amigo invisible en la oficina: ideas y normas" },
  "que-decir-cuando-no-te-gusta-el-regalo": { title: "Qué decir cuando no te gusta el regalo" },
  "regalos-para-quien-lo-tiene-todo": { title: "Regalos para quien lo tiene todo" },
  "tarta-de-cumpleanos-que-sale-mal": { title: "Tarta de cumpleaños en apuros: qué hacer si sale mal" },
  "musica-para-fiesta-de-cumpleanos-playlist": { title: "Música para una fiesta de cumpleaños: la playlist" },
  "invitacion-cumpleanos-whatsapp-que-contesten": { title: "Invitación de cumpleaños por WhatsApp que se contesta" },
  "cumpleanos-con-lluvia-plan-b-galicia": { title: "Cumpleaños con lluvia en Galicia: el plan B" },
  "ginkana-cumpleanos-adultos-en-casa-o-parque": { title: "Ginkana de cumpleaños para adultos: ideas y pruebas" },
  "karaoke-en-casa-reglas-para-que-no-acabe-mal": { title: "Karaoke en casa: reglas para que no acabe mal" },
  "cena-de-amigos-organizar-sin-caos": { title: "Cena de amigos: cómo organizarla sin que se líe" },
  "cena-de-grupo-restaurante-reservar-y-pagar": { title: "Cena de grupo en un restaurante: reservar y pagar" },
  "fiesta-de-jubilacion-como-celebrarla": { title: "Fiesta de jubilación: cómo celebrarla con humor" },
  "jubilacion-discurso-y-regalo-gracioso": { title: "Discurso y regalo para una jubilación" },
  "reencuentro-de-amigos-antiguos-companeros": { title: "Reencuentro de antiguos compañeros: cómo organizarlo" },
  "celebrar-con-amigos-un-aprobado-un-ascenso-un-piso": { title: "Celebrar un aprobado, un ascenso o un piso nuevo" },
  "despedida-de-amigo-que-se-va-a-vivir-fuera": { title: "Despedida de un amigo que se va a vivir fuera" },
  "bromas-cumpleanos-restaurante": { title: "Bromas y retos para un cumpleaños en un restaurante" },
};

/** <title> y descripción de las portadas de sección. */
export const META_SECCIONES: Record<string, { title: string; description: string }> = {
  despedidas: {
    title: "Todas las despedidas: ideas, guías y retos en Galicia",
    description:
      "Todos los artículos sobre despedidas de soltero y soltera en Galicia: guías, retos, juegos, dinero y organización, con humor y sin humo. Busca el que te toca.",
  },
  eventos: {
    title: "Eventos entre amigos: cenas, jubilaciones y fiestas",
    description:
      "Cenas de grupo, jubilaciones y celebraciones con amigos en Galicia: cómo organizarlas, qué decir y qué evitar, con humor y sin líos. Ideas prácticas y con cabeza.",
  },
  cumpleanos: {
    title: "Cumpleaños en Galicia: ideas, sorpresas y temas",
    description:
      "Ideas de cumpleaños temáticos, sorpresas que salen bien y los errores que conviene evitar, con humor y pensando en quien tiene que organizarlo en Galicia.",
  },
  regalos: {
    title: "Regalos, disfraces y camisetas para despedidas",
    description:
      "Qué regalar, qué vestir y qué escribir en la camiseta del novio: regalos absurdos que sí se pueden usar, disfraces baratos y frases chorras para el grupo.",
  },
  juegos: {
    title: "Juegos y retos para despedidas y cumpleaños",
    description:
      "Retos de calle, bromas con cabeza y dinámicas para que el grupo no se aburra en la despedida o el cumpleaños. Con avisos para no pasarse de listo.",
  },
};

/** Recorta una descripción a `max` caracteres: por frases si se puede; si no, por palabras con «…». */
export function recorta(s: string, max = 160): string {
  if (s.length <= max) return s;
  const frases = s.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [];
  let out = "";
  for (const f of frases) {
    if ((out + f).trim().length > max) break;
    out += f;
  }
  if (out.trim().length >= 90) return out.trim();
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "") + "…";
}
