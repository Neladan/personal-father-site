"use client";

import type { ArticleCategory } from "@/lib/types/article";
import { categoryColors } from "@/lib/data/articles";

type Props = {
  active: ArticleCategory | "Tous";
  onChange: (category: ArticleCategory | "Tous") => void;
};

const categories: Array<ArticleCategory | "Tous"> = [
  "Tous",
  "Foi",
  "Famille & Couple",
  "Jeunesse & Destinée",
];

export default function ArticleFilters({ active, onChange }: Props) {
  return (
    <div className="blog-filters">
      {categories.map((cat) => {
        const isActive = active === cat;
        const color =
          cat === "Tous"
            ? "var(--color-primary)"
            : (categoryColors[cat] ?? "var(--color-primary)");

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="blog-filter-btn"
            style={{
              borderColor: isActive ? color : "var(--color-border)",
              backgroundColor: isActive ? color : "transparent",
              color: isActive ? "white" : "var(--color-text-secondary)",
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
