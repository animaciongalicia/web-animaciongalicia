"use client";

import { useEffect, useState } from "react";

type Kind = "contacto" | "marron" | "enlace";

function Form({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "test" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = Object.fromEntries(fd.entries());
    body.kind = kind;
    body.permiso = fd.get("permiso") ? "si" : "no";
    try {
      const res = await fetch("/api/contacto/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error");
      setStatus(data.mode === "test" ? "test" : "ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  const publica = kind !== "contacto";

  return (
    <form onSubmit={onSubmit} className="form card-form">
      <input type="text" name="web" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
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
      <label className="field">
        <span>{kind === "contacto" ? "Tu correo" : "Tu correo (opcional)"}</span>
        <input type="email" name="email" required={kind === "contacto"} maxLength={160} />
      </label>
      {publica && (
        <label className="check">
          <input type="checkbox" name="permiso" />
          <span>Podéis citarlo en la revista (sin mi nombre).</span>
        </label>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : kind === "marron" ? "Contar mi marrón" : kind === "enlace" ? "Mandar el enlace" : "Enviar mensaje"}
      </button>
      <div role="status" aria-live="polite" className="form-status">
        {status === "ok" && <p className="ok">Recibido. Gracias.</p>}
        {status === "test" && <p className="warn">Modo de prueba: NO se ha enviado nada a ningún correo.</p>}
        {status === "error" && <p className="err">No se pudo enviar: {error}</p>}
      </div>
    </form>
  );
}

const PANELES: { id: Kind; hash: string; tab: string; titulo: string; texto: string }[] = [
  { id: "enlace", hash: "enlace", tab: "Un enlace", titulo: "Mándanos un enlace", texto: "¿Algo que nos tenga que hacer reír? Lo leemos, lo comprobamos y, si entra, lo contamos citando la fuente." },
  { id: "marron", hash: "marron", tab: "Tu marrón", titulo: "Cuéntanos tu marrón", texto: "La frase que hundió el plan, el Bizum que no llegó… Contarlo y dar permiso para citarlo son cosas distintas." },
  { id: "contacto", hash: "contacto", tab: "Contacto", titulo: "Escríbenos", texto: "Una duda, una colaboración o algo que corregir. También para pedir que retiremos un contenido." },
];

export function ContactForms({ testMode }: { testMode: boolean }) {
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
      {testMode && (
        <p className="banner-test">
          Modo de prueba: el envío no está conectado a ningún correo todavía. Lo que escribas aquí no llegará a nadie.
        </p>
      )}
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
