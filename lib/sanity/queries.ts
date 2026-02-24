import { sanityClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import type {
  SanityAboutPage,
  SanityGlobalSeo,
  SanityHomePage,
  SanityNewsletterSection,
  SanityPost,
} from "@/lib/sanity/types";

export const BLOG_REVALIDATE_SECONDS = 300;

const postListQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  body,
  tags,
  seo
}`;

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  body,
  tags,
  seo
}`;

const relatedPostsQuery = `*[_type == "post" && slug.current != $slug && count((tags[])[@ in $tags]) > 0] | order(publishedAt desc)[0...$limit]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  body,
  tags,
  seo
}`;

const newsletterSectionQuery = `*[_type == "newsletterSection"][0]{
  title,
  subtitle,
  privacyNote,
  successMessage
}`;

const globalSeoQuery = `*[_type == "globalSeoSettings"][0]{
  siteTitle,
  siteDescription,
  siteUrl,
  defaultOgImage,
  keywords
}`;

const homePageQuery = `*[_type == "homePage"][0]{
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  quoteText,
  quoteAuthor
}`;

const aboutPageQuery = `*[_type == "aboutPage"][0]{
  eyebrow,
  title,
  quote,
  paragraphs
}`;

export async function getAllPosts() {
  if (!isSanityConfigured) return [];
  try {
    return await sanityClient.fetch<SanityPost[]>(postListQuery, {}, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityPost | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: BLOG_REVALIDATE_SECONDS } },
    );
  } catch {
    return null;
  }
}

export async function getRelatedPosts(slug: string, tags: string[], limit = 3) {
  if (!isSanityConfigured || tags.length === 0) return [];
  try {
    return await sanityClient.fetch<SanityPost[]>(
      relatedPostsQuery,
      { slug, tags, limit },
      { next: { revalidate: BLOG_REVALIDATE_SECONDS } },
    );
  } catch {
    return [];
  }
}

export async function getNewsletterSection() {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityNewsletterSection | null>(
      newsletterSectionQuery,
      {},
      {
        next: { revalidate: BLOG_REVALIDATE_SECONDS },
      },
    );
  } catch {
    return null;
  }
}

export async function getGlobalSeoSettings() {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityGlobalSeo | null>(globalSeoQuery, {}, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });
  } catch {
    return null;
  }
}

export async function getHomePageContent() {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityHomePage | null>(homePageQuery, {}, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });
  } catch {
    return null;
  }
}

export async function getAboutPageContent() {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<SanityAboutPage | null>(aboutPageQuery, {}, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });
  } catch {
    return null;
  }
}
