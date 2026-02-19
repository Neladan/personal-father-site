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
  eyebrow: "Pasteur · Auteur · Conférencier",
  title: "Teddy Ngbanda",
  quote:
    "Ma vie entière est une réponse à un seul appel : élever des hommes et des nations vers leur destinée en Dieu.",
  paragraphs: [
    "Né au cœur de l'Afrique, Teddy Ngbanda a traversé des épreuves qui auraient pu briser un homme ordinaire. C'est précisément dans ces moments que s'est forgée une vision : celle d'une Afrique réconciliée avec sa propre grandeur, à travers des hommes et des femmes transformés par la Parole de Dieu.",
    "Pasteur depuis plus de vingt ans, auteur de plusieurs ouvrages de référence, Teddy parcourt le monde pour porter un message qui touche aussi bien la sphère spirituelle que les enjeux de leadership, de famille et de transformation sociale.",
    "Son approche unique — ancrant les principes bibliques dans des réalités contemporaines — lui a valu une audience internationale et la confiance de leaders politiques, économiques et religieux sur trois continents.",
  ],
};

export const timeline: TimelineItem[] = [
  {
    year: "1975",
    title: "Naissance à Kinshasa",
    description:
      "Né dans une famille chrétienne de Kinshasa (RDC), Teddy grandit nourri de la Parole de Dieu et des valeurs d'excellence inculquées par ses parents.",
  },
  {
    year: "1993",
    title: "Conversion et appel",
    description:
      "À l'âge de 18 ans, une rencontre personnelle et transformatrice avec Dieu marque le tournant de sa vie. Il reçoit un appel clair au ministère pastoral et à l'enseignement.",
  },
  {
    year: "1998",
    title: "Ordination pastorale",
    description:
      "Après plusieurs années de formation théologique et de service dans diverses communautés, Teddy est ordonné pasteur. Il fonde sa première communauté à Kinshasa.",
  },
  {
    year: "2003",
    title: "Premier ouvrage publié",
    description:
      "Publication de son premier livre, rapidement adopté comme référence dans les cercles de leadership chrétien en Afrique francophone.",
  },
  {
    year: "2008",
    title: "Rayonnement international",
    description:
      "Sa réputation d'orateur et d'enseignant dépasse les frontières africaines. Il commence à intervenir lors de conférences internationales en Europe, en Amérique du Nord et en Asie.",
  },
  {
    year: "2015",
    title: "Fondation de l'Institut",
    description:
      "Création d'un institut de formation au leadership chrétien, qui a depuis formé des centaines de leaders à travers le continent africain.",
  },
  {
    year: "Aujourd'hui",
    title: "Une voix pour les nations",
    description:
      "Teddy Ngbanda continue de voyager, d'enseigner et d'écrire, portant une vision inchangée : élever des leaders intègres pour transformer les nations depuis leurs fondements.",
  },
];

export const books: BookItem[] = [
  {
    slug: "leadership-au-coeur-de-dieu",
    title: "Le Leadership au cœur de Dieu",
    subtitle: "Principes bibliques pour diriger avec excellence",
    year: 2003,
    description:
      "Un ouvrage fondateur qui remet les fondements du leadership dans leur contexte originel — la Parole de Dieu. Traduit en plusieurs langues, il reste une référence incontournable.",
  },
  {
    slug: "famille-premiere-nation",
    title: "La Famille, première nation",
    subtitle: "Reconstruire la société par le foyer",
    year: 2009,
    description:
      "Une analyse approfondie du rôle de la famille dans la reconstruction des nations africaines, avec des applications pratiques pour les couples et les parents.",
  },
  {
    slug: "guerison-des-nations",
    title: "La Guérison des nations",
    subtitle: "Une vision prophétique pour l'Afrique du XXIe siècle",
    year: 2017,
    description:
      "Son œuvre la plus ambitieuse : un regard prophétique sur le destin de l'Afrique et la responsabilité des croyants dans la transformation de leur continent.",
  },
];
