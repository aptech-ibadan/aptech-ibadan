// lib/serialize.js

/**
 * Serializes a Mongoose document or lean object so that it can be safely passed
 * from a Server Component to a Client Component in Next.js.
 * This converts non-serializable fields like ObjectIds and Dates into strings.
 * 
 * @template T
 * @param {T} doc 
 * @returns {T}
 */
export function serializeDoc(doc) {
  if (!doc) return doc;
  return JSON.parse(JSON.stringify(doc));
}
