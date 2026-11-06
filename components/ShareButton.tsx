"use client";

import { useState } from "react";
import { copyText } from "./CopyButton";

export function ShareButton({ title, path }: { title: string; path: string }) {
  const [msg, setMsg] = useState("");

  async function onClick() {
    const url = new URL(path, window.location.origin).toString();
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text: title, url });
        return;
      } catch {
        /* cancelado: no hacemos nada */
        return;
      }
    }
    const ok = await copyText(url);
    setMsg(ok ? "Enlace copiado. Mándalo al grupo." : "No se pudo copiar el enlace.");
    setTimeout(() => setMsg(""), 2200);
  }

  return (
    <span className="share">
      <button type="button" className="btn btn-share" onClick={onClick}>
        Mandar al grupo
      </button>
      <span className="share-msg" role="status" aria-live="polite">
        {msg}
      </span>
    </span>
  );
}
