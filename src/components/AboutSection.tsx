import { motion } from "framer-motion";
import { Code2, Brain, Server, Users } from "lucide-react";

const skills = [
  { icon: Brain, title: "Machine Learning", description: "Building ML pipelines, training models, and deploying AI-driven features to production" },
  { icon: Server, title: "Backend Development", description: "Designing scalable REST APIs and backend services using FastAPI and Node.js" },
  { icon: Code2, title: "Full Stack", description: "End-to-end ownership of features across frontend, backend, and data layers" },
  { icon: Users, title: "Collaboration", description: "Working directly with founders, designers, and engineers in fast-paced startup environments" },
];

const techStack = [
  "Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy",
  "React", "React Native", "Node.js", "Express.js",
  "MongoDB", "SQL", "Git", "Linux", "SAP S/4HANA"
];

const profilePhoto = "/assets/PHOTO.png";

const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* About Me tag removed */}
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <p className="text-[1.1rem] md:text-lg text-[#0f172a] mb-6 leading-relaxed font-medium">
              I'm a Computer Science undergraduate at SRM Institute of Science and Technology (Batch of 2027), 
              passionate about machine learning, full stack development, and building production-ready systems 
              that solve real problems. I enjoy taking end-to-end ownership — from ideation to deployment.
            </p>
            <p className="text-[1.1rem] md:text-lg text-[#0f172a] mb-6 leading-relaxed font-medium">
              I have interned as a ML Intern at <span className="text-foreground font-semibold">SpazorLabs</span>, 
              developing and integrating ML models into production workflows. I also worked as a 
              Frontend Developer at <span className="text-foreground font-semibold">Runverve</span>, building 
              high-performance React Native mobile screens, and completed a technical traineeship at{" "}
              <span className="text-foreground font-semibold">BSNL</span> working with large-scale telecom infrastructure.
            </p>
            <p className="text-[1.1rem] md:text-lg text-[#0f172a] mb-8 leading-relaxed font-medium">
              Outside of work, I lead sponsorships at the{" "}
              <span className="text-foreground font-semibold">Codenex Club, SRMIST</span> — 
              securing partnerships for hackathons with 3000+ participants.
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full bg-secondary text-base font-medium text-foreground border border-transparent hover:border-primary/30 cursor-default transition-colors skill-tag"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ rotate: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="relative glass-card rounded-2xl p-2 glow-effect overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Anmol Sharma"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, rotate: 1 }}
              className="glass-card rounded-xl p-6 interactive-card group cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 icon-container">
                <skill.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-base">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;