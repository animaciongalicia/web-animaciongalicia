export function Steps({ title, items }: { title?: string; items: string[] }) {
  return (
    <section className="block">
      {title && <h2>{title}</h2>}
      <ol className="steps">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ol>
    </section>
  );
}
