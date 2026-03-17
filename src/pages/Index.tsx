import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
        <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 — All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
