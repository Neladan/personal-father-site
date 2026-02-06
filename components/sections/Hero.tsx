"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-eyebrow">
              Pasteur • Auteur • Conférencier
            </span>
            <h1 className="hero-title">
              Inspirer les cœurs,
              <br />
              transformer les nations
            </h1>
            <p className="hero-subtitle">
              Une voix prophétique pour cette génération. Accompagnant les
              leaders, les familles et les communautés vers leur plein potentiel
              en Christ.
            </p>
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
