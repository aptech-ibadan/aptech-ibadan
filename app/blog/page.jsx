import BlogHero from "@/components/news/BlogHero";
import BlogLibrary from "@/components/news/BlogLibrary";
import NewsletterCTA from "@/components/news/NewsletterCTA";
import { newsItems } from "@/data/newsData";

const BlogPage = () => {
  return (
    <main>
      <BlogHero />
      <BlogLibrary items={newsItems} />
      <NewsletterCTA />
    </main>
  );
};

export default BlogPage;
