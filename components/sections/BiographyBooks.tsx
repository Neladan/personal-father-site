import RevealOnScroll from "@/lib/RevealOnScroll";
import type { BookItem } from "@/lib/data/biography";

type Props = {
  books: BookItem[];
};

export default function BiographyBooks({ books }: Props) {
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
            <h2>Ouvrages publiés</h2>
            <p
              className="text-muted"
              style={{ marginTop: "var(--space-2)", fontSize: "var(--text-lg)" }}
            >
              Des livres qui ont équipé des milliers de leaders à travers le monde
            </p>
          </div>
        </RevealOnScroll>

        <div className="books-grid">
          {books.map((book, index) => (
            <RevealOnScroll key={book.slug} delay={index * 100}>
              <div className="book-card">
                {/* Cover placeholder */}
                <div className="book-cover">
                  <span className="book-cover-year">{book.year}</span>
                </div>
                <div className="book-info">
                  <span className="book-year">{book.year}</span>
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-subtitle">{book.subtitle}</p>
                  <p className="book-description">{book.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
