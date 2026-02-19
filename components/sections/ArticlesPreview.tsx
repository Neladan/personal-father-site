"use client";

import Link from "next/link";
import { articles } from "@/lib/data/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import RevealOnScroll from "@/lib/RevealOnScroll";

export default function ArticlesPreview() {
  const preview = articles.slice(0, 3);

  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-bg-subtle)" }}
    >
      <div className="container">
        <RevealOnScroll>
          <div
            className="flex justify-between items-center"
            style={{
              marginBottom: "var(--space-8)",
              flexWrap: "wrap",
              gap: "var(--space-4)",
            }}
          >
            <div>
              <h2>Dernières publications</h2>
              <p className="text-muted" style={{ marginTop: "var(--space-1)" }}>
                Enseignements et réflexions pour nourrir votre foi
              </p>
            </div>
            <Link href="/enseignements" className="btn btn-secondary">
              Voir tous les articles
            </Link>
          </div>
        </RevealOnScroll>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {preview.map((article, index) => (
            <RevealOnScroll key={article.slug} delay={index * 100}>
              <ArticleCard article={article} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
