import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import Newsletter from "@/components/sections/Newsletter";
import { articles } from "@/lib/data/articles";
import { mapSanityPostToArticle } from "@/lib/sanity/mappers";
import {
  BLOG_REVALIDATE_SECONDS,
  getAllPosts,
  getHomePageContent,
  getNewsletterSection,
} from "@/lib/sanity/queries";

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
  knowsAbout: ["Foi", "Famille", "Couple", "Jeunesse", "Destinée"],
  worksFor: {
    "@type": "Organization",
    name: "Impact Centre Chrétien (ICC) Cotonou",
  },
};

export const revalidate = BLOG_REVALIDATE_SECONDS;

export default async function Home() {
  const [homePageContent, posts, newsletterContent] = await Promise.all([
    getHomePageContent(),
    getAllPosts(),
    getNewsletterSection(),
  ]);

  const cmsArticles = posts.map(mapSanityPostToArticle);
  const previewArticles = cmsArticles.length > 0 ? cmsArticles : articles;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        eyebrow={homePageContent?.heroEyebrow}
        title={homePageContent?.heroTitle}
        subtitle={homePageContent?.heroSubtitle}
      />
      <Quote
        text={homePageContent?.quoteText}
        author={homePageContent?.quoteAuthor}
      />
      <ExpertiseGrid />
      <ArticlesPreview articles={previewArticles} />
      {/* <UpcomingEvent /> */}
      <Newsletter content={newsletterContent ?? undefined} />
    </>
  );
}
