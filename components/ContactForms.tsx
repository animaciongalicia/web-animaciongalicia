"use client";

import { useState } from "react";

type Kind = "contacto" | "marron";

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

  return (
    <form onSubmit={onSubmit} className="form card">
      {/* honeypot */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {!marron && (
        <label className="field">
          <span>Asunto</span>
          <input type="text" name="asunto" required maxLength={120} />
        </label>
      )}
      <label className="field">
        <span>{marron ? "Tu anécdota" : "Mensaje"}</span>
        <textarea name="mensaje" required rows={marron ? 7 : 5} maxLength={4000} />
      </label>
      <label className="field">
        <span>{marron ? "Correo (solo si quieres que te contestemos)" : "Correo para responderte"}</span>
        <input type="email" name="email" required={!marron} maxLength={160} />
      </label>
      {marron && (
        <label className="check">
          <input type="checkbox" name="permiso" />
          <span>
            Me parece bien que se publique en Menú Marrón (sin mi nombre). Si no marcas esto, solo lo leemos y nos
            reímos en privado.
          </span>
        </label>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : marron ? "Contar mi marrón" : "Enviar mensaje"}
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
        <p className="banner">
          Modo de prueba: el envío no está conectado a ningún correo todavía. Lo que escribas aquí no llegará a
          nadie.
        </p>
      )}
      <section id="contacto" className="block">
        <h2>Escríbenos</h2>
        <p>Una duda, una colaboración o algo que corregir. Dinos asunto, mensaje y a qué correo contestarte.</p>
        <Form kind="contacto" />
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
