"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Share2 } from "lucide-react";
import { toast } from "react-toastify";

const CountUpNumber = ({ value, duration = 1.1 }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const numericValue = Number(String(value).replace(/,/g, ""));

  useEffect(() => {
    if (!inView || Number.isNaN(numericValue)) return;

    const controls = animate(0, numericValue, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, numericValue, duration]);

  if (Number.isNaN(numericValue)) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
};

const BlogDetailsClient = ({ article, similarNews }) => {
  const [isSharing, setIsSharing] = useState(false);

  const articleStats = useMemo(
    () => [
      { label: "Views", value: article.views },
      { label: "Likes", value: article.likes },
      { label: "Comments", value: article.comments },
    ],
    [article],
  );

  const handleShare = async () => {
    if (isSharing) return;

    const shareUrl =
      typeof window !== "undefined"
        ? window.location.href
        : `https://aptechibadan.com/news/${article.slug}`;

    setIsSharing(true);
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl,
        });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied. Share it anywhere.");
      } else {
        toast.info("Sharing is not available on this device.");
      }
    } catch (error) {
      const cancelled = error?.name === "AbortError";
      if (!cancelled) {
        toast.error("Could not share right now. Please try again.");
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <main className="bg-[#020B2D] text-white min-h-screen w-full">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-16 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-[#FFC107] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            {article.category} • Blog Insight
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-200">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#08133f] px-4 py-2 text-sm font-semibold text-white hover:border-[#FFC107]/60 hover:text-[#FFC107] transition cursor-pointer w-fit"
            aria-label="Share this news article"
          >
            <Share2 size={16} />
            {isSharing ? "Sharing..." : "Share Post"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#040d2e]"
        >
          <div className="relative h-[280px] sm:h-[340px]">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/70 to-transparent" />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pb-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8 items-start">
          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 sm:p-8 bg-[#040d2e] border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            >
              <div className="space-y-6 text-white leading-8">
                {article.content.map((section, index) => (
                  <p key={`${section.heading}-${index}`}>{section.body}</p>
                ))}
              </div>
            </motion.article>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl p-6 bg-[#040d2e] border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            >
              <h3 className="font-bold mb-4 text-white">Article Snapshot</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {articleStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/20 bg-[#08133f] p-4"
                  >
                    <p className="text-sm text-gray-100">{stat.label}</p>
                    <p className="text-xl font-semibold text-[#FFC107]">
                      <CountUpNumber value={stat.value} />
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/35 text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div> */}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-5 bg-[#040d2e] border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)] lg:sticky lg:top-24"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Related Blogs</h3>
              <Link
                href="/blog"
                className="text-sm text-[#FFC107] hover:text-yellow-300 cursor-pointer"
              >
                View all →
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {similarNews.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    href={`/news/${item.slug}`}
                    className="rounded-xl border border-white/20 bg-[#08133f] overflow-hidden block cursor-pointer"
                  >
                    <div className="relative h-36">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-[11px] text-[#FFC107] uppercase tracking-wide">
                        {item.category}
                      </p>
                      <h4 className="text-sm text-white font-semibold mt-1.5 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsClient;
