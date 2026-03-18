import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-[10vh] pt-24 max-w-7xl mx-auto">
      {/* Heading row: text + blob side by side on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        {/* Blob — above heading on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="flex justify-center md:hidden mb-10"
        >
          <div className="relative w-56 h-56">
            <div className="absolute inset-0 animate-blob-rotate">
              <div className="w-full h-full overflow-hidden" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", borderRadius: "30px" }}>
                <div className="w-full h-full animate-blob-counter-rotate">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover scale-150 object-top" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heading text */}
        <div className="flex-1">
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
            className="font-display text-[14vw] md:text-[10vw] font-black leading-[0.85] uppercase"
          >
            BUILDING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="font-display text-[14vw] md:text-[10vw] font-black leading-[0.85] uppercase"
          >
            THE VOID.
          </motion.h1>
        </div>

        {/* Blob — beside heading on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="hidden md:flex justify-end items-center flex-shrink-0"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 animate-blob-rotate" style={{ filter: "url(#smooth-triangle)" }}>
              <div className="w-full h-full overflow-hidden" style={{ clipPath: "polygon(50% 5%, 2% 95%, 98% 95%)", borderRadius: "30px" }}>
                <div className="w-full h-full animate-blob-counter-rotate">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover scale-[1.8] object-top" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        className="max-w-xl mt-12"
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
