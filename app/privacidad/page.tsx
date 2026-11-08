import Link from "next/link";
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { Dato } from "@/components/Pendiente";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo trata Menú Marrón los datos personales que se envían desde sus formularios.",
  alternates: { canonical: "/privacidad/" },
};

export default function Privacidad() {
  return (
    <LegalPage titulo="Política de privacidad">
      <p>
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD), te informamos de cómo tratamos tus datos.
      </p>
      <h2>1. Responsable del tratamiento</h2>
      <ul className="lista">
        <li>Responsable: <Dato v={TITULAR.nombre} /></li>
        <li>NIF/CIF: <Dato v={TITULAR.nif} /></li>
        <li>Domicilio: <Dato v={TITULAR.domicilio} /></li>
        <li>Correo electrónico: <Dato v={TITULAR.email} /></li>
      </ul>
      <h2>2. Qué datos tratamos y para qué</h2>
      <ul className="lista">
        <li>
          <strong>Formulario de contacto:</strong> asunto, mensaje y correo electrónico, para atender tu consulta y
          responderte.
        </li>
        <li>
          <strong>«Mándanos un enlace»:</strong> el enlace, tu comentario y, si lo indicas, tu correo, para valorar si
          lo incluimos en la revista y, si quieres, contestarte.
        </li>
        <li>
          <strong>«Cuéntanos tu marrón»:</strong> tu anécdota y, si lo indicas, tu correo, para leerla y, solo si nos
          das permiso expreso, citarla en la revista sin tu nombre.
        </li>
        <li>
          <strong>Analítica web (solo si aceptas las cookies):</strong> datos de navegación agregados y seudonimizados
          mediante Google Analytics 4, para saber qué contenidos se leen. Detalle en la{" "}
          <Link href="/cookies/">política de cookies</Link>.
        </li>
      </ul>
      <p>No te pedimos datos que no necesitemos. No tomamos decisiones automatizadas ni elaboramos perfiles.</p>
      <h2>3. Base jurídica</h2>
      <p>
        Tu consentimiento (art. 6.1.a RGPD), que prestas al enviar el formulario, al marcar la casilla de permiso
        y al aceptar las cookies de analítica. Puedes retirarlo en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.
      </p>
      <h2>4. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Para enviar los mensajes que recibimos a nuestro correo
        y para alojar la web utilizamos proveedores (entre ellos Google, para la analítica si la aceptas) que actúan como encargados del tratamiento y que están sujetos a un
        contrato conforme al artículo 28 del RGPD. Si alguno de ellos está fuera del Espacio Económico Europeo, la
        transferencia se ampara en las garantías previstas en el RGPD (por ejemplo, cláusulas contractuales tipo).
      </p>
      <h2>5. Conservación</h2>
      <p>
        Conservamos los datos mientras sean necesarios para atender tu solicitud y, después, durante los plazos
        legales de prescripción de posibles responsabilidades. Las anécdotas con permiso de publicación se conservan
        hasta que lo retires.
      </p>
      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad escribiendo a <Dato v={TITULAR.email} />, indicando el derecho que ejerces y acreditando tu
        identidad. Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la
        Agencia Española de Protección de Datos (aepd.es).
      </p>
      <h2>7. Menores</h2>
      <p>
        Esta web no está dirigida a menores de 14 años. Si eres menor de esa edad, no nos envíes datos personales sin
        el consentimiento de tus padres o tutores.
      </p>
      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los datos y evitar su pérdida, uso
        indebido o acceso no autorizado.
      </p>
      <h2>9. Cambios en esta política</h2>
      <p>Podemos actualizar esta política. La fecha de la última revisión figura al comienzo de la página.</p>
    </LegalPage>
  );
}
