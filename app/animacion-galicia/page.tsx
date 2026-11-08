import type { Metadata } from "next";
import { AGENCIA, GRUPO } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Animación Galicia y las webs del grupo",
  description: "Animación Galicia, agencia que organiza saraos en Galicia, y las webs que forman parte del grupo.",
  alternates: { canonical: absoluteUrl("/animacion-galicia/") },
};

export default function AgenciaPage() {
  return (
    <div className="wrap-wide page">
      <header className="section-head">
        <p className="kicker">Quién hace Menú Marrón</p>
        <h1>{AGENCIA.nombre}</h1>
        <p className="lead">{AGENCIA.lema}</p>
      </header>
      <p className="read-wide">
        Menú Marrón es un proyecto de {AGENCIA.nombre}. Estas son las webs que forman parte del grupo.
      </p>
      <div className="grupo">
        {GRUPO.map((g) => (
          <section key={g.titulo} aria-labelledby={`g-${g.titulo}`}>
            <h2 id={`g-${g.titulo}`} className="section-title">
              {g.titulo}
            </h2>
            <ul className="marcas">
              {g.webs.map((w) => (
                <li key={w.dominio}>
                  <h3>{w.nombre}</h3>
                  <p>{w.descripcion}</p>
                  <p className="web">{w.dominio}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
