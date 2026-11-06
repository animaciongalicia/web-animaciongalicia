"use client";

import { useState } from "react";
import {
  esquelaLines,
  esquelaQuery,
  esquelaText,
  sanitizeEsquela,
  type EsquelaData,
} from "@/lib/esquela";
import { ShareBar } from "../ShareBar";
import { CopyButton } from "../CopyButton";

const CAUSAS = [
  "un «es que me coincide con el curro»",
  "falta absoluta de confirmaciones",
  "un «yo me adapto» fulminante",
  "47 mensajes sin respuesta",
  "un Bizum que nunca llegó",
  "una encuesta con 11 opciones",
];

export function Esquela({ initial, planB: initialB }: { initial: EsquelaData; planB: string }) {
  const [plan, setPlan] = useState(initial.plan);
  const [causa, setCausa] = useState(initial.causa);
  const [presupuesto, setPresupuesto] = useState(initial.presupuesto ? String(initial.presupuesto) : "");
  const [sup, setSup] = useState(initial.supervivientes ? String(initial.supervivientes) : "");
  const [sobreviven, setSobreviven] = useState(initial.sobreviven);
  const [planB, setPlanB] = useState(initialB || "¿Quién viene a cenar el sábado?");
  const [opts, setOpts] = useState(["", "", ""]);

  const data = sanitizeEsquela({ plan, causa, presupuesto, supervivientes: sup, sobreviven });
  const lines = esquelaLines(data);
  const text = esquelaText(data, planB);
  const path = `/despedidas/esquela-plan-cancelado/?${esquelaQuery(data, planB)}`;
  const filled = opts.filter((o) => o.trim());
  const poll = ["Plan B: votad.", ...filled.map((o, i) => `${"ABC"[i]}) ${o.trim()}`)].join("\n");

  return (
    <section className="panel" aria-labelledby="esq-t">
      <h2 id="esq-t">Redacta la esquela</h2>
      <div className="fields">
        <label className="field">
          <span>Plan fallecido</span>
          <input value={plan} onChange={(e) => setPlan(e.target.value)} maxLength={60} />
        </label>
        <label className="field">
          <span>Causa del fallecimiento</span>
          <input value={causa} onChange={(e) => setCausa(e.target.value)} maxLength={80} list="causas" />
          <datalist id="causas">
            {CAUSAS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </label>
        <label className="field">
          <span>Presupuesto perdido (€)</span>
          <input inputMode="numeric" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
        </label>
        <label className="field">
          <span>Personas que nunca confirmaron</span>
          <input inputMode="numeric" value={sup} onChange={(e) => setSup(e.target.value)} />
        </label>
        <label className="field wide">
          <span>Le sobrevive (opcional)</span>
          <input value={sobreviven} onChange={(e) => setSobreviven(e.target.value)} maxLength={60} />
        </label>
      </div>

      <article className="esquela" aria-label="Vista previa de la esquela">
        <p className="esq-cross" aria-hidden="true">
          ✝
        </p>
        <p className="esq-kicker">Esquela</p>
        {lines.map((l, i) => (
          <p key={i} className={i === 0 ? "esq-title" : "esq-line"}>
            {l}
          </p>
        ))}
      </article>

      <label className="field">
        <span>Y ahora, el plan B (para volver al grupo con una decisión)</span>
        <input value={planB} onChange={(e) => setPlanB(e.target.value)} maxLength={100} />
      </label>
      <ShareBar text={text} path={path} copyLabel="Copiar esquela" />

      <h3>Votar plan B</h3>
      <p className="muted">Escribe dos o tres opciones y copia la encuesta para pegarla en el chat.</p>
      <div className="fields">
        {opts.map((o, i) => (
          <label key={i} className="field">
            <span>Opción {"ABC"[i]}</span>
            <input
              value={o}
              onChange={(e) => setOpts((p) => p.map((v, k) => (k === i ? e.target.value : v)))}
              maxLength={60}
            />
          </label>
        ))}
      </div>
      {filled.length >= 2 && <CopyButton text={poll} label="Copiar encuesta" />}
    </section>
  );
}
