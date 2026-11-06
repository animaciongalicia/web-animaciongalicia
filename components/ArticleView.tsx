import Link from "next/link";
import { ArticleBlocks } from "./ArticleBlocks";
import { Recommendations } from "./Recommendations";
import { ShareButton } from "./ShareButton";
import { ArticleCard } from "./ArticleCard";
import { SECTIONS, articlePath, bySlug } from "@/content/articles";
import type { Article } from "@/content/types";

export function ArticleView({ a, toolOverride }: { a: Article; toolOverride?: React.ReactNode }) {
  const sec = SECTIONS[a.section];
  const related = a.related.map((s) => bySlug(s)).filter((x): x is Article => !!x);

  return (
    <article className="wrap-wide page article">
      <header className="article-head read">
        <p className="crumbs">
          <Link href="/">Portada</Link>
          {a.section !== "despedidas" && (
            <>
              <span aria-hidden="true"> / </span>
              <Link href={sec.path}>{sec.label}</Link>
            </>
          )}
        </p>
        <p className="kicker">{a.tag}</p>
        <h1>{a.h1}</h1>
        <p className="answer">{a.answer}</p>
      </header>
      <div className="article-body read">
        <ArticleBlocks blocks={a.blocks} toolOverride={toolOverride} />
        <Recommendations slug={a.slug} />
        <div className="share-row">
          <ShareButton title={a.title} path={articlePath(a)} />
        </div>
      </div>
      {related.length > 0 && (
        <section className="related" aria-labelledby="rel-t">
          <h2 id="rel-t" className="section-title">
            Sigue con otro marrón
          </h2>
          <ul className="cards">
            {related.map((r) => (
              <ArticleCard key={r.slug} a={r} />
            ))}
          </ul>
        </section>
      )}
      <p className="back read">
        <Link href="/">← Volver a la portada</Link>
      </p>
    </article>
  );
}
