import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xaqqndzz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New message from portfolio",
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-12 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <a href="#" className="text-4xl font-clash font-bold tracking-tight mb-8 block hover-trigger">
              ANMOL<span className="text-[#d4af37]">.</span>
            </a>
            <p className="text-xl text-white/50 max-w-xs mb-12">
              Let's collaborate on something extraordinary. Reach out and let's create together.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-[12px] uppercase tracking-widest text-white/30 mb-3">Email</p>
                <a href="mailto:anmol1168sharma@gmail.com" className="text-lg magnetic-link hover-trigger">
                  anmol1168sharma@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-widest text-white/30 mb-3">Phone</p>
                <a href="tel:+919410601666" className="text-lg magnetic-link hover-trigger">
                  +91 9410601666
                </a>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-widest text-white/30 mb-3">Location</p>
                <p className="text-lg text-white/70">Chennai, India</p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-[12px] uppercase tracking-widest text-white/30 mb-6">Social</p>
              <div className="flex gap-4">
                <a href="https://github.com/AnmolSharma1168" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all magnetic-btn hover-trigger">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/anmol-sharma-a83042290/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all magnetic-btn hover-trigger">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all magnetic-btn hover-trigger">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex items-end"
          >
            <div className="w-full">
              <h5 className="text-[12px] uppercase tracking-widest text-white/30 mb-8 font-semibold">Quick Message</h5>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-[#d4af37] hover:bg-[#c49928] text-black font-medium rounded-full hover-trigger"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[12px] uppercase tracking-widest text-white/20">© 2024 ANMOL SHARMA. ALL RIGHTS RESERVED.</span>
          <a href="#" className="group flex items-center gap-4 hover-trigger">
            <span className="text-[12px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Back to top</span>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              ↑
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
