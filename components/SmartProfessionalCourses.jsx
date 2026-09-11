"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

/*
 * Smart Professional — advanced, career-focused programs aimed at
 * specialisation and higher-value job roles.
 */
const smartProfessionalCourses = [
  {
    id: "data-analysis",
    slug: "data-analysis",
    title: "Data Analysis",
    subtitle: "Excel, SQL, Python & Tableau",
    category: "Smart Professional",
    duration: "3 months",
    certification: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
    badge: "High Demand",
    shortDescription:
      "Turn raw data into clear insight using Excel, SQL, Python, and interactive dashboards.",
    longDescription:
      "The Data Analysis program equips you to collect, clean, analyse, and visualise data so organisations can make confident, evidence-based decisions. You will work with spreadsheets, relational databases, and Python, and build interactive dashboards with Tableau — finishing with a portfolio-ready analytics project.",
    keyFeatures: [
      "Data Cleaning & Wrangling",
      "Advanced Excel for Analysis",
      "SQL Queries & Database Management",
      "Python for Data Analysis (Pandas & NumPy)",
      "Data Visualisation with Tableau & Power BI",
      "Descriptive & Inferential Statistics",
      "Dashboard Design & Storytelling",
      "Real-world Analytics Project",
    ],
    technologies: [
      "Microsoft Excel",
      "SQL Server",
      "Python (Pandas / NumPy)",
      "Tableau",
      "Power BI",
      "Jupyter Notebook",
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "Business Intelligence Analyst",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#3B82F6",
    icon: "📊",
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science",
    subtitle: "Python, Machine Learning & Statistics",
    category: "Smart Professional",
    duration: "6 months",
    certification: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=870&auto=format&fit=crop",
    badge: "Career Fast-track",
    shortDescription:
      "Master Python, statistics, and machine learning to build predictive models and AI-driven solutions.",
    longDescription:
      "The Data Science program takes you from Python fundamentals to deploying machine learning models. You will learn statistics, data exploration, feature engineering, and supervised and unsupervised learning, then apply them to a capstone project that mirrors real industry workflows.",
    keyFeatures: [
      "Python Programming for Data Science",
      "Statistics & Probability",
      "Exploratory Data Analysis",
      "Feature Engineering & Model Selection",
      "Machine Learning (Supervised & Unsupervised)",
      "Data Visualisation & Communication",
      "Model Evaluation & Deployment Basics",
      "Capstone Data Science Project",
    ],
    technologies: [
      "Python",
      "Pandas / NumPy",
      "Scikit-learn",
      "Matplotlib / Seaborn",
      "Jupyter / Google Colab",
      "SQL",
    ],
    careerPaths: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "AI Specialist",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#8B5CF6",
    icon: "🤖",
  },
  {
    id: "3d-animation",
    slug: "3d-animation",
    title: "3D Animation",
    subtitle: "Modelling, Rigging & Animation",
    category: "Smart Professional",
    duration: "6 months",
    certification: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=870&auto=format&fit=crop",
    shortDescription:
      "Create cinematic 3D characters and worlds — from modelling and texturing to rigging and animation.",
    longDescription:
      "The 3D Animation program builds a complete production pipeline skill set. You will model and sculpt assets, texture and light scenes, rig characters, and animate performances using industry-standard tools, graduating with a professional showreel that demonstrates your range.",
    keyFeatures: [
      "3D Modelling & Sculpting",
      "Texturing, Shading & Materials",
      "Lighting & Rendering Techniques",
      "Rigging & Skinning",
      "Keyframe & Character Animation",
      "Dynamics & Simulation Basics",
      "Compositing & Post-Production",
      "Professional Showreel Development",
    ],
    technologies: [
      "Autodesk Maya",
      "3ds Max",
      "Blender",
      "ZBrush",
      "V-Ray",
      "Adobe After Effects",
    ],
    careerPaths: [
      "3D Animator",
      "3D Modeler",
      "Rigging Artist",
      "Lighting Artist",
      "Texture Artist",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#F59E0B",
    icon: "🎬",
  },
  {
    id: "graphics-design",
    slug: "graphics-design",
    title: "Graphics Design",
    subtitle: "Photoshop, Illustrator & InDesign",
    category: "Smart Professional",
    duration: "4 months",
    certification: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=870&auto=format&fit=crop",
    badge: "Portfolio Ready",
    shortDescription:
      "Design brands, campaigns, and publications with the industry-standard Adobe creative tools.",
    longDescription:
      "The Graphics Design program covers design principles and the full Adobe creative workflow. You will create logos and brand identities, edit and composite imagery, lay out print and digital publications, and assemble a professional portfolio ready for clients and employers.",
    keyFeatures: [
      "Design Principles, Colour & Typography",
      "Vector Graphics with Adobe Illustrator",
      "Photo Editing & Compositing with Photoshop",
      "Print & Digital Layout with InDesign",
      "Logo & Brand Identity Design",
      "Social Media & Advertising Creatives",
      "Print Production & Prepress Basics",
      "Professional Portfolio Development",
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "CorelDraw",
      "Canva",
    ],
    careerPaths: [
      "Graphic Designer",
      "Logo & Brand Identity Designer",
      "Layout Artist",
      "Social Media Designer",
      "Photo Editor",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [],
    accentColor: "#EC4899",
    icon: "🎨",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const AnimatedCard = ({ course, index, openModal }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const col = index % 4;
  const row = Math.floor(index / 4);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: col * 0.1 + row * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      <SkillCard course={course} onClick={openModal} index={index} />
    </motion.div>
  );
};

const SmartProfessionalCourses = ({ openModal }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
    margin: "-50px 0px -50px 0px",
  });

  return (
    <motion.section
      ref={sectionRef}
      id="smart-professional"
      className="py-16 bg-white px-6 md:px-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Smart Professional"
          title="Smart Professional Programs"
          description="Advanced, career-focused programs that build deep, job-ready expertise and specialisation."
        />

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smartProfessionalCourses.map((course, index) => (
            <AnimatedCard
              key={course.id}
              course={course}
              index={index}
              openModal={openModal}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SmartProfessionalCourses;
