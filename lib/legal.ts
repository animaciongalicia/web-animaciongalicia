/**
 * Datos del titular de la web. Obligatorios por el art. 10 de la LSSI-CE.
 * No se han inventado: rellénalos antes de publicar. Mientras falten, las páginas legales
 * muestran «[PENDIENTE DE COMPLETAR]» en su lugar.
 */
export const TITULAR = {
  nombre: "Inversiones Shiso, S.L." as string | undefined, // razón social o nombre y apellidos
  nif: "B70319223" as string | undefined,
  // Solo consta el código postal y la ciudad. Falta la calle y el número (obligatorio por el art. 10 LSSI-CE).
  domicilio: "15002 A Coruña (calle y número pendientes)" as string | undefined,
  email: undefined as string | undefined,
  registro: undefined as string | undefined, // datos del Registro Mercantil, si procede
  actualizado: "8 de noviembre de 2026",
};
