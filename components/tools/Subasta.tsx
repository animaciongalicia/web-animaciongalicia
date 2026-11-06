"use client";

import { useState } from "react";
import { LOTES, type Lote } from "@/content/subasta";
import { shuffled } from "@/lib/share";
import { ShareBar } from "../ShareBar";

type Player = { name: string; saldo: number };
type Result = { lote: Lote; winner: string | null; price: number };
const N_LOTES = 5;
const SALDO = 100;

export function Subasta() {
  const [phase, setPhase] = useState<"setup" | "bid" | "reveal" | "final">("setup");
  const [namesText, setNamesText] = useState("Marta, Dani, Lucía, Pablo");
  const [players, setPlayers] = useState<Player[]>([]);
  const [lotes, setLotes] = useState<Lote[]>([]);
  const [lotIdx, setLotIdx] = useState(0);
  const [bidIdx, setBidIdx] = useState(0);
  const [bids, setBids] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [lastWinner, setLastWinner] = useState<string | null>(null);

  function start() {
    const names = [...new Set(namesText.split(",").map((n) => n.trim()).filter(Boolean))].slice(0, 8);
    if (names.length < 2) {
      setError("Hacen falta al menos 2 pujadores, separados por comas.");
      return;
    }
    setError("");
    setPlayers(names.map((name) => ({ name, saldo: SALDO })));
    setLotes(shuffled(LOTES).slice(0, N_LOTES));
    setLotIdx(0);
    setBidIdx(0);
    setBids([]);
    setResults([]);
    setInput("");
    setPhase("bid");
  }

  function submitBid() {
    const v = input.trim() === "" ? 0 : Number(input);
    const saldo = players[bidIdx].saldo;
    if (!Number.isInteger(v) || v < 0 || v > saldo) {
      setError(`Puja un número entero entre 0 y ${saldo}.`);
      return;
    }
    setError("");
    const nb = [...bids, v];
    setBids(nb);
    setInput("");
    if (bidIdx + 1 < players.length) {
      setBidIdx(bidIdx + 1);
      return;
    }
    // Todos han pujado: se revela.
    const max = Math.max(...nb);
    let winner: string | null = null;
    if (max > 0) {
      const tied = nb.map((b, i) => (b === max ? i : -1)).filter((i) => i >= 0);
      const wi = tied[Math.floor(Math.random() * tied.length)];
      winner = players[wi].name;
      setPlayers((ps) => ps.map((p, i) => (i === wi ? { ...p, saldo: p.saldo - max } : p)));
    }
    setLastWinner(winner);
    setResults((r) => [...r, { lote: lotes[lotIdx], winner, price: max }]);
    setPhase("reveal");
  }

  function next() {
    if (lotIdx + 1 >= lotes.length) {
      setPhase("final");
      return;
    }
    setLotIdx(lotIdx + 1);
    setBidIdx(0);
    setBids([]);
    setPhase("bid");
  }

  const star = results.filter((r) => r.winner).sort((a, b) => b.price - a.price)[0];

  return (
    <section className="panel" aria-labelledby="sub-t">
      <h2 id="sub-t">La subasta</h2>

      {phase === "setup" && (
        <>
          <p>
            Cada pujador tiene <strong>{SALDO} euros ficticios</strong>. Se subastan {N_LOTES} regalos imposibles
            pasándose el móvil: cada uno puja en secreto y gana la puja más alta.
          </p>
          <label className="field">
            <span>Pujadores (de 2 a 8, separados por comas)</span>
            <input value={namesText} onChange={(e) => setNamesText(e.target.value)} />
          </label>
          <button type="button" className="btn btn-primary" onClick={start}>
            Empezar la subasta
          </button>
        </>
      )}

      {phase === "bid" && players[bidIdx] && lotes[lotIdx] && (
        <div>
          <p className="muted">
            Lote {lotIdx + 1} de {lotes.length}
          </p>
          <div className="lote">
            <h3>{lotes[lotIdx].titulo}</h3>
            <p>{lotes[lotIdx].desc}</p>
          </div>
          <p className="turn">
            Turno de <strong>{players[bidIdx].name}</strong> · saldo {players[bidIdx].saldo} €
          </p>
          <p className="muted">Pasa el móvil: que no vean tu puja.</p>
          <label className="field">
            <span>Tu puja (€)</span>
            <input
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitBid()}
            />
          </label>
          <button type="button" className="btn btn-primary" onClick={submitBid}>
            Pujar y pasar el móvil
          </button>
        </div>
      )}

      {phase === "reveal" && (
        <div role="status" aria-live="polite">
          <h3>{lotes[lotIdx].titulo}</h3>
          <ul className="bids">
            {players.map((p, i) => (
              <li key={p.name}>
                <span>{p.name}</span>
                <strong>{bids[i]} €</strong>
              </li>
            ))}
          </ul>
          <p className="status status-win">
            {lastWinner
              ? `Adjudicado a ${lastWinner} por ${Math.max(...bids)} €.`
              : "Lote desierto. Nadie lo quiere. Es normal."}
          </p>
          <button type="button" className="btn btn-primary" onClick={next}>
            {lotIdx + 1 >= lotes.length ? "Ver el resultado" : "Siguiente lote"}
          </button>
        </div>
      )}

      {phase === "final" && (
        <div role="status" aria-live="polite">
          <h3>Resultado de la subasta</h3>
          <ul className="bids">
            {results.map((r) => (
              <li key={r.lote.id}>
                <span>{r.lote.titulo}</span>
                <strong>{r.winner ? `${r.winner} · ${r.price} €` : "Desierto"}</strong>
              </li>
            ))}
          </ul>
          {star ? (
            <>
              <h3>El regalo más deseado: {star.lote.titulo}</h3>
              <p>La subasta es de mentira. El regalo, en tres versiones, es de verdad:</p>
              <ol className="versions">
                <li>
                  <strong>Casera</strong>
                  <span>{star.lote.casera}</span>
                </li>
                <li>
                  <strong>Comprable</strong>
                  <span>{star.lote.comprable}</span>
                </li>
                <li>
                  <strong>Entre todos</strong>
                  <span>{star.lote.colectivo}</span>
                </li>
              </ol>
              <ShareBar
                text={`Subasta de regalos imposibles. Ganó: «${star.lote.titulo}».\nCasera: ${star.lote.casera}\nEntre todos: ${star.lote.colectivo}`}
                path="/regalos/subasta-regalos-imposibles/"
                copyLabel="Copiar resultado"
              />
            </>
          ) : (
            <p>Nadie pujó por nada. Tenéis un problema de ganas.</p>
          )}
          <button type="button" className="btn" onClick={() => setPhase("setup")}>
            Otra subasta
          </button>
        </div>
      )}

      {error && (
        <p className="err" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
