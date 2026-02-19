export type ArticleCategory = "Spiritualité" | "Leadership" | "Société";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  publishedAt: string; // ISO date string
  readingTime: number;
  image: string | null;
};
