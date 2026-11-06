/** Operación Coartada: excusas para entretener al homenajeado. */
export type Rol = "pareja" | "amigo" | "hermano" | "trabajo";

export const ROLES: { id: Rol; label: string }[] = [
  { id: "pareja", label: "Su pareja" },
  { id: "amigo", label: "Su mejor amigo/a" },
  { id: "hermano", label: "Un hermano/a" },
  { id: "trabajo", label: "Un compañero/a de trabajo" },
];

export const TIEMPOS = [30, 60, 90, 120] as const;

export const SOSPECHA = [
  { id: 1, label: "Se lo cree todo" },
  { id: 2, label: "Algo huele" },
  { id: 3, label: "Lo huele todo" },
] as const;

export type Coartada = {
  rol: Rol;
  texto: string;
  /** Tiempo (min) que da de sí esta excusa. */
  min: number;
  max: number;
  /** 1 = muy creíble, 3 = arriesgada. */
  riesgo: 1 | 2 | 3;
  truco: string;
};

export const COARTADAS: Coartada[] = [
  // Pareja
  { rol: "pareja", texto: "«Cenamos fuera, que te invito. Sin móviles»", min: 90, max: 150, riesgo: 1, truco: "Reserva de verdad en un sitio cercano y alarga el postre." },
  { rol: "pareja", texto: "«Acompáñame a recoger un paquete enorme»", min: 30, max: 60, riesgo: 2, truco: "Que el paquete exista: una caja vacía vale." },
  { rol: "pareja", texto: "«Tenemos que comprar algo para la casa antes de que cierren»", min: 30, max: 90, riesgo: 1, truco: "Elegid algo caro y tardad en decidir. Es creíble porque siempre tardáis." },
  { rol: "pareja", texto: "«He quedado con unos amigos, vente un rato»", min: 60, max: 120, riesgo: 2, truco: "Mejor si es un plan que ya hacéis a veces." },
  { rol: "pareja", texto: "«Se ha estropeado algo en casa de mis padres, ¿vienes?»", min: 60, max: 120, riesgo: 3, truco: "Solo si sus padres están avisados. Si no, hay dos sorpresas." },
  { rol: "pareja", texto: "«Paseo y tarta, solo los dos»", min: 60, max: 150, riesgo: 1, truco: "El paseo acaba en el sitio de la fiesta. Que la tarta sea la excusa de entrar." },
  // Amigo
  { rol: "amigo", texto: "«Necesito consejo urgente para una cosa muy seria, invito yo»", min: 60, max: 120, riesgo: 1, truco: "Prepara un dilema falso con detalles. Cuanto más ridículo, mejor se lo cree." },
  { rol: "amigo", texto: "«Vente a ver cómo se me ha roto el móvil»", min: 30, max: 60, riesgo: 2, truco: "Mejor si lo has roto de verdad, aunque sea con un protector." },
  { rol: "amigo", texto: "«Quedamos a tomar algo como siempre»", min: 60, max: 150, riesgo: 1, truco: "Lo cotidiano es la mejor coartada. Alarga la conversación con un tema que le apasione." },
  { rol: "amigo", texto: "«Te necesito para montar un mueble»", min: 60, max: 120, riesgo: 2, truco: "Ten el mueble a medias. Si no hay mueble, no hay coartada." },
  { rol: "amigo", texto: "«Me han regalado entradas para algo, vámonos antes de que empiece»", min: 90, max: 150, riesgo: 3, truco: "Si lo lleva fatal con las sorpresas, no lo hagas." },
  { rol: "amigo", texto: "«Salgo a correr, ¿te vienes? Luego cerveza»", min: 30, max: 90, riesgo: 2, truco: "Solo si vais a correr de verdad. Si no, que haya cerveza y excusa." },
  // Hermano
  { rol: "hermano", texto: "«Mamá quiere que vengamos a comer, ya sabes cómo se pone»", min: 90, max: 150, riesgo: 1, truco: "Coordina con la madre para que lo alargue. Es la única coartada con aliado incorporado." },
  { rol: "hermano", texto: "«Acompáñame a comprar un regalo, no sé qué coger»", min: 60, max: 120, riesgo: 2, truco: "Elige tú el regalo con calma. Si es para él, es peligroso." },
  { rol: "hermano", texto: "«Tengo un problema con el ordenador, ¿le echas un ojo?»", min: 30, max: 90, riesgo: 1, truco: "Funciona más tiempo del que parece, porque nunca se arregla a la primera." },
  { rol: "hermano", texto: "«Ven a casa, tengo algo que contarte»", min: 30, max: 60, riesgo: 3, truco: "Prepara una noticia falsa pequeña. Que no sea mudanza ni embarazo." },
  { rol: "hermano", texto: "«He pedido comida de más, ven antes de que se enfríe»", min: 60, max: 120, riesgo: 1, truco: "Pide comida de verdad. La coartada se sostiene sola." },
  { rol: "hermano", texto: "«Me ayudas a cambiar un cuadro de sitio»", min: 30, max: 60, riesgo: 2, truco: "Cambia de sitio varias veces. Nunca queda bien." },
  // Trabajo
  { rol: "trabajo", texto: "«Tenemos una reunión de última hora con un cliente»", min: 60, max: 120, riesgo: 3, truco: "Solo si nunca hay reuniones a esa hora. Si las hay, es creíble." },
  { rol: "trabajo", texto: "«Salimos a tomar algo, que hace mucho que no hablamos»", min: 60, max: 150, riesgo: 1, truco: "Es el clásico. Nadie sospecha de una cerveza con un compañero." },
  { rol: "trabajo", texto: "«Se nos ha caído el sistema y hay que recoger algo en la oficina»", min: 30, max: 90, riesgo: 2, truco: "Que parezca un marrón de verdad. Pon cara de funeral." },
  { rol: "trabajo", texto: "«Me han dado vales de comida y no quiero ir solo»", min: 60, max: 120, riesgo: 1, truco: "Funciona con cualquiera que ame la comida gratis." },
  { rol: "trabajo", texto: "«Tengo que enseñarte algo del proyecto, tardo cinco minutos»", min: 30, max: 60, riesgo: 2, truco: "Nunca son cinco minutos. Aprovéchalo." },
  { rol: "trabajo", texto: "«Han abierto un sitio nuevo cerca de aquí, vamos a probarlo»", min: 60, max: 150, riesgo: 1, truco: "Reserva ya en un sitio cercano a la fiesta." },
];
