import Link from "next/link";
import { articlePath } from "@/content/articles";
import type { Article } from "@/content/types";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <li className="card article-card">
      <span className="pill">{a.tag}</span>
      <h3>
        <Link href={articlePath(a)}>{a.title}</Link>
      </h3>
      <p>{a.description}</p>
      <Link href={articlePath(a)} className="more" aria-label={`Abrir: ${a.title}`}>
        Abrir y usar →
      </Link>
    </li>
  );
}
