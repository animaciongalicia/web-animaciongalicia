import Link from "next/link";
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { Dato } from "@/components/Pendiente";
import { TITULAR } from "@/lib/legal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Quién trata tus datos en Menú Marrón, para qué, con qué base legal, durante cuánto tiempo y cómo ejercer tus derechos.",
  alternates: { canonical: absoluteUrl("/privacidad/") },
};

export default function Privacidad() {
  return (
    <LegalPage titulo="Política de privacidad">
      <p>
        Esta política cumple el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD). En lenguaje claro: esta web <strong>no tiene
        formularios que recojan tus datos</strong>. Si quieres escribirnos, se abre tu programa de correo y el mensaje lo
        envías tú. Y solo medimos visitas con Google Analytics si tú lo aceptas.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul className="lista">
        <li>Responsable: <Dato v={TITULAR.nombre} /></li>
        <li>NIF/CIF: <Dato v={TITULAR.nif} /></li>
        <li>Domicilio: <Dato v={TITULAR.domicilio} /></li>
        <li>Correo electrónico: <Dato v={TITULAR.email} /></li>
      </ul>

      <h2>2. Qué datos tratamos, para qué y con qué base legal</h2>
      <ul className="lista">
        <li>
          <strong>Mensajes que nos envías por correo</strong> (desde «Contacto», «Mándanos un enlace» o «Cuéntanos tu
          marrón», que abren tu programa de correo): tu dirección de correo, el nombre que figure en ella y el contenido
          del mensaje. <em>Finalidad:</em> atender tu consulta, valorar tu enlace o anécdota y, solo si das permiso
          expreso, citarla en la revista sin tu nombre. <em>Base:</em> tu consentimiento (art. 6.1.a RGPD), que prestas al
          enviarnos el mensaje por iniciativa propia y, en su caso, al indicar que podemos citarlo.
        </li>
        <li>
          <strong>Analítica web (solo si aceptas las cookies):</strong> datos de navegación seudonimizados mediante
          Google Analytics 4 (páginas vistas, tiempo, dispositivo, país o ciudad aproximados y un identificador en una
          cookie). <em>Finalidad:</em> saber qué contenidos se leen para mejorar la revista. <em>Base:</em> tu
          consentimiento (art. 6.1.a RGPD y art. 22.2 LSSI-CE). Si no aceptas, no se carga Google Analytics.
        </li>
        <li>
          <strong>Datos técnicos del servidor</strong> (dirección IP, fecha y hora, página solicitada, navegador): los
          genera el proveedor de alojamiento al servirte la página. <em>Finalidad:</em> mantener la web en
          funcionamiento y proteger su seguridad. <em>Base:</em> interés legítimo en la seguridad y el correcto
          funcionamiento del sitio (art. 6.1.f RGPD).
        </li>
      </ul>
      <p>
        No te pedimos datos que no necesitemos, no tomamos decisiones automatizadas ni elaboramos perfiles comerciales, y
        no usamos tus datos para enviarte publicidad. Si nos escribes con datos de otras personas, asegúrate de que
        tienes su permiso.
      </p>

      <h2>3. Destinatarios y encargados del tratamiento</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio intervienen estos proveedores, que
        actúan como encargados del tratamiento bajo contrato conforme al artículo 28 del RGPD:
      </p>
      <ul className="lista">
        <li>Alojamiento de la web: Vercel Inc. (o el proveedor de alojamiento que figure en cada momento).</li>
        <li>Analítica, solo con tu consentimiento: Google Ireland Limited (Google Analytics 4).</li>
        <li>Correo electrónico: el proveedor de correo del titular, donde se reciben los mensajes que nos envías.</li>
      </ul>

      <h2>4. Transferencias internacionales</h2>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo (por ejemplo, en Estados
        Unidos). Estas transferencias se amparan en las garantías previstas en el RGPD: decisión de adecuación (Marco de
        Privacidad de Datos UE-EE. UU.) o cláusulas contractuales tipo. Puedes pedirnos más información escribiendo a{" "}
        <Dato v={TITULAR.email} />.
      </p>

      <h2>5. Plazo de conservación</h2>
      <ul className="lista">
        <li>Mensajes de correo: el tiempo necesario para atenderlos y, después, durante los plazos legales de prescripción de posibles responsabilidades. Una anécdota citada con tu permiso se mantiene hasta que nos pidas retirarla.</li>
        <li>Google Analytics: el periodo de retención configurado en la propiedad de analítica (el mínimo posible, máximo 14 meses). La cookie dura hasta 2 años; puedes borrarla cuando quieras.</li>
        <li>Datos técnicos del servidor: el periodo breve que fije el proveedor de alojamiento.</li>
      </ul>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, y retirar tu consentimiento en cualquier momento (sin que ello afecte a la licitud del tratamiento
        previo), escribiendo a <Dato v={TITULAR.email} />, indicando el derecho que ejerces y acreditando tu identidad.
        Para retirar el consentimiento de analítica basta con pulsar «Configurar cookies» en el pie de cualquier página.
        Responderemos en el plazo de un mes, ampliable en los casos que prevé la ley.
      </p>
      <p>
        Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia
        Española de Protección de Datos (aepd.es).
      </p>

      <h2>7. Menores</h2>
      <p>
        Esta web no está dirigida a menores de 14 años. Si eres menor de esa edad, no nos envíes datos personales sin el
        consentimiento de tus padres o tutores. Si detectamos datos de menores sin esa autorización, los eliminaremos.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los datos y evitar su pérdida, uso indebido
        o acceso no autorizado. La web se sirve por conexión cifrada (HTTPS). Ten en cuenta que el correo electrónico
        que envías no va cifrado de extremo a extremo: no incluyas datos sensibles.
      </p>

      <h2>9. Cookies</h2>
      <p>
        El uso de cookies se detalla en la <Link href="/cookies/">política de cookies</Link>.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios legales o del sitio. La fecha de la última revisión figura
        al comienzo de la página.
      </p>
    </LegalPage>
  );
}
