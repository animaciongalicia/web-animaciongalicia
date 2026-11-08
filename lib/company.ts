/**
 * Datos de la agencia y de las webs del grupo. Se muestran en /animacion-galicia/ y en una línea del pie.
 * Los dominios se muestran como TEXTO (sin enlaces) hasta que el propietario active los enlaces salientes.
 * Pendiente de confirmar: «gincanas.es» (lista del grupo) frente a «ginkanas.es» (informe de enlaces de Search Console).
 */
export const AGENCIA = {
  nombre: "Animación Galicia",
  lema: "Agencia que organiza saraos en Galicia: despedidas, cumpleaños, eventos de empresa y viajes.",
};

export type WebGrupo = { nombre: string; dominio: string; descripcion: string };

export const GRUPO: { titulo: string; webs: WebGrupo[] }[] = [
  {
    titulo: "Despedidas por destino",
    webs: [
      { nombre: "Despedidas en toda Galicia", dominio: "despedidasgalicia.es", descripcion: "Despedidas en toda Galicia." },
      { nombre: "Despedidas en A Coruña", dominio: "despedidascoruna.es", descripcion: "Despedidas en A Coruña." },
      { nombre: "Despedidas en Vigo", dominio: "despedidasvigo.com", descripcion: "Despedidas en Vigo." },
      { nombre: "Local para despedidas en Vigo", dominio: "despedidas-vigo.es", descripcion: "Local para despedidas en Vigo." },
      { nombre: "Despedidas en Ourense", dominio: "despedidasourense.com", descripcion: "Despedidas en Ourense." },
      { nombre: "Despedidas en Sanxenxo", dominio: "despedidassanxenxo.es", descripcion: "Despedidas en Sanxenxo." },
      { nombre: "Despedidas en Sanxenxo (.com)", dominio: "despedidas-sanxenxo.com", descripcion: "Despedidas en Sanxenxo." },
      { nombre: "Despedidas en la playa de Sanxenxo", dominio: "despedidasplayasanxenxo.com", descripcion: "Despedidas en la playa de Sanxenxo." },
      { nombre: "Despedidas en Oporto", dominio: "despedidasenoporto.com", descripcion: "Despedidas en Oporto." },
      { nombre: "Despedidas AG", dominio: "despedidasag.com", descripcion: "Despedidas AG." },
    ],
  },
  {
    titulo: "Actividades y locales",
    webs: [
      { nombre: "Gincanas", dominio: "gincanas.es", descripcion: "Gincanas." },
      { nombre: "Humor Amarillo A Coruña", dominio: "humoramarillocoruna.com", descripcion: "Humor Amarillo en A Coruña." },
      { nombre: "Los 7 PC", dominio: "los7pc.com", descripcion: "Local de cenas y baile." },
      { nombre: "Monólogos Galicia", dominio: "monologosgalicia.com", descripcion: "Monólogos en Galicia." },
    ],
  },
  {
    titulo: "Servicios",
    webs: [
      { nombre: "SeaGalicia", dominio: "seagalicia.com", descripcion: "Alquiler de barcos." },
      { nombre: "LuxeGalicia", dominio: "luxegalicia.com", descripcion: "Traslados para despedidas en Galicia." },
      { nombre: "Suunia Viajes", dominio: "suunia.com", descripcion: "Viajes por Galicia." },
      { nombre: "Mil Eventos Galicia", dominio: "mileventosgalicia.com", descripcion: "Eventos para empresas en Galicia." },
    ],
  },
];

export const urlGrupo = (dominio: string) => `https://${dominio}`;
export const webGrupo = (dominio: string) => GRUPO.flatMap((g) => g.webs).find((w) => w.dominio === dominio);
