import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { fotosVisibles } from "@/lib/fotos";

const TITLE = "Fotos chorras de despedidas, cumpleaños y celebraciones";
const DESC = "Las fotos más chorras y divertidas de despedidas, cumpleaños, regalos y eventos. Mándanos la tuya.";

export function generateMetadata(): Metadata {
  const hay = fotosVisibles().length > 0;
  return {
    title: TITLE,
    description: DESC,
    alternates: { canonical: absoluteUrl("/fotos/") },
    // Sin fotos reales no hay nada que indexar.
    robots: hay ? undefined : { index: false, follow: true },
    openGraph: { url: absoluteUrl("/fotos/"), title: TITLE, description: DESC, images: [{ url: absoluteUrl("/og/inicio.png"), width: 1200, height: 630, alt: "Menú Marrón" }] },
    twitter: { card: "summary_large_image", images: [absoluteUrl("/og/inicio.png")] },
  };
}

export default function FotosPage() {
  const fotos = fotosVisibles();
  return (
    <div className="wrap-wide page">
      <header className="section-head">
        <p className="kicker">Galería</p>
        <h1>{TITLE}</h1>
        <p className="lead">Caras, disfraces, tartas imposibles y retos de plaza. Si tienes una, mándanosla.</p>
      </header>

      {fotos.length === 0 ? (
        <p className="deck">Todavía no hay fotos. Sé el primero en mandar una.</p>
      ) : (
        <ul className="galeria">
          {fotos.map((f) => (
            <li key={f.src}>
              <figure>
                <Image src={f.src} width={f.ancho} height={f.alto} alt={f.alt} sizes="(min-width: 1000px) 380px, (min-width: 640px) 50vw, 100vw" />
                <figcaption>
                  {f.etiqueta && <span className="kicker">{f.etiqueta}</span>}
                  {f.pie && <span className="pie">{f.pie}</span>}
                  {f.credito && <span className="credito">Foto: {f.credito}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}

      <section className="closing galeria-cta" aria-labelledby="foto-t">
        <h2 id="foto-t">¿Tienes una foto chorra?</h2>
        <p>
          Mándanosla con el enlace (Drive, WeTransfer…). Solo publicamos fotos propias o con permiso de quienes salen,
          y nunca con menores. Si sales en una y quieres que la retiremos, escríbenos y la quitamos.
        </p>
        <Link href="/contacto/#enlace" className="btn btn-primary">
          Mandar una foto
        </Link>
      </section>
    </div>
  );
}
