import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, getRelatedArticles, categoryColors } from "@/lib/data/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import Newsletter from "@/components/sections/Newsletter";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Teddy Ngbanda`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, article.category);
  const color = categoryColors[article.category] ?? "var(--color-primary)";

  const date = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Article Header */}
      <section className="article-header">
        <div className="container">
          <div className="article-header-inner">
            <Link href="/enseignements" className="article-back-link">
              ← Tous les articles
            </Link>

            <span className="article-category" style={{ color }}>
              {article.category}
            </span>

            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta">
              <span>{date}</span>
              <span className="article-meta-separator">·</span>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section
          className="section"
          style={{ backgroundColor: "var(--color-bg-subtle)" }}
        >
          <div className="container">
            <h2 style={{ marginBottom: "var(--space-8)" }}>
              Articles similaires
            </h2>
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              }}
            >
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
