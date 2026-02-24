export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type BookItem = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  description: string;
};

export const biographyIntro = {
  eyebrow: "Pasteur · Auteur · Entrepreneur",
  title: "Teddy Ngbanda",
  quote:
    "Passionné de Dieu et missionnaire dans l'âme, une vie dédiée à la restauration des familles et l'inspiration de la jeunesse.",
  paragraphs: [
    "Teddy Ngbanda est le pasteur principal d'Impact Centre Chrétien (ICC) Cotonou au Bénin depuis 2012. Animé par un profond désir de voir le Royaume de Dieu s'étendre, il œuvre activement au Bénin, en Afrique de l'Ouest et dans le monde entier.",
    "Avant de s'établir au Bénin sous l'impulsion du Pasteur Yvan Castanou, il a servi avec dévouement pendant plus de cinq ans au sein du ministère des jeunes d'ICC en France. Diplômé de l'École Supérieure de Publicité (ESP) de Paris, Teddy Ngbanda se distingue également en tant qu'entrepreneur et musicien.",
    "Auteur prolixe, il a rédigé plusieurs ouvrages percutants sur la destinée et la famille. Il partage sa vie et son ministère avec son épouse Nadine, pasteur assistante, avec qui il a la joie d'élever leurs trois enfants.",
  ],
};

export const timeline: TimelineItem[] = [
  {
    year: "Formation",
    title: "Études à l'ESP Paris",
    description:
      "Teddy Ngbanda obtient son diplôme à l'École Supérieure de Publicité (ESP) de Paris, forgeant ainsi de solides compétences en communication et entrepreneuriat.",
  },
  {
    year: "Débuts",
    title: "Ministère des Jeunes ICC",
    description:
      "Il sert pendant plus de cinq ans au sein du ministère des jeunes d'Impact Centre Chrétien (ICC) en France, inspirant et accompagnant une génération vers son potentiel divin.",
  },
  {
    year: "2012",
    title: "Installation au Bénin",
    description:
      "Établi par le Pasteur Yvan Castanou, il prend la direction spirituelle d'ICC Cotonou, devenant le pasteur principal des églises ICC au Bénin.",
  },
  {
    year: "Écriture",
    title: "Impact par la littérature",
    description:
      "Publication de plusieurs ouvrages majeurs, dont la série « S.T.O.P. Ma vie doit compter », préfacée par le Pasteur Yvan Castanou, devenant des ressources pour la francophonie.",
  },
  {
    year: "Aujourd'hui",
    title: "Un ministère holistique",
    description:
      "En tant que pasteur, auteur, entrepreneur et musicien, Teddy Ngbanda continue d'étendre son influence, œuvrant sans relâche pour la restauration des familles.",
  },
];

export const books: BookItem[] = [
  {
    slug: "stop-ma-vie-doit-compter",
    title: "S.T.O.P. Ma vie doit compter",
    subtitle: "Découvrir et accomplir sa destinée (Vol. I & II)",
    year: 2020,
    description:
      "Un ouvrage puissant, préfacé par le pasteur Yvan Castanou, qui offre des clés spirituelles et pratiques pour refuser le statu quo et s'engager pleinement sur le chemin de sa destinée.",
  },
  {
    slug: "la-voix-que-tu-entends",
    title: "La voix que tu entends, tracera ta voie",
    subtitle: "L'importance de l'écoute spirituelle",
    year: 2021,
    description:
      "Un livre révélateur sur l'impact de ce que nous écoutons. Teddy Ngbanda y enseigne comment discerner la voix de Dieu au milieu des bruits du monde pour être conduit vers les bons choix.",
  },
  {
    slug: "aimez-la-respectez-le",
    title: "Aimez-la... Respectez-le",
    subtitle: "Renforcer les liens du mariage",
    year: 2022,
    description:
      "Un guide fondé sur des principes bibliques pour la restauration et la solidité des couples. Une ressource essentielle pour bâtir une relation conjugale épanouie et durable.",
  },
  {
    slug: "ils-sont-partis",
    title: "Ils sont partis",
    subtitle: "Surmonter l'abandon et le rejet",
    year: 2023,
    description:
      "Face aux blessures du départ et de la séparation, ce livre apporte guérison et réconfort, rappelant que l'absence de certains ne bloque pas le plan merveilleux de Dieu pour nos vies.",
  },
];
