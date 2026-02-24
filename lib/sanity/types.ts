import type { TypedObject } from "sanity";

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  noIndex?: boolean;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
  };
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  publishedAt: string;
  body: TypedObject[];
  tags: string[];
  seo?: SeoFields;
};

export type SanityNewsletterSection = {
  title: string;
  subtitle: string;
  privacyNote: string;
  successMessage: string;
};

export type SanityGlobalSeo = {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  defaultOgImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
  };
  keywords: string[];
};

export type SanityHomePage = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  quoteText: string;
  quoteAuthor: string;
};

export type SanityAboutPage = {
  eyebrow: string;
  title: string;
  quote: string;
  paragraphs: string[];
};
