import { notFound } from "next/navigation";
import CourseClient from "./CourseClient";

const courseData = {
  miscpapp: {
    title: "Diploma in MIS and Cross-Platform App Development",
    tagline:
      "From office automation to cross-platform apps — all in one program.",
    description:
      "A comprehensive MIS and app development program covering data analysis, database management, Java programming, and cross-platform mobile development using Flutter and Dart.",

    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=870&auto=format&fit=crop",
    },

    outcomes:
      "Automate everyday tasks and leverage AI capabilities through Microsoft 365 and CoPilot. Create, analyze, and manipulate data using MS Excel. Normalize raw data into well-organized SQL Server database tables. Build programs using Python. Design dashboards and visualizations with Tableau. Exchange data using XML and JSON. Design GUI and object-oriented applications with Java. Implement Agile software development methodology. Build cross-platform mobile apps using Flutter and Dart.",

    terms: [
      {
        title: "Office & Data Tools",
        modules: [
          "Office Automation (MS Office 365)",
          "Data Analysis with MS Excel",
          "Data Management with SQL Server",
          "Visual Analytics with Tableau",
        ],
      },
      {
        title: "Programming Foundations",
        modules: [
          "Developing Applications with Python",
          "Data Processing with XML and JSON",
          "Java Programming - I",
          "Java Programming - II",
        ],
      },
      {
        title: "Professional Skills",
        modules: [
          "Soft Skills",
          "Agile and DevOps",
          "UI/UX for Mobile Development",
        ],
      },
      {
        title: "Mobile Development",
        modules: [
          "Introduction to Dart Programming",
          "Application Development Using Flutter and Dart",
        ],
      },
      {
        title: "Capstone",
        modules: ["Project - Cross Platform App Development"],
      },
    ],

    jobRoles: [
      "MIS Professional",
      "Data Analyst",
      "Data Visualizer",
      "Android App Developer",
      "Cross Platform App Developer (Android & iOS)",
    ],
  },

  dsaiml: {
    title: "Diploma in Data Science, AI, and Machine Learning",
    tagline:
      "Harness the power of Python, AI, and big data for real-world impact.",
    description:
      "An intensive data science and AI program covering machine learning, deep learning, NLP, big data with Hadoop, and advanced Python — culminating in a real-world capstone project.",

    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=870&auto=format&fit=crop",
    },

    outcomes:
      "Understand MongoDB concepts, features, and data model. Perform data mining tasks with WEKA. Build visualizations and dashboards with Tableau. Program confidently in Python. Apply NLP techniques and leverage AI in language applications. Master supervised and unsupervised machine learning algorithms. Understand the Hadoop ecosystem and big data processing lifecycle. Extract insights from data using Python's data science libraries. Implement advanced data science techniques. Master deep learning with TensorFlow. Develop a real-world capstone project on recommendation engines and customer churn prediction.",

    terms: [
      {
        title: "Data Foundations",
        modules: [
          "Managing Large Datasets with MongoDB",
          "Data Mining with WEKA",
          "Visual Analytics with Tableau",
          "Application Based Programming in Python",
        ],
      },
      {
        title: "AI & Machine Learning",
        modules: [
          "AI Applications of NLP",
          "AI and ML with Python",
          "Applied Machine Learning using Python",
        ],
      },
      {
        title: "Big Data & Advanced Data Science",
        modules: [
          "Foundations of Big Data Systems with Hadoop",
          "Data Science with Python",
          "Advanced Data Science with Python",
        ],
      },
      {
        title: "Deep Learning",
        modules: ["Deep Learning using Neural Networks"],
      },
      {
        title: "Capstone",
        modules: [
          "Capstone Project - Recommendation Engine and Customer Churn Prediction",
        ],
      },
    ],

    jobRoles: ["Data Analytics Professional", "AI Developer", "ML Developer"],
  },

  nwad: {
    title: "Diploma in Network Administration",
    tagline: "Build, manage, and secure enterprise networks with confidence.",
    description:
      "A complete network administration program covering Windows desktop management, cloud infrastructure with Microsoft Azure, Cisco enterprise networking, and cybersecurity fundamentals.",

    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=870&auto=format&fit=crop",
    },

    outcomes:
      "Install, configure, and maintain Windows systems and protect devices and data. Establish, maintain, and troubleshoot essential business networks. Gain foundational knowledge of Microsoft Azure cloud services. Implement and manage identity, governance, storage, compute, and virtual networks in the cloud. Manage on-premises and hybrid solutions. Understand network fundamentals, IP connectivity, and security. Gain knowledge in security monitoring, host-based analysis, and network intrusion analysis. Implement Cisco Enterprise Network Core Technologies and Advanced Routing. Design solutions to administer complex networks.",

    terms: [
      {
        title: "Desktop & Network Fundamentals",
        modules: [
          "Manage Modern Desktops with Windows",
          "Technologies of Computer Networks",
        ],
      },
      {
        title: "Microsoft Azure",
        modules: [
          "Azure Fundamentals",
          "Implementing, Managing, and Monitoring Azure Environment",
          "Azure Architect Technologies",
          "Azure Architect Design",
        ],
      },
      {
        title: "Cisco Networking",
        modules: [
          "Implementing and Administering Network Solutions",
          "Implementing and Operating Enterprise Network Core Technologies (ENCOR)",
          "Implementing Enterprise Advanced Routing and Services (ENARSI)",
        ],
      },
      {
        title: "Security",
        modules: ["Cybersecurity Operations Fundamentals"],
      },
      {
        title: "Capstone",
        modules: ["Project - Administering Network Solutions"],
      },
    ],

    jobRoles: ["Azure Administrator", "Network Administrator (CISCO)"],
  },

  cyforen: {
    title: "Diploma in Cybersecurity and Digital Forensics",
    tagline:
      "Defend systems, investigate crimes, and uncover digital evidence.",
    description:
      "A comprehensive cybersecurity and digital forensics program covering ethical hacking, network security, computer forensics, cyber crime investigation, and social media forensics using industry-standard tools.",

    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop",
    },

    outcomes:
      "Understand roles and responsibilities in information security. Identify security vulnerabilities in mobile devices and laptops. Learn threat modelling and server hacking techniques. Understand hacking methods in Windows OS and Linux. Design and implement security for networked devices. Find vulnerabilities and security leaks in software. Master fundamentals of computer forensics, analysis, and investigation. Investigate computer crimes and digital evidence acquisition. Perform steganography analysis and image file forensics. Investigate wireless attacks and social media fraud. Recognize and reduce the risk of corporate fraud.",

    terms: [
      {
        title: "Security Fundamentals",
        modules: [
          "Information Security and Organizational Structure",
          "Securing Mobile Devices",
          "Security Architecture and Hacking",
        ],
      },
      {
        title: "Ethical Hacking",
        modules: [
          "Windows/Unix/Linux Hacking",
          "Implementing Network Security",
          "Ethical Hacking",
        ],
      },
      {
        title: "Computer Forensics",
        modules: [
          "Introduction to Computer Forensics",
          "Introduction to Cyber Crime Investigation",
          "Digital Evidence and Computer Forensic Investigation Process",
          "Data Acquisition - Duplication and Recovery",
          "Forensic Investigation",
        ],
      },
      {
        title: "Advanced Forensics",
        modules: [
          "Steganography and Image File Forensics",
          "Investigating Wireless Attacks",
          "Social Media Forensics",
          "Investigating Corporate Frauds",
        ],
      },
      {
        title: "Capstone",
        modules: ["Project - Ethical Hacking"],
      },
    ],

    jobRoles: [
      "Security Administrator",
      "Ethical Hacker",
      "Forensics Investigator",
      "Cyber Crime Investigator",
    ],
  },

  adse: {
    title: "Aptech Certifed Computer Professional with AI",

    tagline:
      "Build real-world software, master AI tools, and start earning while you learn.",

    description:
      "A next-generation program combining Software Engineering with Generative AI integration. Designed for students who want to build real-world tech skills and start earning while they learn. Covers full-stack development, cloud technologies, AI tools, and industry-ready workflows with global career pathways.",

    media: {
      type: "image",
      //src: "../../../assets/adse.png",
      src: "https://res.cloudinary.com/dmm4m5u6n/image/upload/q_auto/f_auto/v1778236541/adse_gnfy6s.png",
    },

    highlights: [
      "Full-stack development with modern technologies",
      "AI-integrated curriculum with Generative AI tools",
      "Multiple certifications across program stages",
      "Paid internship via industry network",
      "Access to eLearning & portfolio platform",
      "Study-abroad opportunities (UK, Germany, Dubai, Malaysia)",
      "Flexible schedule (2hrs × 4 days/week)",
      "Advanced specialization tracks in final phase",
    ],

    terms: [
      {
        title: "Term 1 - CPISM",
        modules: [
          "Programming Principles and Techniques",
          "Logic Building and Elementary Programming",
          "AI-Driven Dynamic Website Development",
          "Intelligent UI/UX Design with AI Insights",
          "React Interface Development",
          "AI-Powered Web Development",
          "Generative AI Fundamentals",
          "SQL Server Data Management",
        ],
        outcomes:
          "Solve programming problems using structured logic and C constructs. Build responsive web apps using HTML, CSS, JavaScript, and React with AI-assisted workflows. Understand database systems and develop foundational Generative AI skills.",
        totalHours: 188,
      },

      {
        title: "Term 2 - DISM",
        modules: [
          "XML & JSON Data Processing",
          "Java Programming",
          "JavaFX Development",
          "Foundations of AI",
          "Low-Code/No-Code Development",
          "C# Programming",
        ],
        outcomes:
          "Develop OOP applications using Java, JavaFX, and C#. Work with APIs, structured data, and version control. Gain foundational knowledge of OpenAI and modern software architecture.",
        totalHours: 170,
      },

      {
        title: "Term 3A - ADSE (Java)",
        modules: [
          "GenAI Launchpad",
          "Spring Boot AI Apps",
          "Flutter & Dart Apps",
          "DevOps with AI",
          "Capstone Project",
        ],
        outcomes:
          "Build scalable applications using Java, Spring Boot, and AI tools. Develop mobile apps with Flutter and apply DevOps practices in real-world workflows.",
        totalHours: 170,
      },

      {
        title: "Term 3B - ADSE (.NET)",
        modules: [
          "ASP.NET Core AI Apps",
          "Flutter Apps",
          "DevOps",
          "Capstone Project",
        ],
        outcomes:
          "Develop enterprise-grade applications using ASP.NET and AI-driven tools. Deliver production-ready apps using DevOps pipelines.",
        totalHours: 150,
      },

      {
        title: "Term 4A - Full Stack Java",
        modules: [
          "MySQL AI Systems",
          "Python Development",
          "Django Apps",
          "Docker & Kubernetes",
          "Project Management",
        ],
        outcomes:
          "Build full-stack applications with Java, Python, and Django. Implement CI/CD pipelines and deploy scalable applications using Docker.",
        totalHours: 230,
      },

      {
        title: "Term 4B - .NET & Cloud",
        modules: [
          "Azure AI Development",
          "Python Systems",
          "Docker & Kubernetes",
          "Project Management",
        ],
        outcomes:
          "Develop cloud-native applications on Azure. Integrate AI APIs and deploy scalable enterprise systems.",
        totalHours: 234,
      },

      {
        title: "Term 4C - Oracle",
        modules: ["Oracle SQL", "PL/SQL", "Database Administration"],
        outcomes:
          "Design and manage enterprise databases. Optimize queries, ensure security, and maintain high availability systems.",
        totalHours: 242,
      },

      {
        title: "Term 4D - Networking & Cybersecurity",
        modules: [
          "Computer Networks",
          "Cybersecurity",
          "Azure Fundamentals",
          "Ethical Hacking",
        ],
        outcomes:
          "Build secure networks, implement cybersecurity practices, and deploy AI workloads in cloud environments.",
        totalHours: 278,
      },

      {
        title: "Term 4E - AI & Machine Learning",
        modules: [
          "Machine Learning",
          "Deep Learning",
          "NLP",
          "Computer Vision",
          "AI Agents",
        ],
        outcomes:
          "Develop intelligent systems using ML, deep learning, and NLP. Build real-world AI solutions and advanced models.",
        totalHours: 228,
      },

      {
        title: "Term 4F - Data Science",
        modules: [
          "MongoDB Systems",
          "Power BI Analytics",
          "MLOps",
          "Reinforcement Learning",
        ],
        outcomes:
          "Analyze large datasets, build predictive models, and deploy ML pipelines for real-world analytics.",
        totalHours: 228,
      },

      {
        title: "Term 4G - IoT",
        modules: [
          "Python IoT Programming",
          "AI at the Edge",
          "Smart Networks",
          "IoT Capstone Project",
        ],
        outcomes:
          "Build intelligent IoT systems with AI integration, automation, and real-world hardware/software solutions.",
        totalHours: 216,
      },
    ],
  },
  amsp: {
    title: "Arena Multimedia Specialist Program (AMSP)",
    tagline: "Design. Animate. Visualize. Create Careers in Multimedia.",
    description:
      "A career-focused multimedia program that trains students in 3D animation, UI/UX design, motion graphics, and visual storytelling using industry-standard tools and workflows.",

    media: {
      type: "video",
      src: "/amsp.mp4",
    },

    terms: [
      {
        title: "Term 1 - Certificate in Multimedia (CIM)",
        modules: [
          "Concepts of Graphics and Illustrations",
          "Typography Design",
          "Digital Art",
          "Magic with Images",
          "Lightroom for Photographers",
          "Design for Print and Advertising",
          "Publishing for the Media",
          "Print Portfolio Development",
        ],
        outcomes:
          "Understand fundamentals of graphics and drawing. Learn typography principles and evolution. Create digital artworks and illustrations. Use image editing tools for retouching. Learn photography techniques and post-processing with Lightroom. Understand print advertising and design layouts for magazines and brochures.",
        jobRoles: [
          "Graphic Designer",
          "Illustrator",
          "Layout Designer",
          "Visualizer",
          "Photo Editor",
        ],
        totalHours: 176,
      },

      {
        title: "Term 2 - Diploma in Multimedia (DIM)",
        modules: [
          "Web Designing Concepts",
          "Building Next Generation Websites",
          "Web Page Design",
          "Web Animation using Animate CC",
          "UI/UX for Responsive Web Design",
          "Bootstrap Framework",
          "UI Design Principles",
          "Web Portfolio Development",
        ],
        outcomes:
          "Understand principles of good web design. Design and develop dynamic web pages using JavaScript. Learn Dreamweaver and web animation techniques. Build interactive UI/UX designs, wireframes, and prototypes. Create responsive web designs using Bootstrap.",
        jobRoles: ["Web Animator", "Web Designer", "UI/UX Designer"],
        totalHours: 144,
      },

      {
        title: "Term 3 - Advanced Diploma in Multimedia (ADIM)",
        modules: [
          "Concepts of Digital Film Making",
          "Digital Sound Track Design",
          "Video Editing Techniques",
          "Motion Graphics Creation",
          "3D Basics - Modeling to Animation",
          "3D Modeling with AutoCAD",
          "CG Lighting and Texturing",
          "3D Animation and Photorealistic Rendering",
          "Architectural Visualization Portfolio",
        ],
        outcomes:
          "Understand digital film making process. Create and edit audio and video content. Develop motion graphics and composite visuals. Learn 3D modeling, rigging, and animation. Work with AutoCAD and 3ds Max. Apply lighting, textures, and rendering techniques using V-Ray.",
        jobRoles: [
          "Audio and Video Editor",
          "CAD Designer",
          "3D Modeler",
          "Renderer",
          "Compositor",
        ],
        totalHours: 270,
      },

      {
        title: "Term 4 - Advanced Diploma in Multimedia (ADIM)",
        modules: [
          "Digital Preproduction",
          "Modeling 3D Objects with Maya",
          "Texturing 3D Objects with Maya",
          "Lighting and Rendering with Maya",
          "Rendering with Arnold Renderer",
          "Rigging 3D Characters in Maya",
          "Character Animation",
          "Dynamics & Paint FX",
          "Demo Reel & Portfolio Development",
        ],
        outcomes:
          "Understand advanced pre-production workflows. Create and texture 3D models using Maya. Apply lighting and rendering techniques with Arnold. Perform rigging and character animation. Work with dynamics and particle systems. Build a professional demo reel.",
        jobRoles: [
          "3D Animator",
          "Texturing Artist",
          "Lighting Artist",
          "Rigging Artist",
          "Renderer",
        ],
        totalHours: 216,
      },
    ],
  },
  arenasmartpro: {
    title: "Arena Multimedia Smart Pro & Skill Builder Programs",
    tagline: "Create. Animate. Design. Build a Global Creative Career.",
    description:
      "A career-focused multimedia program designed to train students in animation, VFX, UI/UX, 3D modeling, motion graphics, and digital design using industry-standard tools and production workflows.",
    media: {
      type: "image",
      src: "/arena-smart-pro.png",
    },
    highlights: [
      "Industry-aligned curriculum with latest tools & techniques",
      "Portfolio-driven learning approach",
      "Job-oriented skill development",
      "Global media & entertainment industry exposure",
      "Mentored project-based learning",
    ],
    industryOverview: {
      growth:
        "Global animation, VFX & gaming market projected to reach $517B by 2027",
      insight1: "90% of US animation is produced in Asia",
      insight2: "Animation film production costs range from $20M to $300M",
      insight3:
        "Africa is one of the fastest-growing media & entertainment markets",
    },
    terms: [
      {
        title: "Graphic Designing",
        modules: [
          "Typography Design",
          "Digital Art",
          "Image Editing & Retouching",
          "Illustration Design",
          "Print & Layout Design",
        ],
        jobRoles: ["Graphic Designer", "Illustrator", "Layout Designer"],
        totalHours: 122,
      },

      {
        title: "Print & Publishing",
        modules: [
          "Typography Fundamentals",
          "Print Advertising Design",
          "Magazine & Brochure Layout",
          "Publishing Workflow",
        ],
        jobRoles: ["Graphic Designer", "Layout Designer"],
        totalHours: 114,
      },

      {
        title: "Audio-Video Editing",
        modules: [
          "Digital Sound Editing",
          "Video Editing Techniques",
          "Adobe Audition",
          "Adobe Premiere Pro",
        ],
        jobRoles: ["Video Editor", "Audio Editor"],
        totalHours: 48,
      },

      {
        title: "Web Designing",
        modules: [
          "HTML5, CSS3 & JavaScript",
          "Responsive Web Design",
          "UI/UX Design",
          "Bootstrap Framework",
          "Web Animation (Animate CC)",
        ],
        jobRoles: ["UI Designer", "Web Designer", "Web Animator"],
        totalHours: 100,
      },

      {
        title: "Digital Graphics & Animation",
        modules: [
          "Digital Film Making",
          "Motion Graphics",
          "3D Basics",
          "3D Modeling (3ds Max)",
          "Rendering & Lighting",
          "Animation Pipeline",
        ],
        jobRoles: [
          "3D Modeler",
          "Texturing Artist",
          "Lighting Artist",
          "Animator",
        ],
        totalHours: 250,
      },

      {
        title: "3D Modeling & Animation (Maya)",
        modules: [
          "Modeling with Maya",
          "Texturing & Lighting",
          "Rigging Techniques",
          "Character Animation",
          "Arnold Rendering",
        ],
        jobRoles: [
          "3D Modeler",
          "Rigging Artist",
          "Animator",
          "Lighting Artist",
        ],
        totalHours: 132,
      },

      {
        title: "Basics of 3D Animation",
        modules: ["3D Basics", "Modeling Fundamentals", "Rendering with V-Ray"],
        jobRoles: ["3D Modeler", "Animator"],
        totalHours: 88,
      },

      {
        title: "Advanced 3D Animation",
        modules: [
          "Advanced Modeling",
          "Character Animation",
          "Rigging Systems",
          "Lighting & Rendering",
          "Portfolio Development",
        ],
        jobRoles: ["Animator", "Rigging Artist", "Lighting Artist"],
        totalHours: 222,
      },

      {
        title: "3D Interior Designing",
        modules: [
          "AutoCAD Design",
          "3D Interior Visualization",
          "Rendering Techniques",
        ],
        jobRoles: ["CAD Designer", "3D Visualizer"],
        totalHours: 124,
      },

      {
        title: "Industrial Art (AutoCAD)",
        modules: ["AutoCAD Fundamentals", "3D Drawing", "Technical Drafting"],
        jobRoles: ["CAD Designer"],
        totalHours: 44,
      },
    ],

    skillBuilderPrograms: [
      "Digital Painting (Photoshop)",
      "Digital Illustrations (Illustrator)",
      "CorelDraw Design",
      "Media Publishing",
      "Video Editing",
      "Audio Editing",
      "Motion Graphics (After Effects)",
      "2D Animation (Animate CC)",
      "Web Animation",
      "Modern Web Development",
    ],
  },
  realtime3d: {
    title: "Certificate in Realtime 3D & Game Art",
    tagline:
      "Create immersive real-time game worlds and interactive experiences.",
    description:
      "A professional training program focused on building real-time 3D environments, game assets, and interactive gameplay systems using Unity and Unreal Engine.",

    media: {
      type: "video",
      src: "/sweet1.mp4",
    },
    outcomes:
      "Develop proficiency in creating visually appealing and consistent game assets and environments. Design intuitive and engaging UI for gameplay experiences. Understand game development workflows from concept to release. Gain foundational skills in Unity for game development. Master level design principles for engaging gameplay. Learn Unreal Engine interface and core functionalities. Utilize advanced Unreal tools to build interactive environments. Integrate assets and apply level design principles. Use Unreal Blueprints for gameplay mechanics and interactions.",

    totalHours: 190,

    terms: [
      {
        title: "Game Design Foundations",
        modules: [
          "Visual Design for Games",
          "UI Design for Games",
          "Game Production Process",
        ],
      },

      {
        title: "Unity Game Development",
        modules: [
          "Introduction to Unity Game Engine",
          "Level Designing with Unity",
        ],
      },

      {
        title: "Unreal Engine Basics",
        modules: [
          "Getting Started with Unreal Engine",
          "Working with Unreal Engine Interface",
        ],
      },

      {
        title: "Advanced Unreal Development",
        modules: [
          "Asset Integration & Level Design",
          "Understanding Blueprints",
          "Preparing & Publishing Unreal Projects",
        ],
      },
    ],

    jobRoles: [
      "Game Designer",
      "UI Designer for Games",
      "Level Designer",
      "Game Asset Integration Artist",
      "Unreal Generalist",
      "Environment Artist",
      "Game Asset Artist",
    ],
  },
  vfx: {
    title: "Certificate in VFX for Animation & Films",
    tagline:
      "Master cinematic visual effects from pre-production to final compositing.",
    description:
      "A complete VFX production program covering compositing, tracking, rotoscoping, simulation, and advanced visual effects using industry-standard tools like Nuke and Houdini.",

    media: {
      type: "video",
      src: "/anime 3.mp4",
    },

    outcomes:
      "Gain end-to-end knowledge of visual effects production from pre-production to post-production. Learn VFX film-making workflow and pre-visualization techniques. Develop skills in Nuke for compositing, wire removal, color correction, and chroma keying. Master rotoscoping and camera tracking using industry tools. Create realistic matte paintings and integrate 2D/3D elements. Build proficiency in Houdini for advanced procedural effects and simulations.",

    terms: [
      {
        title: "VFX Production Pipeline",
        modules: [
          "VFX Film Making (Pre to Post Production)",
          "Pre-visualization & VFX Video Shoot",
        ],
      },

      {
        title: "Compositing Fundamentals",
        modules: [
          "Introduction to Nuke",
          "Wire Removal Techniques",
          "Colour Correction with Nuke",
          "Chroma Keying Techniques",
        ],
      },

      {
        title: "Tracking & Rotoscoping",
        modules: [
          "Rotoscopy using Silhouette",
          "Matchmoving and Camera Tracking",
          "2D & 3D Tracking",
        ],
      },

      {
        title: "Advanced VFX Techniques",
        modules: ["Matte Painting Techniques", "Visual Effects with Houdini"],
      },

      {
        title: "Portfolio Development",
        modules: ["Digital VFX Portfolio Project"],
      },
    ],

    jobRoles: [
      "VFX Artist / Generalist",
      "FX Artist",
      "Compositor",
      "Pre-Viz Artist",
      "Roto-Paint Artist",
      "Matchmove Artist",
      "Matte Painter",
      "Motion Graphics Artist",
      "Video Editor",
    ],
  },
  acns: {
    title: "Advanced Certificate in Network & Security (ACNS)",

    tagline:
      "Build strong networking, cybersecurity, cloud, and enterprise infrastructure skills for real-world IT careers.",

    description:
      "A professional IT infrastructure program designed to equip students with deep knowledge of networking, system administration, cybersecurity, and cloud technologies. The program prepares learners for enterprise IT roles including network engineering, system administration, cloud support, and cybersecurity operations.",

    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    highlights: [
      "Hands-on networking and system administration training",
      "Industry-standard cybersecurity practices",
      "Cloud computing with Microsoft Azure integration",
      "Enterprise routing and infrastructure management",
      "Ethical hacking and security operations",
      "Job-ready IT infrastructure skills",
      "Real-world projects across all terms",
    ],

    terms: [
      {
        title: "Term 1 - Computer & Network Foundations",
        modules: [
          "Digital Electronics",
          "Hardware, Networking, and Troubleshooting",
          "Installing and Configuring Operating Systems",
          "Technologies of Computer Networks",
          "Emerging Job Areas - SMAC",
        ],
        outcomes:
          "Understand computer hardware systems, install and configure operating systems, and gain foundational knowledge of networking and emerging IT technologies.",
        totalHours: 152,
      },

      {
        title: "Term 2 - System Administration & Network Management",
        modules: [
          "Manage Modern Desktops with Windows",
          "Fundamentals of Red Hat System Administration",
          "Implementing and Administering Network Solutions",
          "Cybersecurity Operations Fundamentals",
          "eProject - Administering Network Solutions",
        ],
        outcomes:
          "Develop skills in system administration, network configuration, cybersecurity basics, and enterprise desktop management using Windows and Linux environments.",
        totalHours: 180,
      },

      {
        title: "Term 3 - Cloud Infrastructure (Azure)",
        modules: [
          "Azure Fundamentals",
          "Implementing, Managing and Monitoring Azure Environment",
          "Azure Architect Technologies",
          "Azure Solutions Architect Design",
          "Project - Azure Administration",
        ],
        outcomes:
          "Gain practical cloud computing skills using Microsoft Azure, including deployment, monitoring, and architecture design for scalable cloud solutions.",
        totalHours: 180,
      },

      {
        title: "Term 4 - Advanced Networking & Cybersecurity",
        modules: [
          "Information Security and Organizational Structure",
          "Implementing and Operating Enterprise Network Core Technologies (ENCOR)",
          "Implementing Enterprise Advanced Routing and Services (ENARSI)",
          "Ethical Hacking",
          "Project - Ethical Hacking",
        ],
        outcomes:
          "Master enterprise networking, advanced routing, cybersecurity principles, and ethical hacking techniques for securing large-scale IT infrastructures.",
        totalHours: 184,
      },
    ],
  },
  smartstack: {
    title: "Smart Professional & Skill Builder Programs",

    tagline:
      "Flexible tech, design, and IT skills for job-ready professionals.",

    description:
      "A modular learning ecosystem made up of Smart Professional certifications and Skill Builder short courses. Designed for flexible skill acquisition across software development, design, data, cloud, networking, and emerging technologies.",

    media: {
      type: "image",
      src: "/smart-stack.png",
    },

    skillCatalog: [
      {
        category: "Smart Professional",
        courses: [
          { name: "MIS and Soft Skills", hours: 120 },
          { name: ".NET Web Application Development", hours: 126 },
          { name: "Java Web Application Development", hours: 170 },
          { name: "PHP Web Application Development", hours: 162 },
          { name: "Python Web Application Development", hours: 218 },
          { name: "Full Stack MERN Development", hours: 196 },
          { name: "Cross Platform App Development", hours: 104 },
          { name: "Internet of Things (IoT)", hours: 170 },
          { name: "Foundation in Data Science", hours: 200 },
          { name: "Hardware & Networking", hours: 112 },
          { name: "Network Administration", hours: 192 },
          { name: "Azure Administration", hours: 126 },
          { name: "Designing Azure Infrastructure Solutions", hours: 80 },
          {
            name: "Network Administration for Enterprise Solutions",
            hours: 80,
          },
          { name: "Artificial Intelligence and Machine Learning", hours: 340 },
          { name: "Data Visualization", hours: 88 },
          { name: "User Interface and Experience Design", hours: 270 },
        ],
      },

      {
        category: "Skill Builders",
        courses: [
          { name: "Office Automation", hours: 40 },
          { name: "Advanced Excel", hours: 24 },
          { name: "Advanced Presentation Techniques", hours: 24 },
          { name: "Programming in C", hours: 32 },
          { name: "Data Structures in C", hours: 24 },
          { name: "Programming in C++", hours: 48 },
          { name: "Responsible Web Development", hours: 80 },
          { name: "Data Management with SQL Server", hours: 32 },
          { name: "Programming in C#", hours: 40 },
          { name: "ASP.NET MVC Web Applications", hours: 40 },
          { name: "Software Project Management", hours: 40 },
          { name: "R Programming", hours: 40 },
          { name: "Large Data Management with MongoDB", hours: 32 },
          { name: "Enterprise Application Development in .NET", hours: 40 },
          { name: "Java Programming", hours: 76 },
          { name: "Web Application Development in Java", hours: 48 },
          { name: "Enterprise Application Development in Java", hours: 48 },
          { name: "Cross Platform Mobile App Development", hours: 56 },
          { name: "Embedded Programming", hours: 80 },
          { name: "Software Testing using Selenium", hours: 16 },
          { name: "Programming with Python", hours: 72 },
          { name: "Web Development with PHP", hours: 64 },
          { name: "Network Administration", hours: 40 },
          { name: "Cybersecurity Operations Fundamentals", hours: 40 },
          { name: "Ethical Hacking", hours: 40 },
          { name: "UI & UX for Responsive Web Design", hours: 16 },
        ],
      },
    ],
  },
};

export default async function Page({ params }) {
  const { slug } = await params;

  const course = courseData[slug];

  if (!course) return notFound();

  return <CourseClient course={course} slug={slug} />;
}
