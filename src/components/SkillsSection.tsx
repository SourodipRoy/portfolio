import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

const skills = [
  { name: "Angular", bg: "#DD0031", text: "white" },
  { name: "JavaScript", bg: "#F7DF1E", text: "black" },
  { name: "TypeScript", bg: "#3178C6", text: "white" },
  { name: "React.js", bg: "#61DAFB", text: "black" },
  { name: "React Native", bg: "#5ED3F3", text: "black" },
  { name: "Vue.js", bg: "#42B883", text: "black" },
  { name: "Python", bg: "#3776AB", text: "white" },
  { name: "Java", bg: "#ED8B00", text: "white" },
  { name: "C++", bg: "#00599C", text: "white" },
  { name: "Node.js", bg: "#339933", text: "white" },
  { name: "Django", bg: "#092E20", text: "white" },
  { name: "Bash", bg: "#4EAA25", text: "black" },
  { name: "MongoDB", bg: "#47A248", text: "black" },
  { name: "MySQL", bg: "#00758F", text: "white" },
  { name: "PostgreSQL", bg: "#336791", text: "white" },
  { name: "GraphQL", bg: "#E10098", text: "white" },
  { name: "AWS", bg: "#FF9900", text: "black" },
  { name: "Azure", bg: "#0078D4", text: "white" },
  { name: "Docker", bg: "#2496ED", text: "white" },
  { name: "Git", bg: "#F05032", text: "white" },
  { name: "Appwrite", bg: "#FD366E", text: "white" },
  { name: "Firebase", bg: "#FFCA28", text: "black" },
  { name: "Bootstrap", bg: "#7952B3", text: "white" },
  { name: "Tailwind CSS", bg: "#38BDF8", text: "black" },
  { name: "Figma", bg: "#F24E1E", text: "white" },
  { name: "Adobe Illustrator", bg: "#FF9A00", text: "black" },
  { name: "Photoshop", bg: "#001E36", text: "white" },
  { name: "Blender", bg: "#F5792A", text: "black" },
  { name: "Framer", bg: "#0055FF", text: "white" },
  { name: "Flutter", bg: "#02569B", text: "white" },
  { name: "Express", bg: "#303030", text: "white" },
  { name: "MATLAB", bg: "#E16737", text: "white" },
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
          <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-2">
            What I Work With
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
            Skills.
          </h2>
        </motion.div>
        <div className="md:col-span-9">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease, delay: i * 0.03 }}
                className="font-mono-custom text-sm uppercase tracking-wider border border-border px-5 py-3 text-muted-foreground cursor-default transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-transparent"
                style={
                  {
                    "--skill-bg": skill.bg,
                    "--skill-text": skill.text,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = skill.bg;
                  el.style.color = skill.text;
                  el.style.borderColor = skill.bg;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "";
                  el.style.color = "";
                  el.style.borderColor = "";
                }}
              >
                {skill.name}
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
