import { recomendacionesDe } from "@/content/recomendaciones";

export function Recommendations({ slug }: { slug: string }) {
  const recos = recomendacionesDe(slug).filter((r) => r.casera || r.enlaces.some((e) => e.url));
  if (recos.length === 0) return null;

  return (
    <aside className="block reco" aria-label="Recomendaciones">
      {recos.map((r) => {
        const links = r.enlaces.filter((e) => e.url);
        const hasCommission = links.some((e) => e.comisionado);
        return (
          <div key={r.titulo}>
            <h2>{r.titulo}</h2>
            {r.casera && (
              <p>
                <strong>Versión casera:</strong> {r.casera}
              </p>
            )}
            {links.length > 0 && (
              <>
                <ul>
                  {links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel={l.comisionado ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                      >
                        {l.label}
                      </a>
                      {l.comisionado && <span className="pill"> enlace de afiliación</span>}
                    </li>
                  ))}
                </ul>
                {hasCommission && (
                  <p className="aviso">
                    Aviso: si compras desde un enlace de afiliación, Menú Marrón puede llevarse una pequeña comisión.
                    A ti no te cuesta más.
                  </p>
                )}
              </>
            )}
          </div>
        );
      })}
    </aside>
  );
}
