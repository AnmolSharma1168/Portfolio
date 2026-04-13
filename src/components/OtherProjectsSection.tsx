import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

const otherProjects: Project[] = [
  {
    id: "2",
    title: "BhoomiLedger Platform",
    description: "A decentralized Web3 land registry application deployed on Polygon Amoy testnet. Uses blockchain technology for transparent property management, transfers, and inheritance documentation. Built with comprehensive smart contracts using Hardhat and a responsive frontend deployed on Vercel.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ['Solidity', 'Hardhat', 'Polygon', 'React', 'TypeScript', 'Web3'],
    githubUrl: "https://github.com/AnmolSharma1168/BhoomiLedger",
  },
  {
    id: "3",
    title: "NLP Language Detection",
    description: "A language identification ML project capable of detecting 17 languages using TF-IDF character n-grams. Implements Naive Bayes, Logistic Regression, and a custom trigram language model with probabilistic scoring. Includes comprehensive evaluation metrics (accuracy, F1-score), visualizations, and real-time prediction with confidence scores.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Machine Learning', 'Jupyter'],
    githubUrl: "https://github.com/AnmolSharma1168/NLP-language-detection",
  },
  {
    id: "5",
    title: "Artistly",
    description: "A mobile-friendly web app to discover and book Indian performers like singers, DJs, dancers, and speakers. Features clean UI with search filters, artist profiles, and INR-based pricing. Built with Next.js and Tailwind CSS for a smooth, responsive experience.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: "https://github.com/AnmolSharma1168/Artistly",
  }
];

const OtherProjectsSection = () => {
  return (
    <section id="other-projects" className="py-24 relative bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-xl font-bold mb-4 backdrop-blur-md border border-primary/20 tracking-wider uppercase">
            More Works
          </span>
          <br/>
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
            Other Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsSection;
