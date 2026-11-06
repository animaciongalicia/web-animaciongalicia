export function Checklist({ title, items }: { title?: string; items: string[] }) {
  return (
    <section className="block">
      {title && <h2>{title}</h2>}
      <ul className="checklist">
        {items.map((it, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" /> <span>{it}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
