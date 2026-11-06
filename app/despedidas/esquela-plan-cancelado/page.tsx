import type { Metadata } from "next";
import { ArticleView } from "@/components/ArticleView";
import { Esquela } from "@/components/tools/Esquela";
import { articlePath, getArticle } from "@/content/articles";
import { esquelaFromParams, esquelaQuery } from "@/lib/esquela";

type SP = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const article = () => getArticle("despedidas", "esquela-plan-cancelado")!;

export async function generateMetadata({ searchParams }: SP): Promise<Metadata> {
  const a = article();
  const { has, data, planB } = esquelaFromParams(await searchParams);
  const path = articlePath(a);
  const image = has ? `/og/esquela.png?${esquelaQuery(data, planB)}` : "/og/inicio.png";
  const title = has ? `Esquela: ${data.plan}` : a.title;
  return {
    title: has ? title : a.title,
    description: a.description,
    alternates: { canonical: path },
    // Las esquelas personalizadas no se indexan: solo la página base.
    robots: has ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      url: path,
      title,
      description: has ? `Causa del fallecimiento: ${data.causa}` : a.description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, images: [image] },
  };
}

export default async function EsquelaPage({ searchParams }: SP) {
  const { data, planB } = esquelaFromParams(await searchParams);
  return <ArticleView a={article()} toolOverride={<Esquela initial={data} planB={planB} />} />;
}
