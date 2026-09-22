// data/posts/aptech-accommodation.mjs
//
// Full content for the "Aptech Ibadan Now Has Student Accommodation" blog post.
// Consumed by scripts/seed-post.mjs, which upserts it into the `posts` collection.
//
// Content block shape (see model/Post.js → ContentBlockSchema):
//   { heading, body, bullets?, image?, imageAlt? }
//
//   heading   → rendered as a gold <h2>. Empty string = plain paragraph block.
//   body      → supports <b>/<strong> (styled gold), <a href="..."> and blank
//               lines for paragraph breaks.
//   bullets   → rendered as a bulleted list under the body.
//   image     → rendered inline, after the body/bullets.
//
// Each paragraph inside a template literal below is kept on a single physical
// line so the blank line between paragraphs is the only line break that reaches
// the renderer.

export const accommodationPost = {
  slug: "aptech-ibadan-student-accommodation",
  title:
    "Aptech Ibadan Now Has Student Accommodation, Everything You Need to Know",
  category: "CampusLife",
  excerpt:
    "Aptech Ibadan now provides fully managed student accommodation for students coming from outside Ibadan and from anywhere across Nigeria, with daily cleaning, campus transport, house management and two room options — Standard and VIP.",
  heroImage: "/images/accommodation/hero.png",
  thumbnail: "/images/accommodation/hero.png",
  author: "Samuel Ochuko",
  date: "September 22, 2026",
  readTime: "12 mins",
  views: "",
  likes: "",
  comments: "",
  tags: [
    "Aptech Ibadan Accommodation",
    "Student Hostel Ibadan",
    "Tech School Ibadan",
    "Software Engineering Ibadan",
    "Study Abroad Nigeria",
    "Aptech ADSE",
    "Cybersecurity Training Ibadan",
    "Arena Multimedia Ibadan",
    "Student Accommodation Ibadan",
    "Tech Courses Ibadan",
  ],
  content: [
    {
      heading: "",
      body: `Distance has always been one of the biggest reasons people put off starting their tech education. The commute is too long. Finding a place to stay is stressful. The logistics of relocating to a new city feel overwhelming.

Aptech Ibadan has removed every single one of those excuses.

<b>We are proud to announce that Aptech Ibadan now provides fully managed student accommodation</b> for students coming from outside Ibadan and from anywhere across Nigeria. Whether you are in Lagos, Abuja, Osun, Kwara, Ogun, or anywhere else, you can now relocate to Ibadan, move into structured, safe, and comfortable accommodation, and focus entirely on building the tech career you have been planning.

This post covers everything you need to know about the accommodation, who it is for, what is included, and which programs make the most sense if you are planning to stay.`,
    },
    {
      heading: "Who Is This Accommodation For?",
      body: `The Aptech Ibadan student accommodation is designed for two categories of students.

<b>Students registered by parents or guardians.</b> These are typically younger students whose accommodation and welfare arrangements are managed with the involvement of a parent or guardian. Parents can have full confidence that their child is in a safe, structured, and accountable environment.

<b>Older students registering independently.</b> These are mature students who manage their own accommodation arrangements. They are expected to demonstrate personal responsibility and accountability while complying fully with all accommodation rules.

Both categories are fully catered for and both benefit from the same facilities, safety measures, and support services.

If you are a parent reading this and wondering whether your child would be safe, the short answer is yes. The accommodation operates under strict house management, a structured curfew, daily cleaning, and a set of conduct policies designed to keep every resident safe, focused, and accountable. More on that below.`,
    },
    {
      heading: "Two Accommodation Options to Choose From",
      body: `Aptech Ibadan offers two types of accommodation depending on your preference and budget.`,
    },
    {
      heading: "Standard Accommodation",
      body: `The Standard option is a shared room arrangement designed for students who want comfortable, functional living at an accessible price point. Each room accommodates up to ten residents and every resident is provided with a bed.

Facilities included in the Standard accommodation:`,
      bullets: [
        "Air conditioning",
        "High speed internet access",
        "Reading chair and table",
        "Bed",
        "Basic accommodation facilities",
      ],
    },
    {
      heading: "",
      body: `This is a practical, focused environment built for students who are serious about learning and need a reliable, comfortable base to return to after each day of training.`,
    },
    {
      heading: "VIP Accommodation",
      body: `The VIP option offers a more private and premium experience. Each room accommodates only four residents, making it significantly more personal and less crowded.

In addition to everything available in the Standard accommodation, VIP residents also have access to:`,
      bullets: [
        "Water heater",
        "Small refrigerator",
        "Spacious wardrobe",
        "Microwave",
      ],
    },
    {
      heading: "",
      body: `The VIP option is ideal for students who want a quieter, more private environment and are willing to invest a little more in their comfort during their study period.

Both accommodation types include beds in every room. You are not expected to bring furniture.`,
      image: "/images/accommodation/accommodation-1.png",
      imageAlt:
        "Standard and VIP rooms at the Aptech Ibadan student accommodation",
    },
    {
      heading: "What Is Included Beyond the Room",
      body: `The accommodation at Aptech Ibadan goes far beyond just a place to sleep. Here is what is covered as part of the overall experience.`,
    },
    {
      heading: "Daily Cleaning",
      body: `Resident rooms are cleaned daily by designated accommodation cleaning personnel. Common areas are also cleaned and maintained regularly. Any damage to furniture, equipment, or accommodation property will be charged to the responsible resident, so residents are expected to treat the space with care.`,
    },
    {
      heading: "Structured Transportation",
      body: `One of the most important features of the accommodation is the transport arrangement. Dedicated transportation is provided to pick students up from the accommodation and drop them to school on scheduled days, then bring them back at the end of the day.

You do not need to worry about how to get to class. The logistics are handled. Residents are expected to adhere to the assigned pick-up times so the schedule runs smoothly for everyone.`,
    },
    {
      heading: "House Management",
      body: `A dedicated House Manager is on site to support resident welfare, handle complaints, monitor facilities, and oversee daily accommodation operations. If you have an issue, there is always someone to speak to.`,
    },
    {
      heading: "First Aid and Emergency Support",
      body: `Access to a basic first aid box and emergency support procedures is available within the accommodation. Emergency contact information for house management, security, medical support, and emergency services is also made available to all residents.`,
    },
    {
      heading: "Convenience Store",
      body: `A mini convenience store within the accommodation provides access to drinking water, drinks, snacks, cereals, detergents, basic toiletries, first aid supplies, and other everyday necessities. You do not need to leave the premises for basic items.`,
    },
    {
      heading: "Laundry Services",
      body: `Residents can subscribe to paid laundry services through an approved laundry provider or manage their own laundry. The flexibility is there.`,
    },
    {
      heading: "Meal Arrangements",
      body: `Meals are not included in the accommodation fees. However, students who want meal services can subscribe separately to an approved meal plan provided by an external catering partner. Two options are available, a breakfast and dinner plan or a dinner only plan. Students who prefer to make their own food arrangements are also welcome to do so. Ready-to-eat items such as cereals, snacks, fruits, and packaged meals may be kept in the room. Cooking within resident rooms is not permitted.`,
      image: "/images/accommodation/accommodation-2.png",
      imageAlt:
        "Shared living and dining facilities at the Aptech Ibadan student accommodation",
    },
    {
      heading: "Safety, Conduct, and Structure",
      body: `This is the part that parents especially want to know about.`,
    },
    {
      heading: "Curfew",
      body: `A standard curfew of 9:00 PM is in place for students registered independently without guardians. Residents are expected to be within the accommodation premises by 9:00 PM unless prior approval has been obtained for legitimate commitments such as work, medical emergencies, official engagements, or travel delays.`,
    },
    {
      heading: "Quiet Hours",
      body: `Quiet hours run from 10:00 PM to 6:00 AM. During this time, loud music and excessive noise are not permitted. Common areas must be used respectfully and consideration for other residents is expected at all times.`,
    },
    {
      heading: "General Conduct",
      body: `Residents are expected to behave respectfully at all times. Harassment, violence, bullying, and disruptive behaviour are strictly prohibited. All accommodation facilities must be used responsibly.`,
    },
    {
      heading: "Prohibited Items and Activities",
      body: `The following are not permitted within the accommodation premises. Smoking, alcohol consumption, illegal drugs or substances, weapons, gambling, fighting, stealing, sexual misconduct, and any activity that threatens the safety or wellbeing of residents.

These rules exist not to be restrictive but to protect every resident and ensure the accommodation remains the kind of environment where students can actually focus and thrive.`,
    },
    {
      heading: "Security",
      body: `Entry and exit is managed and monitored. Residents must sign in and out where an access log system is in place. Unauthorized entry or exit is prohibited and residents must not allow unauthorized persons to enter behind them.`,
    },
    {
      heading: "Visitors",
      body: `All visitors must be registered at the point of entry and must remain in approved common areas. Guardians may visit once a month. Overnight visitors are not permitted unless explicitly approved by management.`,
    },
    {
      heading: "Room Allocation",
      body: `Room allocation is managed by accommodation management and where necessary, assignments are made based on gender, programme schedule, and availability. Management makes every reasonable effort to ensure suitable room arrangements for all residents.`,
      image: "/images/accommodation/accommodation-3.png",
      imageAlt:
        "Room allocation and resident spaces at the Aptech Ibadan student accommodation",
    },
    {
      heading: "Which Programs Make the Most Sense If You Are Planning to Stay",
      body: `If you are relocating to Ibadan and taking up accommodation, it makes the most sense to enrol in a program that justifies the move and gives you the best return on your investment of time, money, and commitment.

Here are the programs we recommend for students who are planning a longer stay.`,
    },
    {
      heading: "Advanced Diploma in Software Engineering (ADSE)",
      body: `This is our flagship career program and the one most suited for students who are serious about building a long-term tech career. The ADSE program covers software engineering comprehensively including front-end development, back-end development, mobile application development, database systems, cloud computing, and enterprise applications. It is a program that takes you from beginner to fully industry-ready.

What makes the ADSE particularly powerful is the international pathway attached to it. Upon completing the program, students have a direct route to continue their education and earn an internationally recognised degree through our university partners including Middlesex University UK, NCC Education, and Lincoln University College Malaysia. Start your studies in Ibadan. Finish with a degree abroad.`,
    },
    {
      heading: "ACNS — Networking and Cybersecurity",
      body: `The ACNS program is one of the most in-demand career paths in tech globally right now. It covers network engineering, cybersecurity and ethical hacking, cloud administration, and Windows and Linux systems. Cybersecurity professionals are needed everywhere and the global shortage of skilled professionals means job opportunities are abundant both locally and internationally.

This is an 18-month and above program, making it a strong fit for students planning a meaningful stay at the accommodation.`,
    },
    {
      heading: "Arena Multimedia Specialist Program",
      body: `For students interested in the creative side of technology, the Arena Multimedia Specialist Program is a comprehensive 2-year career program covering UI/UX design, 3D animation, motion graphics, game development, graphic design, web design, and digital filmmaking. It is one of the most complete creative technology programs available in Ibadan and its duration makes it a natural fit for students using the accommodation.`,
    },
    {
      heading: "Realtime 3D and Game Art",
      body: `The Realtime 3D and Game Art program is for students who want to build careers in game design and development. Covering Unity, Unreal Engine, level design, game UI, and 3D asset integration, this program produces graduates who are ready to work in one of the fastest growing industries in the world.`,
    },
    {
      heading: "VFX for Animation, Games and Films",
      body: `The VFX program covers the full visual effects pipeline from pre-production to post-production. Students learn compositing, matchmoving, rotoscopy, and advanced visual effects using industry-standard tools. This is for students who want to work in film, animation, and game production at a professional level.`,
    },
    {
      heading: "What to Bring When You Move In",
      body: `Students are advised to come with the following personal items:`,
      bullets: [
        "Electric kettle without boiling ring",
        "Medical report",
        "Plastic spoons and forks",
        "Plastic plates",
        "Bucket",
        "Bedsheets",
        "Pillow",
        "Towel",
        "Plastic hangers",
        "Basic detergents and cleaning materials",
        "Other necessary personal items",
      ],
    },
    {
      heading: "",
      body: `Beds are already provided in all rooms. You do not need to bring a mattress or any furniture.`,
    },
    {
      heading: "The Check-In Process",
      body: `Before moving in, residents are required to provide their full name and identification details, emergency contact information, student details, room allocation record, a signed accommodation agreement, and relevant medical information or report.

Upon check-in, a room inventory and checklist will be completed, room keys will be issued, accommodation rules will be explained and acknowledged, and residents will be expected to take responsibility for their assigned space and belongings.`,
    },
    {
      heading: "A Note for Parents",
      body: `We understand that sending your child to study in a different city requires a significant level of trust. Our commitment is to provide an environment where students can live safely, study comfortably, develop responsibility, and focus entirely on their academic and career goals.

The accommodation is structured, managed, and operated with the wellbeing of every resident as the priority. Parents of students registered under guardian arrangements may be contacted where necessary, particularly in cases involving serious rule violations, safety concerns, extended absence, or emergencies.

We encourage parents to read through the full accommodation policy document and reach out to us directly with any questions before their child checks in.`,
    },
    {
      heading: "Ready to Get Started?",
      body: `If you or your child has been putting off a tech education because of distance, the accommodation changes everything.

The training is here. The structure is here. The transport is here. The safety is here. And the pathway to an international degree is here.

All that is left is the decision.

<a href="/program">Visit our programs page</a> to explore every course in detail and find the right fit for your goals.

<a href="/contact">Contact us today</a> to speak with an advisor, ask your questions about the accommodation, and take the first step.

Or walk into any of our campuses directly:

📍 Aptech Agodi — Westone Building, beside Governor's Wife Office, Agodi, Ibadan
📲 07070491555

📍 Aptech Ringroad — 93 MKO Abiola Way, Adjacent Sunrise Mall, Ringroad, Ibadan
📲 08064634830

📍 Aptech Bodija — 38A Ladoke Akintola Avenue, Bodija, Ibadan
📲 08036518761`,
    },
  ],
};

export default accommodationPost;
