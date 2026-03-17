import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-[20vh] px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="md:col-span-3"
        >
          <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-8 md:mb-0">
            About
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="font-display text-2xl md:text-4xl font-bold leading-tight mb-8">
            I build systems that scale and interfaces that communicate with precision.
          </p>
          <p className="font-mono-custom text-base text-muted-foreground leading-relaxed mb-6">
            With over 8 years of experience in full-stack development, I've architected
            solutions for startups and enterprises alike. My approach combines rigorous
            engineering with an obsessive attention to craft.
          </p>
          <p className="font-mono-custom text-base text-muted-foreground leading-relaxed">
            Currently focused on high-performance web applications, distributed systems,
            and design engineering. Every line of code is intentional.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease, delay: 0.3 }}
        className="h-px bg-border mt-16 origin-left"
      />
    </section>
  );
};

export default AboutSection;
