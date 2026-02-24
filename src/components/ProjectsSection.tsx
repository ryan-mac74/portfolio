import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  years: string;
  logo?: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      years: "February 2026 - Present",
      logo: "/nowsworld.png",
      title: "NowSWorld",
      description:
        "A new Social Media Platform to write down all your thoughts, " +
        "ideas or just what’s on your mind at the moment, depending on your mood ... " +
        "with the possibility to take a quick note or just post news about " +
        "what’s happening in the world from where you are.\n" +
        "It's designed to redefine how people communicate and " +
        "make new connection through unique features and a modern UI.\n" +
        "The goal is to make something different from existing platforms.",
      techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Express", "Node.js", "Prisma", "PostgreSQL"],
      url: "https://www.nowsworld.com",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>
          
          {/* Projects items */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline dot with glow effect */}
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40" style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}></div>
              
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-2 md:gap-0 mb-3 items-start">
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <div className="w-10 h-10 flex items-center justify-center p-1 shrink-0">
                          <img src={project.logo} alt="LOGO" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold italic group-hover:text-white transition-colors">{project.title}</h3>
                    </div>
                    <span className="text-white/100 text-sm">{project.years}</span>
                  </div>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors whitespace-pre-line">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative mt-auto"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
