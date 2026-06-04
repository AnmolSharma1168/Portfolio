import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#about" },
  { name: "Research", href: "#research" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 md:py-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-clash font-bold tracking-tight hover-trigger"
          whileHover={{ scale: 1.02 }}
        >
          ANMOL<span className="text-[#d4af37]">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.14em] font-medium magnetic-link hover-trigger"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-6 py-2 border border-[#d4af37] rounded-full text-[12px] uppercase tracking-[0.14em] hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover-trigger font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Let's Talk
          </motion.a>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover-trigger">
            <a href="https://github.com/AnmolSharma1168" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-white hover:text-[#d4af37]" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover-trigger">
            <a href="https://www.linkedin.com/in/anmol-sharma-a83042290/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-white hover:text-[#d4af37]" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover-trigger">
            <a href="/assets/Anmol_Sharma_Resume.pdf" download>
              <FileText className="h-5 w-5 text-white hover:text-[#d4af37]" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-bold text-lg hover:text-[#d4af37] transition-colors magnetic-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-white font-bold text-lg hover:text-[#d4af37] transition-colors magnetic-link"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" asChild className="hover-trigger">
                <a href="https://github.com/AnmolSharma1168" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover-trigger">
                <a href="https://www.linkedin.com/in/anmol-sharma-a83042290/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover-trigger">
                <a href="/assets/Anmol_Sharma_Resume.pdf" download>
                  <FileText className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar; 