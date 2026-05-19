import BlogHero from "@/components/news/BlogHero";
import BlogLibrary from "@/components/news/BlogLibrary";
import NewsletterCTA from "@/components/news/NewsletterCTA";
import { getPosts } from "@/lib/posts";

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
