import { Card } from "./ui/card";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    title: "Desenvolvedor Front-End",
    company: "Nexyn",
    period: "2024 - Present",
    description: " Implementação de interfaces responsivas e otimização de performance em aplicações React, integração de APIs e desenvolvimento de novas funções, testes e manutenção de código.",
  },
  {
    title: "Desenvolvedor Web",
    company: "P6G Software",
    period: "2022 - 2024",
    description: "Desenvolvimento de websites e aplicações web modernas utilizando Next, React, TypeScript e Three.js.",
  },
  {
    title: "Suporte de TI",
    company: "Angiosuture Equip.",
    period: "2016 - 2022",
    description: "Manutenção e suporte a equipe de desenvolvimento e infraestrutura.",
  },
];

export const Work = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = async () => {
    setIsHovered(true);
    await controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.9
      }
    }));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.stop();
  };

  return (
    <section 
      id="work" 
      className="min-h-screen bg-background py-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center font-space text-4xl font-bold text-foreground"
        >
          Experiência Profissional
        </motion.h2>
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index} 
                experience={experience} 
                index={index}
                isHovered={isHovered}
                controls={controls}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ 
  experience, 
  index,
  isHovered,
  controls
}: { 
  experience: WorkExperience, 
  index: number,
  isHovered: boolean,
  controls: any
}) => {
  return (
    <motion.div
      custom={index}
      animate={controls}
      initial={{ 
        opacity: 0, 
        x: index % 2 === 0 ? -50 : 50 
      }}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 relative`}
    >
      {/* Timeline dot */}
      <motion.div 
        animate={{ 
          scale: isHovered ? 1 : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ 
          duration: 0.3,
          delay: index * 0.2
        }}
        className="absolute left-4 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2" 
      />

      {/* Content */}
      <div className="w-full md:w-1/2">
        <Card className="group relative overflow-hidden bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
          <motion.div 
            animate={{ 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.2
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
          />
          <h3 className="mb-2 font-space text-xl font-bold text-foreground">
            {experience.title}
          </h3>
          <h4 className="mb-2 font-space text-lg text-primary">
            {experience.company}
          </h4>
          <p className="mb-4 text-sm text-foreground/60">{experience.period}</p>
          <p className="text-foreground/80">{experience.description}</p>
        </Card>
      </div>
    </motion.div>
  );
};