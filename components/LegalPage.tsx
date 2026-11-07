import { TITULAR } from "@/lib/legal";

export function LegalPage({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="wrap-wide page legal">
      <header className="section-head">
        <p className="kicker">Información legal</p>
        <h1>{titulo}</h1>
        <p className="muted">Última actualización: {TITULAR.actualizado}</p>
      </header>
      <div className="read">
        <div className="prose">{children}</div>
      </div>
    </div>
  );
}
