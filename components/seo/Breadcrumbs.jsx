import Link from "next/link";

/**
 * Visible, accessible breadcrumb trail.
 * Pair with `breadcrumbJsonLd()` from `@/lib/seo` for the matching structured data.
 *
 * @param {{ items: { name: string, path: string }[], className?: string }} props
 */
export default function Breadcrumbs({ items = [], className = "" }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-[#FFC107] font-medium"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gray-600">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
