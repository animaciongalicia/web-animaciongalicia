import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBlocks";
import { Recommendations } from "@/components/Recommendations";
import { ShareButton } from "@/components/ShareButton";
import { ArticleCard } from "@/components/ArticleCard";
import { SECTIONS, articlePath, articles, bySlug, getArticle } from "@/content/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ section: a.section, slug: a.slug }));
}

type P = { params: Promise<{ section: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { section, slug } = await params;
  const a = getArticle(section, slug);
  if (!a) return {};
  const path = articlePath(a);
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: a.title,
      description: a.description,
      images: [{ url: `/og/${a.slug}.png`, width: 1200, height: 630, alt: a.title }],
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description, images: [`/og/${a.slug}.png`] },
  };
}

export default async function ArticlePage({ params }: P) {
  const { section, slug } = await params;
  const a = getArticle(section, slug);
  if (!a) notFound();
  const sec = SECTIONS[a.section];
  const related = a.related.map((s) => bySlug(s)).filter((x) => !!x);

  return (
    <article className="wrap page article">
      <p className="crumbs">
        <Link href="/">Portada</Link>
        {a.section !== "despedidas" && (
          <>
            {" · "}
            <Link href={sec.path}>{sec.label}</Link>
          </>
        )}
      </p>
      <h1>{a.h1}</h1>
      <p className="answer">{a.answer}</p>
      <ArticleBlocks blocks={a.blocks} />
      <Recommendations slug={a.slug} />
      <div className="share-row">
        <ShareButton title={a.title} path={articlePath(a)} />
      </div>
      {related.length > 0 && (
        <section className="block" aria-labelledby="rel-t">
          <h2 id="rel-t">Otros marrones relacionados</h2>
          <ul className="cards">
            {related.map((r) => (
              <ArticleCard key={r!.slug} a={r!} />
            ))}
          </ul>
        </section>
      )}
      <p>
        <Link href="/" className="more">
          ← Volver a la portada de Despedidas
        </Link>
      </p>
    </article>
  );
}
