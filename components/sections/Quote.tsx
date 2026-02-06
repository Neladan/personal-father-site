"use client";

import RevealOnScroll from "@/lib/RevealOnScroll";

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({
  text = "La vraie transformation commence là où la foi rencontre l'action. Chaque leader est appelé à être un pont entre le ciel et la terre.",
  author = "Teddy NGBANDA",
}: Partial<QuoteProps>) {
  return (
    <section className="section quote-section">
      <div className="container">
        <RevealOnScroll>
          <div className="quote-content">
            <p className="quote-text">{text}</p>
            <span className="quote-author">— {author}</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
