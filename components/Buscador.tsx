"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type ItemBusqueda = { t: string; d: string; tag: string; sec: string; href: string };

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Buscador sencillo sobre títulos, entradillas y etiquetas (todo en el navegador, sin servidor). */
export function Buscador({ items }: { items: ItemBusqueda[] }) {
  const [q, setQ] = useState("");
  const idx = useMemo(() => items.map((i) => ({ i, k: norm(`${i.t} ${i.d} ${i.tag}`) })), [items]);
  const palabras = norm(q).split(/\s+/).filter(Boolean);
  const res = palabras.length ? idx.filter((x) => palabras.every((w) => x.k.includes(w))).map((x) => x.i) : [];

  return (
    <div className="buscador" role="search">
      <label htmlFor="q" className="visually-hidden">
        Buscar en la revista
      </label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Busca: barco, WhatsApp, camisetas…" autoComplete="off" />
      {palabras.length > 0 && (
        <div className="buscador-res" aria-live="polite">
          {res.length ? (
            <ul>
              {res.slice(0, 8).map((r) => (
                <li key={r.href} data-seccion={r.sec}>
                  <span className="kicker">{r.tag}</span>
                  <Link href={r.href}>{r.t}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nada con eso. Prueba con otra palabra, o <Link href="/contacto/#marron">cuéntanos tu marrón</Link>.</p>
          )}
        </div>
      )}
    </div>
  );
}
