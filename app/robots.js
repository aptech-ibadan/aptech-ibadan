import { BASE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Private/administrative areas only. Public pages (and their assets,
        // CSS, JS and images) stay crawlable.
        disallow: ["/api/", "/admin/", "/admin"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
