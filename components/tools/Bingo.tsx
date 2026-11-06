"use client";

import { useEffect, useMemo, useState } from "react";
import { BINGO_FRASES } from "@/content/bingo";
import { rng, shuffled } from "@/lib/share";
import { ShareBar } from "../ShareBar";

const N = 4;
const LINES: number[][] = (() => {
  const l: number[][] = [];
  for (let r = 0; r < N; r++) l.push(Array.from({ length: N }, (_, c) => r * N + c));
  for (let c = 0; c < N; c++) l.push(Array.from({ length: N }, (_, r) => r * N + c));
  l.push(Array.from({ length: N }, (_, i) => i * N + i));
  l.push(Array.from({ length: N }, (_, i) => i * N + (N - 1 - i)));
  return l;
})();

export function Bingo() {
  const [seed, setSeed] = useState(1);
  const [marked, setMarked] = useState<boolean[]>(Array(N * N).fill(false));
  useEffect(() => setSeed(Math.floor(Math.random() * 1e9)), []);

  const card = useMemo(() => shuffled(BINGO_FRASES, rng(seed)).slice(0, N * N), [seed]);
  const done = LINES.filter((l) => l.every((i) => marked[i])).length;
  const count = marked.filter(Boolean).length;

  function toggle(i: number) {
    setMarked((m) => m.map((v, k) => (k === i ? !v : v)));
  }
  function again() {
    setSeed(Math.floor(Math.random() * 1e9));
    setMarked(Array(N * N).fill(false));
  }

  const status =
    done >= 3
      ? "¡BINGO! Tres líneas. El premio se entrega en la cena. Cobra en Bizum."
      : done >= 1
        ? "¡LÍNEA! Grítalo. Quien lo hace primero gana."
        : "Marca cada casilla cuando alguien lo haga de verdad. Sin trampas, sin mentiras, sin «yo no he dicho eso».";

  return (
    <section className="panel" aria-labelledby="bingo-t">
      <h2 id="bingo-t">Tu cartón</h2>
      <p className="muted">
        Marcadas: {count} de {N * N} · Líneas: {done}
      </p>
      <div className="bingo" role="group" aria-label="Cartón de bingo">
        {card.map((f, i) => (
          <button
            key={f}
            type="button"
            className={`bingo-cell${marked[i] ? " is-on" : ""}`}
            aria-pressed={marked[i]}
            onClick={() => toggle(i)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className={`status${done ? " status-win" : ""}`} role="status" aria-live="polite">
        {status}
      </p>
      <div className="actions">
        <button type="button" className="btn" onClick={again}>
          Cartón nuevo
        </button>
      </div>
      <h3>Mándalo al grupo</h3>
      <ShareBar
        text="Bingo del chat: cada uno con su cartón, primera línea gana. Se juega mientras se organiza lo que sea."
        path="/juegos/bingo-grupo-whatsapp/"
        copyLabel="Copiar invitación"
      />
    </section>
  );
}
