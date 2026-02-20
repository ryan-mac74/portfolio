import React from 'react';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, 
  Cpu, Cloud, Terminal, 
  Paintbrush, Zap,
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const iconClass = "w-6 h-6 mr-3 flex-shrink-0";

  const techStackRow1 = [
    { name: "React", icon: <Code2 className={iconClass} /> },
    { name: "Vite", icon: <Zap className={iconClass} /> },
    { name: "Express.js", icon: <Cpu className={iconClass} /> },
    { name: "Next.js", icon: <Code2 className={iconClass} /> },
    { name: "TypeScript", icon: <Code2 className={iconClass} /> },
    { name: "JavaScript", icon: <Code2 className={iconClass} /> },
    { name: "Python", icon: <Cpu className={iconClass} /> },
    { name: "FastAPI", icon: <Cpu className={iconClass} /> },
    { name: "MySQL", icon: <Database className={iconClass} /> },
    { name: "PostgreSQL", icon: <Database className={iconClass} /> },
    { name: "Prisma", icon: <Cpu className={iconClass} /> },
  ];
  
  const techStackRow2 = [
    { name: "HTML", icon: <Code2 className={iconClass} /> },
    { name: "CSS", icon: <Paintbrush className={iconClass} /> },
    { name: "TailwindCSS", icon: <Paintbrush className={iconClass} /> },
    { name: "PHP", icon: <Code2 className={iconClass} /> },
    { name: "Java", icon: <Cpu className={iconClass} /> },
    { name: "Nginx", icon: <ServerCrash className={iconClass} /> },
    { name: "Docker", icon: <Container className={iconClass} /> },
    { name: "Git", icon: <Github className={iconClass} /> },
    { name: "VS Code", icon: <Terminal className={iconClass} /> },
    { name: "Vim", icon: <Terminal className={iconClass} /> },
    { name: "DigitalOcean", icon: <Cloud className={iconClass} /> },
  ];

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    // Duplicate items for seamless scrolling
    return [...items, ...items].map((tech, index) => (
      <span key={index} className="tech-badge-premium mx-5 flex items-center px-6 py-3 min-w-fit">
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section id="tech" className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Top row - scrolling right */}
      <div className="relative overflow-hidden flex">
        <div className="animate-scroll-right flex whitespace-nowrap py-5" style={{ animationDuration: '25s' }}>
          {renderMarqueeItems(techStackRow1)}
        </div>
        <div className="animate-scroll-right flex whitespace-nowrap py-5" style={{ animationDuration: '25s' }}>
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative overflow-hidden mt-10 flex">
        <div className="animate-scroll-left flex whitespace-nowrap py-5" style={{ animationDuration: '25s' }}>
          {renderMarqueeItems(techStackRow2)}
        </div>
        <div className="animate-scroll-left flex whitespace-nowrap py-5" style={{ animationDuration: '25s' }}>
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
