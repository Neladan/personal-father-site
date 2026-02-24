import type { Metadata } from "next";
import Link from "next/link";
import { biographyIntro, timeline, books } from "@/lib/data/biography";
import BiographyHero from "@/components/sections/BiographyHero";
import BiographyTimeline from "@/components/sections/BiographyTimeline";
import BiographyValues from "@/components/sections/BiographyValues";
import BiographyBooks from "@/components/sections/BiographyBooks";
import Newsletter from "@/components/sections/Newsletter";

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

export default function BiographiePage() {
  return (
    <>
      <BiographyHero data={biographyIntro} />
      <BiographyTimeline items={timeline} />
      <BiographyValues />
      <BiographyBooks books={books} />
      <Newsletter />
    </>
  );
}
