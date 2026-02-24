import type { Metadata } from "next";
import { biographyIntro, timeline, books } from "@/lib/data/biography";
import BiographyHero from "@/components/sections/BiographyHero";
import BiographyTimeline from "@/components/sections/BiographyTimeline";
import BiographyValues from "@/components/sections/BiographyValues";
import BiographyBooks from "@/components/sections/BiographyBooks";
import Newsletter from "@/components/sections/Newsletter";
import { BLOG_REVALIDATE_SECONDS, getAboutPageContent, getNewsletterSection } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Biographie — Teddy Ngbanda",
  description:
    "Découvrez le parcours de Teddy Ngbanda, pasteur, auteur et entrepreneur. Une vie dédiée à la restauration des familles et l'inspiration de la jeunesse.",
  openGraph: {
    title: "Biographie — Teddy Ngbanda",
    description:
      "Pasteur principal d'ICC Cotonou, auteur et entrepreneur — découvrez son parcours de vie et de foi.",
  },
};

export const revalidate = BLOG_REVALIDATE_SECONDS;

export default async function BiographiePage() {
  const [aboutPageContent, newsletterContent] = await Promise.all([
    getAboutPageContent(),
    getNewsletterSection(),
  ]);

  const biographyHeroData = aboutPageContent
    ? {
        eyebrow: aboutPageContent.eyebrow,
        title: aboutPageContent.title,
        quote: aboutPageContent.quote,
        paragraphs: aboutPageContent.paragraphs,
      }
    : biographyIntro;

  return (
    <>
      <BiographyHero data={biographyHeroData} />
      <BiographyTimeline items={timeline} />
      <BiographyValues />
      <BiographyBooks books={books} />
      <Newsletter content={newsletterContent ?? undefined} />
    </>
  );
}
