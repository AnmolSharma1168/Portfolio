import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
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
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-xl font-bold mb-4 backdrop-blur-md border border-primary/20 tracking-wider uppercase">
            Get In Touch
          </span>
          <br/>
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-10">
              <h3 className="text-2xl font-display font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground font-medium">Email</p>
                    <a
                      href="mailto:anmol1168sharma@gmail.com"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      anmol1168sharma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground font-medium">Phone</p>
                    <a
                      href="tel:+919410601666"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      +91 9410601666
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-base text-muted-foreground font-medium">Location</p>
                    <p className="text-lg">Chennai, INDIA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-base text-muted-foreground mb-5 font-medium">
                  Follow me on social media
                </p>
                <div className="flex gap-4">
                  <Button variant="social" size="iconLg" asChild>
                    <a
                      href="https://github.com/AnmolSharma1168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-7 w-7" />
                    </a>
                  </Button>
                  <Button variant="social" size="iconLg" asChild>
                    <a
                      href="https://www.linkedin.com/in/anmol-sharma-a83042290/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-7 w-7" />
                    </a>
                  </Button>
                  <Button variant="social" size="iconLg" asChild>
                    <a
                      href="https://x.com/AnmolShar1168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-7 w-7" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-10"
            >
              <h3 className="text-2xl font-display font-bold mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  <Send className="h-6 w-6 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
