"use client";

import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";

const smartProfessionalCourses = [
  {
    id: "full-stack-dev",
    title: "Full Stack Development",
    subtitle: "MERN/MEAN/Python",
    category: "Smart Professional",
    duration: "6 months",
    certification: "Professional Certificate",
    image: "/images/fullstack.jpg",
    shortDescription: "Master frontend and backend development with modern frameworks and tools.",
    longDescription: "This intensive program covers both frontend and backend development using modern frameworks. Students learn to build complete web applications from scratch, deploy to cloud platforms, and follow industry best practices. The curriculum is aligned with current job market demands and includes real-world projects.",
    keyFeatures: [
      "Frontend: React, Angular, or Vue.js",
      "Backend: Node.js, Python/Django, or PHP/Laravel",
      "Database: MongoDB, PostgreSQL, MySQL",
      "RESTful APIs & GraphQL",
      "Authentication & Authorization",
      "Deployment (Vercel, Netlify, AWS)",
      "Version Control with Git",
      "Real-world capstone projects"
    ],
    technologies: [
      "React.js/Angular", "Node.js/Express", "Python/Django",
      "MongoDB/PostgreSQL", "Git/GitHub", "Docker", "AWS"
    ],
    careerPaths: [
      "Full Stack Developer", "Frontend Developer", "Backend Developer",
      "Web Application Developer", "JavaScript Developer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/fullstack-1.jpg", "/images/fullstack-2.jpg"]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    subtitle: "Python, R, Machine Learning",
    category: "Smart Professional",
    duration: "6 months",
    certification: "Professional Certificate",
    image: "/images/datascience.jpg",
    shortDescription: "Learn data analysis, visualization, and machine learning with industry tools.",
    longDescription: "Data Science is one of the fastest-growing fields globally. This program equips students with skills in Python programming, statistical analysis, data visualization, and machine learning. Students work on real datasets and build predictive models,citation:4]",
    keyFeatures: [
      "Python Programming for Data Science",
      "Data Analysis with Pandas & NumPy",
      "Data Visualization (Matplotlib, Seaborn, Tableau)",
      "SQL for Data Extraction",
      "Machine Learning (Scikit-learn)",
      "Statistical Analysis & A/B Testing",
      "Big Data Fundamentals",
      "Capstone industry project"
    ],
    technologies: [
      "Python", "Pandas/NumPy", "Matplotlib/Seaborn",
      "Scikit-learn", "SQL", "Tableau/Power BI", "Jupyter Notebooks"
    ],
    careerPaths: [
      "Data Analyst", "Data Scientist", "Business Intelligence Analyst",
      "Machine Learning Engineer", "Data Engineer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/datascience-1.jpg", "/images/datascience-2.jpg"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "User Interface & Experience",
    category: "Smart Professional",
    duration: "4 months",
    certification: "Professional Certificate",
    image: "/images/uiux.jpg",
    shortDescription: "Master design thinking, prototyping, and user research for digital products.",
    longDescription: "This program focuses on user-centered design principles, research methodologies, and prototyping tools. Students learn to create intuitive, accessible, and visually appealing interfaces for web and mobile applications. The course includes portfolio development and real client projects.",
    keyFeatures: [
      "Design Thinking Methodology",
      "User Research & Persona Creation",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Usability Testing",
      "Mobile-First Design",
      "Design Systems & Component Libraries",
      "Portfolio Development"
    ],
    technologies: [
      "Figma", "Adobe XD", "Sketch",
      "Miro/MURAL", "InVision", "Adobe Photoshop/Illustrator"
    ],
    careerPaths: [
      "UI/UX Designer", "Product Designer", "Interaction Designer",
      "User Researcher", "Visual Designer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/uiux-1.jpg", "/images/uiux-2.jpg", "/images/uiux-3.jpg"]
  }
];

const SmartProfessionalCourses = ({ openModal }) => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Smart Professional"
          title="Specialized Professional Programs"
          description="Short-term, focused programs to upskill and advance your career."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartProfessionalCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={openModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartProfessionalCourses;