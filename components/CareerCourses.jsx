"use client";

import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const careerCourses = [
  {
    id: "accp",
    slug: "adse",
    title: "ACCP(AI)",
    subtitle: "Aptech Certified Computer Professional (AI)",
    category: "Career Course",
    duration: "24+ months",
    certification: "Global Certification",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Most Popular",
    shortDescription:
      "Complete software engineering program covering full-stack development, cloud computing, and enterprise applications.",
    longDescription:
      "ACCP (Aptech Certified Computer Professional) is a comprehensive career program designed to transform beginners into industry-ready software engineers. Developed by Aptech's global R&D team, this course follows a 'reverse design' methodology — analyzing real job market demands to build relevant skills.",
    keyFeatures: [
      "Full-stack development (Frontend + Backend)",
      "Cloud Computing (AWS, Azure, Google Cloud)",
      "Mobile App Development (Android & iOS)",
      "Enterprise Application Development (.NET, Java)",
      "Database Management (SQL Server, MySQL, MongoDB)",
      "Project Management & Agile Methodologies",
      "1.5+ years of coding practice (50,000+ lines of code)",
      "Global certifications recognized in 50+ countries",
    ],
    technologies: [
      "HTML5/CSS3/JavaScript",
      "React/Angular",
      "Node.js/PHP",
      "Java/.NET/C#",
      "Python/R",
      "SQL Server/MySQL/MongoDB",
      "AWS/Azure",
      "Git/GitHub",
    ],
    careerPaths: [
      "Software Engineer",
      "Full Stack Developer",
      "Web Application Developer",
      "Mobile App Developer",
      "Database Administrator",
      "Cloud Solutions Architect",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/accp-1.jpg", "/images/accp-2.jpg", "/images/accp-3.jpg"],
    accentColor: "#FFC107",
    icon: "💻",
  },
  {
    id: "acns",
    slug: "acns",
    title: "ACNS",
    subtitle: "Aptech Certified Network Specialist",
    category: "Career Course",
    duration: "18+ months",
    certification: "Global Certification",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription:
      "Comprehensive networking and cybersecurity program for IT infrastructure professionals.",
    longDescription:
      "ACNS is designed for students and professionals who want to build a career in networking and cybersecurity. The program provides comprehensive training in networking concepts, system administration, security fundamentals, and cloud computing — all aligned with industry needs.",
    keyFeatures: [
      "Networking Fundamentals (IP addressing, subnetting, routing)",
      "System Administration (Windows & Linux)",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing (AWS, Microsoft Azure)",
      "Firewall Configuration & Security Protocols",
      "Hands-on lab training with real equipment",
      "CompTIA & Cisco certification preparation",
    ],
    technologies: [
      "Cisco Networking",
      "Windows Server",
      "Linux (Red Hat/Ubuntu)",
      "AWS/Azure Cloud",
      "Firewall (Palo Alto/Fortinet)",
      "Wireshark/Nmap",
      "VMware/Hyper-V",
    ],
    careerPaths: [
      "Network Administrator",
      "System Administrator",
      "Cybersecurity Analyst",
      "IT Support Specialist",
      "Cloud Administrator",
      "Network Engineer",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/acns-1.jpg", "/images/acns-2.jpg", "/images/acns-3.jpg"],
    accentColor: "#22D3EE",
    icon: "🛡️",
  },
  {
    id: "arena-multimedia",
    title: "Arena Multimedia SP",
    slug: "amsp",
    subtitle: "Animation & VFX Professional",
    category: "Career Course",
    duration: "25 months",
    certification: "Industry Certificate",
    image:
      "https://images.unsplash.com/photo-1707112244265-b14d638dd121?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New Creative Track",
    shortDescription:
      "Professional program in animation, VFX, gaming, and multimedia design.",
    longDescription:
      "Arena Multimedia's career course provides comprehensive training in animation, VFX, gaming, and multimedia design. With a focus on portfolio development and industry-standard tools, students graduate with a professional showreel and job-ready skills.",
    keyFeatures: [
      "2D & 3D Animation",
      "VFX Compositing (Nuke, After Effects)",
      "3D Modeling & Sculpting (Maya, ZBrush, 3ds Max)",
      "Game Design & Development",
      "Motion Graphics & Broadcast Design",
      "UI/UX Design for Interactive Media",
      "Professional portfolio development",
      "Industry workshops & placement assistance",
    ],
    technologies: [
      "Autodesk Maya/3ds Max",
      "Adobe Photoshop/Illustrator",
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Blender/ZBrush",
      "Unity/Unreal Engine",
      "Nuke",
      "Cinema 4D",
    ],
    careerPaths: [
      "3D Animator",
      "VFX Artist",
      "Motion Graphics Designer",
      "Game Designer",
      "Multimedia Specialist",
      "UI/UX Designer",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [
      "/images/arena-1.jpg",
      "/images/arena-2.jpg",
      "/images/arena-3.jpg",
    ],
    accentColor: "#A78BFA",
    icon: "🎨",
  },
  {
    id: "realtime-3d-game-art",
    title: "Realtime 3D & Game Art",
    slug: "realtime3d",
    subtitle: "Unity, Unreal Engine, Game Development",
    category: "Career Course",
    duration: "6-8 months",
    hours: 190,
    certification: "Professional Certificate",
    image:
      "https://res.cloudinary.com/ddldviftf/image/upload/v1777742251/Gemini_Generated_Image_13t7kj13t7kj13t7_irqdag.png",
    source: "Arena Multimedia",
    shortDescription:
      "Comprehensive program covering game design, level design, Unity, Unreal Engine, and asset integration for creating immersive 3D game environments.",
    keyFeatures: [
      "Visual Design for Games",
      "UI Design for Games",
      "Games Production Process",
      "Unity Game Engine (Interface, Level Designing)",
      "Unreal Engine (Getting Started, Working, Asset Integration)",
      "Blueprints Visual Scripting",
      "Level Designing & Publishing",
    ],
    technologies: ["Unity", "Unreal Engine", "Blueprints"],
    careerPaths: [
      "Game Designer",
      "UI Designer for Games",
      "Level Designer",
      "Game Asset Integration Artist",
      "Unreal Generalist",
      "Environment Artist",
    ],
    accentColor: "#34D399",
    icon: "🎮",
  },
  {
    id: "vfx-animation-films",
    title: "VFX For Animation & Films",
    slug: "vfx",
    subtitle: "Nuke, Houdini, Matchmoving, Compositing",
    category: "Career Course",
    duration: "6-8 months",
    image:
      "https://res.cloudinary.com/ddldviftf/image/upload/v1777742269/Gemini_Generated_Image_nw2hcsnw2hcsnw2h_boovle.png",
    hours: 190,
    certification: "Professional Certificate",
    source: "Arena Multimedia",
    shortDescription:
      "Professional VFX program covering pre to post-production, compositing, matchmoving, rotoscopy, and advanced effects using industry-standard tools.",
    keyFeatures: [
      "VFX Film Making - Pre to Post-Production",
      "Pre-visualization & VFX Video Shoot",
      "Introduction to Nuke Compositing",
      "Rotoscopy using Silhouette",
      "Matchmoving & Camera Tracking (3D Equalizer)",
      "Wire Removal & Colour Correction",
      "Chroma Removal Techniques",
      "2D & 3D Tracking",
      "Matte Painting Magic",
      "Visual Fx with Houdini",
    ],
    technologies: [
      "Nuke Foundry",
      "Silhouette",
      "3D Equalizer",
      "Houdini",
      "Maya",
      "Premiere Pro",
    ],
    careerPaths: [
      "VFX Artist/Generalist",
      "FX Artist",
      "Compositor",
      "Pre-Viz Artist",
      "Roto-Paint Artist",
      "Matchmove Artist",
      "BG Prep Artist",
      "Matte Painter",
      "Video Editor",
      "Motion Designer",
    ],
    accentColor: "#F97316",
    icon: "🎬",
  },
];

/* ── Animated section title wrapper ── */
const AnimatedSectionTitle = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionTitle
        badge="Career Programs"
        title="Professional Career Courses"
        description="Comprehensive, industry-aligned programs designed to launch your career in tech."
      />
    </motion.div>
  );
};

/* ── Animated course card wrapper ── */
const AnimatedCard = ({ course, index, openModal }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay: col * 0.12 + row * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Accent glow on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none z-0"
        animate={{
          opacity: hovered ? 1 : 0,
          boxShadow: hovered
            ? `0 0 0 2px ${course.accentColor || "#FFC107"}40, 0 20px 40px ${course.accentColor || "#FFC107"}20`
            : "none",
        }}
        transition={{ duration: 0.25 }}
      />

      {/* Badge dot pulse (for courses with a badge) */}
      {/* {course.badge && (
        <motion.div
          className="absolute -top-2 -right-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full  font-semibold text-black shadow-lg"
          style={{ background: course.accentColor || "#FFC107" }}
          initial={{ scale: 0, rotate: -10 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: col * 0.12 + 0.35, type: "spring", stiffness: 260, damping: 18 }}
        >
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full bg-black/30"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          {/* {course.badge} 
        </motion.div>
      )} */}

      {/* Icon reveal on hover */}
      <motion.div
        className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-base backdrop-blur-sm"
        style={{
          background: `${course.accentColor || "#FFC107"}22`,
          border: `1px solid ${course.accentColor || "#FFC107"}44`,
        }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {course.icon}
      </motion.div>

      {/* Progress bar accent on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl z-20"
        style={{ background: course.accentColor || "#FFC107" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* The real card */}
      <div className="relative z-10 h-full">
        <CourseCard course={course} variant="default" />
      </div>
    </motion.div>
  );
};

/* ── Floating background orbs ── */
const BgOrbs = () => (
  <>
    <motion.div
      className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(255,193,7,0.05) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(100,120,255,0.04) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.15, 1], y: [0, 20, 0] }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />
  </>
);

/* ── Divider line animation ── */
const AnimatedDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center gap-4 mb-12">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#FFC107] to-transparent flex-1"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-[#FFC107]"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.5, type: "spring" }}
      />
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#FFC107] to-transparent flex-1"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
};

/* ── Main section ── */
const CareerCourses = ({ openModal }) => {
  return (
    <section
      id="professional"
      className="py-20 bg-white px-6 md:px-16 relative overflow-hidden"
    >
      <BgOrbs />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #020B2D 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSectionTitle />
        <AnimatedDivider />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerCourses.map((course, index) => (
            <a key={course.id} href={`/courses/${course.slug}`}>
              <AnimatedCard
                course={course}
                index={index}
                // openModal={openModal}
              />
            </a>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-[#FFC107]/20 bg-[#020B2D]/[0.03]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-[#020B2D] font-semibold text-lg">
              Not sure which course is right for you?
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Book a free 30-minute counselling session with our advisors.
            </p>
          </div>
          <motion.a
            href="/contact"
            className="flex-shrink-0 bg-[#020B2D] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#FFC107] hover:text-black transition-colors duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Counselling →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCourses;
