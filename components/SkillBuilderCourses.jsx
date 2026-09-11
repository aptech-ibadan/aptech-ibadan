"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

/*
 * Skill Builder — foundation and short courses that build essential,
 * immediately applicable skills.
 */
const skillBuilderCourses = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "SEO, Social Media & Analytics",
    category: "Skill Builder",
    duration: "2 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Learn to grow brands online with SEO, social media, and analytics.",
    longDescription:
      "This comprehensive course covers all aspects of digital marketing. Students learn SEO, social media marketing, email marketing, Google Analytics, and pay-per-click advertising, with hands-on campaigns they can showcase to employers and clients.",
    keyFeatures: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Google Analytics & Data Insights",
      "Email Marketing Campaigns",
      "Content Marketing Strategy",
      "Pay-Per-Click (Google Ads)",
      "E-commerce Marketing",
      "Digital Marketing Certification Preparation",
    ],
    technologies: [
      "Google Analytics",
      "Google Ads",
      "Meta Business Suite",
      "Mailchimp",
      "SEMrush",
      "Canva",
    ],
    careerPaths: [
      "Digital Marketing Specialist",
      "SEO Specialist",
      "Social Media Manager",
      "Content Marketing Specialist",
      "Email Marketing Coordinator",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [
      "/images/digitalmarketing-1.jpg",
      "/images/digitalmarketing-2.jpg",
    ],
  },
  {
    id: "office-automation",
    title: "Office Automation",
    subtitle: "Word, Excel, PowerPoint & Outlook",
    category: "Skill Builder",
    duration: "5 weeks",
    certification: "MOS Certification",
    image:
      "https://images.unsplash.com/photo-1649433391420-542fcd3835ea?q=80&w=870&auto=format&fit=crop",
    badge: "Internationally Recognized",
    shortDescription:
      "Earn the globally recognized Microsoft Office Specialist certification and boost your career prospects.",
    longDescription:
      "The Microsoft Office Specialist (MOS) certification is an internationally recognized credential that validates your expertise in Microsoft Office applications. This course prepares you for MOS exams in Word, Excel, PowerPoint, and Outlook, and can boost your earning potential by up to 20%.",
    keyFeatures: [
      "MOS Word Expert (Associate & Expert Level)",
      "MOS Excel Expert (Associate & Expert Level)",
      "MOS PowerPoint Associate",
      "MOS Outlook Associate",
      "Advanced Data Analysis with Excel",
      "Automation with Macros & VBA Basics",
      "Mail Merge & Document Automation",
      "Interactive Dashboards & Charts",
      "Professional Report Generation",
      "Official MOS Exam Preparation",
      "Mock Tests & Practice Exams",
      "Internationally Recognized Certification",
    ],
    technologies: [
      "Microsoft Word (Advanced)",
      "Microsoft Excel (Advanced)",
      "Microsoft PowerPoint (Advanced)",
      "Microsoft Outlook",
      "VBA Basics",
      "Power Query",
      "Pivot Tables",
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Office Manager",
      "Executive Assistant",
      "Project Coordinator",
      "Operations Manager",
      "Administrative Professional",
      "Compliance Officer",
      "Finance Assistant",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/mos-1.jpg", "/images/mos-2.jpg", "/images/mos-3.jpg"],
  },
  {
    id: "python-programming",
    title: "Python",
    subtitle: "From Basics to Automation",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop",
    shortDescription:
      "Learn Python fundamentals for automation, data analysis, or web development.",
    longDescription:
      "Python is one of the most versatile and in-demand programming languages. This course covers Python fundamentals, data structures, file handling, error handling, and automation scripts — building a solid base for data, web, or automation specialisations.",
    keyFeatures: [
      "Python Syntax & Basics",
      "Data Structures (Lists, Dictionaries, Tuples)",
      "Functions & Modules",
      "File I/O Operations",
      "Error Handling & Debugging",
      "Web Scraping Basics",
      "Automation Scripts",
      "Mini Projects",
    ],
    technologies: [
      "Python 3",
      "VS Code / PyCharm",
      "Jupyter Notebooks",
      "BeautifulSoup",
      "Pandas Basics",
    ],
    careerPaths: [
      "Junior Python Developer",
      "Automation Specialist",
      "Data Analyst Assistant",
      "Technical Support Engineer",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/python-1.jpg", "/images/python-2.jpg"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Network Security & Threat Defense",
    category: "Skill Builder",
    duration: "2 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Learn to protect people and organisations from modern cyber threats.",
    longDescription:
      "This course introduces the core pillars of cybersecurity — securing networks, systems, and data. You will learn about threat landscapes, access control, cryptography, security operations, and incident response, preparing you for entry-level security roles.",
    keyFeatures: [
      "Cybersecurity Fundamentals & Threat Landscape",
      "Network Security & Firewalls",
      "Access Control & Identity Management",
      "Cryptography Basics",
      "Security Operations & Monitoring",
      "Incident Response & Recovery",
      "Security Policies & Compliance",
      "Hands-on Security Lab Exercises",
    ],
    technologies: [
      "Wireshark",
      "Nmap",
      "Windows Defender / Firewalls",
      "Linux",
      "Virtual Machines",
    ],
    careerPaths: [
      "Cybersecurity Analyst",
      "IT Security Officer",
      "Network Security Specialist",
      "Security Operations Associate",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/cybersecurity-1.jpg", "/images/cybersecurity-2.jpg"],
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    subtitle: "Penetration Testing & Security Auditing",
    category: "Skill Builder",
    duration: "2 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=870&auto=format&fit=crop",
    badge: "Hands-on Labs",
    shortDescription:
      "Think like an attacker to find and fix vulnerabilities before criminals do.",
    longDescription:
      "Ethical Hacking teaches the offensive security mindset within a legal, professional framework. You will perform reconnaissance, vulnerability scanning, exploitation, and reporting in controlled lab environments, learning how organisations test and harden their defenses.",
    keyFeatures: [
      "Ethical Hacking Methodology & Ethics",
      "Reconnaissance & Footprinting",
      "Vulnerability Scanning & Enumeration",
      "System & Network Exploitation",
      "Web Application Hacking Basics",
      "Password Attacks & Privilege Escalation",
      "Wireless Security Testing",
      "Penetration Test Reporting",
    ],
    technologies: [
      "Kali Linux",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "Wireshark",
      "Hydra",
    ],
    careerPaths: [
      "Ethical Hacker",
      "Penetration Tester",
      "Security Consultant",
      "Vulnerability Analyst",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/ethical-hacking-1.jpg", "/images/ethical-hacking-2.jpg"],
  },
  {
    id: "responsive-web-development",
    title: "Responsive Web Development",
    subtitle: "HTML5, CSS3 & JavaScript",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Build modern, mobile-first websites that look great on every screen.",
    longDescription:
      "Start your web development journey with the fundamental technologies of the web. You will structure pages with HTML5, style them with modern CSS3, add interactivity with JavaScript, and apply responsive and accessible design principles to ship a portfolio-ready website.",
    keyFeatures: [
      "HTML5 Semantics & Structure",
      "CSS3 Styling (Flexbox, Grid, Animations)",
      "Responsive & Mobile-First Design",
      "JavaScript Fundamentals (ES6+)",
      "DOM Manipulation & Events",
      "Form Validation",
      "Basic API Integration",
      "Portfolio Website Project",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Bootstrap / Tailwind",
      "Git Basics",
      "Chrome DevTools",
    ],
    careerPaths: [
      "Junior Web Developer",
      "Frontend Developer",
      "Web Designer",
      "Freelance Web Designer",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/webdesign-1.jpg", "/images/webdesign-2.jpg"],
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel",
    subtitle: "Data Analysis, Dashboards & Automation",
    category: "Skill Builder",
    duration: "5 weeks",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=870&auto=format&fit=crop",
    badge: "High Demand",
    shortDescription:
      "Master advanced formulas, pivot tables, dashboards, and workflow automation in Excel.",
    longDescription:
      "Advanced Excel takes you beyond the basics into professional data analysis. You will master complex formulas, PivotTables, Power Query, charting, and dashboard design, plus macros and VBA basics to automate repetitive reporting tasks.",
    keyFeatures: [
      "Advanced Formulas & Functions",
      "Lookup Functions (VLOOKUP, XLOOKUP, INDEX/MATCH)",
      "PivotTables & PivotCharts",
      "Power Query & Data Transformation",
      "What-If Analysis & Data Modelling",
      "Interactive Dashboards & Visualisation",
      "Macros & VBA Automation Basics",
      "Business Reporting Project",
    ],
    technologies: [
      "Microsoft Excel (Advanced)",
      "Power Query",
      "Pivot Tables",
      "VBA Basics",
      "Power Pivot",
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "Finance Analyst",
      "Operations Analyst",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/advanced-excel-1.jpg", "/images/advanced-excel-2.jpg"],
  },
  {
    id: "software-project-management",
    title: "Software Project Management",
    subtitle: "Agile, Scrum & Delivery",
    category: "Skill Builder",
    duration: "2 months",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Plan, lead, and deliver software projects on time using Agile and Scrum.",
    longDescription:
      "This course covers the full software project lifecycle — from scoping and estimating to scheduling, risk management, and delivery. You will apply Agile and Scrum practices, use project management tools, and learn how to lead teams and communicate with stakeholders.",
    keyFeatures: [
      "Software Development Life Cycle (SDLC)",
      "Agile & Scrum Frameworks",
      "Project Scoping, Estimation & Scheduling",
      "Risk & Issue Management",
      "Requirements & Stakeholder Management",
      "Team Leadership & Communication",
      "Project Tracking Tools (Jira, Trello)",
      "Capstone Project Plan",
    ],
    technologies: [
      "Jira",
      "Trello",
      "Microsoft Project",
      "Confluence",
      "Git / GitHub",
    ],
    careerPaths: [
      "Project Coordinator",
      "Scrum Master",
      "Junior Project Manager",
      "Product Owner",
      "Delivery Analyst",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/spm-1.jpg", "/images/spm-2.jpg"],
  },
  {
    id: "programming-in-c",
    title: "Programming in C",
    subtitle: "C Fundamentals & Problem Solving",
    category: "Skill Builder",
    duration: "1 month",
    certification: "Certificate of Completion",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Build a rock-solid programming foundation with the C language.",
    longDescription:
      "Programming in C introduces the building blocks of programming through one of the most influential languages. You will learn variables and data types, control flow, functions, arrays, pointers, and file handling — the foundations that make learning any other language easier.",
    keyFeatures: [
      "Variables, Data Types & Operators",
      "Control Flow (Conditionals & Loops)",
      "Functions & Modular Programming",
      "Arrays & Strings",
      "Pointers & Memory Basics",
      "Structures & Unions",
      "File Handling",
      "Problem-solving Assignments",
    ],
    technologies: [
      "C (C11)",
      "GCC Compiler",
      "Code::Blocks / VS Code",
      "GDB Debugger",
    ],
    careerPaths: [
      "Junior C Developer",
      "Embedded Systems Trainee",
      "Software Engineering Student",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/c-1.jpg", "/images/c-2.jpg"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const SkillBuilderCourses = ({ openModal }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
    margin: "-50px 0px -50px 0px",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="skill-builder"
      className="py-16 bg-gray-50 px-6 md:px-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Skill Builder"
          title="Foundation & Short Courses"
          description="Quick, focused programs to build essential skills for career advancement."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {skillBuilderCourses.map((course, index) => (
            <SkillCard
              key={course.id}
              course={course}
              onClick={openModal}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillBuilderCourses;
