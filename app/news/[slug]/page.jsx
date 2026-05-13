import { notFound } from "next/navigation";
import BlogDetailsClient from "@/components/news/BlogDetailsClient";
import { getPostBySlug, getPosts } from "@/lib/posts";

const NewsDetailsPage = async ({ params }) => {
  const article = await getPostBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allPosts = await getPosts();
  const similarNews = allPosts.filter((item) => item.slug !== article.slug).slice(0, 3);

  return <BlogDetailsClient article={article} similarNews={similarNews} />;
};

export default NewsDetailsPage;
