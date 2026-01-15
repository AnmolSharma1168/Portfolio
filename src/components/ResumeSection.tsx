import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of cloud-native applications and mentoring junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Built scalable web applications using React, Node.js, and AWS services.",
  },
  {
    title: "Junior Developer",
    company: "Agency XYZ",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various clients.",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Resume</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-xl p-6 pl-8 timeline-accent group cursor-pointer"
                >
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h4 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">{exp.company}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </div>

            <div className="glass-card rounded-xl p-6 mb-8">
              <span className="text-primary text-sm font-medium">2014 - 2018</span>
              <h4 className="text-lg font-semibold mt-1">Bachelor's in Computer Science</h4>
              <p className="text-muted-foreground text-sm">University Name</p>
              <p className="text-muted-foreground mt-2">
                Graduated with honors. Focused on software engineering and web technologies.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 text-center flex-1 flex flex-col items-center justify-center">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <h4 className="text-xl font-display font-semibold mb-2">Download My Resume</h4>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my skills and experience
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
