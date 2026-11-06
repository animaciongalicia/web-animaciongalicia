export function GameList({
  items,
}: {
  items: { name: string; duracion: string; tamano: string; reglas: string[] }[];
}) {
  return (
    <section className="block">
      <ol className="games">
        {items.map((g) => (
          <li key={g.name} className="game card">
            <h2>{g.name}</h2>
            <p className="meta">
              <span>⏱ {g.duracion}</span>
              <span>👥 {g.tamano}</span>
            </p>
            <ol className="rules">
              {g.reglas.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
}
