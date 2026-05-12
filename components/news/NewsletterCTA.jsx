import Link from "next/link";

const NewsletterCTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-14">
      <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-[#0a1847] to-[#020b2d] p-8 lg:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
        <p className="text-xs text-[#FFC107] uppercase tracking-[0.2em]">
          Stay Connected
        </p>
        <h2 className="text-3xl lg:text-4xl text-white font-semibold mt-3">
          Be Part of the Future Tech Revolution
        </h2>
        <p className="text-gray-100 mt-3 max-w-3xl">
          Discover trends, insights, and practical stories from tech, AI, and
          innovation to stay ahead in your learning journey.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#FFC107] px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition"
          >
            Join Community
          </Link>
          <Link
            href="/program"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
