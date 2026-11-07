import type { Pieza } from "./types";

/**
 * Piezas de Menú Marrón. Cada una es un hallazgo de la red con texto propio encima.
 * Para añadir una: copia un objeto, cambia el slug y rellena. La URL sale sola:
 * /<seccion>/<slug>/. Con `borrador: true` solo se ve en preview.
 *
 * Las tres primeras son MUESTRAS DE FORMATO, montadas con lo que devolvió una búsqueda web
 * (no se han podido leer las páginas originales). Hay que verificarlas o sustituirlas
 * por vuestros enlaces antes de publicar.
 */
export const piezas: Pieza[] = [
  {
    slug: "cuanto-cuesta-una-despedida-en-galicia",
    seccion: "despedidas",
    tag: "Galicia · Dinero",
    titulo: "Cuánto cuesta una despedida en Galicia: los precios que nadie dice en el grupo",
    h1: "Cuánto cuesta una despedida en Galicia (y por qué el marrón empieza en el presupuesto)",
    dek: "Hemos mirado qué se anuncia en los portales de ocio gallegos. La conclusión: entre «una cervecita» y «un velero» hay un abismo, y alguien tiene que decirlo en el grupo.",
    fecha: "2026-11-07",
    destacada: true,
    borrador: true,
    galicia: true,
    lugares: ["Vigo", "A Coruña", "Sada", "Sanxenxo"],
    fuentes: [
      { nombre: "Yumping · despedidas de soltero en Galicia", url: "https://www.yumping.com/despedidas-de-soltero/galicia", tipo: "ficha" },
      { nombre: "Yumping · despedida en velero en Vigo", url: "https://www.yumping.com/ofertas/paseos-en-barco/pontevedra/despedida-de-soltero-en-velero-vigo-fin-de-semana--o34105", tipo: "ficha" },
      { nombre: "Fixando · presupuestos de despedidas en Galicia", url: "https://www.fixando.es/en/planificar-despedidas-de-soltera/presupuesto/Galicia/Sanxenxo", tipo: "ficha" },
    ],
    cuerpo: [
      "Cuando alguien dice «hagamos algo guapo» en el grupo, nadie sabe si habla de 30 euros o de 300. Y la despedida ya está en marcha antes de que nadie diga la cifra.",
      "Lo que se ve en los portales de ocio de Galicia: ofertas de fin de semana en velero en Vigo desde 1.700 euros en total, alquiler de barco privado para hasta 10 personas desde 750, o un paseo en velero de unas horas por la ría que sale más barato por persona. Un portal de presupuestos, por su parte, sitúa el coste de una despedida en Galicia en una horquilla muy amplia, entre 129 y 1.200 euros, según el plan.",
      "Dos matices antes de escribirlo en el chat. Son precios de portales y no sabemos qué incluyen. Y una cifra por grupo no es una cifra por persona: ahí está la trampa de casi todas las discusiones.",
    ],
    porQueFunciona:
      "Porque pone nombre a lo que el grupo evita decir: la cifra. En cuanto hay una cifra, el plan se hace real y los que decían «lo que queráis» tienen que decir una cantidad.",
    queHacer: {
      texto: "Antes de proponer nada, lanza el presupuesto como pregunta y no como plan. Evita la discusión de las 3 de la mañana.",
      mensaje:
        "Antes de elegir plan, una pregunta honesta: ¿cuánto estáis dispuestos a gastar por cabeza? Respondedme con un número (30 / 60 / 100 / más). Con eso elijo plan y no os pregunto más.",
    },
    verificacion:
      "Muestra de formato: precios tomados de fichas de portales de terceros, sin leer la página original. Verificar importes e inclusiones antes de publicar.",
    relacionadas: ["los-alumnos-celebraron-el-cumple-de-la-profe-el-dia-equivocado", "camiseta-tres-lobos-resenas-de-broma"],
  },
  {
    slug: "los-alumnos-celebraron-el-cumple-de-la-profe-el-dia-equivocado",
    seccion: "cumpleanos",
    tag: "Viral",
    titulo: "Los alumnos le montaron el cumpleaños a su profesora… el día equivocado",
    h1: "Le montaron el cumpleaños a la profesora el día equivocado (y ella dio las gracias igual)",
    dek: "Un TikTok viral recoge la escena perfecta del marrón de organizar: todo preparado, mucha ilusión y ni una sola persona que mirara el calendario.",
    fecha: "2026-11-07",
    borrador: true,
    fuentes: [
      {
        nombre: "Sopitas · Alumnos organizan fiesta de cumpleaños a su maestra y se equivocan de día",
        url: "https://www.sopitas.com/mientras-tanto/alumnos-organizan-fiesta-cumpleanos-maestra-se-equivocan-dia-historia-viral-tiktok/amp/",
        tipo: "articulo",
      },
    ],
    cuerpo: [
      "Según cuenta Sopitas, un grupo de alumnos organizó una fiesta de cumpleaños para su profesora, y se equivocó de día. Ella agradeció el detalle y, ante tanta ilusión, acabó confesando que ese no era su cumpleaños. El vídeo se hizo viral en TikTok.",
      "Lo bueno de esta historia es que nadie sale mal parado: ella no destroza la sorpresa y ellos se llevan una anécdota para toda la vida. Lo malo es que es exactamente lo que le pasa a cualquier grupo que organiza una sorpresa sin una persona que confirme la fecha.",
    ],
    porQueFunciona:
      "Porque todos hemos estado en los dos lados: el que organiza con mucha ilusión y el que recibe una sorpresa que no es para él. Y porque la reacción de la profesora es la correcta.",
    queHacer: {
      texto: "Si organizas una sorpresa, nombra a una sola persona que confirme fecha y hora con quien corresponda. Y reenvía esto al grupo antes de comprar la tarta.",
      mensaje: "Antes de comprar nada: ¿alguien ha confirmado la fecha de verdad? Que no nos pase lo del TikTok de la profe.",
    },
    verificacion: "Muestra de formato: resumen basado en la noticia de Sopitas, sin poder abrir el vídeo original. No consta dónde ocurrió.",
    relacionadas: ["cuanto-cuesta-una-despedida-en-galicia"],
  },
  {
    slug: "camiseta-tres-lobos-resenas-de-broma",
    seccion: "regalos",
    tag: "Compilación",
    titulo: "Regalos que se hicieron virales por sus reseñas de broma",
    h1: "Los regalos que se volvieron virales por sus reseñas de broma",
    dek: "Hay productos de Amazon cuya fama no viene del producto, sino de lo que la gente escribió debajo. Dos casos clásicos para quien busca un regalo con historia.",
    fecha: "2026-11-07",
    borrador: true,
    fuentes: [
      { nombre: "Digital Trends", url: "https://digitaltrends.com/?p=58122", tipo: "articulo" },
      { nombre: "WordStream · funny Amazon reviews", url: "https://www.wordstream.com/blog/ws/2014/04/15/funny-amazon-reviews", tipo: "articulo" },
    ],
    cuerpo: [
      "Un regalo con historia gana a uno caro. Estos dos casos de Amazon lo demuestran: el producto era normal y las reseñas lo convirtieron en leyenda.",
    ],
    items: [
      {
        titulo: "La camiseta «Three Wolf Moon»",
        texto:
          "Según Digital Trends, las reseñas irónicas de esta camiseta dispararon sus ventas más de un 2.000 %, y WordStream señala que llegó a ser la prenda más vendida del sitio. Un regalo-chiste que se explica solo.",
        fuente: { nombre: "Digital Trends", url: "https://digitaltrends.com/?p=58122", tipo: "articulo" },
      },
      {
        titulo: "Los bolígrafos «Bic For Her»",
        texto:
          "Según WordStream, estos bolígrafos desataron una avalancha de reseñas satíricas en su página. Ya no son un producto: son una anécdota para regalar con la reseña impresa.",
        fuente: { nombre: "WordStream", url: "https://www.wordstream.com/blog/ws/2014/04/15/funny-amazon-reviews", tipo: "articulo" },
      },
    ],
    porQueFunciona: "Porque la gracia ya está hecha: el regalo se vende solo con su historia, y quien lo recibe ya conoce la broma.",
    queHacer: {
      texto: "Si tu amigo es de los que se ríen de sí mismos, regala el producto con la mejor reseña impresa y enmarcada. Cuesta lo mismo y gana mucho.",
    },
    verificacion: "Muestra de formato: datos tomados de resultados de búsqueda de dos medios, sin leer los originales. Verificar cifras antes de publicar.",
    relacionadas: ["cuanto-cuesta-una-despedida-en-galicia"],
  },
];

export const SECCIONES = {
  despedidas: {
    label: "Despedidas",
    path: "/",
    title: "Despedidas",
    intro: "Lo mejor y lo peor que hemos encontrado sobre organizar una despedida.",
  },
  cumpleanos: {
    label: "Cumpleaños",
    path: "/cumpleanos/",
    title: "Cumpleaños: sorpresas, desastres y celebraciones que merecen un vídeo",
    intro: "Las fiestas sorpresa que salieron bien, las que salieron mal y las que salieron en TikTok.",
  },
  regalos: {
    label: "Regalos",
    path: "/regalos/",
    title: "Regalos absurdos, virales y con historia",
    intro: "Regalos que se hicieron famosos por lo que dijeron de ellos, y los que mejor funcionan.",
  },
  juegos: {
    label: "Juegos",
    path: "/juegos/",
    title: "Juegos, retos y vídeos para el grupo",
    intro: "Dinámicas, retos y vídeos que ya han demostrado que funcionan con un grupo.",
  },
} as const;
