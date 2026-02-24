"use client";

import { useState, FormEvent } from "react";
import RevealOnScroll from "@/lib/RevealOnScroll";
import type { SanityNewsletterSection } from "@/lib/sanity/types";

type Props = {
  content?: SanityNewsletterSection;
  tag?: string;
};

export default function Newsletter({ content, tag = "website-subscriber" }: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      setStatus("error");
      setMessage("Veuillez saisir une adresse email valide.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail, tag }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.message ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setEmail("");
      setMessage(
        content?.successMessage ??
          "✓ Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.",
      );
    } catch {
      setStatus("error");
      setMessage("Impossible de traiter votre inscription pour le moment.");
    }
  };

  return (
    <section className="section newsletter-section">
      <div className="container">
        <RevealOnScroll>
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              {content?.title ?? "Restez connecté"}
            </h2>
            <p className="newsletter-subtitle">
              {content?.subtitle ??
                "Recevez chaque semaine des enseignements inspirants et les dernières nouvelles directement dans votre boîte mail."}
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
                {message}
              </div>
            ) : (
              <>
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

                {status === "error" && (
                  <p
                    style={{
                      marginTop: "var(--space-3)",
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    {message}
                  </p>
                )}
              </>
            )}

            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "rgba(255, 255, 255, 0.5)",
                marginTop: "var(--space-2)",
              }}
            >
              {content?.privacyNote ??
                "Nous respectons votre vie privée. Désabonnement possible à tout moment."}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
