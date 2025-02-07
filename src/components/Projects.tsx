import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react"; 
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView, useAnimation } from "framer-motion";

const projects = [
  {
    title: "Landing Page",
    description: "Uma Landing Page moderna construída com React e TypeScript",
    image: "/cap-formaçãoLP.JPG",
    github: "https://github.com/pgerbassi/modern-interact-splash-main2",
    demo: "https://www.sejapoliglota.com/",
  },
  {
    title: "Website",
    description: "Um Website personalizado construída com React e TypeScript",
    image: "/prod-pip.JPG",
    github: "https://github.com/pgerbassi/prod-pip-music-magic-main",
    demo: "https://prodpip.vercel.app/",
  },
  {
    title: "Koi 3D",
    description: "Experiência 3D interativa usando Three.js e React Three Fiber",
    image: "/koi-3d.JPG",
    github: "https://github.com/pgerbassi/koi-3d",
    demo: "https://koi-3d.vercel.app/",
  },
  {
    title: "Iphone 15 3D",
    description: "3D Iphone Website usando R3F, GSAP, Reactjs e Three.js",
    image: "/iphone15-3d.JPG",
    github: "https://github.com/pgerbassi/iPhone15Pro",
    demo: "https://iphone15-pro-psi.vercel.app/",
  },
  {
    title: "Avião 3D",
    description: "3D Avião Website usando R3F, GSAP, Reactjs e Three.js",
    image: "/aviao-3d.JPG",
    github: "https://github.com/pgerbassi/3d-wwi-plane",
    demo: "https://3d-wwi-plane.vercel.app/",
  },
  {
    title: "Donut 3D",
    description: "3D Donut Website usando R3F, GSAP, Reactjs e Three.js",
    image: "/donut-3d.JPG",
    github: "https://github.com/pgerbassi/3Donut",
    demo: "https://3donutopt.vercel.app/",
  },
  {
    title: "Menu 3d",
    description: "3D Game menu usando R3F, GSAP, Reactjs e Three.js",
    image: "/menu-3d.JPG",
    github: "https://github.com/pgerbassi/3dViewbubbles",
    demo: "https://3d-viewbubbles-9uzp.vercel.app/",
  },
  {
    title: "Login Animado",
    description: "Login animado usando Javascript e CSS com animações",
    image: "/login-animated.JPG",
    github: "https://github.com/pgerbassi/signin-signup-form",
    demo: "https://signin-signup-form-five.vercel.app/",
  },
  {
    title: "Landing Page",
    description: "Uma Landing Page moderna construída com React e TypeScript",
    image: "/landing-page.JPG",
    github: "https://github.com/pgerbassi/linguistic-adventure-main",
    demo: "https://hiper-poliglota.vercel.app/",
  },
];

export const Projects = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView]);

    return (
      <motion.div 
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.2 
        }}
        className="h-full"
      >
        <Card
          className="group relative h-full overflow-hidden border-primary/20 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_2rem_-0.5rem_#0EA5E9]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="relative p-6">
            <h3 className="mb-2 font-space text-xl font-bold text-primary">
              {project.title}
            </h3>
            <p className="mb-4 text-foreground/80">{project.description}</p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-primary text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_1rem_-0.25rem_#0EA5E9]"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary/10 hover:shadow-[0_0_1rem_-0.25rem_#8B5CF6]"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-space text-4xl font-bold text-foreground">
          Projetos
        </h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 'auto',
              containScroll: 'trimSnaps',
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-1rem)] lg:auto-cols-[calc(31.33%-1rem)] gap-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-y-0 -left-4 -right-4 pointer-events-none">
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-auto">
                <CarouselPrevious className="relative left-0 h-8 w-8 translate-x-0 border-primary text-primary" />
                <CarouselNext className="relative right-0 h-8 w-8 translate-x-0 border-primary text-primary" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};