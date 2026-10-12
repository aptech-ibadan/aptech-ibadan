// Content for the Locked-In Ember campaign (source: LOCKED-IN EMBER 4.pptx).
// Payment thresholds and prize valuations are intentionally omitted until the final T&Cs are approved.

export const campaign = {
  name: "Locked-In Ember",
  start: "2026-10-09T00:00:00+01:00",
  end: "2026-10-29T23:59:59+01:00",
  slots: 100,
  rewardWinners: 30,
};

export const maxDiscount = 30;

export const perks = [
  {
    icon: "wallet",
    title: "Save",
    text: "Everyone who enrols qualifies for a discount, across the first 100 slots.",
  },
  {
    icon: "graduation",
    title: "Learn",
    text: "Choose ONE bonus course: Content Creation or AI Automation.",
  },
  {
    icon: "rocket",
    title: "Get career-ready",
    text: "CV and LinkedIn optimisation, career guidance, and access to relevant job and career opportunities.",
  },
  {
    icon: "flame",
    title: "Win rewards",
    text: "The first 30 people to lock in are in line for prizes worth ₦5M+ in total.",
  },
];

export const tiers = [
  {
    id: "elite",
    name: "Ember Elite",
    tagline: "Career & International Pathway",
    duration: "14–27 months",
    accent: "from-yellow-300 to-amber-500",
    courses: [
      "ADSE",
      "ACNS",
      "AMSP",
      "Cybersecurity & Digital Forensics",
      "Complete Network Administration",
      "Python Powerhouse",
      "MIS & Cross-App Development",
    ],
    rewards: [
      "Laptop",
      "3-month paid professional internship opportunity",
      "Accommodation discount",
    ],
  },
  {
    id: "pro",
    name: "Ember Pro",
    tagline: "Smart Professional",
    duration: "3–6 months",
    accent: "from-slate-200 to-slate-400",
    courses: [
      "Data Analysis & Data Science",
      "Cybersecurity & Ethical Hacking",
      "Web Development with Python",
      "Responsive Web Development",
      "Graphics Design",
      "3D Animation",
      "UI/UX and more",
    ],
    rewards: ["5G router", "Headphones", "Smartwatch", "Power bank"],
  },
  {
    id: "edge",
    name: "Ember Edge",
    tagline: "Skill Builder",
    duration: "1–3 months",
    accent: "from-orange-300 to-orange-600",
    courses: [
      "Office Automation",
      "Digital Marketing",
      "AutoCAD",
      "Advanced Excel",
      "Software Project Management",
      "Cybersecurity & Ethical Hacking",
      "Programming in C",
    ],
    rewards: [
      "Keyboard + mouse",
      "Tripod",
      "Bluetooth microphone",
      "Ring light",
      "Laptop bag",
      "Power bank",
      "Phone stand",
      "Rechargeable desk lamp",
      "Aptech merchandise",
    ],
  },
];

export const steps = [
  { title: "Choose a programme", text: "Your programme decides your tier: Elite, Pro or Edge." },
  { title: "Make a qualifying payment", text: "Your payment determines whether you are eligible for a reward." },
  { title: "Reward slot confirmed", text: "Rewards are limited, so availability is confirmed for your centre." },
  { title: "Reward assigned", text: "Rewards are assigned by the campaign structure, not selected by students." },
];

export const centres = [
  { name: "Agodi", slots: ["1 laptop", "1 internship", "1 accommodation discount", "2 Pro rewards", "2 Edge rewards"] },
  { name: "Ring Road", slots: ["1 laptop", "1 internship", "1 accommodation discount", "2 Pro rewards", "2 Edge rewards"] },
  { name: "Bodija", slots: ["1 laptop", "1 internship", "1 accommodation discount", "2 Pro rewards", "2 Edge rewards"] },
];

export const timeline = [
  { when: "Oct 9 – 29", title: "Locked-In Ember", text: "Lock in with the biggest savings, bonus course and reward slots." },
  { when: "November", title: "Follow up & convert", text: "Talk to us about class start dates, payment plans and your questions." },
  { when: "Dec 1 – 11", title: "Xmas in Tech 2.0", text: "Christmas got better: a final promotional window before the year closes." },
];

export const faqs = [
  { q: "Who qualifies for the discount?", a: "Everyone who enrols during the campaign qualifies, across the first 100 slots, with savings of up to 30% off." },
  { q: "Can I choose my reward?", a: "No. Rewards are assigned according to the approved campaign structure, based on your programme, qualifying payment and available reward slots." },
  { q: "How many rewards are there?", a: "Rewards are limited and are for the first 30 people to lock in, with 7 reward slots at each centre: Agodi, Ring Road and Bodija." },
  { q: "What is the bonus course?", a: "Every student picks ONE bonus course: Content Creation or AI Automation." },
  { q: "What about the paid internship?", a: "The 3-month paid professional internship is an opportunity for Ember Elite students and is subject to placement and provider requirements." },
  { q: "What happens after October 29?", a: "We continue counselling in November, and Xmas in Tech 2.0 runs from December 1 to 11 for anyone still deciding." },
  { q: "How do I confirm what I qualify for?", a: "Speak to an advisor at your nearest centre. They will confirm your tier, the qualifying payment for your programme and reward availability before you commit." },
];
