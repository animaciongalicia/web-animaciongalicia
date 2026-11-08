import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { Dato } from "@/components/Pendiente";
import { TITULAR } from "@/lib/legal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos del titular, condiciones de uso, propiedad intelectual, contribuciones de los usuarios y responsabilidad de Menú Marrón.",
  alternates: { canonical: absoluteUrl("/aviso-legal/") },
};

export default function AvisoLegal() {
  return (
    <LegalPage titulo="Aviso legal">
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información
        y de comercio electrónico (LSSI-CE), se informa de que el titular de este sitio web, «Menú Marrón», es:
      </p>
      <ul className="lista">
        <li>Titular: <Dato v={TITULAR.nombre} /></li>
        <li>NIF/CIF: <Dato v={TITULAR.nif} /></li>
        <li>Domicilio: <Dato v={TITULAR.domicilio} /></li>
        <li>Correo electrónico de contacto: <Dato v={TITULAR.email} /></li>
        <li>Nombre de dominio: animaciongalicia.com</li>
        {TITULAR.registro && <li>Datos registrales: {TITULAR.registro}</li>}
      </ul>
      <p>
        Menú Marrón es un proyecto de Animación Galicia. Este sitio es una revista digital de contenido editorial y
        humorístico: no vende productos ni servicios y no contiene publicidad ni programas de afiliación. Si algún día
        se incorporasen, se indicaría de forma clara en esta página y en el propio contenido.
      </p>

      <h2>2. Objeto y aceptación</h2>
      <p>
        Este aviso regula el acceso y el uso del sitio web, de sus contenidos y de los servicios de contacto que ofrece.
        El acceso al sitio atribuye la condición de usuario e implica la aceptación de este aviso legal, de la{" "}
        <Link href="/privacidad/">política de privacidad</Link> y de la <Link href="/cookies/">política de cookies</Link>.
        Si no estás de acuerdo con alguna de sus condiciones, no uses el sitio.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>El usuario se compromete a hacer un uso adecuado del sitio y de sus contenidos, conforme a la ley, la buena fe y el orden público. En particular, se compromete a no:</p>
      <ul className="lista">
        <li>Utilizar el sitio con fines ilícitos o contrarios a lo establecido en este aviso.</li>
        <li>Introducir o difundir virus, programas dañinos o cualquier elemento que pueda dañar o sobrecargar el sitio.</li>
        <li>Intentar acceder a zonas no públicas, o extraer de forma masiva y automatizada los contenidos.</li>
        <li>Enviar mensajes con contenido ilegal, ofensivo, difamatorio o que vulnere derechos de terceros.</li>
      </ul>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, el diseño, la estructura, la selección de contenidos, las ilustraciones, las fotografías (salvo que se
        indique otra autoría), las marcas y los demás elementos de este sitio son propiedad del titular o de terceros que
        han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda
        prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del
        titular, salvo para uso personal y privado, o dentro de los límites que permite la ley (por ejemplo, el derecho
        de cita), siempre mencionando la fuente y con un enlace a la página original.
      </p>
      <p>
        Los nombres de aplicaciones, servicios o marcas que se mencionan en los artículos se usan solo para identificar
        el producto al que se refiere el texto y pertenecen a sus respectivos titulares. Su mención no implica relación
        comercial, patrocinio ni recomendación remunerada.
      </p>

      <h2>5. Contenidos de terceros y retirada</h2>
      <p>
        Cuando se mencionen contenidos de terceros, se hará respetando su autoría y con atribución. No se copian ni se
        alojan vídeos, imágenes ni textos ajenos sin autorización. Las fotografías que se publican son propias o se
        publican con el permiso de las personas que aparecen en ellas y de quien tenga los derechos.
      </p>
      <p>
        Si eres titular de derechos o aparece tu imagen y quieres que se retire un contenido, escribe a{" "}
        <Dato v={TITULAR.email} /> indicando la dirección de la página, el contenido afectado y, en su caso, la
        acreditación de tu titularidad. Lo revisaremos y lo retiraremos con la mayor brevedad posible cuando proceda.
      </p>

      <h2>6. Contribuciones de los usuarios</h2>
      <p>
        Los apartados «Mándanos un enlace» y «Cuéntanos tu marrón» abren tu programa de correo con un mensaje preparado,
        que envías tú. Al hacerlo nos remites un contenido por tu propia iniciativa. Solo lo citaremos en la revista si
        lo indicas expresamente (casilla de permiso en el mensaje) y, en ese caso, <strong>sin tu nombre</strong>. Eres
        responsable de que lo que envías sea cierto, no vulnere derechos de nadie y no incluya datos de otras personas
        sin su consentimiento. Podemos editar un texto para adaptarlo al tono y a la extensión de la revista, y
        rechazar cualquier contribución sin tener que justificarlo.
      </p>

      <h2>7. Responsabilidad</h2>
      <p>
        Los contenidos de la revista tienen carácter informativo, editorial y humorístico y no constituyen asesoramiento
        profesional (jurídico, fiscal, financiero, médico o de otro tipo). Algunas ideas (retos, bromas, planes en la
        calle, actividades en el mar o en la naturaleza) requieren sentido común, el consentimiento de las personas
        implicadas, el respeto a las normas locales y el cumplimiento de la ley. El usuario es el único responsable de
        cómo las ponga en práctica y de los riesgos que asuma.
      </p>
      <p>
        El titular hace esfuerzos razonables para que la información sea correcta y esté actualizada, pero no garantiza
        la ausencia de errores ni la disponibilidad permanente del sitio, que puede interrumpirse por mantenimiento o
        por causas ajenas a su control. El titular no responde de los daños derivados del uso del sitio o de las ideas
        publicadas, salvo en los casos en que la ley lo establezca expresamente. Si detectas un error, escríbenos y lo
        corregiremos.
      </p>

      <h2>8. Enlaces</h2>
      <p>
        Este sitio incluye enlaces a otras páginas web. Los enlaces a las webs del grupo de Animación Galicia (que puedes
        ver en <Link href="/como-trabajamos/">Cómo trabajamos</Link>) llevan a sitios del mismo titular o de empresas
        vinculadas, y se abren en una pestaña nueva. Fuera de esos casos, el titular no controla ni se responsabiliza del
        contenido, las políticas o las prácticas de las páginas de terceros. Si quieres enlazar a Menú Marrón, puedes
        hacerlo libremente siempre que no sugiera una relación inexistente con el titular ni dañe su imagen.
      </p>

      <h2>9. Protección de datos y cookies</h2>
      <p>
        El tratamiento de datos personales se explica en la <Link href="/privacidad/">política de privacidad</Link>, y el
        uso de cookies en la <Link href="/cookies/">política de cookies</Link>.
      </p>

      <h2>10. Modificaciones</h2>
      <p>
        El titular puede modificar este aviso en cualquier momento para adaptarlo a cambios legales o del propio sitio.
        La versión vigente es la publicada en esta página, con la fecha de última actualización indicada al final.
      </p>

      <h2>11. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso se rige por la legislación española. Si eres consumidor o usuario, para cualquier controversia serán
        competentes los juzgados y tribunales de tu domicilio, conforme a la normativa de protección de consumidores y
        usuarios. En los demás casos, los de A Coruña. Puedes dirigir cualquier reclamación o sugerencia a{" "}
        <Dato v={TITULAR.email} />.
      </p>
    </LegalPage>
  );
}
