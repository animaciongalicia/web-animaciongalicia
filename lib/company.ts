/**
 * Datos de la agencia y de las webs del grupo. Se muestran en /animacion-galicia/ y en una línea del pie.
 * Los dominios se muestran como TEXTO (sin enlaces) hasta que el propietario active los enlaces salientes.
 * El dominio de las ginkanas es ginkanas.es (confirmado por el propietario).
 */
export const AGENCIA = {
  nombre: "Animación Galicia",
  lema: "Agencia que organiza saraos en Galicia: despedidas, cumpleaños, eventos de empresa y viajes.",
};

export type WebGrupo = { nombre: string; dominio: string; ancla: string; descripcion: string };

/** `ancla`: texto del enlace (3-4 palabras, descriptivo). `descripcion`: lo que se cuenta en «Cómo trabajamos». */
export const GRUPO: { titulo: string; webs: WebGrupo[] }[] = [
  {
    titulo: "Despedidas por destino",
    webs: [
      { nombre: "Despedidas en toda Galicia", dominio: "despedidasgalicia.es", ancla: "despedidas en toda Galicia", descripcion: "La web de despedidas para cualquier punto de Galicia: actividades, planes y organización completa del día." },
      { nombre: "Despedidas en A Coruña", dominio: "despedidascoruna.es", ancla: "despedidas en A Coruña", descripcion: "Planes y actividades pensados para despedidas en la ciudad de A Coruña." },
      { nombre: "Despedidas en Vigo", dominio: "despedidasvigo.com", ancla: "despedidas en Vigo", descripcion: "Despedidas de soltero y soltera en Vigo, con actividades y plan de noche." },
      { nombre: "Local para despedidas en Vigo", dominio: "despedidas-vigo.es", ancla: "local despedidas en Vigo", descripcion: "Un sitio donde celebrar en Vigo si buscas local para el grupo." },
      { nombre: "Despedidas en Ourense", dominio: "despedidasourense.com", ancla: "despedidas en Ourense", descripcion: "Despedidas en Ourense: termas, ciudad y fiesta." },
      { nombre: "Despedidas en Sanxenxo", dominio: "despedidassanxenxo.es", ancla: "despedidas en Sanxenxo", descripcion: "La referencia para despedidas en Sanxenxo, el destino de costa más pedido." },
      { nombre: "Despedidas en Sanxenxo (.com)", dominio: "despedidas-sanxenxo.com", ancla: "despedidas veraniegas en Sanxenxo", descripcion: "Otra puerta de entrada a las despedidas en Sanxenxo, con otro enfoque." },
      { nombre: "Despedidas en la playa de Sanxenxo", dominio: "despedidasplayasanxenxo.com", ancla: "despedidas en la playa", descripcion: "Despedidas con playa, sol y plan de día en Sanxenxo." },
      { nombre: "Despedidas en Oporto", dominio: "despedidasenoporto.com", ancla: "despedidas en Oporto", descripcion: "Escapada de despedida a Oporto, a un paso de Galicia." },
      { nombre: "Despedidas AG", dominio: "despedidasag.com", ancla: "despedidas por toda Galicia", descripcion: "Otra de nuestras webs de despedidas para toda Galicia, con planes y organización completa." },
    ],
  },
  {
    titulo: "Actividades y locales",
    webs: [
      { nombre: "Ginkanas", dominio: "ginkanas.es", ancla: "ginkanas para grupos", descripcion: "Retos y pruebas organizadas para que el grupo se mueva y se ría." },
      { nombre: "Humor Amarillo A Coruña", dominio: "humoramarillocoruna.com", ancla: "Humor Amarillo en Coruña", descripcion: "Humor Amarillo, la actividad de pruebas absurdas, en A Coruña." },
      { nombre: "Los 7 PC", dominio: "los7pc.com", ancla: "cenas y baile", descripcion: "Local de cenas y baile para celebrar con el grupo." },
      { nombre: "Monólogos Galicia", dominio: "monologosgalicia.com", ancla: "monólogos para eventos", descripcion: "Monólogos de humor para animar un evento en Galicia." },
    ],
  },
  {
    titulo: "Servicios",
    webs: [
      { nombre: "SeaGalicia", dominio: "seagalicia.com", ancla: "alquiler de barcos", descripcion: "Alquiler de barcos para celebrar en el agua." },
      { nombre: "LuxeGalicia", dominio: "luxegalicia.com", ancla: "traslados para despedidas", descripcion: "Traslados para que nadie conduzca en la despedida." },
      { nombre: "Suunia Viajes", dominio: "suunia.com", ancla: "viajes por Galicia", descripcion: "Viajes organizados por Galicia." },
      { nombre: "Mil Eventos Galicia", dominio: "mileventosgalicia.com", ancla: "eventos para empresas", descripcion: "Eventos de empresa en Galicia." },
    ],
  },
];

export const urlGrupo = (dominio: string) => `https://${dominio}`;
export const webGrupo = (dominio: string) => GRUPO.flatMap((g) => g.webs).find((w) => w.dominio === dominio);
