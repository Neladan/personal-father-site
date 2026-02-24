import { articles } from "@/lib/data/articles";
import EnseignementsContent from "@/components/blog/EnseignementsContent";
import { mapSanityPostToArticle } from "@/lib/sanity/mappers";
import { BLOG_REVALIDATE_SECONDS, getAllPosts } from "@/lib/sanity/queries";

export const revalidate = BLOG_REVALIDATE_SECONDS;

export default async function EnseignementsPage() {
  const sanityPosts = await getAllPosts();
  const cmsArticles = sanityPosts.map(mapSanityPostToArticle);
  const pageArticles = cmsArticles.length > 0 ? cmsArticles : articles;

  return <EnseignementsContent articles={pageArticles} />;
}
