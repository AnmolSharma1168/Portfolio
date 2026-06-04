import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group work-card relative fade-in-section hover-trigger"
    >
      {/* Image Container — reduced aspect ratio */}
      <a
        href={project.liveUrl || project.githubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-[16/10] overflow-hidden bg-[#1a1a1a] rounded-xl relative project-image-container">
          <span className="absolute top-4 right-6 text-[3.5rem] font-clash font-bold opacity-[0.06] z-10 text-white">{String(index + 1).padStart(2, '0')}</span>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 z-10">
            <span className="px-6 py-2.5 bg-white/95 text-black text-xs font-semibold rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 tracking-wider uppercase backdrop-blur-sm">
              {project.liveUrl ? 'View Project' : 'View Code'}
            </span>
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="mt-5 flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-clash font-bold group-hover:text-[#d4af37] transition-colors duration-300 leading-tight">{project.title}</h3>
          <p className="text-white/35 mt-2 text-xs leading-relaxed line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider text-white/30 px-2.5 py-1 border border-white/8 rounded-full">{tag}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] uppercase tracking-wider text-white/20 px-2.5 py-1">+{project.tags.length - 3}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0 mt-1">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-[#d4af37]/30 transition-all">
              <Github className="w-3.5 h-3.5 text-white/50" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover:text-black transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
