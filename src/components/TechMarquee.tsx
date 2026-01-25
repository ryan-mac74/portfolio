import React from 'react';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, 
  Cpu, Cloud, Terminal, 
  Paintbrush, Layers, Zap 
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const iconClass = "w-5 h-5 mr-2";

  const techStackRow1 = [
    { name: "React", icon: <Code2 className={iconClass} /> },
    { name: "Vite", icon: <Zap className={iconClass} /> },
    { name: "Next.js", icon: <Code2 className={iconClass} /> },
    { name: "Node.js", icon: <ServerCrash className={iconClass} /> },
    { name: "FastAPI", icon: <Cpu className={iconClass} /> },
    { name: "MySQL", icon: <Database className={iconClass} /> },
    { name: "PostgreSQL", icon: <Database className={iconClass} /> },
    { name: "Docker", icon: <Container className={iconClass} /> },
  ];

  { /* name: "TailwindCSS", icon: <Paintbrush className={iconClass} /> */ }
  { /* name: "AWS", icon: <Cloud className={iconClass} /> */ }
  
  const techStackRow2 = [
    { name: "Python", icon: <Terminal className={iconClass} /> },
    { name: "Java", icon: <Cpu className={iconClass} /> },
    { name: "JavaScript", icon: <Code2 className={iconClass} /> },
    { name: "TypeScript", icon: <Code2 className={iconClass} /> },
    { name: "HTML", icon: <Code2 className={iconClass} /> },
    { name: "CSS", icon: <Paintbrush className={iconClass} /> },
    { name: "GitHub", icon: <Github className={iconClass} /> },
    { name: "VS Code", icon: <Terminal className={iconClass} /> },
  ];

  { /* name: "Redis", icon: <Database className={iconClass} /> */ }
  { /* name: "Kubernetes", icon: <Layers className={iconClass} /> */ }

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    // if a seamless continuous scroll isn't needed, no duplication needed.
    return items.map((tech, index) => (
      <span key={index} className="tech-badge-premium mx-5 flex items-center">
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Top row - scrolling right */}
      <div className="relative overflow-hidden ">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
