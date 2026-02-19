"use client";

import { useState } from "react";
import type { ArticleCategory } from "@/lib/types/article";
import { articles } from "@/lib/data/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import ArticleFilters from "@/components/blog/ArticleFilters";
import RevealOnScroll from "@/lib/RevealOnScroll";

export const dynamic = "force-static";

export default function EnseignementsPage() {
  return <EnseignementsContent />;
}

function EnseignementsContent() {
  const [activeCategory, setActiveCategory] = useState<
    ArticleCategory | "Tous"
  >("Tous");

  const filtered =
    activeCategory === "Tous"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span
              style={{
                display: "block",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                marginBottom: "var(--space-3)",
              }}
            >
              Enseignements
            </span>
            <h1 className="page-title">Publications &amp; Articles</h1>
            <p className="page-subtitle">
              Des enseignements ancrés dans la Parole de Dieu pour nourrir
              votre foi, développer votre leadership et transformer votre
              quotidien.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section">
        <div className="container">
          <RevealOnScroll>
            <ArticleFilters
              active={activeCategory}
              onChange={setActiveCategory}
            />
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
