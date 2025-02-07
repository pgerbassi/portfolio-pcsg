import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "@google/model-viewer/lib/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}

interface ModelProps {
  className?: string;
}

const sections = [
  { 
    id: 'hero', 
    target: '0m 2m 0m', 
    orbit: '0deg 90deg 20m',
    progress: 0
  },
  { 
    id: 'about', 
    target: '2m 4m 4m', 
    orbit: '30deg 75deg 18m',
    progress: 0.25
  },
  { 
    id: 'projects', 
    target: '0m 0m 0m', 
    orbit: '60deg 60deg 15m',
    progress: 0.25
  },
  { 
    id: 'work', 
    target: '-0m -0m 0m', 
    orbit: '90deg 45deg 12m',
    progress: 0.25
  },
  { 
    id: 'contact', 
    target: '-3m -3m 16m', 
    orbit: '120deg 30deg 10m',
    progress: 0.25
  }
];

const HeroModel: React.FC<ModelProps> = ({ className }) => {
  const modelRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Interpolate scroll progress to section transitions
  const sectionProgress = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 1, 2, 3, 4],
    { 
      ease: (t) => t
    }
  );

  useEffect(() => {
    const unsubscribe = sectionProgress.onChange((latest) => {
      // Find the exact section based on progress
      const currentSection = sections.reduce((prev, curr) => 
        Math.abs(curr.progress - latest / 4) < Math.abs(prev.progress - latest / 4) 
          ? curr 
          : prev
      );
      
      if (modelRef.current) {
        // Directly set camera attributes with no interpolation
        modelRef.current.setAttribute('camera-target', currentSection.target);
        modelRef.current.setAttribute('camera-orbit', currentSection.orbit);
      }
      
      setCurrentSection(currentSection);
    });

    return () => unsubscribe();
  }, [sectionProgress]);

  const glbSrc = "./assets/floating_astronaut.glb";
  const iosSrc = "";

  return (
    <div ref={containerRef} className={`${className} w-full h-[600vh]`}>
      <div className="sticky top-0 h-screen">
        <model-viewer 
          ref={modelRef}
          id="astronaut"
          src={glbSrc}
          ios-src={iosSrc}
          //seamless-poster
          environment-image="neutral"
          exposure="1"
          shadow-intensity="1"
          autoplay
          auto-rotate
          //camera-controls
          camera-target={currentSection.target}
          camera-orbit={currentSection.orbit}
          alt="3D Astronaut Model"
        >
        </model-viewer>
      </div>
    </div>
  );
};

export default HeroModel;