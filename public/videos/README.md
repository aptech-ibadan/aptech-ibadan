# Video assets

## The file from your screenshot

Your Finder info panel shows `first-edit.mp4` — 103,036,846 bytes (~103 MB),
1280×720, H.264 + AAC, 1:08 long. That codec/container combo (H.264 in an
MP4) is exactly what browsers want, so **no re-encoding is required for
compatibility** — only compression (see below).

**Rename it before use:**

```
first-edit.mp4  →  aptech-ibadan-campus-tour.mp4
```

`first-edit` is an editing-timeline name, not a production asset name. The
codebase's convention for media is descriptive-kebab-case (see
`/images/hero.jpg`, `/images/gallery/aptech1.jpeg`), so
`aptech-ibadan-campus-tour.mp4` is what `components/VideoSpotlight.jsx` and
`app/gallery/GalleryClient.jsx` already look for.

> **In this repo** the raw file currently lives at `assets/first-edit.mp4`
> and is imported directly by `components/VideoSpotlight.jsx`,
> `app/gallery/GalleryClient.jsx` and `app/accomodation/page.jsx` so the site
> works out of the box. That works fine for local dev, but for production you
> should follow the Cloudinary path below so a 100MB+ file isn't bundled into
> every build.

## Why it doesn't just live in `public/` as-is

103 MB is right at the edge of GitHub's 100 MiB hard block on a single file,
and even under that limit it's a bad idea to ship a 100MB+ file inside a
Next.js `public/` folder:

- It bloats every deploy (Vercel re-uploads the whole `public/` folder each
  build) and slows cold starts.
- It's served with no adaptive bitrate — a visitor on 3G gets the same
  103MB file as someone on fibre.
- This project already has Cloudinary fully configured
  (`lib/cloudinary.js`, `CLOUDINARY_*` env vars, `next-cloudinary` in
  `package.json`) but unused for video — that's the intended path.

## Recommended path: Cloudinary (production)

1. Compress first (see `scripts/compress-video.sh`) — a 68-second, 1280×720
   marketing clip should land around 8–15 MB at a visually-lossless CRF, not
   103 MB.
2. Upload with `scripts/upload-video-to-cloudinary.mjs` (uses your existing
   `CLOUDINARY_*` server credentials — nothing new to configure there).
3. Copy the `public_id` the script prints into `.env` as
   `NEXT_PUBLIC_PROMO_VIDEO_PUBLIC_ID`, and set
   `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` to the same value as
   `CLOUDINARY_CLOUD_NAME`.
4. `components/VideoSpotlight.jsx` and the gallery video card automatically
   switch to the Cloudinary URL (with `f_auto,q_auto` — Cloudinary serves
   WebM/AV1 to browsers that support it and a compressed MP4 to those that
   don't) as soon as those two env vars are set. No code changes needed.

## Fallback path: local file (dev / no Cloudinary yet)

If the env vars above are not set, the components fall back to the bundled
`assets/first-edit.mp4` (via `@/assets/first-edit.mp4` import). If you'd
prefer a `public/`-based fallback instead, drop the files here:

```
public/videos/aptech-ibadan-campus-tour.mp4
public/videos/aptech-ibadan-campus-tour-poster.jpg   (optional poster frame)
```

Compress the file first (see below) before dropping it here — do not commit
the original 103 MB export.

## Compressing the original export

```bash
./scripts/compress-video.sh /path/to/first-edit.mp4
```

This produces `aptech-ibadan-campus-tour.mp4` (H.264, CRF 23, faststart for
instant playback start) and `aptech-ibadan-campus-tour-poster.jpg` (a frame
grabbed at 0:00) next to the source file. Requires `ffmpeg` locally.
