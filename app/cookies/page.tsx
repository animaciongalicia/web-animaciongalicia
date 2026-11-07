import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies usa Menú Marrón y cómo puedes controlarlas.",
  alternates: { canonical: "/cookies/" },
};

export default function Cookies() {
  return (
    <LegalPage titulo="Política de cookies">
      <p>
        Esta política cumple el artículo 22.2 de la LSSI-CE y la normativa de protección de datos. Una cookie es un
        pequeño archivo que un sitio web guarda en tu dispositivo para recordar información sobre tu visita.
      </p>
      <h2>1. Qué cookies usamos</h2>
      <p>
        <strong>Actualmente este sitio no instala cookies propias ni de terceros con fines analíticos, publicitarios o
        de personalización.</strong> Solo se utilizan, si fueran necesarias, elementos técnicos imprescindibles para que
        la web funcione, que no requieren tu consentimiento.
      </p>
      <h2>2. Contenidos incrustados</h2>
      <p>
        Si en el futuro se incluyen vídeos o contenidos de otras plataformas incrustados en una página, esas
        plataformas podrán instalar sus propias cookies cuando los reproduzcas. En ese caso lo indicaremos aquí y te
        pediremos tu consentimiento antes de cargarlos.
      </p>
      <h2>3. Cómo controlar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador. Cada navegador lo
        hace de forma distinta; consulta su ayuda para más información.
      </p>
      <h2>4. Cambios</h2>
      <p>
        Si empezamos a utilizar cookies no exentas de consentimiento (por ejemplo, de analítica), actualizaremos esta
        política y mostraremos un aviso con las opciones de aceptar, rechazar y configurar antes de instalarlas.
      </p>
    </LegalPage>
  );
}
