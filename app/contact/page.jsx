import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Button } from "@/const";

const ContactPage = () => {
  return (
    <div className="bg-white">

      {/* 🔥 HERO */}
      <section className="bg-[#020B2D] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FFC107] uppercase tracking-widest text-sm mb-4">
            Contact Aptech Ibadan
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Visit Our Campus or <span className="text-[#FFC107]">Start Your Tech Journey Today</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            Speak with our advisors, explore our facilities, and get started with 
            a career-focused program designed to make you job-ready.
          </p>

          <div className="mt-8 flex gap-4">
            <Button
              classes="bg-[#FFC107] text-black px-8 py-3 rounded-full font-semibold"
              link="/apply"
              text="Apply Now"
            />
            <Button
              classes="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
              link="#campus"
              text="View Locations"
            />
          </div>
        </div>
      </section>

      {/* 💣 CAMPUS LOCATIONS */}
      <section id="campus" className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Campuses in Ibadan
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Agodi */}
          <div className="p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-[#020B2D] mb-2">
              Aptech Agodi
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Westone Building, Beside the Office of the Governor’s Wife, Agodi, Ibadan.
            </p>

            <div className="flex items-center gap-3 text-sm mb-2">
              <FaPhone />
              <span>07070491555</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaInstagram />
              <span>@aptechagodi</span>
            </div>
          </div>

          {/* Ringroad */}
          <div className="p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-[#020B2D] mb-2">
              Aptech Ringroad
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              93 M.K.O Abiola Way, Adjacent Sunrise Mall, Ring Road, Ibadan.
            </p>

            <div className="flex items-center gap-3 text-sm mb-2">
              <FaPhone />
              <span>08064634830</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaInstagram />
              <span>@aptechringroad</span>
            </div>
          </div>

        </div>
      </section>

      {/* 💣 QUICK CONTACT */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Reach Out Instantly
          </h2>

          <p className="text-gray-600 mb-10">
            Got questions? Our team is ready to guide you through your journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white rounded-xl shadow">
              <FaPhone className="mx-auto mb-3 text-[#020B2D]" size={24} />
              <p className="font-semibold">Call Us</p>
              <p className="text-sm text-gray-600">Quick response guaranteed</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <FaEnvelope className="mx-auto mb-3 text-[#020B2D]" size={24} />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600">info@aptech.ng</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <FaFacebook className="mx-auto mb-3 text-[#020B2D]" size={24} />
              <p className="font-semibold">Social Media</p>
              <p className="text-sm text-gray-600">Follow & message us</p>
            </div>

          </div>
        </div>
      </section>

      {/* 💣 MAP */}
      <section className="py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/map.png"
            alt="map"
            className="w-full rounded-xl shadow-lg"
            width={1200}
            height={500}
          />
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="bg-[#020B2D] text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Tech Career?
        </h2>

        <p className="text-gray-300 mb-8">
          Join thousands of students building successful careers in tech.
        </p>

        <Button
          classes="bg-[#FFC107] text-black px-10 py-4 rounded-full font-semibold"
          link="/apply"
          text="Enroll Now"
        />
      </section>

    </div>
  );
};

export default ContactPage;