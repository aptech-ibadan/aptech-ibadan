import styles from "./About.module.css"

const AboutPage = () => {
  return (
    <section className={styles.aboutbody}>
      <div className={styles.gloweffect}></div>
      <div className={styles.gloweffect2}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center gap-4 px-4 mb-10">
          <div className={styles.abouthero}>
            <h1 className={styles.aboutheader}>
              About Us
            </h1>
            <p className="p-2 tracking-wider text-justify z-50">
              Welcome to Aptech Agodi, a leading center for technology education and digital skills development. We are dedicated to equipping students, professionals, and business owners with practical, industry-relevant knowledge that prepares them for success in today’s fast-evolving tech landscape. With a strong focus on hands-on learning, we provide training that bridges the gap between theory and real-world application.

              At Aptech Agodi, our programs cover key areas such as software development, data analysis, networking, cybersecurity, and digital design. Backed by global standards from Aptech Computer Education, our experienced instructors deliver quality training that empowers learners to build careers, start businesses, and stay competitive in the global digital economy.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 px-4 mb-10">
          <h1 className={styles.aboutvalue}>Our Value</h1>
          <div className="flex gap-4 w-full">
            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}>
                <h3>Excellence</h3>
                <p>
                  We are committed to delivering top-notch education and ensuring our students are well-prepared for their careers.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}>
                <h3>Innovation</h3>
                <p>
                  We continuously seek new and creative ways to enhance our curriculum and teaching methods to stay ahead in the tech industry.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}>
                <h3>Collaboration</h3>
                <p>
                  We foster a collaborative learning environment where students, instructors, and industry partners work together to achieve shared goals.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}>
                <h3>Integrity</h3>
                <p>
                  We conduct our business with the highest ethical standards, ensuring transparency, honesty, and respect in all our dealings.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}>
                <h3>Sustainability</h3>
                <p>
                  We are dedicated to minimizing our environmental impact and promoting sustainability in all aspects of our operations.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardicon}></div>
              <div className={styles.desc}> 
                <h3>Community</h3>
                <p>
                  We believe in giving back to the community and making a positive impact through our corporate social responsibility initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 px-4 mb-10 py-10 relative">

          <div className={styles.gloweffect}></div>
      <div className={styles.gloweffect2}></div>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center gap-10 flex-1 pr-20 pt-10 z-30">

              <div>
                <h1 className={styles.aboutvalue}>Our Mission </h1>

                <p className="text-sm font-light">
                   Our mission is to provide high-quality, accessible education in computer programming. We aim to inspire and empower students to achieve their full potential, fostering a lifelong love for coding and continuous learning.

                </p>
              </div>
              <div>
                <h1 className={styles.aboutvalue}>Our Vision </h1>
                <p className="text-sm font-light">
                  We envision a world where anyone with the passion and dedication can become a proficient programmer. By offering comprehensive, hands-on training, we strive to bridge the gap between aspiring developers and the tech industry’s ever-evolving demands.
                </p>
              </div>



            </div>


            <div className="flex items-center justify-center flex-1 p-10">
              <img src="/images/globe.png" alt="Mission Image" className="w-full h-auto object-cover rounded-lg" />

            </div>
          </div>
         </div>


        <div className="flex flex-col items-start justify-center gap-4 px-4 mb-10 py-10 relative">
          
          <div className={styles.gloweffect}></div>
      <div className={styles.gloweffect2}></div>
        </div>
        
        <div className="">

        </div>

       
      </div>
    </section>
  )
}

export default AboutPage