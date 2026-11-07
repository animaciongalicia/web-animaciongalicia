"use client";

import { useState } from "react";

type Kind = "contacto" | "marron" | "enlace";

function Form({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "test" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
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
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  const marron = kind === "marron";
  const publica = kind !== "contacto";

  return (
    <form onSubmit={onSubmit} className="form card">
      {/* honeypot */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {kind === "contacto" && (
        <label className="field">
          <span>Asunto</span>
          <input type="text" name="asunto" required maxLength={120} />
        </label>
      )}
      {kind === "enlace" && (
        <label className="field">
          <span>Enlace (vídeo, noticia, hilo, publicación…)</span>
          <input type="url" name="url" required maxLength={500} placeholder="https://" />
        </label>
      )}
      <label className="field">
        <span>
          {marron ? "Tu anécdota" : kind === "enlace" ? "Por qué nos hará reír (una frase basta)" : "Mensaje"}
        </span>
        <textarea name="mensaje" required={kind !== "enlace"} rows={marron ? 7 : 5} maxLength={4000} />
      </label>
      <label className="field">
        <span>{kind === "contacto" ? "Correo para responderte" : "Correo (solo si quieres que te contestemos)"}</span>
        <input type="email" name="email" required={kind === "contacto"} maxLength={160} />
      </label>
      {publica && (
        <label className="check">
          <input type="checkbox" name="permiso" />
          <span>
            Me parece bien que se cite en Menú Marrón (sin mi nombre salvo que lo pongas). Si no marcas esto, solo lo leemos.
          </span>
        </label>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : marron ? "Contar mi marrón" : kind === "enlace" ? "Mandar el enlace" : "Enviar mensaje"}
      </button>
      <div role="status" aria-live="polite" className="form-status">
        {status === "ok" && <p className="ok">Recibido. Gracias.</p>}
        {status === "test" && (
          <p className="warn">
            Modo de prueba: el formulario funciona pero NO se ha enviado nada a ningún correo.
          </p>
        )}
        {status === "error" && <p className="err">No se pudo enviar: {error}</p>}
      </div>
    </form>
  );
}

export function ContactForms({ testMode }: { testMode: boolean }) {
  return (
    <>
      {testMode && (
        <p className="banner-test">
          Modo de prueba: el envío no está conectado a ningún correo todavía. Lo que escribas aquí no llegará a
          nadie.
        </p>
      )}
      <section id="contacto" className="block">
        <h2>Escríbenos</h2>
        <p>Una duda, una colaboración o algo que corregir. Si eres autor de algo que enlazamos y prefieres que lo retiremos, escríbenos aquí.</p>
        <Form kind="contacto" />
      </section>
      <section id="enlace" className="block">
        <h2>Mándanos un enlace</h2>
        <p>
          ¿Un vídeo, una noticia, un hilo, una reseña legendaria? Si tiene que ver con organizar algo y te ha hecho
          reír, mándalo. Lo leemos, lo comprobamos y, si entra, lo contamos con comentario propio y citando la fuente.
        </p>
        <Form kind="enlace" />
      </section>
      <section id="marron" className="block">
        <h2>Cuéntanos tu marrón</h2>
        <p>
          La frase que hundió vuestro plan. El Bizum que nunca llegó. El que se salió del grupo a las 3 de la
          mañana. Cuéntalo. Contar la anécdota y dar permiso para publicarla son dos cosas distintas.
        </p>
        <Form kind="marron" />
      </section>
    </>
  );
}
