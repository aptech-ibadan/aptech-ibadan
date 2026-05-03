import { MapPin, Phone, ArrowRight } from "lucide-react";

const campuses = [
  {
    id: 1,
    name: "Aptech Agodi",
    address: "Westone Building, beside Governor’s Office, Agodi, Ibadan",
    phone: "07070491555",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42409.095596642524!2d3.8743114471435587!3d7.406026438412933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039930067851fff%3A0x8ea29ec1f2186eb8!2sWest%20One!5e1!3m2!1sen!2sng!4v1777719155074!5m2!1sen!2sng", // ← Replace with real embed link
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Aptech Ringroad",
    address: "93 M.K.O Abiola Way, Adjacent Sunrise Mall, Ibadan",
    phone: "08064634830",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.XXXXXX!2d3.XXXXXX!3d7.XXXXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjAnMjIuMiJOIDPCsDIzJzQ1LjZFIQ!5e0!3m2!1sen!2sng!4v1740000000000", // ← Replace with real embed link
    color: "from-amber-600 to-orange-600",
  },
];

const Campus = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#020B2D] text-white text-sm font-medium px-6 py-2.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
            OUR LOCATIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#020B2D] tracking-tight">
            Visit Our Campuses
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Two strategic locations in Ibadan designed for excellence in tech education
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Google Map Embed */}
              <div className="relative h-80 overflow-hidden">
                <iframe
                  src={campus.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                {/* Campus Badge */}
                <div className="absolute top-6 left-6">
                  <div className={`px-5 py-1.5 bg-gradient-to-r ${campus.color} text-white text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg`}>
                    <MapPin size={18} />
                    CAMPUS
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md text-[#020B2D] font-bold text-xl flex items-center justify-center rounded-2xl shadow">
                  0{campus.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <h3 className="text-2xl font-bold text-[#020B2D] mb-3 group-hover:text-[#FFC107] transition-colors">
                  {campus.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-[#FFC107]" size={22} />
                    <p className="text-gray-600 leading-relaxed">
                      {campus.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-[#FFC107]" size={22} />
                    <a 
                      href={`tel:${campus.phone}`}
                      className="font-semibold text-lg hover:text-[#FFC107] transition-colors text-black"
                    >
                      {campus.phone}
                    </a>
                  </div>
                </div>

                {/* Get Directions Button */}
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-3 bg-[#020B2D] hover:bg-black text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Get Directions on Google Maps
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className={`h-1.5 w-full bg-gradient-to-r ${campus.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;