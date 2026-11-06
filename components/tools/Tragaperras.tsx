"use client";

import { useEffect, useRef, useState } from "react";
import { CREIBILIDAD, REEL_A, REEL_B, REEL_C } from "@/content/tragaperras";
import { prefersReducedMotion } from "@/lib/share";
import { ShareBar } from "../ShareBar";

export function Tragaperras() {
  const [r, setR] = useState<[number, number, number]>([0, 0, 0]);
  const [spinning, setSpinning] = useState<[boolean, boolean, boolean]>([false, false, false]);
  const [played, setPlayed] = useState(false);
  const [cred, setCred] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const iv = useRef<ReturnType<typeof setInterval> | null>(null);
  const spinningRef = useRef<[boolean, boolean, boolean]>([false, false, false]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
      if (iv.current) clearInterval(iv.current);
    },
    [],
  );

  function spin() {
    if (spinning.some(Boolean)) return;
    const finals: [number, number, number] = [
      Math.floor(Math.random() * REEL_A.length),
      Math.floor(Math.random() * REEL_B.length),
      Math.floor(Math.random() * REEL_C.length),
    ];
    const credib = Math.floor(Math.random() * CREIBILIDAD.length);
    if (prefersReducedMotion()) {
      setR(finals);
      setCred(credib);
      setPlayed(true);
      return;
    }
    setPlayed(false);
    setSpinning([true, true, true]);
    iv.current = setInterval(() => {
      setR((cur) => [
        spinningRef.current[0] ? Math.floor(Math.random() * REEL_A.length) : cur[0],
        spinningRef.current[1] ? Math.floor(Math.random() * REEL_B.length) : cur[1],
        spinningRef.current[2] ? Math.floor(Math.random() * REEL_C.length) : cur[2],
      ]);
    }, 80);
    [900, 1500, 2100].forEach((ms, k) => {
      timers.current.push(
        setTimeout(() => {
          spinningRef.current[k] = false;
          setSpinning((s) => s.map((v, i) => (i === k ? false : v)) as [boolean, boolean, boolean]);
          setR((cur) => cur.map((v, i) => (i === k ? finals[k] : v)) as [number, number, number]);
          if (k === 2) {
            if (iv.current) clearInterval(iv.current);
            setCred(credib);
            setPlayed(true);
          }
        }, ms),
      );
    });
    spinningRef.current = [true, true, true];
  }
  const excusa = `Chicos, me ha surgido ${REEL_A[r[0]]} con ${REEL_B[r[1]]}, ${REEL_C[r[2]]}.`;
  const nivel = ["Credibilidad: 5%", "Credibilidad: 28%", "Credibilidad: 51%", "Credibilidad: 74%", "Credibilidad: 93%"][cred];

  return (
    <section className="panel" aria-labelledby="tra-t">
      <h2 id="tra-t">La máquina</h2>
      <div className="reels" aria-hidden={spinning.some(Boolean)}>
        {[REEL_A[r[0]], REEL_B[r[1]], REEL_C[r[2]]].map((t, i) => (
          <div key={i} className={`reel${spinning[i] ? " is-spinning" : ""}`}>
            <span className="reel-label">{["Me ha surgido…", "con…", "…"][i]}</span>
            <strong>{t}</strong>
          </div>
        ))}
      </div>
      <div className="actions">
        <button type="button" className="btn btn-primary" onClick={spin} disabled={spinning.some(Boolean)}>
          {spinning.some(Boolean) ? "Girando…" : played ? "Otra excusa" : "Tirar de la palanca"}
        </button>
      </div>
      <div role="status" aria-live="polite" className="result-box">
        {played ? (
          <>
            <p className="excusa">«{excusa}»</p>
            <p className="status">
              {nivel} · {CREIBILIDAD[cred]}
            </p>
          </>
        ) : (
          <p className="muted">Tira de la palanca para obtener una excusa lista para enviar.</p>
        )}
      </div>
      {played && <ShareBar text={excusa} path="/juegos/tragaperras-excusas/" copyLabel="Copiar excusa" />}
    </section>
  );
}
