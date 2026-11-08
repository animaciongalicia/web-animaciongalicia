import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { Dato } from "@/components/Pendiente";
import { TITULAR } from "@/lib/legal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies y almacenamiento usa Menú Marrón (analítica con Google Analytics 4 solo si aceptas), para qué sirven y cómo cambiar tu elección.",
  alternates: { canonical: absoluteUrl("/cookies/") },
};

export default function Cookies() {
  return (
    <LegalPage titulo="Política de cookies">
      <p>
        Esta política cumple el artículo 22.2 de la LSSI-CE y la normativa de protección de datos. Una cookie es un
        pequeño archivo que un sitio web guarda en tu dispositivo para recordar información sobre tu visita. Aquí
        explicamos cuáles usamos, para qué y cómo puedes controlarlas. Responsable: <Dato v={TITULAR.nombre} />,{" "}
        <Dato v={TITULAR.email} />.
      </p>

      <h2>1. Qué usamos</h2>
      <h3>Técnicas (no necesitan tu consentimiento)</h3>
      <ul className="lista">
        <li>
          <strong>mm-cookies</strong> (almacenamiento local del navegador): guarda si has aceptado o rechazado la analítica
          para no volver a preguntarte en cada visita. Titular: este sitio. Duración: hasta que borres los datos del
          navegador. Es imprescindible para respetar tu elección.
        </li>
      </ul>
      <h3>De analítica (solo si aceptas)</h3>
      <ul className="lista">
        <li>
          <strong>_ga</strong>: distingue usuarios de forma seudonimizada. Duración: hasta 2 años. Titular: Google.
        </li>
        <li>
          <strong>_ga_JY6XXV50MM</strong>: mantiene el estado de la sesión de Google Analytics 4. Duración: hasta 2 años.
          Titular: Google.
        </li>
      </ul>
      <p>
        Con ellas Google Analytics (Google Ireland Limited) nos da estadísticas agregadas de las visitas: páginas vistas,
        procedencia aproximada, tipo de dispositivo y tiempo de lectura. Las usamos para saber qué contenidos funcionan y
        mejorar la revista; no para publicidad ni para elaborar perfiles comerciales. Google puede tratar datos fuera del
        Espacio Económico Europeo, con las garantías que explicamos en la <Link href="/privacidad/">política de privacidad</Link>.
      </p>
      <p>
        No usamos cookies publicitarias ni de redes sociales. Los botones de compartir son enlaces normales y no cargan
        código de terceros.
      </p>

      <h2>2. Cómo das o retiras tu consentimiento</h2>
      <p>
        La primera vez que entras te mostramos un aviso con dos botones, «Aceptar» y «Rechazar», con el mismo peso. Hasta
        que aceptes, no se carga Google Analytics ni se instala ninguna cookie de analítica. Puedes cambiar de opinión
        cuando quieras pulsando <strong>«Configurar cookies»</strong> en la barra de abajo de cualquier página. Si
        rechazas después de haber aceptado, borramos las cookies de Google Analytics que haya en tu navegador.
      </p>

      <h2>3. Cómo controlar las cookies desde el navegador</h2>
      <p>
        Además, puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox,
        Safari, Edge u otros). Cada navegador lo hace de forma distinta: busca «cookies» en su menú de ajustes o en su
        ayuda. Ten en cuenta que, si las bloqueas todas, algunas funciones de otros sitios podrían no funcionar.
        Google ofrece además un complemento del navegador para desactivar Google Analytics en todos los sitios.
      </p>

      <h2>4. Contenidos incrustados</h2>
      <p>
        Actualmente la web no incluye vídeos ni contenidos incrustados de otras plataformas. Si en el futuro se añaden,
        esas plataformas podrían instalar sus propias cookies cuando los reproduzcas. En ese caso lo indicaremos aquí y te
        pediremos tu consentimiento antes de cargarlos.
      </p>

      <h2>5. Cambios</h2>
      <p>
        Si empezamos a utilizar otras cookies no exentas de consentimiento, actualizaremos esta política y te pediremos
        permiso antes de instalarlas. La fecha de la última revisión figura al comienzo de la página. Para cualquier duda,
        escríbenos a <Dato v={TITULAR.email} />.
      </p>
    </LegalPage>
  );
}
