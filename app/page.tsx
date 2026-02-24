import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import UpcomingEvent from "@/components/sections/UpcomingEvent";
import Newsletter from "@/components/sections/Newsletter";

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Teddy NGBANDA",
  jobTitle: ["Pasteur", "Auteur", "Entrepreneur"],
  description:
    "Pasteur principal d'ICC Cotonou, Auteur et Entrepreneur dédié à la restauration des familles et l'inspiration de la jeunesse.",
  url: "https://teddy-ngbanda.com",
  sameAs: [
    "https://youtube.com/@teddy-ngbanda",
    "https://facebook.com/teddy.ngbanda",
    "https://twitter.com/teddy_ngbanda",
    "https://linkedin.com/in/teddy-ngbanda",
  ],
  knowsAbout: ["Spiritualité", "Famille", "Couple", "Jeunesse", "Destinée"],
  worksFor: {
    "@type": "Organization",
    name: "Impact Centre Chrétien (ICC) Cotonou",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Quote />
      <ExpertiseGrid />
      <ArticlesPreview />
      <UpcomingEvent />
      <Newsletter />
    </>
  );
}
