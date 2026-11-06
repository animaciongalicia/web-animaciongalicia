import Link from "next/link";
import { articlePath } from "@/content/articles";
import type { Article } from "@/content/types";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <li className="card">
      <p className="kicker">{a.tag}</p>
      <h3>
        <Link href={articlePath(a)}>{a.title}</Link>
      </h3>
      <p className="deck">{a.description}</p>
      <Link href={articlePath(a)} className="more" aria-label={`Abrir: ${a.title}`}>
        Leer y usar →
      </Link>
    </li>
  );
}
