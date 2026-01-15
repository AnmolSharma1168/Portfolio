import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  { icon: Code2, title: "Development", description: "Building robust applications with modern technologies" },
  { icon: Palette, title: "Design", description: "Creating beautiful, intuitive user interfaces" },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and scalability" },
  { icon: Users, title: "Collaboration", description: "Working effectively with teams worldwide" },
];

const techStack = [
  "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "AWS", "Docker"
];

// Replace with your actual photo URL or import from assets
const profilePhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with a love for creating elegant solutions 
              to complex problems. With years of experience in web development, I specialize 
              in building scalable applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground"
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform rotate-6" />
              <div className="relative glass-card rounded-2xl p-2 glow-effect">
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            </div>
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
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6"
            >
              <skill.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold font-display mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
