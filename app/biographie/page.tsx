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
    "Découvrez le parcours de Teddy Ngbanda, pasteur, auteur et conférencier international. Une vie au service de l'élévation des hommes et des nations.",
  openGraph: {
    title: "Biographie — Teddy Ngbanda",
    description:
      "Pasteur, auteur et conférencier international — découvrez son parcours de vie et de foi.",
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
