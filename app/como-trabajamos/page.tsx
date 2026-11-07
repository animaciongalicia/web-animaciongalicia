import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description: "Cómo hacemos Menú Marrón: de dónde salen las ideas, cómo tratamos los contenidos de terceros y qué hacer si algo te molesta.",
  alternates: { canonical: "/como-trabajamos/" },
};

export default function ComoTrabajamos() {
  return (
    <LegalPage titulo="Cómo trabajamos">
      <h2>De dónde salen las ideas</h2>
      <p>
        Menú Marrón es una revista hecha en Galicia. Las ideas son editoriales: las escribimos nosotros a partir de lo
        que se ve en las despedidas, los cumpleaños y los grupos de WhatsApp. Cuando nos inspiramos en algo concreto,
        lo decimos.
      </p>
      <h2>Humor con límites</h2>
      <p>
        Nos reímos de las situaciones, no de las personas. No hacemos humor a costa de daños ni de gente que no ha
        pedido salir. Las ideas que implican a otras personas (retos de calle, bromas) llevan sus avisos.
      </p>
      <h2>Contenidos de terceros</h2>
      <p>
        No copiamos ni alojamos vídeos, imágenes ni textos ajenos. Si citamos algo, lo hacemos con su fuente. Si eres
        autor de algo y quieres que lo retiremos, escríbenos desde Contacto.
      </p>
      <h2>Errores</h2>
      <p>Si ves un dato que no es correcto, dínoslo y lo corregimos.</p>
    </LegalPage>
  );
}
