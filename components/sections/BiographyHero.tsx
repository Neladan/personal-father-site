import RevealOnScroll from "@/lib/RevealOnScroll";
import type { biographyIntro } from "@/lib/data/biography";

type Props = {
  data: typeof biographyIntro;
};

export default function BiographyHero({ data }: Props) {
  return (
    <section className="biography-hero">
      <div className="container">
        <div className="biography-hero-grid">
          {/* Image placeholder */}
          <RevealOnScroll>
            <div className="biography-hero-image-wrapper">
              <div className="biography-hero-image">
                Portrait
                <br />
                Professionnel
              </div>
            </div>
          </RevealOnScroll>

          {/* Content */}
          <RevealOnScroll delay={150}>
            <div className="biography-hero-content">
              <span className="hero-eyebrow">{data.eyebrow}</span>
              <h1 className="hero-title">{data.title}</h1>

              <blockquote className="biography-hero-quote">
                {data.quote}
              </blockquote>

              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-muted biography-hero-para">
                  {p}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
