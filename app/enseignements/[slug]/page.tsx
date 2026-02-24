import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  categoryColors,
} from "@/lib/data/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import PortableTextContent from "@/components/blog/PortableTextContent";
import Newsletter from "@/components/sections/Newsletter";
import { mapSanityPostToArticle } from "@/lib/sanity/mappers";
import {
  BLOG_REVALIDATE_SECONDS,
  getAllPosts,
  getNewsletterSection,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/sanity/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = BLOG_REVALIDATE_SECONDS;

export async function generateStaticParams() {
  const cmsPosts = await getAllPosts();
  const cmsSlugs = cmsPosts.map((post) => ({ slug: post.slug }));
  const localSlugs = articles.map((article) => ({ slug: article.slug }));
  const merged = new Map<string, { slug: string }>();

  for (const entry of [...localSlugs, ...cmsSlugs]) {
    merged.set(entry.slug, entry);
  }

  return Array.from(merged.values());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cmsPost = await getPostBySlug(slug);

  if (cmsPost) {
    return {
      title: cmsPost.seo?.metaTitle ?? `${cmsPost.title} — Teddy Ngbanda`,
      description: cmsPost.seo?.metaDescription ?? cmsPost.excerpt,
      openGraph: {
        title: cmsPost.seo?.metaTitle ?? cmsPost.title,
        description: cmsPost.seo?.metaDescription ?? cmsPost.excerpt,
      },
      robots: {
        index: !cmsPost.seo?.noIndex,
        follow: true,
      },
    };
  }

  const localArticle = getArticleBySlug(slug);
  if (!localArticle) return {};

  return {
    title: `${localArticle.title} — Teddy Ngbanda`,
    description: localArticle.excerpt,
    openGraph: {
      title: localArticle.title,
      description: localArticle.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const cmsPost = await getPostBySlug(slug);
  const localArticle = getArticleBySlug(slug);

  if (!cmsPost && !localArticle) notFound();

  const article = cmsPost ? mapSanityPostToArticle(cmsPost) : localArticle!;

  const newsletterContent = await getNewsletterSection();

  const relatedCmsPosts = cmsPost
    ? await getRelatedPosts(cmsPost.slug, cmsPost.tags, 3)
    : [];
  const relatedCms = relatedCmsPosts.map(mapSanityPostToArticle);
  const relatedLocal = getRelatedArticles(article.slug, article.category);
  const related = relatedCms.length > 0 ? relatedCms : relatedLocal;
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
          <div className="prose">
            {cmsPost ? (
              <PortableTextContent value={cmsPost.body} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            )}
          </div>
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

      <Newsletter content={newsletterContent ?? undefined} />
    </>
  );
}
