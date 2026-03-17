import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

const projects = [
  {
    num: "01",
    title: "E-Commerce Engine",
    description: "High-performance storefront handling 50k+ concurrent users with sub-200ms response times.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    num: "02",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform processing 2M+ events daily with zero downtime.",
    tags: ["TypeScript", "D3.js", "Redis"],
  },
  {
    num: "03",
    title: "Design System",
    description: "Component library serving 12 product teams with 99.8% accessibility compliance.",
    tags: ["React", "Storybook", "Figma API"],
  },
  {
    num: "04",
    title: "Infrastructure CLI",
    description: "Developer tooling that reduced deployment time by 80% across 200+ microservices.",
    tags: ["Go", "Docker", "Kubernetes"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      className="group relative border border-border hover:border-foreground transition-colors duration-200 p-8 md:p-10"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="font-mono-custom text-sm text-muted-foreground">{project.num}</span>
        <motion.div
          className="h-2 w-2 bg-muted-foreground group-hover:bg-foreground transition-colors duration-200"
        />
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4 group-hover:translate-x-1 transition-transform duration-200">
        {project.title}
      </h3>
      <p className="font-mono-custom text-sm text-muted-foreground leading-relaxed mb-8">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-custom text-xs uppercase tracking-wider border border-border px-3 py-1 text-muted-foreground group-hover:border-muted-foreground transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-[20vh] px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-16"
      >
        <p className="font-mono-custom text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
          Projects
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
        {projects.map((project, i) => (
          <div key={project.num} className="border-r border-b border-border">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
