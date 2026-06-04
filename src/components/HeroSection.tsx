import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-36 relative">
      {/* Subtle gradient orb */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f4a460]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Hero Text */}
        <div className="md:col-span-8 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/40">Full Stack Developer & ML Enthusiast</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="hero-heading-reveal reveal-visible">
            <h1 className="text-[3.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-clash font-bold leading-[0.9] tracking-[-0.02em] mb-4">
              <span className="line-mask-container block">
                <span className="line-mask-content">INNOVATING</span>
              </span>
              <span className="line-mask-container block">
                <span className="line-mask-content text-white/80">WITH</span>
              </span>
              <span className="line-mask-container block">
                <span className="line-mask-content bg-gradient-to-r from-[#d4af37] to-[#f4a460] bg-clip-text text-transparent">CODE<span className="text-[#d4af37]">.</span></span>
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/50 mt-6 max-w-md text-base leading-[1.8] tracking-wide"
          >
            Passionate about Full-Stack Development and Machine Learning — crafting digital experiences with precision, innovation, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <Button asChild className="px-7 py-2.5 bg-[#d4af37] hover:bg-[#c49928] text-black font-semibold rounded-full hover-trigger text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <a href="#work">View My Work</a>
            </Button>
            <Button asChild className="px-7 py-2.5 border border-white/20 rounded-full text-white/80 font-semibold hover:bg-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover-trigger text-sm tracking-wide">
              <a href="#contact">Let's Talk</a>
            </Button>
          </motion.div>
        </div>

        {/* Hero Photo */}
        <div className="md:col-span-4 flex justify-center md:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hover-trigger group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#f4a460]/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/assets/PHOTO.png"
              alt="Anmol Sharma"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent rounded-2xl z-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
