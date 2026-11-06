"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "./CopyButton";
import { waLink } from "@/lib/share";

/** Copiar + WhatsApp. `path` se añade al final del texto con el origen real. */
export function ShareBar({
  text,
  path,
  copyLabel = "Copiar",
}: {
  text: string;
  path?: string;
  copyLabel?: string;
}) {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);
  const full = path ? `${text}\n${origin}${path}` : text;
  return (
    <div className="actions">
      <CopyButton text={full} label={copyLabel} />
      <a className="btn btn-wa" href={waLink(full)} target="_blank" rel="noopener noreferrer">
        Mandar por WhatsApp
      </a>
    </div>
  );
}
