"use client";

import { useState, FormEvent } from "react";
import RevealOnScroll from "@/lib/RevealOnScroll";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulation d'appel API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Intégrer avec un vrai service de newsletter
    setStatus("success");
    setEmail("");

    // Reset après 3 secondes
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="section newsletter-section">
      <div className="container">
        <RevealOnScroll>
          <div className="newsletter-content">
            <h2 className="newsletter-title">Restez connecté</h2>
            <p className="newsletter-subtitle">
              Recevez chaque semaine des enseignements inspirants et les
              dernières nouvelles directement dans votre boîte mail.
            </p>

            {status === "success" ? (
              <div
                style={{
                  padding: "var(--space-3)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "var(--radius-md)",
                  color: "white",
                }}
              >
                ✓ Merci ! Vérifiez votre boîte mail pour confirmer votre
                inscription.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="newsletter-input"
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Envoi..." : "S'abonner"}
                </button>
              </form>
            )}

            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "rgba(255, 255, 255, 0.5)",
                marginTop: "var(--space-2)",
              }}
            >
              Nous respectons votre vie privée. Désabonnement possible à tout
              moment.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
