import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Question = () => {
  return (
    <section className="bg-[#020B2D] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">

        {/* 🔥 LEFT - WHITE FORM SIDE */}
        <div className="bg-white p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#020B2D] mb-6">
            Get Free Career Guidance
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              required
            />

            <textarea
              placeholder="What program are you interested in?"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              required
            ></textarea>

            <button className="w-full bg-[#020B2D] text-white font-semibold py-3 rounded-full hover:bg-black transition">
              Submit Request
            </button>
          </form>
        </div>

        {/* 🔥 RIGHT - DARK CONTENT SIDE */}
        <div className="bg-[#020B2D] text-white p-8 md:p-10 flex flex-col justify-center">
          <p className="text-[#FFC107] uppercase tracking-widest text-sm mb-4">
            Talk To Us
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Not Sure Where to Start? <br />
            <span className="text-[#FFC107]">We’ll Guide You.</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Speak with our advisors to choose the right career path in tech. 
            Get clarity on Software Development, Cybersecurity, and Multimedia programs.
          </p>

          {/* Quick CTA */}
          <button className="bg-[#FFC107] text-black px-6 py-2 rounded-full text-sm w-fit mb-6">
            Chat on WhatsApp
          </button>

          {/* Socials */}
          <div className="flex gap-4">
            <Link href="#">
              <FaFacebook className="w-8 h-8 p-2 bg-white text-[#020B2D] rounded-full hover:scale-110 transition" />
            </Link>
            <Link href="#">
              <FaInstagram className="w-8 h-8 p-2 bg-white text-[#020B2D] rounded-full hover:scale-110 transition" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="w-8 h-8 p-2 bg-white text-[#020B2D] rounded-full hover:scale-110 transition" />
            </Link>
            <Link href="#">
              <FaTwitter className="w-8 h-8 p-2 bg-white text-[#020B2D] rounded-full hover:scale-110 transition" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Question;