/** Ronda de muestra de «¿Quién dijo esto?». Todo inventado. */
export const PERSONAJES = [
  "El Organizador Agotado",
  "El «Yo me adapto»",
  "El Fantasma del Bizum",
  "El Audiero",
  "El Experto en Ideas (pero nada más)",
] as const;

export const FRASES: { texto: string; personaje: (typeof PERSONAJES)[number]; comentario: string }[] = [
  {
    texto: "Yo me adapto a lo que digáis, pero Ibiza no, y barco tampoco.",
    personaje: "El «Yo me adapto»",
    comentario: "Se adapta a todo. Salvo a lo que se propone.",
  },
  {
    texto: "Chicos, en el mensaje fijado está la fecha, el precio y el Bizum. En negrita.",
    personaje: "El Organizador Agotado",
    comentario: "Lo ha escrito tres veces. Con mayúsculas la cuarta.",
  },
  {
    texto: "Os hago el Bizum luego, que ahora estoy en el metro.",
    personaje: "El Fantasma del Bizum",
    comentario: "El «luego» más largo de la historia.",
  },
  {
    texto: "[Audio de 4 minutos 12 segundos con ruido de fondo y un «a ver, que os cuento»]",
    personaje: "El Audiero",
    comentario: "Resumen: «sí».",
  },
  {
    texto: "¿Y si hacemos paintball, luego barco, luego ruta de senderismo y cena en un chiringuito?",
    personaje: "El Experto en Ideas (pero nada más)",
    comentario: "No ha reservado nada. No va a reservar nada.",
  },
  {
    texto: "¿Al final qué día era? (Está fijado arriba.)",
    personaje: "El «Yo me adapto»",
    comentario: "No ha leído nada, pero se adapta.",
  },
  {
    texto: "Me ha surgido una cosa pero si queréis puedo hacer el Bizum de la mitad y ya veo.",
    personaje: "El Fantasma del Bizum",
    comentario: "La mitad de nada sigue siendo nada.",
  },
  {
    texto: "He hecho una hoja de cálculo con colores. Mirad la pestaña 4.",
    personaje: "El Organizador Agotado",
    comentario: "Nadie ha abierto la pestaña 4.",
  },
];
