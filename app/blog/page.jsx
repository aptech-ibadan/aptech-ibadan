import BlogHero from "@/components/news/BlogHero";
import BlogLibrary from "@/components/news/BlogLibrary";
import NewsletterCTA from "@/components/news/NewsletterCTA";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog & Tech News",
  description:
    "News, programme updates and technology insights from Aptech Ibadan — read the latest articles from our IT training centre.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Tech News | Aptech Ibadan",
    description:
      "News, programme updates and technology insights from Aptech Ibadan.",
    url: "/blog",
  },
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <main>
      <BlogHero />
      <BlogLibrary items={posts} />

      <NewsletterCTA />
    </main>
  );
};

export default BlogPage;
