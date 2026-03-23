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
          className="md:col-span-3 mb-8 md:mb-0"
        >
          <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Who Am I?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
            About.
          </h2>
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
            I'm a developer, student, and designer focused on building clean and functional digital experiences. I believe in moving fast, experimenting freely, and refining along the way.
          </p>
          <p className="font-mono-custom text-base text-muted-foreground leading-relaxed mb-6">
            Everything starts with one rule — make it exist first, you can make it good later.
          </p>
          <p className="font-mono-custom text-base text-muted-foreground leading-relaxed">
            I focus on minimal design, clear hierarchy, and purposeful development. Every project is an opportunity to explore, improve, and turn ideas into something real.
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
