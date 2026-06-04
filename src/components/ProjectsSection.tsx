import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Intelligent Financial Capital System",
    description: "A production-grade AI backend that evaluates startup creditworthiness and capital risk using machine learning. Performs financial feature extraction to compute burn rate, liquidity, and leverage ratios, then predicts Probability of Default (PD) using a trained ML model.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'NumPy', 'Pandas', 'Plotly', 'ReportLab'],
    liveUrl: "https://intelligent-financial-capital-system.onrender.com/docs#/default/evaluate_startup_api_startup_evaluate_post",
    githubUrl: "https://github.com/AnmolSharma1168/Intelligent-financial-capital-system",
  },
  {
    id: "4",
    title: "NTExam — National Exam Hub",
    description: "A comprehensive national exam preparation platform built with modern web technologies. Features include exam browsing, study resources, interactive UI components, and a server-side backend.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'Vercel'],
    liveUrl: "https://nt-exam-national-exam-hub.vercel.app",
    githubUrl: "https://github.com/AnmolSharma1168/NTExam-national-exam-hub",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="section-label mb-4 block">Work</span>
            <h2 className="text-4xl md:text-5xl font-clash font-bold">Selected Projects</h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium hidden md:block">Featured ({sampleProjects.length})</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {sampleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;