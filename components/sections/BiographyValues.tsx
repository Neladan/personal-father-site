import RevealOnScroll from "@/lib/RevealOnScroll";

const values = [
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
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Spiritualité",
    description:
      "Un ancrage profond dans la Parole de Dieu comme fondement de toute discernement, de toute action et de toute espérance. La foi n'est pas une option — c'est le centre.",
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
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: "Leadership",
    description:
      "Convaincre que le vrai leadership est un service — diriger c'est d'abord élever les autres, les équiper pour qu'ils atteignent leur plein potentiel.",
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
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Famille & Société",
    description:
      "La transformation des nations commence dans les foyers. Restaurer la famille, c'est poser les fondations d'une société juste, solide et durable.",
  },
];

export default function BiographyValues() {
  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll>
          <div
            className="text-center"
            style={{ marginBottom: "var(--space-12)" }}
          >
            <h2>Valeurs &amp; Convictions</h2>
            <p
              className="text-muted"
              style={{ marginTop: "var(--space-2)", fontSize: "var(--text-lg)" }}
            >
              Les piliers qui orientent chaque message, chaque livre, chaque action
            </p>
          </div>
        </RevealOnScroll>

        <div className="expertise-grid">
          {values.map((value, index) => (
            <RevealOnScroll key={value.title} delay={index * 100}>
              <div className="expertise-card">
                <div className="expertise-icon">{value.icon}</div>
                <h3 className="expertise-title">{value.title}</h3>
                <p className="expertise-description">{value.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
