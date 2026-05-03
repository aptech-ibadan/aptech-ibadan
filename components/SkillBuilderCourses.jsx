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
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=736&auto=format&fit=crop",
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
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "SEO, Social Media, Analytics",
    category: "Skill Builder",
    duration: "3 months",
    certification: "Certificate of Completion",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=870&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop",
    shortDescription: "Learn Python fundamentals for automation, data analysis, or web development.",
    longDescription: "Python is one of the most versatile and in-demand programming languages. This course covers Python fundamentals, data structures, file handling, and automation scripts.",
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
  },
  {
    id: "office-automation",
    title: "Office Automation",
    subtitle: "Excel, Word, PowerPoint Expert",
    category: "Skill Builder",
    duration: "3 months",
    certification: "MOS Certification",
    image: "https://images.unsplash.com/photo-1649433391420-542fcd3835ea?q=80&w=870&auto=format&fit=crop",
    badge: "Internationally Recognized",
    shortDescription: "Earn globally recognized Microsoft Office Specialist certification and boost your career prospects.",
    longDescription: "The Microsoft Office Specialist (MOS) certification is an internationally recognized credential that validates your expertise in Microsoft Office applications. This course prepares you for MOS exams in Word, Excel, PowerPoint, and Outlook. MOS certification can boost your earning potential by up to 20% and is recognized by employers worldwide.",
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
      "Internationally Recognized Certification"
    ],
    technologies: [
      "Microsoft Word (Advanced)", "Microsoft Excel (Advanced)",
      "Microsoft PowerPoint (Advanced)", "Microsoft Outlook",
      "VBA Basics", "Power Query", "Pivot Tables"
    ],
    careerPaths: [
      "Data Analyst", "Business Analyst", "Office Manager",
      "Executive Assistant", "Project Coordinator", "Operations Manager",
      "Administrative Professional", "Compliance Officer", "Finance Assistant"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/mos-1.jpg", "/images/mos-2.jpg", "/images/mos-3.jpg"]
  },
  {
    id: "graphic-designing",
    title: "Certificate in Graphic Designing",
    subtitle: "Photoshop, Illustrator, InDesign",
    category: "Skill Builder",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=871&auto=format&fit=crop",
    certification: "Certificate of Accomplishment",
    shortDescription: "Master the fundamentals of graphic design including illustrations, image editing, and page layout for print and digital media.",
    longDescription: "Master the fundamentals of graphic design including illustrations, image editing, and page layout for print and digital media. Learn industry-standard tools and create professional designs for logos, brochures, social media, and marketing materials.",
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
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe InCopy"],
    careerPaths: ["Graphic Designer", "Illustrator", "Photo Editor", "Layout Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/graphicdesign-1.jpg", "/images/graphicdesign-2.jpg"]
  },
  {
    id: "audio-video-editing",
    title: "Certificate in Audio-Video Editing",
    subtitle: "Audition, Premier Pro",
    category: "Skill Builder",
    duration: "1-2 months",
    image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=387&auto=format&fit=crop",
    certification: "Certificate of Accomplishment",
    shortDescription: "Learn professional audio and video editing techniques for content creation, filmmaking, and digital media production.",
    longDescription: "Learn professional audio and video editing techniques for content creation, filmmaking, and digital media production. Master Adobe Audition for sound design and Premier Pro for video editing.",
    keyFeatures: [
      "Digital Soundtrack with Adobe Audition",
      "Audio Recording & Editing",
      "Noise Reduction & Audio Effects",
      "Video Editing with Adobe Premier Pro",
      "Timeline Editing & Transitions",
      "Color Correction & Grading",
      "Title & Text Animation",
      "Export & Rendering Optimization"
    ],
    technologies: ["Adobe Audition", "Adobe Premier Pro"],
    careerPaths: ["Audio Editor", "Video Editor", "Content Creator", "Post-Production Specialist"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/audio-video-1.jpg", "/images/audio-video-2.jpg"]
  },
  {
    id: "digital-graphics-animation",
    title: "Certificate in Digital Graphics and Animation",
    subtitle: "Photoshop, Illustrator, Premier Pro, Audition, 3Ds Max",
    category: "Skill Builder",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1694422789021-54bd74b39f52?q=80&w=928&auto=format&fit=crop",
    certification: "Certificate of Accomplishment",
    shortDescription: "Comprehensive foundation program covering graphic design, video editing, audio editing, and basic 3D animation.",
    longDescription: "Comprehensive foundation program covering graphic design, video editing, audio editing, and basic 3D animation. Perfect for beginners wanting a well-rounded education in digital media.",
    keyFeatures: [
      "Graphic Design Fundamentals",
      "Image Editing & Manipulation",
      "Video Editing Techniques",
      "Audio Editing & Sound Design",
      "Basic 3D Modeling & Animation",
      "Typography & Layout Design",
      "Print & Digital Publishing",
      "Portfolio Development"
    ],
    technologies: ["Photoshop", "Illustrator", "Premier Pro", "Audition", "3Ds Max"],
    careerPaths: ["Graphic Designer", "Video Editor", "3D Generalist", "Multimedia Specialist"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/dga-1.jpg", "/images/dga-2.jpg"]
  },
  {
    id: "basics-3d-animation",
    title: "Certificate in Basics of 3D Animation",
    subtitle: "3D Modeling, Rigging, Animation Fundamentals",
    category: "Skill Builder",
    duration: "1-2 months",
    image: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=774&auto=format&fit=crop",
    certification: "Certificate of Accomplishment",
    shortDescription: "Foundation course introducing the core concepts of 3D animation including modeling, texturing, lighting, rigging, and animation.",
    longDescription: "Foundation course introducing the core concepts of 3D animation including modeling, texturing, lighting, rigging, and animation. Start your journey into the exciting world of 3D animation.",
    keyFeatures: [
      "3D Modeling Fundamentals",
      "Texturing & Materials",
      "Lighting Techniques",
      "Rigging Basics",
      "Keyframe Animation",
      "Rendering with Vray",
      "Scene Composition",
      "Portfolio Creation"
    ],
    technologies: ["Maya", "3Ds Max", "Vray"],
    careerPaths: ["Junior 3D Animator", "3D Modeler", "Rigging Assistant", "Texture Artist"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/3d-basics-1.jpg", "/images/3d-basics-2.jpg"]
  },
  {
    id: "2d-digital-animation",
    title: "Certificate in 2D Digital Animation",
    subtitle: "Adobe Animate, 2D Animation Concepts",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1666158609678-d608c9512e83?q=80&w=588&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Learn to create engaging 2D digital animations using Adobe Animate for web, social media, and multimedia projects.",
    longDescription: "Learn to create engaging 2D digital animations using Adobe Animate for web, social media, and multimedia projects. Master the art of frame-by-frame and tween animation.",
    keyFeatures: [
      "2D Animation Principles",
      "Frame-by-Frame Animation",
      "Motion Tweening",
      "Shape Tweening",
      "Symbol Creation & Management",
      "Timeline Control",
      "Interactive Animations",
      "Export for Web & Video"
    ],
    technologies: ["Adobe Animate CC"],
    careerPaths: ["2D Animator", "Motion Graphics Designer", "Web Animator"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/2d-animation-1.jpg", "/images/2d-animation-2.jpg"]
  },
  {
    id: "web-animation-using-animate",
    title: "Web Animation using Animate CC",
    subtitle: "Adobe Animate, Interactive Web Animations",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=1160&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Create interactive web animations, banners, and rich media content using Adobe Animate CC.",
    longDescription: "Create interactive web animations, banners, and rich media content using Adobe Animate CC. Learn to create engaging animated content for websites and digital advertising.",
    keyFeatures: [
      "Web Animation Fundamentals",
      "Banner Ad Creation",
      "Interactive Buttons & Navigation",
      "Animation Timeline Management",
      "ActionScript Basics",
      "HTML5 Canvas Publishing",
      "Responsive Animation Design",
      "Performance Optimization"
    ],
    technologies: ["Adobe Animate CC", "HTML5 Canvas", "JavaScript"],
    careerPaths: ["Web Animator", "Motion Graphics Designer", "Digital Ad Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/web-animation-1.jpg", "/images/web-animation-2.jpg"]
  },
  {
    id: "motion-graphics-after-effects",
    title: "Motion Graphics - After Effects",
    subtitle: "Adobe After Effects, Motion Design",
    category: "Skill Builder",
    duration: "1-2 months",
    image: "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=415&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Master motion graphics and visual effects for videos, advertisements, and digital content using Adobe After Effects.",
    longDescription: "Master motion graphics and visual effects for videos, advertisements, and digital content using Adobe After Effects. Create stunning animated titles, logos, and visual effects.",
    keyFeatures: [
      "After Effects Interface & Workflow",
      "Keyframe Animation",
      "Motion Graphics Design",
      "Title & Text Animation",
      "Visual Effects Compositing",
      "Green Screen Keying",
      "Tracking & Stabilization",
      "Expression & Automation"
    ],
    technologies: ["Adobe After Effects", "Adobe Media Encoder"],
    careerPaths: ["Motion Graphics Designer", "VFX Artist", "Video Editor", "Digital Content Creator"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/motion-graphics-1.jpg", "/images/motion-graphics-2.jpg"]
  },
  {
    id: "print-publishing",
    title: "Print and Publishing",
    subtitle: "InDesign, Photoshop, Illustrator",
    category: "Skill Builder",
    duration: "1-2 months",
    image: "https://images.unsplash.com/photo-1659560893493-9b565e1a26a5?q=80&w=1032&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Learn professional print design and publishing for magazines, brochures, books, and marketing materials.",
    longDescription: "Learn professional print design and publishing for magazines, brochures, books, and marketing materials. Master layout design and prepress preparation.",
    keyFeatures: [
      "Publication Layout Design",
      "Master Pages & Templates",
      "Typography for Print",
      "Color Management (CMYK)",
      "Image Integration",
      "Prepress & Bleed Setup",
      "PDF Export & Printing",
      "Digital Publishing Alternatives"
    ],
    technologies: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
    careerPaths: ["Print Designer", "Publication Designer", "Layout Artist", "Production Artist"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/print-1.jpg", "/images/print-2.jpg"]
  },
  {
    id: "digital-illustrations",
    title: "Digital Illustrations",
    subtitle: "Illustrator, CorelDraw, Digital Art",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?q=80&w=867&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Create stunning digital illustrations, vector art, and character designs using industry-standard illustration tools.",
    longDescription: "Create stunning digital illustrations, vector art, and character designs using industry-standard illustration tools. Perfect for aspiring illustrators and digital artists.",
    keyFeatures: [
      "Vector Art Fundamentals",
      "Pen Tool Mastery",
      "Shape Building Techniques",
      "Color Theory for Digital Art",
      "Gradient & Pattern Creation",
      "Character Design",
      "Logo & Icon Design",
      "Print-Ready Illustrations"
    ],
    technologies: ["Adobe Illustrator", "CorelDraw"],
    careerPaths: ["Digital Illustrator", "Vector Artist", "Character Designer", "Logo Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/digital-illustrations-1.jpg", "/images/digital-illustrations-2.jpg"]
  },
  {
    id: "photoshop-mastery",
    title: "Photoshop Mastery",
    subtitle: "Photo Editing, Manipulation, Retouching",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1740174459726-8c57d8366061?q=80&w=580&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Master Adobe Photoshop for photo editing, image manipulation, retouching, and digital art creation.",
    longDescription: "Master Adobe Photoshop for photo editing, image manipulation, retouching, and digital art creation. Become proficient in the world's leading image editing software.",
    keyFeatures: [
      "Photoshop Interface & Tools",
      "Layer Management",
      "Selection Techniques",
      "Photo Retouching & Healing",
      "Color Correction & Grading",
      "Masking & Compositing",
      "Filters & Effects",
      "Digital Painting Basics"
    ],
    technologies: ["Adobe Photoshop"],
    careerPaths: ["Photo Editor", "Retoucher", "Digital Artist", "Graphic Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/photoshop-1.jpg", "/images/photoshop-2.jpg"]
  },
  {
    id: "coreldraw-design",
    title: "CorelDraw Design",
    subtitle: "Vector Graphics, Logo Design",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1695634621295-8f83685a35bb?q=80&w=870&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Learn vector graphic design, logo creation, and branding materials using CorelDraw.",
    longDescription: "Learn vector graphic design, logo creation, and branding materials using CorelDraw. A popular alternative to Illustrator for vector design work.",
    keyFeatures: [
      "CorelDraw Interface & Tools",
      "Vector Shape Creation",
      "Logo & Brand Design",
      "Typography in CorelDraw",
      "Color Management",
      "Object Manipulation",
      "Print Preparation",
      "Export for Web & Print"
    ],
    technologies: ["CorelDraw"],
    careerPaths: ["Graphic Designer", "Logo Designer", "Brand Identity Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/coreldraw-1.jpg", "/images/coreldraw-2.jpg"]
  },
  {
    id: "media-publishing",
    title: "Media Publishing",
    subtitle: "InDesign, Digital Publishing",
    category: "Skill Builder",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1169&auto=format&fit=crop",
    certification: "Certificate of Participation",
    shortDescription: "Master digital and print media publishing for magazines, eBooks, and digital publications.",
    longDescription: "Master digital and print media publishing for magazines, eBooks, and digital publications using Adobe InDesign and modern publishing tools.",
    keyFeatures: [
      "Digital Publishing Fundamentals",
      "Interactive PDF Creation",
      "eBook Formatting & Export",
      "Magazine Layout Design",
      "Digital Magazine Publishing",
      "Responsive Layouts",
      "Multimedia Integration",
      "Cross-Platform Publishing"
    ],
    technologies: ["Adobe InDesign", "Digital Publishing Suite"],
    careerPaths: ["Publication Designer", "Digital Publisher", "eBook Designer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/media-publishing-1.jpg", "/images/media-publishing-2.jpg"]
  },
  {
    id: "working-with-audio",
    title: "Working with Audio",
    subtitle: "Audition, Audio Editing",
    category: "Skill Builder",
    image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=387&auto=format&fit=crop",
    duration: "1 month",
    certification: "Certificate of Participation",
    shortDescription: "Learn professional audio editing, recording, and sound design for videos, podcasts, and multimedia.",
    longDescription: "Learn professional audio editing, recording, and sound design for videos, podcasts, and multimedia using Adobe Audition and industry-standard techniques.",
    keyFeatures: [
      "Audio Recording Techniques",
      "Noise Reduction & Restoration",
      "Audio Effects & Processing",
      "Multitrack Mixing",
      "Voice-over Production",
      "Podcast Editing",
      "Sound Design Basics",
      "Export for Different Platforms"
    ],
    technologies: ["Adobe Audition"],
    careerPaths: ["Audio Editor", "Sound Designer", "Podcast Producer"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: ["/images/audio-1.jpg", "/images/audio-2.jpg"]
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