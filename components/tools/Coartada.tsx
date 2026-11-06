"use client";

import { useMemo, useState } from "react";
import { COARTADAS, ROLES, SOSPECHA, TIEMPOS, type Rol } from "@/content/coartada";
import { rng } from "@/lib/share";
import { CopyButton } from "../CopyButton";
import { ShareBar } from "../ShareBar";

export function Coartada() {
  const [nombre, setNombre] = useState("Álex");
  const [rol, setRol] = useState<Rol>("pareja");
  const [tiempo, setTiempo] = useState<number>(90);
  const [sospecha, setSospecha] = useState<number>(2);
  const [min, setMin] = useState("40");
  const [seed, setSeed] = useState(1);

  const tres = useMemo(() => {
    const r = rng(seed);
    return COARTADAS.filter((c) => c.rol === rol)
      .map((c) => {
        const dist = tiempo < c.min ? c.min - tiempo : tiempo > c.max ? tiempo - c.max : 0;
        const exceso = Math.max(0, c.riesgo - sospecha);
        return { c, score: dist + exceso * 40 + r() * 15 };
      })
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map((x) => x.c);
  }, [rol, tiempo, sospecha, seed]);

  const n = nombre.trim() || "el homenajeado";
  const minutes = Number.parseInt(min, 10) > 0 ? Number.parseInt(min, 10) : 40;
  const alerta = `🚨 ALERTA ROJA 🚨 ${n} llega ${minutes} minutos antes de lo previsto. Protocolo:\n1) Quien esté en la puerta lo entretiene con «¿me ayudas con una cosa en el coche?».\n2) Las luces se apagan solo si hay interruptor a mano. Si no, todos detrás del sofá.\n3) Nadie dice «sorpresa» hasta mi señal.\n4) Si todo falla, improvisamos: la cena era «para otra cosa».`;

  return (
    <section className="panel" aria-labelledby="coa-t">
      <h2 id="coa-t">Operación Coartada</h2>
      <div className="fields">
        <label className="field">
          <span>Nombre del homenajeado</span>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={30} />
        </label>
        <label className="field">
          <span>Quién lo entretiene</span>
          <select value={rol} onChange={(e) => setRol(e.target.value as Rol)}>
            {ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Tiempo que hay que ganar</span>
          <select value={tiempo} onChange={(e) => setTiempo(Number(e.target.value))}>
            {TIEMPOS.map((t) => (
              <option key={t} value={t}>
                {t} minutos
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>¿Cuánto huele?</span>
          <select value={sospecha} onChange={(e) => setSospecha(Number(e.target.value))}>
            {SOSPECHA.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <h3>Tres coartadas para {n}</h3>
      <ol className="coartadas">
        {tres.map((c) => (
          <li key={c.texto} className="copyitem">
            <div>
              <strong className="copy-label">
                {c.riesgo === 1 ? "Muy creíble" : c.riesgo === 2 ? "Creíble" : "Arriesgada"} · {c.min}-{c.max} min
              </strong>
              <span className="copy-text">{c.texto}</span>
              <span className="muted">Cómo sostenerla: {c.truco}</span>
            </div>
            <CopyButton text={c.texto} />
          </li>
        ))}
      </ol>
      <button type="button" className="btn" onClick={() => setSeed((s) => s + 1)}>
        Otras tres
      </button>

      <h3>Si el homenajeado se presenta antes de tiempo</h3>
      <label className="field narrow">
        <span>Minutos de adelanto</span>
        <input inputMode="numeric" value={min} onChange={(e) => setMin(e.target.value)} />
      </label>
      <p className="msg-preview">{alerta}</p>
      <ShareBar text={alerta} copyLabel="Copiar alerta" />
    </section>
  );
}
