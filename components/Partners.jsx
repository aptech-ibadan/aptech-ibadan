import Image from "next/image";
import middlesex from "@/assets/middlesex-img.png";
import ncc from "@/assets/ncc-img.png";
import lincoln from "@/assets/lincoln-img.png";
import ism from "@/assets/ism-img.png";

const partners = [
  {
    name: "Middlesex University",
    logo: middlesex,
  },
  {
    name: "NCC Education",
    logo: ncc,
  },
  {
    name: "Lincoln University College",
    logo: lincoln,
  },
  {
    name: "ISM",
    logo: ism,
  },
];

const Partners = () => {
  return (
    <section className="text-[#020B2D] bg-white py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-4">
        Study Abroad Opportunities
      </h2>

      <p className="text-[#020B2D] mb-12 max-w-2xl mx-auto">
        Continue your education in the UK, Germany, and other countries
        through our global academic partners.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            <div className="relative w-32 h-16">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-[#020B2D]">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;