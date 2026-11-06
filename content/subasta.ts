export type Lote = {
  id: string;
  titulo: string;
  desc: string;
  casera: string;
  comprable: string;
  colectivo: string;
};

/** Regalos imposibles. Cada uno trae tres versiones reales del regalo. */
export const LOTES: Lote[] = [
  {
    id: "retrato",
    titulo: "Un retrato ecuestre de tu amigo con su perro vestido de primer ministro",
    desc: "Óleo imaginario de dos metros. Pose épica. El perro mira al horizonte.",
    casera: "Un dibujo a rotulador en A3 con marco de cartón dorado. Cuanto peor dibujado, mejor.",
    comprable: "Un retrato personalizado a partir de una foto, por encargo, en lienzo o ilustración digital.",
    colectivo: "Si entre todos ponéis 15 €: encargáis el retrato a un ilustrador y lo entregáis con discurso.",
  },
  {
    id: "caretas",
    titulo: "12 caretas de su cara para que pueda verse llegar tarde",
    desc: "Una por cada vez que llegó tarde este año. La docena sale con descuento.",
    casera: "Imprimid su foto, pegadla en cartón y ponedle una goma. Una tarde y cero euros.",
    comprable: "Caretas de cartón con su cara, impresas por encargo.",
    colectivo: "Si entre todos ponéis 15 €: caretas para toda la mesa y un cartel de «Llega tarde».",
  },
  {
    id: "dia",
    titulo: "Un día de su vida dirigido por el grupo: menú, ropa y banda sonora",
    desc: "Duración: 24 horas. Cancelación: imposible. Gritos: incluidos.",
    casera: "Un cupón impreso con un día completo diseñado por vosotros, con horarios y todo.",
    comprable: "Una experiencia que se pueda reservar para ese día: una cena, una actividad, una escapada corta.",
    colectivo: "Si entre todos ponéis 15 €: el día incluye la cena, pagada a bote.",
  },
  {
    id: "himno",
    titulo: "Un himno oficial compuesto por el grupo, con videoclip",
    desc: "Estribillo pegadizo. Letra injustificable. Coreografía opcional y deseable.",
    casera: "Una canción que todos cantáis sobre una melodía conocida, grabada en un móvil.",
    comprable: "Una canción personalizada encargada a un músico, con su nombre en el estribillo.",
    colectivo: "Si entre todos ponéis 15 €: grabáis la canción, la subís a una lista privada y la ponéis en la cena.",
  },
  {
    id: "alfombra",
    titulo: "Una alfombra con la peor foto de su carné",
    desc: "Para que cada mañana, al despertar, pise su propia cara de los 22.",
    casera: "Una foto grande impresa y plastificada, para ponerla delante de la puerta del baño.",
    comprable: "Una alfombra o felpudo personalizado con su foto.",
    colectivo: "Si entre todos ponéis 15 €: felpudo para la entrada de su casa y foto enmarcada de repuesto.",
  },
  {
    id: "poliza",
    titulo: "Un seguro contra tonterías con póliza firmada por todos",
    desc: "Cobertura: planes cancelados, frases desafortunadas y Bizums que no llegaron.",
    casera: "Una póliza con letra pequeña inventada, sellada con una patata y firmada por todos.",
    comprable: "Un diploma o certificado enmarcado con el texto de la póliza.",
    colectivo: "Si entre todos ponéis 15 €: póliza enmarcada y una cena de entrega «a cargo del seguro».",
  },
  {
    id: "llaves",
    titulo: "Una escultura monumental de las llaves que siempre pierde",
    desc: "Peso: 14 kilos. Ubicación: el salón. Utilidad: ninguna.",
    casera: "Llaves viejas pintadas de dorado y pegadas sobre una base de madera con una placa de cartón.",
    comprable: "Un llavero gigante o un soporte de llaves personalizado, con su nombre grabado.",
    colectivo: "Si entre todos ponéis 15 €: soporte de llaves y un localizador para que no las pierda más.",
  },
  {
    id: "tarta",
    titulo: "Una tarta con forma de su cabeza, con parecido sospechoso",
    desc: "Se corta por la frente. Los invitados eligen por dónde empezar.",
    casera: "Una tarta normal con su foto en la oblea o decorada con caramelos como barba.",
    comprable: "Una tarta personalizada con su foto impresa, encargada en una pastelería.",
    colectivo: "Si entre todos ponéis 15 €: tarta personalizada y velas con forma de números absurdos.",
  },
];
