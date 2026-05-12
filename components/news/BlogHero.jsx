const BlogHero = () => {
  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#FFC107]/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-16">
        <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold">
          Aptech Insights
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight max-w-4xl">
          Learn From Real Industry Stories and Practical Tech Trends
        </h1>
        <p className="text-gray-200 mt-5 max-w-3xl text-lg">
          Explore blogs across software engineering, AI, cybersecurity, data,
          design, and innovation. Stay updated with actionable insights.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
