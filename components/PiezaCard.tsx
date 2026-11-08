import Image from "next/image";
import Link from "next/link";
import { fechaLarga, minutosLectura, piezaPath, seccionLabel } from "@/lib/piezas";
import type { Pieza } from "@/content/types";

export function PiezaCard({ p, big = false }: { p: Pieza; big?: boolean }) {
  return (
    <li className={`card${big ? " card-big" : ""}`} data-seccion={p.seccion}>
      {p.imagen && (
        <div className="thumb">
          <Image src={p.imagen.src} width={p.imagen.ancho} height={p.imagen.alto} alt="" sizes="(min-width: 980px) 380px, 100vw" />
        </div>
      )}
      <p className="kicker">
        {seccionLabel(p.seccion)} · {p.tag}
      </p>
      <h3>
        <Link href={piezaPath(p)}>{p.titulo}</Link>
      </h3>
      <p className="deck">{p.dek}</p>
      <p className="meta">
        <time dateTime={p.fecha}>{fechaLarga(p.fecha)}</time>
        <span>{minutosLectura(p)} min</span>
        {p.borrador && <span className="draft">Borrador</span>}
      </p>
    </li>
  );
}
