#!/usr/bin/env bash
# Compress the raw video export for web delivery and grab a poster frame.
#
# Usage:
#   ./scripts/compress-video.sh /path/to/first-edit.mp4
#
# Produces, next to the source file:
#   aptech-ibadan-campus-tour.mp4          (H.264/AAC, faststart)
#   aptech-ibadan-campus-tour-poster.jpg   (frame at 0:00)
#
# Requires ffmpeg (https://ffmpeg.org). On macOS: `brew install ffmpeg`.

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 /path/to/first-edit.mp4"
  exit 1
fi

SRC="$1"
if [ ! -f "$SRC" ]; then
  echo "File not found: $SRC"
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is not installed. Install it first (e.g. 'brew install ffmpeg')."
  exit 1
fi

DIR="$(dirname "$SRC")"
OUT_VIDEO="$DIR/aptech-ibadan-campus-tour.mp4"
OUT_POSTER="$DIR/aptech-ibadan-campus-tour-poster.jpg"

echo "Compressing video -> $OUT_VIDEO"
ffmpeg -y -i "$SRC" \
  -c:v libx264 -preset slow -crf 23 \
  -vf "scale='min(1280,iw)':-2" \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$OUT_VIDEO"

echo "Grabbing poster frame -> $OUT_POSTER"
ffmpeg -y -i "$SRC" -ss 00:00:00.5 -vframes 1 -q:v 2 "$OUT_POSTER"

echo ""
echo "Done."
echo "  Original: $(du -h "$SRC" | cut -f1)"
echo "  Compressed: $(du -h "$OUT_VIDEO" | cut -f1)"
echo ""
echo "Next: either drop both files into public/videos/, or run"
echo "  node scripts/upload-video-to-cloudinary.mjs \"$OUT_VIDEO\""
echo "to publish to Cloudinary instead."
