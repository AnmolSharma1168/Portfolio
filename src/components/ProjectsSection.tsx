import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Intelligent Financial Capital System",
    description: "A production-grade AI backend that evaluates startup creditworthiness and capital risk using machine learning. Performs financial feature extraction to compute burn rate, liquidity, and leverage ratios, then predicts Probability of Default (PD) using a trained ML model. Converts predictions into actionable funding recommendations (Approve / Conditional / Reject), auto-generates formal PDF credit reports, and exposes secure REST APIs via FastAPI deployed on Render.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'NumPy', 'Pandas', 'Plotly', 'ReportLab'],
    liveUrl: "https://intelligent-financial-capital-system.onrender.com/docs#/default/evaluate_startup_api_startup_evaluate_post",
    githubUrl: "https://github.com/AnmolSharma1168/Intelligent-financial-capital-system",
  },
  {
    id: "4",
    title: "NTExam — National Exam Hub",
    description: "A comprehensive national exam preparation platform built with modern web technologies. Features include exam browsing, study resources, interactive UI components, and a server-side backend. Built collaboratively using Vite, React, TypeScript, Supabase, and Tailwind CSS, deployed on Vercel for seamless access.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: "https://nt-exam-national-exam-hub.vercel.app",
    githubUrl: "https://github.com/AnmolSharma1168/NTExam-national-exam-hub",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-xl font-bold mb-4 backdrop-blur-md border border-primary/20 tracking-wider uppercase">
            My Work
          </span>
          <br/>
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sampleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;