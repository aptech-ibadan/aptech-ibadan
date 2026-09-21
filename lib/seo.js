/**
 * Shared SEO helpers.
 *
 * Everything here is derived from information already present in the
 * repository. No business facts are invented — if a value is not verified in
 * the codebase it is deliberately omitted.
 */

const RAW_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://aptechibadan.com";

/** Canonical production origin, without a trailing slash. */
export const BASE_URL = RAW_BASE_URL.replace(/\/+$/, "");

/** Stable identifier for the organisation node (referenced by other schemas). */
export const ORG_ID = `${BASE_URL}/#organization`;

/** Matches a Google Analytics 4 measurement ID, e.g. `G-XXXXXXXXXX`. */
export const GA4_ID_PATTERN = /^G-[A-Z0-9]{6,}$/i;

/** Build an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/") {
  if (!path) return BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** True when a value looks like a real GA4 measurement ID. */
export function isValidGa4Id(id) {
  return typeof id === "string" && GA4_ID_PATTERN.test(id.trim());
}

/**
 * Schema.org `EducationalOrganization` for Aptech Ibadan.
 * Values below are verified from `app/contact/page.jsx` and the branding
 * assets. Opening hours, founding year, ratings and fees are intentionally
 * omitted because they are not present in the repository.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: "Aptech Ibadan",
    alternateName: "Aptech Ibadan IT Training Centre",
    url: BASE_URL,
    logo: absoluteUrl("/images/branding/aptech-logo.png"),
    image: absoluteUrl("/og-image.jpg"),
    description:
      "Aptech Ibadan is an IT training centre offering career-focused programmes and short courses in software development, cybersecurity, networking, multimedia, data science and related technology skills.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Westone Building, beside the office of the Governor's Wife, Agodi",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "NG",
    },
    telephone: "+2347070491555",
    email: "info@aptechibadan.com",
    areaServed: {
      "@type": "City",
      name: "Ibadan",
    },
    sameAs: [
      "https://instagram.com/aptechagodi",
      "https://www.facebook.com/aptechagodi",
      "https://instagram.com/aptechringroad",
      "https://www.facebook.com/aptechringroad",
      "https://instagram.com/aptechbodija",
      "https://www.facebook.com/aptechbodija",
    ],
  };
}

/**
 * Schema.org `BreadcrumbList`.
 * @param {{ name: string, path: string }[]} items Ordered trail, homepage first.
 */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Schema.org `Course`.
 * Only fields that are actually rendered on the page are accepted, so callers
 * cannot accidentally pass prices, ratings or outcomes.
 * @param {{ name: string, description: string, path: string, timeRequired?: string }} course
 */
export function courseJsonLd({ name, description, path, timeRequired }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: "Aptech Ibadan",
      url: BASE_URL,
    },
  };

  if (timeRequired) data.timeRequired = timeRequired;

  return data;
}
