"use client";

import RevealOnScroll from "@/lib/RevealOnScroll";

const expertiseItems = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Foi",
    description:
      "Des enseignements profonds sur la foi, la prière et la croissance spirituelle pour une vie transformée.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Famille & Couple",
    description:
      "Des conseils bibliques pour restaurer, bâtir et consolider les fondations du mariage et de la famille.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Jeunesse & Destinée",
    description:
      "Inspirer et équiper la nouvelle génération pour accomplir pleinement son potentiel et sa vocation en Christ.",
  },
];

export default function ExpertiseGrid() {
  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll>
          <div
            className="text-center"
            style={{ marginBottom: "var(--space-10)" }}
          >
            <h2>Domaines d&apos;expertise</h2>
            <p
              className="text-muted"
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                marginTop: "var(--space-3)",
              }}
            >
              Une approche holistique pour équiper, inspirer et transformer les
              vies à tous les niveaux.
            </p>
          </div>
        </RevealOnScroll>

        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 100}>
              <div className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
