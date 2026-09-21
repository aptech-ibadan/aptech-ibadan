/**
 * Per-course SEO metadata.
 *
 * Keys mirror the `courseData` slugs in `app/courses/[slug]/page.jsx`.
 * Descriptions only restate content that is already displayed on the page —
 * no durations, prices, certifications or outcome claims are invented here.
 *
 * `noindex: true` marks duplicate/legacy routes that should not be indexed.
 * `related` powers human-useful internal links between programmes.
 */
export const courseSeo = {
  miscpapp: {
    title: "MIS & Cross-Platform App Development Course in Ibadan | Aptech",
    description:
      "Diploma in MIS and cross-platform app development at Aptech Ibadan covering office automation, data analysis, SQL Server, Python, Java and Flutter/Dart mobile apps.",
    related: [
      { label: "Software Development (ACCP)", path: "/courses/adse" },
      { label: "Data Science, AI & ML", path: "/courses/dsaiml" },
      {
        label: "Short IT courses & skill builders",
        path: "/courses/smartstack",
      },
    ],
  },
  dsaiml: {
    title: "Data Science, AI & Machine Learning Course in Ibadan | Aptech",
    description:
      "Diploma in Data Science, AI and Machine Learning at Aptech Ibadan covering Python, machine learning, deep learning, NLP, big data and a real-world capstone project.",
    related: [
      { label: "Software Development (ACCP)", path: "/courses/adse" },
      { label: "MIS & App Development", path: "/courses/miscpapp" },
      {
        label: "Short IT courses & skill builders",
        path: "/courses/smartstack",
      },
    ],
  },
  nwad: {
    title: "Network Administration Course in Ibadan | Aptech",
    description:
      "Diploma in Network Administration at Aptech Ibadan covering Windows desktop management, Microsoft Azure cloud administration, Cisco enterprise networking and cybersecurity fundamentals.",
    related: [
      { label: "Cybersecurity & Networking (ACNS)", path: "/courses/acns" },
      { label: "Cybersecurity & Digital Forensics", path: "/courses/cyforen" },
      {
        label: "Short IT courses & skill builders",
        path: "/courses/smartstack",
      },
    ],
  },
  cyforen: {
    title: "Cybersecurity & Digital Forensics Course in Ibadan | Aptech",
    description:
      "Diploma in Cybersecurity and Digital Forensics at Aptech Ibadan covering ethical hacking, network security, computer forensics, cyber crime investigation and social media forensics.",
    related: [
      { label: "Cybersecurity & Networking (ACNS)", path: "/courses/acns" },
      { label: "Network Administration", path: "/courses/nwad" },
      {
        label: "Short IT courses & skill builders",
        path: "/courses/smartstack",
      },
    ],
  },
  adse: {
    title: "Software Development Course in Ibadan | ACCP with AI | Aptech",
    description:
      "ACCP at Aptech Ibadan is a software development programme covering full-stack web and mobile development, databases, cloud technologies and AI-integrated workflows.",
    related: [
      { label: "Cybersecurity & Networking (ACNS)", path: "/courses/acns" },
      { label: "Data Science, AI & ML", path: "/courses/dsaiml" },
      { label: "Multimedia & UI/UX (Arena)", path: "/courses/amsp" },
    ],
  },
  amsp: {
    title: "Multimedia & UI/UX Courses in Ibadan | Arena Multimedia",
    description:
      "Arena Multimedia Specialist Program at Aptech Ibadan covering graphic design, web design, UI/UX, audio-video editing, 3D animation and architectural visualization.",
    related: [
      {
        label: "Short multimedia & design courses",
        path: "/courses/arenasmartpro",
      },
      { label: "VFX, Animation & Films", path: "/courses/vfx" },
      { label: "Realtime 3D & Game Art", path: "/courses/realtime3d" },
    ],
  },
  arenasmartpro: {
    title: "Short Multimedia, Animation & Design Courses in Ibadan | Aptech",
    description:
      "Arena Smart Pro and Skill Builder short courses at Aptech Ibadan covering graphic design, web design, audio-video editing, 3D animation, interior design and AutoCAD.",
    related: [
      { label: "Arena Multimedia (AMSP)", path: "/courses/amsp" },
      { label: "VFX, Animation & Films", path: "/courses/vfx" },
      { label: "Realtime 3D & Game Art", path: "/courses/realtime3d" },
    ],
  },
  realtime3d: {
    title: "Realtime 3D & Game Art Course in Ibadan | Aptech",
    description:
      "Certificate in Realtime 3D and Game Art at Aptech Ibadan covering game design, Unity, Unreal Engine, level design and Blueprints for interactive experiences.",
    related: [
      { label: "Arena Multimedia (AMSP)", path: "/courses/amsp" },
      { label: "VFX, Animation & Films", path: "/courses/vfx" },
      {
        label: "Short multimedia & design courses",
        path: "/courses/arenasmartpro",
      },
    ],
  },
  vfx: {
    title: "VFX, Animation & Film Course in Ibadan | Aptech",
    description:
      "Certificate in VFX for Animation and Films at Aptech Ibadan covering compositing in Nuke, rotoscoping, camera tracking, matte painting and Houdini effects.",
    related: [
      { label: "Arena Multimedia (AMSP)", path: "/courses/amsp" },
      { label: "Realtime 3D & Game Art", path: "/courses/realtime3d" },
      {
        label: "Short multimedia & design courses",
        path: "/courses/arenasmartpro",
      },
    ],
  },
  acns: {
    title: "Cybersecurity & Networking Course in Ibadan | ACNS",
    description:
      "Advanced Certificate in Network and Security (ACNS) at Aptech Ibadan covering networking, system administration, Microsoft Azure cloud, enterprise routing and ethical hacking.",
    related: [
      { label: "Cybersecurity & Digital Forensics", path: "/courses/cyforen" },
      { label: "Network Administration", path: "/courses/nwad" },
      {
        label: "Short IT courses & skill builders",
        path: "/courses/smartstack",
      },
    ],
  },
  smartstack: {
    title: "Short IT Courses & Skill Builders in Ibadan | Aptech Ibadan",
    description:
      "Smart Professional and Skill Builder short courses at Aptech Ibadan covering software development, data, cloud, networking, design and artificial intelligence.",
    related: [
      { label: "Software Development (ACCP)", path: "/courses/adse" },
      { label: "Cybersecurity & Networking (ACNS)", path: "/courses/acns" },
      { label: "Arena Multimedia (AMSP)", path: "/courses/amsp" },
    ],
  },
  // Legacy duplicate of `arenasmartpro`; kept reachable but excluded from search.
  arenaCourse: {
    title: "Smart Pro & Skill Builder | Aptech Ibadan",
    description:
      "Arena Smart Pro and Skill Builder short courses at Aptech Ibadan covering animation, graphics, web design and multimedia.",
    noindex: true,
    related: [
      { label: "Arena Multimedia (AMSP)", path: "/courses/amsp" },
      {
        label: "Short multimedia & design courses",
        path: "/courses/arenasmartpro",
      },
    ],
  },
};

export default courseSeo;
