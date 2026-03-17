import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-[10vh] pt-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="md:col-span-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0 }}
            className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-8"
          >
            Senior Full-Stack Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-[14vw] md:text-[12vw] font-black leading-[0.85] uppercase"
          >
            BUILDING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="font-display text-[14vw] md:text-[12vw] font-black leading-[0.85] uppercase"
          >
            THE VOID.
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="md:col-span-5 md:col-start-8 mt-12"
        >
          <p className="font-mono-custom text-base text-muted-foreground leading-relaxed">
            Specializing in high-performance systems and precision interfaces.
            Crafting digital experiences that are sharp, fast, and intentional.
          </p>
          <div className="flex gap-8 mt-8 font-mono-custom text-sm uppercase tracking-widest">
            <a href="#projects" className="text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-200">
              Work
            </a>
            <a href="#contact" className="text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-200">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease, delay: 0.6 }}
        className="h-px bg-border mt-16 origin-left"
      />
    </section>
  );
};

export default HeroSection;
