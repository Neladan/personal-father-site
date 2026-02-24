export type ArticleCategory =
  | "Spiritualité"
  | "Famille & Couple"
  | "Jeunesse & Destinée";

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
