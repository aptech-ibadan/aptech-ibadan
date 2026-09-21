import { notFound } from "next/navigation";
import BlogDetailsClient from "@/components/news/BlogDetailsClient";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const article = await getPostBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const image = article.heroImage || "/og-image.jpg";

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/news/${article.slug}`),
      images: [{ url: image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [image],
    },
  };
}

const NewsDetailsPage = async ({ params }) => {
  const article = await getPostBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allPosts = await getPosts();
  const similarNews = allPosts
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return <BlogDetailsClient article={article} similarNews={similarNews} />;
};

export default NewsDetailsPage;
