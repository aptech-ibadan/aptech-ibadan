"use client";

import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const smartProfessionalCourses = [
  {
    id: "japa-miscpapp",
    slug: "miscpapp",
    title: "Mastering MIS & Cross-Platform App Development",
    subtitle: "Diploma in MIS and Cross-Platform App Development",
    category: "JAPA Course",
    duration: "~6 months",
    hours: 392,
    certification: "Aptech Diploma",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=870&auto=format&fit=crop",
    badge: "Work Abroad Ready",
    shortDescription:
      "From office tools to cross-platform mobile apps — covering Python, Java, SQL, Tableau, Flutter, and Dart.",
    longDescription:
      "A practical MIS and app development diploma designed for professionals and graduates looking to build job-ready tech skills for the international market. Covers data analysis, database management, Java, Python, and cross-platform app development with Flutter.",
    keyFeatures: [
      "Office Automation with Microsoft 365 & CoPilot",
      "Data Analysis with MS Excel & Tableau",
      "Database Management with SQL Server",
      "Python Programming",
      "Java Application Development (GUI & OOP)",
      "Cross-Platform App Development with Flutter & Dart",
      "Agile & DevOps Methodology",
      "UI/UX Design for Mobile",
    ],
    technologies: [
      "MS Office 365",
      "MS SQL Server 2022",
      "Python 3.7+",
      "Tableau Desktop",
      "Java SE 19 / JavaFx 20",
      "Dart / Flutter SDK",
      "Apache NetBeans",
      "XAMPP",
    ],
    careerPaths: [
      "MIS Professional",
      "Data Analyst",
      "Data Visualizer",
      "Android App Developer",
      "Cross Platform App Developer",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#3B82F6",
    icon: "📊",
  },
  // {
  //   id: "japa-dsaiml",
  //   slug: "dsaiml",
  //   title: "Python Powerhouse: AI, ML & Data Science",
  //   subtitle: "Diploma in Data Science, AI, and Machine Learning",
  //   category: "JAPA Course",
  //   duration: "~7 months",
  //   hours: 448,
  //   certification: "Aptech Diploma",
  //   image:
  //     "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=870&auto=format&fit=crop",
  //   badge: "High Demand Overseas",
  //   shortDescription:
  //     "Master Python, machine learning, deep learning, NLP, and big data to land AI-focused roles abroad.",
  //   longDescription:
  //     "An intensive AI and data science diploma built for those targeting high-paying overseas tech roles. Covers the full data science stack — from MongoDB and WEKA to TensorFlow deep learning — with a real-world capstone project.",
  //   keyFeatures: [
  //     "MongoDB & Big Data with Hadoop & Spark",
  //     "Data Mining with WEKA",
  //     "Visual Analytics with Tableau",
  //     "AI Applications of NLP",
  //     "Machine Learning (Supervised & Unsupervised)",
  //     "Deep Learning with Neural Networks & TensorFlow",
  //     "Advanced Data Science with Python",
  //     "Real-world Capstone Project",
  //   ],
  //   technologies: [
  //     "Python",
  //     "MongoDB",
  //     "WEKA",
  //     "Tableau Desktop",
  //     "Jupyter Notebook",
  //     "Google Colab",
  //     "Hadoop / Spark",
  //     "DL APIs & TensorFlow",
  //   ],
  //   careerPaths: [
  //     "Data Analytics Professional",
  //     "AI Developer",
  //     "ML Developer",
  //   ],
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   gallery: [],
  //   accentColor: "#8B5CF6",
  //   icon: "🤖",
  // },
  {
    id: "japa-nwad",
    slug: "nwad",
    title: "Complete Network Administration",
    subtitle: "Diploma in Network Administration",
    category: "JAPA Course",
    duration: "~6 months",
    hours: 408,
    certification: "Aptech Diploma",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Build expertise in Windows, Microsoft Azure, and Cisco networking to become a globally ready network professional.",
    longDescription:
      "A complete networking diploma aligned with Microsoft and Cisco certifications. Covers Windows desktop management, Azure cloud architecture, enterprise routing, and cybersecurity fundamentals — ideal for those targeting network and cloud roles abroad.",
    keyFeatures: [
      "Windows Desktop Management",
      "Microsoft Azure (Fundamentals to Architect level)",
      "Cisco ENCOR & ENARSI Enterprise Routing",
      "Network Security & Cybersecurity Fundamentals",
      "Cloud Identity, Governance & Virtual Networks",
      "Hybrid & On-Premises Solutions",
      "GNS3 Network Simulation Lab",
      "Capstone Network Administration Project",
    ],
    technologies: [
      "Windows 10+",
      "Microsoft Azure",
      "Cisco Networking",
      "GNS3",
      "Network Tools",
    ],
    careerPaths: ["Azure Administrator", "Network Administrator (CISCO)"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#06B6D4",
    icon: "🌐",
  },
  {
    id: "japa-cyforen",
    slug: "cyforen",
    title: "Cybersecurity & Digital Forensics",
    subtitle: "Diploma in Cybersecurity and Digital Forensics",
    category: "JAPA Course",
    duration: "~7 months",
    hours: 450,
    certification: "Aptech Diploma",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop",
    badge: "Top Security Track",
    shortDescription:
      "Become an ethical hacker and digital forensics investigator with hands-on training in KALI Linux, Nmap, and forensic tools.",
    longDescription:
      "A dual-track cybersecurity and digital forensics diploma covering ethical hacking, network defense, and full forensic investigation workflows. Uses industry tools like KALI Linux, Wireshark, Autopsy, and Volatility — preparing students for high-demand security roles globally.",
    keyFeatures: [
      "Ethical Hacking & Penetration Testing",
      "Windows, Unix & Linux Hacking Techniques",
      "Network Security Implementation",
      "Computer Forensics & Cyber Crime Investigation",
      "Digital Evidence Acquisition & Analysis",
      "Steganography & Image File Forensics",
      "Wireless Attack Investigation",
      "Social Media & Corporate Fraud Forensics",
    ],
    technologies: [
      "KALI Linux",
      "Autopsy / Sleuth Kit",
      "Volatility",
      "FTK Imager",
      "Wireshark / Nmap",
      "Helix / Backtrack",
      "MailXaminer",
      "Mandiant Redline",
    ],
    careerPaths: [
      "Security Administrator",
      "Ethical Hacker",
      "Forensics Investigator",
      "Cyber Crime Investigator",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#EF4444",
    icon: "🔐",
  },
];
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
const SmartProfessionalCourses = ({ openModal }) => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="JAPA Courses"
          title="JAPA Courses"
          description="Japa readiness programs designed to equip you with globally recognized IT skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartProfessionalCourses.map((course, index) => (
            <a key={course.id} href={`/courses/${course.slug}`}>
              <AnimatedCard
                course={course}
                index={index}
                // openModal={openModal}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartProfessionalCourses;
