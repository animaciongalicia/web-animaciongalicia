import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Información editorial y afiliación",
  description: "Quién hace Menú Marrón, cómo tratamos las escenas inventadas y cuándo hay enlaces de afiliación.",
  alternates: { canonical: "/informacion-editorial/" },
};

export default function EditorialPage() {
  return (
    <div className="wrap page article">
      <h1>Información editorial y afiliación</h1>
      <h2>Quién está detrás</h2>
      <p>Menú Marrón es un proyecto de Animación Galicia: una revista digital de humor práctico para quien se ha comido el marrón de organizar algo en un grupo de WhatsApp.</p>
      <h2>Escenas inventadas</h2>
      <p>Las conversaciones, nombres y situaciones de la web son ficticios y están marcados como tal. No ridiculizamos a personas reales.</p>
      <h2>Afiliación</h2>
      <p>Algunas recomendaciones pueden llevar un enlace de afiliación. En ese caso van identificadas con un aviso visible y no te cuestan nada más. Si no hay enlace, no hay comisión.</p>
    </div>
  );
}
