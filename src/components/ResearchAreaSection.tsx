import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "./ui/button";

const areas = [
  {
    title: "Artificial Intelligence, ML & DL",
    description: "Exploring predictive modeling, natural language processing, and evaluating complex datasets using advanced machine learning algorithms. Published research in prestigious conferences.",
    icon: "🧠",
    link: "/assets/IEEE_Conference_PISL.pdf",
    linkText: "Read IEEE Paper"
  },
  {
    title: "Recommendation Systems",
    description: "Researching collaborative filtering, content-based, and hybrid recommendation approaches. Building scalable systems using item-based similarity and nearest neighbor models for personalized user experiences.",
    icon: "🎯"
  },
  {
    title: "Data Mining",
    description: "Investigating pattern discovery, feature extraction, and knowledge discovery techniques across large-scale datasets. Applying statistical analysis and preprocessing pipelines to uncover actionable insights.",
    icon: "⛏️"
  }
];

const ResearchAreaSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-xl font-bold mb-4 backdrop-blur-md border border-primary/20 tracking-wider uppercase">
            Exploration
          </span>
          <br/>
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
            Research Areas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 transform-gpu inline-block">
                {area.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>
              
              {area.link && (
                <Button variant="outline" size="lg" asChild className="relative z-10 group/btn hover:border-primary/50 transition-colors">
                  <a href={area.link} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                    {area.linkText}
                  </a>
                </Button>
              )}
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreaSection;
