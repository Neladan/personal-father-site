"use client";

import Link from "next/link";
import RevealOnScroll from "@/lib/RevealOnScroll";

// Données simulées - à remplacer par des vraies données CMS
const upcomingEvent = {
  slug: "conference-leadership-2026",
  title: "Conférence Leadership Transformationnel",
  date: new Date("2026-03-15"),
  location: "Paris, France",
  isOnline: false,
};

export default function UpcomingEvent() {
  const day = upcomingEvent.date.getDate().toString().padStart(2, "0");
  const month = upcomingEvent.date
    .toLocaleDateString("fr-FR", { month: "short" })
    .toUpperCase();

  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll>
          <div
            className="text-center"
            style={{ marginBottom: "var(--space-8)" }}
          >
            <h2>Prochain événement</h2>
            <p className="text-muted" style={{ marginTop: "var(--space-1)" }}>
              Rejoignez-nous pour un moment de transformation
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div
            className="event-card"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="event-date">
              <span className="event-day">{day}</span>
              <span className="event-month">{month}</span>
            </div>

            <div className="event-info">
              <h3 className="event-title">{upcomingEvent.title}</h3>
              <p className="event-location">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {upcomingEvent.location}
                {upcomingEvent.isOnline && " • En ligne"}
              </p>
            </div>

            <div className="event-cta">
              <Link
                href={`/conferences/${upcomingEvent.slug}`}
                className="btn btn-primary"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="text-center" style={{ marginTop: "var(--space-6)" }}>
            <Link href="/conferences" className="btn btn-secondary">
              Voir tous les événements
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
