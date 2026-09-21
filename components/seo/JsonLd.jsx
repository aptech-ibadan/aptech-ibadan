/**
 * Renders a JSON-LD structured-data block.
 *
 * Kept as a plain (server-compatible) component so it can be reused from both
 * server and client components without duplicating <script> markup.
 */
export default function JsonLd({ data, id }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      id={id}
      // JSON.stringify never emits "</script>" for our controlled data, and the
      // payload is generated in-repo (not user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
