const programs = [
  {
    title: "ACCP",
    subtitle: "Software Development",
    items: [
      "Front-End Development",
      "Back-End Development",
      "Full Stack Engineering",
      "Mobile App Development",
      "Database Systems"
    ]
  },
  {
    title: "ACNS",
    subtitle: "Networking & Cybersecurity",
    items: [
      "Network Engineering",
      "Cybersecurity & Ethical Hacking",
      "Cloud Administration",
      "Windows & Linux Systems"
    ]
  },
  {
    title: "AMSP",
    subtitle: "Multimedia & Design",
    items: [
      "UI/UX Design",
      "3D Animation",
      "Motion Graphics",
      "Game Development",
      "Graphics Design"
    ]
  }
];

const Programs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Flagship Career Programs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-[#020B2D]">
              {prog.title}
            </h3>
            <p className="text-[#FFC107] font-semibold mb-4">
              {prog.subtitle}
            </p>

            <ul className="text-gray-600 space-y-2 text-sm">
              {prog.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;