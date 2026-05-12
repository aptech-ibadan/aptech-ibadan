import { notFound } from "next/navigation";
import BlogDetailsClient from "@/components/news/BlogDetailsClient";
import { getNewsBySlug, newsItems } from "@/data/newsData";

const NewsDetailsPage = ({ params }) => {
  const article = getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const similarNews = newsItems
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return <BlogDetailsClient article={article} similarNews={similarNews} />;
};

export default NewsDetailsPage;
