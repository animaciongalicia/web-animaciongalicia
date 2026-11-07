import Link from "next/link";
import { AGENCIA } from "@/lib/company";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap-wide foot-grid">
        <div>
          <p className="signature">{SITE.signature}</p>
          <p className="small">
            Revista que recoge lo mejor y lo peor de la red sobre organizar fiestas, cumpleaños y regalos, con
            comentario propio. Los contenidos de terceros se enlazan o se incrustan con su reproductor oficial y se
            citan con su fuente.
          </p>
          <p className="small">
            <Link href="/informacion-editorial/">Cómo trabajamos, derechos y afiliación</Link>
          </p>
        </div>
        <div className="foot-agency">
          <p className="foot-title">{AGENCIA.nombre}</p>
          <p className="small">{AGENCIA.lema}</p>
          <ul className="brands">
            {AGENCIA.marcas.map((m) => (
              <li key={m.nombre}>
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener">
                    {m.nombre}
                  </a>
                ) : (
                  m.nombre
                )}
              </li>
            ))}
          </ul>
          {AGENCIA.web && (
            <p className="small">
              <a href={AGENCIA.web} target="_blank" rel="noopener">
                Web de la agencia
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
