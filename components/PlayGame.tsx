"use client";

import { useState } from "react";
import { FRASES, PERSONAJES } from "@/content/quien-dijo-esto";
import { CopyButton } from "./CopyButton";

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function PlayGame() {
  const [rounds, setRounds] = useState<number[]>(() => FRASES.map((_, i) => i));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const done = i >= rounds.length;
  const frase = done ? null : FRASES[rounds[i]];

  function answer(p: string) {
    if (picked || !frase) return;
    setPicked(p);
    if (p === frase.personaje) setScore((s) => s + 1);
  }

  function next() {
    setPicked(null);
    setI((n) => n + 1);
  }

  function restart() {
    setRounds(shuffle(FRASES.map((_, k) => k)));
    setI(0);
    setScore(0);
    setPicked(null);
  }

  const resultMsg =
    score >= 7
      ? "Eres el que lleva el grupo. Que alguien te invite a algo."
      : score >= 4
        ? "Conoces a tu grupo. O lo sufres. Es lo mismo."
        : "Estás en el grupo pero no lo lees. Lo hemos notado.";
  const share = `He sacado ${score}/${FRASES.length} en «¿Quién dijo esto en el grupo?». ${resultMsg}`;

  return (
    <section className="block play card" aria-labelledby="play-title">
      <h2 id="play-title">Ronda de muestra (frases inventadas)</h2>
      {!done && frase ? (
        <>
          <p className="play-count">
            Frase {i + 1} de {rounds.length} · Aciertos: {score}
          </p>
          <blockquote className="play-quote">{frase.texto}</blockquote>
          <p className="play-ask">¿Quién lo dijo?</p>
          <div className="play-options" role="group" aria-label="Opciones">
            {PERSONAJES.map((p) => {
              const state = picked
                ? p === frase.personaje
                  ? "right"
                  : p === picked
                    ? "wrong"
                    : "idle"
                : "idle";
              return (
                <button
                  key={p}
                  type="button"
                  className={`opt opt-${state}`}
                  disabled={!!picked}
                  onClick={() => answer(p)}
                >
                  {p}
                </button>
              );
            })}
          </div>
          {picked && (
            <div className="play-result" role="status" aria-live="polite">
              <p>
                <strong>{picked === frase.personaje ? "¡Acertaste!" : `Era ${frase.personaje}.`}</strong>{" "}
                {frase.comentario}
              </p>
              <button type="button" className="btn" onClick={next}>
                {i + 1 === rounds.length ? "Ver resultado" : "Siguiente frase"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div role="status" aria-live="polite">
          <p className="play-final">
            {score} de {FRASES.length}
          </p>
          <p>{resultMsg}</p>
          <div className="actions">
            <CopyButton text={share} label="Copiar resultado para el grupo" />
            <button type="button" className="btn" onClick={restart}>
              Jugar otra vez
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
