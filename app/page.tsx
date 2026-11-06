import type { Metadata } from "next";
import Link from "next/link";
import { ChatScene } from "@/components/ChatScene";
import { ArticleCard } from "@/components/ArticleCard";
import { articlePath, bySlug, byProblema, HOME_ORDER } from "@/content/articles";

export const metadata: Metadata = {
  title: { absolute: "Menú Marrón · Ideas, juegos y marrones para organizar una despedida" },
  description:
    "Mensajes para copiar, nombres de grupo y juegos para organizar una despedida sin que el grupo de WhatsApp te hunda. Humor práctico de Animación Galicia.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Menú Marrón · Ideas, juegos y marrones para organizar una despedida", images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }] },
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

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">Despedidas</p>
          <h1>Ideas, juegos y marrones para organizar una despedida</h1>
          <p className="lead">El grupo ya está creado. El plan, por lo visto, todavía no.</p>
          <p className="hero-scene">
            Ya sois 17 en el grupo. Han contestado cuatro. Uno ha dicho «lo que queráis» y ya ha vetado dos planes.
          </p>
          <a href="#ideas" className="btn btn-primary">
            Ver ideas para la despedida
          </a>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="atajos-t">
        <h2 id="atajos-t">¿Dónde te ha pillado el marrón?</h2>
        <ul className="shortcuts">
          {atajos.map((a) => (
            <li key={a.problema}>
              <Link href={articlePath(a.art!)} className="shortcut">
                <strong>«{a.problema}»</strong>
                <span>{a.sub} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section featured" aria-labelledby="dest-t">
        <p className="kicker">El marrón destacado</p>
        <h2 id="dest-t">Éramos 14 hasta que pedí el Bizum</h2>
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
        <p>
          <Link href={articlePath(destacado)} className="btn btn-primary">
            Coger los mensajes listos para usar
          </Link>
        </p>
      </section>

      <section id="ideas" className="wrap section" aria-labelledby="ideas-t">
        <h2 id="ideas-t">Recursos para la despedida</h2>
        <ul className="cards">
          {ideas.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </section>

      <section className="wrap section more-ideas" aria-labelledby="mas-t">
        <h2 id="mas-t">Más ideas</h2>
        <p>
          Los marrones no se acaban con la despedida.{" "}
          <Link href="/cumpleanos/">Cumpleaños</Link>, <Link href="/regalos/">Regalos</Link> y{" "}
          <Link href="/juegos/">Juegos</Link> para el resto de desastres.
        </p>
        <div className="closing card">
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
