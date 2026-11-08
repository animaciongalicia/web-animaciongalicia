"use client";

import { useEffect, useState } from "react";
import { evento } from "./Cookies";
import { TITULAR } from "@/lib/legal";

type Kind = "contacto" | "marron" | "enlace";

const CORREO = TITULAR.email ?? "info@animaciongalicia.com";
const MAX_CUERPO = 1500; // los programas de correo cortan los enlaces mailto muy largos

const ASUNTO: Record<Kind, string> = {
  contacto: "Contacto",
  marron: "Cuéntanos tu marrón",
  enlace: "Enlace sugerido",
};

function componer(kind: Kind, fd: FormData) {
  const mensaje = String(fd.get("mensaje") ?? "").trim();
  const asunto = String(fd.get("asunto") ?? "").trim();
  const url = String(fd.get("url") ?? "").trim();
  const permiso = !!fd.get("permiso");
  const lineas = [
    kind === "enlace" && url ? `Enlace: ${url}` : "",
    mensaje,
    kind !== "contacto" ? `\nPermiso para citarlo en la revista (sin mi nombre): ${permiso ? "SÍ" : "NO"}` : "",
  ].filter((l) => l !== "");
  const cuerpo = lineas.join("\n\n");
  const asuntoFinal = `[Menú Marrón] ${kind === "contacto" && asunto ? asunto : ASUNTO[kind]}`;
  return { asunto: asuntoFinal, cuerpo, largo: cuerpo.length > MAX_CUERPO };
}

function Form({ kind }: { kind: Kind }) {
  const [estado, setEstado] = useState<"idle" | "abierto">("idle");
  const [copia, setCopia] = useState<{ asunto: string; cuerpo: string; largo: boolean } | null>(null);
  const [copiado, setCopiado] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = componer(kind, new FormData(e.currentTarget));
    setCopia(datos);
    setEstado("abierto");
    evento("generate_lead", { formulario: kind });
    const cuerpo = datos.largo ? datos.cuerpo.slice(0, MAX_CUERPO) + "…" : datos.cuerpo;
    window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent(datos.asunto)}&body=${encodeURIComponent(cuerpo)}`;
  }

  async function copiar() {
    if (!copia) return;
    try {
      await navigator.clipboard.writeText(`${copia.asunto}\n\n${copia.cuerpo}`);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  }

  const publica = kind !== "contacto";

  return (
    <form onSubmit={onSubmit} className="form card-form">
      {kind === "contacto" && (
        <label className="field">
          <span>Asunto</span>
          <input type="text" name="asunto" required maxLength={120} />
        </label>
      )}
      {kind === "enlace" && (
        <label className="field">
          <span>Enlace (vídeo, noticia, hilo…)</span>
          <input type="url" name="url" required maxLength={500} placeholder="https://" />
        </label>
      )}
      <label className="field">
        <span>{kind === "marron" ? "Tu anécdota" : kind === "enlace" ? "Por qué nos hará reír" : "Mensaje"}</span>
        <textarea name="mensaje" required={kind !== "enlace"} rows={kind === "marron" ? 5 : 3} maxLength={4000} />
      </label>
      {publica && (
        <label className="check">
          <input type="checkbox" name="permiso" />
          <span>Podéis citarlo en la revista (sin mi nombre).</span>
        </label>
      )}
      <button className="btn btn-primary" type="submit">
        {kind === "marron" ? "Preparar mi correo" : kind === "enlace" ? "Preparar el correo con el enlace" : "Preparar mi correo"}
      </button>
      <p className="form-nota">Se abrirá tu programa de correo con el mensaje listo. Tú le das a enviar: nosotros no recogemos nada en la web.</p>
      <div role="status" aria-live="polite" className="form-status">
        {estado === "abierto" && copia && (
          <p className="ok">
            Se ha abierto tu programa de correo. Si no ha pasado nada,{" "}
            <button type="button" className="link-btn" onClick={copiar}>
              {copiado ? "copiado" : "copia el mensaje"}
            </button>{" "}
            y escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>.
            {copia.largo && " Tu mensaje es largo: en el correo puede salir recortado, pega el mensaje completo si hace falta."}
          </p>
        )}
      </div>
    </form>
  );
}

const PANELES: { id: Kind; hash: string; tab: string; titulo: string; texto: string }[] = [
  { id: "enlace", hash: "enlace", tab: "Un enlace", titulo: "Mándanos un enlace", texto: "¿Algo que nos tenga que hacer reír? Lo leemos, lo comprobamos y, si entra, lo contamos citando la fuente." },
  { id: "marron", hash: "marron", tab: "Tu marrón", titulo: "Cuéntanos tu marrón", texto: "La frase que hundió el plan, el Bizum que no llegó… Contarlo y dar permiso para citarlo son cosas distintas." },
  { id: "contacto", hash: "contacto", tab: "Contacto", titulo: "Escríbenos", texto: "Una duda, una colaboración o algo que corregir. También para pedir que retiremos un contenido." },
];

export function ContactForms() {
  const [tab, setTab] = useState<Kind>("enlace");

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      const found = PANELES.find((p) => p.hash === h);
      if (found) setTab(found.id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <>
      <div className="contact-tabs" role="tablist" aria-label="Qué quieres mandarnos">
        {PANELES.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={tab === p.id}
            aria-controls={p.hash}
            onClick={() => setTab(p.id)}
          >
            {p.tab}
          </button>
        ))}
      </div>
      <div className="contact-grid">
        {PANELES.map((p) => (
          <section key={p.id} id={p.hash} className="contact-panel" hidden={tab !== p.id} aria-labelledby={`h-${p.id}`}>
            <h2 id={`h-${p.id}`}>{p.titulo}</h2>
            <p>{p.texto}</p>
            <Form kind={p.id} />
          </section>
        ))}
      </div>
    </>
  );
}
