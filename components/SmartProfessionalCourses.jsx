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
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  },
   {
    id: "advanced-3d-animation-maya",
    title: "Advanced 3D Animation with Maya",
    subtitle: "3D Modeling, Rigging, Texturing, Lighting, Animation",
    category: "Smart Professional",
     duration: "3-4 months",
    image:"https://images.unsplash.com/photo-1627012441283-79151a20adf6?q=80&w=467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hours: 100,
    certification: "Certificate of Accomplishment",
    source: "Arena Multimedia",
    description: "Master professional 3D animation using Autodesk Maya. Learn modeling, texturing, rigging, lighting, and rendering techniques used in the animation industry.",
    learningOutcomes: [
      "Prepare 3D models using various Modeling tools",
      "Create and edit textures for aesthetics",
      "Create dramatic studio lighting using Maya techniques",
      "Apply rigging on various models",
      "Set up and animate characters",
      "Render images with Arnold renderer"
    ],
    technologies: ["Autodesk Maya", "Arnold Renderer"],
    careerPaths: [
      "3D Animator",
      "3D Modeler",
      "Rigging Artist",
      "Texture Artist",
      "Lighting Artist"
    ]
  },
  {
    id: "3d-modeling-animation",
    title: "3D Modeling and Animation",
    subtitle: "3Ds Max, Modeling, Texturing, Animation",
    category: "Smart Professional",
    duration: "2-3 months",
    image:"https://images.unsplash.com/photo-1651611243377-2c15b94ad613?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hours: 80,
    certification: "Certificate of Accomplishment",
    source: "Arena Multimedia",
    description: "Learn 3D modeling, texturing, and animation using 3Ds Max. Create stunning 3D assets and animations for games, films, and architectural visualization.",
    learningOutcomes: [
      "Understand basics of 3D modeling, rigging, and animation",
      "Render different passes in Vray",
      "Prepare 3D models using various Modeling tools",
      "Create and edit textures",
      "Create dramatic studio lighting techniques in Maya",
      "Apply rigging on various models",
      "Set up and animate characters"
    ],
    technologies: ["3Ds Max", "Vray", "Maya"],
    careerPaths: [
      "3D Modeler",
      "3D Animator",
      "Texture Artist",
      "Lighting Artist"
    ]
  },
  {
    id: "3d-interior-designing",
    title: "3D Interior Designing",
    subtitle: "3D Modeling, Visualization, Interior Design",
    category: "Smart Professional",
    duration: "2-3 months",
    image:"https://images.unsplash.com/photo-1634382653568-8271aa4956fb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hours: 80,
    certification: "Certificate of Accomplishment",
    source: "Arena Multimedia",
    description: "Specialized program for interior designers to create stunning 3D visualizations of interior spaces, furniture, and architectural elements.",
    keyFeatures: [
      "3D Modeling for Interiors",
      "Texturing & Materials",
      "Lighting Techniques",
      "Interior Visualization",
      "Rendering with Vray",
      "Walkthrough Creation"
    ],
    technologies: ["3Ds Max", "Vray", "AutoCAD"],
    careerPaths: [
      "3D Interior Designer",
      "Interior Visualization Artist",
      "Architectural Visualizer"
    ]
  },
  {
    id: "industrial-art-autocad",
    title: "Industrial Art (AutoCAD)",
    subtitle: "Technical Drawing, 2D/3D Drafting, Industrial Design",
    category: "Smart Professional",
    duration: "2 months",
    hours: 60,
    image:"https://images.unsplash.com/photo-1637946902191-57cf1fe3c056?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    certification: "Certificate of Accomplishment",
    source: "Arena Multimedia",
    description: "Master AutoCAD for industrial design, architectural drafting, and technical drawing. Create precise 2D and 3D technical drawings for manufacturing and construction.",
    keyFeatures: [
      "2D Drafting & Detailing",
      "3D Modeling in AutoCAD",
      "Isometric Drawings",
      "Layer Management",
      "Dimensioning & Annotation",
      "Plotting & Printing"
    ],
    technologies: ["AutoCAD"],
    careerPaths: [
      "CAD Designer",
      "Industrial Designer",
      "Architectural Drafter",
      "Mechanical Drafter"
    ]
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