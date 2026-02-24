"use client";

import RevealOnScroll from "@/lib/RevealOnScroll";

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({
  text = "Ta destinée n'est pas une option, c'est une responsabilité. Elle se bâtit sur des choix conscients, à l'écoute de la voix de Dieu et ancrée dans de solides valeurs familiales.",
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
