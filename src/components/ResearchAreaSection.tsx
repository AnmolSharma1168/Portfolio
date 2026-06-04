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
    <section id="research" className="py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-24">
          <span className="text-[12px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4 block">Research</span>
          <h2 className="text-6xl font-clash font-bold">Areas of Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col fade-in-section hover-trigger group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {area.icon}
              </div>
              <h3 className="text-2xl font-clash font-bold mb-4 group-hover:text-[#d4af37] transition-colors">
                {area.title}
              </h3>
              <p className="text-white/40 text-base leading-relaxed mb-6">
                {area.description}
              </p>
              
              {area.link && (
                <Button asChild className="w-fit px-0 text-white/60 hover:text-[#d4af37] bg-transparent border-none hover:bg-transparent transition-colors">
                  <a href={area.link} target="_blank" rel="noopener noreferrer" className="magnetic-link">
                    {area.linkText}
                    <FileText className="h-4 w-4 ml-2 inline" />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreaSection;
