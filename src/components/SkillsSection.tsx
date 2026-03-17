import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Go",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS",
  "GraphQL", "REST APIs", "System Design", "CI/CD",
  "Figma", "Design Systems", "Performance", "Security",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-[20vh] px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="md:col-span-3 mb-12 md:mb-0"
        >
          <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground">
            Capabilities
          </p>
        </motion.div>
        <div className="md:col-span-9">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease, delay: i * 0.03 }}
                className="font-mono-custom text-sm uppercase tracking-wider border border-border px-5 py-3 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
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

export default SkillsSection;
