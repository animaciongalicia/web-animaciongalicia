import Link from "next/link";
import { fechaLarga, piezaPath } from "@/lib/piezas";
import { seccionLabel } from "@/lib/piezas";
import type { Pieza } from "@/content/types";

export function PiezaCard({ p, big = false }: { p: Pieza; big?: boolean }) {
  return (
    <li className={`card${big ? " card-big" : ""}`} data-seccion={p.seccion}>
      <p className="kicker">
        {seccionLabel(p.seccion)} · {p.tag}
      </p>
      <h3>
        <Link href={piezaPath(p)}>{p.titulo}</Link>
      </h3>
      <p className="deck">{p.dek}</p>
      <p className="meta">
        <time dateTime={p.fecha}>{fechaLarga(p.fecha)}</time>
        {p.borrador && <span className="draft">Borrador</span>}
      </p>
    </li>
  );
}
