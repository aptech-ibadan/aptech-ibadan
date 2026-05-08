"use client";

import { useState } from "react";
import { Button } from "@/const";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";

// Job openings data
// const OPENINGS = [
//   {
//     id: 1,
//     job: "Senior Software Engineer",
//     type: "Full-time",
//     location: "Ibadan, Nigeria",
//     experience: "5+ years",
//     salary: "Competitive",
//     department: "Engineering",
//     posted: "2 days ago",
//     description: "We are seeking an experienced Software Engineer to lead development projects and mentor junior developers. You'll work on cutting-edge educational technology platforms.",
//     responsibilities: [
//       "Lead full-stack development projects",
//       "Architect scalable web applications",
//       "Mentor junior developers",
//       "Collaborate with product team on features",
//       "Ensure code quality and best practices"
//     ],
//     requirements: [
//       "5+ years of software development experience",
//       "Expertise in React, Node.js, or Python",
//       "Experience with cloud platforms (AWS/Azure)",
//       "Strong database management skills",
//       "Excellent problem-solving abilities"
//     ],
//     preferred: [
//       "Experience in EdTech",
//       "Master's degree in CS or related field",
//       "Previous team lead experience"
//     ]
//   },
//   {
//     id: 2,
//     job: "UI/UX Designer",
//     type: "Full-time",
//     location: "Ibadan, Nigeria",
//     experience: "3+ years",
//     salary: "Competitive",
//     department: "Design",
//     posted: "1 week ago",
//     description: "Join our creative team to design intuitive and beautiful user interfaces for our learning platforms. You'll work closely with developers and product managers.",
//     responsibilities: [
//       "Create wireframes, prototypes, and high-fidelity designs",
//       "Conduct user research and usability testing",
//       "Collaborate with developers on implementation",
//       "Maintain design systems",
//       "Iterate based on user feedback"
//     ],
//     requirements: [
//       "3+ years of UI/UX design experience",
//       "Proficiency in Figma, Adobe XD, or Sketch",
//       "Portfolio demonstrating design thinking",
//       "Understanding of responsive design",
//       "Experience with user research methods"
//     ],
//     preferred: [
//       "Experience in EdTech",
//       "Knowledge of HTML/CSS",
//       "Motion design skills"
//     ]
//   },
//   {
//     id: 3,
//     job: "Cybersecurity Instructor",
//     type: "Full-time",
//     location: "Ibadan, Nigeria",
//     experience: "4+ years",
//     salary: "Competitive",
//     department: "Academics",
//     posted: "3 days ago",
//     description: "Teach and mentor students in our cybersecurity program. Develop curriculum and hands-on labs for aspiring security professionals.",
//     responsibilities: [
//       "Deliver engaging cybersecurity lectures",
//       "Develop practical lab exercises",
//       "Mentor students on projects",
//       "Stay updated with security trends",
//       "Assess student progress"
//     ],
//     requirements: [
//       "4+ years in cybersecurity",
//       "Relevant certifications (CISSP, CEH, Security+)",
//       "Teaching or training experience",
//       "Strong communication skills",
//       "Passion for education"
//     ],
//     preferred: [
//       "Previous teaching experience",
//       "Master's degree",
//       "Multiple security certifications"
//     ]
//   },
//   {
//     id: 4,
//     job: "Marketing Coordinator",
//     type: "Full-time",
//     location: "Ibadan, Nigeria",
//     experience: "2+ years",
//     salary: "Competitive",
//     department: "Marketing",
//     posted: "5 days ago",
//     description: "Drive our marketing initiatives including digital campaigns, social media, and community engagement.",
//     responsibilities: [
//       "Plan and execute marketing campaigns",
//       "Manage social media presence",
//       "Create marketing content",
//       "Analyze campaign performance",
//       "Coordinate with external partners"
//     ],
//     requirements: [
//       "2+ years marketing experience",
//       "Social media management skills",
//       "Content creation ability",
//       "Analytical mindset",
//       "Excellent written communication"
//     ],
//     preferred: [
//       "Experience in education sector",
//       "Graphic design skills",
//       "SEO/SEM knowledge"
//     ]
//   },
//   {
//     id: 5,
//     job: "Student Success Advisor",
//     type: "Full-time",
//     location: "Ibadan, Nigeria",
//     experience: "2+ years",
//     salary: "Competitive",
//     department: "Student Services",
//     posted: "1 week ago",
//     description: "Support students throughout their learning journey, providing guidance and ensuring a positive educational experience.",
//     responsibilities: [
//       "Advise students on program selection",
//       "Monitor student progress",
//       "Address student concerns",
//       "Organize student events",
//       "Track satisfaction metrics"
//     ],
//     requirements: [
//       "2+ years in customer service or advising",
//       "Excellent interpersonal skills",
//       "Problem-solving ability",
//       "Organizational skills",
//       "Empathy and patience"
//     ],
//     preferred: [
//       "Experience in education",
//       "Counseling background",
//       "Multiple language skills"
//     ]
//   },
//   {
//     id: 6,
//     job: "Data Science Trainer",
//     type: "Part-time / Contract",
//     location: "Ibadan, Nigeria (Hybrid)",
//     experience: "3+ years",
//     salary: "Competitive",
//     department: "Academics",
//     posted: "4 days ago",
//     description: "Train students in data science, machine learning, and analytics. Develop practical projects and mentor learners.",
//     responsibilities: [
//       "Teach data science concepts",
//       "Guide students through projects",
//       "Create hands-on exercises",
//       "Evaluate student work",
//       "Provide career guidance"
//     ],
//     requirements: [
//       "3+ years in data science",
//       "Python, SQL, and ML expertise",
//       "Teaching or training experience",
//       "Portfolio of projects",
//       "Strong communication skills"
//     ],
//     preferred: [
//       "Experience with Tableau/Power BI",
//       "Cloud certification",
//       "Previous mentorship experience"
//     ]
//   }
// ];
const OPENINGS = [];

const CareerOpenings = ({ openModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    "Engineering",
    "Design",
    "Academics",
    "Marketing",
    "Student Services",
  ];

  const filteredOpenings = OPENINGS.filter((opening) => {
    const matchesSearch =
      opening.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opening.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || opening.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <section id="openings" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
            Current Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020B2D] mb-4">
            Open Positions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our team and help shape the future of tech education
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-[#FFC107] text-black font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredOpenings.length > 0 ? (
            filteredOpenings.map((opening) => (
              <div
                key={opening.id}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal(opening)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="bg-[#FFC107]/10 text-[#FFC107]  font-semibold px-3 py-1 rounded-full">
                        {opening.department}
                      </span>
                      <span className="bg-green-100 text-green-700  font-semibold px-3 py-1 rounded-full">
                        {opening.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#020B2D] group-hover:text-[#FFC107] transition-colors mb-2">
                      {opening.job}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{opening.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>Posted {opening.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Salary Range</div>
                      <div className="font-semibold text-[#020B2D]">
                        {opening.salary}
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-[#FFC107]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFC107] transition-all duration-300">
                      <ChevronRight
                        size={20}
                        className="text-[#FFC107] group-hover:text-white"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[#020B2D] mb-2">
                No positions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* No openings message (if you want to keep the original behavior) */}
        {OPENINGS.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <div className="text-6xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-[#020B2D] mb-2">
              No Openings at the Moment
            </h3>
            <p className="text-gray-500">
              Check back soon for new opportunities
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerOpenings;
