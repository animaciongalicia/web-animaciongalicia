import type { Metadata } from "next";
import { ContactForms } from "@/components/ContactForms";

export const metadata: Metadata = {
  title: "Contacto, enlaces y «Cuéntanos tu marrón»",
  description:
    "Escríbenos, mándanos un enlace que nos tiene que hacer reír o cuéntanos tu marrón de organizar. Revista hecha en Galicia.",
  alternates: { canonical: "/contacto/" },
  openGraph: { url: "/contacto/", title: "Contacto · Menú Marrón", images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }] },
  twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
};

export default function ContactoPage() {
  const testMode = !(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
  return (
    <div className="wrap-wide page">
      <header className="section-head">
        <p className="kicker">Contacto</p>
        <h1>Contacto, enlaces y marrones</h1>
        <p className="lead">Escríbenos, mándanos un enlace que nos tenga que hacer reír o cuéntanos tu marrón de organizar.</p>
      </header>
      <ContactForms testMode={testMode} />
    </div>
  );
}
