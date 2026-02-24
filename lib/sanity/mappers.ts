import type { Article, ArticleCategory } from "@/lib/types/article";
import type { SanityPost } from "@/lib/sanity/types";

const CATEGORY_LABELS: ArticleCategory[] = [
  "Foi",
  "Famille & Couple",
  "Jeunesse & Destinée",
];

function normalizeCategory(tags: string[]): ArticleCategory {
  const tag = tags.find((currentTag) =>
    CATEGORY_LABELS.some(
      (category) => category.toLowerCase() === currentTag.toLowerCase(),
    ),
  );

  if (!tag) return "Foi";

  return (
    CATEGORY_LABELS.find(
      (category) => category.toLowerCase() === tag.toLowerCase(),
    ) ?? "Foi"
  );
}

function estimateReadingTimeFromPortableText(body: unknown[] = []) {
  const text = JSON.stringify(body);
  const words = text.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 220);
  return Math.max(1, readingTime);
}

export function mapSanityPostToArticle(post: SanityPost): Article {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: "",
    category: normalizeCategory(post.tags),
    publishedAt: post.publishedAt,
    readingTime: estimateReadingTimeFromPortableText(post.body),
    image: post.coverImage?.asset?._ref ?? null,
  };
}
