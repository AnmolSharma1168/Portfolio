import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "Leveraging machine learning to generate creative content for marketing teams.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
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
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge 
            and showcases different aspects of my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
