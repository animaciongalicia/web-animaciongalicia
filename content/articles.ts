import type { Article } from "./types";

/**
 * Artículos de Menú Marrón. Para añadir uno: copia un objeto, cambia el slug
 * y la sección, y listo. La ruta sale sola: /<section>/<slug>/.
 * Los nombres de las escenas (Marta, Dani…) son inventados.
 */
export const articles: Article[] = [
  {
    slug: "nombres-grupos-whatsapp",
    section: "despedidas",
    title: "Nombres graciosos para grupos de WhatsApp de despedida",
    h1: "Nombres graciosos para el grupo de WhatsApp de la despedida",
    description:
      "Ideas de nombres para el grupo de WhatsApp de una despedida de soltero o soltera, agrupadas por situación. Toca, copia y pégalo.",
    answer:
      "Tienes el grupo recién creado y todavía se llama «Nuevo grupo». Aquí van nombres por situación. Toca el botón, copia y pégalo. Cambia Marta o Dani por quien toque.",
    problema: "Acabo de crear el grupo",
    tag: "Nombres de grupo",
    related: ["mensajes-pedir-bizum", "juegos-grupo-mixto-no-se-conoce"],
    blocks: [
      {
        type: "copylist",
        title: "El grupo acaba de nacer (con ilusión)",
        items: [
          { text: "Sábado por determinar" },
          { text: "Despedida de Marta (provisional)" },
          { text: "Marta se casa y nosotros sufrimos" },
          { text: "17 personas, 2 planes y ninguna fecha" },
        ],
      },
      {
        type: "copylist",
        title: "Cuando nadie contesta",
        items: [
          { text: "Éramos 14 antes del Bizum" },
          { text: "Leído por 16, respondido por 3" },
          { text: "¿Hay alguien ahí? (Grupo de despedida)" },
          { text: "Vista previa: «jajaja»" },
        ],
      },
      {
        type: "chat",
        title: "Sábado por determinar",
        messages: [
          { who: "Lucía (organizadora)", text: "He creado el grupo. ¿Sábado 14 os va bien a todos?" },
          { who: "Pablo", text: "Lo que queráis" },
          { who: "Lucía (organizadora)", text: "Genial. Entonces sábado 14." },
          { who: "Pablo", text: "Ah, el 14 no puedo" },
          { who: "Lucía (organizadora)", text: "…", out: true },
          { who: "Lucía (organizadora)", text: "He cambiado el nombre del grupo a «Sábado por determinar»", out: true },
        ],
      },
      {
        type: "copylist",
        title: "Grupo de chicos",
        items: [
          { text: "Último finde de Dani con permiso" },
          { text: "Dani Libre (hasta nuevo aviso)" },
          { text: "Operación Despedida: que nadie sepa nada, ni Dani" },
          { text: "Los de Dani, la cuenta y la resaca" },
        ],
      },
      {
        type: "copylist",
        title: "Grupo de chicas",
        items: [
          { text: "Marta dice sí (nosotras también, a todo)" },
          { text: "Team Marta (con tickets y sin hombres)" },
          { text: "Las de Marta: el plan es no tener plan" },
          { text: "Operación Velo" },
        ],
      },
      {
        type: "copylist",
        title: "Grupo mixto en el que no se conoce nadie",
        items: [
          { text: "Presentaciones incómodas S.L." },
          { text: "Amigos de Marta que no se conocen entre sí" },
          { text: "Mixto, nervioso y con un Bizum pendiente" },
          { text: "Los de la boda que aún no saben quiénes son" },
        ],
      },
    ],
  },
  {
    slug: "mensajes-pedir-bizum",
    section: "despedidas",
    title: "Qué mensaje mandar para pedir el Bizum de una despedida",
    h1: "Mensajes para pedir el Bizum de la despedida sin quedar de borde",
    description:
      "Tres mensajes listos para copiar: primer aviso, recordatorio y cierre de reserva. Cambia importe, fecha y señal y mándalo al grupo.",
    answer:
      "Tres mensajes: primer aviso, recordatorio y cierre de reserva. Rellena los datos de abajo, copia el que toque y mándalo. Fíjalo en el grupo para que nadie diga que no lo vio.",
    problema: "Pedí el Bizum y han desaparecido",
    tag: "Cobrar",
    related: ["juegos-grupo-mixto-no-se-conoce", "nombres-grupos-whatsapp"],
    blocks: [
      {
        type: "template",
        title: "Tus datos (se cambian en los mensajes al momento)",
        fields: [
          { key: "importe", label: "Importe total", value: "60 €" },
          { key: "senal", label: "Señal", value: "20 €" },
          { key: "fecha", label: "Fecha límite", value: "el viernes 14" },
          { key: "bizum", label: "Bizum a", value: "[tu número de Bizum]" },
        ],
        messages: [
          {
            label: "1. Primer aviso",
            text: "Hola, equipo 👋 Ya tenemos plan para la despedida. Cuesta {importe} por cabeza. Para reservar necesitamos una señal de {senal} antes de {fecha}. Bizum a {bizum}, con tu nombre en el concepto. Mensaje fijado arriba para que no se pierda.",
          },
          {
            label: "2. Recordatorio (sin ser pesado)",
            text: "Recordatorio amable: la señal de {senal} se cierra {fecha}. Si ya has pagado, gracias, eres de oro. Si no, es un buen momento. Bizum a {bizum}. Si te ha surgido algo y no puedes, dímelo por privado y no pasa nada.",
          },
          {
            label: "3. Cierre de reserva",
            text: "Cerramos la reserva. Han pagado los que han pagado y esos son los que vienen. Quien haya quedado fuera, escríbeme por privado y vemos si hay hueco. Resto del pago ({importe} en total) antes de la despedida. Gracias a los que ya estáis dentro.",
          },
        ],
      },
      {
        type: "chat",
        title: "Éramos 14 antes del Bizum",
        messages: [
          { who: "Carlos (organizador)", text: "Chicos, ya podéis hacer el Bizum de la señal, 20 € cada uno", out: true },
          { who: "Nuria", text: "Hecho ✅" },
          { who: "Carlos (organizador)", text: "Gracias Nuria. ¿Alguien más?", out: true },
          { who: "Carlos (organizador)", text: "…", out: true },
          { who: "Carlos (organizador)", text: "Hola?", out: true },
          { who: "Sistema", text: "Pau ha salido del grupo" },
        ],
      },
      { type: "h2", text: "¿Y si dos se caen después de pagar la señal?" },
      {
        type: "p",
        text: "Pasa más de lo que crees. Lo peor no es que se caigan, es que no hayas dicho antes qué pasa cuando se caen. Deja la norma clara desde el primer mensaje y evitas el drama.",
      },
      {
        type: "copylist",
        items: [
          {
            label: "Norma antes de pagar",
            text: "Importante: la señal no se devuelve si te bajas, pero puedes pasar tu plaza a otra persona. Buscadle sustituto vosotros y listo.",
          },
          {
            label: "Cuando alguien se cae",
            text: "Tranquilo, lo entiendo. La señal ya está en la reserva, así que si encuentras a alguien que ocupe tu plaza, os cambiamos sin problema. Dime quién es y lo apuntamos.",
          },
        ],
      },
      {
        type: "p",
        text: "Una más, que no es broma: si alguien te pide dinero por el grupo y te suena raro, confírmalo por otro canal antes de hacer el Bizum. Hay cuentas de WhatsApp hackeadas que piden dinero a los grupos.",
      },
    ],
  },
  {
    slug: "juegos-grupo-mixto-no-se-conoce",
    section: "despedidas",
    title: "Juegos para una despedida mixta cuando nadie se conoce",
    h1: "Juegos para una despedida mixta cuando nadie se conoce",
    description:
      "Tres juegos para romper el hielo en una despedida mixta: instrucciones, duración y tamaño del grupo. Sin material raro y sin vergüenza ajena.",
    answer:
      "Tres juegos para que el amigo de la universidad y la prima del novio dejen de mirarse el móvil. Cada uno con duración y tamaño de grupo. Sin disfraces obligatorios.",
    problema: "Aquí no se conoce nadie",
    tag: "Romper el hielo",
    related: ["quien-dijo-esto", "mensajes-pedir-bizum"],
    blocks: [
      {
        type: "chat",
        title: "Cena de presentaciones",
        messages: [
          { who: "Marta (la novia)", text: "Os presento. Él es Iván, mi amigo de la uni" },
          { who: "Iván", text: "Hola" },
          { who: "Marta (la novia)", text: "Y ella es Sandra, la prima de Dani" },
          { who: "Sandra", text: "Hola" },
          { who: "Marta (la novia)", text: "(esto va a ser largo)", out: true },
        ],
      },
      {
        type: "games",
        items: [
          {
            name: "Bingo humano",
            duracion: "15 minutos",
            tamano: "De 8 a 30 personas",
            reglas: [
              "Cada uno recibe un papel con 9 casillas: «Ha viajado solo», «Tiene un hermano gemelo», «Ha llorado con una película esta semana»…",
              "Hay que encontrar a alguien distinto para cada casilla y que firme.",
              "Gana quien completa una línea. Un nombre no puede repetirse.",
              "Truco: la mitad de las casillas deben ser fáciles. Si todas son raras, nadie gana.",
            ],
          },
          {
            name: "Dos verdades y una mentira (versión homenajeado)",
            duracion: "10-15 minutos",
            tamano: "De 5 a 15 personas",
            reglas: [
              "Cada persona dice tres cosas sobre su relación con el homenajeado: dos reales y una inventada.",
              "El resto vota cuál es la mentira.",
              "El homenajeado tiene la última palabra y puede desmentir con cara de pocos amigos.",
              "Los que no lo conocen mucho aprenden anécdotas. Los que sí, pasan vergüenza.",
            ],
          },
          {
            name: "El que mejor lo conoce",
            duracion: "20 minutos",
            tamano: "De 6 a 25 personas, en equipos de 3 o 4",
            reglas: [
              "Alguien prepara 8 preguntas sobre el homenajeado, como «¿Cuál es su peor cita?» o «¿Qué hace cuando cree que nadie lo ve?».",
              "Cada equipo escribe su respuesta en un papel.",
              "El homenajeado responde de verdad y se puntúa. Los equipos se mezclan: nadie va con su grupo de siempre.",
              "El premio es simbólico. Que sea absurdo.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "organizar-cumpleanos-sorpresa",
    section: "cumpleanos",
    title: "Cómo organizar un cumpleaños sorpresa sin que se entere",
    h1: "Cómo organizar un cumpleaños sorpresa sin que se entere",
    description:
      "Nombres discretos para el grupo, mensaje inicial y checklist corto para montar una fiesta sorpresa sin que el homenajeado se huela nada.",
    answer:
      "Lo primero: crea el grupo sin el homenajeado y ponle un nombre que no levante sospechas. Aquí van nombres, el mensaje de arranque y un checklist para que nadie la líe.",
    problema: "Que no se entere",
    tag: "Sorpresa",
    related: ["regalos-absurdos-40-cumpleanos", "nombres-grupos-whatsapp"],
    blocks: [
      {
        type: "copylist",
        title: "Nombres discretos para el grupo",
        items: [
          { text: "Reunión de la comunidad de vecinos" },
          { text: "Revisión de la caldera" },
          { text: "Club de lectura (nadie ha leído)" },
          { text: "Informe trimestral de pistachos" },
          { text: "Comité de cosas que no tocan" },
        ],
      },
      {
        type: "copylist",
        title: "Mensaje inicial",
        items: [
          {
            text: "Hola a todos. El 12 es el cumple de Álex y le vamos a hacer una sorpresa. Regla número uno: NO se habla de esto en ningún otro grupo, ni en el de siempre. Confirmad aquí antes del jueves si venís. Y por favor, nada de «jajaja ya sabes lo del sábado» delante de él.",
          },
        ],
      },
      {
        type: "chat",
        title: "Se enteró por el grupo equivocado",
        messages: [
          { who: "Grupo de siempre", text: "Álex, ¿tú vas a ir el sábado a lo de tu sorpresa?" },
          { who: "Álex", text: "¿Qué sorpresa?" },
          { who: "Grupo de siempre", text: "…" },
          { who: "Grupo de siempre", text: "Nada, que quería decir «tarta». O «tardes». Eso." },
          { who: "Sistema", text: "Marcos ha salido del grupo" },
        ],
      },
      {
        type: "checklist",
        title: "Checklist corto",
        items: [
          "Alguien de confianza hace de cómplice: sabe dónde está el homenajeado y lo lleva al sitio.",
          "Una coartada ensayada («cena con mi hermano») que suene normal.",
          "Todos dicen la misma frase si el homenajeado pregunta. Una.",
          "Fecha y hora cerradas 48 horas antes. Después, nada de cambios.",
          "Un responsable de la tarta y otro de avisar cuando el homenajeado está llegando.",
          "Plan B si el homenajeado odia las sorpresas: se hace una cena pequeña, sin gritos ni luces apagadas.",
        ],
      },
    ],
  },
  {
    slug: "regalos-absurdos-40-cumpleanos",
    section: "regalos",
    title: "Regalos absurdos para un amigo que cumple 40",
    h1: "Regalos absurdos para el amigo que cumple 40",
    description:
      "Ideas de regalo absurdas y personalizadas para un cumpleaños de 40: caseras, personalizadas y colectivas, según el presupuesto.",
    answer:
      "Cumple 40 y tú tienes que decidir. Elige según presupuesto: casero (casi gratis), personalizado (con su cara) o colectivo (entre varios). Al final, un mensaje para organizar el bote.",
    problema: "Qué regalar",
    tag: "Regalos",
    related: ["organizar-cumpleanos-sorpresa", "quien-dijo-esto"],
    blocks: [
      {
        type: "ideas",
        title: "Caseras",
        budget: "0-10 €",
        items: [
          { titulo: "Diploma oficial de 40 años", texto: "Con sello (vale una patata) y firma de todos los presentes. Lo enmarcas y el drama está servido." },
          { titulo: "40 razones por las que lo seguimos aguantando", texto: "Una tarjeta por razón, en un bote. Que cada amigo escriba tres." },
          { titulo: "Cupones canjeables", texto: "«Un día sin que tengas que decidir dónde cenamos». «Un bizum de emergencia (máximo 5 €)»." },
        ],
      },
      {
        type: "ideas",
        title: "Personalizadas",
        budget: "10-40 €",
        items: [
          { titulo: "Caretas con su cara", texto: "Cartón impreso con su foto, para que toda la mesa se haga pasar por él. Funciona siempre." },
          { titulo: "Calcetines o taza con su peor foto", texto: "La del carné de 2009 es una buena opción. La de la boda de su primo, mejor aún." },
          { titulo: "Camiseta «40 años de garantía caducada»", texto: "Con letras grandes y un número de serie inventado." },
        ],
      },
      {
        type: "ideas",
        title: "Colectivas",
        budget: "40-150 € entre varios",
        items: [
          { titulo: "Vídeo-mensaje de 40 segundos", texto: "Cada amigo graba 40 segundos. Montaje cutre, pero emotivo. Se llora de risa." },
          { titulo: "Cesta de 40 mini-regalos", texto: "Cada amigo aporta 4 o 5 cosas absurdas, de las de gasolinera. Todo envuelto en papel de periódico." },
          { titulo: "Experiencia + mural", texto: "Una cena o una actividad pagada a bote, y un mural donde cada uno cuenta una anécdota." },
        ],
      },
      {
        type: "copylist",
        title: "Mensaje para organizar el bote",
        items: [
          {
            text: "Equipo, Álex cumple 40 y queremos hacer un regalo colectivo. Idea: bote de 15 € cada uno. Quien quiera participar, Bizum a [tu número] antes del [fecha]. Con lo que salga, compramos algo gordo. Prometo no gastarlo en cerveza. Mucho.",
          },
        ],
      },
    ],
  },
  {
    slug: "quien-dijo-esto",
    section: "juegos",
    title: "¿Quién dijo esto en el grupo?",
    h1: "¿Quién dijo esto en el grupo?",
    description:
      "Un juego para grupos de WhatsApp: adivina qué tipo de persona dijo cada frase. Reglas, ejemplos y una ronda de muestra jugable en el navegador.",
    answer:
      "Se trata de adivinar quién dijo cada frase. Empieza por la ronda de muestra aquí abajo (son frases inventadas) y, si te gusta, monta la tuya con las frases de tu grupo, siempre voluntarias.",
    problema: "Un juego para el grupo",
    tag: "Juego",
    related: ["juegos-grupo-mixto-no-se-conoce", "nombres-grupos-whatsapp"],
    blocks: [
      { type: "play" },
      {
        type: "steps",
        title: "Reglas para jugar con tu grupo",
        items: [
          "Pide frases voluntarias. Cada uno manda por privado una frase que haya dicho en el grupo, o una inventada. Nadie está obligado.",
          "Anónimas siempre. Quien monta el juego las apunta sin decir de quién son.",
          "Se lee una frase en voz alta y todos votan quién creen que la dijo.",
          "Un punto por acierto. El que menos puntos tenga, paga la ronda.",
          "Veto: si una frase hace daño a alguien, fuera. Se juega para reírse con el grupo, no del grupo.",
        ],
      },
      {
        type: "copylist",
        title: "Mensaje para pedir las frases",
        items: [
          {
            text: "Voy a montar un juego: «¿Quién dijo esto?». Mandadme por privado una frase que hayáis dicho en este grupo (o una que os gustaría haber dicho). Son anónimas y nadie está obligado. Las leo en voz alta durante la cena y votamos quién la dijo. Plazo: [fecha].",
          },
        ],
      },
      {
        type: "chat",
        title: "Ejemplo de ronda",
        messages: [
          { who: "Organizador", text: "Frase 3: «Yo me adapto a lo que digáis, pero Ibiza no»." },
          { who: "Ana", text: "Es el Yo Me Adapto" },
          { who: "Pablo", text: "Es Pablo, ¿no?" },
          { who: "Pablo", text: "…soy yo." },
        ],
      },
    ],
  },
];

export const SECTIONS = {
  despedidas: { label: "Despedidas", path: "/" },
  cumpleanos: {
    label: "Cumpleaños",
    path: "/cumpleanos/",
    title: "Cumpleaños: sorpresas, juegos y problemas de organización",
    description:
      "Cómo organizar un cumpleaños sin que se entere el homenajeado, sin que el grupo se vaya a pique y sin morir en el intento.",
    intro:
      "Un cumpleaños sorpresa es un grupo de WhatsApp con secretos. Y todos sabemos cómo acaban los secretos en un grupo de WhatsApp.",
  },
  regalos: {
    label: "Regalos",
    path: "/regalos/",
    title: "Regalos absurdos, personalizados y colectivos",
    description:
      "Ideas de regalo para amigos y familiares: caseras, personalizadas y de varias personas, según el presupuesto y las ganas de reírse.",
    intro:
      "Regalar es fácil hasta que lo haces entre doce. Aquí hay ideas para todos los bolsillos y un mensaje para que el bote no se convierta en una pelea.",
  },
  juegos: {
    label: "Juegos",
    path: "/juegos/",
    title: "Juegos para grupos: instrucciones y materiales",
    description:
      "Juegos para despedidas, cumpleaños y cenas de grupo, con instrucciones, duración y tamaño recomendado. Algunos se juegan aquí mismo.",
    intro:
      "Juegos para cuando el grupo no se conoce, para cuando se conoce demasiado y para cuando solo queréis reíros un rato.",
  },
} as const;

export function articlePath(a: Pick<Article, "section" | "slug">) {
  return `/${a.section}/${a.slug}/`;
}

export function getArticle(section: string, slug: string) {
  return articles.find((a) => a.section === section && a.slug === slug);
}

export function bySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function bySection(section: Article["section"]) {
  return articles.filter((a) => a.section === section);
}

/** Filtro simple por tipo de problema (datos editoriales). */
export function byProblema(problema: string) {
  return articles.filter((a) => a.problema === problema);
}

/** Artículos que aparecen en el bloque de recursos de la portada. */
export const HOME_ORDER = [
  "nombres-grupos-whatsapp",
  "mensajes-pedir-bizum",
  "juegos-grupo-mixto-no-se-conoce",
];
