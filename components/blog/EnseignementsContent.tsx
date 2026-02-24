"use client";

import { useMemo, useState } from "react";
import type { ArticleCategory, Article } from "@/lib/types/article";
import ArticleCard from "@/components/blog/ArticleCard";
import ArticleFilters from "@/components/blog/ArticleFilters";
import RevealOnScroll from "@/lib/RevealOnScroll";

type Props = {
  articles: Article[];
};

export default function EnseignementsContent({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "Tous">(
    "Tous",
  );

  const filtered = useMemo(
    () =>
      activeCategory === "Tous"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory, articles],
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span
              style={{
                display: "block",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                marginBottom: "var(--space-3)",
              }}
            >
              Enseignements
            </span>
            <h1 className="page-title">Publications &amp; Articles</h1>
            <p className="page-subtitle">
              Des enseignements ancrés dans la Parole de Dieu pour nourrir votre
              foi, fortifier vos relations et transformer votre quotidien.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <ArticleFilters active={activeCategory} onChange={setActiveCategory} />
          </RevealOnScroll>

          {filtered.length === 0 ? (
            <p
              className="text-muted text-center"
              style={{ marginTop: "var(--space-8)" }}
            >
              Aucun article dans cette catégorie pour le moment.
            </p>
          ) : (
            <div
              className="grid gap-6"
              style={{
                marginTop: "var(--space-8)",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              {filtered.map((article, index) => (
                <RevealOnScroll key={article.slug} delay={index * 80}>
                  <ArticleCard article={article} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
