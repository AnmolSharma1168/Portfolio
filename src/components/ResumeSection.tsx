import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "ML Intern",
    company: "SpazorLabs",
    period: "Jul 2025 - Dec 2026",
    description: "Developed and integrated machine learning models into production workflows, supporting data pipeline design, model evaluation, and deployment of AI-driven features that improved business decision-making speed and accuracy.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Runverve",
    period: "Feb 2025 - May 2025",
    description: "Developed and optimized cross-platform mobile screens using React Native, partnering with design and backend teams to deliver pixel-accurate, production-ready UI components through rapid iteration cycles.",
  },
  {
    title: "Technical Trainee",
    company: "Bhartiya Sanchar Nigam Limited (B.S.N.L)",
    period: "Jun 2025 - Jul 2025",
    description: "Observed and analyzed large-scale telecom infrastructure operations, gaining practical understanding of system reliability, network security trade-offs, and scalable architecture decision-making in a production environment.",
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
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-xl font-bold mb-4 backdrop-blur-md border border-primary/20 tracking-wider uppercase">
            Resume
          </span>
          <br/>
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
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
              <h3 className="text-2xl font-display font-semibold text-[#1e293b]">Work Experience</h3>
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
              <h3 className="text-2xl font-display font-semibold text-[#1e293b]">Education</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <span className="text-primary text-sm font-medium">Aug 2023 - May 2027</span>
                <h4 className="text-lg font-semibold mt-1">B.Tech — Computer Science and Engineering</h4>
                <p className="text-muted-foreground text-sm">SRM Institute of Science and Technology, Chennai</p>
                <p className="text-muted-foreground mt-2">CGPA: 8.92/10 · Sponsorship Associate Head, Codenex Club</p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <span className="text-primary text-sm font-medium">2023</span>
                <h4 className="text-lg font-semibold mt-1">Class XII — C.B.S.E. (PCM + IP)</h4>
                <p className="text-muted-foreground text-sm">R.R. Morarka Public School, Nagina, U.P.</p>
                <p className="text-muted-foreground mt-2">Percentage: 87.8%</p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <span className="text-primary text-sm font-medium">2021</span>
                <h4 className="text-lg font-semibold mt-1">Class X — C.B.S.E.</h4>
                <p className="text-muted-foreground text-sm">R.R. Morarka Public School, Nagina, U.P.</p>
                <p className="text-muted-foreground mt-2">Percentage: 92.8%</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 text-center flex flex-col items-center justify-center">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <h4 className="text-xl font-display font-semibold mb-2">Download My Resume</h4>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my skills and experience
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/assets/Anmol_Sharma_Resume.pdf" download>
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