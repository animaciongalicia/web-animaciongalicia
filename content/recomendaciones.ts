import type { Recomendacion } from "./types";

/**
 * Recomendaciones editoriales (opcionales).
 * - `casera`: idea casera, siempre visible.
 * - `enlaces`: enlaces externos. Con la lista vacía NO se muestra nada comercial.
 *   Para añadir uno de afiliación, rellena `url` con el enlace real que te facilite
 *   el programa y pon `comisionado: true`. Saldrá con aviso visible y rel="sponsored".
 */
export const recomendaciones: Recomendacion[] = [
  {
    articulo: "regalos-absurdos-40-cumpleanos",
    titulo: "Si quieres rematar el regalo",
    casera:
      "Imprime su cara en cartón, recórtala y pégala en un palo. Cuesta menos que una caña y se usa toda la noche.",
    enlaces: [
      // { label: "Caretas con su cara", url: "https://…", comisionado: true },
    ],
  },
  {
    articulo: "subasta-regalos-imposibles",
    titulo: "Si el regalo ganador te ha convencido",
    casera: "Antes de comprar nada, prueba la versión casera. Suele hacer más gracia y cuesta menos.",
    enlaces: [
      // { label: "Caretas con su cara", url: "https://…", comisionado: true },
    ],
  },
];

export function recomendacionesDe(slug: string) {
  return recomendaciones.filter((r) => r.articulo === slug);
}
