import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" ref={ref} className="py-[20vh] px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="md:col-span-5 mb-16 md:mb-0"
        >
          <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight mb-8">
            Let's Work<br />Together.
          </h2>
          <div className="flex flex-col gap-4 font-mono-custom text-sm uppercase tracking-widest">
            <a href="mailto:roysourodip10@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              EMAIL
            </a>
            <a href="https://github.com/sourodiproy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              GITHUB
            </a>
            <a href="https://linkedin.com/in/sourodiproy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              LINKEDIN
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="md:col-span-6 md:col-start-7"
        >
          <form className="flex flex-col gap-0" onSubmit={(e) => e.preventDefault()}>
            <div className="relative py-6 border-b border-border">
              <label className={`font-mono-custom text-xs uppercase tracking-widest absolute top-2 transition-colors duration-200 ${focused === 'name' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Name
              </label>
              <input
                type="text"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent font-mono-custom text-base text-foreground outline-none pt-4 focus:border-foreground placeholder:text-muted-foreground/30"
                placeholder="Your name"
              />
            </div>
            <div className="relative py-6 border-b border-border">
              <label className={`font-mono-custom text-xs uppercase tracking-widest absolute top-2 transition-colors duration-200 ${focused === 'email' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Email
              </label>
              <input
                type="email"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent font-mono-custom text-base text-foreground outline-none pt-4 placeholder:text-muted-foreground/30"
                placeholder="your@email.com"
              />
            </div>
            <div className="relative py-6 border-b border-border">
              <label className={`font-mono-custom text-xs uppercase tracking-widest absolute top-2 transition-colors duration-200 ${focused === 'message' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Message
              </label>
              <textarea
                rows={3}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent font-mono-custom text-base text-foreground outline-none pt-4 resize-none placeholder:text-muted-foreground/30"
                placeholder="Tell me about your project"
              />
            </div>
            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 h-14 px-8 bg-foreground text-background font-display font-bold uppercase tracking-wider text-sm border border-foreground hover:bg-background hover:text-foreground transition-colors duration-200 self-start"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
