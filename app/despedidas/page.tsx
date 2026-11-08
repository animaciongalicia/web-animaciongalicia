import type { Metadata } from "next";
import { Buscador } from "@/components/Buscador";
import { PiezaCard } from "@/components/PiezaCard";
import { META_SECCIONES } from "@/content/seo-meta";
import { SECCIONES } from "@/content/piezas";
import { bySeccion, piezaPath, visibles } from "@/lib/piezas";
import { absoluteUrl } from "@/lib/site";

const M = META_SECCIONES.despedidas;

export const metadata: Metadata = {
  title: { absolute: M.title },
  description: M.description,
  alternates: { canonical: absoluteUrl("/despedidas/") },
  openGraph: { url: absoluteUrl("/despedidas/"), title: M.title, description: M.description, images: [{ url: absoluteUrl("/og/inicio.png"), width: 1200, height: 630, alt: "Menú Marrón" }] },
};

export default function ArchivoDespedidas() {
  const lista = bySeccion("despedidas");
  const items = visibles().map((p) => ({ t: p.titulo, d: p.dek, tag: p.tag, sec: p.seccion, href: piezaPath(p) }));
  // Agrupa por etiqueta, en el orden en que aparecen (lo más reciente primero).
  const grupos = new Map<string, typeof lista>();
  for (const p of lista) grupos.set(p.tag, [...(grupos.get(p.tag) ?? []), p]);

  return (
    <div className="wrap-wide page" data-seccion="despedidas">
      <header className="section-head">
        <p className="kicker">{SECCIONES.despedidas.label}</p>
        <h1>Todas las despedidas, de la A a la Z (de la boda no, eso es otro marrón)</h1>
        <p className="lead">
          {lista.length} artículos sobre despedidas de soltero y soltera en Galicia: guías, retos, dinero, grupos de
          WhatsApp y lo que nadie te cuenta hasta que te toca.
        </p>
        <Buscador items={items} />
        <nav className="chips-etiquetas" aria-label="Temas">
          {[...grupos.keys()].map((t) => (
            <a key={t} href={`#${t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-")}`}>
              {t} <span className="count">{grupos.get(t)!.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {[...grupos.entries()].map(([tag, ps]) => (
        <section key={tag} aria-labelledby={`t-${tag}`}>
          <h2 id={tag.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-")} className="section-title">
            {tag}
          </h2>
          <ul className="cards cards-3">
            {ps.map((p) => (
              <PiezaCard key={p.slug} p={p} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
