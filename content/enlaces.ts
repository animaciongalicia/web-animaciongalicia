/**
 * Interlinking de cola larga. Cada post recibe 2–3 enlaces contextuales insertados a mitad del texto,
 * con anclas descriptivas y variadas (no repetir la misma frase exacta). Esta es la ÚNICA tabla que hay que
 * tocar para cambiar el grafo de enlaces internos. Ver docs/analisis-search-console.md §8.
 *
 * Reglas: ancla = frase natural que alguien buscaría; el destino debe tener la misma intención que la ancla;
 * cada página-objetivo recibe de 3 a 6 enlaces; ninguna ancla se repite igual hacia destinos distintos.
 */
export type EnlaceInterno = { slug: string; texto: string };

const GUIA = "guia-para-organizar-despedidas-en-galicia";
const BARCO = "barco-o-casa-rural-despedida-galicia";
const CALENDARIO = "calendario-despedidas-galicia-cuando-hacerla";
const PAGA = "amigo-que-no-paga-la-despedida";
const APPS = "aplicaciones-compartir-gastos-despedida";
const WHATSAPP = "ideas-locas-grupo-whatsapp-despedida";
const DICC = "diccionario-grupo-whatsapp-despedida";
const MITOS = "mitos-despedidas-de-soltero";
const RESACON = "despedida-como-resacon-en-las-vegas";
const PQ_SOLTERO = "preguntas-chorras-despedida-de-soltero";
const PQ_SOLTERA = "preguntas-chorras-despedida-de-soltera";
const SECUESTRO = "secuestro-falso-despedida-de-soltero";
const RETOS = "retos-de-plaza-declaracion-cantada-flashmob";
const CAMISETAS = "frases-para-camisetas-despedida";
const DISFRACES = "disfraces-para-novio-o-novia-despedida";
const REGALOS = "regalos-absurdos-que-si-se-pueden-usar";
const PQ_REGALOS = "preguntas-chorras-regalos";
const CUMPLE_TEMA = "cumpleanos-tematicos-adultos-galicia";
const CUMPLE_SORPRESA = "cumpleanos-sorpresa-cosas-que-salen-mal";
const PQ_CUMPLE = "preguntas-chorras-cumpleanos-adultos";

export const ENLACES_INTERNOS: Record<string, EnlaceInterno[]> = {
  [RESACON]: [
    { slug: CALENDARIO, texto: "cuándo hacer una despedida en Galicia sin que coincida con todo" },
    { slug: BARCO, texto: "barco o casa rural para una despedida" },
    { slug: GUIA, texto: "guía para organizar una despedida en Galicia" },
  ],
  [GUIA]: [
    { slug: MITOS, texto: "los mitos de las despedidas que arruinan el plan" },
    { slug: PAGA, texto: "qué hacer si un amigo no paga la despedida" },
  ],
  [WHATSAPP]: [
    { slug: DICC, texto: "frases típicas del grupo de WhatsApp de una despedida" },
    { slug: PAGA, texto: "cómo reclamar el dinero sin montar un drama" },
    { slug: GUIA, texto: "organizar una despedida en Galicia paso a paso" },
  ],
  [APPS]: [
    { slug: PAGA, texto: "qué hacer si alguien no paga la señal" },
    { slug: GUIA, texto: "cómo organizar los gastos de una despedida en Galicia" },
  ],
  [BARCO]: [
    { slug: CALENDARIO, texto: "los fines de semana que conviene evitar en Galicia" },
    { slug: SECUESTRO, texto: "el secuestro falso, con casa rural incluida" },
    { slug: RETOS, texto: "retos de calle para completar el plan" },
  ],
  [MITOS]: [
    { slug: PQ_SOLTERO, texto: "preguntas sobre despedidas de soltero, con respuesta" },
    { slug: RESACON, texto: "cómo evitar que tu despedida acabe como Resacón" },
    { slug: GUIA, texto: "guía para organizar una despedida de soltero o soltera" },
  ],
  [DICC]: [
    { slug: WHATSAPP, texto: "ideas para mover el grupo de WhatsApp de una despedida" },
    { slug: MITOS, texto: "mitos de las despedidas de soltero" },
  ],
  [CALENDARIO]: [
    { slug: BARCO, texto: "barco o casa rural según la época del año" },
    { slug: GUIA, texto: "organizar una despedida en Galicia paso a paso" },
    { slug: RESACON, texto: "protocolo para que la despedida no acabe mal" },
  ],
  [PAGA]: [
    { slug: APPS, texto: "aplicaciones para repartir los gastos de la despedida" },
    { slug: WHATSAPP, texto: "ideas para que el grupo conteste y pague a tiempo" },
    { slug: GUIA, texto: "guía para organizar una despedida sin discusiones" },
  ],
  [PQ_SOLTERO]: [
    { slug: MITOS, texto: "mitos de las despedidas de soltero" },
    { slug: SECUESTRO, texto: "actividades originales para una despedida de soltero" },
    { slug: GUIA, texto: "guía para organizar una despedida de soltero en Galicia" },
  ],
  [PQ_SOLTERA]: [
    { slug: CAMISETAS, texto: "frases para camisetas de despedida de soltera" },
    { slug: WHATSAPP, texto: "ideas para el grupo de WhatsApp de la despedida" },
    { slug: GUIA, texto: "guía para organizar una despedida de soltera en Galicia" },
  ],
  [SECUESTRO]: [
    { slug: RETOS, texto: "retos de plaza para una despedida" },
    { slug: BARCO, texto: "casa rural o barco para una despedida en Galicia" },
    { slug: PQ_SOLTERO, texto: "dudas habituales sobre despedidas de soltero" },
  ],
  [RETOS]: [
    { slug: SECUESTRO, texto: "el secuestro falso en una despedida de soltero" },
    { slug: DISFRACES, texto: "disfraces para el novio o la novia" },
    { slug: RESACON, texto: "cómo no perder al novio durante la despedida" },
  ],
  [CAMISETAS]: [
    { slug: DISFRACES, texto: "disfraces baratos para el novio o la novia" },
    { slug: PQ_SOLTERA, texto: "preguntas sobre despedidas de soltera" },
  ],
  [DISFRACES]: [
    { slug: CAMISETAS, texto: "frases para las camisetas de la despedida" },
    { slug: RETOS, texto: "retos de calle para lucir el disfraz" },
    { slug: PQ_SOLTERO, texto: "qué se hace en una despedida de soltero" },
  ],
  [REGALOS]: [
    { slug: PQ_REGALOS, texto: "dudas sobre regalos de cumpleaños" },
    { slug: CAMISETAS, texto: "camisetas con frases para regalar en una despedida" },
    { slug: CUMPLE_TEMA, texto: "ideas de cumpleaños temáticos para adultos" },
  ],
  [PQ_REGALOS]: [
    { slug: REGALOS, texto: "regalos absurdos que sí se pueden usar" },
    { slug: DISFRACES, texto: "disfraces que también sirven de regalo" },
  ],
  [CUMPLE_TEMA]: [
    { slug: CUMPLE_SORPRESA, texto: "cumpleaños sorpresa: lo que puede salir mal" },
    { slug: DISFRACES, texto: "disfraces baratos para una fiesta temática" },
    { slug: PQ_CUMPLE, texto: "dudas sobre cumpleaños de adultos" },
  ],
  [CUMPLE_SORPRESA]: [
    { slug: CUMPLE_TEMA, texto: "cumpleaños temáticos para adultos en Galicia" },
    { slug: PQ_CUMPLE, texto: "preguntas sobre cumpleaños de adultos" },
    { slug: REGALOS, texto: "regalos graciosos para la fiesta" },
  ],
  [PQ_CUMPLE]: [
    { slug: CUMPLE_SORPRESA, texto: "cumpleaños sorpresa: diez cosas que salen mal" },
    { slug: REGALOS, texto: "regalos absurdos que sí se usan" },
  ],
};
