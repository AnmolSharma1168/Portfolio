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
    <section id="resume" className="py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-24">
          <span className="text-[12px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4 block">Resume</span>
          <h2 className="text-6xl font-clash font-bold">My Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white/60" />
              </div>
              <h3 className="text-2xl font-clash font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-8 fade-in-section hover-trigger group"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#d4af37] bg-[#0d0d0d]"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-[7px] top-8 w-[2px] h-[calc(100%+2rem)] bg-white/10"></div>
                  )}
                  
                  <span className="text-[#d4af37] text-sm font-medium">{exp.period}</span>
                  <h4 className="text-lg font-clash font-bold mt-2 group-hover:text-[#d4af37] transition-colors">{exp.title}</h4>
                  <p className="text-white/50 text-sm mt-1">{exp.company}</p>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white/60" />
              </div>
              <h3 className="text-2xl font-clash font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0 }}
                className="relative pl-8 fade-in-section"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#d4af37] bg-[#0d0d0d]"></div>
                <div className="absolute left-[7px] top-8 w-[2px] h-[calc(100%+2rem)] bg-white/10"></div>
                
                <span className="text-[#d4af37] text-sm font-medium">Aug 2023 - May 2027</span>
                <h4 className="text-lg font-clash font-bold mt-2">B.Tech — Computer Science & Engineering</h4>
                <p className="text-white/50 text-sm mt-1">SRM Institute of Science and Technology, Chennai</p>
                <p className="text-white/60 text-sm mt-2">CGPA: 8.92/10 · Sponsorship Associate Head, Codenex Club</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative pl-8 fade-in-section"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#d4af37] bg-[#0d0d0d]"></div>
                <div className="absolute left-[7px] top-8 w-[2px] h-[calc(100%+2rem)] bg-white/10"></div>
                
                <span className="text-[#d4af37] text-sm font-medium">2023</span>
                <h4 className="text-lg font-clash font-bold mt-2">Class XII — C.B.S.E. (PCM + IP)</h4>
                <p className="text-white/50 text-sm mt-1">R.R. Morarka Public School, Nagina, U.P.</p>
                <p className="text-white/60 text-sm mt-2">Percentage: 87.8%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative pl-8 fade-in-section"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#d4af37] bg-[#0d0d0d]"></div>
                
                <span className="text-[#d4af37] text-sm font-medium">2021</span>
                <h4 className="text-lg font-clash font-bold mt-2">Class X — C.B.S.E.</h4>
                <p className="text-white/50 text-sm mt-1">R.R. Morarka Public School, Nagina, U.P.</p>
                <p className="text-white/60 text-sm mt-2">Percentage: 92.8%</p>
              </motion.div>
            </div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-auto pt-12 border-t border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20">
                  <FileText className="h-8 w-8 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-clash font-bold">My Resume</h4>
                  <p className="text-white/50 text-sm">Download CV for detailed experience</p>
                </div>
              </div>
              <Button asChild className="w-full mt-6 px-8 py-3 bg-[#d4af37] hover:bg-[#c49928] text-black font-medium rounded-full hover-trigger">
                <a href="/assets/Anmol_Sharma_Resume.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;