export function Ideas({
  title,
  budget,
  items,
}: {
  title: string;
  budget: string;
  items: { titulo: string; texto: string }[];
}) {
  return (
    <section className="block">
      <h2>
        {title} <span className="pill">{budget}</span>
      </h2>
      <ul className="ideas">
        {items.map((it) => (
          <li key={it.titulo} className="card">
            <strong>{it.titulo}</strong>
            <p>{it.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
