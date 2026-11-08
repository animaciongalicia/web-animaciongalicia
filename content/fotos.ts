/**
 * Fotos chotas de celebraciones, despedidas, cumpleaños y eventos.
 *
 * Cómo añadir una (recomendado):  npm run foto -- ruta/foto.jpg --alt "Descripción" --pie "Pie" --etiqueta Despedidas --consentimiento
 * El script reduce la imagen, le quita los metadatos (ubicación incluida) y añade la entrada aquí.
 *
 * REGLAS: solo fotos propias o con permiso expreso de las personas que salen (derecho a la propia imagen, RGPD).
 * Sin menores. `consentimiento` debe ser true: si no, la foto no se muestra.
 * `ejemplo: true` = marcador de posición; solo se ve en preview y desaparece en producción.
 */
export type Foto = {
  src: string;
  ancho: number;
  alto: number;
  alt: string;
  pie?: string;
  credito?: string;
  etiqueta?: "Despedidas" | "Cumpleaños" | "Regalos" | "Juegos" | "Eventos";
  fecha: string;
  consentimiento: boolean;
  ejemplo?: boolean;
};

export const FOTOS: Foto[] = [
  { src: "/fotos/ejemplo-1.jpg", ancho: 1200, alto: 800, alt: "Foto de ejemplo: grupo de amigos en una despedida", pie: "Aquí irá una foto chota de una despedida.", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true, ejemplo: true },
  { src: "/fotos/ejemplo-2.jpg", ancho: 900, alto: 1200, alt: "Foto de ejemplo: novio con disfraz", pie: "Aquí, el disfraz del novio.", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true, ejemplo: true },
  { src: "/fotos/ejemplo-3.jpg", ancho: 1200, alto: 800, alt: "Foto de ejemplo: tarta de cumpleaños desastrosa", pie: "Aquí, la tarta que no salió como en el vídeo.", etiqueta: "Cumpleaños", fecha: "2026-11-08", consentimiento: true, ejemplo: true },
  { src: "/fotos/ejemplo-4.jpg", ancho: 1200, alto: 900, alt: "Foto de ejemplo: camisetas de despedida", pie: "Aquí, las camisetas del grupo.", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true, ejemplo: true },
  { src: "/fotos/ejemplo-5.jpg", ancho: 1200, alto: 800, alt: "Foto de ejemplo: reto de plaza", pie: "Aquí, un reto de plaza bien ejecutado.", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true, ejemplo: true },
  // FOTOS_FIN
];
