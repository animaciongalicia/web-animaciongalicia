import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { SECTIONS, bySection } from "@/content/articles";

export const dynamicParams = false;

const CATS = ["cumpleanos", "regalos", "juegos"] as const;
type Cat = (typeof CATS)[number];

export function generateStaticParams() {
  return CATS.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!CATS.includes(section as Cat)) return {};
  const s = SECTIONS[section as Cat];
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: s.path },
    openGraph: { url: s.path, title: s.title, description: s.description, images: [{ url: "/og/inicio.png", width: 1200, height: 630, alt: "Menú Marrón, un proyecto de Animación Galicia" }] },
    twitter: { card: "summary_large_image", images: ["/og/inicio.png"] },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!CATS.includes(section as Cat)) notFound();
  const s = SECTIONS[section as Cat];
  const list = bySection(section as Cat);
  return (
    <div className="wrap page">
      <p className="kicker">{s.label}</p>
      <h1>{s.title}</h1>
      <p className="lead">{s.intro}</p>
      <ul className="cards">
        {list.map((a) => (
          <ArticleCard key={a.slug} a={a} />
        ))}
      </ul>
    </div>
  );
}
