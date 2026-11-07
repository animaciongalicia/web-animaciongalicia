import type { Pieza } from "./types";

/**
 * Posts de Menú Marrón. Para añadir uno: copia un objeto, cambia el slug y rellena `bloques`.
 * La URL sale sola: /<seccion>/<slug>/. Con `borrador: true` solo se ve en preview.
 *
 * Bloques: p, h2, ul, ol, caja (idea | ojo | dato | frase), cita, leetambien (slug de otro post).
 * Los nombres de personas son inventados. Las ideas son editoriales: no proceden de una fuente concreta.
 */
export const piezas: Pieza[] = [
  {
    slug: "despedida-como-resacon-en-las-vegas",
    seccion: "despedidas",
    tag: "Supervivencia",
    titulo: "Si tu despedida de soltero acaba como Resacón en Las Vegas: guía de supervivencia en Galicia",
    h1: "Si tu despedida de soltero acaba como Resacón en Las Vegas",
    dek: "En la peli, los amigos se despiertan sin novio y sin memoria. En Vigo, A Coruña o Sanxenxo también puede pasar. Esto es lo que hay que dejar atado antes de la primera ronda.",
    fecha: "2026-11-07",
    destacada: true,
    galicia: true,
    relacionadas: ["secuestro-falso-despedida-de-soltero", "aplicaciones-compartir-gastos-despedida"],
    bloques: [
      {
        t: "p",
        x: "En Resacón en Las Vegas, tres amigos se despiertan después de una despedida de soltero sin recordar nada y sin el novio. Es una comedia buenísima. Lo tuyo, en cambio, no debería ser una comedia: debería ser una despedida de soltero en Galicia que termina con todo el mundo en su cama y el novio entero el sábado de la boda.",
      },
      {
        t: "p",
        x: "La diferencia entre una despedida legendaria y un parte de incidencias casi nunca es la locura del plan. Es que alguien ha pensado tres cosas antes de salir: dónde está cada uno, cómo se vuelve y quién manda cuando todos han dejado de mandar. Con eso, el resto lo puede improvisar el grupo.",
      },
      { t: "h2", x: "Seis reglas para que la noche sea una historia y no un expediente" },
      {
        t: "ol",
        x: [
          "Una persona de enlace. Alguien que beba poco, tenga batería y no se ofenda por ser el aburrido oficial. Esa persona sabe siempre dónde está el novio.",
          "Ubicación compartida. Activad la ubicación en tiempo real en el grupo de WhatsApp antes de salir. Si el novio desaparece en la zona del puerto de Vigo, se localiza en un minuto.",
          "Alojamiento cerca de todo. En Sanxenxo o en el centro de A Coruña, dormir a diez minutos andando evita la peor decisión de la noche: coger el coche.",
          "El transporte de vuelta se reserva antes de beber. En un fin de semana con mucha gente puede costar encontrar un taxi a las cuatro de la mañana. Dejad el teléfono de uno apuntado.",
          "Prueba de vida. Una foto de grupo cada hora, a las en punto. Si falta alguien en la de las 2:00, sabéis desde cuándo.",
          "Cada uno lleva su DNI y el nombre del alojamiento apuntado en el móvil de otro. Parece una tontería hasta que se te acaba la batería.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Lo que no se hace",
        x: [
          "No se deja solo a quien va mal, aunque proteste.",
          "No se hacen apuestas con dinero que no sea suyo. Menos aún con el de la boda.",
          "No se graba ni se publica nada que el novio no querría ver en el grupo de su familia.",
        ],
      },
      { t: "h2", x: "Cómo repartir el caos para que no se junte todo" },
      {
        t: "p",
        x: "El error más común es meter todo en la misma noche: cena, barco, bares, discoteca y sorpresa. La noche más épica es la que tiene un hilo y cuatro huecos para que cada uno respire. Una cena larga con marisco, un paseo, un par de sitios y, si hace falta, un último plan cerca de donde se duerme.",
      },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Plan tipo en una ciudad gallega",
        x: [
          "20:30 Cena en grupo, sin prisa y con una cuenta única.",
          "23:00 Primer bar, con el novio a la vista.",
          "01:00 Segundo plan, con prueba de vida.",
          "03:00 Vuelta al alojamiento. Quien quiera seguir sigue, el novio no.",
        ],
      },
      { t: "h2", x: "Y si ya ha pasado" },
      {
        t: "p",
        x: "Si el novio ha desaparecido, no te lances a buscarlo por todas partes. Mira primero la ubicación compartida, llama a la persona de enlace y revisad el último sitio donde estuvo. Si pasa mucho tiempo sin noticias, es el momento de llamar al 112 sin vergüenza: el cuento de la boda no justifica el miedo.",
      },
      {
        t: "caja",
        tipo: "frase",
        x: "La mejor despedida es la que se cuenta durante años. La peor, la que no se puede contar.",
      },
      { t: "leetambien", slug: "aplicaciones-compartir-gastos-despedida" },
    ],
  },
  {
    slug: "ideas-locas-grupo-whatsapp-despedida",
    seccion: "despedidas",
    tag: "Grupo de WhatsApp",
    titulo: "Ideas locas para el grupo de WhatsApp de una despedida de soltera o de soltero",
    h1: "Ideas locas para el grupo de WhatsApp de una despedida",
    dek: "El grupo de WhatsApp es donde se organiza todo y donde se muere todo. Ocho ideas para que la gente conteste, pague a tiempo y, de paso, se ría.",
    fecha: "2026-11-06",
    galicia: true,
    relacionadas: ["frases-para-camisetas-despedida", "despedida-como-resacon-en-las-vegas"],
    bloques: [
      {
        t: "p",
        x: "Sabes cómo empieza: alguien crea el grupo, entran diecisiete personas, el primer día hay cincuenta mensajes y el tercero un «jajaja» solitario. Organizar una despedida de soltera en Galicia, o de soltero, o mixta, es en realidad organizar un grupo de WhatsApp. Y un grupo que no se mueve no hace ninguna despedida.",
      },
      {
        t: "p",
        x: "Estas ideas no sirven para nada que no sea ponértelo más fácil. Algunas son serias, otras no, y casi todas funcionan mejor si las anuncias con mucha solemnidad.",
      },
      { t: "h2", x: "Ocho ideas para mover el grupo" },
      {
        t: "ol",
        x: [
          "El edicto. Fija un mensaje con fecha, precio y cuenta, y llámalo «Edicto de la despedida». Quien pregunte lo que ya está fijado recibe una respuesta: «Consulte el edicto».",
          "La cuenta atrás en el nombre del grupo. Cambia el nombre cada día: «Faltan 23 días y 0 planes», «Faltan 22 días y 1 plan». Cuando por fin hay plan, el nombre lo celebra.",
          "El semáforo de respuestas. Verde: voy. Rojo: no voy. Amarillo: me lo miro, que cuenta como no. Se contesta solo con un emoji y se acaban las novelas.",
          "El audio de diez segundos. Cualquier audio que pase de diez segundos obliga a pagar una ronda. Los audios de cuatro minutos pasan a mejor vida.",
          "El grupo trampa. Si hay sorpresa, crea un segundo grupo con el homenajeado dentro y un nombre aburridísimo, como «Reunión de la comunidad». Ahí se habla de cualquier cosa menos de la fiesta.",
          "La encuesta con una sola opción. Pregunta «¿Os parece bien cenar en Vigo el sábado?» con las opciones «Sí» y «Sí». Nadie podrá decir que no se le consultó.",
          "El minuto de silencio. Cuando alguien se cae del plan, el grupo guarda un minuto de silencio. En la práctica, se ponen todos un emoji de vela y siguen.",
          "La cuota de memes. Cada día, un meme sobre el novio o la novia. Quien no lo manda, lo paga. Quien lo manda, queda al frente del ranking.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Dos líneas rojas",
        x: [
          "Nada de hablar de la sorpresa en el grupo donde está el homenajeado. Ya lo sabes: alguien lo hará.",
          "Nada de memes que humillen de verdad. La gracia es que el novio se ría, no que llore en el baño.",
        ],
      },
      { t: "h2", x: "Cómo se organiza de verdad" },
      {
        t: "p",
        x: "Las ideas anteriores solo funcionan si debajo hay tres decisiones claras: fecha, presupuesto y una persona que decide. Sin esas tres, el grupo se convierte en un parlamento. En Galicia, donde cualquier plan tiene diez variantes (¿Sanxenxo, Vigo, la ría, una casa rural?), conviene que alguien corte el debate con una frase: «Se vota hasta el jueves, y gana lo más votado».",
      },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Mensaje de arranque",
        x: "Equipo, ya hay grupo. Fecha provisional: [fecha]. Presupuesto: [importe] por persona. Mensaje fijado arriba. Se contesta con un emoji: verde voy, rojo no voy. Plazo: el jueves. Quien no conteste, no vota.",
      },
      { t: "leetambien", slug: "aplicaciones-compartir-gastos-despedida" },
    ],
  },
  {
    slug: "aplicaciones-compartir-gastos-despedida",
    seccion: "despedidas",
    tag: "Dinero",
    titulo: "Aplicaciones para compartir gastos en una despedida (y no pelearte con el grupo)",
    h1: "Aplicaciones para compartir gastos en una despedida",
    dek: "Alguien paga el barco, otro la cena y un tercero la casa rural. Al final, nadie sabe quién debe qué. Estas apps lo resuelven sin discusiones.",
    fecha: "2026-11-05",
    galicia: true,
    relacionadas: ["ideas-locas-grupo-whatsapp-despedida", "despedida-como-resacon-en-las-vegas"],
    bloques: [
      {
        t: "p",
        x: "Una despedida de soltero o de soltera en Galicia suele tener tres tipos de gasto: lo que se paga entre todos (alojamiento, barco o casa rural), lo que paga uno por todos (la cena, la tarta) y lo que paga cada uno por su cuenta. El caos llega cuando se mezclan. El marrón de organizar no es pedir el dinero: es llevar la cuenta.",
      },
      {
        t: "p",
        x: "Hay herramientas hechas justo para esto. Ninguna es mágica, pero todas son mejores que una nota en el móvil y un «yo creo que te debo veinte».",
      },
      { t: "h2", x: "Las cuatro opciones que más se usan" },
      {
        t: "ul",
        x: [
          "Tricount. Pensada para eventos y viajes: creas un evento, añades a la gente, apuntas cada gasto y la app calcula quién debe a quién. Se comparte con un enlace, ideal para un grupo grande.",
          "Splitwise. La veterana. Reparte gastos de forma muy flexible y lleva el saldo de cada persona. Algunas funciones son de pago, así que conviene mirar qué incluye la versión gratuita antes de montar el grupo.",
          "Settle Up. Otra aplicación de gastos compartidos para viajes y planes de grupo. Es una alternativa si las anteriores no os convencen.",
          "Bizum. No lleva la cuenta, pero cobra: con la opción de solicitar dinero que tienen muchas apps de bancos, puedes pedir una cantidad a varias personas a la vez.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Compruébalo antes",
        x: "Las funciones y los planes gratuitos de las aplicaciones cambian. Antes de crear el grupo, mira en cada una qué permite hacer gratis y cuántas personas admite.",
      },
      { t: "h2", x: "Cuál elegir según tu despedida" },
      {
        t: "ol",
        x: [
          "Una cena y poco más: no hace falta app. Una persona paga y pide el importe por Bizum.",
          "Un fin de semana en Sanxenxo, Vigo o A Coruña con alojamiento y varias comidas: una app de gastos compartidos. Cada uno apunta lo que paga y la app liquida al final.",
          "Un grupo de más de diez personas o con invitados que no se conocen: elegid la app que se pueda usar con un enlace, sin que cada persona tenga que crearse una cuenta.",
        ],
      },
      { t: "h2", x: "Cómo evitar que se líe" },
      {
        t: "p",
        x: "Tres normas sencillas evitan el 90 % de las discusiones. Primera: los gastos se apuntan en la app, no en el grupo de WhatsApp, donde se pierden a los cinco minutos. Segunda: una persona revisa el saldo cada noche y lo cierra al final. Tercera: se acuerda desde el principio qué pasa con quien se cae del plan, porque la señal ya está pagada.",
      },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Mensaje para pegar en el grupo",
        x: "Los gastos se apuntan en la app, no en el grupo. Enlace en el mensaje fijado. Quien no apunte lo que paga, se lo come. Cierro cuentas el domingo a las 20:00 y lo hacemos todo en una sola liquidación.",
      },
      {
        t: "caja",
        tipo: "dato",
        titulo: "Truco",
        x: "Acordad una moneda de cambio: si alguien paga algo por todos, lo apunta en la app en el momento. Si lo apunta tres días después, ya no se acuerda de qué era.",
      },
      { t: "leetambien", slug: "ideas-locas-grupo-whatsapp-despedida" },
    ],
  },
  {
    slug: "secuestro-falso-despedida-de-soltero",
    seccion: "juegos",
    tag: "Reto",
    titulo: "El secuestro falso: la despedida de soltero que acaba en una casa rural gallega",
    h1: "El secuestro falso: una despedida de soltero con actores, venda y casa rural",
    dek: "Un grupo de actores irrumpe, «secuestra» al novio y se lo lleva a una casa rural o a un restaurante donde le esperan los amigos. Es espectacular. También puede salir fatal si no lo preparas bien.",
    fecha: "2026-11-04",
    galicia: true,
    relacionadas: ["retos-de-plaza-declaracion-cantada-flashmob", "despedida-como-resacon-en-las-vegas"],
    bloques: [
      {
        t: "p",
        x: "El secuestro falso es uno de los clásicos de las despedidas de soltero. Unos actores compinchados irrumpen en un momento concreto, ponen una venda al novio, le atan las manos de forma simbólica y se lo llevan en un coche. El destino suele ser una casa rural o el propio restaurante, donde los amigos esperan con música, una mesa larga y mucho ruido.",
      },
      {
        t: "p",
        x: "Es un plan con una ventaja enorme: el novio llega al sitio sin saber dónde va, y el resto del grupo ya está allí. Y un inconveniente igual de grande: si algo sale mal, sale muy mal.",
      },
      { t: "h2", x: "Cómo se monta para que funcione" },
      {
        t: "ol",
        x: [
          "Elige el momento y el sitio. Mejor un lugar privado: la puerta de su casa, un garaje o la entrada de un local donde ya se ha avisado. En plena calle, alguien puede llamar al 112 sin dudar.",
          "Contrata gente con experiencia o a amigos que se lo tomen en serio. Que sepan qué decir, qué no tocar y cuándo parar.",
          "Define la señal de parada. Una palabra clave que el novio conozca de antemano o que cualquiera del grupo pueda gritar para cortar el juego.",
          "Venda ligera, manos sin apretar. Ninguna cuerda de verdad ni nada que impida respirar. La gracia es que lo parezca, no que lo sea.",
          "Trayecto corto y conocido. Alguien del grupo va en el coche. En Galicia, entre las Rías Baixas, Ourense y Lugo hay casas rurales a media hora de cualquier ciudad, y ese margen de tiempo es perfecto.",
          "Recibimiento con música. Al quitar la venda, el grupo entero con música y bebida. Es el momento que se recuerda.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Cuándo NO hacerlo",
        x: [
          "Si el novio lleva mal los sustos, tiene ansiedad o ha vivido algo parecido. No es un plan para todo el mundo.",
          "Si no puedes asegurar que no habrá un malentendido con la policía. Avisa si lo haces en un sitio público.",
          "Si el grupo es de los que se descontrolan. Un secuestro falso con alcohol y prisas es una receta para un disgusto.",
        ],
      },
      { t: "h2", x: "Lo que hace que la gente lo recuerde" },
      {
        t: "p",
        x: "No es la venda, es la logística. Cuando el novio llega a la casa rural, tiene que estar todo listo: música, comida, bebida y el grupo completo. Si hay que esperar veinte minutos a que lleguen los demás, la magia desaparece. Haced un ensayo mental del recorrido y programad la llegada con el grupo ya dentro.",
      },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Mensaje para el grupo (el día D)",
        x: "Operación [nombre]. Salimos a las [hora]. Los actores llegan a las [hora]. Nadie escribe nada en el grupo del novio hasta que lo vendemos. Llegada al sitio: [hora]. Palabra de parada: [palabra]. Si alguien llega tarde, entra sin hablar.",
      },
      {
        t: "caja",
        tipo: "frase",
        x: "El mejor secuestro falso es el que el novio cuenta, años después, como «la mejor noche de mi vida».",
      },
      { t: "leetambien", slug: "retos-de-plaza-declaracion-cantada-flashmob" },
    ],
  },
  {
    slug: "retos-de-plaza-declaracion-cantada-flashmob",
    seccion: "juegos",
    tag: "Retos",
    titulo: "Dos retos de plaza para una despedida: la declaración cantada y el flashmob solitario",
    h1: "Dos retos de plaza para una despedida: la declaración cantada y el flashmob solitario",
    dek: "Cantar una declaración de amor a un desconocido o bailar solo con los auriculares puestos mientras tus amigos fingen no conocerte. Dos pruebas de plaza para despedidas de soltero y soltera.",
    fecha: "2026-11-03",
    galicia: true,
    relacionadas: ["secuestro-falso-despedida-de-soltero", "frases-para-camisetas-despedida"],
    bloques: [
      {
        t: "p",
        x: "Hay retos que solo funcionan en la calle. Necesitan público, vergüenza propia y un grupo de amigos dispuesto a mirar desde lejos. Estos dos son clásicos de las despedidas, y funcionan igual en la plaza de una villa gallega que en una zona peatonal de Vigo, A Coruña o Santiago un sábado por la tarde.",
      },
      { t: "h2", x: "Reto 1: la declaración de amor cantada" },
      {
        t: "p",
        x: "El novio o la novia se acerca a un transeúnte al azar y le canta una declaración de amor eterno, a pleno pulmón, en mitad de la plaza. Vale ópera, rap o reggaeton. Cuanto menos coherente con el estilo, mejor.",
      },
      {
        t: "ul",
        x: [
          "Pide permiso antes de actuar: un «¿te puedo cantar algo?» evita malentendidos y convierte la escena en una broma compartida.",
          "Nada de pedir el teléfono si no es con mucho humor y marcha atrás inmediata. Si alguien dice que no, se acaba.",
          "Elige a quien parezca receptivo: grupos de amigos, turistas o gente que ya sonríe.",
          "Que alguien del grupo lleve un altavoz pequeño con la base de la canción. Cantar sin música es el nivel difícil.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Un límite claro",
        x: "El reto es una broma, no una presión. Si la otra persona se siente incómoda, se corta, se pide perdón y se pasa al siguiente. Una despedida no justifica molestar a nadie.",
      },
      { t: "h2", x: "Reto 2: el flashmob solitario" },
      {
        t: "p",
        x: "El novio se pone unos auriculares con la música a todo volumen y le toca bailar de forma desenfrenada en una zona peatonal concurrida. Los amigos lo graban desde lejos, haciendo como que no lo conocen de nada. Es el reto que más se recuerda porque la reacción de la gente es imprevisible.",
      },
      {
        t: "ol",
        x: [
          "Elegid una canción reconocible y con mucha energía. Una que el novio baile mal pero con convicción.",
          "Buscad un sitio con paso constante: un paseo marítimo, una calle comercial o una plaza concurrida en las Rías Baixas.",
          "Los amigos graban desde distintas distancias, sin acercarse. La gracia es que nadie lo conoce.",
          "Duración máxima: tres minutos. Más tiempo no mejora nada y cansa al bailarín.",
          "Si alguien pregunta qué pasa, el novio contesta con total seriedad: «Estoy ensayando».",
        ],
      },
      {
        t: "caja",
        tipo: "dato",
        titulo: "Sobre las grabaciones",
        x: "Si publicáis el vídeo, desenfocad o recortad las caras de las personas que salgan sin saberlo. Es de buena educación y evita problemas de derecho a la propia imagen. Lo más seguro es quedárselo para el grupo.",
      },
      { t: "h2", x: "Cómo combinarlos" },
      {
        t: "p",
        x: "Funcionan mejor como parte de un recorrido: una comida larga, un par de retos de plaza a media tarde y la cena. Dejad un descanso entre ambos para que el novio coja aire. Y si hay novia y novio en la misma despedida, que cada uno haga el reto del otro.",
      },
      {
        t: "caja",
        tipo: "frase",
        x: "Cantar en una plaza es fácil. Lo difícil es que luego tus amigos no lo suban a sus redes.",
      },
      { t: "leetambien", slug: "secuestro-falso-despedida-de-soltero" },
    ],
  },
  {
    slug: "frases-para-camisetas-despedida",
    seccion: "regalos",
    tag: "Camisetas",
    titulo: "Frases chotas para camisetas de despedida de soltera y de soltero",
    h1: "Frases chotas para camisetas de despedida (de soltera y de soltero)",
    dek: "Habrá camisetas, porque siempre hay camisetas. Que no sea otra vez «Team Novia». Frases de las buenas, con pie para Vigo, Sanxenxo o donde os lleve el marrón.",
    fecha: "2026-11-02",
    galicia: true,
    relacionadas: ["disfraces-para-novio-o-novia-despedida", "ideas-locas-grupo-whatsapp-despedida"],
    bloques: [
      {
        t: "p",
        x: "Toda despedida tiene su momento camiseta. Alguien propone «llevamos todos lo mismo», el grupo de WhatsApp pasa de cero a cuarenta mensajes y a los diez minutos nadie se acuerda de qué se pidió. Una buena frase decide si la foto de grupo acaba en el móvil de todos o en la papelera.",
      },
      {
        t: "p",
        x: "Aquí van frases chotas, de las que se leen desde lejos, y algunas con guiño gallego. Cámbialas, mézclalas o dáselas a quien las quiera hacer peor.",
      },
      { t: "h2", x: "Para la novia y su cuadrilla" },
      {
        t: "ul",
        x: [
          "Última noche libre (la anterior fue por error).",
          "Dijo que sí. Nosotras decimos «otra ronda».",
          "Mi amiga se casa y yo solo vengo por el albariño.",
          "Novia en libertad condicional.",
          "Dama de honor, de honor dudoso.",
          "Team Novia (yo ya hice el Bizum).",
          "Queimada, conxuro y consecuencias.",
        ],
      },
      { t: "h2", x: "Para el novio y su pandilla" },
      {
        t: "ul",
        x: [
          "Último fin de semana con permiso.",
          "Lo que pasa en Vigo se queda en Vigo (hasta el grupo de WhatsApp).",
          "Equipo del novio: sin experiencia y con muchas ganas.",
          "Soltero hasta que su madre diga lo contrario.",
          "Despedida en Sanxenxo: el mar es lo único que no se emborracha.",
          "Ni novio ni nada: vengo por la fiesta.",
          "El novio paga (una tradición que acabo de inventar).",
        ],
      },
      {
        t: "caja",
        tipo: "frase",
        x: "Si me ves bailando en la plaza, soy del equipo del novio.",
      },
      { t: "h2", x: "Para grupos mixtos (y para los que no se conocen)" },
      {
        t: "ul",
        x: [
          "Me casan a mí, pero el que paga eres tú.",
          "Nos conocimos hoy. Mañana seremos amigos o testigos.",
          "Equipo mixto, resultado imprevisible.",
          "Yo vine por el novio. Me quedo por la cena.",
          "Presentaciones incómodas S. L. (con sede en Vigo).",
        ],
      },
      { t: "h2", x: "Cómo hacerlo sin que acabe en desastre" },
      {
        t: "ol",
        x: [
          "Votad una sola frase por grupo. Si hay tres, habrá tres facciones.",
          "Encargad con tiempo. Las camisetas personalizadas suelen tardar días, y la despedida no espera.",
          "Pedid las tallas por adelantado, con una tabla en el grupo. Y una de más, siempre.",
          "Pensad en el tiempo. En Galicia llueve: una camiseta debajo de un chubasquero no se ve. Elegid un día en el que se pueda ir sin abrigo, o llevad la frase también en la espalda.",
          "Elegid colores que no se lleven mal con una mancha. Después de la cena de marisco, el blanco ya no lo es.",
          "Probad una antes de encargar veinte. Una camiseta de prueba cuesta poco y evita el desastre de ver la frase mal escrita con todo el grupo ya pagado.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Un detalle",
        x: "Si la sorpresa es para la novia, no pongas su nombre en el grupo antes de tiempo. Lo ves venir, lo hemos visto todos.",
      },
      {
        t: "caja",
        tipo: "dato",
        titulo: "El truco del regalo",
        x: "Pon una frase distinta a cada uno en la espalda y la del grupo al frente. Las fotos de espaldas cuentan más historias.",
      },
      { t: "leetambien", slug: "disfraces-para-novio-o-novia-despedida" },
    ],
  },
  {
    slug: "disfraces-para-novio-o-novia-despedida",
    seccion: "regalos",
    tag: "Disfraces",
    titulo: "Disfraces baratos para el novio o la novia: qué buscar en Amazon para una despedida",
    h1: "Disfraces baratos para el novio o la novia: qué buscar en Amazon",
    dek: "El disfraz decide la foto. Sin hacer una fortuna ni comprar algo que no se pueda lavar, esto es lo que merece la pena buscar y lo que conviene evitar.",
    fecha: "2026-11-01",
    galicia: true,
    relacionadas: ["frases-para-camisetas-despedida", "retos-de-plaza-declaracion-cantada-flashmob"],
    bloques: [
      {
        t: "p",
        x: "Un disfraz es el mejor aliado del grupo en una despedida: convierte al novio o a la novia en el centro de todas las miradas sin que tengas que hacer nada más. En una zona peatonal de Vigo o en el paseo de Sanxenxo, el disfraz hace el trabajo mientras el resto bebe tranquilo.",
      },
      {
        t: "p",
        x: "Las tiendas online como Amazon están llenas de opciones. El problema no es encontrar disfraces, es no pillar uno que sea incómodo, que llegue tarde o que se rompa a la segunda hora.",
      },
      { t: "h2", x: "Qué buscar" },
      {
        t: "ul",
        x: [
          "Disfraces hinchables: se ven desde lejos y no dan calor si el aire corre. Son los reyes de las fotos de grupo.",
          "Monos y trajes de una pieza: rápidos de poner, fáciles de quitar y con fotos garantizadas.",
          "Conjuntos de pareja: si la despedida es de los dos, vestirse a juego funciona mejor que cada uno por su lado.",
          "Accesorios sueltos: una corona, una banda, una peluca o un velo. Son baratos y cambian la imagen por completo.",
          "Disfraces temáticos de marinero o pirata: encajan en cualquier despedida en la costa gallega.",
        ],
      },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Cómo buscarlos",
        x: "Prueba con búsquedas como «disfraz hinchable adulto», «mono divertido despedida» o «disfraz pareja adulto». Ordena por valoraciones y mira siempre las fotos que suben los compradores, no solo las del anuncio.",
      },
      { t: "h2", x: "Antes de comprar: cinco comprobaciones" },
      {
        t: "ol",
        x: [
          "Talla real. Los disfraces suelen salir pequeños. Si dudas, sube una talla.",
          "Plazo de entrega. Pide con tiempo suficiente y comprueba que se pueda devolver si no llega a tiempo o no sirve.",
          "Tela. Si es de poliéster fino, un par de horas bailando y se convierte en una sauna. En verano en Sanxenxo, mejor transpirable.",
          "Lavado. Comprueba si se puede lavar. Un disfraz de marisco con manchas de marisco no tiene recuperación.",
          "Lluvia. En Galicia llueve. Piensa en un disfraz que aguante un chubasquero encima o que se vea igual con él.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "Mejor evitar",
        x: [
          "Uniformes de cuerpos oficiales (policía, guardia civil): pueden dar lugar a malentendidos.",
          "Disfraces que tapen toda la cara si va a haber mucho movimiento o alcohol.",
          "Cualquier cosa que ofenda a alguien por su origen, su aspecto o su condición.",
        ],
      },
      { t: "h2", x: "El disfraz como regalo" },
      {
        t: "p",
        x: "Un buen disfraz es también un buen regalo para el novio o la novia. Puede ir en caja grande con su nombre y entregarse en la cena, delante de todos. Mejor aún si el grupo ha elegido el disfraz entre varios, con una votación en el chat.",
      },
      {
        t: "caja",
        tipo: "frase",
        x: "El disfraz perfecto es el que el novio odia durante veinte minutos y recuerda durante veinte años.",
      },
      { t: "leetambien", slug: "frases-para-camisetas-despedida" },
    ],
  },
  {
    slug: "cumpleanos-tematicos-adultos-galicia",
    seccion: "cumpleanos",
    tag: "Temáticos",
    titulo: "Cumpleaños temáticos para adultos en Galicia: ideas para organizar sin morir en el intento",
    h1: "Cumpleaños temáticos para adultos en Galicia: ideas para organizar sin morir",
    dek: "Un cumpleaños con tema promete mucho y se organiza con poco. Siete ideas para adultos, con consejos para elegir sitio, vestuario y plan B para la lluvia gallega.",
    fecha: "2026-10-31",
    galicia: true,
    relacionadas: ["disfraces-para-novio-o-novia-despedida", "ideas-locas-grupo-whatsapp-despedida"],
    bloques: [
      {
        t: "p",
        x: "Organizar un cumpleaños en Galicia con un tema funciona por una razón sencilla: le da al grupo algo de lo que hablar que no sea «¿al final qué hacemos?». Un tema decide la ropa, la música, la comida y el tono. Y evita que todo el mundo llegue con la misma camiseta de siempre.",
      },
      {
        t: "p",
        x: "El tema no tiene que ser un disfraz completo ni una producción. A veces basta un detalle que cambie el chip de la gente al entrar por la puerta.",
      },
      { t: "h2", x: "Siete temas que funcionan con adultos" },
      {
        t: "ol",
        x: [
          "Años 80 o 90. Música, ropa y cutrez nostálgica. Lo más fácil de organizar y con más gente dispuesta a participar.",
          "Noche de casino. Fichas, mesa de juego y traje o vestido de gala. Se puede hacer en un local o en casa.",
          "Cena misterio. Los invitados reciben un personaje y resuelven un caso durante la cena. Necesita un guion, pero el resultado es inolvidable.",
          "Fiesta de máscaras. Todo el mundo con antifaz, y que nadie diga quién es hasta la medianoche.",
          "Piratas en la ría. Si hay barco o paseo marítimo cerca, el tema se explica solo. Pensad siempre en un plan B por el tiempo.",
          "Queimada temática. Con conxuro, ambiente de leyenda y vasos preparados. Mejor al aire libre y con alguien que sepa hacerla.",
          "Hawaiana de invierno. Collares, camisas de colores y una playlist de verano para ahuyentar el frío gallego.",
        ],
      },
      {
        t: "caja",
        tipo: "ojo",
        titulo: "El plan B del tiempo",
        x: "En Galicia, cualquier plan al aire libre necesita una alternativa cubierta. Reservad una sala, un local o un salón con espacio suficiente por si llueve. Una carpa pequeña salva muchas fiestas.",
      },
      { t: "h2", x: "Cómo elegir el sitio" },
      {
        t: "ul",
        x: [
          "Una casa rural con espacio para todos: bueno para grupos que se quedan a dormir y quieren música sin molestar a nadie.",
          "Un restaurante con sala privada: cómodo, sin tener que montar nada y con la comida resuelta.",
          "Una sociedad o local de amigos: la opción más barata, siempre que haya aforo y permiso.",
          "Tu casa: solo si cabéis, hay vecinos comprensivos y alguien se encarga de recoger.",
        ],
      },
      { t: "h2", x: "Línea de tiempo sin agobios" },
      {
        t: "caja",
        tipo: "idea",
        titulo: "Un calendario razonable",
        x: [
          "Seis semanas antes: elegir tema, fecha y sitio.",
          "Cuatro semanas antes: mandar la invitación con el tema y el plazo para confirmar.",
          "Dos semanas antes: cerrar comida, música y vestuario si hace falta.",
          "Una semana antes: recordatorio con hora, sitio y qué llevar.",
          "El día: una persona encargada de recibir y otra de que no falte nada.",
        ],
      },
      {
        t: "p",
        x: "Si el cumpleaños es sorpresa, añade un cómplice, una coartada ensayada y una frase que todos repitan si el homenajeado pregunta. Y, sobre todo, no habléis de la fiesta en el grupo donde está él.",
      },
      {
        t: "caja",
        tipo: "dato",
        titulo: "Un último consejo",
        x: "El tema debe poder disfrutarse con poco esfuerzo. Si para entrar hay que comprar un disfraz de 80 euros, la mitad de la gente se queda en casa.",
      },
      { t: "leetambien", slug: "disfraces-para-novio-o-novia-despedida" },
    ],
  },
];

export const SECCIONES = {
  despedidas: {
    label: "Despedidas",
    path: "/",
    title: "Despedidas de soltero y soltera",
    intro: "Ideas, retos y trucos para organizar una despedida sin que el grupo se hunda.",
  },
  cumpleanos: {
    label: "Cumpleaños",
    path: "/cumpleanos/",
    title: "Cumpleaños: ideas, sorpresas y temas para organizar en Galicia",
    intro: "Cumpleaños temáticos, sorpresas que salen bien y los errores que conviene evitar.",
  },
  regalos: {
    label: "Regalos",
    path: "/regalos/",
    title: "Regalos, disfraces y camisetas para despedidas y cumpleaños",
    intro: "Lo que regalar, lo que vestir y lo que escribir en la camiseta del novio.",
  },
  juegos: {
    label: "Juegos",
    path: "/juegos/",
    title: "Juegos y retos para despedidas y cumpleaños",
    intro: "Retos de calle, bromas con cabeza y dinámicas para que el grupo no se aburra.",
  },
} as const;
