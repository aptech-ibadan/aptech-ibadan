import { BASE_URL } from "@/lib/seo";
import { courseSeo } from "@/data/courseSeo";

/**
 * Deterministic sitemap of indexable public pages.
 *
 * Intentionally static: it does not read from MongoDB, so sitemap generation
 * can never fail or stall the build if the database is unreachable.
 * Routes marked noindex (e.g. `arenaCourse`) are excluded.
 */
export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/program", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/apply", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/offers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
    { path: "/accomodation", priority: 0.6, changeFrequency: "monthly" },
    { path: "/career", priority: 0.4, changeFrequency: "monthly" },
  ];

  const courseRoutes = Object.entries(courseSeo)
    .filter(([, seo]) => !seo.noindex)
    .map(([slug]) => ({
      path: `/courses/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly",
    }));

  return [...staticRoutes, ...courseRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );
}
