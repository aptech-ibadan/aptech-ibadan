"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "@/const";
// Local dev fallback — the campus-tour export lives in /assets (assets/first-edit.mp4).
// In production, set the NEXT_PUBLIC_CLOUDINARY_* env vars (see
// scripts/upload-video-to-cloudinary.mjs) and the Cloudinary URL is used instead,
// so the 100MB+ file never gets bundled into the build.
import campusTourVideo from "@/assets/first-edit.mp4";

/**
 * ── Video source resolution ──
 * Prefers Cloudinary (already configured in this project via lib/cloudinary.js
 * and the `cloudinary` / `next-cloudinary` deps) so the asset is served from a
 * CDN with automatic format + quality negotiation (f_auto,q_auto) instead of
 * being bundled as a 100MB+ static file inside the Next.js app.
 *
 * Falls back to the local /assets/first-edit.mp4 file so the section still
 * works in local dev before the asset has been uploaded to Cloudinary.
 *
 * See public/videos/README.md and scripts/upload-video-to-cloudinary.mjs.
 */
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_PUBLIC_ID =
  process.env.NEXT_PUBLIC_PROMO_VIDEO_PUBLIC_ID ||
  "aptech/aptech-ibadan-campus-tour";

const videoSrc = CLOUD_NAME
  ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${CLOUDINARY_PUBLIC_ID}.mp4`
  : campusTourVideo;

const posterSrc = CLOUD_NAME
  ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_jpg,q_auto,so_0/${CLOUDINARY_PUBLIC_ID}.jpg`
  : undefined;

const highlights = [
  "Hands-on labs across Software Development, Cybersecurity, Networking & Multimedia",
  "Globally recognised ACE / Arena Multimedia certification",
  "Industry-experienced instructors and real project work",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const VideoSpotlight = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });
  const [frameRef, frameInView] = useInView({ threshold: 0.4 });

  // Pause playback automatically once the player scrolls out of view.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !isPlaying) return;
    if (!frameInView) {
      el.pause();
      setIsPlaying(false);
    }
  }, [frameInView, isPlaying]);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    setProgress((el.currentTime / el.duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
    >
      {/* Ambient accents to echo the Hero section's motif, kept subtle on a light bg */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#FFC107]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-[360px] w-[360px] rounded-full bg-[#020B2D]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-0">
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={container}
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10"
        >
          {/* ── Video player ── */}
          <motion.div
            variants={fadeUp}
            ref={frameRef}
            className="lg:col-span-7"
          >
            <div className="group relative">
              {/* Corner accents, matching Hero's carousel frame */}
              {[
                "top-0 left-0",
                "top-0 right-0",
                "bottom-0 left-0",
                "bottom-0 right-0",
              ].map((pos, i) => (
                <div
                  key={pos}
                  className={`pointer-events-none absolute ${pos} z-20 h-6 w-6 border-[#FFC107]`}
                  style={{
                    borderTopWidth: i < 2 ? 2 : 0,
                    borderBottomWidth: i >= 2 ? 2 : 0,
                    borderLeftWidth: i % 2 === 0 ? 2 : 0,
                    borderRightWidth: i % 2 !== 0 ? 2 : 0,
                  }}
                />
              ))}

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#020B2D] shadow-2xl shadow-slate-300/60">
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    className="h-full w-full object-contain"
                    poster={posterSrc}
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>

                  {/* Dim overlay before playback starts */}
                  {!hasStarted && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/80 via-[#020B2D]/10 to-[#020B2D]/40" />
                  )}

                  {/* Center play button */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          scale: {
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC107] text-[#020B2D] shadow-lg shadow-[#FFC107]/30 sm:h-20 sm:w-20"
                        aria-label={hasStarted ? "Resume video" : "Play video"}
                      >
                        <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
                      </motion.div>
                    </div>
                  )}

                  {/* Bottom control bar (only once playback has started) */}
                  {hasStarted && (
                    <div
                      className={`absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-[#020B2D]/90 to-transparent px-4 pb-3 pt-8 transition-opacity duration-300 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-100"
                          : "opacity-100"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 fill-current" />
                        ) : (
                          <Play className="ml-0.5 h-4 w-4 fill-current" />
                        )}
                      </button>

                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                        <div
                          className="h-full rounded-full bg-[#FFC107] transition-[width] duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={goFullscreen}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Copy ── */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFC107]/10 px-6 py-2.5 text-sm font-medium text-[#FFC107]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFC107]" />
              Watch & Explore
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-5 text-3xl font-bold leading-tight text-[#020B2D] md:text-4xl lg:text-5xl"
            >
              See what Aptech Ibadan{" "}
              <span className="text-[#FFC107]">has to offer.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-6 max-w-xl text-lg text-gray-600"
            >
              A quick look inside our labs, classrooms and student projects —
              the same hands-on training that takes our graduates from beginner
              to globally certified I.T professional.
            </motion.p>

            <motion.ul variants={fadeUp} className="mb-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFC107]" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button
                classes="inline-block rounded-full bg-[#020B2D] px-8 py-4 text-center font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#0a1a4d]"
                link="/program"
                text="Explore Courses"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSpotlight;
