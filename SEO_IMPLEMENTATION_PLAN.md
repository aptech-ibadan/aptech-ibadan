# Aptech Ibadan — SEO, Metadata, Local Search & Conversion Plan

> Scope: `aptech-ibadan/` (the active Next.js 14 App Router project).
> Constraint: no redesign, no invented business facts, no removed functionality.

---

## 1. Audit Summary (what already exists vs. what is missing)

### Already in place (do not regress)

- [`app/layout.jsx`](app/layout.jsx): concise global metadata, title template,
  description, authors/creator/publisher/applicationName, robots, Open Graph,
  Twitter, `alternates.canonical = BASE_URL`, icons, `lang="en-NG"`.
- Google Analytics already has **no** hard-coded fallback ID
  (`const GA_ID = process.env.NEXT_PUBLIC_GA_ID`).
- The Chatbase identifier `hTFADsLnPwYQlAoiwaq1t` is already isolated to the
  Chatbase widget only.
- **No `keywords` metadata exists anywhere** (grep = 0 results). Nothing to strip.

### Missing / broken

| Area                                  | Current state                                                                   | Action                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| GA4 validation                        | Loads for any `NEXT_PUBLIC_GA_ID` value                                         | Only load when it matches `G-XXXXXXXXXX`                         |
| `verification.google`                 | Renders empty string when env missing                                           | Render only when set                                             |
| Structured data                       | none                                                                            | `EducationalOrganization`, `Course`, `BreadcrumbList`, `WebSite` |
| Sitemap                               | none                                                                            | create `app/sitemap.js`                                          |
| Robots                                | none                                                                            | create `app/robots.js`                                           |
| Homepage metadata                     | `app/page.jsx` is `"use client"` → cannot export `metadata`                     | split into server page + client child                            |
| Page metadata                         | only `/gallery` (and it double-appends the brand)                               | per-route metadata + canonicals                                  |
| Client routes                         | `/program`, `/apply`, `/career`, `/contact`, `/accomodation` are `"use client"` | add nested server `layout.jsx` for metadata                      |
| OG image                              | referenced `/og-image.jpg` does not exist                                       | generate a real 1200×630 image                                   |
| Canonicals                            | root canonical leaks to all routes                                              | every indexable page canonicalises to itself                     |
| `/news/[slug]`                        | no metadata                                                                     | `generateMetadata` + canonical                                   |
| `/chat`, `/admin`, `/admin/dashboard` | indexable                                                                       | `robots: { index: false }`                                       |
| Internal linking                      | nav/footer only                                                                 | add cross-links: courses ↔ related programmes ↔ admissions       |
| Image alt                             | `"background students"`, `"Work"`                                               | descriptive alt / empty for decorative                           |
| Env docs                              | none                                                                            | create `.env.example`                                            |

### Verified facts available in the repo (safe to reuse)

- Base URL: `https://aptechibadan.com` (`layout.jsx`, `OpenDay.jsx`).
- Email: `info@aptechibadan.com` (`app/contact/page.jsx`).
- Campuses / phones (`app/contact/page.jsx`):
  - Agodi — Westone Building, beside the office of the Governor's Wife, Agodi, Ibadan — `07070491555`
  - Ring Road — 93 M.K.O Abiola Way, adjacent Sunrise Mall, Ibadan — `08064634830`
  - Bodija — No. 38B, Ladoke Akintola Avenue, Bodija, Ibadan — `08036518761`
- Socials (`app/contact/page.jsx`): `instagram.com/aptech{agodi|ringroad|bodija}`,
  `facebook.com/aptech{agodi|ringroad|bodija}`.
- Logo asset: `/images/branding/aptech-logo.png`.
- Course catalogue: `app/courses/[slug]/page.jsx` (`courseData`).

### Facts that are NOT in the repo (must stay omitted)

Opening hours, founding year claims, certifications, prices/fees, ratings,
reviews, instructors, gua­ranteed outcomes, single "official" social handle.

---

## 2. Target search intents

| Intent                                        | Landing page                                    | Title                                                 |
| --------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- | ---------------------- | ------- |
| IT training in Ibadan / IT training institute | `/`                                             | `IT Training in Ibadan                                | Aptech Ibadan`         |
| IT courses & programmes                       | `/program`                                      | `IT Courses & Programmes in Ibadan                    | Aptech Ibadan`         |
| Software development course (ACCP)            | `/courses/adse`                                 | `Software Development Course in Ibadan                | ACCP with AI           | Aptech` |
| Cybersecurity & networking (ACNS)             | `/courses/acns`                                 | `Cybersecurity & Networking Course in Ibadan          | ACNS`                  |
| Multimedia / UI-UX (Arena)                    | `/courses/amsp`                                 | `Multimedia & UI/UX Courses in Ibadan                 | Arena Multimedia`      |
| Realtime 3D / game art                        | `/courses/realtime3d`                           | `Realtime 3D & Game Art Course in Ibadan              | Aptech`                |
| VFX / animation / film                        | `/courses/vfx`                                  | `VFX, Animation & Film Course in Ibadan               | Aptech`                |
| Data science / AI / ML                        | `/courses/dsaiml`                               | `Data Science, AI & Machine Learning Course in Ibadan | Aptech`                |
| Network administration                        | `/courses/nwad`                                 | `Network Administration Course in Ibadan              | Aptech`                |
| Cybersecurity & digital forensics             | `/courses/cyforen`                              | `Cybersecurity & Digital Forensics Course in Ibadan   | Aptech`                |
| Short IT courses / skill builders             | `/courses/smartstack`, `/courses/arenasmartpro` | `Short IT Courses & Skill Builders in Ibadan          | Aptech Ibadan`         |
| Admissions                                    | `/apply`                                        | `Aptech Ibadan Admission                              | Apply for IT Courses`  |
| Contact / visit                               | `/contact`                                      | `Contact Aptech Ibadan                                | IT Training Centre`    |
| Accommodation                                 | `/accomodation`                                 | `Student Accommodation in Ibadan                      | Aptech Ibadan`         |
| Blog / news                                   | `/blog`                                         | `Blog & Tech News                                     | Aptech Ibadan`         |
| Offers                                        | `/offers`                                       | `Discount Offers                                      | Aptech Ibadan`         |
| Gallery                                       | `/gallery`                                      | `Gallery                                              | Aptech Ibadan`         |
| About                                         | `/about`                                        | `About Aptech Ibadan                                  | IT Training in Ibadan` |
| Careers                                       | `/career`                                       | `Careers & Job Openings                               | Aptech Ibadan`         |

---

## 3. Phases

### Phase 1 — SEO foundation (reusable helpers)

- `lib/seo.js` — `BASE_URL`, `absoluteUrl()`, `organizationJsonLd()`,
  `breadcrumbJsonLd()`, `courseJsonLd()`, `GA4_ID_PATTERN`.
- `components/seo/JsonLd.jsx` — renders `<script type="application/ld+json">`.
- `components/seo/Breadcrumbs.jsx` — visible, accessible breadcrumb trail.

### Phase 2 — Global + homepage

- `app/layout.jsx`: validate GA4 ID before loading; conditional `verification`;
  inject `EducationalOrganization` JSON-LD; keep the rest unchanged.
- Split `app/page.jsx` → server page (exports homepage `metadata`) +
  `app/HomeClient.jsx`.
- Homepage H1 stays intent-led; add `WebSite`/`EducationalOrganization` JSON-LD.

### Phase 3 — Page metadata & canonicals

- Server pages (`about`, `blog`, `offers`, `gallery`, `news/[slug]`, `chat`,
  `admin`, `admin/dashboard`) export their own metadata.
- Client pages (`program`, `apply`, `career`, `contact`, `accomodation`) get a
  nested server `layout.jsx` exporting metadata.
- Every indexable page declares its own `alternates.canonical`.

### Phase 4 — Sitemap & robots

- `app/sitemap.js`: static, deterministic list of indexable routes + course
  slugs (no DB calls → no build-time flakiness).
- `app/robots.js`: allow `/`, disallow `/api/`, `/admin/`, `/chat`,
  point to `https://aptechibadan.com/sitemap.xml`.

### Phase 5 — Courses, structured data, linking, images

- `app/courses/[slug]/page.jsx`: `generateMetadata` (unique per slug) +
  `Course` + `BreadcrumbList` JSON-LD.
- `CourseClient.jsx`: visible breadcrumbs + "related programmes / next steps"
  internal links.
- Descriptive alt text on the homepage hero background and other generic alts.

### Phase 6 — Env docs, OG image, verification

- `.env.example` documenting `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_GA_ID`,
  `NEXT_PUBLIC_GOOGLE_VERIFICATION` (no secrets).
- Generate `public/og-image.jpg` (1200×630) from a verified repo photo.
- Run `npm run lint` and `npm run build`; fix any regressions.

### Phase 7 — Final report

- Changed files, structured data added, sitemap/robots changes, analytics fix,
  verification results, remaining recommendations.

---

## 4. Non-goals / anti-patterns

Keyword stuffing, fake reviews/ratings/prices/FAQ, hidden text, doorway pages,
duplicate pages targeting one keyword, AI filler articles, unverifiable claims,
redesigning UI, removing features, changing production env values.

---

## 5. Implementation status — COMPLETE

### Verification results

- **Lint** (`npm run lint`): passes — exit 0, only pre-existing warnings
  (`<img>` suggestions, one `exhaustive-deps`), none introduced by this work.
- **Build** (`npm run build`): succeeds (Next.js 14.2.3); `/robots.txt` and
  `/sitemap.xml` are emitted as static routes.
- **Robots** (`/robots.txt`): `User-Agent: *`, `Allow: /`,
  `Disallow: /api/ /admin/`, `Sitemap: https://aptechibadan.com/sitemap.xml`.
- **Sitemap** (`/sitemap.xml`): 10 static routes + 11 course routes; the legacy
  `arenaCourse` duplicate is correctly excluded.
- **JSON-LD**: valid JSON — `EducationalOrganization` (global),
  `Course` + `BreadcrumbList` (course pages).
- **Titles/canonicals**: homepage → `IT Training in Ibadan | Aptech Ibadan`
  (canonical `https://aptechibadan.com`); `/courses/adse` →
  `Software Development Course in Ibadan | ACCP with AI | Aptech`
  (self-canonical); `/contact` → `Contact Aptech Ibadan | IT Training Centre`;
  `/gallery` → `Gallery | Aptech Ibadan` (no duplicated brand suffix).
- **OG image**: `/og-image.jpg` served `200 image/jpeg` at 1200×630.
- **Robots meta**: `/admin` → `noindex, nofollow`; `/chat` → `noindex, follow`.
- **`lang`**: `en-NG`.

### Still recommended (needs data/assets not safely inferable)

- Add `/news/[slug]` URLs to the sitemap once posts are guaranteed to exist at
  build time (the static `newsItems` array is currently empty; posts come from
  MongoDB). Kept out to avoid a non-deterministic sitemap.
- Replace the footer social `href="#"` placeholders with the verified campus
  profiles when a single official handle is confirmed.
- Add `generateStaticParams` for `/courses/[slug]` to pre-render course pages at
  build (currently server-rendered on demand).
- Provide a final branded 1200×630 OG image (current file is generated from
  `public/images/gallery/aptech1.jpeg`).
- Consider per-campus `EducationalOrganization`/`LocalBusiness` nodes (Agodi,
  Ring Road, Bodija) once each branch's details are confirmed.
