/**
 * Fotos chorras de celebraciones, despedidas, cumpleaños y eventos.
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
  { src: "/fotos/abuela-en-la-pista.jpg", ancho: 881, alto: 461, alt: "Señora mayor bailando entusiasmada en una fiesta", pie: "La que más aguanta de la noche", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigas-gafas-flores.jpg", ancho: 815, alto: 467, alt: "Cuatro amigas con coronas de flores y gafas haciendo la V", pie: "Cuando salimos guapas: una foto", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigas-gafas-retro.jpg", ancho: 1280, alto: 744, alt: "Grupo de amigas con gafas de colores en una foto en blanco y negro", pie: "El grupo, versión vintage", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigo-invisible-preguntas.jpg", ancho: 1268, alto: 664, alt: "Personas ocultas tras carteles de interrogación junto a regalos", pie: "¿Quién te ha tocado?", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigo-invisible-regalos.jpg", ancho: 1200, alto: 754, alt: "Intercambio de regalos con una carita seria encima", pie: "Amigo invisible, cara de póker", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/banana-en-brazos.jpg", ancho: 870, alto: 465, alt: "Amigas con pelucas de colores cargando a una persona disfrazada de plátano", pie: "Cargar al novio: deporte de riesgo", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/boda-pista-sudor.jpg", ancho: 990, alto: 482, alt: "Hombre sudado agarrando por la cabeza a otro en plena fiesta", pie: "Fase final de la boda", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/brindis-champan-botella.jpg", ancho: 840, alto: 474, alt: "Grupo de amigas brindando y bebiendo champán de la botella", pie: "Aquí nadie conduce", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/brindis-copas.jpg", ancho: 626, alto: 417, alt: "Manos brindando con copas de champán", pie: "Brindis: lo único que no falla", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/cabina-fotos-novios.jpg", ancho: 960, alto: 640, alt: "Grupo con accesorios y carteles en una cabina de fotos de boda", pie: "La cabina de fotos manda", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/calcetin-de-regalo.jpg", ancho: 1000, alto: 603, alt: "Hombre sosteniendo un calcetín con un regalo envuelto", pie: "El calcetín: clásico del mal regalo", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/confeti-vasos-rojos.jpg", ancho: 740, alto: 493, alt: "Amigas lanzando confeti junto a una mesa con vasos rojos", pie: "Confeti: lo barrerá alguien", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/cumple-70-baile.jpg", ancho: 960, alto: 640, alt: "Señora mayor bailando con gafas de fiesta rodeada de gente", pie: "Cumpleaños con más marcha que el tuyo", etiqueta: "Cumpleaños", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/disfraces-grupo-pez.jpg", ancho: 908, alto: 468, alt: "Grupo de amigas con disfraces y gorros de cocinero", pie: "Disfraces de grupo: más fáciles que ponerse de acuerdo", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/disfraz-acolchado-rojo.jpg", ancho: 1600, alto: 2138, alt: "Persona con un disfraz rojo acolchado con detalles dorados", pie: "Disfraz que ocupa sitio", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/fiesta-colores.jpg", ancho: 870, alto: 464, alt: "Amigas cubiertas de polvos de colores en un parque", pie: "Lo que no sale en el vídeo resumen", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/fiesta-confeti-selfie.jpg", ancho: 740, alto: 493, alt: "Grupo de amigos celebrando entre confeti", pie: "Selfie con efectos especiales", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/hombre-tirado-confeti.jpg", ancho: 600, alto: 400, alt: "Hombre tumbado entre confeti con copas alrededor", pie: "Día después, sin remedio", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/jarra-cerveza-gigante.jpg", ancho: 850, alto: 450, alt: "Chorro de cerveza directo a la cara en una mesa de bar", pie: "Hidratación, la justa", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/mascara-caballo-fiesta.jpg", ancho: 960, alto: 640, alt: "Persona con una máscara de caballo en una fiesta con luces", pie: "Cuando el disfraz lo elige el grupo", etiqueta: "Cumpleaños", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/novio-de-flamenca-caballo.jpg", ancho: 858, alto: 485, alt: "Grupo de amigos con un disfraz de flamenca sobre un animal por una calle", pie: "El disfraz del novio, sin filtro", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/pelo-al-viento-copa.jpg", ancho: 600, alto: 400, alt: "Mujeres moviendo el pelo con una copa en la mano de noche", pie: "Modo noche activado", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/peluca-azul-gafas-verdes.jpg", ancho: 868, alto: 457, alt: "Hombre sonriente con peluca azul y gafas verdes", pie: "Cuando el amigo ya entró en personaje", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/regalo-cara-asco.jpg", ancho: 1200, alto: 900, alt: "Mujer con gesto de asco al abrir una caja roja", pie: "Gracias, de verdad", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/regalo-cara-mano.jpg", ancho: 870, alto: 534, alt: "Hombre tapándose la cara mientras una mujer abre un regalo", pie: "Ese regalo no era", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/regalo-sorpresa-susto.jpg", ancho: 740, alto: 423, alt: "Mujer con cara de sorpresa abriendo un regalo ante otras personas", pie: "Cuando abres el regalo en público", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/reto-capea-novillo.jpg", ancho: 832, alto: 458, alt: "Persona disfrazada de payaso trepando un muro junto a un novillo", pie: "Reto de plaza con salida de emergencia", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/rueda-broma-disfraz.jpg", ancho: 870, alto: 505, alt: "Rueda de la fortuna con un muñeco colgado cabeza abajo", pie: "La rueda no perdona", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/taza-con-lazo.jpg", ancho: 1024, alto: 580, alt: "Taza blanca con lazo rojo junto a una caja de cartón", pie: "La taza, otra vez", etiqueta: "Regalos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigas-brindis-antifaz.jpg", ancho: 1000, alto: 667, alt: "Amigas con antifaces y copas brindando en una fiesta", pie: "Brindis con antifaz, por si acaso", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigos-collares-flores.jpg", ancho: 1600, alto: 1067, alt: "Grupo de amigos sonriendo con collares de flores y copas", pie: "Reencuentro en modo verano", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigos-mascaras-carnaval.jpg", ancho: 1000, alto: 1000, alt: "Amigos con máscaras de carnaval en una fiesta", pie: "Máscaras puestas y plan cerrado", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/amigos-selfie-globos.jpg", ancho: 1000, alto: 666, alt: "Grupo de amigos haciéndose un selfie entre globos de colores", pie: "La cena empieza cuando salen los globos", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/antifaz-biblioteca.jpg", ancho: 900, alto: 600, alt: "Dos amigas con antifaces en una sala con velas", pie: "Si no es en casa, mejor un sitio con encanto", etiqueta: "Cumpleaños", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/baile-globos.jpg", ancho: 447, alto: 447, alt: "Mujer bailando con globos largos en una fiesta", pie: "Música, que lo demás se improvisa", etiqueta: "Cumpleaños", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/confeti-oficina.jpg", ancho: 1200, alto: 747, alt: "Grupo celebrando con confeti y globos en un espacio luminoso", pie: "Una jubilación sin confeti no es jubilación", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/disfraces-anos-70.jpg", ancho: 1280, alto: 720, alt: "Grupo disfrazado de los años 70 con pelucas y gafas", pie: "Una idea original: noche de los 70", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/disfraces-de-animales.jpg", ancho: 1200, alto: 900, alt: "Seis amigos disfrazados de animales ante una pared verde", pie: "Un grupo, cada uno con su personaje", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/fiesta-copas-antifaz.jpg", ancho: 1000, alto: 667, alt: "Amigos de fiesta con copas y gafas de colores", pie: "Cena y fiesta, mejor sin prisas", etiqueta: "Despedidas", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/gafas-bigote-pareja.jpg", ancho: 1140, alto: 652, alt: "Dos amigos posando con gafas y un bigote de mentira", pie: "El discurso ya empezó", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/globos-de-colores.jpg", ancho: 1200, alto: 800, alt: "Globos de colores flotando en el techo", pie: "Lo que llevas se olvida, los globos se recuerdan", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/jenga-gigante-jardin.jpg", ancho: 551, alto: 362, alt: "Dos amigos jugando a un jenga gigante en un jardín", pie: "Juego tranquilo, nervios de acero", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/juego-ojos-vendados.jpg", ancho: 1200, alto: 800, alt: "Grupo jugando con los ojos vendados y globos en el suelo", pie: "Reto con los ojos vendados", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/mujer-confeti-copa.jpg", ancho: 1600, alto: 900, alt: "Mujer riendo con una copa entre confeti y guirnaldas", pie: "Brindis por lo que sea", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/photocall-grupo.jpg", ancho: 800, alto: 533, alt: "Grupo posando en un photocall con globos y accesorios", pie: "Foto de despedida, con accesorios", etiqueta: "Eventos", fecha: "2026-11-08", consentimiento: true },
  { src: "/fotos/tira-y-afloja-boda.jpg", ancho: 1280, alto: 853, alt: "Invitados haciendo un tira y afloja en una celebración al aire libre", pie: "Tira y afloja: un clásico que sigue funcionando", etiqueta: "Juegos", fecha: "2026-11-08", consentimiento: true },
  // FOTOS_FIN
];
