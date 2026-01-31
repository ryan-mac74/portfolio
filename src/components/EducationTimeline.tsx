import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  location: string;
  grade: string;
  link: string;
}

const EducationTimeline: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      years: "September 2024 - December 2027 (expected)",
      degree: "Bachelor’s in Computer Science",
      institution: "Université de Montréal (UdeM)",
      location: "Montreal, QC, Canada",
      grade: "GPA: 3.413/4.3",
      link: "",
    },
    {
      id: 2,
      years: "September 2023 - December 2023",
      degree: "Certificate of English Proficiency",
      institution: "International TEFL/TESOL Training Institute (ITTI)",
      location: "Antananarivo, Madagascar",
      grade: "Level: C2",
      link: "/itti.pdf",
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line with glow effect */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot with glow */}
              <div className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40" style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}></div>
              
              <div className="glow-card p-6">
                <span className="text-white/100 block mb-1">{item.years}</span>
                <h2 className="text-xl font-bold mb-1">
                  (
                    <a 
                      href={item.link || "#"} 
                      target={item.link ? "_blank" : undefined} 
                      rel="noopener noreferrer" 
                      className="text-white/50"
                      onClick={(e) => {
                        if (!item.link) {
                          e.preventDefault();
                          toast("Document not available yet.");
                        }
                      }}
                    >
                      PDF 
                    </a>
                  ) {item.degree} 
                </h2>
                <p className="text-white/80 mb-1">{item.institution}</p>
                <p className="text-white/70 mb-1">{item.location}</p>
                <p className="text-white/60">{item.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
