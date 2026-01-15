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
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer interactive-card"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-6 group-hover:translate-y-0">
          {project.liveUrl && (
            <Button variant="hero" size="sm" asChild className="shadow-lg">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="glass" size="sm" asChild className="shadow-lg">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-transparent hover:border-primary/30 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
