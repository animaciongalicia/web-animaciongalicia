import type { Metadata } from "next";
import { ContactForms } from "@/components/ContactForms";

export const metadata: Metadata = {
  title: "Contacto y buzón «Cuéntanos tu marrón»",
  description:
    "Escríbenos o cuéntanos tu marrón: la frase que hundió tu plan, el Bizum que nunca llegó o el grupo de WhatsApp que se vino abajo.",
  alternates: { canonical: "/contacto/" },
  openGraph: { url: "/contacto/", title: "Contacto · Menú Marrón", images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }] },
  twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
};

export default function ContactoPage() {
  const testMode = !(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
  return (
    <div className="wrap page">
      <p className="kicker">Contacto</p>
      <h1>Contacto y buzón de marrones</h1>
      <ContactForms testMode={testMode} />
    </div>
  );
}
