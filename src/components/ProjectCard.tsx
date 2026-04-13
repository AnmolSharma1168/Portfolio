import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, rotate: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer interactive-card flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/15 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto pt-2">
          {project.liveUrl && (
            <Button variant="hero" size="default" asChild className="shadow-lg flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="glass" size="default" asChild className="shadow-lg flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
