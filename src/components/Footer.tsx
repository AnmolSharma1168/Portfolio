import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-2xl font-display font-bold text-[#1e1b4b] hover:opacity-80 transition-opacity">
              Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <Button variant="social" size="icon" asChild>
              <a href="https://github.com/AnmolSharma1168" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="https://www.linkedin.com/in/anmol-sharma-a83042290/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="social" size="icon" asChild>
              <a href="mailto:anmol1168sharma@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            © {currentYear}  by Anmol Sharma
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
