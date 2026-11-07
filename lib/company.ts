/**
 * Datos de la agencia. Solo se muestran en la página /animacion-galicia/ y en una línea del pie.
 * Sin enlaces salientes por ahora: la `web` se muestra como texto, no como enlace.
 * Completa `web` y `descripcion` de cada marca cuando los tengas.
 */
export const AGENCIA = {
  nombre: "Animación Galicia",
  lema: "Agencia que organiza saraos en Galicia: despedidas, cumpleaños, eventos de empresa y viajes.",
  marcas: [
    { nombre: "Suunia Viajes", web: undefined as string | undefined, descripcion: "Viajes." },
    { nombre: "Mil Eventos Galicia", web: undefined as string | undefined, descripcion: "Eventos." },
    { nombre: "SeaGalicia", web: undefined as string | undefined, descripcion: undefined as string | undefined },
    { nombre: "LuxeGalicia", web: undefined as string | undefined, descripcion: undefined as string | undefined },
  ],
};
