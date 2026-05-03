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
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "Arena Multimedia SP",
    subtitle: "Animation & VFX Professional",
    category: "Career Course",
    duration: "25 months",
    certification: "Industry Certificate",
    image: "https://images.unsplash.com/photo-1707112244265-b14d638dd121?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New Creative Track",
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
  },
    {
    id: "realtime-3d-game-art",
    title: "Realtime 3D & Game Art",
    subtitle: "Unity, Unreal Engine, Game Development",
    category: "Career Course",
    duration: "6-8 months",
    hours: 190,
      certification: "Professional Certificate",
    image:  "https://res.cloudinary.com/ddldviftf/image/upload/v1777742251/Gemini_Generated_Image_13t7kj13t7kj13t7_irqdag.png",
    source: "Arena Multimedia",
    description: "Comprehensive program covering game design, level design, Unity, Unreal Engine, and asset integration for creating immersive 3D game environments.",
    keyFeatures: [
      "Visual Design for Games",
      "UI Design for Games",
      "Games Production Process",
      "Unity Game Engine (Interface, Level Designing)",
      "Unreal Engine (Getting Started, Working, Asset Integration)",
      "Blueprints Visual Scripting",
      "Level Designing & Publishing"
    ],
    technologies: ["Unity", "Unreal Engine", "Blueprints"],
    careerPaths: [
      "Game Designer",
      "UI Designer for Games",
      "Level Designer",
      "Game Asset Integration Artist",
      "Unreal Generalist",
      "Environment Artist"
    ],
    hardwareRequirements: {
      processor: "Intel i7 / AMD Ryzen 7+",
      ram: "16GB (32GB recommended)",
      storage: "512GB SSD + 1TB HDD",
      gpu: "4GB Discrete (8GB NVIDIA RTX recommended)"
    }
  },
  {
    id: "vfx-animation-films",
    title: "VFX For Animation & Films",
    subtitle: "Nuke, Houdini, Matchmoving, Compositing",
    category: "Career Course",
    duration: "6-8 months",
    image: "https://res.cloudinary.com/ddldviftf/image/upload/v1777742269/Gemini_Generated_Image_nw2hcsnw2hcsnw2h_boovle.png",
    hours: 190,
    certification: "Professional Certificate",
    source: "Arena Multimedia",
    description: "Professional VFX program covering pre to post-production, compositing, matchmoving, rotoscopy, and advanced effects using industry-standard tools.",
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
      "Visual Fx with Houdini"
    ],
    technologies: ["Nuke Foundry", "Silhouette", "3D Equalizer", "Houdini", "Maya", "Premiere Pro"],
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
      "Motion Designer"
    ],
    hardwareRequirements: {
      processor: "Intel i7 / AMD Ryzen 7+",
      ram: "16GB (32GB recommended)",
      storage: "512GB SSD + 1TB HDD",
      gpu: "4GB Discrete (8GB NVIDIA RTX recommended)"
    }
  }
];

const CareerCourses = ({ openModal }) => {
  return (
    <section id="professional" className="py-16 bg-white px-6 md:px-16">
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