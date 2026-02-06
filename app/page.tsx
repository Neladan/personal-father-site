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
  jobTitle: ["Pasteur", "Auteur", "Conférencier"],
  description:
    "Pasteur, Auteur et Conférencier international accompagnant les leaders vers leur plein potentiel.",
  url: "https://teddy-ngbanda.com",
  sameAs: [
    "https://youtube.com/@teddy-ngbanda",
    "https://facebook.com/teddy.ngbanda",
    "https://twitter.com/teddy_ngbanda",
    "https://linkedin.com/in/teddy-ngbanda",
  ],
  knowsAbout: [
    "Spiritualité",
    "Leadership",
    "Développement personnel",
    "Famille",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Ministère Teddy NGBANDA",
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
