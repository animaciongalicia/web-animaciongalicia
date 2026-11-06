import type { Metadata } from "next";
import Link from "next/link";
import { ChatScene } from "@/components/ChatScene";
import { ArticleCard } from "@/components/ArticleCard";
import { articlePath, bySlug, byProblema, herramientas, HOME_ORDER } from "@/content/articles";

const TITLE = "Menú Marrón · Ideas, juegos y marrones para organizar una despedida";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Mensajes que copiar, juegos absurdos y herramientas ridículas para sobrevivir al marrón de organizar una despedida. Humor práctico, de Animación Galicia.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: TITLE,
    images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
};

const ATAJOS = [
  { problema: "Acabo de crear el grupo", sub: "Nombres de WhatsApp" },
  { problema: "Pedí el Bizum y han desaparecido", sub: "Mensajes para cobrar" },
  { problema: "Aquí no se conoce nadie", sub: "Juegos para romper el hielo" },
];

export default function Home() {
  const atajos = ATAJOS.map((a) => ({ ...a, art: byProblema(a.problema)[0] })).filter((a) => a.art);
  const destacado = bySlug("mensajes-pedir-bizum")!;
  const ideas = HOME_ORDER.map((s) => bySlug(s)!).filter(Boolean);
  const juegos = herramientas();

  return (
    <>
      <section className="hero">
        <div className="wrap-wide hero-grid">
          <div>
            <p className="kicker">Despedidas</p>
            <h1>Ideas, juegos y marrones para organizar una despedida</h1>
            <p className="lead">El grupo ya está creado. El plan, por lo visto, todavía no.</p>
            <p className="standfirst">
              Una revista de tonterías útiles para quien se ha comido el marrón de organizar algo: mensajes que
              copiar, juegos que no tienen explicación y herramientas que nadie pidió.
            </p>
            <a href="#ideas" className="btn btn-primary">
              Ver ideas para la despedida
            </a>
          </div>
          <blockquote className="pull">
            <p>
              Ya sois 17 en el grupo. Han contestado cuatro. Uno ha dicho «lo que queráis» y ya ha vetado dos
              planes.
            </p>
            <footer>Escena ficticia. Pasa en todas las despedidas.</footer>
          </blockquote>
        </div>
      </section>

      <section className="wrap-wide section" aria-labelledby="atajos-t">
        <h2 id="atajos-t" className="section-title">
          ¿Dónde te ha pillado el marrón?
        </h2>
        <ol className="shortcuts">
          {atajos.map((a, i) => (
            <li key={a.problema}>
              <Link href={articlePath(a.art!)} className="shortcut">
                <span className="num" aria-hidden="true">
                  0{i + 1}
                </span>
                <strong>«{a.problema}»</strong>
                <span className="sub">{a.sub} →</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap-wide section featured" aria-labelledby="dest-t">
        <div>
          <p className="kicker">El marrón destacado</p>
          <h2 id="dest-t" className="feature-title">
            Éramos 14 hasta que pedí el Bizum
          </h2>
          <p className="deck">
            Primer aviso, recordatorio y cierre de reserva: tres mensajes listos para copiar, con el importe, la fecha
            y la señal que tú quieras.
          </p>
          <Link href={articlePath(destacado)} className="btn btn-primary">
            Coger los mensajes listos para usar
          </Link>
        </div>
        <ChatScene
          title="Éramos 14 antes del Bizum"
          messages={[
            { who: "Carlos (organizador)", text: "Chicos, ya podéis hacer el Bizum de la señal, 20 € cada uno", out: true },
            { who: "Nuria", text: "Hecho ✅" },
            { who: "Carlos (organizador)", text: "Gracias Nuria. ¿Alguien más?", out: true },
            { who: "Carlos (organizador)", text: "Hola?", out: true },
            { who: "Sistema", text: "Pau ha salido del grupo" },
          ]}
        />
      </section>

      <section className="wrap-wide section" aria-labelledby="juegos-t">
        <h2 id="juegos-t" className="section-title">
          Juegos y herramientas absurdas
        </h2>
        <ul className="cards cards-3">
          {juegos.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </section>

      <section id="ideas" className="wrap-wide section" aria-labelledby="ideas-t">
        <h2 id="ideas-t" className="section-title">
          Recursos para la despedida
        </h2>
        <ul className="cards cards-3">
          {ideas.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </section>

      <section className="wrap-wide section more-ideas" aria-labelledby="mas-t">
        <div>
          <h2 id="mas-t" className="section-title">
            Más marrones
          </h2>
          <p className="deck">
            Los marrones no se acaban con la despedida. <Link href="/cumpleanos/">Cumpleaños</Link>,{" "}
            <Link href="/regalos/">Regalos</Link> y <Link href="/juegos/">Juegos</Link> para el resto de desastres.
          </p>
        </div>
        <div className="closing">
          <h3>Cuéntanos qué frase hundió vuestro plan</h3>
          <p>«Lo que queráis», «me lo miro», «ya os digo algo». Seguro que tú tienes la tuya.</p>
          <Link href="/contacto/#marron" className="btn btn-primary">
            Ir al buzón
          </Link>
        </div>
      </section>
    </>
  );
}
