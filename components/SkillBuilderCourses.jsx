"use client";

import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";

const skillBuilderCourses = [
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "HTML5, CSS3, JavaScript",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image: "/images/webdesign.jpg",
    shortDescription: "Build responsive, modern websites from scratch with core web technologies.",
    longDescription: "Start your web development journey with this foundational course. Learn to build responsive websites using HTML5, CSS3, and JavaScript. Perfect for beginners wanting to enter tech or enhance their skill set.",
    keyFeatures: [
      "HTML5 Semantics & Structure",
      "CSS3 Styling (Flexbox, Grid, Animations)",
      "Responsive Design (Mobile-First)",
      "JavaScript Fundamentals (ES6+)",
      "DOM Manipulation & Events",
      "Form Validation",
      "Basic API Integration",
      "Portfolio Website Project"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript (ES6+)",
      "Bootstrap/Tailwind", "Git Basics", "Chrome DevTools"
    ],
    careerPaths: [
      "Junior Web Developer", "Frontend Developer", "Web Designer",
      "Freelance Web Designer", "Email Developer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/webdesign-1.jpg", "/images/webdesign-2.jpg"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "Photoshop, Illustrator, InDesign",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image: "/images/graphicdesign.jpg",
    shortDescription: "Master industry-standard design tools for print and digital media.",
    longDescription: "Learn the fundamentals of visual communication, typography, color theory, and layout design. Master Adobe Creative Suite tools to create logos, brochures, social media graphics, and marketing materials.",
    keyFeatures: [
      "Design Principles (Typography, Color, Layout)",
      "Adobe Photoshop (Photo Editing, Manipulation)",
      "Adobe Illustrator (Vector Graphics, Logos)",
      "Adobe InDesign (Print Layout)",
      "Branding & Identity Design",
      "Social Media Graphics",
      "Print Production Basics",
      "Professional Portfolio"
    ],
    technologies: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign",
      "Canva", "Figma Basics"
    ],
    careerPaths: [
      "Graphic Designer", "Visual Designer", "Social Media Designer",
      "Freelance Designer", "Production Artist"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/graphicdesign-1.jpg", "/images/graphicdesign-2.jpg"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "SEO, Social Media, Analytics",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image: "/images/digitalmarketing.jpg",
    shortDescription: "Learn to grow brands online with SEO, social media, and analytics.",
    longDescription: "This comprehensive course covers all aspects of digital marketing. Students learn SEO, social media marketing, email marketing, Google Analytics, and pay-per-click advertising.",
    keyFeatures: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Google Analytics & Data Insights",
      "Email Marketing Campaigns",
      "Content Marketing Strategy",
      "Pay-Per-Click (Google Ads)",
      "E-commerce Marketing",
      "Digital Marketing Certification Preparation"
    ],
    technologies: [
      "Google Analytics", "Google Ads", "Meta Business Suite",
      "Mailchimp", "SEMrush", "Canva"
    ],
    careerPaths: [
      "Digital Marketing Specialist", "SEO Specialist", "Social Media Manager",
      "Content Marketing Specialist", "Email Marketing Coordinator"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/digitalmarketing-1.jpg", "/images/digitalmarketing-2.jpg"]
  },
  {
    id: "python-programming",
    title: "Python Programming",
    subtitle: "From Basics to Automation",
    category: "Skill Builder",
    duration: "2 months",
    certification: "Certificate of Completion",
    image: "/images/python.jpg",
    shortDescription: "Learn Python fundamentals for automation, data analysis, or web development.",
    longDescription: "Python is one of the most versatile and in-demand programming languages. This course covers Python fundamentals, data structures, file handling, and automation scripts.[citation:4]",
    keyFeatures: [
      "Python Syntax & Basics",
      "Data Structures (Lists, Dictionaries, Tuples)",
      "Functions & Modules",
      "File I/O Operations",
      "Error Handling & Debugging",
      "Web Scraping Basics",
      "Automation Scripts",
      "Mini Projects"
    ],
    technologies: [
      "Python 3", "VS Code/PyCharm", "Jupyter Notebooks",
      "BeautifulSoup", "Pandas Basics"
    ],
    careerPaths: [
      "Junior Python Developer", "Automation Specialist", "Data Analyst Assistant",
      "Technical Support Engineer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/python-1.jpg", "/images/python-2.jpg"]
  }
];

const SkillBuilderCourses = ({ openModal }) => {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Skill Builder"
          title="Foundation & Short Courses"
          description="Quick, focused programs to build essential skills for career advancement."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillBuilderCourses.map((course) => (
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

export default SkillBuilderCourses;