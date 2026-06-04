import { motion } from "framer-motion";

const skills = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "SQL",
  "Git",
  "Linux"
];

const AboutSection = () => {
  const profilePhoto = "/assets/PHOTO.png";

  return (
    <section id="about" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <span className="text-[12px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4 block">About</span>
          <h2 className="text-6xl font-clash font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              I'm a Computer Science undergraduate at SRM Institute of Science and Technology (Batch of 2027), 
              passionate about machine learning, full stack development, and building production-ready systems 
              that solve real problems.
            </p>

            <p className="text-white/70 text-xl leading-relaxed mb-6">
              I've worked as a ML Intern at <span className="text-white font-semibold">SpazorLabs</span>, developing and integrating ML models into production workflows. I also worked as a Frontend Developer at <span className="text-white font-semibold">Runverve</span>, building high-performance React Native mobile screens.
            </p>

            <p className="text-white/70 text-xl leading-relaxed">
              I lead sponsorships at the <span className="text-white font-semibold">Codenex Club, SRMIST</span> — securing partnerships for hackathons with 3000+ participants.
            </p>
          </motion.div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group hover-trigger">
              <img
                src={profilePhoto}
                alt="Anmol Sharma"
                className="w-72 h-72 object-cover rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-[#d4af37]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-clash font-bold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/70 hover:text-white hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all hover-trigger"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;