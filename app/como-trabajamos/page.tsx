import type { Metadata } from "next";
import { EnlaceGrupo } from "@/components/EnlaceGrupo";
import { AGENCIA, GRUPO } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "Cómo hacemos Menú Marrón: de dónde salen las ideas, el humor que sí y el que no, y las webs del grupo de Animación Galicia por si te toca el marrón de verdad.",
  alternates: { canonical: absoluteUrl("/como-trabajamos/") },
};

const REGLAS = [
  {
    t: "De dónde salen las ideas",
    x: "De despedidas, cumpleaños y grupos de WhatsApp donde alguien dijo «yo me encargo» y luego desapareció. Las escribimos nosotros. Si nos inspira algo concreto, lo decimos. No somos magos.",
  },
  {
    t: "Humor con límites",
    x: "Nos reímos de las situaciones, no de las personas. Nada a costa de daños ni de gente que no ha pedido salir. Los retos con terceros llevan su aviso, porque el novio aguanta casi todo, pero el camarero no.",
  },
  {
    t: "Lo de otros, de otros",
    x: "No copiamos ni alojamos vídeos, fotos ni textos ajenos. Si citamos algo, con su fuente. Si eres autor de algo y quieres que lo quitemos, escríbenos desde Contacto y no hace falta ni que lo grites.",
  },
  {
    t: "Errores",
    x: "Nos pasa. Si ves un dato mal, dínoslo y lo corregimos. Lo de las despedidas que salen perfectas, eso sí que no lo hemos visto nunca.",
  },
];

const INTROS: Record<string, string> = {
  "Despedidas por destino": "Cada ciudad tiene su plan, su resaca y su camarero que ya lo ha visto todo.",
  "Actividades y locales": "Para cuando el grupo necesita moverse, reírse o cenar sin discutir por el sitio.",
  Servicios: "Barcos, traslados, viajes y eventos de empresa. Lo serio, con la cara de siempre.",
};

export default function ComoTrabajamos() {
  return (
    <div className="wrap-wide page">
      <header className="section-head">
        <p className="kicker">Cómo trabajamos</p>
        <h1>Quién hay detrás de este marrón</h1>
        <p className="lead">
          Una revista hecha en Galicia por gente que ha organizado demasiadas despedidas. Aquí va cómo trabajamos, con
          quién, y por qué no te vamos a vender nada a la primera de cambio.
        </p>
      </header>

      <ul className="marcas reglas">
        {REGLAS.map((r) => (
          <li key={r.t}>
            <h2>{r.t}</h2>
            <p>{r.x}</p>
          </li>
        ))}
      </ul>

      <section className="grupo" aria-labelledby="grupo-t">
        <h2 id="grupo-t" className="section-title">
          Las webs del grupo
        </h2>
        <p className="read-wide">
          Menú Marrón es un proyecto de {AGENCIA.nombre}. La agencia tiene otras webs propias, cada una con su cosa. Aquí
          las tienes todas, por si un día te toca el marrón de verdad. No hay prisa: estaremos aquí.
        </p>
        {GRUPO.map((g) => (
          <section key={g.titulo}>
            <h3 className="grupo-titulo">{g.titulo}</h3>
            <p className="muted">{INTROS[g.titulo]}</p>
            <ul className="marcas">
              {g.webs.map((w) => (
                <li key={w.dominio}>
                  <p className="web">
                    <EnlaceGrupo dominio={w.dominio}>{w.ancla}</EnlaceGrupo>
                  </p>
                  <p>{w.descripcion}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </div>
  );
}
