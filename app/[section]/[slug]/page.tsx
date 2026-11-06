import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { articlePath, generic, getArticle } from "@/content/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return generic().map((a) => ({ section: a.section, slug: a.slug }));
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
  if (!a || a.custom) notFound();
  return <ArticleView a={a} />;
}
