const SectionTitle = ({ badge, title, description }) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
        <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020B2D] mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;