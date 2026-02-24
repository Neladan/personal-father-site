"use client";

import Link from "next/link";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero({
  eyebrow = "Pasteur • Auteur • Entrepreneur",
  title = "Restaurer les familles,\ninspirer la jeunesse",
  subtitle = "Pasteur principal d'ICC Cotonou. Accompagnant les couples, les jeunes et les familles vers leur destinée et leur plein potentiel en Christ.",
}: Props) {
  const [titleLine1, titleLine2] = title.split("\n");

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-eyebrow">{eyebrow}</span>
            <h1 className="hero-title">
              {titleLine1}
              <br />
              {titleLine2 ?? ""}
            </h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-cta">
              <Link href="/enseignements" className="btn btn-primary btn-lg">
                Découvrir les enseignements
              </Link>
              <Link href="/conferences" className="btn btn-secondary btn-lg">
                Événements à venir
              </Link>
            </div>
          </div>

          <div className="hero-image-wrapper animate-scale-in">
            {/* Placeholder - à remplacer par une vraie image */}
            <div
              className="hero-image"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "var(--text-lg)",
                fontWeight: 500,
                textAlign: "center",
                padding: "var(--space-4)",
              }}
            >
              Portrait
              <br />
              Professionnel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
