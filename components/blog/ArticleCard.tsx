import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { categoryColors } from "@/lib/data/articles";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const color = categoryColors[article.category] ?? "var(--color-primary)";
  const date = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/enseignements/${article.slug}`} className="card">
      <div
        className="card-image"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}88 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "var(--text-sm)",
          fontWeight: 500,
        }}
      >
        {article.category}
      </div>
      <div className="card-body">
        <span className="card-category" style={{ color }}>
          {article.category}
        </span>
        <h3 className="card-title">{article.title}</h3>
        <p className="card-excerpt">{article.excerpt}</p>
        <div
          className="text-muted"
          style={{
            fontSize: "var(--text-xs)",
            marginTop: "var(--space-2)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
          }}
        >
          <span>{date}</span>
          <span>·</span>
          <span>{article.readingTime} min de lecture</span>
        </div>
      </div>
    </Link>
  );
}
