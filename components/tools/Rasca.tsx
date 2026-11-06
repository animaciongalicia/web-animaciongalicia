"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ShareBar } from "../ShareBar";

type Result = { pagan: number; tarde: number; olvido: number; caen: number };

function roll(n: number): Result {
  const pagan = Math.max(1, Math.round(n * (0.35 + Math.random() * 0.25)));
  const rest = n - pagan;
  const tarde = Math.round(rest * (0.2 + Math.random() * 0.2));
  const caen = Math.round((rest - tarde) * (0.3 + Math.random() * 0.3));
  return { pagan, tarde, caen, olvido: rest - tarde - caen };
}

export function Rasca() {
  const [total, setTotal] = useState("17");
  const [res, setRes] = useState<Result>({ pagan: 8, tarde: 3, olvido: 4, caen: 2 });
  const [revealed, setRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  const n = Math.min(60, Math.max(2, Number.parseInt(total, 10) || 17));

  const paint = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    const { width, height } = c.getBoundingClientRect();
    c.width = Math.round(width * dpr);
    c.height = Math.round(height * dpr);
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "#b8b8b8");
    g.addColorStop(0.5, "#e6e6e6");
    g.addColorStop(1, "#a9a9a9");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#555";
    ctx.font = "700 20px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("RASCA AQUÍ", width / 2, height / 2 + 7);
  }, []);

  useEffect(() => {
    paint();
  }, [paint]);

  function again() {
    setRes(roll(n));
    setRevealed(false);
    requestAnimationFrame(paint);
  }

  function scratch(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || revealed) return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const rect = c.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc((e.clientX - rect.left) * dpr, (e.clientY - rect.top) * dpr, 22 * dpr, 0, Math.PI * 2);
    ctx.fill();
  }

  function checkCleared() {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const { data } = ctx.getImageData(0, 0, c.width, c.height);
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 4 * 16) {
      total++;
      if (data[i] === 0) clear++;
    }
    if (clear / total > 0.45) setRevealed(true);
  }

  const resumen = `De ${n} apuntados: ${res.pagan} pagan a tiempo, ${res.tarde} pagan tarde, ${res.olvido} «se me había olvidado» y ${res.caen} se caen el día antes.`;

  return (
    <section className="panel" aria-labelledby="ras-t">
      <h2 id="ras-t">Tu rasca</h2>
      <label className="field narrow">
        <span>¿Cuántos estáis apuntados?</span>
        <input
          inputMode="numeric"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          onBlur={() => {
            setRes(roll(n));
            setRevealed(false);
            requestAnimationFrame(paint);
          }}
        />
      </label>

      <div className="scratch">
        <div className="scratch-under">
          <p className="scratch-big">
            {res.pagan} de {n}
          </p>
          <p>pagarán a tiempo</p>
          <ul>
            <li>{res.tarde} pagarán tarde</li>
            <li>{res.olvido} dirán «se me había olvidado»</li>
            <li>{res.caen} se caerán el día antes</li>
          </ul>
        </div>
        {!revealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            aria-hidden="true"
            onPointerDown={(e) => {
              drawing.current = true;
              (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
              scratch(e);
            }}
            onPointerMove={scratch}
            onPointerUp={() => {
              drawing.current = false;
              checkCleared();
            }}
            onPointerCancel={() => (drawing.current = false)}
          />
        )}
      </div>

      <div className="actions">
        <button type="button" className="btn" onClick={() => setRevealed(true)} disabled={revealed}>
          Descubrir sin rascar
        </button>
        <button type="button" className="btn btn-primary" onClick={again}>
          Otro rasca
        </button>
      </div>
      <p className="muted" role="status" aria-live="polite">
        {revealed ? "Resultado cien por cien científico. Cualquier parecido con la realidad es inevitable." : "Rasca con el dedo o el ratón."}
      </p>
      {revealed && <ShareBar text={resumen} path="/juegos/rasca-y-pierde-organizador/" copyLabel="Copiar resultado" />}
    </section>
  );
}
