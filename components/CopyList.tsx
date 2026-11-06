import { CopyButton } from "./CopyButton";

export function CopyList({
  title,
  items,
}: {
  title?: string;
  items: { label?: string; text: string }[];
}) {
  return (
    <section className="block">
      {title && <h2>{title}</h2>}
      <ul className="copylist">
        {items.map((it, i) => (
          <li key={i} className="copyitem">
            <div>
              {it.label && <strong className="copy-label">{it.label}</strong>}
              <span className="copy-text">{it.text}</span>
            </div>
            <CopyButton text={it.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
