"use client";

import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";

const careerCourses = [
  {
    id: "accp",
    title: "ACCP",
    subtitle: "Aptech Certified Computer Professional",
    category: "Career Course",
    duration: "24+ months",
    certification: "Global Certification",
    image: "/images/accp.jpg",
    badge: "Most Popular",
    shortDescription: "Complete software engineering program covering full-stack development, cloud computing, and enterprise applications.",
    longDescription: "ACCP (Aptech Certified Computer Professional) is a comprehensive career program designed to transform beginners into industry-ready software engineers. Developed by Aptech's global R&D team, this course follows a 'reverse design' methodology — analyzing real job market demands to build relevant skills.[citation:5]",
    keyFeatures: [
      "Full-stack development (Frontend + Backend)",
      "Cloud Computing (AWS, Azure, Google Cloud)",
      "Mobile App Development (Android & iOS)",
      "Enterprise Application Development (.NET, Java)",
      "Database Management (SQL Server, MySQL, MongoDB)",
      "Project Management & Agile Methodologies",
      "1.5+ years of coding practice (50,000+ lines of code)",
      "Global certifications recognized in 50+ countries"
    ],
    technologies: [
      "HTML5/CSS3/JavaScript", "React/Angular", "Node.js/PHP", "Java/.NET/C#",
      "Python/R", "SQL Server/MySQL/MongoDB", "AWS/Azure", "Git/GitHub"
    ],
    careerPaths: [
      "Software Engineer", "Full Stack Developer", "Web Application Developer",
      "Mobile App Developer", "Database Administrator", "Cloud Solutions Architect"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/accp-1.jpg", "/images/accp-2.jpg", "/images/accp-3.jpg"]
  },
  {
    id: "acns",
    title: "ACNS",
    subtitle: "Aptech Certified Network Specialist",
    category: "Career Course",
    duration: "18+ months",
    certification: "Global Certification",
    image: "/images/acns.jpg",
    shortDescription: "Comprehensive networking and cybersecurity program for IT infrastructure professionals.",
    longDescription: "ACNS is designed for students and professionals who want to build a career in networking and cybersecurity. The program provides comprehensive training in networking concepts, system administration, security fundamentals, and cloud computing — all aligned with industry needs.[citation:2]",
    keyFeatures: [
      "Networking Fundamentals (IP addressing, subnetting, routing)",
      "System Administration (Windows & Linux)",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing (AWS, Microsoft Azure)",
      "Firewall Configuration & Security Protocols",
      "Hands-on lab training with real equipment",
      "CompTIA & Cisco certification preparation"
    ],
    technologies: [
      "Cisco Networking", "Windows Server", "Linux (Red Hat/Ubuntu)",
      "AWS/Azure Cloud", "Firewall (Palo Alto/Fortinet)",
      "Wireshark/Nmap", "VMware/Hyper-V"
    ],
    careerPaths: [
      "Network Administrator", "System Administrator", "Cybersecurity Analyst",
      "IT Support Specialist", "Cloud Administrator", "Network Engineer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/acns-1.jpg", "/images/acns-2.jpg", "/images/acns-3.jpg"]
  },
  {
    id: "arena-multimedia",
    title: "Arena Multimedia",
    subtitle: "Animation & VFX Professional",
    category: "Career Course",
    duration: "25 months",
    certification: "Industry Certificate",
    image: "/images/arena-multimedia.jpg",
    badge: "Creative Track",
    shortDescription: "Professional program in animation, VFX, gaming, and multimedia design.",
    longDescription: "Arena Multimedia's career course provides comprehensive training in animation, VFX, gaming, and multimedia design. With a focus on portfolio development and industry-standard tools, students graduate with a professional showreel and job-ready skills.[citation:3][citation:6]",
    keyFeatures: [
      "2D & 3D Animation",
      "VFX Compositing (Nuke, After Effects)",
      "3D Modeling & Sculpting (Maya, ZBrush, 3ds Max)",
      "Game Design & Development",
      "Motion Graphics & Broadcast Design",
      "UI/UX Design for Interactive Media",
      "Professional portfolio development",
      "Industry workshops & placement assistance"
    ],
    technologies: [
      "Autodesk Maya/3ds Max", "Adobe Photoshop/Illustrator", "Adobe After Effects",
      "Adobe Premiere Pro", "Blender/ZBrush", "Unity/Unreal Engine",
      "Nuke", "Cinema 4D"
    ],
    careerPaths: [
      "3D Animator", "VFX Artist", "Motion Graphics Designer",
      "Game Designer", "Multimedia Specialist", "UI/UX Designer"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/arena-1.jpg", "/images/arena-2.jpg", "/images/arena-3.jpg"]
  }
];

const CareerCourses = ({ openModal }) => {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Career Programs"
          title="Professional Career Courses"
          description="Comprehensive, industry-aligned programs designed to launch your career in tech."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={openModal}
              variant={index === 0 ? "highlight" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCourses;