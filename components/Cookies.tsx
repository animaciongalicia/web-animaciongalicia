"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { CONSENT_EVENT, CONSENT_KEY, GA_ID } from "@/lib/analytics";

type Estado = "aceptado" | "rechazado" | null;

function leer(): Estado {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "aceptado" || v === "rechazado" ? v : null;
  } catch {
    return null;
  }
}

/** Banner de consentimiento (aceptar y rechazar con el mismo peso) y carga de GA4 solo si se acepta. */
export function Cookies() {
  const [estado, setEstado] = useState<Estado>(null);
  const [listo, setListo] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    setEstado(leer());
    setListo(true);
    const reabrir = () => setAbierto(true);
    window.addEventListener(CONSENT_EVENT, reabrir);
    return () => window.removeEventListener(CONSENT_EVENT, reabrir);
  }, []);

  const guardar = useCallback((v: Exclude<Estado, null>) => {
    try {
      localStorage.setItem(CONSENT_KEY, v);
    } catch {}
    if (v === "rechazado") {
      // Borra las cookies de GA si se habían aceptado antes.
      document.cookie.split(";").forEach((c) => {
        const n = c.split("=")[0].trim();
        if (n === "_ga" || n.startsWith("_ga_")) document.cookie = `${n}=; Max-Age=0; path=/`;
      });
    }
    setEstado(v);
    setAbierto(false);
  }, []);

  if (!listo) return null;
  const visible = estado === null || abierto;

  return (
    <>
      {estado === "aceptado" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {visible && (
        <div className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="ck-t">
          <p id="ck-t" className="cookie-titulo">
            Cookies
          </p>
          <p>
            Medimos las visitas con Google Analytics, solo si aceptas. <Link href="/cookies/">Más info</Link>.
          </p>
          <div className="cookie-botones">
            <button type="button" className="btn" onClick={() => guardar("rechazado")}>
              Rechazar
            </button>
            <button type="button" className="btn" onClick={() => guardar("aceptado")}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Enlace del pie para volver a abrir el banner. */
export function AjustarCookies() {
  return (
    <button type="button" className="link-btn" onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}>
      Configurar cookies
    </button>
  );
}

/** Evento de conversión; no hace nada si no hay consentimiento. */
export function evento(nombre: string, params?: Record<string, string>) {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (g) g("event", nombre, params);
}
