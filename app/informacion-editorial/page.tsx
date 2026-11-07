import type { Metadata } from "next";
import { AGENCIA } from "@/lib/company";

export const metadata: Metadata = {
  title: "Cómo trabajamos, derechos y afiliación",
  description:
    "Cómo selecciona y cita Menú Marrón los contenidos de la red, qué hacer si eres autor de algo que enlazamos y cuándo hay enlaces de afiliación.",
  alternates: { canonical: "/informacion-editorial/" },
};

export default function EditorialPage() {
  return (
    <div className="wrap-wide page">
      <div className="read">
        <header className="section-head">
          <p className="kicker">Información editorial</p>
          <h1>Cómo trabajamos, derechos y afiliación</h1>
        </header>
        <div className="prose">
          <h2>Quién hace Menú Marrón</h2>
          <p>
            Menú Marrón es una revista digital hecha en Galicia y un proyecto de {AGENCIA.nombre}. Recogemos lo mejor
            y lo peor que hay en la red sobre el marrón de organizar fiestas, cumpleaños y regalos, y lo contamos con
            comentario propio.
          </p>
          <h2>Qué seleccionamos y cómo</h2>
          <p>
            Elegimos contenidos que hacen reír y que, de paso, ayudan a quien organiza algo. Comprobamos lo que
            podemos antes de contarlo y avisamos cuando algo no está verificado. No hacemos humor a costa de daños ni
            de personas privadas.
          </p>
          <h2>Contenidos de terceros</h2>
          <p>
            No copiamos ni alojamos vídeos, imágenes ni textos ajenos. Los enlazamos, los incrustamos con el
            reproductor oficial de la plataforma o los citamos brevemente con su fuente. El texto de cada pieza es
            nuestro. Si eres autor de algo que aparece aquí y prefieres que lo retiremos o lo enlacemos de otra
            forma, escríbenos desde Contacto y lo resolvemos.
          </p>
          <h2>Afiliación</h2>
          <p>
            Si en algún momento una recomendación lleva un enlace de afiliación, irá marcada de forma visible y no te
            costará más. Si no lo ves marcado, no hay comisión.
          </p>
        </div>
      </div>
    </div>
  );
}
