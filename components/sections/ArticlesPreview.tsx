"use client";

import Link from "next/link";
import RevealOnScroll from "@/lib/RevealOnScroll";

// Données simulées - à remplacer par des vraies données CMS
const articles = [
  {
    slug: "la-puissance-de-la-priere",
    category: "Spiritualité",
    title: "La puissance de la prière dans les moments difficiles",
    excerpt:
      "Découvrez comment la prière peut transformer les épreuves en opportunités de croissance spirituelle.",
    image: null,
    readingTime: 5,
  },
  {
    slug: "leadership-serviteur",
    category: "Leadership",
    title: "Le leadership serviteur : une révolution silencieuse",
    excerpt:
      "Comment les principes du leadership serviteur peuvent transformer nos organisations et communautés.",
    image: null,
    readingTime: 7,
  },
  {
    slug: "famille-pilier-nation",
    category: "Société",
    title: "La famille, pilier de la nation",
    excerpt:
      "Réflexions sur le rôle fondamental de la famille dans la construction d'une société saine.",
    image: null,
    readingTime: 6,
  },
];

const categoryColors: Record<string, string> = {
  Spiritualité: "var(--color-accent)",
  Leadership: "var(--color-primary)",
  Société: "#2E7D32",
};

export default function ArticlesPreview() {
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
          {articles.map((article, index) => (
            <RevealOnScroll key={article.slug} delay={index * 100}>
              <Link href={`/enseignements/${article.slug}`} className="card">
                {/* Image placeholder */}
                <div
                  className="card-image"
                  style={{
                    background: `linear-gradient(135deg, ${categoryColors[article.category] || "var(--color-primary)"} 0%, ${categoryColors[article.category] || "var(--color-primary)"}88 100%)`,
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
                  <span
                    className="card-category"
                    style={{ color: categoryColors[article.category] }}
                  >
                    {article.category}
                  </span>
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                  <span
                    className="text-muted"
                    style={{ fontSize: "var(--text-xs)" }}
                  >
                    {article.readingTime} min de lecture
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
