import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-[10vh] pt-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-end">
        {/* Blob image — above heading on mobile, beside on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="md:col-span-4 md:col-start-9 md:row-span-2 flex justify-center md:justify-end mb-8 md:mb-0 order-first md:order-last"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox" transform="scale(0.005, 0.005)">
                  <path d="M144.4,-156.2C186.8,-131.5,220.4,-85.7,228.6,-36.1C236.8,13.5,219.5,66.8,192.1,110.5C164.6,154.2,127,188.2,82.4,205.5C37.8,222.8,-13.8,223.3,-58.9,207.1C-104,190.9,-142.6,158,-168.2,117.5C-193.9,77,-206.6,28.9,-200.7,-15.4C-194.8,-59.8,-170.2,-100.3,-137.3,-126.5C-104.4,-152.6,-63.2,-164.3,-17.8,-143.8C27.6,-123.3,102,-180.9,144.4,-156.2Z" />
                </clipPath>
              </defs>
            </svg>
            <div
              className="w-full h-full overflow-hidden"
              style={{
                clipPath: "url(#blobClip)",
              }}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="md:col-span-8">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="md:col-span-5 md:col-start-1 mt-12"
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
