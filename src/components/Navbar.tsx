import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Other Works", href: "#other-projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-lg border-b border-[#1e1b4b]/10 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl font-display font-bold text-[#1e1b4b]"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-[#1e1b4b] hover:text-primary transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="social" size="iconXl" asChild>
              <a href="https://github.com/AnmolSharma1168" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
              </a>
            </Button>
            <Button variant="social" size="iconXl" asChild>
              <a href="https://www.linkedin.com/in/anmol-sharma-a83042290/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://drive.google.com/file/d/183y7Y6HxQHiozFamH2cD46wV-85snFdF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="h-6 w-6 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#1e1b4b] font-bold text-xl hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button variant="social" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="social" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 