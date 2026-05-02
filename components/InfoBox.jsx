import Image from "next/image";

const InfoCard = ({ img, title, points, highlight }) => {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg transition hover:shadow-2xl 
      ${highlight ? "bg-[#FFC107] text-black" : "bg-white text-[#020B2D]"}`}>

      <Image
        src={img}
        alt={title}
        className="object-cover h-44 w-full"
        width={500}
        height={300}
      />

      <div className="p-6">
        <h2 className="font-bold text-lg mb-4">
          {title}
        </h2>

        <ul className="text-sm space-y-2 leading-relaxed">
          {points.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const InfoBox = () => {
  return (
    <section className="py-16 bg-[#020B2D] px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-center font-bold text-3xl md:text-4xl text-white mb-4">
          Why Choose Us
        </h1>

        <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
          We don’t just train you — we prepare you for real opportunities in tech.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <InfoCard
            img="/images/img1.jpg"
            title="World-Class Learning Environment"
            points={[
              "Modern tech-enabled classrooms",
              "Fully equipped computer labs",
              "Industry-standard tools & systems",
              "Comfortable learning environment"
            ]}
          />

          <InfoCard
            img="/images/img6.jpg"
            title="Global Certification Advantage"
            highlight
            points={[
              "Recognized international certifications",
              "Pathway to study abroad (UK, Canada, etc.)",
              "Blended & cloud-based learning",
              "Access recorded classes anytime"
            ]}
          />

          <InfoCard
            img="/images/img3.jpg"
            title="Career & Job Support"
            points={[
              "Industry expert sessions",
              "Internship & job placement support",
              "Networking with tech professionals",
              "Local & international opportunities"
            ]}
          />

        </div>
      </div>
    </section>
  );
};

export default InfoBox;