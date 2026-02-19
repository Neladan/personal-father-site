import RevealOnScroll from "@/lib/RevealOnScroll";
import type { TimelineItem } from "@/lib/data/biography";

type Props = {
  items: TimelineItem[];
};

export default function BiographyTimeline({ items }: Props) {
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-bg-subtle)" }}
    >
      <div className="container">
        <RevealOnScroll>
          <div
            className="text-center"
            style={{ marginBottom: "var(--space-12)" }}
          >
            <h2>Parcours</h2>
            <p
              className="text-muted"
              style={{ marginTop: "var(--space-2)", fontSize: "var(--text-lg)" }}
            >
              Une vie façonnée par la foi, la persévérance et une vision claire
            </p>
          </div>
        </RevealOnScroll>

        <div className="timeline">
          {items.map((item, index) => (
            <RevealOnScroll key={item.year} delay={index * 80}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
