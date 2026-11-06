"use client";

import { useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/share";
import { ShareBar } from "../ShareBar";

const TAREAS = [
  "¿Quién paga la señal?",
  "¿Quién habla con el que no contesta?",
  "¿Quién lleva la tarta?",
  "¿Quién escribe el discurso?",
  "¿Quién se queda sin silla?",
  "¿Quién elige el sitio y asume las quejas?",
];
const COLORS = ["#5a3220", "#c2410c", "#1f2937", "#8a6d3b", "#7c2d12", "#374151", "#a16207", "#44403c"];
const R = 150;

function slicePath(i: number, n: number) {
  const a0 = (i / n) * 2 * Math.PI - Math.PI / 2;
  const a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
  const p = (a: number) => `${R + R * Math.cos(a)} ${R + R * Math.sin(a)}`;
  return `M ${R} ${R} L ${p(a0)} A ${R} ${R} 0 ${n === 1 ? 1 : 0} 1 ${p(a1)} Z`;
}

export function Ruleta() {
  const [namesText, setNamesText] = useState("Marta, Dani, Lucía, Pablo, Sara");
  const [tarea, setTarea] = useState(TAREAS[0]);
  const [rot, setRot] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const names = [...new Set(namesText.split(",").map((n) => n.trim()).filter(Boolean))].slice(0, 12);
  const n = names.length;

  function spin() {
    if (spinning || n < 2) return;
    const w = Math.floor(Math.random() * n);
    const center = ((w + 0.5) / n) * 360;
    const base = rot - (rot % 360);
    const target = base + 360 * 5 + (360 - center);
    const reduce = prefersReducedMotion();
    setWinner(null);
    setSpinning(true);
    setRot(target);
    timer.current = setTimeout(
      () => {
        setSpinning(false);
        setWinner(names[w]);
      },
      reduce ? 0 : 4200,
    );
  }

  const text = winner ? `${tarea} Le ha tocado a ${winner}. La ruleta no admite reclamaciones.` : "";

  return (
    <section className="panel" aria-labelledby="rul-t">
      <h2 id="rul-t">La ruleta</h2>
      <div className="fields">
        <label className="field">
          <span>Participantes (separados por comas, de 2 a 12)</span>
          <input
            value={namesText}
            onChange={(e) => {
              setNamesText(e.target.value);
              setWinner(null);
            }}
          />
        </label>
        <label className="field">
          <span>La pregunta</span>
          <select value={tarea} onChange={(e) => setTarea(e.target.value)}>
            {TAREAS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      {n >= 2 ? (
        <div className="wheel-wrap">
          <div className="wheel-pointer" aria-hidden="true" />
          <svg
            viewBox={`0 0 ${R * 2} ${R * 2}`}
            className="wheel"
            style={{
              transform: `rotate(${rot}deg)`,
              transition: spinning && !prefersReducedMotion() ? "transform 4s cubic-bezier(0.12, 0.7, 0.1, 1)" : "none",
            }}
            role="img"
            aria-label={`Ruleta con ${n} participantes`}
          >
            {names.map((name, i) => {
              const mid = ((i + 0.5) / n) * 360 - 90;
              return (
                <g key={name} data-name={name}>
                  <path d={slicePath(i, n)} fill={COLORS[i % COLORS.length]} stroke="#fff" strokeWidth="2" />
                  <text
                    x={R + R * 0.62 * Math.cos((mid * Math.PI) / 180)}
                    y={R + R * 0.62 * Math.sin((mid * Math.PI) / 180)}
                    fill="#fff"
                    fontSize={n > 8 ? 12 : 15}
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${mid + (mid > 90 && mid < 270 ? 180 : 0)} ${R + R * 0.62 * Math.cos((mid * Math.PI) / 180)} ${R + R * 0.62 * Math.sin((mid * Math.PI) / 180)})`}
                  >
                    {name.length > 10 ? `${name.slice(0, 9)}…` : name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      ) : (
        <p className="err">Hacen falta al menos 2 participantes.</p>
      )}

      <div className="actions">
        <button type="button" className="btn btn-primary" onClick={spin} disabled={spinning || n < 2}>
          {spinning ? "Girando…" : "Girar la ruleta"}
        </button>
      </div>

      <div role="status" aria-live="polite" className="status status-win result-box">
        {winner ? (
          <>
            <strong>{tarea}</strong> Le ha tocado a <strong id="ruleta-ganador">{winner}</strong>.
          </>
        ) : (
          "Gira y que decida el azar. Es más justo que el grupo."
        )}
      </div>
      {winner && <ShareBar text={text} path="/juegos/ruleta-del-marron/" copyLabel="Copiar sentencia" />}
    </section>
  );
}
