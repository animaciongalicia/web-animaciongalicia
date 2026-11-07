import type { Metadata } from "next";
import { AGENCIA } from "@/lib/company";

export const metadata: Metadata = {
  title: "Animación Galicia",
  description: "Animación Galicia, agencia que organiza saraos en Galicia, y las webs que forman parte de ella.",
  alternates: { canonical: "/animacion-galicia/" },
};

export default function AgenciaPage() {
  return (
    <div className="wrap-wide page">
      <header className="section-head">
        <p className="kicker">Quién hace Menú Marrón</p>
        <h1>{AGENCIA.nombre}</h1>
        <p className="lead">{AGENCIA.lema}</p>
      </header>
      <div className="read">
        <div className="prose">
          <p>
            Menú Marrón es un proyecto de {AGENCIA.nombre}. Estas son las webs y marcas que forman parte de la
            agencia:
          </p>
        </div>
        <ul className="marcas">
          {AGENCIA.marcas.map((m) => (
            <li key={m.nombre}>
              <h2>{m.nombre}</h2>
              {m.descripcion && <p>{m.descripcion}</p>}
              {m.web && <p className="web">{m.web}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
