import type { Pieza } from "./types";
import { PIEZAS_NUEVAS } from "./piezas-nuevas";
import { PIEZAS_NUEVAS_2 } from "./piezas-nuevas-2";

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
    imagen: { src: "/fotos/hombre-tirado-confeti.jpg", ancho: 600, alto: 400, alt: "Hombre tumbado entre confeti con copas alrededor" },
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
      { t: "foto", src: "/fotos/jarra-cerveza-gigante.jpg", ancho: 850, alto: 450, alt: "Chorro de cerveza directo a la cara en una mesa de bar", pie: "Hidratación, la justa" },
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
      { t: "foto", src: "/fotos/brindis-champan-botella.jpg", ancho: 840, alto: 474, alt: "Grupo de amigas brindando y bebiendo champán de la botella", pie: "Aquí nadie conduce" },
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
      { t: "grupo", dominio: "luxegalicia.com", x: "Traslados para despedidas en Galicia, para tener el transporte de vuelta resuelto antes de la primera ronda." },
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
    imagen: { src: "/fotos/fiesta-confeti-selfie.jpg", ancho: 740, alto: 493, alt: "Grupo de amigos celebrando entre confeti" },
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
      { t: "foto", src: "/fotos/pelo-al-viento-copa.jpg", ancho: 600, alto: 400, alt: "Mujeres moviendo el pelo con una copa en la mano de noche", pie: "Modo noche activado" },
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
    imagen: { src: "/fotos/brindis-copas.jpg", ancho: 626, alto: 417, alt: "Manos brindando con copas de champán" },
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
          "Tricount. Pones nombre al viaje o a la cena, invitas al grupo, apuntas cada gasto y la app calcula quién debe a quién. Su web la presenta como gratuita, sin anuncios y sin límites.",
          "Splitwise. La veterana: reparte los gastos a partes iguales, por porcentajes o por cuotas y lleva el saldo de cada persona. Es gratuita en iPhone, Android y web, pero según su web hay funciones de pago (plan Pro), como escanear tickets, ver gráficos o convertir divisas.",
          "Settle Up. Otra aplicación de este tipo, por si las anteriores no os convencen. Esta no la hemos comprobado: mirad qué ofrece antes de elegirla.",
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
          "Un grupo de más de diez personas o con invitados que no se conocen: antes de elegir, mirad si cada persona tiene que crearse una cuenta o basta con que lo haga quien organiza.",
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
    imagen: { src: "/fotos/rueda-broma-disfraz.jpg", ancho: 870, alto: 505, alt: "Rueda de la fortuna con un muñeco colgado cabeza abajo" },
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
      { t: "foto", src: "/fotos/boda-pista-sudor.jpg", ancho: 990, alto: 482, alt: "Hombre sudado agarrando por la cabeza a otro en plena fiesta", pie: "Fase final de la boda" },
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
    imagen: { src: "/fotos/reto-capea-novillo.jpg", ancho: 832, alto: 458, alt: "Persona disfrazada de payaso trepando un muro junto a un novillo" },
    galicia: true,
    relacionadas: ["secuestro-falso-despedida-de-soltero", "frases-para-camisetas-despedida"],
    bloques: [
      {
        t: "p",
        x: "Hay retos que solo funcionan en la calle. Necesitan público, vergüenza propia y un grupo de amigos dispuesto a mirar desde lejos. Estos dos son clásicos de las despedidas, y funcionan igual en la plaza de una villa gallega que en una zona peatonal de Vigo, A Coruña o Santiago un sábado por la tarde.",
      },
      { t: "foto", src: "/fotos/peluca-azul-gafas-verdes.jpg", ancho: 868, alto: 457, alt: "Hombre sonriente con peluca azul y gafas verdes", pie: "Cuando el amigo ya entró en personaje" },
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
      { t: "grupo", dominio: "ginkanas.es", x: "Gincanas, si prefieres retos con organización." },
      { t: "leetambien", slug: "secuestro-falso-despedida-de-soltero" },
    ],
  },
  {
    slug: "frases-para-camisetas-despedida",
    seccion: "regalos",
    tag: "Camisetas",
    titulo: "Frases chorras para camisetas de despedida de soltera y de soltero",
    h1: "Frases chorras para camisetas de despedida (de soltera y de soltero)",
    dek: "Habrá camisetas, porque siempre hay camisetas. Que no sea otra vez «Team Novia». Frases de las buenas, con pie para Vigo, Sanxenxo o donde os lleve el marrón.",
    fecha: "2026-11-02",
    imagen: { src: "/fotos/amigas-gafas-flores.jpg", ancho: 815, alto: 467, alt: "Cuatro amigas con coronas de flores y gafas haciendo la V" },
    galicia: true,
    relacionadas: ["disfraces-para-novio-o-novia-despedida", "ideas-locas-grupo-whatsapp-despedida"],
    bloques: [
      {
        t: "p",
        x: "Toda despedida tiene su momento camiseta. Alguien propone «llevamos todos lo mismo», el grupo de WhatsApp pasa de cero a cuarenta mensajes y a los diez minutos nadie se acuerda de qué se pidió. Una buena frase decide si la foto de grupo acaba en el móvil de todos o en la papelera.",
      },
      {
        t: "p",
        x: "Aquí van frases chorras, de las que se leen desde lejos, y algunas con guiño gallego. Cámbialas, mézclalas o dáselas a quien las quiera hacer peor.",
      },
      { t: "foto", src: "/fotos/amigas-gafas-retro.jpg", ancho: 1280, alto: 744, alt: "Grupo de amigas con gafas de colores en una foto en blanco y negro", pie: "El grupo, versión vintage" },
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
      { t: "foto", src: "/fotos/taza-con-lazo.jpg", ancho: 1024, alto: 580, alt: "Taza blanca con lazo rojo junto a una caja de cartón", pie: "La taza, otra vez" },
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
    imagen: { src: "/fotos/banana-en-brazos.jpg", ancho: 870, alto: 465, alt: "Amigas con pelucas de colores cargando a una persona disfrazada de plátano" },
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
      { t: "foto", src: "/fotos/disfraces-grupo-pez.jpg", ancho: 908, alto: 468, alt: "Grupo de amigas con disfraces y gorros de cocinero", pie: "Disfraces de grupo: más fáciles que ponerse de acuerdo" },
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
      { t: "foto", src: "/fotos/disfraz-acolchado-rojo.jpg", ancho: 1600, alto: 2138, alt: "Persona con un disfraz rojo acolchado con detalles dorados", pie: "Disfraz que ocupa sitio" },
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
    imagen: { src: "/fotos/mascara-caballo-fiesta.jpg", ancho: 960, alto: 640, alt: "Persona con una máscara de caballo en una fiesta con luces" },
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
      { t: "foto", src: "/fotos/cumple-70-baile.jpg", ancho: 960, alto: 640, alt: "Señora mayor bailando con gafas de fiesta rodeada de gente", pie: "Cumpleaños con más marcha que el tuyo" },
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
      { t: "foto", src: "/fotos/confeti-vasos-rojos.jpg", ancho: 740, alto: 493, alt: "Amigas lanzando confeti junto a una mesa con vasos rojos", pie: "Confeti: lo barrerá alguien" },
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
      { t: "grupo", dominio: "los7pc.com", x: "Local de cenas y baile." },
      { t: "leetambien", slug: "disfraces-para-novio-o-novia-despedida" },
    ],
  },
  {
    slug: "preguntas-chorras-despedida-de-soltero",
    seccion: "despedidas",
    tag: "Preguntas chorras",
    titulo: "Preguntas chorras sobre despedidas de soltero (con respuestas de verdad)",
    h1: "Preguntas chorras sobre despedidas de soltero, con respuesta de verdad",
    dek: "Las dudas que nadie se atreve a preguntar en el grupo de WhatsApp y que todos tienen. Contestadas en serio, con un poco de humor y con Galicia de fondo.",
    fecha: "2026-10-30",
    imagen: { src: "/fotos/fiesta-colores.jpg", ancho: 870, alto: 464, alt: "Amigas cubiertas de polvos de colores en un parque" },
    galicia: true,
    relacionadas: ["ideas-locas-grupo-whatsapp-despedida", "secuestro-falso-despedida-de-soltero"],
    bloques: [
      { t: "p", x: "Hay preguntas que no caben en una guía seria y que, sin embargo, aparecen en todos los grupos de despedida a las once de la noche. Las hemos juntado. Todas tienen respuesta, y ninguna es tan tonta como parece." },
      { t: "p", x: "Si tu duda no está aquí, mándanosla desde Contacto y la sumamos." },
      { t: "h2", x: "¿Puede el novio llevarse el móvil a su despedida?" },
      { t: "p", x: "Puede, pero lo normal es que se quede sin batería a las diez y sin vergüenza a las doce. Lo mejor es acordar antes quién lo guarda y quién tiene el teléfono de emergencia. Que la persona de enlace tenga el número de su familia por si acaso." },
      { t: "foto", src: "/fotos/novio-de-flamenca-caballo.jpg", ancho: 858, alto: 485, alt: "Grupo de amigos con un disfraz de flamenca sobre un animal por una calle", pie: "El disfraz del novio, sin filtro" },
      { t: "h2", x: "¿Hay que hacer algo vergonzoso?" },
      { t: "p", x: "No. Los retos son opcionales y el límite lo pone el novio, no el grupo. Una despedida buena es la que se recuerda con risa, no la que se esconde. Si alguien dice que no, se pasa al siguiente plan y listo." },
      { t: "h2", x: "¿Quién paga la parte del novio?" },
      { t: "p", x: "Se suele repartir entre todos, pero lo importante no es quién paga, es decirlo antes de pedir. Si en el grupo no se aclara, acabará pagando el más educado, que suele ser el menos rico. Fijad la norma en el mensaje de arranque." },
      { t: "h2", x: "¿Cuánta gente hay que invitar?" },
      { t: "p", x: "Entre seis y doce personas se maneja bien. A partir de quince conviene dividir en subgrupos, porque una mesa de veinte en un restaurante de Vigo no es una cena, es un congreso. Pregunta al novio con quién quiere estar de verdad." },
      { t: "caja", tipo: "frase", x: "Una buena despedida es la que el novio recuerda con risa y la novia, con tranquilidad." },
      { t: "foto", src: "/fotos/peluca-azul-gafas-verdes.jpg", ancho: 868, alto: 457, alt: "Hombre sonriente con peluca azul y gafas verdes", pie: "Cuando el amigo ya entró en personaje" },
      { t: "h2", x: "¿Y si el novio no quiere despedida?" },
      { t: "p", x: "Se respeta. Una cena tranquila con los tres amigos de siempre también es una despedida. No todo el mundo se siente cómodo siendo el centro de atención, y obligarle a un plan que no quiere es el mejor modo de estropearlo." },
      { t: "h2", x: "¿Qué pasa si llueve en Galicia?" },
      { t: "p", x: "Que es Galicia. Ten siempre un plan B cubierto: un restaurante con sala privada, una casa rural con salón o un local con espacio suficiente. Un plan al aire libre sin alternativa es una apuesta, y la lluvia siempre apuesta más fuerte." },
      { t: "h2", x: "¿Con cuánta antelación se organiza?" },
      { t: "p", x: "Con dos o tres meses de margen si es verano o fin de semana largo, sobre todo si hay alojamiento o barco. En temporada baja, un mes puede bastar. Lo que no funciona es decidir el jueves para el sábado." },
      { t: "h2", x: "¿Se puede cantar en el karaoke a las cinco de la mañana?" },
      { t: "p", x: "En un local con karaoke, sí. En el alojamiento, no: las ordenanzas municipales limitan el ruido por la noche y los vecinos no están de despedida. Cantad dentro del bar y volved a casa en silencio, como si nadie supiese quiénes sois." },
      { t: "h2", x: "¿Es verdad que lo que pasa en la despedida se queda en la despedida?" },
      { t: "p", x: "No. Se queda en el grupo de WhatsApp, que tiene mejor memoria que cualquier persona. Por eso conviene acordar antes qué se publica y qué no. Un buen grupo sabe reírse sin que nadie tenga que pedir que borren una foto." },
      { t: "caja", tipo: "idea", titulo: "Un último consejo", x: "La regla que ahorra el 80 % de las discusiones: antes de elegir plan, preguntad el presupuesto y el límite de cada uno. Lo demás se improvisa." },
      { t: "leetambien", slug: "despedida-como-resacon-en-las-vegas" },
    ],
  },
  {
    slug: "preguntas-chorras-despedida-de-soltera",
    seccion: "despedidas",
    tag: "Preguntas chorras",
    titulo: "Preguntas chorras sobre despedidas de soltera (que nadie pregunta en voz alta)",
    h1: "Preguntas chorras sobre despedidas de soltera que nadie pregunta en voz alta",
    dek: "¿Hay que llevar tiara? ¿Quién lleva la tarta? ¿Y si la novia odia las sorpresas? Las preguntas de cada grupo de despedida de soltera, con su respuesta.",
    fecha: "2026-10-29",
    imagen: { src: "/fotos/abuela-en-la-pista.jpg", ancho: 881, alto: 461, alt: "Señora mayor bailando entusiasmada en una fiesta" },
    galicia: true,
    relacionadas: ["preguntas-chorras-despedida-de-soltero", "frases-para-camisetas-despedida"],
    bloques: [
      { t: "p", x: "En cualquier grupo de despedida de soltera hay preguntas que se piensan y no se dicen. Aquí van las más habituales, con respuesta útil y sin dramatismo. Muchas valen también para despedidas mixtas." },
      { t: "h2", x: "¿Hay que invitar a todas las amigas de la novia?" },
      { t: "p", x: "No. Pregunta a la novia con quién quiere estar y no inventes una lista. Si hay amigas de distintos grupos, mejor que se conozcan antes de la despedida, o que haya un plan de arranque que rompa el hielo sin forzarlo." },
      { t: "foto", src: "/fotos/cabina-fotos-novios.jpg", ancho: 960, alto: 640, alt: "Grupo con accesorios y carteles en una cabina de fotos de boda", pie: "La cabina de fotos manda" },
      { t: "h2", x: "¿La novia tiene que saber qué se hace?" },
      { t: "p", x: "Depende de la novia. Hay quien disfruta de una sorpresa total y quien necesita saber a dónde va. Lo prudente es preguntarle por su nivel de sorpresa a alguien cercano y avisarle de lo básico: fecha, hora de salida y qué ropa llevar." },
      { t: "h2", x: "¿Es obligatorio llevar camiseta, tiara o banda?" },
      { t: "p", x: "No. Son accesorios, no leyes. Si el grupo quiere uniforme, que se vote y que sea cómodo. Y que alguien lleve cuatro de más, porque siempre habrá una que se olvide." },
      { t: "h2", x: "¿Cuánto cuesta una despedida de soltera?" },
      { t: "p", x: "Entre una cena y un fin de semana hay un mundo. La cifra no se inventa: se pregunta al grupo y se ajusta al que menos puede pagar. Es mejor un plan bueno y barato que uno espectacular al que solo vayan la mitad." },
      { t: "caja", tipo: "frase", x: "La mejor despedida de soltera es la que la novia cuenta sin sonrojarse." },
      { t: "h2", x: "¿Quién paga por la novia?" },
      { t: "p", x: "Lo habitual es repartir su parte entre las demás. Lo importante es decirlo en el mensaje de arranque, para que nadie se entere en la cuenta y todo el mundo sepa cuánto es su parte." },
      { t: "h2", x: "¿Se puede ir sin ser amiga íntima?" },
      { t: "p", x: "Sí. Pasa constantemente y casi siempre sale bien. Lo único es que la novia lo sepa y que la invitada tenga alguien que la presente. Una despedida es también el sitio donde se conoce a gente con la que, luego, se comparte boda." },
      { t: "h2", x: "¿Qué hacer si una amiga no paga?" },
      { t: "p", x: "Primero, hablar con ella en privado, sin audiencia. Puede que se haya despistado o que no pueda pagar y le dé vergüenza decirlo. Si es lo segundo, se busca una solución discreta. Lo peor es reclamar en el grupo delante de todas." },
      { t: "h2", x: "¿Se puede hacer la despedida en la misma ciudad, sin viaje?" },
      { t: "p", x: "Claro. Un buen plan en Vigo, en A Coruña o en Santiago no necesita avión ni hotel: una tarde con actividad, una buena cena y un último sitio con música. Y cada una duerme en su cama, que es un lujo." },
      { t: "h2", x: "¿Y si hay una amiga embarazada o que no bebe?" },
      { t: "p", x: "Que haya un plan que funcione sin alcohol. Una actividad, una cena larga, un sitio donde el protagonismo no sea la copa. Las mejores despedidas son aquellas en las que nadie tiene que explicar por qué no bebe." },
      { t: "h2", x: "¿Y si la novia odia las sorpresas?" },
      { t: "p", x: "Entonces no hay sorpresa: hay plan. Díselo con tiempo, pídele opinión y deja una única sorpresa pequeña, como un regalo o una canción. Será más fácil que lo disfrute, y habrá menos riesgo de que se escape una frase en el peor momento." },
      { t: "caja", tipo: "ojo", titulo: "Una norma sencilla", x: "Ninguna sorpresa justifica poner a la novia en un aprieto. Si dudas entre hacerlo o no, no lo hagas." },
      { t: "leetambien", slug: "ideas-locas-grupo-whatsapp-despedida" },
    ],
  },
  {
    slug: "preguntas-chorras-cumpleanos-adultos",
    seccion: "cumpleanos",
    tag: "Preguntas chorras",
    titulo: "Preguntas chorras sobre cumpleaños de adultos: ¿hay que invitar a todo el mundo?",
    h1: "Preguntas chorras sobre cumpleaños de adultos (con respuesta de verdad)",
    dek: "Quién paga, a qué hora se sopla la vela y qué hacer si te montan una sorpresa que no querías. Las dudas de cualquier cumpleaños con más de treinta años.",
    fecha: "2026-10-28",
    imagen: { src: "/fotos/regalo-sorpresa-susto.jpg", ancho: 740, alto: 423, alt: "Mujer con cara de sorpresa abriendo un regalo ante otras personas" },
    galicia: true,
    relacionadas: ["preguntas-chorras-regalos", "cumpleanos-tematicos-adultos-galicia"],
    bloques: [
      { t: "p", x: "Cumplir años es fácil. Organizar el cumpleaños de un adulto, no tanto. Estas son las dudas que se repiten en cada mesa, con una respuesta práctica para cada una." },
      { t: "h2", x: "¿Hay que invitar a todo el mundo?" },
      { t: "p", x: "No. Invita a quien quieras tener cerca, no a quien se ofenda si no lo haces. Una mesa grande es un compromiso; una mesa pequeña, una fiesta. Si temes herir a alguien, dilo claro: «es una cena pequeña»." },
      { t: "foto", src: "/fotos/regalo-cara-mano.jpg", ancho: 870, alto: 534, alt: "Hombre tapándose la cara mientras una mujer abre un regalo", pie: "Ese regalo no era" },
      { t: "h2", x: "¿Se puede pedir que no traigan regalos?" },
      { t: "p", x: "Sí, con gracia: «lo mejor que me podéis dar es vuestra compañía». Y si alguien trae uno, se agradece sin más. Pedir que no haya regalos es una elección tuya; no tiene que convertirse en una prohibición para el resto." },
      { t: "h2", x: "¿Quién paga la cena de cumpleaños?" },
      { t: "p", x: "Hay dos modelos: invita el cumpleañero o se paga a escote. Los dos son válidos, siempre que se avise antes. Lo que no se perdona es llegar a la cuenta sin que nadie sepa cuál de los dos modelos toca." },
      { t: "h2", x: "¿A qué hora se sopla la vela?" },
      { t: "p", x: "Cuando se haya cenado y antes de que la tarta empiece a sudar. La vela es el momento más fotografiado de la noche: que no sea con medio grupo en el baño. Avisa a todos con diez minutos." },
      { t: "caja", tipo: "frase", x: "Cumplir años es obligatorio. Celebrarlo, no. Y por eso merece tanto la pena." },
      { t: "h2", x: "¿Y si me montan una sorpresa y no me gustan las sorpresas?" },
      { t: "p", x: "Sonríe, di gracias y cuenta hasta diez. La intención era buena. Luego, con calma, explícales cómo te gustan las cosas para el año que viene. Lo contrario, una escena delante de todos, arruina la fiesta de los demás." },
      { t: "h2", x: "¿Es de mala educación llegar tarde?" },
      { t: "p", x: "Un poco sí. Quince minutos se perdonan; una hora, no. Si organizas, da una hora de inicio un poco antes de la real para que el retraso medio no te rompa la cena." },
      { t: "h2", x: "¿Cuántas velas hay que poner?" },
      { t: "p", x: "Las que quieras, pero ten en cuenta que a partir de cierta edad una tarta con las velas completas es un riesgo para el techo. Un número grande con velas con forma de cifra es una solución elegante y segura." },
      { t: "h2", x: "¿Y si mi cumpleaños cae en lunes?" },
      { t: "p", x: "Se celebra el fin de semana anterior o posterior, y el lunes, con una cena tranquila o con una tarta pequeña. Nadie quiere salir de fiesta un lunes, ni siquiera el cumpleañero." },
      { t: "h2", x: "¿Hasta qué edad se puede hacer una fiesta?" },
      { t: "p", x: "Hasta que tú quieras. Una fiesta con 60, 70 o 80 años puede ser la mejor de todas, porque los invitados ya saben divertirse. El único límite es el presupuesto y las ganas de organizarla." },
      { t: "h2", x: "¿Se puede celebrar en una sociedad o en un local de amigos?" },
      { t: "p", x: "Sí, es una opción barata y cómoda, siempre que se respeten las normas del local y el aforo. Hay que dejarlo limpio, avisar a quien corresponda y no pasarse con la música, que los vecinos también existen." },
      { t: "caja", tipo: "idea", titulo: "El truco del buen cumpleaños", x: "Un cumpleaños de adultos funciona con tres cosas: hora de inicio clara, comida resuelta y una persona que haga de anfitriona. Lo demás ocurre solo." },
      { t: "leetambien", slug: "cumpleanos-tematicos-adultos-galicia" },
    ],
  },
  {
    slug: "preguntas-chorras-regalos",
    seccion: "regalos",
    tag: "Preguntas chorras",
    titulo: "Preguntas chorras sobre regalos: ¿cuánto hay que gastarse y se puede regalar dinero?",
    h1: "Preguntas chorras sobre regalos (con respuesta de verdad)",
    dek: "¿Cuánto se gasta uno? ¿Vale regalar dinero? ¿Y si me regalan lo mismo dos personas? Las dudas de cualquier regalo, respondidas.",
    fecha: "2026-10-27",
    imagen: { src: "/fotos/amigo-invisible-preguntas.jpg", ancho: 1268, alto: 664, alt: "Personas ocultas tras carteles de interrogación junto a regalos" },
    galicia: true,
    relacionadas: ["disfraces-para-novio-o-novia-despedida", "frases-para-camisetas-despedida"],
    bloques: [
      { t: "p", x: "Regalar es fácil hasta que hay que decidir cuánto, qué y cuándo. Estas son las dudas que más se repiten, con una respuesta que sirve para cualquier ocasión." },
      { t: "foto", src: "/fotos/calcetin-de-regalo.jpg", ancho: 1000, alto: 603, alt: "Hombre sosteniendo un calcetín con un regalo envuelto", pie: "El calcetín: clásico del mal regalo" },
      { t: "h2", x: "¿Cuánto hay que gastarse en un regalo?" },
      { t: "p", x: "Lo que pueda pagar quien regala sin que le duela, y lo que quien lo recibe agradezca sin sentirse en deuda. No hay cifra mágica. Un regalo pequeño pero pensado gana siempre a uno caro y genérico." },
      { t: "h2", x: "¿Se puede regalar dinero?" },
      { t: "p", x: "Sí, sobre todo en bodas y cumpleaños importantes. Se hace más amable con un sobre bonito, una nota y, si puedes, una pista de para qué sirve. Regalar dinero sin más es práctico; regalarlo con gracia, memorable." },
      { t: "foto", src: "/fotos/regalo-cara-asco.jpg", ancho: 1200, alto: 900, alt: "Mujer con gesto de asco al abrir una caja roja", pie: "Gracias, de verdad" },
      { t: "h2", x: "¿Qué pasa si me regalan lo mismo dos personas?" },
      { t: "p", x: "Que tienes un regalo extra. Si es útil, quédatelo; si no, pregunta si hay ticket regalo. Y la próxima vez, en un regalo colectivo, designad una persona que lo compre." },
      { t: "foto", src: "/fotos/amigo-invisible-regalos.jpg", ancho: 1200, alto: 754, alt: "Intercambio de regalos con una carita seria encima", pie: "Amigo invisible, cara de póker" },
      { t: "h2", x: "¿Es de mala educación pedir el ticket regalo?" },
      { t: "p", x: "No. Es de buena educación incluirlo. Quien regala un objeto con talla o color debería dejar la puerta abierta al cambio. Y quien recibe, si no le encaja, puede cambiarlo sin remordimientos." },
      { t: "caja", tipo: "frase", x: "Un regalo pensado gana a uno caro. Y uno caro con ticket, también." },
      { t: "h2", x: "¿Qué se regala a quien lo tiene todo?" },
      { t: "p", x: "Una experiencia, un detalle gallego bien elegido (una cesta de productos de la tierra, por ejemplo) o algo hecho a mano. Lo que de verdad no tienen es tiempo, y un buen plan es un regalo mejor que un objeto más." },
      { t: "h2", x: "¿Se puede regalar una experiencia?" },
      { t: "p", x: "Sí, siempre que sea fácil de usar. Una cena, una escapada o una actividad con fecha abierta funciona. Una experiencia que exige organizar tres cosas para disfrutarla, no. Que sea sencilla de canjear." },
      { t: "h2", x: "¿Hay que envolver el regalo?" },
      { t: "p", x: "Un poco. No hace falta un papel de revista, pero una bolsa o una caja le da importancia. Un regalo sin envolver parece un recado; uno con un lazo, una intención." },
      { t: "h2", x: "En un regalo colectivo, ¿quién lo elige y quién guarda el dinero?" },
      { t: "p", x: "Una sola persona elige y otra, o la misma, recoge el dinero. Se anuncia en el grupo con una fecha límite. Lo peor es discutir el regalo en un chat de treinta personas, donde cada opinión es una guerra." },
      { t: "h2", x: "¿Qué hago si no me gusta el regalo?" },
      { t: "p", x: "Sonríes, das las gracias y, si es posible, lo cambias después. Nadie tiene por qué saber que no te gusta, y a quien lo regaló le basta con saber que lo valoraste. La sinceridad en los regalos tiene más riesgos que ventajas." },
      { t: "h2", x: "¿Se puede regalar algo de segunda mano o hecho en casa?" },
      { t: "p", x: "Claro. Un libro que te encantó, un objeto con historia o algo hecho por ti vale más que uno comprado con prisas. Eso sí: que esté en buen estado y que se note que es un regalo, no un trasto." },
      { t: "caja", tipo: "dato", titulo: "Para decidir rápido", x: "Si dudas entre dos regalos, elige el que te haga más gracia a ti: es el que mejor vas a regalar." },
      { t: "leetambien", slug: "frases-para-camisetas-despedida" },
    ],
  },
  {
    "slug": "guia-para-organizar-despedidas-en-galicia",
    "seccion": "despedidas",
    "tag": "Guía",
    "titulo": "Guía para organizar una despedida de soltero o soltera en Galicia, paso a paso",
    "h1": "Guía para organizar una despedida en Galicia, paso a paso",
    "dek": "De «¿qué hacemos?» a «¿quién ha pagado?»: el camino completo para organizar una despedida de soltero, de soltera o mixta, con enlaces a todo lo que vas a necesitar.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "despedida-como-resacon-en-las-vegas",
      "preguntas-chorras-despedida-de-soltera"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Organizar una despedida de soltero o de soltera en Galicia parece fácil hasta que alguien dice «hagamos algo guapo». A partir de ahí empieza el marrón: fechas, dinero, gente que no contesta y un plan que cambia tres veces. Esta guía ordena el camino en seis pasos y te lleva, en cada uno, al artículo donde se explica con detalle."
      },
      {
        "t": "h2",
        "x": "Paso 1: decidir cuatro cosas antes de proponer nada"
      },
      {
        "t": "ol",
        "x": [
          "Fecha provisional. Una sola, con margen: en temporada alta, dos o tres meses antes.",
          "Presupuesto por persona. Se pregunta al grupo y se ajusta al que menos puede pagar.",
          "Número de personas. Entre seis y doce se maneja bien; más de quince, mejor dividir en subgrupos.",
          "Quién decide. Una persona, no un comité. Es la que hace el marrón, así que merece mandar."
        ]
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "El truco",
        "x": "Si solo haces una cosa: pregunta el presupuesto antes de elegir plan. Evita el 80 % de las discusiones."
      },
      {
        "t": "h2",
        "x": "Paso 2: poner en marcha el grupo"
      },
      {
        "t": "p",
        "x": "El grupo de WhatsApp es donde se organiza todo y donde se muere todo. Un mensaje fijado con fecha, precio y cuenta, respuestas con emoji y plazos claros lo mantienen vivo."
      },
      {
        "t": "leetambien",
        "slug": "ideas-locas-grupo-whatsapp-despedida"
      },
      {
        "t": "h2",
        "x": "Paso 3: el dinero, sin pelearte con nadie"
      },
      {
        "t": "p",
        "x": "Decide desde el primer mensaje quién cobra, cómo y qué pasa con quien se cae del plan. Una aplicación de gastos compartidos evita las cuentas de la vieja."
      },
      {
        "t": "leetambien",
        "slug": "aplicaciones-compartir-gastos-despedida"
      },
      {
        "t": "h2",
        "x": "Paso 4: elegir el plan"
      },
      {
        "t": "p",
        "x": "Hay planes de agua (barco), de tierra (casa rural), de ciudad (cena y bares) y de calle (retos). Cada uno tiene sus riesgos y su plan B para la lluvia. Conviene mezclar sin llenar la agenda."
      },
      {
        "t": "leetambien",
        "slug": "barco-o-casa-rural-despedida-galicia"
      },
      {
        "t": "leetambien",
        "slug": "secuestro-falso-despedida-de-soltero"
      },
      {
        "t": "h2",
        "x": "Paso 5: el día de la despedida"
      },
      {
        "t": "ul",
        "x": [
          "Una persona de enlace con batería y sin copas de más.",
          "Ubicación compartida en el grupo antes de salir.",
          "Transporte de vuelta reservado antes de beber.",
          "Una foto de grupo cada hora como prueba de vida."
        ]
      },
      {
        "t": "leetambien",
        "slug": "despedida-como-resacon-en-las-vegas"
      },
      {
        "t": "h2",
        "x": "Paso 6: las dudas que siempre aparecen"
      },
      {
        "t": "p",
        "x": "Quién paga al novio, si hay que hacer algo vergonzoso o qué hacer si llueve en Galicia: casi todo tiene respuesta corta, y están recogidas en dos artículos de preguntas con respuesta."
      },
      {
        "t": "leetambien",
        "slug": "preguntas-chorras-despedida-de-soltero"
      },
      {
        "t": "grupo",
        "dominio": "despedidasgalicia.es",
        "x": "Despedidas en toda Galicia."
      },
      {
        "t": "leetambien",
        "slug": "preguntas-chorras-despedida-de-soltera"
      },
      {
        "t": "caja",
        "tipo": "dato",
        "titulo": "Para cerrar",
        "x": "Cuando termine todo, escribe un mensaje de agradecimiento al grupo. Es lo que se recuerda y lo que hace que el año que viene alguien quiera organizar contigo."
      }
    ]
  },
  {
    "slug": "barco-o-casa-rural-despedida-galicia",
    "seccion": "despedidas",
    "tag": "Versus",
    "titulo": "Barco o casa rural para una despedida en Galicia: quién gana",
    "h1": "Barco o casa rural para una despedida en Galicia: quién gana",
    "dek": "Dos planes clásicos para una despedida de soltero o de soltera. Los comparamos con lo que importa de verdad: la lluvia, el grupo, el ruido y el que lleva el timón.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "despedida-en-sanxenxo-que-hacer-de-loco",
      "guia-para-organizar-despedidas-en-galicia",
      "despedida-como-resacon-en-las-vegas"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "En cualquier grupo de despedida llega el momento: alguien propone un barco por la ría y otro una casa rural con jardín. Los dos tienen su encanto, los dos tienen sus riesgos y los dos terminan en una votación que dura una semana. Aquí va la comparativa para que decidáis con cabeza."
      },
      {
        "t": "h2",
        "x": "El tiempo: el gran protagonista"
      },
      {
        "t": "p",
        "x": "En Galicia la lluvia no pregunta. Un barco depende del mar y del viento: si el día amanece feo, el plan puede suspenderse o cambiar. Una casa rural tiene techo, salón y chimenea. Para un grupo que no tolera la incertidumbre, la casa gana. Para uno que acepta el riesgo y tiene una alternativa, el barco es un planazo."
      },
      {
        "t": "h2",
        "x": "El grupo y el espacio"
      },
      {
        "t": "ul",
        "x": [
          "Barco: la capacidad es fija y hay que ajustarse a ella. Ideal para grupos pequeños o medianos, con gente que se lleva bien.",
          "Casa rural: se adapta a más gente y a más variedad, porque cada uno encuentra su rincón. Ideal si hay quien quiere fiesta y quien quiere dormir.",
          "Si hay subgrupos que no se conocen, la casa rural da más margen para que se mezclen despacio."
        ]
      },
      {
        "t": "h2",
        "x": "El ruido y los vecinos"
      },
      {
        "t": "p",
        "x": "La música en un barco no molesta a nadie salvo a las gaviotas. En una casa rural, sí: las ordenanzas limitan el ruido por la noche y los vecinos, aunque estén lejos, existen. Acordad un horario de música antes de llegar y respetadlo."
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Seguridad en el barco",
        "x": [
          "En un barco, quien lleva el timón no bebe. Es una norma de sentido común, no un consejo.",
          "Chalecos para todos y escuchar siempre las instrucciones del patrón.",
          "Si el parte marítimo avisa de mal tiempo, se cambia de plan sin discusión."
        ]
      },
      {
        "t": "h2",
        "x": "La logística"
      },
      {
        "t": "p",
        "x": "El barco suele exigir reserva con antelación, hora fija de embarque y un plan para después. La casa rural pide organizar compra, cocina y limpieza, y que alguien se encargue de las llaves. Ninguna es difícil, pero ambas requieren un responsable. Si no hay nadie que mande, no hagas ninguna de las dos."
      },
      {
        "t": "h2",
        "x": "El veredicto"
      },
      {
        "t": "ol",
        "x": [
          "Gana el barco si: el grupo es pequeño, hay un día bueno previsto y todos quieren una experiencia diferente.",
          "Gana la casa rural si: el grupo es grande, quieres pasar más de una noche y necesitas un plan que no dependa del mar.",
          "La mezcla funciona mejor: una mañana de barco y una tarde y noche en tierra, con casa o restaurante como base."
        ]
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "El mejor plan es el que sigue en pie cuando llueve."
      },
      {
        "t": "caja",
        "tipo": "dato",
        "titulo": "Consejo",
        "x": "Si podéis, reservad con cancelación flexible o con un plan alternativo claro. En Galicia, el parte del tiempo manda más que el novio."
      },
      {
        "t": "grupo",
        "dominio": "seagalicia.com",
        "x": "Alquiler de barcos, por si el plan acaba en el agua."
      },
      {
        "t": "leetambien",
        "slug": "guia-para-organizar-despedidas-en-galicia"
      }
    ]
  },
  {
    "slug": "mitos-despedidas-de-soltero",
    "seccion": "despedidas",
    "tag": "Mitos",
    "titulo": "Mitos de las despedidas de soltero que nadie debería creer",
    "h1": "Mitos de las despedidas de soltero que nadie debería creer",
    "dek": "«Lo que pasa en la despedida se queda en la despedida». «Cuanto más caro, mejor». Ocho creencias que arruinan despedidas, desmontadas una a una.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "preguntas-chorras-despedida-de-soltero",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Alrededor de las despedidas de soltero y de soltera hay un montón de ideas hechas que nadie cuestiona hasta que ya es tarde. Las repasamos, una por una, con la realidad que hay detrás."
      },
      {
        "t": "h2",
        "x": "Mito 1: el novio tiene que pagarlo todo"
      },
      {
        "t": "p",
        "x": "Falso. Lo habitual es repartir. Lo que sí es verdad es que, si nadie lo aclara, acabará pagando el más educado. Dilo en el primer mensaje."
      },
      {
        "t": "h2",
        "x": "Mito 2: lo que pasa en la despedida se queda en la despedida"
      },
      {
        "t": "p",
        "x": "Falso. Se queda en el grupo de WhatsApp, que tiene mejor memoria que las personas. Acordad antes qué se publica y qué no."
      },
      {
        "t": "h2",
        "x": "Mito 3: cuanta más gente, más diversión"
      },
      {
        "t": "p",
        "x": "No necesariamente. A partir de quince personas el grupo se divide solo y se pierde la gracia. Entre seis y doce suele ser el punto dulce."
      },
      {
        "t": "h2",
        "x": "Mito 4: hay que hacer algo vergonzoso"
      },
      {
        "t": "p",
        "x": "No. Los retos son opcionales y el límite lo marca el homenajeado. Una despedida puede ser genial sin que nadie se ponga un disfraz."
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "La mejor despedida es la que el novio cuenta con ganas, no la que niega."
      },
      {
        "t": "h2",
        "x": "Mito 5: cuanto más cara, mejor"
      },
      {
        "t": "p",
        "x": "Falso. Un plan bueno y barato al que van todos supera a uno espectacular al que va la mitad. Ajusta el plan al bolsillo del que menos puede."
      },
      {
        "t": "h2",
        "x": "Mito 6: la sorpresa total siempre funciona"
      },
      {
        "t": "p",
        "x": "Depende de a quién se la hagas. Hay personas a las que les hace ilusión y otras a las que les provoca ansiedad. Si dudas, pregunta a alguien cercano."
      },
      {
        "t": "h2",
        "x": "Mito 7: tiene que durar todo el fin de semana"
      },
      {
        "t": "p",
        "x": "Una buena cena y una buena noche pueden ser una despedida completa. No hace falta viaje, ni hotel, ni barco para que se recuerde."
      },
      {
        "t": "h2",
        "x": "Mito 8: si no bebes, no te diviertes"
      },
      {
        "t": "p",
        "x": "Falso. Hay muchas despedidas memorables en las que nadie necesita alcohol para pasarlo bien. Conviene que el plan funcione para todos."
      },
      {
        "t": "h2",
        "x": "Mito 9: el organizador lo hace por amor al arte"
      },
      {
        "t": "p",
        "x": "No. Organizar una despedida es un trabajo, y quien lo hace merece ayuda: repartid tareas, agradecedle y no le dejéis la cuenta. Una persona sola acaba quemada y la despedida se resiente."
      },
      {
        "t": "h2",
        "x": "Mito 10: si no hay foto, no ha pasado"
      },
      {
        "t": "p",
        "x": "Una despedida no se mide en fotos. Disfrutar el momento vale más que grabarlo todo. Elegid un par de momentos para hacer fotos de grupo y dejad el móvil el resto del tiempo."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Una regla para todos",
        "x": [
          "Haz que el plan funcione sin alcohol y con alcohol. Quien beba lo agradecerá al día siguiente.",
          "Deja a cada uno elegir su límite, y respétalo siempre."
        ]
      },
      {
        "t": "leetambien",
        "slug": "preguntas-chorras-despedida-de-soltero"
      }
    ]
  },
  {
    "slug": "diccionario-grupo-whatsapp-despedida",
    "seccion": "despedidas",
    "tag": "Glosario",
    "titulo": "Diccionario del grupo de WhatsApp de una despedida (de «me lo miro» a «ya os digo»)",
    "h1": "Diccionario del grupo de WhatsApp de una despedida",
    "dek": "Lo que se dice en el grupo y lo que significa de verdad. Para organizadores, invitados y quien aún crea que «cuenta conmigo» es un compromiso.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "ideas-locas-grupo-whatsapp-despedida",
      "mitos-despedidas-de-soltero"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Cualquier grupo de despedida tiene su propio idioma. Esto es una guía de traducción para quien organiza y para quien recibe los mensajes. Cualquier parecido con tu grupo es pura coincidencia."
      },
      {
        "t": "h2",
        "x": "«Me lo miro»"
      },
      {
        "t": "p",
        "x": "Significa «probablemente no». Si el organizador oye esto, que lo cuente como un no y siga con su vida."
      },
      {
        "t": "h2",
        "x": "«Cuenta conmigo»"
      },
      {
        "t": "p",
        "x": "Significa «sí, mientras no tenga que hacer nada». Es sincero, pero poco fiable. Pide confirmación con el pago de la señal."
      },
      {
        "t": "h2",
        "x": "«Yo me adapto»"
      },
      {
        "t": "p",
        "x": "Significa «no voy a decidir, pero voy a opinar después». Es la frase del que vetará tu plan cuando ya esté reservado."
      },
      {
        "t": "h2",
        "x": "«Ya os digo algo»"
      },
      {
        "t": "p",
        "x": "Significa «no». O «más adelante». Y «más adelante» suele ser «nunca»."
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "El «ya os digo» más largo de la historia es el que dura hasta el día de la despedida."
      },
      {
        "t": "h2",
        "x": "«Luego te hago el Bizum»"
      },
      {
        "t": "p",
        "x": "Significa «no lo voy a hacer». Pídelo ahora o resígnate a esperar tres semanas."
      },
      {
        "t": "h2",
        "x": "«Fijado»"
      },
      {
        "t": "p",
        "x": "Mensaje fijado en el grupo. Contiene toda la información que alguien preguntará de nuevo cinco minutos después."
      },
      {
        "t": "h2",
        "x": "«¿Al final qué?»"
      },
      {
        "t": "p",
        "x": "Pregunta del que no ha leído nada. La respuesta correcta es «lee el fijado». La respuesta educada es copiar el mensaje otra vez."
      },
      {
        "t": "h2",
        "x": "«Jajaja»"
      },
      {
        "t": "p",
        "x": "Respuesta universal para cualquier cosa. Puede significar «sí», «no», «he leído» o «no sé qué decir»."
      },
      {
        "t": "h2",
        "x": "«Voy un poco justo»"
      },
      {
        "t": "p",
        "x": "Significa «llego tarde». Suele aplicarse a quien lleva diez minutos de retraso y aún está en casa."
      },
      {
        "t": "h2",
        "x": "«Hacemos algo tranquilo»"
      },
      {
        "t": "p",
        "x": "Significa «nada de tranquilo». Es lo que se dice cuando el plan acaba con barco, cena y discoteca."
      },
      {
        "t": "h2",
        "x": "«Lo que decida el novio»"
      },
      {
        "t": "p",
        "x": "Significa «no queremos decidir». El novio, que nunca decide, acabará eligiendo lo que le digan los demás."
      },
      {
        "t": "h2",
        "x": "Persona de enlace"
      },
      {
        "t": "p",
        "x": "La que no bebe, tiene batería y conoce el nombre del alojamiento. Es el héroe anónimo de toda despedida."
      },
      {
        "t": "h2",
        "x": "Plan B"
      },
      {
        "t": "p",
        "x": "Lo que se hace cuando llueve. En Galicia, siempre hace falta uno."
      },
      {
        "t": "h2",
        "x": "Prueba de vida"
      },
      {
        "t": "p",
        "x": "Foto de grupo cada hora. Sirve para saber quién falta desde cuándo."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Para que el grupo te entienda",
        "x": [
          "Si tu grupo habla otro idioma, hazle un favor: manda un mensaje fijado claro y sin ambigüedades.",
          "Contesta siempre con un emoji: verde, voy; rojo, no voy; amarillo, me lo miro (cuenta como no)."
        ]
      },
      {
        "t": "leetambien",
        "slug": "ideas-locas-grupo-whatsapp-despedida"
      }
    ]
  },
  {
    "slug": "calendario-despedidas-galicia-cuando-hacerla",
    "seccion": "despedidas",
    "tag": "Calendario",
    "titulo": "Cuándo hacer una despedida en Galicia: los fines de semana que conviene evitar",
    "h1": "Cuándo hacer una despedida en Galicia: los fines de semana que conviene evitar (o reservar ya)",
    "dek": "Semana Santa, San Xoán, fiestas patronales, el Entroido… Galicia tiene un calendario propio, y una despedida mal puesta en él se paga en reservas, precios y gente que no puede.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "despedida-en-ourense-que-hacer-de-loco",
      "guia-para-organizar-despedidas-en-galicia",
      "barco-o-casa-rural-despedida-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Elegir la fecha de una despedida parece una cuestión de agenda. En Galicia es también una cuestión de fiestas, de tiempo y de reservas. Hay fines de semana en los que todo está lleno y otros en los que sobra sitio y falta gente."
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Antes de nada",
        "x": "Las fechas de muchas fiestas cambian cada año o dependen de cada localidad. Antes de decidir, comprueba el calendario oficial del municipio donde vayáis."
      },
      {
        "t": "h2",
        "x": "Fines de semana que conviene reservar con antelación"
      },
      {
        "t": "ul",
        "x": [
          "Semana Santa: la fecha cambia cada año y mucha gente aprovecha para viajar. Reserva alojamiento y actividades con tiempo.",
          "San Xoán (noche del 23 al 24 de junio): es una de las noches más celebradas en Galicia, especialmente en A Coruña. Si va a coincidir con tu despedida, hay que prever más gente y más ruido.",
          "Julio y agosto: temporada alta en la costa. Zonas como Sanxenxo se llenan y los precios suben.",
          "Puentes y fines de semana largos: más gente se desplaza y hay menos plazas."
        ]
      },
      {
        "t": "h2",
        "x": "Fiestas que pueden ser un plan o un problema"
      },
      {
        "t": "p",
        "x": "Algunas fiestas gallegas son un plan en sí mismas: el Entroido (carnaval) en febrero o marzo, o fiestas gastronómicas como las del marisco o el albariño, que suelen celebrarse en octubre y a finales de verano respectivamente. Pueden añadir ambiente a la despedida, pero también llenar los locales y encarecer todo."
      },
      {
        "t": "h2",
        "x": "Las mejores épocas"
      },
      {
        "t": "ol",
        "x": [
          "Mayo, junio (antes de San Xoán) y septiembre: buen tiempo probable, menos masificación y precios más contenidos.",
          "Primeros fines de semana de otoño: más tranquilo, con riesgo de lluvia, pero con planes de interior que funcionan.",
          "Entre semana, para despedidas pequeñas o de una sola cena: más fácil reservar y más barato."
        ]
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "Una despedida bien situada en el calendario es la mitad del plan."
      },
      {
        "t": "h2",
        "x": "Cómo elegir fecha sin discutir"
      },
      {
        "t": "p",
        "x": "Propón dos o tres fechas y vota con un emoji. Descarta las que coincidan con fiestas locales si queréis tranquilidad, y las de temporada alta si el presupuesto es ajustado. Y comprueba antes con el novio o la novia que no tienen nada ya apuntado."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Plantilla",
        "x": "Mensaje para el grupo: «Tres fechas posibles: [fecha 1], [fecha 2] y [fecha 3]. Votad con emoji. Gana la más votada el jueves.»"
      },
      {
        "t": "grupo",
        "dominio": "despedidasgalicia.es",
        "x": "Despedidas en toda Galicia."
      },
      {
        "t": "leetambien",
        "slug": "guia-para-organizar-despedidas-en-galicia"
      }
    ]
  },
  {
    "slug": "amigo-que-no-paga-la-despedida",
    "seccion": "despedidas",
    "tag": "Dinero",
    "titulo": "Qué hacer si un amigo no paga la despedida (sin montar un drama)",
    "h1": "Qué hacer si un amigo no paga la despedida, sin montar un drama",
    "dek": "Hay quien se despista, quien no puede y quien lo deja para después. Cómo reclamar con educación, qué decir en privado y qué normas fijar para que no vuelva a pasar.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "aplicaciones-compartir-gastos-despedida",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Organizas una despedida, recoges las señales y, a falta de una semana, hay alguien que no ha pagado. No contesta, dice «luego te lo hago» o se hace el sueco. Es el marrón dentro del marrón. Aquí tienes cómo manejarlo sin perder al amigo ni la cabeza."
      },
      {
        "t": "h2",
        "x": "Primero, entiende por qué no ha pagado"
      },
      {
        "t": "ul",
        "x": [
          "Se le ha olvidado. Lo más habitual, y lo más fácil de resolver.",
          "No puede y le da vergüenza decirlo. Más común de lo que parece.",
          "Tiene dudas sobre el plan. Si no está convencido, no pagará hasta resolverlas.",
          "Ya no quiere ir. A veces es la causa real y no se atreve a decirlo."
        ]
      },
      {
        "t": "h2",
        "x": "Paso 1: mensaje privado y amable"
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Plantilla de recordatorio",
        "x": "Hola [nombre], te escribo por lo de la despedida. Te recuerdo que la señal era de [importe] antes del [fecha]. Si ya la has hecho, perdona. Si hay algún problema, dímelo por aquí y lo vemos."
      },
      {
        "t": "p",
        "x": "Nunca reclames delante del grupo. Humilla a quien no ha pagado y pone incómodo al resto."
      },
      {
        "t": "h2",
        "x": "Paso 2: si no contesta, un segundo aviso con plazo"
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Segundo aviso",
        "x": "[Nombre], necesito cerrar la reserva el [fecha]. Si no recibo la señal antes, tendré que entender que no vienes. Sin problema, pero necesito saberlo para no perjudicar al resto."
      },
      {
        "t": "h2",
        "x": "Paso 3: si dice que no puede pagar"
      },
      {
        "t": "p",
        "x": "Habla con él o con ella con calma. A veces se puede ajustar: un plan más barato, un pago aplazado o una parte cubierta entre todos. Lo importante es que no se sienta señalado."
      },
      {
        "t": "h2",
        "x": "Paso 4: si no hay respuesta, se cierra"
      },
      {
        "t": "p",
        "x": "Pasado el plazo, se avisa de forma breve y neutral y se cuenta con una persona menos. Si hay lista de espera, se ofrece la plaza. No hace falta una explicación pública."
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Cosas que no se hacen",
        "x": [
          "No presiones con mensajes en el grupo.",
          "No pagues tú su parte «por compromiso». Acabarás haciéndolo siempre.",
          "No lo borres del grupo sin avisar."
        ]
      },
      {
        "t": "h2",
        "x": "Cómo evitarlo la próxima vez"
      },
      {
        "t": "ol",
        "x": [
          "Deja claro desde el primer mensaje cuánto es, hasta cuándo y cómo se paga.",
          "Fija una norma sobre la señal: si alguien se cae, puede pasar su plaza a otra persona.",
          "Cobra por adelantado con una app o con Bizum, y apunta cada pago.",
          "Habla con las personas más despistadas antes de que lleguen a ser un problema."
        ]
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "El que paga a tiempo es un tesoro. El que no, un recordatorio."
      },
      {
        "t": "leetambien",
        "slug": "aplicaciones-compartir-gastos-despedida"
      }
    ]
  },
  {
    "slug": "cumpleanos-sorpresa-cosas-que-salen-mal",
    "seccion": "cumpleanos",
    "tag": "Sorpresa",
    "titulo": "Cumpleaños sorpresa: 10 cosas que salen mal (y cómo evitarlas)",
    "h1": "Cumpleaños sorpresa: 10 cosas que salen mal y cómo evitarlas",
    "dek": "Se enteró por otro grupo, llegó 40 minutos antes y la tarta no tenía velas. Diez fallos clásicos de las fiestas sorpresa, con su solución.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "cumpleanos-tematicos-adultos-galicia",
      "preguntas-chorras-cumpleanos-adultos"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Una fiesta sorpresa es una operación militar con tarta. Y como toda operación, falla casi siempre por los mismos sitios. Estos son los diez fallos más habituales, con lo que hay que hacer para que no te pasen."
      },
      {
        "t": "ol",
        "x": [
          "Se entera por otro grupo. Alguien menciona la fiesta en un chat donde está él. Solución: un único grupo, sin el homenajeado, y una norma clara: de la sorpresa solo se habla ahí.",
          "Se equivoca la fecha. Se prepara todo para el sábado y el cumpleaños es el domingo. Solución: una persona confirma la fecha y la hora antes de comprar nada.",
          "Llega antes de tiempo. Pasa más de lo que crees. Solución: un cómplice que controle sus movimientos y un plan de emergencia para esconderse.",
          "La tarta no tiene velas. O las velas no tienen mechero. Solución: una lista de comprobación el día antes, con una sola persona al mando.",
          "El sitio está cerrado o completo. Solución: reservar con antelación y confirmar el día anterior, sobre todo en temporada alta.",
          "Hay alergias que nadie preguntó. Solución: consulta con la pareja o un amigo cercano antes de elegir el menú.",
          "El invitado que lo cuenta. Siempre hay uno. Solución: no se lo digas a quien no sepa guardar un secreto, o díselo el mismo día.",
          "Al homenajeado no le gustan las sorpresas. Solución: si dudas, no lo hagas. O haz una versión suave, con pocas personas.",
          "El ruido molesta a los vecinos. Solución: avisarles antes y acordar un horario. Un cumpleaños que acaba con la policía no es una buena historia.",
          "La cuenta sin dividir. Alguien paga todo y se queda esperando. Solución: decidir antes quién invita y quién paga a escote."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Si falla algo",
        "x": "Una sorpresa que sale mal no se arregla con una explicación. Se arregla con humor, con una tarta rica y con un abrazo."
      },
      {
        "t": "h2",
        "x": "El plan B que salva casi todo"
      },
      {
        "t": "p",
        "x": "En Galicia, además, siempre hay un fallo extra: la lluvia. Reserva un sitio cubierto o ten una alternativa a mano. Una fiesta sorpresa bajo la lluvia sin techo es una forma segura de que se pase de sorpresa a desastre."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "El kit mínimo",
        "x": [
          "Un cómplice con teléfono y llaves.",
          "Una coartada ensayada y creíble.",
          "Una frase única para todos si él pregunta.",
          "Fecha y hora cerradas 48 horas antes."
        ]
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "La mejor sorpresa es la que sale bien, y la segunda mejor es la que se cuenta riendo."
      },
      {
        "t": "leetambien",
        "slug": "cumpleanos-tematicos-adultos-galicia"
      }
    ]
  },
  {
    "slug": "regalos-absurdos-que-si-se-pueden-usar",
    "seccion": "regalos",
    "tag": "Regalos",
    "titulo": "Regalos absurdos que sí se pueden usar: ideas para amigos con sentido del humor",
    "h1": "Regalos absurdos que sí se pueden usar",
    "dek": "Un buen regalo absurdo hace reír y, sorpresa, sirve para algo. Ideas para cumpleaños, despedidas y amigos que lo tienen todo, con un toque gallego.",
    "fecha": "2026-11-08",
    "galicia": true,
    "relacionadas": [
      "frases-para-camisetas-despedida",
      "preguntas-chorras-regalos"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "El regalo absurdo tiene mala fama porque casi siempre acaba en un cajón. Pero hay regalos graciosos que, además, se usan: te ríes al abrirlos y los sigues utilizando meses después. Esa es la categoría que nos interesa."
      },
      {
        "t": "h2",
        "x": "Para la resaca y la mañana siguiente"
      },
      {
        "t": "ul",
        "x": [
          "Un kit de supervivencia: ibuprofeno, agua, un bocadillo y una nota con instrucciones.",
          "Un cuaderno de excusas con las frases más usadas y una página en blanco para las nuevas.",
          "Una taza gigante con su nombre y la hora de su última siesta."
        ]
      },
      {
        "t": "h2",
        "x": "Para quien lo tiene todo"
      },
      {
        "t": "ul",
        "x": [
          "Un diploma enmarcado con un título absurdo («Licenciado en Llegar Tarde con Honores»).",
          "Un calendario con fotos de sus peores momentos, mes a mes.",
          "Un juego de mesa personalizado con anécdotas del grupo como preguntas."
        ]
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "El detalle",
        "x": "Lo mejor de un regalo con humor es la historia que lo acompaña. Un papel con una dedicatoria divertida convierte cualquier objeto en un recuerdo."
      },
      {
        "t": "h2",
        "x": "Con un guiño gallego"
      },
      {
        "t": "ul",
        "x": [
          "Un kit de queimada para hacer en casa, con el conxuro impreso y todo.",
          "Una cesta de conservas y productos de la tierra con una etiqueta personalizada.",
          "Una camiseta con una frase en gallego que él pronuncie fatal."
        ]
      },
      {
        "t": "h2",
        "x": "Para el trabajo y el amigo invisible"
      },
      {
        "t": "ul",
        "x": [
          "Un set de pegatinas con las frases más repetidas de la oficina.",
          "Una planta con un cartel de «Cuídame o te lo cuento todo».",
          "Un llavero con la frase que más dice el homenajeado."
        ]
      },
      {
        "t": "p",
        "x": "En el amigo invisible, el truco es una nota con humor que explique el regalo. Un objeto normal con una buena frase ya es mejor que uno raro sin explicación. Y recuerda mirar el límite de precio: nadie quiere que el amigo invisible acabe en deuda."
      },
      {
        "t": "h2",
        "x": "Cómo acertar con el presupuesto"
      },
      {
        "t": "p",
        "x": "Un regalo absurdo no tiene por qué ser caro. Lo que cuenta es la idea y el cuidado: un papel de regalo bonito, una nota escrita a mano y un envoltorio que sorprenda. Para algo más especial, juntad un bote entre varios y regalad una experiencia o un objeto grande."
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Ojo con esto",
        "x": [
          "Evita los regalos que se burlen de algo que le duela.",
          "Mira siempre si se puede cambiar o devolver.",
          "Si es un regalo para el trabajo, que no sea ofensivo para nadie."
        ]
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "Un regalo absurdo bien elegido se recuerda más que uno caro bien envuelto."
      },
      {
        "t": "leetambien",
        "slug": "preguntas-chorras-regalos"
      }
    ]
  },
  {
    "slug": "actividades-absurdas-despedidas-galicia",
    "ruta": "/actividades-para-despedidas-de-soltero-y-soltera/",
    "seccion": "despedidas",
    "tag": "Actividades absurdas",
    "titulo": "Actividades absurdas para despedidas en Galicia: qué hacer de loco en A Coruña, Vigo y Sanxenxo",
    "h1": "Actividades absurdas para despedidas en Galicia: qué hacer de loco",
    "dek": "Retos, disfraces y planes sin sentido para una despedida de soltero o de soltera, con el mapa de Galicia de fondo: A Coruña, Vigo, Sanxenxo y Ourense.",
    "fecha": "2026-11-09",
    "galicia": true,
    "destacada": false,
    "relacionadas": [
      "guia-para-organizar-despedidas-en-galicia",
      "secuestro-falso-despedida-de-soltero"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Una despedida normal es una cena. Una despedida absurda es lo que se cuenta diez años después. Estas son las actividades más disparatadas que puedes hacer en una despedida en Galicia, con una sola condición: todo con humor, con permiso del homenajeado y sin molestar a nadie."
      },
      {
        "t": "p",
        "x": "Valen para despedidas de soltero, de soltera o mixtas, y casi todas se hacen sin material, sin reservar y sin coger el coche."
      },
      {
        "t": "h2",
        "x": "Diez actividades absurdas que valen para cualquier ciudad"
      },
      {
        "t": "ol",
        "x": [
          "El guía turístico que no tiene ni idea. El novio hace de guía y explica al grupo la «historia» de cada monumento, fuente o estatua. Todo inventado y dicho con total seguridad.",
          "La foto de estatua. En cada plaza, el grupo posa como una estatua. Gana quien aguante más sin reírse.",
          "La gymkhana de fotos imposibles. Una lista de doce fotos (con un perro que se deje, con un camarero, con tres desconocidos que quieran) y siempre con permiso.",
          "El reportero de la tele. Un amigo, con un micrófono de mentira, entrevista al novio y a quien quiera sobre su vida sentimental. Quien no quiera, no contesta.",
          "El pregón del novio. Discurso solemne desde la escalinata de una plaza: «agradezco a esta ciudad…». Un minuto como máximo.",
          "Las olimpiadas en la arena. Carrera de tres piernas, lanzamiento de chancla, carrera de sacos. Y mira la marea: en Galicia sube y baja de verdad.",
          "El menú sorpresa. El grupo pide por el novio. Sin alergias, claro, y con derecho a una sola negativa.",
          "El concurso de brindis. Cada uno brinda con una excusa distinta. Gana el más ridículo.",
          "El tour de bares con pasaporte. Una hoja con una casilla por bar, una firma como sello y un reto distinto en cada sitio.",
          "La búsqueda del tesoro absurda. Pistas que llevan a rincones de la ciudad. El premio es una tarta de verdad."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Las reglas del juego",
        "x": [
          "Siempre con permiso del homenajeado y de quien salga en la foto o en el vídeo.",
          "Nada que moleste a la gente: si alguien dice que no, se acabó el reto.",
          "Respeta las normas de cada sitio (monumentos, playas, parques) y los horarios de descanso.",
          "Nada cerca del tráfico, del agua con marea alta ni con menores alrededor.",
          "Quien lleva la voz cantante no se pasa con las copas."
        ]
      },
      {
        "t": "h2",
        "x": "Qué hacer de loco en cada ciudad"
      },
      {
        "t": "p",
        "x": "Cada ciudad tiene su propio escenario. Estas son las ideas para las cuatro con más despedidas."
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-a-coruna-que-hacer-de-loco"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-vigo-que-hacer-de-loco"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-sanxenxo-que-hacer-de-loco"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-ourense-que-hacer-de-loco"
      },
      {
        "t": "h2",
        "x": "Cómo montarlo sin que se líe"
      },
      {
        "t": "ul",
        "x": [
          "Elige tres actividades, no diez: una despedida con demasiados retos acaba sin ninguno.",
          "Pon a una persona al mando del reloj y otra al mando de las fotos.",
          "Deja un hueco libre para comer: nadie hace bien un reto con hambre.",
          "Ten un plan B cubierto, porque en Galicia llueve."
        ]
      },
      {
        "t": "grupo",
        "dominio": "ginkanas.es",
        "x": "Gincanas, por si prefieres un reto con organización y no montarlo tú."
      },
      {
        "t": "caja",
        "tipo": "frase",
        "x": "Una despedida absurda bien hecha es la que el novio recuerda con vergüenza y con ganas de repetir."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Mensaje para el grupo",
        "x": "Equipo, el sábado tenemos tres retos: guía turístico, foto de estatua y brindis absurdo. Cada uno lleva una excusa para el brindis. Quien no la traiga, brinda con agua y cara de póker."
      },
      {
        "t": "leetambien",
        "slug": "secuestro-falso-despedida-de-soltero"
      }
    ]
  },
  {
    "slug": "despedida-en-a-coruna-que-hacer-de-loco",
    "ruta": "/despedidas-de-soltero-y-soltera-en-a-coruna/",
    "seccion": "despedidas",
    "tag": "Actividades absurdas",
    "titulo": "Despedidas de soltero y soltera en A Coruña: ocho locuras para hacer de loco",
    "h1": "Despedidas en A Coruña: ocho locuras para hacer de loco",
    "dek": "Del Paseo Marítimo a la plaza de María Pita, ocho retos absurdos para una despedida en A Coruña. Con humor y sin que nadie acabe mal.",
    "fecha": "2026-11-09",
    "galicia": true,
    "relacionadas": [
      "actividades-absurdas-despedidas-galicia",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "A Coruña es una ciudad con mar a los dos lados, y eso se nota: se puede ir de la Torre de Hércules a la playa del Orzán sin coger transporte, con parada obligatoria en la plaza de María Pita. Para una despedida de soltero, de soltera o mixta, es casi un tablero de juego ya montado."
      },
      {
        "t": "p",
        "x": "Estas ocho locuras funcionan con grupos de seis a quince personas, casi sin material y con cada escenario a pie de calle."
      },
      {
        "t": "h2",
        "x": "Ocho locuras para hacer de loco"
      },
      {
        "t": "ol",
        "x": [
          "El pregón en María Pita. Un minuto de discurso solemne desde las escaleras del ayuntamiento, con aplauso final del grupo. Sin megáfono y sin cortar el paso.",
          "La foto de estatua ante la Torre de Hércules. El grupo se congela como si fuera un monumento. Gana quien aguante más sin reírse.",
          "El torneo de chancla en el Orzán. Con marea baja y con espacio de sobra, por equipos y con un árbitro con gafas de sol.",
          "La carrera del paseo marítimo. Patinete, bici de alquiler o pasos de baile: elegid un tramo, una meta y un premio simbólico.",
          "El guía turístico imposible. El novio o la novia presenta la ciudad vieja con datos inventados. Los demás votan el más creíble.",
          "La mímica en las galerías de la Marina. Una película, una canción o una frase gallega sin hablar. Se juega en equipos y con público casual.",
          "El brindis de cinco paradas. Una caña y un reto en cada parada, siempre con calma y pagando cada ronda donde toca.",
          "La búsqueda del tesoro por el casco histórico. Pistas que llevan de una plaza a otra. El tesoro es una tarta de las de verdad."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Antes de empezar",
        "x": [
          "Siempre con permiso del homenajeado y de quien salga en una foto.",
          "En monumentos y espacios públicos, respeta las normas y no molestes a vecinos ni turistas.",
          "Nada con alcohol en la playa si la ordenanza no lo permite. Comprueba antes."
        ]
      },
      {
        "t": "h2",
        "x": "Dónde cenar y dónde seguir"
      },
      {
        "t": "p",
        "x": "Para cenar en grupo, busca por el centro y la zona de la ciudad vieja: hay muchos sitios con mesa larga que aceptan reservas para grupos. Pide menú cerrado y avisa si lleváis tarta o brindis. Para después, la zona de bares del centro concentra pubs y locales de copas a poca distancia unos de otros."
      },
      {
        "t": "ul",
        "x": [
          "Cena: mesa larga y menú cerrado, reservada con una semana de margen.",
          "Copas: elegid dos o tres locales cerca entre sí, para no depender de taxis.",
          "Final: un último reto frente al mar, con el grupo sentado y sin música alta."
        ]
      },
      {
        "t": "h2",
        "x": "El plan B, porque llueve"
      },
      {
        "t": "p",
        "x": "En A Coruña llueve lo justo para estropear un plan al aire libre. Ten un sitio cubierto a mano: un local con sala para el grupo, un restaurante con mesa larga o una galería acristalada donde el torneo se convierte en concurso de mímica. Y mira siempre el viento: en el paseo marítimo, el paraguas dura poco."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Mensaje para el grupo",
        "x": "Equipo, el sábado hacemos cuatro de las ocho locuras. Quedamos a las seis en María Pita. Cada uno lleva su disfraz o su excusa. Lo demás se improvisa."
      },
      {
        "t": "leetambien",
        "slug": "actividades-absurdas-despedidas-galicia"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-vigo-que-hacer-de-loco"
      }
    ]
  },
  {
    "slug": "despedida-en-vigo-que-hacer-de-loco",
    "ruta": "/despedidas-de-soltero-y-soltera-en-vigo/",
    "seccion": "despedidas",
    "tag": "Actividades absurdas",
    "titulo": "Despedidas de soltero y soltera en Vigo: ocho locuras para hacer de loco",
    "h1": "Despedidas en Vigo: ocho locuras para hacer de loco",
    "dek": "Del Casco Vello a O Berbés y la ría: ocho retos absurdos para una despedida en Vigo, sin coger el coche y sin que se líe.",
    "fecha": "2026-11-09",
    "galicia": true,
    "relacionadas": [
      "actividades-absurdas-despedidas-galicia",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Vigo es una ciudad de cuestas, de ría y de mucha vida en la calle. Se recorre entre el Casco Vello, la plaza de la Constitución y el puerto, y desde casi cualquier punto se ve el agua. Perfecta para quien prefiere retos de calle a un plan cerrado."
      },
      {
        "t": "p",
        "x": "Estas ocho ideas absurdas se pueden hacer con permiso del homenajeado y sin molestar a nadie."
      },
      {
        "t": "h2",
        "x": "Ocho locuras para hacer de loco"
      },
      {
        "t": "ol",
        "x": [
          "El pregón en la plaza de la Constitución. Un minuto de discurso solemne con aplauso final. Gana el que más se lo crea.",
          "La subida de las cuestas con ritmo. Un tramo, una canción y un baile en cada descanso. Se puntúa la cara de cansancio.",
          "La foto de grupo con la ría de fondo. Pose de portada de revista, en tres versiones: seria, trágica y de triunfo.",
          "El guía del Casco Vello. El novio presenta cada calle con una historia inventada. Se vota la mejor mentira.",
          "El brindis de la ostra. En la zona de las ostreras, con calma y con quien sepa de qué va. Cada uno brinda con una excusa distinta.",
          "La carrera de sillas en la terraza. Solo si el local lo permite y sin molestar al resto. Se corre sentado.",
          "El reportero de la ría. Un amigo con micrófono de mentira entrevista al novio en directo y a cualquiera que quiera hablar.",
          "El reto del Castro. Subir caminando con un objeto absurdo (un peluche, una corbata, un trofeo) y hacerse la foto arriba."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Antes de empezar",
        "x": [
          "Siempre con permiso del homenajeado y de quien salga en la foto.",
          "Nada de retos que obliguen a beber más de la cuenta.",
          "En el puerto y la ría, la seguridad primero."
        ]
      },
      {
        "t": "h2",
        "x": "Una ruta de cinco paradas"
      },
      {
        "t": "ol",
        "x": [
          "Quedada en la plaza de la Constitución, con el pregón.",
          "Casco Vello, con el guía inventado.",
          "Pausa de cena larga, con mesa de grupo reservada.",
          "Terraza o bar del centro para el reto de las sillas.",
          "Último brindis con vistas a la ría."
        ]
      },
      {
        "t": "h2",
        "x": "Copas y fiesta"
      },
      {
        "t": "p",
        "x": "Para seguir la noche, Vigo ofrece zonas de bares y locales de copas en el centro y alrededor del Areal. Elegid dos o tres cerca entre sí, fijad una hora de salida y un punto de encuentro."
      },
      {
        "t": "h2",
        "x": "El plan B, porque llueve"
      },
      {
        "t": "p",
        "x": "En Vigo la lluvia es una costumbre, no una excepción. Ten un plan cubierto: un local con sala para el grupo, un restaurante con mesa larga o un sitio donde el pregón se haga entre cañas. Si hay sol, aprovecha las Cíes en temporada, siempre con reserva de barco."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Mensaje para el grupo",
        "x": "Equipo, sábado en Vigo. Quedamos en la plaza de la Constitución. Cada uno lleva un objeto absurdo. El resto lo ponemos entre todos."
      },
      {
        "t": "leetambien",
        "slug": "actividades-absurdas-despedidas-galicia"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-a-coruna-que-hacer-de-loco"
      }
    ]
  },
  {
    "slug": "despedida-en-sanxenxo-que-hacer-de-loco",
    "ruta": "/despedidas-de-soltero-y-soltera-en-sanxenxo/",
    "webs": ["despedidassanxenxo.es", "despedidas-sanxenxo.com", "despedidasplayasanxenxo.com"],
    "seccion": "despedidas",
    "tag": "Actividades absurdas",
    "titulo": "Despedidas de soltero y soltera en Sanxenxo: ocho locuras para hacer de loco",
    "h1": "Despedidas en Sanxenxo: ocho locuras para hacer de loco",
    "dek": "Playas, puerto deportivo y mucho verano: ocho retos absurdos para una despedida en Sanxenxo, con humor y sin que se líe.",
    "fecha": "2026-11-09",
    "galicia": true,
    "relacionadas": [
      "actividades-absurdas-despedidas-galicia",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Sanxenxo es, para mucha gente, el sitio de las despedidas de verano: playa de Silgar, puerto deportivo y ambiente hasta tarde. También es donde más se llenan los planes, así que conviene llevar los retos pensados."
      },
      {
        "t": "p",
        "x": "Estas ocho ideas absurdas funcionan en grupos de seis a quince personas, casi sin material y con el escenario ya incluido."
      },
      {
        "t": "h2",
        "x": "Ocho locuras para hacer de loco"
      },
      {
        "t": "ol",
        "x": [
          "El desfile de la playa. De una punta de Silgar a la otra, con flotador, toalla de capa y música propia. Gana quien más se lo toma en serio.",
          "El torneo de palas. Por equipos, con premio simbólico y el novio de árbitro.",
          "La carrera de flotadores en la orilla. Solo con buena mar, sin adentrarse y con alguien vigilando.",
          "La foto de portada en el puerto. El grupo posa como en una revista de yates. Se vota la más creída.",
          "El pregón de la marea. El novio habla al mar con voz de documental. Los demás hacen de gaviotas.",
          "La gymkhana de fotos imposibles. Doce fotos de una lista, siempre con permiso de quien salga.",
          "El brindis de la puesta de sol. Todos de pie, con una copa y una excusa distinta cada uno.",
          "El concurso de castillos de arena. Con jurado, tema obligatorio y premio para el más desastroso."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Antes de empezar",
        "x": [
          "Siempre con permiso del homenajeado y de quien salga en una foto.",
          "En el mar, nada de retos con alcohol ni con corrientes. Mira siempre las banderas de la playa.",
          "Respeta las normas del arenal y de los locales."
        ]
      },
      {
        "t": "h2",
        "x": "Plan de día y plan de noche"
      },
      {
        "t": "ul",
        "x": [
          "De día: playa, retos con arena, comida en grupo y barco si el tiempo y el presupuesto lo permiten.",
          "De tarde: terraza con vistas y brindis de despedida del sol.",
          "De noche: cena en grupo reservada y copas en la zona de Silgar o del puerto, con dos o tres sitios cerca entre sí."
        ]
      },
      {
        "t": "h2",
        "x": "El plan B, porque llueve"
      },
      {
        "t": "p",
        "x": "En temporada alta, Sanxenxo se llena y los sitios con sombra o techo vuelan. Reserva con tiempo un local cubierto o una mesa grande y ten pensado qué haces si el día amanece nublado: gymkhana en interior, karaoke o cena larga con juegos."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Mensaje para el grupo",
        "x": "Equipo, sábado en Sanxenxo. Playa por la mañana, cena a las nueve. Traed toalla y mucho humor. El resto lo organizo yo."
      },
      {
        "t": "leetambien",
        "slug": "actividades-absurdas-despedidas-galicia"
      },
      {
        "t": "leetambien",
        "slug": "barco-o-casa-rural-despedida-galicia"
      }
    ]
  },
  {
    "slug": "despedida-en-ourense-que-hacer-de-loco",
    "ruta": "/despedidas-de-soltero-y-soltera-en-ourense/",
    "webs": ["despedidasourense.com"],
    "seccion": "despedidas",
    "tag": "Actividades absurdas",
    "titulo": "Despedidas de soltero y soltera en Ourense: ocho locuras para hacer de loco",
    "h1": "Despedidas en Ourense: ocho locuras para hacer de loco",
    "dek": "Termas, Ponte Romana y vino del Ribeiro cerca: ocho retos absurdos para una despedida en Ourense, con humor y sin que se líe.",
    "fecha": "2026-11-09",
    "galicia": true,
    "relacionadas": [
      "actividades-absurdas-despedidas-galicia",
      "guia-para-organizar-despedidas-en-galicia"
    ],
    "bloques": [
      {
        "t": "p",
        "x": "Ourense no tiene mar, pero tiene agua caliente: las Burgas, en pleno centro, y las termas del río Miño dan para una despedida distinta. Con la Ponte Romana, la catedral y la comarca del Ribeiro cerca, es un destino perfecto para quien no quiere el plan de playa de siempre."
      },
      {
        "t": "p",
        "x": "Estas son ocho ideas absurdas para una despedida de soltero, de soltera o mixta, con permiso del homenajeado y respetando las normas de cada sitio."
      },
      {
        "t": "h2",
        "x": "Ocho locuras para hacer de loco"
      },
      {
        "t": "ol",
        "x": [
          "La ruta de las Burgas en albornoz. Si las normas y los horarios lo permiten, el grupo hace un recorrido absurdo con albornoz y chancletas. Comprueba antes dónde se puede.",
          "El pregón en la Ponte Romana. Un minuto de discurso solemne del novio con aplauso final del grupo.",
          "La foto de estatua frente a la catedral. El grupo se congela. Gana quien aguante más sin moverse.",
          "El guía termal. El novio explica al grupo la historia de cada fuente y de cada poza. Inventada, claro.",
          "El concurso de brindis del Ribeiro. Cada uno brinda con una excusa distinta, con vino de la zona.",
          "El reportero del río. Un amigo, con micrófono de mentira, entrevista al novio y a quien quiera.",
          "La gymkhana de fotos imposibles. Doce fotos de una lista, siempre con permiso de quien salga.",
          "La búsqueda del tesoro por el casco viejo. Pistas que llevan de una plaza a otra. El premio es una tarta de las de verdad."
        ]
      },
      {
        "t": "caja",
        "tipo": "ojo",
        "titulo": "Antes de empezar",
        "x": [
          "Siempre con permiso del homenajeado y de quien salga en la foto.",
          "En termas y piscinas, respeta las normas, los horarios y los precios de cada una.",
          "Nada con alcohol en el agua ni con menores."
        ]
      },
      {
        "t": "h2",
        "x": "Cenas privadas en el centro"
      },
      {
        "t": "p",
        "x": "Por el centro hay comedores y salones privados donde el grupo cena sin compartir mesa con nadie. Pide menú cerrado, confirma cuántos sois y pregunta si pueden sacar la tarta o el brindis. Reserva con tiempo: los fines de semana se llenan."
      },
      {
        "t": "h2",
        "x": "La zona de los vinos"
      },
      {
        "t": "p",
        "x": "Ourense es tierra de vino y el centro lo demuestra: calles de bares donde se tapea y se brinda. Haced una ruta de cinco paradas, un vino y una tapa en cada una, con un reto por parada. Con calma: aquí el vino entra mejor de lo que sienta."
      },
      {
        "t": "h2",
        "x": "Pubs de fiesta por el centro"
      },
      {
        "t": "p",
        "x": "Para cerrar la noche, los pubs y locales de copas del centro están cerca unos de otros, así que no hace falta taxi entre uno y otro. Elegid dos o tres, fijad una hora de salida y un punto de encuentro por si alguien se pierde."
      },
      {
        "t": "h2",
        "x": "El plan B, porque llueve"
      },
      {
        "t": "p",
        "x": "Ourense tiene veranos calurosos e inviernos fríos y húmedos. En verano, planea los retos al aire libre a primera hora o al atardecer. En invierno, el plan B está claro: las termas, que son un plan en sí mismas, y una cena larga."
      },
      {
        "t": "caja",
        "tipo": "idea",
        "titulo": "Mensaje para el grupo",
        "x": "Equipo, el sábado hacemos tres de las ocho locuras. Elegid votando en el grupo. Cada uno lleva el disfraz o la excusa que le toque. El resto se improvisa."
      },
      {
        "t": "leetambien",
        "slug": "actividades-absurdas-despedidas-galicia"
      },
      {
        "t": "leetambien",
        "slug": "despedida-en-a-coruna-que-hacer-de-loco"
      }
    ]
  },
];

piezas.push(...PIEZAS_NUEVAS, ...PIEZAS_NUEVAS_2);

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
