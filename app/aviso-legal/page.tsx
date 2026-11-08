import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { Dato } from "@/components/Pendiente";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos del titular, condiciones de uso, propiedad intelectual y responsabilidad de Menú Marrón.",
  alternates: { canonical: "/aviso-legal/" },
};

export default function AvisoLegal() {
  return (
    <LegalPage titulo="Aviso legal">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio
        electrónico (LSSI-CE), se informa de que el titular de este sitio web (Menú Marrón) es:
      </p>
      <ul className="lista">
        <li>Titular: <Dato v={TITULAR.nombre} /></li>
        <li>NIF/CIF: <Dato v={TITULAR.nif} /></li>
        <li>Domicilio: <Dato v={TITULAR.domicilio} /></li>
        <li>Correo electrónico de contacto: <Dato v={TITULAR.email} /></li>
        {TITULAR.registro && <li>Datos registrales: {TITULAR.registro}</li>}
      </ul>
      <h2>2. Objeto y condiciones de uso</h2>
      <p>
        Menú Marrón es una revista digital de contenido editorial y humorístico sobre la organización de despedidas,
        cumpleaños, regalos y otros eventos. El acceso y uso del sitio atribuye la condición de usuario e implica la
        aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado del sitio y de sus contenidos,
        conforme a la ley, la buena fe y el orden público.
      </p>
      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, el diseño, la estructura, las marcas y los demás elementos de este sitio son propiedad del titular o
        cuenta con licencia para su uso, y están protegidos por la normativa de propiedad intelectual e industrial.
        Queda prohibida su reproducción, distribución o transformación sin autorización expresa, salvo para uso
        personal y con cita de la fuente.
      </p>
      <h2>4. Contenidos de terceros y retirada</h2>
      <p>
        Cuando se mencionen contenidos de terceros, se hará de forma que respete su autoría y con atribución. No se
        copian ni alojan vídeos, imágenes ni textos ajenos sin autorización. Si eres titular de derechos y consideras
        que algún contenido vulnera tus derechos, escribe a la dirección de contacto indicada, identificando el
        contenido y acreditando tu titularidad, y lo revisaremos y, en su caso, lo retiraremos con la mayor brevedad.
      </p>
      <h2>5. Responsabilidad</h2>
      <p>
        Los contenidos de la revista tienen carácter informativo y humorístico y no constituyen asesoramiento
        profesional. Algunas ideas (retos, bromas, planes en la calle) requieren sentido común, el consentimiento de las
        personas implicadas y el cumplimiento de la ley; el usuario es el único responsable de cómo las ponga en
        práctica. El titular no garantiza la ausencia de errores ni la disponibilidad permanente del sitio, y no
        responde de los daños derivados de su uso, salvo en los casos en que la ley lo establezca.
      </p>
      <h2>6. Enlaces</h2>
      <p>
        Este sitio puede contener enlaces a páginas de terceros. El titular no controla ni se responsabiliza del
        contenido de esos sitios ni de sus políticas.
      </p>
      <h2>7. Protección de datos</h2>
      <p>El tratamiento de datos personales se regula en la Política de privacidad de este sitio.</p>
      <h2>8. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y
        tribunales que correspondan conforme a la normativa aplicable, incluida la de protección de consumidores y
        usuarios.
      </p>
    </LegalPage>
  );
}
